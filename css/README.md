# CSS

> Netshoes CSS code styleguide.

## TOC

1. [Preprocessor](#preprocessor)
2. [Syntax](#syntax)
3. [Best practices](#best-practices)
1. [Colors](#colors)
2. [Units](#units)
3. [Inline assets](#inline-assets)
4. [Pseudo elements](#pseudo-elements)
5. [Specificity and nesting](#specificity-and-nesting)
4. [Quotes](#quotes)
5. [Comments](#comments)
2. [Naming conventions](#naming-conventions)
3. [Namespaces](#namespaces)
3. [Whitespace](#whitespace)
4. [Code linting](#code-linting)
5. [Resources](#resources)

## Preprocessor

* [1.0](#1.0) [Sass](http://sass-lang.com) is our preprocessor of choice.

* [1.1](#1.1) Limit the use of its features to only variables and mixins.

> Getting too crazy with Sass can lead to both terrible code maintenance and output.

* [1.2](#1.2) `@extend` is allowed only when used with placeholders.

> `@extend`ing classes can lead to terrible code output.

**[⬆ back to top](#toc)**

## Syntax

* Use the Sassy CSS (SCSS) syntax.

> Since regular CSS code is valid SCSS, it's a win-win.

**[⬆ back to top](#toc)**

## Best practices

* Avoid the use of `!important` at all costs. Exceptions to the rule:
	1. It's being used within a helper class;
	2. You can explain its use.

* Do not use ids.
> They kill modularity and are not necessary for styling.

* When defining a variable, make sure it has a default value by using `!default` provided by Sass.
> That way overriding variables is safer.

* Do not manually add vendor prefixes.
> Our tooling should be able to handle this.

**[⬆ back to top](#toc)**

## Colors

* Hexadecimal values should always be in upper case.

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

* Prefer shorthand notation.

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

* Do not use CSS color names.

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

* Avoid specifying units for zero values.

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

* Do not use floating decimals.

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

* Use `pt` units to declare `letter-spacing` values.

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

* Do not add units for `line-height` values.

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

* Inline assets are only allowed if they weight less than or equal to `1KB` and are presented only once in the code.

**[⬆ back to top](#toc)**

## Pseudo elements

* Use double collons `::` to access pseudo elements.

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

* Avoid overly-specific selectors by making use of good ol' classes.
* Maximum of `3` levels of nesting.

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

* Use single quotes `'` for everything.

* Always wrap values with quotes.

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

* Following is an example of a well documented component following our standards.

```scss
/* ==========================================================================
   Component name
   ========================================================================== */

// Component theming properties
$component-background-color: #FF0066 !default;
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

* Use `hyphen-case` to name classes, variables, functions, mixins and placeholders.

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

* Elements should have the base module name as a prefix and the name of the element, separated by double underscores `__`.

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

* Modifiers should have the base module name as a prefix and the name of the modifier, separated by double hyphens `--`.

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

* States can be prefixed with `is`, `has` or `should`.

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
| `u` | For helper classes | `u-clearfix` |
| `t` | For custom themes (that usually are going to be thrown away) | `t-black-friday` |
| `_` | For hacks (that should be removed as soon as possible) | `_fix-dropdown-ie8` |
| `is`, `has`, `should` | For component states | `is-disabled` |
| `v` | For vendor services hooks (such as Optimizely, Crazy Egg, etc) | `v-optimizely` |

**[⬆ back to top](#toc)**

## Whitespace

**[⬆ back to top](#toc)**

## Organization

* The order of rules declaration should look like the following.
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

* We use [SCSS-Lint](https://github.com/brigade/scss-lint) to lint our Sass code. All the rules can be found on the (`.scss-lint.yml`)[/linters/.scss-lint.yml] file.

**[⬆ back to top](#toc)**

## Resources

### CSS naming methodologies

* [SMACSS](https://smacss.com)
* [BEM](https://bem.info)
* [SUIT CSS](http://suitcss.github.io)

### Blog posts

* [Code smells in CSS](http://csswizardry.com/2012/11/code-smells-in-css)
* [More Transparent UI Code with Namespaces](http://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces)
* [Unitless line-heights](http://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights)

**[⬆ back to top](#toc)**