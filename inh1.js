//Shape - superclass
function Shape() {
  this.x = 0;
  this.y = 0;
}

Shape.prototype.toString = function() {
  return "("+this.x+", "+this.y+")";
}

Shape.prototype.move = function(x, y) {
  this.x += x;
  this.y += y;
  console.info("Shape moved to "+this);
};
 
// Rectangle - subclass
function Rectangle() {
  Shape.call(this); //call super constructor.
}
 
// Rectangle inherits from Shape
Rectangle.prototype = Object.create(Shape.prototype);
 
var rect = new Rectangle();
 
console.log("x = "+rect);
console.log("rect is an instance of Rectangle? "+(rect instanceof Rectangle)) //true.
console.log("rect is an instance of Shape? "+(rect instanceof Shape))         //true.
 
rect.move(1, 2); //Outputs, "Shape moved."
