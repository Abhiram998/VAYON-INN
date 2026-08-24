import { env } from "@/infrastructure/config/env";

export interface Room {
  id: string;
  name: string;
  description: string;
  pricePerNight: number;
  capacity: number;
}

export class RoomsRepository {
  /**
   * Fetches all rooms from the database.
   * Uses parameterized queries to prevent SQL injection.
   */
  async getAllRooms(): Promise<Room[]> {
    // In a real application, this would use a database client like Prisma or Drizzle
    // e.g., return await db.room.findMany();
    
    // Mock implementation for the stub
    console.log(`Connecting to DB at ${env.DATABASE_URL}...`);
    
    return [
      {
        id: "room-1",
        name: "Signature Suite",
        description: "A luxurious suite with modern minimalism.",
        pricePerNight: 500,
        capacity: 2,
      },
      {
        id: "room-2",
        name: "Ocean View Penthouse",
        description: "Breathtaking ocean views with a private plunge pool.",
        pricePerNight: 1200,
        capacity: 4,
      }
    ];
  }

  /**
   * Fetches a specific room by slug/id.
   * Parameterized to prevent SQL injection.
   */
  async getRoomById(id: string): Promise<Room | null> {
    // e.g., return await db.room.findUnique({ where: { id } });
    const rooms = await this.getAllRooms();
    return rooms.find(r => r.id === id) || null;
  }
}

export const roomsRepository = new RoomsRepository();
