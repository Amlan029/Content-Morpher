import { NextRequest, NextResponse } from "next/server";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { APIError } from "@/lib/APIError";
import { APIResponse } from "@/lib/APIResponse";

export async function DELETE(req: NextRequest){
    try {
        const {id} = await req.json();
        //  Validate id
        if (typeof id !== "number") {
            return  APIError("Invalid ID", 400);
            // NextResponse.json({ success: false,message:"Invalid ID",status: 400});
        }

        await db.delete(AIOutput).where(eq(AIOutput.id, id));
        // response
        // return NextResponse.json({ success: true,message:"History deleted Successfully",  status: 200 });
        return  APIResponse("History deleted successfully", 200);
    } catch (error) {
        console.error("Error Deleting History: ",error);
        // return NextResponse.json({ success: false, status: 500});
        return  APIError("Failed to delete history", 500);
    }
}