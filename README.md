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

## Chained Method Calls

 - [1.1](#1.1) <a name='1.1'></a> When a chain of method calls is too long to fit on one line, there must be one call per line, with the first call on a separate line from the object the methods are called on. If the method changes the context, an extra level of indentation must be used.

```javascript
// bad
elements.addClass( "foo" ).children().html( "hello" ).end().appendTo( "body" );

// good
elements
  .addClass( "foo" )
  .children()
    .html( "hello" )
  .end()
  .appendTo( "body" );
```


- **[⬆ back to top](#topics)**


