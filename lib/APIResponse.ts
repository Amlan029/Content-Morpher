import { NextResponse } from "next/server";

export function APIResponse(
  data?: any,
  status?: number
): Response {
  return NextResponse.json(
    {
      success: true,
      data: data ?? null,
    },
    { status: status ?? 200 } // 👈 default to 200
  );
}
