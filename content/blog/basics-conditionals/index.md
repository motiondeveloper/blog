---
title: "Expression Basics: Conditions"
date: 2019-11-11
difficulty: Beginner
tags: ["basics", "javascript"]
pinned: false
description: >-
  Learn how to make decisions in your expressions by learning how to use JavaScript conditionals and logical operators.
---

[MDN Referance]: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals

Now that you have learned how to [create and use variables](../../basics-variables/index.md), the next step is to make decisions based on their value.

You make decisions in code with whats called a **conditional statement**. This is a statement that executes different code based on the value of a condition, such as whether one number is larger than another or if a checkbox is ticked.

- [If/else statements](#ifelse-statements)
  - [Condition statement](#condition-statement)
  - [Else if](#else-if)
- [Comparison operators](#comparison-operators)
  - [Type coercion](#type-coercion)
- [Logical operators](#logical-operators)
- [Turnery statements](#turnery-statements)
- [Switch statements](#switch-statements)

## If/else statements

The most common conditional statement is an **`js›if` statement**. In basic terms, an `js›if` statement follows the format:

```js
if (condition) {
  // Run when true
} else {
  // Run when false
}
```

An if statement contains:

- The `js›if` keyword
- Followed by the condition statement in parenthesis, that will resolve to `js›true` or `js›false`
- Then a set of curly braces containing code that runs if the condition returns `js›true`
- The `js›else` keyword
- A set of curly braces containing the code that runs if the condition returns `js›false`

For example, if you apply the following expression on the `Source Text` property of a text layer:

```js
if (true) {
  'Condition is true';
} else {
  'Condition is false';
}
```

The layer will show the text 'Condition is true', while if we change it to `js›false`:

```js{1}
if (false) {
  'Condition is true';
} else {
  'Condition is false';
}
```

You will see the text 'Condition is false'.

### Condition statement

### Else if

## Comparison operators

### Type coercion

[MDN Comparison](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math#Comparison_operators)

## Logical operators

## Turnery statements

## Switch statements
