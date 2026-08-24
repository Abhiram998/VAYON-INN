import { NextResponse } from "next/server";
import { roomsService } from "@/services/rooms.service";

export async function GET() {
  try {
    // 1. Authentication & Authorization checks would go here.
    // Example: const session = await getSession(); if (!session) return new NextResponse("Unauthorized", { status: 401 });

    // 2. Fetch data via Service layer
    const rooms = await roomsService.getAvailableRooms();

    // 3. Return sanitized response
    return NextResponse.json(rooms);
  } catch (error) {
    console.error("Error fetching rooms:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
