interface Room{
    rate: number;
    discount: number;
}

class Booking {
    name: string;
    email: string;
    checkIn: Date;
    checkOut: Date;
    discount: number;
    room: Room;

    constructor(name: string, email: string, checkIn: Date, checkOut: Date, discount: number, room: Room){
        this.name = name;
        this.email = email;
        this.checkIn = checkIn;
        this.checkOut = checkOut;
        this.discount = discount;
        this.room = room;
    }
    
    get fee(): number {
        const days = (this.checkOut.getDate() - this.checkIn.getDate()) / (1000 * 60 * 60 * 24) + 1;
        const roomFee = this.room.rate * days * (1 - this.room.discount / 100);
        return roomFee * (1 - this.discount / 100);
    }
}


export default Booking;