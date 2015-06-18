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

## Example topic

 - [1.1](#1.1) <a name='1.1'></a> Always use `var` to declare variables.

  > Not doing so will result in global variables. We want to avoid polluting the global namespace.

```javascript
// super bad
superPower = new SuperPower();

// super good
var superPower = new SuperPower();
```

 - [1.2](#1.2) <a name='1.2'></a> Use one `var` declaration per context.

```javascript
// bad
var items = getItems();
var goSportsTeam = true;
var dragonball = 'z';

// bad
var items = getItems(),
  goSportsTeam = true,
  dragonball = 'z';

// good
var items = getItems(),
  goSportsTeam = true,
  dragonball = 'z';
```

 - [1.3](#1.3) <a name='1.3'></a> Declare unassigned variables last.

 > This is helpful when later on you might need to assign a variable depending on one of the previous assigned variables.

```javascript
// bad
var items = getItems(),
  goSportsTeam = true,
  emptyVar,
  dragonball = 'z';

// good
var items = getItems(),
  goSportsTeam = true,
  dragonball = 'z',
  emptyVar;
```

- [1.4](#1.4) <a name='1.4'></a> Assign variables at the top of their scope.

> This helps avoid issues with variable declaration and assignment hoisting related issues.

```javascript
// bad
function() {
  test();
  console.log('doing stuff..');

  //..other stuff..

  var name = getName();

  if (name === 'test') {
    return false;
  }

  return name;
}

// good
function() {
  var name = getName();

  test();
  console.log('doing stuff..');

  //..other stuff..

  if (name === 'test') {
    return false;
  }

  return name;
}

// bad - unnessary function call
function() {
  var name = getName();

  if (!arguments.length) {
    return false;
  }

  this.setFirstName(name);

  return true;
}

// good
function() {
  var name;

  if (!arguments.length) {
    return false;
  }

  name = getName();
  this.setFirstName(name);

  return true;
}
```


- **[⬆ back to top](#topics)**


