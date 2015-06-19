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

 - [00.0](#00.0)<a name='00.0'></a> some quick example description

  > Reason to use it like this

    ```javascript
    // bad
    // multiple examples of bad code

    // good
    // multiple examples of good code
    ```


- **[⬆ back to top](#topics)**

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

## EditorConfig

 - [1.1](#1.1) <a name='1.1'></a> We chosen to use [EditorConfig](http://editorconfig.org/) to maintain our code consistency, your IDE should be compatible with this plugin. [Here](http://editorconfig.org/#download) is a list of available IDE's.

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


- **[⬆ back to top](#topics)**

## Whitespace

 - [00.0](#00.0)<a name='00.0'></a>Use soft tabs set to 2 spaces.

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

 - [00.0](#00.0)<a name='00.0'></a>Place 1 space before the leading brace.

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

 - [00.0](#00.0)<a name='00.0'></a>Place 1 space before the opening parenthesis in control statements (`if`, `while` etc.). Place no space before the argument list in function calls and declarations.

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

 - [00.0](#00.0)<a name='00.0'></a>Set off operators with spaces.

    ```javascript
    // bad
    var x=y+5;

    // good
    var x = y + 5;
    ```

 - [00.0](#00.0)<a name='00.0'></a>End files with a single newline character.

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

 - [00.0](#00.0)<a name='00.0'></a>Leave a blank line after blocks and before the next statement

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
