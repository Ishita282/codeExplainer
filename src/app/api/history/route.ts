import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

// ✅ GET (user-specific history)
export async function GET() {
  const { userId } = await auth();

  if (!userId) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const history = await prisma.history.findMany({
    where: { userId }, // 🔥 only this user's data
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(history);
}

// ✅ POST (save history for user)
export async function POST(req: Request) {
  const { userId } = await auth();

  if (!userId) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const body = await req.json();

  const entry = await prisma.history.create({
    data: {
      userId, // 🔥 real user
      code: body.code,
      explanation: body.explanation,
      mode: body.mode,
    },
  });

  return NextResponse.json(entry);
}

// ✅ DELETE (clear ONLY this user's history)
export async function DELETE() {
  const { userId } = await auth();

  if (!userId) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  await prisma.history.deleteMany({
    where: { userId }, // 🔥 prevent deleting others
  });

  return NextResponse.json({ success: true });
}