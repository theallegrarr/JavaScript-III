/*

  In order to do these exercises you'll need your newly acquired knowledge on
  constructor functions, methods, prototypes and the `this` keyword.
  Here's an example of an exercise:

  TASK 0:

  - Build an Airplane constructor that takes a name.
  - Give airplanes the ability to take off and land.
  - If a plane takes off, its "isFlying" property is true.
  - If a plane lands, its "isFlying" property is false.

  SOLUTION CODE:

  function Airplane(name) {
    this.name = name;
    this.isFlying = false;
  }
  Airplane.prototype.takeOff = function () {
    this.isFlying = true;
  }
  Airplane.prototype.land = function () {
    this.isFlying = false;
  }

  HOW TO TEST OUR SOLUTION:

  const jumbo = new Airplane('Jumbo');
  console.log(jumbo.name)              // 'Jumbo'
  console.log(jumbo.isFlying)          // false
  jumbo.takeOff();
  console.log(jumbo.isFlying)          // true
  jumbo.land();
  console.log(jumbo.isFlying)          // false
*/


/*

  TASK 1

  - Build a Person Constructor that takes name and age.
  - Give persons the ability to greet by returning a string stating 
    name and age.
  - Give persons the ability to eat edibles.
  - When eating an edible, it should be pushed into a "stomach" property which
    is an array.
  - Give persons the ability to poop.
  - When pooping, the stomach should empty.

*/

  function Person(theName, theAge) {
    this.name = theName;
    this.age = Number(theAge);
    this.stomach = [];
  }

  Person.prototype.greet = function(){
    return `My name is ${this.name}, i am ${this.age} years old`;
  };
  Person.prototype.eat = function(food){
    this.stomach.push(food);
    console.log(this.stomach);
  };
  Person.prototype.poop = function(){
    this.stomach = [];
    console.log(this.stomach);
  };

  let john = new Person('John', 22);
  console.log(john.greet());
  john.eat('chicken');
  john.eat('burger');
  john.poop();

/*
  TASK 2

  - Build a Car constructor that takes model name and make.
  - Give cars the ability to drive a distance.
  - By driving a car, the distance driven should be added to an "odometer" 
    property.
  - Give cars the ability to crash.
  - A crashed car can't be driven any more. Attempts return a string 
    "I crashed at x miles!", x being the miles in the odometer.
  - Give cars the ability to be repaired.
  - A repaired car can be driven again.

*/
function Car(theModel, theMake) {
  this.model = theModel;
  this.make = theMake;
  this.odometer = 0;
  this.crash = '';
  this.canDrive = true;
}

Car.prototype.drive = function(){
  if(this.canDrive == true){
    this.odometer += 10;
    console.log('Car was driven');
    return this.odometer;
  }
  return `${this.make} ${this.model} has crashed`;
}

Car.prototype.damaged = function() {
    this.canDrive = false;
    console.log('Car crashed');
    this.crash = `${this.make} ${this.model} crashed at ${this.odometer} miles!`;
    return this.crash;
}

Car.prototype.repair = function(){
  this.canDrive = true;
  console.log('Car repaired');
  return `${this.make} ${this.model} has been repaired`;
};

let audi = new Car('Audi', 'A600');
console.log(audi);

audi.drive();
console.log(audi);

audi.damaged();
console.log(audi);

audi.repair();
console.log(audi);

/*
  TASK 3

  - Build a Baby constructor that subclasses the Person built earlier.
  - Babies of course inherit the ability to greet, which can be strange.
  - Babies should have the ability to play, which persons don't.
  - By playing, a string is returned with some text of your choosing.
*/
function Baby(name, age){
  Person.call(this, name, age);
  this.playMsg = `${this.name} is playing`;
}

Baby.prototype = Object.create(Person.prototype);
let pete = new Baby('Pete', 1);
console.log(pete);

Baby.prototype.play = function(){
  return this.playMsg;
}

console.log(pete.play());


/*
  TASK 4

  Use your imagination and come up with constructors that allow to build objects
  With amazing and original capabilities. Build 3 small ones, or a very
  complicated one with lots of state. Surprise us!

*/

function animal(theKind, theHabitat, feedsOn){
  this.kind = theKind;
  this.habitat = theHabitat;
  this.eats = feedsOn;
  this.asleep = false;
}

animal.prototype.bedTime = function () {
  this.asleep = true;

  return `${this.kind} has gone to sleep`;
}
animal.prototype.wakeUpCall = function () {
  this.asleep = true;
  
  return `${this.kind} is now awake`;
}

let Koala = new animal('Koala', 'Trees', 'Plants');
console.log(Koala);
console.log(Koala.bedTime());
console.log(Koala);
console.log(Koala.wakeUpCall());
console.log(Koala);


/*

  STRETCH TASK

  Object oriented design is commonly used in video games. You will be implementing
   several constructor functions with their correct inheritance hierarchy.
  In this file you will be creating three constructor functions: GameObject, 
  CharacterStats, Humanoid.
  At the bottom of this file are 3 objects that all end up inheriting from 
  Humanoid.  Use the objects at the bottom of the page to test your constructor 
  functions.

  Each constructor function has unique properties and methods that are defined in their block comments below:
*/

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from 
  * the game.`
*/
function GameObject(createdAt_, name_, dimensions_){
  this.createdAt = createdAt_;
  this.name = name_;
  this.dimensions = dimensions_;
}

GameObject.prototype.destroy = function() {
  return `${this.name} was removed from the game`;
}

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats(createdAt_, name_, dimensions_) {
  GameObject.call(this, createdAt_, name_, dimensions_);
  this.healthPoints = 100;
}

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function(){
 return `${this.name} took damage`;
}

let Ares = new CharacterStats('12:00', 'Ares', {
  length: 2,
  width: 1,
  height: 1,
});
console.log(Ares);
console.log(Ares.destroy());


/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/


// Test you work by un-commenting these 3 objects and the list of console logs below:

/*
  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });
  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });
  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });
  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
*/
