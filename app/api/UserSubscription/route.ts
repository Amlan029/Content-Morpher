
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/utils/db";
import { UserSubscription } from "@/utils/schema";
import { currentUser } from "@clerk/nextjs/server";
import { APIResponse } from "@/lib/APIResponse";
import { APIError } from "@/lib/APIError";



export async function POST(req: NextRequest) {
  try {
    const {  paymentId } = await req.json();

    // get user from auth 
    const user = await currentUser();
    const email = user?.emailAddresses[0]?.emailAddress ?? "";
    const userName = user?.fullName ?? "";

    //store user subcription info to DB
    await db.insert(UserSubscription).values({
      email,
      userName,
      active: true,
      paymentId,
      joinDate: new Date().toISOString(),
    });
    // return NextResponse.json({ success: true }, { status: 200 });
    return  APIResponse({ success: true }, 200);
  } catch (error) {
    console.error(error);
    // return NextResponse.json({ success: false }, { status: 500 });
    return  APIError("Something went wrong", 500);
  }
}
