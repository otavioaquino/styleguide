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
