import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/utils/db";
import { UserSubscription } from "@/utils/schema"; 
import { eq } from "drizzle-orm";


export async function GET() {
  try {
    const user = await currentUser();
    const email = user?.primaryEmailAddress?.emailAddress;
    if (!user || !email) {
      return NextResponse.json({ isSubscribed: false });
    }

    // Query to DB for subscription status
    const res = await db
      .select()
      .from(UserSubscription)
      .where(eq(UserSubscription.email, email))
      .limit(1);

    if (res.length === 0) {
      return NextResponse.json({ isSubscribed: false });
    }

    return NextResponse.json({ isSubscribed: res[0].active });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ isSubscribed: false });
  }
}
