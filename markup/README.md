# Markup

> Netshoes markup code styleguide.

## TOC

1. Syntax
2. Doctype
3. Language attribute
4. Encoding
5. IE compatibility mode
6. CSS and JavaScript includes
7. Organization
8. Boolean attributes
9. JavaScript hooks
10. Whitespace
11. Resources

## Syntax

* [1.1](#1.1) Always use single quotes `'`.

```html
<!-- Bad -->
<div id=foo></div>

<!-- Bad -->
<div id="foo"></div>

<!-- Good -->
<div id='foo'></div>
```

* [1.2](#1.2) Always close self closing tags with a slash `/`.

```html
<!-- Bad -->
<p>Lorem ipsum<br>dolor sit</p>

<!-- Good -->
<p>Lorem ipsum<br />dolor sit</p>

<!-- Bad -->
<img src='path/to/image.png'>

<!-- Good -->
<img src='path/to/image.png' />
```

* [1.3](#1.3) Always close optional closing tags.

```html
<!-- Bad -->
<ul>
  <li>Once
  <li>Upon
  <li>A Time
</ul>

<!-- Good -->
<ul>
  <li>Once</li>
  <li>Upon</li>
  <li>A Time</li>
</ul>
```

**[⬆ back to top](#toc)**

## Doctype

* [2.1](#2.1) Follow HTML5 doctype to enforce standards and a more consistent rendering.

```html
<!doctype html>
<html>
  <head></head>
  <body></body>
</html>
```

**[⬆ back to top](#toc)**

## Language attribute

* [3.1](#3.1) Always specify a language for documents.

```html
<html lang='en-us'>
  <!-- ... -->
</html>
```

**[⬆ back to top](#toc)**

## Encoding

* [4.1](#4.1) Use `utf-8` as de default encoding of HTML documents.

```html
<head>
  <meta charset='utf-8'>
</head>
```

**[⬆ back to top](#toc)**

## IE compatibility mode

* [5.1](#5.1) Internet Explorer supports the use of a document compatibility `<meta>` tag to specify what version of IE the page should be rendered. You should force edge mode.

```html
<meta http-equiv='X-UA-Compatible' content='IE=Edge'>
```

**[⬆ back to top](#toc)**

## CSS and JavaScript includes

* [6.1](#6.1) There's no need to specify the `type` attribute of include tags.

```html
<!-- External CSS -->
<link rel='stylesheet' href='path/to/external.css'>

<!-- Inline CSS -->
<style>
  /* ... */
</style>

<!-- JavaScript -->
<script src='path/to/script.js'></script>
```

**[⬆ back to top](#toc)**

## Organization

* [7.1](#7.1) The order of rules declaration should look like the following.
  1. `id` and `name`
  2. Generic classes (utils, typography, grid and so on)
  3. Specific classes
  4. States
  5. Data attributes
  6. Other element attributes
  7. Boolean attributes

```html
<input id='user-input' name='user-input' class='u-pull-left input--big is-disabled' data-component='input-text' data-parameters='{value: 42}' type='text' disabled />
```

**[⬆ back to top](#toc)**

## Boolean attributes

* [8.1](#8.1) Do not add values to boolean attributes.

```html
<!-- Bad -->
<input type='checkbox' value='Bar' checked='checked'>Foo</input>

<!-- Good -->
<input type='checkbox' value='Bar' checked>Foo</input>

<!-- Bad -->
<input type='submit' disabled='disabled'>Send email</input>

<!-- Good -->
<input type='submit' disabled>Send email</input>
```

**[⬆ back to top](#toc)**

## JavaScript hooks

* [9.1](#9.1) JavaScript hooks should be declared as `component` data attribute.

```html
<button class='c-button c-button--big' data-component='buy-it-button'>Buy it</button>
```

* [9.2](#9.2) Always use `parameters` data attribute for component parameters following the literal object syntax.

```html
<div class='c-carousel' data-component='carousel' data-parameters='{direction: "left-to-right", speed: 2.5, easing: "easeOutExpo"}'>
  <!-- ... -->
</div>
```

**[⬆ back to top](#toc)**

## Whitespace

* [10.1](#10.1) Use soft tabs set to `2` spaces and never mix spaces with tabs.

* [10.2](#10.2) Always add an empty line at the end of your file.

* [10.3](#10.3) Break multiple attributes in new lines when needed.

```html
<div
  class='modal'
  id='main-modal'
  style='display: none;'
  hidden
>
</div>
```

* [10.4](#10.4) When closing self closing tags, always add a single space before `/>`.

```html
<!-- Bad -->
<img src='doge.png'/>

<!-- Good -->
<img src='doge.png' />
```

**[⬆ back to top](#toc)**

## Resources

### Inspiration

* [Magnetis Front-End Styleguide](https://github.com/magnetis/styleguide)
* [Code Guide by @mdo](http://codeguide.co)
* [Harry Roberts coding style](http://csswizardry.com/2012/04/my-html-css-coding-style)

**[⬆ back to top](#toc)**
