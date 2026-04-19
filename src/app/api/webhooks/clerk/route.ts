import { Webhook } from "svix";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { error } from "console";

type ClerkUserCreatedEvent = {
  type: "user.created";
  data: {
    id: string;
    email_addresses: {
      email_address: string;
    }[];
  };
};

export async function POST(req: Request) {
  const body = await req.text();

  const headerPayload = await headers();

  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new NextResponse("Missing headers", { status: 400 });
  }

  const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET!);

  let event: unknown;

  try {
    event = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    });
  } catch (err) {
    return new NextResponse("Invalid signature", { status: 400 });
  }

  // ✅ Type guard
  if (
    typeof event === "object" &&
    event !== null &&
    "type" in event &&
    "data" in event
  ) {
    const e = event as ClerkUserCreatedEvent;

    if (e.type === "user.created") {
      const { id, email_addresses } = e.data;

      await prisma.user.create({
        data: {
          clerkId: id,
          email: email_addresses?.[0]?.email_address || "",
        },
      });
    }
  }

  return NextResponse.json({ success: true });
}