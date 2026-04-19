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

    await prisma.user.upsert({
      where: { id: "demo-user" },
      update: {},
      create: { id: "demo-user" },
    });

    const entry = await prisma.history.create({
      data: {
        userId: "demo-user",
        code,
        explanation,
        mode,
      },
    });

    return NextResponse.json(entry);
  } catch (error) {
    console.error("POST ERROR:", error);

    // ✅ ALWAYS return JSON
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}