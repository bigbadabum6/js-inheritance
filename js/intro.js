class Dimensions {
  constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }
}

const dimensions = new Dimensions(
  2,
  3,
  4
);
console.log(
  "dimensions :>> ",
  dimensions
);

const date = new Date(2005, 4, 5);
const year = new Date();

class Vehicle extends Dimensions {
  constructor(
    length,
    width,
    height,
    brand,
    model,
    manufactureDate
  ) {
    super(length, width, height);
    this.brand = brand;
    this.model = model;
    this.model = model;
    this.manufactureDate =
      manufactureDate;
  }
  get maxSize() {
    return (
      this.width *
      this.length *
      this.height
    );
  }
  get age() {
    console.log(
      year.getFullYear() -
        this.manufactureDate.getFullYear()
    );
  }
}

const vehicle = new Vehicle(
  2,
  3,
  4,
  "Reno",
  "Master 2",
  date
);
console.log("vehicle :>> ", vehicle);

class PassengerTransport extends Vehicle {
  constructor(
    length,
    width,
    height,
    brand,
    model,
    manufactureDate,
    passengerLimit,
    passengerCount
  ) {
    super(
      length,
      width,
      height,
      brand,
      model,
      manufactureDate
    );
    this.passengerLimit =
      passengerLimit;
    this.passengerCount =
      passengerCount;
  }
  addPassenger() {
    if (
      this.passengerCount <=
      this.passengerLimit
    ) {
      this.passengerCount++;
      return true;
    }
    return false;
  }
}
const passengerTransport =
  new PassengerTransport(
    5,
    4,
    6,
    "Volkswagen",
    "Sprinter",
    2003,
    18,
    15
  );
console.log(
  "passengerTransport :>> ",
  passengerTransport
);

class FreightTransport extends PassengerTransport {
  constructor(
    length,
    width,
    height,
    brand,
    model,
    manufactureDate,
    passengerLimit,
    passengerCount,
    capacity
  ) {
    super(
      length,
      width,
      height,
      brand,
      model,
      manufactureDate,
      passengerLimit,
      passengerCount
    );
    this.capacity = capacity;
  }
  checkLoadingPossibility(weight) {
    return this.capacity >= weight;
  }
}

const freightTransport =
  new FreightTransport(
    6,
    8,
    9,
    "Man",
    "X",
    2003,
    0,
    0,
    500
  );
