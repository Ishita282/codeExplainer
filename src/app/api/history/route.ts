import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// ✅ GET history from DB
export async function GET() {
  const history = await prisma.history.findMany({
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(history);
}

// ✅ ADD to DB
export async function POST(req: Request) {
  const body = await req.json();

  const newItem = await prisma.history.create({
    data: {
      userId: "temp-user", // ⚠️ temporary (we fix later)
      code: body.code,
      explanation: body.explanation,
      mode: body.mode,
    },
  });

  return NextResponse.json(newItem);
}

// ✅ DELETE from DB
export async function DELETE() {
  await prisma.history.deleteMany();
  return NextResponse.json({ success: true });
}