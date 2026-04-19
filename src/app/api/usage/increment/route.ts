import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

export async function POST() {
  const { userId } = await auth();

  // 🔐 Protect route
  if (!userId) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const updated = await prisma.usage.upsert({
    where: { userId }, // 🔥 real user
    update: {
      count: { increment: 1 },
    },
    create: {
      userId,
      count: 1,
    },
  });

  return NextResponse.json({
    count: updated.count,
  });
}