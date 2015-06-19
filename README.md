# Netshoes - Code Styleguide

![Netshoes](http://i.imgur.com/5RBW4vv.png)

Welcome to the Netshoes engineering team standards. Here you will find what we assume to be the best practices and avoid absence of consistence between code.
As far as our projects are made by more than one person, we should find out a way to be consistent about the quality and the code we create. Feel free to send Pull Requests and suggest new standards.

## JavaScript Style Guide

*A mostly reasonable approach to JavaScript*

### Topics

* [EditorConfig](http://editorconfig.org/)
* [Linting](http://contribute.jquery.org/style-guide/js/#linting)
* [Types](https://github.com/airbnb/javascript#types)
* [Objects](https://github.com/airbnb/javascript/tree/master/es5#objects) *missing*
* [Arrays](https://github.com/airbnb/javascript#arrays)
* [Strings](https://github.com/airbnb/javascript#strings) *missing*
* [Functions](https://github.com/airbnb/javascript#functions)
* [Properties](https://github.com/airbnb/javascript#properties)
* [Variables](https://github.com/airbnb/javascript#variables)
* [Hoisting](https://github.com/airbnb/javascript#hoisting)
* [Comparison Operators & Equality](https://github.com/airbnb/javascript#comparison-operators--equality) *missing*
* [Blocks](https://github.com/airbnb/javascript#blocks)
* [Comments](https://github.com/airbnb/javascript#comments) *missing*
* [Whitespace](https://github.com/airbnb/javascript#whitespace)
* [Commas](https://github.com/airbnb/javascript#commas)
* [Semicolons](https://github.com/airbnb/javascript#semicolons) *missing*
* [Type Casting & Coercion](https://github.com/airbnb/javascript#type-casting--coercion)
* [Naming Conventions](https://github.com/airbnb/javascript#naming-conventions)
* [Accessors](https://github.com/airbnb/javascript#accessors)
* [Constructors](https://github.com/airbnb/javascript#constructors)
* [DOM Events](https://github.com/airbnb/javascript#events)
* [jQuery](https://github.com/airbnb/javascript#jquery) *missing*
* [Chained Method Calls](http://contribute.jquery.org/style-guide/js/#chained-method-calls)
* [Switch statements](http://contribute.jquery.org/style-guide/js/#switch-statements)

## EditorConfig

 - [1.1](#1.1) <a name='1.1'></a> We chosen to use [EditorConfig](http://editorconfig.org/) to maintain our code consistency, your IDE should be compatible with this plugin.  [Here](http://editorconfig.org/#download) is a list of available IDE's.

  > Let's keep a consistency in our projects, it should look like it was written by the same person 😏

    ```bash
    # http://editorconfig.org
    root = true

    [*]
    indent_style = space
    indent_size = 2
    end_of_line = lf
    charset = utf-8
    trim_trailing_whitespace = true
    insert_final_newline = true
    ```

    [Here](./.editorconfig) is our actual `.editorconfig` config file.

**[⬆ back to top](#topics)**

## Linting

  - Use JSHint to detect errors and potential problems. Every project should have a Grunt task for linting all JavaScript files: `grunt jshint`. The options for JSHint are stored in a `.jshintrc` file.

  - All options must be alphabetized and grouped (just an example):

    ```json
    {
      "boss": "example",
      "curly": "example",
      "eqeqeq": "example",
    }
    ```

**[⬆ back to top](#table-of-contents)**

## Types

  - **Primitives**: When you access a primitive type you work directly on its value.

    + `string`
    + `number`
    + `boolean`
    + `null`
    + `undefined`

    ```javascript
    var foo = 1;
    var bar = foo;

    bar = 9;

    console.log(foo, bar); // => 1, 9
    ```
  - **Complex**: When you access a complex type you work on a reference to its value.

    + `object`
    + `array`
    + `function`

    ```javascript
    var foo = [1, 2];
    var bar = foo;

    bar[0] = 9;

    console.log(foo[0], bar[0]); // => 9, 9
    ```

**[⬆ back to top](#table-of-contents)**

## Arrays

 - [00.0](#00.0) <a name='00.0'></a> Use the literal syntax for array creation.

  > Literal syntax can be way faster 💪

    ```javascript
    // bad
    var items = new Array();

    // good
    var items = [];
    ```

- [00.0](#00.0) <a name='00.0'></a> Use Array#push instead of direct assignment to add items to an array.

    ```javascript
    var someStack = [];


    // bad
    someStack[someStack.length] = 'abracadabra';

    // good
    someStack.push('abracadabra');
    ```

- [00.0](#00.0) <a name='00.0'></a> When you need to copy an array use Array#slice. [jsPerf](http://jsperf.com/converting-arguments-to-an-array/7)

    ```javascript
    var len = items.length;
    var itemsCopy = [];
    var i;

    // bad
    for (i = 0; i < len; i++) {
      itemsCopy[i] = items[i];
    }

    // good
    itemsCopy = items.slice();
    ```

- [00.0](#00.0) <a name='00.0'></a> To convert an array-like object to an array, use Array#slice.

    ```javascript
    function trigger() {
      var args = Array.prototype.slice.call(arguments);
      ...
    }
    ```

**[⬆ back to top](#topics)**

## Functions

 - [1.1](#1.1) <a name='1.1'></a> Prefer to use named function expression instead of anonymous function expression

  > This helps you to debug your code, since the dev tools will show the name of the context which the error ocurred.

```javascript
// bad
var anonymous = function() {}

// good
var named = function named() {}
```

 - [1.2](#1.2) <a name='1.2'></a> Never declare a function in a non-function block.

```javascript
// bad
while(true) {
  function test() {
    return false;
  }
}
```

 - [1.3](#1.3) <a name='1.3'></a> Never name a parameter `arguments`.

  > This will take precedence over the `arguments` object that is given to every function scope.

```javascript
// bad
function nope(name, options, arguments) {
  // ...stuff...
}

// good
function yup(name, options, args) {
  // ...stuff...
}
```

**[⬆ back to top](#topics)**

## Properties

  - Use dot notation to access properties.

  > Dot notation is simpler and enforces `camelCase` when naming object keys.

  ```javascript
  var user = {
    name: 'John',
    age: 42
  };

  // Bad
  var userName = user['name'];

  // Good
  var userAge = user.age;
  ```

  - Use subscript notation `[]` to access dynamic properties or properties that are also JavaScript reserved words.

  > Subscript notation is sometimes tricky and should be used only when really needed.

  ```javascript
  var config = {
    id: 'foo',
    'class': 'bar'
  };

  function getConfigData(data) {
    return config[data];
  }

  // Accessing dynamic data
  getConfigData('id'); // 'foo'

  // Accessing a key that is also a JavaScript reserved word
  config['class']; // 'bar'
  ```

**[⬆ back to top](#topics)**

## Variables

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

**[⬆ back to top](#table-of-contents)**

## Hoisting

  - Variable declarations get hoisted to the top of their scope, but their assignment does not.

  > Javascript variable hoisting can be dangerous, lets declare what we are going to use before we used it 😎

    ```javascript
    // we know this wouldn't work (assuming there
    // is no notDefined global variable)
    function example() {
      console.log(notDefined); // => throws a ReferenceError
    }

    // creating a variable declaration after you
    // reference the variable will work due to
    // variable hoisting. Note: the assignment
    // value of `true` is not hoisted.
    function example() {
      console.log(declaredButNotAssigned); // => undefined
      var declaredButNotAssigned = true;
    }

    // The interpreter is hoisting the variable
    // declaration to the top of the scope,
    // which means our example could be rewritten as:
    function example() {
      var declaredButNotAssigned;
      console.log(declaredButNotAssigned); // => undefined
      declaredButNotAssigned = true;
    }
    ```

  - Anonymous function expressions hoist their variable name, but not the function assignment.

    ```javascript
    function example() {
      console.log(anonymous); // => undefined

      anonymous(); // => TypeError anonymous is not a function

      var anonymous = function() {
        console.log('anonymous function expression');
      };
    }
    ```

  - Named function expressions hoist the variable name, not the function name or the function body.

    ```javascript
    function example() {
      console.log(named); // => undefined

      named(); // => TypeError named is not a function

      superPower(); // => ReferenceError superPower is not defined

      var named = function superPower() {
        console.log('Flying');
      };
    }

    // the same is true when the function name
    // is the same as the variable name.
    function example() {
      console.log(named); // => undefined

      named(); // => TypeError named is not a function

      var named = function named() {
        console.log('named');
      }
    }
    ```

  - Function declarations hoist their name and the function body.

    ```javascript
    function example() {
      superPower(); // => Flying

      function superPower() {
        console.log('Flying');
      }
    }
    ```

**[⬆ back to top](#table-of-contents)**

## Blocks

  - Use braces with all blocks.

    ```javascript
    // bad
    if (test)
      return false;

    // bad
    if (test) return false;

    // good
    if (test) {
      return false;
    }

    // good
    function() { return false; }

    // good
    function() {
      return false;
    }
    ```

  - If you're using multi-line blocks with `if` and `else`, put `else` on the same line as your `if` block's closing brace.

    ```javascript
    // bad
    if (test) {
      thing1();
      thing2();
    }
    else {
      thing3();
    }

    // good
    if (test) {
      thing1();
      thing2();
    } else {
      thing3();
    }
    ```

**[⬆ back to top](#table-of-contents)**

## Whitespace

 - [00.0](#00.0)<a name='00.0'></a> Use soft tabs set to 2 spaces.

    ```javascript
    // bad
    function() {
    ∙∙∙∙var name;
    }

    // bad
    function() {
    ∙var name;
    }

    // good
    function() {
    ∙∙var name;
    }
    ```

 - [00.0](#00.0)<a name='00.0'></a> Place 1 space before the leading brace.

    ```javascript
    // bad
    function test(){
      console.log('test');
    }

    // good
    function test() {
      console.log('test');
    }

    // bad
    dog.set('attr',{
      age: '1 year',
      breed: 'Bernese Mountain Dog'
    });

    // good
    dog.set('attr', {
      age: '1 year',
      breed: 'Bernese Mountain Dog'
    });
    ```

 - [00.0](#00.0)<a name='00.0'></a> Place 1 space before the opening parenthesis in control statements (`if`, `while` etc.). Place no space before the argument list in function calls and declarations.

    ```javascript
    // bad
    if(isJedi) {
      fight ();
    }

    // good
    if (isJedi) {
      fight();
    }

    // bad
    function fight () {
      console.log ('Swooosh!');
    }

    // good
    function fight() {
      console.log('Swooosh!');
    }
    ```

 - [00.0](#00.0)<a name='00.0'></a> Set off operators with spaces.

    ```javascript
    // bad
    var x=y+5;

    // good
    var x = y + 5;
    ```

 - [00.0](#00.0)<a name='00.0'></a> End files with a single newline character.

    ```javascript
    // bad
    (function(global) {
      // ...stuff...
    })(this);
    ```

    ```javascript
    // bad
    (function(global) {
      // ...stuff...
    })(this);↵
    ↵
    ```

    ```javascript
    // good
    (function(global) {
      // ...stuff...
    })(this);↵
    ```

 - [00.0](#00.0)<a name='00.0'></a> Leave a blank line after blocks and before the next statement

    ```javascript
    // bad
    if (foo) {
      return bar;
    }
    return baz;

    // good
    if (foo) {
      return bar;
    }

    return baz;

    // bad
    var obj = {
      foo: function() {
      },
      bar: function() {
      }
    };
    return obj;

    // good
    var obj = {
      foo: function() {
      },

      bar: function() {
      }
    };

    return obj;
    ```

**[⬆ back to top](#table-of-contents)**

## Commas

  - Leading commas: **Nope.**

    ```javascript
    // bad
    var story = [
        once
      , upon
      , aTime
    ];

    // good
    var story = [
      once,
      upon,
      aTime,
    ];

    // bad
    var hero = {
        firstName: 'Ada'
      , lastName: 'Lovelace'
      , birthYear: 1815
      , superPower: 'computers'
    };

    // good
    var hero = {
      firstName: 'Ada',
      lastName: 'Lovelace',
      birthYear: 1815,
      superPower: 'computers',
    };
    ```

  - Additional trailing comma: **Yup.**

  > Why? This leads to cleaner git diffs. Also, transpilers like Babel will remove the additional trailing comma in the transpiled code which means you don't have to worry about the [trailing comma problem](es5/README.md#commas) in legacy browsers.

    ```javascript
    // bad - git diff without trailing comma
    var hero = {
      firstName: 'Florence',
      lastName: 'Nightingale'
      lastName: 'Nightingale',
      inventorOf: ['coxcomb graph', 'mordern nursing']
    }

    // good - git diff with trailing comma
    var hero = {
      firstName: 'Florence',
      lastName: 'Nightingale',
      inventorOf: ['coxcomb chart', 'mordern nursing'],
    }

    // bad
    var hero = {
      firstName: 'Dana',
      lastName: 'Scully'
    };

    var heroes = [
      'Batman',
      'Superman'
    ];

    // good
    var hero = {
      firstName: 'Dana',
      lastName: 'Scully',
    };

    var heroes = [
      'Batman',
      'Superman',
    ];
    ```

**[⬆ back to top](#table-of-contents)**

## Type Casting & Coercion

  - Perform type coercion at the beginning of the statement.
  - Strings:

    ```javascript
    //  => this.reviewScore = 9;

    // bad
    var totalScore = this.reviewScore + '';

    // good
    var totalScore = String(this.reviewScore);
    ```

  - Use `parseInt` for Numbers and always with a radix for type casting.

    ```javascript
    var inputValue = '4';

    // bad
    var val = new Number(inputValue);

    // bad
    var val = +inputValue;

    // bad
    var val = inputValue >> 0;

    // bad
    var val = parseInt(inputValue);

    // good
    var val = Number(inputValue);

    // good
    var val = parseInt(inputValue, 10);
    ```

  - If for whatever reason you are doing something wild and `parseInt` is your bottleneck and need to use Bitshift for [performance reasons](http://jsperf.com/coercion-vs-casting/3), leave a comment explaining why and what you're doing.

    ```javascript
    // good
    /**
     * parseInt was the reason my code was slow.
     * Bitshifting the String to coerce it to a
     * Number made it a lot faster.
     */
    var val = inputValue >> 0;
    ```

  - **Note:** Be careful when using bitshift operations. Numbers are represented as [64-bit values](http://es5.github.io/#x4.3.19), but Bitshift operations always return a 32-bit integer ([source](http://es5.github.io/#x11.7)). Bitshift can lead to unexpected behavior for integer values larger than 32 bits. [Discussion](https://github.com/airbnb/javascript/issues/109). Largest signed 32-bit Int is 2,147,483,647:

    ```javascript
    2147483647 >> 0 //=> 2147483647
    2147483648 >> 0 //=> -2147483648
    2147483649 >> 0 //=> -2147483647
    ```

  - Booleans:

    ```javascript
    var age = 0;

    // bad
    var hasAge = new Boolean(age);

    // good
    var hasAge = Boolean(age);

    // good
    var hasAge = !!age;
    ```

**[⬆ back to top](#table-of-contents)**

## Naming Conventions

 - [1.1](#1.1) <a name='1.1'></a> Avoid single letter names.

  > Developers don't have crystal balls, be descriptive with your naming.

```javascript
// awful
function q() {
  // ...stuff...
}

// good
function query() {
  // ..stuff..
}
```

 - [1.2](#1.2) <a name='1.2'></a> Use camelCase when naming objects, functions, and instances.

 ```javascript
// awful
function q() {
  // ...stuff...
}

// good
// bad
var OBJEcttsssss = {};
var this_is_my_object = {};
var o = {};
function c() {}

// good
var thisIsMyObject = {};
function thisIsMyFunction() {}
```

 - [1.3](#1.3) <a name='1.3'></a> Use PascalCase when naming constructors or classes.

```javascript
// bad
function user(options) {
  this.name = options.name;
}

var bad = new user({
  name: 'nope'
});

// good
function User(options) {
  this.name = options.name;
}

var good = new User({
  name: 'yup'
});
```

 - Name your functions.

 > This is helpful for stack traces.

```javascript
// bad
var log = function(msg) {
  console.log(msg);
};

// good
var log = function log(msg) {
  console.log(msg);
};
```

 - Your files should be the name of the main module you are exporting, but kebab-case.

```javascript
// file contents
function CheckBox() {
  // code
}

module.exports = CheckBox;

// in some other file
// bad
var CheckBox = require('./checkBox');

// bad
var CheckBox = require('./check_box');

// bad
var CheckBox = require('./CheckBox');

// good
var CheckBox = require('./check-box');
```

**[⬆ back to top](#table-of-contents)**

## Accessors

 - [00.0](#00.0) <a name='00.0'></a> Accessor functions for properties are not required.
 - [00.0](#00.0) <a name='00.0'></a> If you do make accessor functions use getVal() and setVal('hello').

  > Makes way more sense to use `getters` and `setters` to retrieve and set values, and really easy to identify what those methods are doing.

    ```javascript
    // bad
    dragon.age();

    // good
    dragon.getAge();

    // bad
    dragon.age(25);

    // good
    dragon.setAge(25);
    ```

 - [00.0](#00) <a name='00.0'></a> If the property is a boolean, use isVal() or hasVal().

    ```javascript
    // bad
    if (!dragon.age()) {
      return false;
    }

    // good
    if (!dragon.hasAge()) {
      return false;
    }
    ```
 - [00.0](#00.0) <a name='00.0'></a> It's okay to create get() and set() functions, but be consistent.

    ```javascript
    function Jedi(options) {
      options || (options = {});
      var lightsaber = options.lightsaber || 'blue';
      this.set('lightsaber', lightsaber);
    }

    Jedi.prototype.set = function(key, val) {
      this[key] = val;
    };

    Jedi.prototype.get = function(key) {
      return this[key];
    };
    ```

**[⬆ back to top](#table-of-contents)**

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

**[⬆ back to top](#table-of-contents)**


## DOM Events

 - When attaching dom events (such as click, hover, etc) use the `on` approach and never use `event/alias`

    ```js
    // bad
    $el.click(this.onClick);

    // good
    $el.on('click', this.onClick);
    ```
 - After attach events into DOM element, name your callbacks such as 'onClick', `onHover`, etc

    ```js
    // bad
    $el.on('click', this.myMotherFuckingCustomEventThatWillReturnTrue);

    // good
    $el.on('click', this.onClick);
    $el.on('hover', this.onHover);
    $el.on('mouseleave', this.onMouseLeave);
    ```
 - Prefer to use a method named `bind` to create any event attachment of your needs.

    ```js
    // bad
    function Awesome() {
      this.$el.on('click', this.onClick);
      this.$foo.on('click', this.onFooClick);
      this.$bar.on('click', this.onBarClick);
      this.$lol.on('click', this.onLolClick);
    }

    // good
    function Awesome() {
      this.bind();
    }

    Awesome.prototype.bind = function() {
      this.$el.on('click', this.onClick);
      this.$foo.on('click', this.onFooClick);
      this.$bar.on('click', this.onBarClick);
      this.$lol.on('click', this.onLolClick);
    };
    ```

**[⬆ back to top](#table-of-contents)**


## Chained Method Calls

 - [1.1](#1.1) <a name='1.1'></a> When a chain of method calls is bigger than one, there must be one call per line, with the first call on a separate line from the object the methods are called on.

```javascript
// bad
elements
  .addClass("foo");

// good
elements.addClass('foo');

// bad
elements.addClass('foo').children().html('hello').end().appendTo('body');

// good
elements
  .addClass('foo')
  .children()
  .html('hello')
  .end()
  .appendTo('body');
```


## Switch Statements

 - [1.1](#1.1) <a name='1.1'></a> The usage of switch statements is generally discouraged, but can be useful when there are a large number of cases.

```javascript
// good
switch (event.keyCode) {
  case 1:
    x();
    break;
  case 2:
    y();
    break;
  default:
    z();
}
```

  - For more information refer to [JavaScript Scoping & Hoisting](http://www.adequatelygood.com/2010/2/JavaScript-Scoping-and-Hoisting) by [Ben Cherry](http://www.adequatelygood.com/).

