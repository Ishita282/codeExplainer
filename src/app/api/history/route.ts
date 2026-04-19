import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// ✅ GET
export async function GET() {
  const history = await prisma.history.findMany({
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(history);
}

// ✅ POST
export async function POST(req: Request) {
  const body = await req.json();

  const entry = await prisma.history.create({
    data: {
      userId: "demo-user",
      code: body.code,
      explanation: body.explanation,
      mode: body.mode,
    },
  });

  return NextResponse.json(entry);
}

// ✅ DELETE
export async function DELETE() {
  await prisma.history.deleteMany();

  return NextResponse.json({ success: true });
}