
import { GoogleGenAI } from "@google/genai";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import Templates from "@/app/(data)/Templates";
import { currentUser } from "@clerk/nextjs/server";

// import { APIError } from "@/lib/APIError";
// import { APIResponse } from "@/lib/APIResponse";
import { NextResponse } from "next/server";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!, 
});

export async function POST(req: Request) {
  try {
    const { formData, templateSlug } = await req.json();

    const user = await currentUser();
    const email = user?.primaryEmailAddress?.emailAddress;
    if (!email) {
      return NextResponse.json(
        { error: "User not authenticated" },
        { status: 401 }
      );
      // return new APIError("User not authenticated", 401);
    }

    const selectedTemplate = Templates.find(
      (item) => item.slug === templateSlug
    );

    const SelectedPrompt = selectedTemplate?.aiPrompt ?? "";
    const FinalPrompt = JSON.stringify(formData) + ", " + SelectedPrompt;

    const chatResponse = await ai.models.generateContent({
      model: "gemini-flash-latest",
      contents: FinalPrompt,
    });
    
    const text = chatResponse.text;

    await db.insert(AIOutput).values({
      formData: JSON.stringify(formData),
      templateSlug,
      aiResponse: text,
      createdBy: email,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({ text });
    // return new APIResponse({ text }, 200);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
    // return new APIError("Internal error", 500);
  }
}
