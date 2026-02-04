import { NextRequest,NextResponse } from "next/server";
import { db } from "@/utils/db";
import { eq } from "drizzle-orm";
import { auth, currentUser } from "@clerk/nextjs/server";
import { AIOutput } from "@/utils/schema";
// import { APIError } from "@/lib/APIError";
// import { APIResponse } from "@/lib/APIResponse";

export async function GET(){
    try {
        const { userId } = await auth();
        if (!userId) {
          return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
          // return new APIError("Unauthorized", 401);
        }
    
     
        const user = await currentUser();
        const email = user?.primaryEmailAddress?.emailAddress;
    
        if (!email) {
          return NextResponse.json({ error: "No email on user" }, { status: 400 });
          // return new APIError("No email on user", 400);
        }
    
        const result = await db
          .select()
          .from(AIOutput)
          .where(eq(AIOutput.createdBy, email)) 
    
        return NextResponse.json(result, { status: 200 });
        // return new APIResponse(result, 200);
      } catch (error) {
        console.error("GetUsage error", error);
        return NextResponse.json(
          { error: "Something went wrong" },
          { status: 500 }
        );
        // return new APIError("Something went wrong", 500);
      }

}