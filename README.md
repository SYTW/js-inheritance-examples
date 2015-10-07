En este repo se muestran algunos ejemplos de como definir herencia en JavaScript.

* En el ejemplo `carsinheritance.js` (Véase [el gist](https://gist.github.com/karanth/8358038)) se usa una clase `Cars` y una clase `Sedan`.

Se establece la herencia de esta forma:

        Sedan.prototype = new Car();
        Sedan.prototype.constructor = Sedan;

Para llamar al constructor padre se usa `Car.call`:

        function Sedan(numberOfCylinder, carType){
            //Calling the base constructor. All private vars and other properties are initialized. 
            Car.call(this, numberOfCylinder, carType);
            //Instance method. The first in the method resolution chain.
            this.start = function(){
                             console.log('The Sedan with ' + this.getCC() + ' engine and color ' + this.color + ' is starting...');
                         }
        }

* En el ejemplo `inh1.js` se establecen las clases `Shape`y `Rectangle`.
La herencia se establece via `Object.create`:

        Rectangle.prototype = Object.create(Shape.prototype);

ECMAScript 5 define un metodo, `Object.create()`, que crea un nuevo objeto
usando su primer argumento como prototype de ese objeto. 
`Object.create(a)` puede tomar un segundo argumento que, si se pasa,
describe las propiedades del nuevo objeto. 


Para llamar al constructor padre se usa `Shape.call`:

        function Rectangle() {
          Shape.call(this); //call super constructor.
        }
