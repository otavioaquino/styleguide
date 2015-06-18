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

