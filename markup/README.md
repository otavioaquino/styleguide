# Markup

> Netshoes markup code styleguide.

## TOC

1. Syntax
1. Doctype
2. Language attribute
4. Encoding
3. IE compatibility mode
5. CSS and JavaScript includes
6. Organization
7. Boolean attributes
9. JavaScript hooks
8. Whitespace
8. Resources

## Syntax

* Always use single quotes `'`.

```html
<!-- Bad -->
<div id=foo></div>

<!-- Bad -->
<div id="foo"></div>

<!-- Good -->
<div id='foo'></div>
```

* Always close self closing tags with a slash `/`.

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

* Always close optional closing tags.

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

* Follow HTML5 doctype to enforce standards and a more consistent rendering.

```html
<!doctype html>
<html>
  <head></head>
  <body></body>
</html>
```

**[⬆ back to top](#toc)**

## Language attribute

* Always specify a language for documents.

```html
<html lang='en-us'>
  <!-- ... -->
</html>
```

**[⬆ back to top](#toc)**

## Encoding

* Use `utf-8` as de default encoding of HTML documents.

```html
<head>
  <meta charset='utf-8'>
</head>
```

**[⬆ back to top](#toc)**

## IE compatibility mode

* Internet Explorer supports the use of a document compatibility `<meta>` tag to specify what version of IE the page should be rendered. You should force edge mode.

```html
<meta http-equiv='X-UA-Compatible' content='IE=Edge'>
```

**[⬆ back to top](#toc)**

## CSS and JavaScript includes

* There's no need to specify the `type` attribute of include tags.

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

* The order of rules declaration should look like the following.
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

* Do not add values to boolean attributes.

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

* JavaScript hooks should be declared as `component` data attribute.

```html
<button class='c-button c-button--big' data-component='buy-it-button'>Buy it</button>
```

* Always use `parameters` data attribute for component parameters following the literal object syntax.

```html
<div class='c-carousel' data-component='carousel' data-parameters='{direction: "left-to-right", speed: 2.5, easing: "easeOutExpo"}'>
  <!-- ... -->
</div>
```

**[⬆ back to top](#toc)**

## Whitespace

* Use soft tabs set to `2` spaces and never mix spaces with tabs.

* Always add an empty line at the end of your file.

* Break multiple attributes in new lines when needed.

```html
<div
  class='modal'
  id='main-modal'
  style='display: none;'
  hidden
>
</div>
```

* When closing self closing tags, always add a single space before `/>`.

```html
<!-- Bad -->
<img src='doge.png'/>

<!-- Good -->
<img src='doge.png' />
```

**[⬆ back to top](#toc)**

## Resources

### Inspiration

* [Code Guide by @mdo](http://codeguide.co)
* [Harry Roberts coding style](http://csswizardry.com/2012/04/my-html-css-coding-style)

**[⬆ back to top](#toc)**
