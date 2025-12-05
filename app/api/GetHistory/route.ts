import { NextResponse } from "next/server";
import { auth, currentUser } from "@clerk/nextjs/server";
import { db } from "@/utils/db";          // 👈 your drizzle db instance
import { AIOutput } from "@/utils/schema"; // 👈 your drizzle table
import { desc, eq } from "drizzle-orm";

export async function GET() {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // If you stored EMAIL in `createdBy`
    const user = await currentUser();
    const email = user?.primaryEmailAddress?.emailAddress;

    if (!email) {
      return NextResponse.json({ error: "No email on user" }, { status: 400 });
    }

    const history = await db
      .select()
      .from(AIOutput)
      .where(eq(AIOutput.createdBy, email)) // checks the user email as given
      .orderBy(desc(AIOutput.createdAt));   // 🔥 latest first

    return NextResponse.json(history, { status: 200 });
  } catch (error) {
    console.error("GetHistory error", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
