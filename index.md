---
layout: page
title: Netshoes Code Styleguide
permalink: /
---

![Netshoes](http://i.imgur.com/5RBW4vv.png)

# Netshoes Styleguide
*last update: 2014-07-24*

Welcome to the Netshoes engineering team standards. Here you will find what we assume to be the best practices and avoid absence of consistence between code.

As far as our projects are made by more than one person, we should find out a way to be consistent about the quality and the code we create. Feel free to send Pull Requests and suggest new standards.


## GIT

At Netshoes, we use [git](http://git-scm.com/) as our source code management. The provider is [GitHub](http://github.com/netshoes).

### GitHub Curators

We need to have points of responsibility for our code base. At Netshoes, we have three persons with responsibilities to maintain the harmony and manage the repositories:

* [Daniel Filho](mailto:daniel.filho@netshoes.com): responsible for front-end code base.
* [Lucio Tanaka](mailto:lucio.tanaka@netshoes.com): responsible for EP (*Elastic Path*).
* [Rodrigo Batalha](mailto:rodrigo.batalha@netshoes.com): responsible for EP (*Elastic Path*).
* [Marcus Moyses](mailto:marcus.moyses@netshoes.com): responsible for ATG and Services.


### Workflow

We use a pretty common workflow for out GIT interactions, based on [Vincent Driessen](http://nvie.com/posts/a-successful-git-branching-model/) workflow. ([PDF here](https://cloudup.com/cpmgj1iHZy7))

![GIT workflow](https://i.cloudup.com/-rgxLsqKV7.png)

## Code Compatibility

For all our main rules on code harmony and compatibility, we're using this `.editorconfig` as our main standard:

```
# editorconfig.org

root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

# [vendor/**]
trim_trailing_whitespace = false
insert_final_newline = varies
end_of_line = varies

```

For more info about `.editorconfig` or to get it working on your code editor, please visit: [http://editorconfig.org/](http://editorconfig.org/)

## CSS

Here at Netshoes, we decided to use [SASS](http://sass-lang.com) as our main CSS authoring tool. This way we can do more producing less code on our Repositories.

We also decided to use the SCSS syntax in favor of a lower learning curve for newcomers and people that are not used to CSS transpilers. So it is basically all the flavours of SASS, with a familiar CSS syntax (and nesting code).

### CSS Authoring Conventions

* If you must use an id selector (`#selector`) make sure that you have no more than one in your rule declaration. A rule like `#header .search #quicksearch { ... }` is considered harmful.
* Always favour class selectors (`.selector`) over id selectors (`#selector`).
* The class names `disabled`, `mousedown`, `danger`, `hover`, `selected`, and `active` should always be namespaced by a class (`li.active` is a good example).


### SASS Conventions

* Use two spaces as indentation: `  `
* Put spaces after `:`in property declarations.
* Put spaces before `{` in rule declarations.
* Always use `border-box` as default `box-sizing`, in favour of cross browser metrics.
* Always use hex codes for colors with three chars when appliable (`#333`) and rgba only when an alpha channel is needed (`rgba(255, 0, 0, .2)`).
* Use `//` for comments instead of blocks (`/* */`). Block comments are used only for documenting the style.
* Document styles using [KSS](https://github.com/kneath/kss) using blocks (`/* */`).
* If your class have nesting childs, comment make a comment on `}` with the rule you're closing: (`} // .ns-wrapper a`).
Here is a good syntax example:

``` scss
/*
Link styling for the main content container

:hover        - Make it 20% transparent.
:active       - Change the color and show an outline border
:visited      - Shows it's been already clicked once, coloring it blue.

Styleguide 0.0.1
*/
.ns-wrapper a {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 16px;
  color: #F00;
  text-decoration: none;

  &:hover {
    color: rgba(255, 0, 0, .8);
  }

  &:active {
    color: #FF0;
    outline: 3px solid #F0F
  }

  &:visited {
    color: #FF0;
  }

} // .netshoes
```

## Markup

## JavaScript

### Task Runner & Building

We use [GruntJS](http://gruntjs.com) as our main task runner. All packages and plugins should be installed as development dependencies, ie: `$ npm install --save-dev grunt-package`.

Here are some packages that should be used on every project:

* grunt
  * The core for gruntjs
* grunt-contrib-watch
  * optimizes development workflow
* grunt-notify
  * It makes even more sense for bigger projects and projects with lots of dependencies and `grunt-contrib-watch`. You can run the task and be notified through native OS notification system about errors.
* grunt-plato
  * this generates a code-quality related report on `dist/plato/`
* grunt-contrib-jshint
  * it's all about code quality, too :)


## Mobile


## Versioning

The scheme used for versioning follows the documentation of [semver (Semantic Versioning)](http://semver.org/).

## Words and Conventions

### Language

As long as we have international operations and engineering teams/partners, all communications, documentations and code comments **must** be made in english.

The name `Netshoes` should always be written this way. Never as `netshoes`, `NetShoes` or `NETSHOES`.


-----
References:

* [GitHub Stylerguide](https://github.com/styleguide/css)
* [Airbnb JS Styleguide](https://github.com/airbnb/javascript#commas)
