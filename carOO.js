//part 1
function Vehicle(make,model,year){
    this.make = make;
    this.model = model;
    this.year = year;
}
Vehicle.prototype.honk = function(){
    return "Beep.";
}
Vehicle.prototype.toString = function(){
    return this.make + "" + this.model + "(" +this.year+")";
}
let myFirstVehicle = new Vehicle ("Honda","Monster Truck","1999");
myFirstVehicle.honk();
myFirstVehicle.toString();
//part 2
class Vehicle {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    honk() {
      return "Beep.";
    }
  
    toString() {
      return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
    }
  }
  
  class Car extends Vehicle {
    constructor(make, model, year) {
      super(make, model, year);
      this.numWheels = 4;
    }
  }
  
  let myFirstCar = new Car("Toyota", "Corolla", 2005);
  console.log(myFirstCar.toString()); // "The vehicle is a Toyota Corolla from 2005."
  console.log(myFirstCar.honk());     // "Beep."
  console.log(myFirstCar.numWheels);  // 4
  //part 3
  class Vehicle {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    honk() {
      return "Beep.";
    }
  
    toString() {
      return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
    }
  }
  
  class Motorcycle extends Vehicle {
    constructor(make, model, year) {
      super(make, model, year);
      this.numWheels = 2;
    }
  
    revEngine() {
      return "VROOM!!!";
    }
  }
  
  let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);
  console.log(myFirstMotorcycle.toString()); // "The vehicle is a Honda Nighthawk from 2000."
  console.log(myFirstMotorcycle.honk());     // "Beep."
  console.log(myFirstMotorcycle.revEngine()); // "VROOM!!!"
  console.log(myFirstMotorcycle.numWheels);  // 2
  //Part 4
  let garage = new Garage(2);
    console.log(garage.vehicles); // []
    console.log(garage.add(new Car("Hyundai", "Elantra", 2015))); // "Vehicle added!"
    console.log(garage.vehicles); // [Car]
    console.log(garage.add("Taco")); // "Only vehicles are allowed in here!"

    console.log(garage.add(new Motorcycle("Honda", "Nighthawk", 2000))); // "Vehicle added!"
    console.log(garage.vehicles); // [Car, Motorcycle]

    console.log(garage.add(new Motorcycle("Honda", "Nighthawk", 2001))); // "Sorry, we're full."