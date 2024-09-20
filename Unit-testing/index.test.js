const { Room, Booking } = require('./index');

describe('Room', () => {
  test('isOccupied devuelve verdadero si la habitación está ocupada en la fecha indicada', () => {
    const room = new Room('Room 1', 10000, 10);
    const booking = new Booking('John Doe', 'john@example.com', new Date('2024-09-10'), new Date('2024-09-15'), 0, room);
    room.bookings.push(booking);
    
    expect(room.isOccupied(new Date('2024-09-12'))).toBe(true);
    expect(room.isOccupied(new Date('2024-09-16'))).toBe(false);
  });

  test('occupancyPercentage calcula el porcentaje correcto de días ocupados', () => {
    const room = new Room('Room 1', 10000, 10);
    const booking1 = new Booking('John Doe', 'john@example.com', new Date('2024-09-10'), new Date('2024-09-12'), 0, room);
    const booking2 = new Booking('Jane Doe', 'jane@example.com', new Date('2024-09-14'), new Date('2024-09-16'), 0, room);
    room.bookings.push(booking1, booking2);
    
    const percentage = room.occupancyPercentage(new Date('2024-09-10'), new Date('2024-09-20'));
    expect(percentage).toBeCloseTo(54.55);
  });

  test('availableRooms devuelve habitaciones que no están ocupadas en todo el rango', () => {
    const room1 = new Room('Room 1', 10000, 10);
    const room2 = new Room('Room 2', 10000, 10);
    const booking = new Booking('John Doe', 'john@example.com', new Date('2024-09-10'), new Date('2024-09-15'), 0, room1);
    room1.bookings.push(booking);
    
    const availableRooms = Room.availableRooms([room1, room2], new Date('2024-09-10'), new Date('2024-09-12'));
    expect(availableRooms).toContain(room2);
    expect(availableRooms).not.toContain(room1);
  });
});

describe('Booking', () => {
  test('la tarifa calcula la tarifa correcta, incluidos los descuentos', () => {
    const room = new Room('Room 1', 10000, 10);
    const booking = new Booking('John Doe', 'john@example.com', new Date('2024-09-10'), new Date('2024-09-12'), 20, room); 
    expect(booking.fee).toBe(21600);
  });
  
  test('la tarifa calcula la tarifa con el descuento del 100%', () => {
    const room = new Room('Room 1', 10000, 100);
    const booking = new Booking('John Doe', 'john@example.com', new Date('2024-09-10'), new Date('2024-09-12'), 20, room); 
    expect(booking.fee).toBe(0);
  });

  test('la tarifa calcula la tarifa con el descuento del 0%', () => {
    const room = new Room('Room 1', 10000, 0);
    const booking = new Booking('John Doe', 'john@example.com', new Date('2024-09-10'), new Date('2024-09-12'), 20, room); 
    expect(booking.fee).toBe(20000);
  });
});
