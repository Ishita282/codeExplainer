import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

export async function GET() {
  try {
    const { userId } = await auth();

    // 🔐 Protect route
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const usage = await prisma.usage.findUnique({
      where: { userId }, // 🔥 real user
    });

    return NextResponse.json({
      count: usage?.count ?? 0,
    });
  } catch (err) {
    console.error("Usage API error:", err);

    return NextResponse.json(
      { count: 0, error: "Failed to fetch usage" },
      { status: 500 }
    );
  }
}