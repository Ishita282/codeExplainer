import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { code, explanation, mode } = body;

    if (!code || !explanation) {
      return NextResponse.json(
        { error: "Missing fields" },
        { status: 400 }
      );
    }

    // ✅ Ensure user exists (using clerkId, not id)
    await prisma.user.upsert({
      where: { clerkId: "demo-user" },
      update: {},
      create: {
        clerkId: "demo-user",
        email: "demo@example.com",
      },
    });

    // ✅ Create history entry
    const entry = await prisma.history.create({
      data: {
        userId: "demo-user", // matches clerkId relation
        code,
        explanation,
        mode,
      },
    });

    return NextResponse.json(entry);
  } catch (error) {
    console.error("POST ERROR:", error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}