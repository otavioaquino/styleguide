#Netshoes - Code Styleguide

## Netshoes JavaScript Style Guide

*A mostly reasonable approach to JavaScript*

### Topics

* [EditorConfig](http://editorconfig.org/)
* [Linting](http://contribute.jquery.org/style-guide/js/#linting)
* [Types](https://github.com/airbnb/javascript#types)
* [Objects](https://github.com/airbnb/javascript/tree/master/es5#objects)
* [Arrays](https://github.com/airbnb/javascript#arrays)
* [Strings](https://github.com/airbnb/javascript#strings)
* [Functions](https://github.com/airbnb/javascript#functions)
* [Properties](https://github.com/airbnb/javascript#properties)
* [Variables](https://github.com/airbnb/javascript#variables)
* [Hoisting](https://github.com/airbnb/javascript#hoisting)
* [Comparison Operators & Equality](https://github.com/airbnb/javascript#comparison-operators--equality)
* [Blocks](https://github.com/airbnb/javascript#blocks)
* [Comments](https://github.com/airbnb/javascript#comments)
* [Whitespace](https://github.com/airbnb/javascript#whitespace)
* [Commas](https://github.com/airbnb/javascript#commas)
* [Semicolons](https://github.com/airbnb/javascript#semicolons)
* [Type Casting & Coercion](https://github.com/airbnb/javascript#type-casting--coercion)
* [Naming Conventions](https://github.com/airbnb/javascript#naming-conventions)
* [Accessors](https://github.com/airbnb/javascript#accessors)
* [Constructors](https://github.com/airbnb/javascript#constructors)
* [Events](https://github.com/airbnb/javascript#events)
* [jQuery](https://github.com/airbnb/javascript#jquery)
* [Chained Method Calls](http://contribute.jquery.org/style-guide/js/#chained-method-calls)
* [Switch statements](http://contribute.jquery.org/style-guide/js/#switch-statements)

## Constructors

 - [1.1](#1.1) <a name='1.1'></a> Use capital letter when creating a Constructor function.
  > It makes easier to indentify Contructors and common functions

```javascript
// bad
function gang() {

}

// bad
function GANG() {

}

// good
function Gang() {

}
```

 - [1.2](#1.2) <a name='1.2'></a> Assign methods to the prototype object, instead of overwriting the prototype with a new object.
 > Overwriting the prototype makes inheritance impossible: by resetting the prototype you'll overwrite the base!

```javascript
function Gang() {

}

// bad
Gang.prototype = {
  fight: function fight() {
    console.log('fighting');
  },

  block: function block() {
    console.log('blocking');
  }
};

// good
Gang.prototype.fight = function fight() {
  console.log('fighting');
};

Gang.prototype.block = function block() {
  console.log('blocking');
};
```

- [1.3](#1.3) <a name='1.3'></a> Methods can return `this`.
 > Returning `this` helps method chaining. But it's not mandatory to do it.

```javascript
// bad
Gang.prototype.jump = function() {
  this.jumping = true;
  return true;
};

Gang.prototype.setHeight = function(height) {
  this.height = height;
};

var yo = new Gang();
yo.jump(); // => true
yo.setHeight(20); // => undefined

// good
Gang.prototype.jump = function() {
  this.jumping = true;
  return this;
};

Gang.prototype.setHeight = function(height) {
  this.height = height;
  return this;
};

var yo = new Gang();

yo.jump()
  .setHeight(20);
```

- **[⬆ back to top](#topics)**


