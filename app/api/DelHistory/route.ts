import { NextRequest, NextResponse } from "next/server";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { eq } from "drizzle-orm";

export async function DELETE(req: NextRequest){
    try {
        const {id} = await req.json();
        //  Validate id
        if (typeof id !== "number") {
            return NextResponse.json({ success: false,message:"Invalid ID",status: 400});
        }

        await db.delete(AIOutput).where(eq(AIOutput.id, id));
        // response
        return NextResponse.json({ success: true,message:"History deleted Successfully",  status: 200 });
    } catch (error) {
        console.error("Error Deleting History: ",error);
        return NextResponse.json({ success: false, status: 500});
    }
}