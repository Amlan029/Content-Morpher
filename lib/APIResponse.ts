import { NextResponse } from "next/server";

export class APIResponse<T> {
  constructor(data?: T, status = 200) {
    return NextResponse.json(
      {
        success: true,
        data: data ?? null,
      },
      { status }
    );
  }
}
