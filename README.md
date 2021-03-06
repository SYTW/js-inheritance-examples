## Ejemplos de Clases y Herencia en JS

En este repo se muestran algunos ejemplos de como definir herencia en JavaScript.

### Ejemplo `carsinheritance.js`

* En el ejemplo `carsinheritance.js` (Véase [este Gist](https://gist.github.com/karanth/8358038)) se usa una clase `Cars` y una clase `Sedan`.

  Se establece la herencia de esta forma:

```javascript
          Sedan.prototype = new Car();
          Sedan.prototype.constructor = Sedan;
```

  Para llamar al constructor padre se usa `Car.call`:

```javascript
          function Sedan(numberOfCylinder, carType){
              //Calling the base constructor. All private vars and other properties are initialized. 
              Car.call(this, numberOfCylinder, carType);
              //Instance method. The first in the method resolution chain.
              this.start = function(){
                               console.log('The Sedan with ' + this.getCC() + ' engine and color ' + this.color + ' is starting...');
                           }
          }
```

* JavaScript functions are objects and like all JavaScript objects, they have methods. 
Two of these methods, `call()` and `apply()`, invoke the function indirectly. 

* Both methods allow you to explicitly specify the `this` value for the invocation, 
which means you can invoke any function as a method of any object, 
even if it is not actually a method of that object. 

* Both methods also allow you to specify the arguments for the invocation. 

* The `call()` method uses its own argument list as arguments to the function and the `apply()` 
method expects an array of values to be used as arguments. 

### Ejemplo `inh1.js`

* En el ejemplo `inh1.js` se establecen las clases `Shape` y `Rectangle`.
  La herencia se establece via `Object.create`:

```javascript
          Rectangle.prototype = Object.create(Shape.prototype);
```

* ECMAScript 5 define un metodo, `Object.create()`, que crea un nuevo objeto
usando su primer argumento como prototype de ese objeto. 
* `Object.create()` puede tomar un segundo argumento que, si se pasa,
describe las propiedades del nuevo objeto. 


Para llamar al constructor padre se usa `Shape.call`:

```javascript
          function Rectangle() {
            Shape.call(this); //call super constructor.
          }
```

### Ejemplo `lyingoutatable`

Forman parte de este ejemplo los ficheros:

```
lyingoutatable.js   - La librería con las clases
main-draw-table.jsa - Programa principal que usa la librería
test/test.js        - pruebas en Mocha
mountains.json      - Fichero de entrada
package.json        - Dependencias
```

Este ejemplo se corresponde con la sección **Laying out a table**
del capítulo 6 **[The Secret Life of Objects](http://eloquentjavascript.net/06_object.html)** del libro **Eloquent javaScript**
