interface Booking {
    checkIn: Date;
    checkOut: Date;
  }
  
  class Room {
    name: string;
    bookings: Booking[];
    rate: number;
    discount: number;
  
    constructor(name: string, rate: number, discount: number) {
      this.name = name;
      this.bookings = [];
      this.rate = rate;
      this.discount = discount;
    }
  
    isOccupied(date: Date): boolean {
      return this.bookings.some(booking => date >= booking.checkIn && date <= booking.checkOut);
    }
  
    occupancyPercentage(startDate: Date, endDate: Date): number {
      const totalDays = (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24) + 1;
      let occupiedDays = 0;
  
      this.bookings.forEach(booking => {
        const bookingStart = booking.checkIn >= startDate ? booking.checkIn : startDate;
        const bookingEnd = booking.checkOut <= endDate ? booking.checkOut : endDate;
        if (bookingStart <= bookingEnd) {
          occupiedDays += (bookingEnd.getTime() - bookingStart.getTime()) / (1000 * 60 * 60 * 24) + 1;
        }
      });
  
      return (occupiedDays / totalDays) * 100;
    }
  
    static totalOccupancyPercentage(rooms: Room[], startDate: Date, endDate: Date): number {
      const totalPercentage = rooms.reduce((acc, room) => acc + room.occupancyPercentage(startDate, endDate), 0);
      return totalPercentage / rooms.length;
    }
  
    static availableRooms(rooms: Room[], startDate: Date, endDate: Date): Room[] {
      return rooms.filter(room => !room.bookings.some(booking => 
        booking.checkIn <= endDate && booking.checkOut >= startDate
      ));
    }
  }
  
  export default Room;
  