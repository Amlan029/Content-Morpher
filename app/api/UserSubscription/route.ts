
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/utils/db";
import { UserSubscription } from "@/utils/schema";
import { currentUser } from "@clerk/nextjs/server";



export async function POST(req: NextRequest) {
  try {
    const {  paymentId } = await req.json();

    // get user from auth 
    const user = await currentUser();
    const email = user?.emailAddresses[0]?.emailAddress ?? "";
    const userName = user?.fullName ?? "";

    await db.insert(UserSubscription).values({
      email,
      userName,
      active: true,
      paymentId,
      joinDate: new Date().toISOString(),
    });
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
