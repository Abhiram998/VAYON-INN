import { Room, roomsRepository } from "@/repositories/rooms.repository";

export class RoomsService {
  /**
   * Retrieves all available rooms.
   * Contains business logic and authorization checks if necessary.
   */
  async getAvailableRooms(): Promise<Room[]> {
    // Add any business logic here (e.g., filtering out rooms undergoing maintenance)
    const rooms = await roomsRepository.getAllRooms();
    
    // Example: Only return rooms with capacity > 0
    return rooms.filter(room => room.capacity > 0);
  }

  /**
   * Retrieves a specific room.
   */
  async getRoomDetails(id: string): Promise<Room | null> {
    // Business logic: Ensure the user has permission to view this room (if applicable)
    return await roomsRepository.getRoomById(id);
  }
}

export const roomsService = new RoomsService();
