# SCM

> Netshoes source control management styleguide.

## TOC

1. [Git](#git)
2. [Configuration](#configuration)
3. [Change type](#change-type)
4. [Commits](#commits)
5. [Branches](#branches)
6. [Fetching, merging and pushing](#fetching-merging-and-pushing)
7. [Resources](#resources)

## Git

* [1.1](#1.1) We use [Git](https://git-scm.com) as our SCM.

## Configuration

* [2.1](#2.1) Always have `* text=auto` set on [`.gitattributes`](./.gitattributes).

> It ensures line endings are normalized.

## Change type

> [3.1](#3.1) We use a range of change types to easily identify and differentiate changes.

| Prefix | Description |
|---|---|
| `feature` | When adding a feature that provides real value to the product |
| `fix` | When fixing a bug |
| `wip` | When testing something (work in progress) |
| `refactor` | When working on a refactor of some sort |

## Commits

* [4.1](#4.1) Write meaningful and straightforward commit summaries.

```sh
# Bad
git commit assets -m 'changed something' # ORLY? What have you changed?

# Good
git commit assets -m 'Switched `reset.css` to `normalize.css`.'
```

* [4.2](#4.2) Avoid long commit summaries by limiting the maximum characters to `50`.

> Detailed descriptions should go on the commit message.

```sh
# Bad
git commit assets/javascripts -m 'Added `FIXME` note to dropdown module because it wasn't working on IE8.'

# Good
git commit assets/javascripts -m 'Added `FIXME` note to dropdown module.'
```

* [4.3](#4.3) Write commit summaries in the past tense.

> By the time you commit something, the change is already there.

```sh
# Bad
git commit scripts -m 'Fix CI integration.'

# Bad
git commit scripts -m 'Fixes CI integration.'

# Bad
git commit scripts -m 'Fixing CI integration.'

# Good
git commit scripts -m 'Fixed CI integration.'
```

* [4.4](#4.4) Use proper english writing on commits.

> Because SCM is also code documentation.

```sh
# Bad (Everything in lower case, no proper punctuation and "whatever" really?)
git commit assets/stylesheets -m 'updated clearfix or whatever'

# Bad (Why are you screaming?)
git commit assets/stylesheets -m 'UPDATED CLEARFIX'

# Good (Meaningful commit summary with proper orthography)
git commit assets/stylesheets -m 'Updated clearfix implementation to use a more modern approach.'
```

* [4.5](#4.5) Prefix commit summaries with the [change type](#change-type) in upper case wrapped within `[]`.

> This is specially useful for filtering commit entries and measuring our work.

```sh
# Bad
git commit tests -m 'Test specs.'

# Good
git commit tests -m '[FEATURE] Added test specs for JSON parser.'
```

## Branches

* [5.1](#5.1) Always work inside a feature branch.

> Feature branches are simple and effective. Avoid touching the `master` branch.

* [5.2](#5.2) Branches should be named as their [change type](#change-type), followed by their [JIRA](https://www.atlassian.com/software/jira) ticked id and the feature title (lower hypen-case and in the present tense).

> We found this to be an easy way to consolidate our agile workflow with the way we ship code.

```sh
# Bad
git checkout -b fixed-analytics

# Good
git checkout -b fix/1345-fix-analytics-implementation

# Bad
git checkout -b SideBarEnhancements

# Good
git checkout -b refactor/4053-sidebar
```

## Fetching, merging and pushing

* [6.1](#6.1) When fetching from remote, prefer rebase instead of the default merge.

> Git's merge creates meaningless micro merge commits. Our commit history should make sense.

```sh
# Bad (default strategy is to merge, which will generate a commit entry)
git pull

# Good
git pull --rebase
```

* [6.2](#6.2) Always review your commits with interactive rebase before pushing your changes.

> This is like your own code review. You're responsible for maintaining a great commit history.

```sh
# Bad
# (...) Lots of commits later
git push

# Good (rebase last 5 commits in history before pushing the changes)
git rebase -i HEAD~5 && git push

# Good (rebase specific branch against the current one before pushing the changes)
git rebase -i feature/1755-social-links-on-footer && git push
```

## Resources

### Tools

* [Kaleidoscope](http://kaleidoscopeapp.com)
* [Tower](http://www.git-tower.com)

### Articles

* [Every line of code is always documented](http://mislav.uniqpath.com/2014/02/hidden-documentationo)
* [5 Useful Tips For A Better Commit Message](https://robots.thoughtbot.com/5-useful-tips-for-a-better-commit-message)
* [Git merge vs. rebase](http://mislav.uniqpath.com/2013/02/merge-vs-rebase)
* [Alterando seus commits com rebase](http://www.raphaelfabeni.com.br/git-alterando-commits-parte-1) (pt-br)
