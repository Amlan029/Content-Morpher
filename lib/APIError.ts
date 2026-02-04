import { NextResponse } from "next/server";

export class APIError {
  constructor(message: string, status = 500) {
    return NextResponse.json(
      {
        success: false,
        error: message,
      },
      { status }
    );
  }
}
