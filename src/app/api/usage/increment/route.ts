import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

const USER_ID = "demo-user";

export async function POST() {
  const updated = await prisma.usage.upsert({
    where: { userId: USER_ID },
    update: {
      count: { increment: 1 },
    },
    create: {
      userId: USER_ID,
      count: 1,
    },
  });

  return NextResponse.json({
    count: updated.count,
  });
}