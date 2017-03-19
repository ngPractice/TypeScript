/**
  TypeScript Class
  Every typescript variables should have explicity type.
  Class should have a constructor
  Functions should have return type
  If require then use access specifiers like private, protected, and public
*/
class Car {
  // Class member variable.
  private engine: string;
  // Constructor use to initialize class member variables.
  constructor(engine: string) {
    this.engine = engine;
  }

  /**
    Member Functions
    Start Function: Use to start an engine and returns nothing.
    Stop Function: Use to stop an engine and returns nothing.
  */
  start(): void {
    alert('Engine started:' + this.engine);
  }

  stop(): void {
    alert('Engine stopped:' + this.engine);
  }
}

/**
  TypeScript allows to write pure JavaScript code.
  This code will run on load event of browser and instantiate Car object.
  Called start() and stop() methods of class Car.
*/
window.onload = function () {

  // Use "let or cost" keywords instead of "var" keyword to define a variable.
  // let and cost keywords supports for block scoping.
  const car = new Car('V8');
  car.start();
  car.stop();
}
