import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

const USER_ID = "demo-user";

export async function GET() {
  try {
    const usage = await prisma.usage.findUnique({
      where: { userId: USER_ID },
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