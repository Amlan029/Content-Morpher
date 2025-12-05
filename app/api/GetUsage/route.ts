import { NextRequest,NextResponse } from "next/server";
import { db } from "@/utils/db";
import { eq } from "drizzle-orm";
import { auth, currentUser } from "@clerk/nextjs/server";
import { AIOutput } from "@/utils/schema";

export async function GET(){
    try {
        const { userId } = await auth();
        if (!userId) {
          return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }
    
     
        const user = await currentUser();
        const email = user?.primaryEmailAddress?.emailAddress;
    
        if (!email) {
          return NextResponse.json({ error: "No email on user" }, { status: 400 });
        }
    
        const result = await db
          .select()
          .from(AIOutput)
          .where(eq(AIOutput.createdBy, email)) 
    
        return NextResponse.json(result, { status: 200 });
      } catch (error) {
        console.error("GetUsage error", error);
        return NextResponse.json(
          { error: "Something went wrong" },
          { status: 500 }
        );
      }

}