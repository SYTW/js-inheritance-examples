function Car(numberOfCylinders, carType){

  //Private member variables. They can be set only during object construction.
  var type = carType;
  var cylinders = numberOfCylinders;
  var volumeOfCylinder = 250;

  this.getCC = function(){
                return cylinders * volumeOfCylinder * this.factor;
              };

  //Public properties. These properties can be set from outside the object.
  this.color = 'White';
  this.sunRoof = false;
  this.factor = 1;
}

//Shared method
Car.prototype.start = function(){
  console.log('The car with ' + this.getCC() + 
              ' engine and color ' + this.color + ' is starting...');
}

Car.prototype.stop = function(){
  console.log('The car has stopped');
}

Car.prototype.constructor = Car;

function Sedan(numberOfCylinder, carType){
    //Calling the base constructor. All private vars and other properties are initialized. 
    Car.call(this, numberOfCylinder, carType);
    //Instance method. The first in the method resolution chain.
    this.start = function(){
      console.log('The Sedan with ' + this.getCC() + 
                  ' engine and color ' + this.color + ' is starting...');
   }
}

//Set the inheritance - this is the magic line
Sedan.prototype = new Car();
Sedan.prototype.constructor = Sedan;



var honda = new Sedan(4, 'sedan');
honda.start();
honda.stop();
