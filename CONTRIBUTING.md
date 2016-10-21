# Contributing

:+1::tada: First off, thanks for taking the time to contribute! :tada::+1:

This project adheres to the Contributor Covenant [code of conduct](CODE_OF_CONDUCT.md).
By participating, you are expected to uphold this code. Please report unacceptable
behavior to contact@jshacks.io.

The following is a set of guidelines for contributing to JSHacks projects.
These are just guidelines, not rules, use your best judgment and feel free to
propose changes to this document in a pull request at github.com/jshacks/boilerplate.

## Submitting Issues

* You can create an issue on this repository,
but before doing that please read the notes below and include as many details as
possible with your report. If you can, please include:
  * The version of project you are using
  * The operating system you are using
  * If applicable, what you were doing when the issue arose and what you
  expected to happen
* Other things that will help resolve your issue:
  * Screenshots and animated GIFs
  * Error output that appears in your terminal, dev tools or as an alert
  * Perform a search on the issues page
  to see if a similar issue has already been submitted

## Submitting Pull Requests

* Include screenshots and animated GIFs in your pull request whenever possible.
* Follow the JavaScript [coding style](/docs/development/coding-style.md).
* Write documentation in [Markdown](https://daringfireball.net/projects/markdown).
  See the [Documentation Styleguide](/docs/styleguide.md).
* Use short, present tense commit messages. See [Commit Message Styleguide](#git-commit-messages).

## Styleguides

### General Code

* End files with a newline.
* Place requires in the following order:
  * Built in Node Modules (such as `path`)
  * Local Modules (using relative paths)
* Place class properties in the following order:
  * Class methods and properties (methods starting with a `@`)
  * Instance methods and properties
* Avoid platform-dependent code:
  * Use `path.join()` to concatenate filenames.
  * Use `os.tmpdir()` rather than `/tmp` when you need to reference the
    temporary directory.
* Using a plain `return` when returning explicitly at the end of a function.
  * Not `return null`, `return undefined`, `null`, or `undefined`

### Git Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally
* When only changing documentation, include `[ci skip]` in the commit description
* Consider starting the commit message with an applicable emoji:
  * :art: `:art:` when improving the format/structure of the code
  * :racehorse: `:racehorse:` when improving performance
  * :non-potable_water: `:non-potable_water:` when plugging memory leaks
  * :memo: `:memo:` when writing docs
  * :penguin: `:penguin:` when fixing something on Linux
  * :apple: `:apple:` when fixing something on macOS
  * :checkered_flag: `:checkered_flag:` when fixing something on Windows
  * :bug: `:bug:` when fixing a bug
  * :fire: `:fire:` when removing code or files
  * :green_heart: `:green_heart:` when fixing the CI build
  * :white_check_mark: `:white_check_mark:` when adding tests
  * :lock: `:lock:` when dealing with security
  * :arrow_up: `:arrow_up:` when upgrading dependencies
  * :arrow_down: `:arrow_down:` when downgrading dependencies
  * :shirt: `:shirt:` when removing linter warnings

