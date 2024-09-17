class Booking {
    constructor(name, email, checkIn, checkOut, discount, room) {
      this.name = name;
      this.email = email;
      this.checkIn = checkIn;
      this.checkOut = checkOut;
      this.discount = discount;
      this.room = room;
    }
  
    get fee() {
      let days = (this.checkOut - this.checkIn) / (1000 * 60 * 60 * 24) + 1;
      let roomFee = this.room.rate * days * (1 - this.room.discount / 100);
      return roomFee * (1 - this.discount / 100);
    }
  }