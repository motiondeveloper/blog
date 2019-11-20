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

Now that you have learned how to [create and use variables](../basics-variables), the next step is to make decisions based on their value.

You make decisions in code with whats called a **conditional statement**. This is a statement that executes different code based on a condition, such as whether one number is larger than another or if a checkbox is ticked.

- [If/else statements](#ifelse-statements)
- [Condition statements](#condition-statements)
  - [Comparison operators](#comparison-operators)
- [Else if](#else-if)
- [Logical operators (AND, OR and NOT)](#logical-operators-and-or-and-not)
- [Wrapping up](#wrapping-up)

## If/else statements

The most common conditional statement is an **`js›if` statement**. In basic terms, an `js›if` statement follows the format:

```js
if (condition) {
  // Run when true
} else {
  // Run when false
}
```

And contains:

- The `js›if` keyword
- The condition statement in parenthesis, that will resolve to `js›true` or `js›false`
- A set of curly braces containing code that runs if the condition is `js›true`
- The `js›else` keyword
- A set of curly braces containing the code that runs if the condition is `js›false`

For example, if you apply the following expression on the `Source Text` property of a text layer:

```js
if (true) {
  // This code is run
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
  // This code is run
  'Condition is false';
}
```

You will see the text 'Condition is false'.

The `js›else` block is optional, in which case any code following the `js›if` statement will run as normal.

```js
if (true) {
  'Condition is true';
}

// Code here will always run
```

## Condition statements

In the same way we've used the `js›true` or `js›false` keywords in the condition of our `js›if` statement, you can use any code that will resolve to be either true or false. Most of the time this will be a comparison between values, or a check if one value is equal to another.

### Comparison operators

There's a variety of methods available in JavaScript to compare values called **comparison operators**. These operators form the basis of making choices in the condition statement.

The comparison operators test if two values are:

- `js›===` equal and the same type
- `js›!==` not equal and of the same type, or are of different types

> For more info on JavaScript types, see the [Expression Basics: Variables](../basics-variables/index.md) post

Or test if one value is:

- `js›<` less than another
- `js›>` greater than another
- `js›<=` less than *or* equal to another
- `js›<=` greater than *or* equal to another

For example:

```js
if (5 > 3) { // Evaluates to true
  'Code will run';
}

if ('My String' === 'Their String') { // Evaluates to false
  'Code will not run';
}

if ('534' === 534) { // Evaluates to false
  'Code will not run';
}

```

> In some cases you may need to check if two values are equal, regardless of their type. You can do this with the non strict equal and not equal operators: `js›==` and `js›!=`.

Certain values are considered *falsy* as they will always resolve to false, meaning you can test for them without a comparison operator. These are:

- The number zero `js›0`
- Empty strings: `js›""`, `js›''`
- The null object (absence of a value): `js›null`
- Undefined primitive: `js›undefined`

For example:

```js
const myString = '';
if (myString) { // Evaluates to false
  'Code will not run';
}
```

## Else if

To select between more than two choices, you can write `js›if` statements back to back using `js›else if`. For example:

```js
const jobTitle = 'Animator';
if (jobTitle === 'Animator') {
  'Busy keyframing!'; 
} else if (jobTitle === 'Developer') {
  'Writing code!';
} else {
  // If jobTitle isn't Animator or Developer
  'Working hard!';
}
```

## Logical operators (AND, OR and NOT)

You can test for a combination of conditions using what's called **logical operators**. They are:

- AND `js›&&`, to test if all expressions are true
- OR `js›||`, to test if any expressions are true

With each side of the operator being a condition statement.

For example:

```js
const software = 'After Effects';
const version = 14;
if (version >= 16 && software === 'After Effects') {
  // Doesn't run
  'You can use JavaScript!';
} else {
  'You can use ExtendScript';
}
```

Will show `js›'You can use ExtendScript'` as `js›version >= 16` evaluates to false, while:

```js
const software = 'After Effects';
if (software === 'VS Code' || software === 'After Effects') {
  // Runs
  'Ready to code!';
} else {
  'Busy working';
}
```

Will show `js›'Ready to code!'` as `js›software === 'After Effects'` evaluates to true.

> Each side of a logical operator is a separate condition statement, so the expression `js›software === 'VS Code' || 'After Effects'` will always be true as, `js›'After Effects'` resolves to true

You can use a third operator, the NOT `js›!` operator, to **negate** an expression, such that:

```js
!true === false;
!false === true;
```

For example:

```js
const usingAfterEffects = false;
if (!usingAfterEffects) {
  // Will run
  'Why not try AE?'
}
```

## Wrapping up

Now you know how to use the `js›if` condition statement, as well as a variety of **comparison** and **logical** operators to make decisions in your expressions.
