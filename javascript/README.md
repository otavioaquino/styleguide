# JavaScript

> Netshoes JavaScript code styleguide.

# TOC

1. [Semicolons](#semicolons)
2. [Strict mode](#strict-mode)
3. [Variables](#variables)
4. [Prototypes](#prototypes)
5. [Regular Expressions](#regular-expressions)
6. [Objects](#objects)
7. [Properties](#properties)
8. [Arrays](#arrays)
9. [Strings](#strings)
10. [Functions](#functions)
11. [Equality comparisons](#equality-comparisons)
12. [Blocks](#blocks)
13. [Comments](#comments)
14. [Naming conventions](#naming-conventions)
15. [Whitespace](#whitespace)
16. [jQuery](#jquery)
17. [Resources](#resources)

## Semicolons

* [1.1](#1.1) <a name='1.1'></a> Always use semicolons.

> [ASI](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Automatic_semicolon_insertion) can be tricky, don't rely on it.

* [1.2](#1.2) <a name='1.2'></a> Don't start function blocks nor annonymous self-invoking functions with semicolons.

```javascript
// Bad
;(function() {
  console.log('I\'m too cool for school');
})();

// Good
(function() {
  console.log('I\'m awesome');
})();
```

**[⬆ back to top](#toc)**

## Strict mode

* [2.1](#2.1) <a name='2.1'></a> Always use the strict mode pragma. Just be aware not to use it globally.

```javascript
// Bad
'use strict';

function doSomething() {
}

function doSomethingElse() {
}

// Good
function doSomething() {
  'use strict';
  // stuff
}

// Good
(function() {
  'use strict';

  function doSomething() {
  }

  function doSomethingElse() {
  }
})();
```

**[⬆ back to top](#toc)**

## Variables

* [3.1](#3.1) <a name='3.1'></a> Always use `var` to declare variables.

> Not doing so will result in global variables. We want to avoid polluting the global namespace.

```javascript
// Super bad, I'm sad
superPower = new SuperPower();

// Awesome, I'm happy
var superPower = new SuperPower();
```

* [3.2](#3.2) <a name='3.2'></a>  Use one `var` declaration per context. Keep identation consistent.

```javascript
// Bad
var items = getItems();
var goSportsTeam = true;
var dragonball = 'z';

// Bad (inconsistent code identation)
var items = getItems(),
  goSportsTeam = true,
  dragonball = 'z';

// Good
var items = getItems(),
    goSportsTeam = true,
    dragonball = 'z';
```

* [3.3](#3.3) <a name='3.3'></a> Declare unassigned variables last.

> This is helpful when later on you might need to assign a variable depending on one of the previous assigned variables.

```javascript
// Bad
var items = getItems(),
    goSportsTeam = true,
    emptyVar,
    dragonball = 'z';

// Good
var items = getItems(),
    goSportsTeam = true,
    dragonball = 'z',
    emptyVar;
```

* [3.4](#3.4) <a name='3.4'></a> Assign variables at the top of their scope.

> This helps avoid issues with variable declaration and assignment hoisting related issues.

```javascript
// Bad
function() {
  test();
  console.log('Doing stuff...');

  // ...

  var name = getName();

  if (name === 'test') {
    return false;
  }

  return name;
}

// Good
function() {
  var name = getName();

  test();
  console.log('Doing stuff...');

  // ...

  if (name === 'test') {
    return false;
  }

  return name;
}

// Bad (unnecessary function call)
function() {
  var name = getName();

  if (!arguments.length) {
    return false;
  }

  this.setFirstName(name);

  return true;
}

// Good
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

* [3.5](#3.5) <a name='3.5'></a> Use `||` to define default values.

```javascript
// Bad
function setNumber(value) {
  if(!value) {
    value = 42;
  }
  
  return value;
}

// Good
function setNumber(value) {
  return value || 42;
}
```

**[⬆ back to top](#toc)**

## Prototypes

* [4.1](#4.1) <a name='4.1'></a> Hacking native prototypes should be avoided at all costs, use a method instead.

```javascript
// Bad
String.prototype.half = function () {
  return this.substr(0, this.length / 2);
};

// Good
function half(text) {
  return text.substr(0, text.length / 2);
}
```

**[⬆ back to top](#toc)**

## Regular Expressions

* [5.1](#5.1) <a name='5.1'></a> Keep regular expressions in variables, don't use them inline.

> This will vastly improve readability.

```javascript
// Bad
if (/\d+/.test(text)) {
  console.log('So many numbers!');
}

// Good
var matchNumbers = /\d+/;

if (matchNumbers.test(text)) {
  console.log('So many numbers!');
}
```

**[⬆ back to top](#toc)**

## Objects

* [6.1](#6.1) <a name='6.1'></a> Use the literal syntax for object creation.

```javascript
// Bad
var foo = new Object();

// Good
var bar = {};
```

* [6.2](#6.2) <a name='6.2'></a> Do not use [reserved words](http://es5.github.io/#x7.6.1) as object keys.

> They can cause problems in older versions of IE if not wrapped within quotes.

```javascript
// Bad
var foo = {
  class: 'Foo',
  default: true
};

// Good
var baz = {
  type: 'Baz',
  isDefault: true
};
```

* [6.3](#6.3) <a name='6.3'></a> Use `camelCase` when naming object keys.

> This way is easier to use dot notation to access object values.

```javascript
// Bad
var user = {
  'name': 'John',
  'has-children': false,
  'is-underage': false,
  'age': 42
};

// Good
var user = {
  name: 'John',
  hasChildren: false,
  isUnderage: false,
  age: 42
};
```

**[⬆ back to top](#toc)**

## Properties

* [7.1](#7.1) <a name='7.1'></a> Use dot notation to access properties.

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

**[⬆ back to top](#toc)**

## Arrays

* [8.1](#8.1) <a name='8.1'></a> Use the literal syntax for array creation.

```javascript
// Bad
var foo = new Array();

// Good
var bar = [1, 2, 3];
```

* Use `Array#push` instead of direct assignment to add items to an array.

```javascript
var groceries = [];

// Bad
groceries[groceries.length] = 'tomato';

// Good
groceries.push('oreo');
```

* To cleanup an array set its length to zero.

```javascript
// Bad
var foo = [1, 3, 5];
foo = null;

// Good
var bar = [2, 4, 6];
bar.length = 0;
```

* Use `Array#slice` to clone an array.

```javascript
var total = items.length,
    itemsCopy = [],
    index;

// Bad
for (index = 0; index < total; index++) {
  itemsCopy[index] = items[index];
}

// Good
itemsCopy = items.slice();
```

* To convert an array-like object to an array, use `Array#slice`.

```javascript
function argsToArray() {
  return Array.prototype.slice.call(arguments);
}
```

**[⬆ back to top](#toc)**

## Strings

* Use single quotes `'` for strings.

```javascript
// Bad
var reject = "Hugo Bessa";

// Good
var god = 'Raphael Fabeni';
```

* Concatenate strings using the plus `+=` operator.

> Operators are faster than function calls.

```javascript
var name = 'Eduardo';

// Bad
name.concat('Javiani');

// Good
name += ' Javiani';
```

* Prefer string concatenation for long strings, always adding line breaks after an operator.

> Long strings can impact performance big time ([benchmark](http://jsperf.com/ya-string-concat) and [discussion](https://github.com/airbnb/javascript/issues/40)).

```javascript
// Bad
var errorMessage = 'This is a super long error that was thrown because of Batman. When you stop to think about how Batman had anything to do with this, you would get nowhere fast.';

// Bad
var errorMessage = 'This is a super long error that was thrown because \
of Batman. When you stop to think about how Batman had anything to do \
with this, you would get nowhere \
fast.';

// Good
var errorMessage = 'This is a super long error that was thrown because ' +
  'of Batman. When you stop to think about how Batman had anything to do ' +
  'with this, you would get nowhere fast.';
```

* Use `toString()` to convert a value to `String`.

> Be aware that `toString()` does **not** work with `null` and `undefined` values.

```javascript
var value = 42;

// Bad
value += ''; // '42'

// Good
value.toString(); // '42'
```

**[⬆ back to top](#toc)**

## Functions

* Always use the [function declaration form](http://stackoverflow.com/questions/336859/var-functionname-function-vs-function-functionname) instead of function expressions.

```javascript
// Bad
var sum = function (x, y) {
  return x + y;
};

// Good
function sum(x, y) {
  return x + y;
}
```

* Favor named function expression instead of anonymous function expression.

> This helps you to debug your code, since the dev tools will show the name of the context which the error has ocurred.

```javascript
// Bad
var anonymous = function() {}

// Good
var named = function named() {}
```

* Do not declare a function in a non-function block.

```javascript
// Just don't
while(true) {
  function test() {
    return false;
  }
}
```

* Do not name a parameter `arguments`.

> This will take precedence over the `arguments` object that is given to every function scope.

```javascript
// Bad
function nope(name, options, arguments) {
  // ...
}

// Good
function yup(name, options, args) {
  // ...
}
```

* Whenever you have more than `3` arguments being passed to a function use an object instead.

```javascript
// Bad

function setUser(firstName, lastName, age, gender, occupation) {
  // Too many function arguments
}

setUser('Jon', 'Snow', 25, 'Male', 'Night watcher');

// Good

// Use a config/options object instead
function setUser(user) {
  // Do stuff
}

setUser({
  firstName: 'Jon',
  lastName: 'Snow',
  age: 25,
  gender: 'Male',
  occupation: 'Night watcher'
});
```

* Use `Function()` as no-op.

```javascript
function(callback) {
  setTimeout(callback || Function(), 2000);
}
```

## Equality comparisons

* Use strict equality to compare variable values

> Strict equality checks for both value and type which is why we expect.

**[⬆ back to top](#toc)**

## Blocks

* Always wrap blocks within braces and embrace new lines.

```javascript
// Bad
if (false)
  return;

// Bad (wrapped with braces but missing new line)
if (false) { return false; }

// Good
if (true) {
  return true;
}

// Good
if (true) {
  return true;
} else {
  return false;
}

// Bad
while(true)
  doSomething();
	
// Good
while(true) {
  doSomething();
}
```

**[⬆ back to top](#toc)**

## Comments

* Ensure your code is descriptive, well commented, and approachable by others. Great code comments convey context or purpose.

* Be sure to write in complete sentences for larger comments and succinct phrases for general notes.

* Don't need to use JSDoc since we don't automatically generate documentation.

* Using `FIXME` and `TODO` tags can help other developers understand and maintain your code.

* Use documentation block syntax for multiline comments.

* Use `//` for single line comments. Place them on a newline above the subject of the comment and add an empty line before the comment.

```javascript
// Bad

/*
Used to match `RegExp` special characters.
See this [article on `RegExp` characters](http://www.regular-expressions.info/characters.html#special)
for more details.
*/

// Good

/**
* Used to match `RegExp` special characters.
* See this [article on `RegExp` characters](http://www.regular-expressions.info/characters.html#special)
* for more details.
*/

var matchSpecialChars = /[.*+?^${}()|[\]\/\\]/g;

// Bad (vague description and placed aside of variable declaration)

var isActive = true; // When is active

// Good (right position and descriptive comment)

// Boolean value to indicate whether the current session is active or not
var isActive = true;

// Bad (weird big chunk of code, everything is visually tied together)

function bootstrap() {
  // Notifies if there's a session already running
  if(isActive) {
  	console.log('Session is already active!');
  }
  isActive = true;
  // Return session id so mediator can notify the controller
  return sessionId;
}

// Good

function bootstrap() {

  // Notifies if there's a session already running
  if(isActive) {
  	console.log('Session is already active!');
  }
  
  isActive = true;
  
  // Return session id so mediator can notify the controller
  return sessionId;
}
```

**[⬆ back to top](#toc)**

## Naming conventions

* Use `PascalCase` when naming constructors.

```javascript
// Bad
function crewMember(name, role) {
  this.name = name;
  this.role = role;
}

var god = new crewMember('Raphael Fabeni', 'Desenvolvedor');

// Good
function CrewMember(name, role) {
  this.name = name;
  this.role = role;
}

var designer = new CrewMember('Vinicius', 'Designer');
```

* Avoid single letter names and abbreviations. Be descriptive and clear.

```javascript
// Bad
function f() {
  // What the hell is this?
}

// Good
function bootstrapFoo() {
  // Ah, ok!
}

// Bad
function stuff() {
  // "stuff" is too generic
}

// Good
function doAnimationStuff() {
  // Now we're talking
}

// Bad (abbreviations)
var props = {};
var config = {};

// Better
var properties = {};
var settings = {};

// Not so good
function init() {
}

// Better
function initialize() {
}
```

* Always close constructor invocations with parenthesis.

> It's going to be easier to pass new constructor values if needed in the future.

```javascript
// Bad
var foo = new FooBar;

// Good
var bar = new FooBar();
var baz = new FooBar(1, 'lorem');
```

* Always use a leading underscore `_` when naming private properties and methods.

```javascript
// Bad
var $name = 'Foo';
var __name = 'Bar';

// Good
var _name = 'Baz';
```

* When making a reference to `this` name it as `self`.

```javascript
// Bad
function() {
  var that = this;

  return function() {
    console.log(that);
  }
}

// Bad
function() {
  var _this = this;

  return function() {
    console.log(this);
  }
}

// Good
function() {
  var self = this;

  return function() {
    console.log(self);
  }
}
```

* Booleans should start with "is", "has", or "should".

> This give us a clear idea of what that variable is.

```javascript
// Bad
var ready = true,
    animate = true,
    animation = true;

// Good
var isReady = true,
    shouldAnimate = true,
    hasAnimation = true;
```

* When naming an acessor, start with `get` or `set`. Also always name the getter argument as `value`.

```javascript
var currentStatus;

// Bad
function status(val) {
  if (val) {
    currentStatus = val;
  }

  return currentStatus;
}

// Good
function setStatus(value) {
  currentStatus = value;
}

function getStatus() {
  return currentStatus;
}
```

* When naming an event handler, combine its action with the event type.

> This way it's easier to spot if your function is doing too much.

```javascript
// Bad
$('.button').click(click);

function click() {
  console.log('meh');
}

// Good
$('.button').click(toggleColorOnClick);

function toggleColorOnClick() {
  console.log('should toggle color on click!');
}
```

**[⬆ back to top](#toc)**

## Whitespace

* Use soft tabs set to `2` spaces and never mix spaces with tabs.

```javascript
// Bad
function() {
∙∙∙∙var name;
}

// Bad
function() {
∙var name;
}

// Bad
function() {
⇥var name;
}

// Good
function() {
∙∙var name;
}
```

* Always add an empty line at the end of your file.

```javascript
(function() {
  document.write('Hello World!');
})();

↵
```

* Place a space before and after a condition or loop declarations.

```javascript
// Bad
if(false){return false;}

// Good
if (true) {
  return true;
}

// Bad
while(false){console.log('whatever');}

// Good
while (false) {
  console.log('alright!');
}
```

* Set off operators with spaces.

```javascript
// Bad
var x=y+5;

// Good
var x = y + 5;
```

* Place a space after loop steps.

```javascript
// Bad
for(var i=0;i<10;++i) {
  console.log(i);
}

// Good
for (var i = 0; i < 42; ++i) {
  console.log(i);
}
```

* Place a space after each function argument and add inner spaces.

```javascript
// Bad
function setUser(name,surname,age){
}

// Bad (no inner spaces)
function setUser(name, surname, age) {
}

// Good
function setUser( name, surname, age ) {
}
```

* Objects properties should be split into new lines.

```javascript
// Bad
var user = {name: 'John', surname: 'Doe', age: 42};

// Good
var user = {
  name: 'John',
  surname: 'Doe',
  age: 42
};

// Bad
var setup = { foo: 'bar' };

// Good
var setup = {
}
```

* Use indentation when making long method chains.

```javascript
// Bad
$('.js-items').find('.is-selected').highlight().end().find('.open').updateCount();

// Good
$('.js-items')
  .find('.is-selected')
    .highlight()
    .end()
  .find('.open')
    .updateCount();
```

**[⬆ back to top](#toc)**

## jQuery

* Always cache jQuery lookups.

```javascript
// Bad
$('.js-item').text('Disabled item');
$('.js-item').addClass('is-disabled');

// Good
var $item = $('.js-item');

$item
  .text('Disabled item')
  .addClass('is-disabled');
```

* Prefer `remove()` over `empty()`.

> `remove()` is faster because it doesn't completely rewrite the DOM node.

* Always favor jQuery helpers over third-party and custom stuff.

```javascript
// Bad (importing Underscore/LoDash just to use `_.bind()`)
_.bind(someFunction, this);

// Good (instead use jQuery's `$.proxy()`)
$.proxy(someOtherFunction, this);

// Bad (writing `trim()` from scratch)
function trim(string) {
  return string.replace(/\s/gm, '');
}

trim('   f oo  '); // 'foo'

// Good (instead use jQuery's `$.trim()`)
$.trim('   f oo  '); // 'foo'
```

**[⬆ back to top](#toc)**

## Resources

### Inspiration

* [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
* [Magnetis JavaScript Style Guide](https://github.com/magnetis/styleguide/blob/master/JavaScript.md)
* [Google JavaScript Style Guide](http://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml?showone=Semicolons#Semicolons)
* [Nicolas Bevacqua's JavaScript Style Guide](https://github.com/bevacqua/js)

### Tools

* [ESLint](http://eslint.org)

**[⬆ back to top](#toc)**