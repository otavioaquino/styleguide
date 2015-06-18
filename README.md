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

 - [1.1](#1.1) <a name='1.1'></a> some quick example description

  > Reason to use it like this

    ```javascript
    // bad
    // multiple examples of bad code

    // good
    // multiple examples of good code
    ```


- **[⬆ back to top](#topics)**

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

**[⬆ back to top](#table-of-contents)**
