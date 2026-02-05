import { NextResponse } from "next/server";

export function APIError(
  message: string,
  status?: number
): Response {
  return NextResponse.json(
    {
      success: false,
      error: message,
    },
    { status: status ?? 500 } // 👈 default to 500 ONLY for errors
  );
}
