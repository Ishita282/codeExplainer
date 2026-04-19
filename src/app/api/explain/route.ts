import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

export async function POST(req: Request) {
  try {
    const { userId } = await auth();

    // 🔐 Protect route
    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const body = await req.json();
    const { code, explanation, mode } = body;

    if (!code || !explanation) {
      return NextResponse.json(
        { error: "Missing fields" },
        { status: 400 }
      );
    }

    // ✅ Ensure user exists in DB
    await prisma.user.upsert({
      where: { clerkId: userId },
      update: {},
      create: {
        clerkId: userId,
        email: "", // optional for now
      },
    });

    // ✅ Save history linked to user
    const entry = await prisma.history.create({
      data: {
        userId: userId, // 🔥 real user now
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