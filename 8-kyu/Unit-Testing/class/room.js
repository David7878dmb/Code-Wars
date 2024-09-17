class Room {
    constructor(name, rate, discount) {
      this.name = name;
      this.bookings = [];
      this.rate = rate;
      this.discount = discount;
    }
  
    isOccupied(date) {
      return this.bookings.some(booking => date >= booking.checkIn && date <= booking.checkOut);
    }
  
    occupancyPercentage(startDate, endDate) {
      let totalDays = (endDate - startDate) / (1000 * 60 * 60 * 24) + 1;
      let occupiedDays = 0;
  
      this.bookings.forEach(booking => {
        let bookingStart = booking.checkIn >= startDate ? booking.checkIn : startDate;
        let bookingEnd = booking.checkOut <= endDate ? booking.checkOut : endDate;
        if (bookingStart <= bookingEnd) {
          occupiedDays += (bookingEnd - bookingStart) / (1000 * 60 * 60 * 24) + 1;
        }
      });
  
      return (occupiedDays / totalDays) * 100;
    }
  
    static totalOccupancyPercentage(rooms, startDate, endDate) {
      let totalPercentage = rooms.reduce((acc, room) => acc + room.occupancyPercentage(startDate, endDate), 0);
      return totalPercentage / rooms.length;
    }
  
    static availableRooms(rooms, startDate, endDate) {
      return rooms.filter(room => !room.bookings.some(booking => 
        (booking.checkIn <= endDate && booking.checkOut >= startDate)
      ));
    }
  }
  
  module.exports = Room;