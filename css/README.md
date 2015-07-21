# CSS

> Netshoes CSS code styleguide.

## TOC

1. [Preprocessor](#preprocessor)
2. [Syntax](#syntax)
3. [Best practices](#best-practices)
4. [Colors](#colors)
5. [Units](#units)
6. [Inline assets](#inline-assets)
7. [Pseudo elements](#pseudo-elements)
8. [Specificity and nesting](#specificity-and-nesting)
9. [Quotes](#quotes)
10. [Comments](#comments)
11. [Naming conventions](#naming-conventions)
12. [Namespaces](#namespaces)
13. [Whitespace](#whitespace)
14. [Code linting](#code-linting)
15. [Resources](#resources)

## Preprocessor

* [1.1](#1.1) <a name='1.1'></a> [Sass](http://sass-lang.com) is our preprocessor of choice.

* [1.2](#1.2) <a name='1.2'></a> Limit the use of its features to only variables and mixins.

> Getting too crazy with Sass can lead to both terrible code maintenance and output.

* [1.3](#1.3) <a name='1.3'></a> `@extend` is allowed only when used with placeholders.

> `@extend`ing classes can lead to terrible code output.

**[⬆ back to top](#toc)**

## Syntax

* [2.1](#2.1) <a name='2.1'></a> Use the Sassy CSS (SCSS) syntax.

> Since regular CSS code is valid SCSS, it's a win-win.

**[⬆ back to top](#toc)**

## Best practices

* [3.1](#3.1) <a name='3.1'></a> Avoid the use of `!important` at all costs. Exceptions to the rule:
	1. It's being used within a helper class;
	2. You can explain its use.

* [3.2](#3.2) <a name='3.2'></a> Do not use ids.
> They kill modularity and are not necessary for styling.

* [3.3](#3.3) <a name='3.3'></a> When defining a variable, make sure it has a default value by using `!default` provided by Sass.
> That way overriding variables is safer.

* [3.4](#3.4) <a name='3.4'></a> Do not manually add vendor prefixes.
> Our tooling should be able to handle this.

* [3.5](#3.5) <a name='3.5'></a> Do not use vendor-specific font rendering techniques.
> They are not consistent, break constrast and typography rules.

* [3.6](#3.6) <a name='3.6'></a> Prefer `background` over `background-color` when possible.
> Simply because it's a shorthand.

* [3.7](#3.7) <a name='3.7'></a> Do not use `pointer-events`.
> It's not reliable and it's not CSS's role.

* [3.8](#3.8) <a name='3.8'></a> Avoid hard-coded magic numbers.
> These are definitelly a code smell and make super hard to maintain.

```scss
// Bad
.selector {
  width: 73px; // WTF is 73px? Why?
  z-index: 99999; // Brute force here, not good at all
  margin-top: 128px; // Again, what the heck is this?
}

// Good (values actually make sense)
.selector {
  width: grid-columns(2);
  z-index: $depth-screen-foreground;
  margin-top: $selector-inner-padding;
}
```

* [3.9](#3.9) <a name='3.9'></a> Avoid undoing styles.
> These are code smells and almost always have room for improvement.

```scss
// Bad
h2 {
  font-size: 2em;
  margin-bottom: 0.5em;
  padding-bottom: 0.5em;
  border-bottom: 1px solid #ccc;
}

.no-border {

  // Brute force resets down here
  padding-bottom: 0;
  border-bottom: none;
}

// Good
h2 {
  font-size: 2em;
  margin-bottom: 0.5em;
}

.headline {
  padding-bottom: 0.5em;
  border-bottom: 1px solid #ccc;
}
```

* [3.10](#3.10) <a name='3.10'></a> Prefer `em` over `px`.
> This allows for a more flexible element sizing.

**[⬆ back to top](#toc)**

## Colors

* [4.1](#4.1) <a name='4.1'></a> Hexadecimal values should always be in upper case.

> This approach improves code readability.

```scss
// Bad
.link {
  color: #eaeae2;
}

// Good
.link {
  color: #EAEAE2;
}
```

* [4.2](#4.2) <a name='4.2'></a> Prefer shorthand notation.

```scss
// Bad
$color: #CCCCCC;

// Good
$color: #CCC;

// Bad
$color: #FF6600;

// Good
$color: #F60;
```

* [4.3](#4.3) <a name='4.3'></a> Do not use CSS color names.

> They're not consistently implemented on browsers.

```scss
// Bad
.error {
  background: red;
}

// Good
.error {
  background: #FF0066;
}
```

**[⬆ back to top](#toc)**

## Numbers and units

* [5.1](#5.1) <a name='5.1'></a> Avoid specifying units for zero values.

```scss
// Bad
.square {
  border: 0px;
}

// Good
.square {
  border: 0;
}
```

* [5.2](#5.2) <a name='5.2'></a> Do not use floating decimals.

> They do make code harder to read.

```scss
// Bad
.heading {
  margin-left: -.75px;
  padding: .25px;
  border: 2.px;
}

// Good
.heading {
  margin-left: -0.75px;
  padding: 0.25px;
  border: 2.0px;
}
```

* [5.3](#5.3) <a name='5.3'></a> Use `pt` units to declare `letter-spacing` values.

> We found it easier to match Photoshop visual specifications.

```scss
// Bad
.text {
  letter-spacing: -.75px;
}

// Good
.text {
  letter-spacing: -.75pt;
}
```

* [5.4](#5.4) <a name='5.4'></a> Do not add units for `line-height` values.

> Not doing so will break vertical rythm.

```scss
// Bad
p {
  line-height: 1.5px;
}

// Good
p {

  // Equivalent to 150% of the font size
  line-height: 1.5;
}
```

**[⬆ back to top](#toc)**

## Inline assets

* [6.1](#6.1) <a name='6.1'></a> Inline assets are only allowed if they weight less than or equal to `1KB` and are presented only once in the code.

**[⬆ back to top](#toc)**

## Pseudo elements

* [7.1](#7.1) <a name='7.1'></a> Use double collons `::` to access pseudo elements.

```scss
// Bad
.button:after {
  background: fuchsia;
}

// Good
.button::before {
  outline: 1px solid;
}
```

**[⬆ back to top](#toc)**

## Specificity and nesting

* [8.1](#8.1) <a name='8.1'></a> Avoid overly-specific selectors by making use of good ol' classes.
* [8.2](#8.2) <a name='8.2'></a> Maximum of `3` levels of nesting.

```scss
// Bad
.menu {
  background: orange;
  .menu-item {
    font-family: sans-serif;
    .link {
      &:hover {
       color: red;
      }
      > .link-label {
        font-weight: bold;
      }
    }
  }
}

// Good
.menu {
  background: orange;
}

.menu-item {
  font-family: sans-serif;
}

.link:hover {
  color: red;
}

.link-label {
  font-weight: bold;
}
```

**[⬆ back to top](#toc)**

## Quotes

* [9.1](#9.1) <a name='9.1'></a> Use single quotes `'` for everything.

* [9.2](#9.2) <a name='9.2'></a> Always wrap values with quotes.

> Even though some are not mandatory, it will enforce consistency.

```scss
// Bad
@import helpers/clearfix;

input[type=radio] {
  opacity: 0.35;
}

.selector {
  background: url(path/to/image.png) no-repeat;
}

// Good
@import 'helpers/clearfix';

input[type='radio'] {
  opacity: 0.35;
}

.selector {
  background: url('path/to/image.png') no-repeat;
}
```

**[⬆ back to top](#toc)**

## Comments

* [10.1](#10.1) <a name='10.1'></a> Following is an example of a well documented component following our standards.

```scss
/* ==========================================================================
   Component name
   ========================================================================== */

// Component theming properties
$component-background-color: #F06 !default;
$component-color: #FFF !default;

// Set component's layout direction, which changes the way arrows are drawn
$component-direction: 'down' !default;

/**
 * Some description about my component.
 * Always try to be very concise and straightforward.
 *
 * TODO: Split this component in two other components.
 */

.component {
  // ...
}

/* Sub component name
   ========================================================================== */

/**
 * Some description about my sub component.
 *
 * FIXME: Rendenring issue on IE8.
 */

.component__sub-component {
}

/**
 * Modifier: Description of component modifier.
 */

.component--modifier {
  // ...
}

/**
 * Function: Description of component function.
 */

@function component-function() {
  // ...
}

/**
 * Placeholder: Description of component placeholder.
 */

%component-placeholder {
  // ...
}

/**
 * Mixin: Description of component mixin.
 */

@mixin component-mixin {
  // ...
}
```

**[⬆ back to top](#toc)**

## Naming conventions

* [11.1](#11.1) <a name='11.1'></a> Use `hyphen-case` to name classes, variables, functions, mixins and placeholders.

```scss
// Bad
.fooBar {
  border: none;
}

@function LoremIpsumDolor {
  text-align: center;
}

// Good
.foo-bar {
  outline: 1px solid red;
}


// Good
.lorem-ipsum-dolor {
  vertical-align: middle;
}
```

* [11.2](#11.2) <a name='11.2'></a> Elements should have the base module name as a prefix and the name of the element, separated by double underscores `__`.

> The advantage of elements is to not rely on the markup to apply a certain style.

```scss
.menu-item {
  // ...
}

// Bad
.menu-item.icon {
  // ...
}

// Good
.menu-item__icon {
  // ...
}

// Bad
.menu-item-list {
  // ...
}

// Good
.menu-item__list {
  // ...
}
```

* [11.3](#11.3) <a name='11.3'></a> Modifiers should have the base module name as a prefix and the name of the modifier, separated by double hyphens `--`.

> Modifiers are also complementary, therefore a master/base class should exist to provide the visual foundation.

```scss
.logo {
  background: url('./logo.png') no-repeat;
}

// Bad
.logoBig {
  transform: scale(1.5);
}

// Good
.logo--big {
  transform: scale(1.25);
}

// Bad
.logo-with-small-size {
  transform: scale(0.25);
}

// Good
.logo--small {
  transform: scale(0.5);
}
```

* [11.4](#11.4) <a name='11.4'></a> States can be prefixed with `is`, `has` or `should`.

```scss
// Bad
.logo.logoHidden {
  opacity: 0;
}

// Good
.logo.is-hidden {
  opacity: 0;
}

// Bad
.logo.logo-disabled {
  border: 1px solid;
}

// Good
.logo.is-disabled {
  border: 1px solid fuchsia;
}

// Bad
.button-with-icon {
  // ...
}

// Good
.button.has-icon {
  // ...
}
```

**[⬆ back to top](#toc)**

## Namespaces

> Namespaces help us understand what role classes play.

| Prefix | Description | Example |
|---|---|---|
| `c` | For user interface components | `c-dropdown` |
| `ab` | For A/B testing stuff (usually removed and re-implemented once the test is done) | `ab-jira-ticket-42` |
| `u` | For utils | `u-clearfix` |
| `t` | For custom themes | `t-black-friday` |
| `_` | For hacks (that should be removed as soon as possible) | `_fix-dropdown-ie8` |
| `is`, `has`, `should` | For component states | `is-disabled` |
| `v` | For vendor service hooks (such as Optimizely, Crazy Egg, etc) | `v-optimizely` |

**[⬆ back to top](#toc)**

## Whitespace

* [13.1](#13.1) <a name='13.1'></a> Add a space after selector definition.

```scss
// Bad
.selector{content: 'foo';}

// Good
.selector { content: 'foo'; }
```

* [13.2](#13.2) <a name='13.2'></a> Add a space between a rule and its value.

```scss
// Bad
.button {
  color:#FFF;
  background:#F06;
}

// Bad
.button {
  color: #FFF;
  background: #F06;
}
```

* [13.3](#13.3) <a name='13.3'></a> Add inner spaces to inline selectors.

```scss
// Bad
.selector {content: 'foo';}

// Good
.selector { content: 'foo'; }
```

* [13.4](#13.4) <a name='13.4'></a> If a selector has more than a single rule, break all the rules into new lines.

> This will improve code readability.

```scss
// Bad
.section { cursor: pointer; text-align: center; }

// Good
.section { cursor: default; }

// Good
.section {
  text-align: left;
  vertical-align: middle;
}
```

* [13.5](#13.5) <a name='13.5'></a> When targeting multiple selectors break each one in a new line.

```scss
// Bad
.footer, .header, .main {
  display: block;
}

// Good
.footer,
.header,
.main {
  margin: 0 auto;
}
```

* [13.6](#13.6) <a name='13.6'></a> Keep multiple rules in a single line but add a white space after each comma.

```scss
// Bad
.box {
  box-shadow: 0 1px 1px #eee,
  inset 0 1px 0 #f00;
}

// Good
.box {
  box-shadow: 0 1px 1px #eee, inset 0 1px 0 #f00;
}
```

* [13.7](#13.7) <a name='13.7'></a> Add a white space after each comma on multiple values.

```scss
// Bad
.selector {
  background: rgba(0,0,0,0.5);
}

// Good
.selector {
  background: rgba(255, 255, 255, 0.75);
}
```

**[⬆ back to top](#toc)**

## Organization

* [14.1](#14.1) <a name='14.1'></a> The order of rules declaration should look like the following.
	1. `@extend`
	2. `@import`
	3. Variable definitions
	4. Functions, placeholders and mixins
	5. Other rules
	
```scss
// Bad
.button {
  border: 3px solid seagreen;
  @include border-radius(5px);
  background: fuchsia;
  @extend %button-base;
}

// Good
.button {
  @extend %button-base;
  @include border-radius(5px);

  border: 3px solid seagreen;
  background: fuchsia;
}

// Bad
.square {
  @include border-radius(3px);
  @extend %shape-base;
  @include box-sizing(border-box);
  @extend %square-base;
  // Other rules
}

// Good
.square {
  @extend %shape-base;
  @extend %square-base;
  @include border-radius(3px);
  @include box-sizing(border-box);

  // Other rules
}

// Bad
.selector {
  border: 0;
  @include font-smoothing;
  @mixin inner-mixin {
    // ...
  }
  @extend centered-content;
  %inner-placeholder {
    // ...
  }
  $color: red;
}

// Good
.selector {
  @extend centered-content;
  @include font-smoothing;

  $color: red;

  %inner-placeholder {
    // ...
  }

  @mixin inner-mixin {
    // ...
  }

  border: 1px solid gray;
}
```

**[⬆ back to top](#toc)**

## Code linting

* [15.1](#15.1) <a name='15.1'></a> We use [stylelint](http://stylelint.io) to lint our CSS code. All the rules can be found on the (`stylelint-config.js`)[/linters/stylelint-config.js] file.

**[⬆ back to top](#toc)**

## Resources

### CSS naming methodologies

* [SMACSS](https://smacss.com)
* [BEM](https://bem.info)
* [SUIT CSS](http://suitcss.github.io)

### Blog posts

* [Code smells in CSS](http://csswizardry.com/2012/11/code-smells-in-css)
* [More Transparent UI Code with Namespaces](http://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces)
* [Line-height units](http://tzi.fr/css/text/line-height-units#Unitless)
* [Medium’s CSS is actually pretty f***ing good](https://medium.com/@fat/mediums-css-is-actually-pretty-fucking-good-b8e2a6c78b06)
* [Why Ems?](https://css-tricks.com/why-ems)

**[⬆ back to top](#toc)**
