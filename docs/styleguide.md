# Documentation Styleguide

These are the guidelines for writing documentation.

## Titles

* Each page must have a single `#`-level title at the top.
* Chapters in the same page must have `##`-level titles.
* Sub-chapters need to increase the number of `#` in the title according to
  their nesting depth.
* All words in the page's title must be capitalized, except for conjunctions
  like "of" and "and" .
* Only the first word of a chapter title must be capitalized.

Using `Quick Start` as example:

For API references, there are exceptions to this rule.

## Markdown rules

* Use `bash` instead of `cmd` in code blocks (due to the syntax highlighter).
* Lines should be wrapped at 80 columns.
* No nesting lists more than 2 levels (due to the markdown renderer).
* All `js` and `javascript` code blocks are linted with
[standard-markdown](http://npm.im/standard-markdown).

## Picking words

* Use "will" over "would" when describing outcomes.
* Prefer "in the ___ process" over "on".
