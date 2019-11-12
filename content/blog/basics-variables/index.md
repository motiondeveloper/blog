---
title: "Expression Basics: Variables"
date: 2019-10-11
isDraft: true
difficulty: Beginner
tags: ["basics", "javascript"]
pinned: false
description: >-
  Learn how to store and use values in expressions using JavaScript variables.
---

[MDN Referance]: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables

In this Expression Basics article, you will learn how to create and use variables in your expressions. This will provide a solid foundation when moving on to the later articles in the series.

- [Variables as pointers](#variables-as-pointers)
- [Declaring variables](#declaring-variables)
  - [Naming variables](#naming-variables)
  - [Undefined vs is not defined](#undefined-vs-is-not-defined)
- [Assigning their value](#assigning-their-value)
- [Updating variables](#updating-variables)
- [Data types](#data-types)
- [Var vs let](#var-vs-let)
- [Constants](#constants)
  - [Why use a constant](#why-use-a-constant)
- [Wrapping up](#wrapping-up)

## Variables as pointers

When writing any code we're manipulating and storing pieces of data, such as numbers, text, or booleans (`true`/`false`). For example, setting the following expression on the `Source Text` property of a text layer:

```js
'Hello world'
```

Will cause the text layer to show 'Hello World'. If we wanted to use this data throughout our expression, writing out our `'Hello World'` text each time means that making changes would become time consuming.

```js
if (time < 5) {
  'Hello world';
} else if (time < 10) {
  'Hello world' + ' welcome to';
} else {
  'Hello world' + ' welcome to' + ' expressions';
}
```

> If you don't understand the other parts of this expression, don't worry! We'll get to them in the following posts in the series.

Instead of using our data directly, variables allow us to create a named reference to the data which we then use throughout our expression. This allows us to manipulate our data in dynamic ways.

It's important to note that a variable isn't the data itself, but rather a pointer to that piece of data. When the JavaScript engine (what runs the code) encounters one, it looks to see what the variable is pointing to then uses and that data accordingly. While this might not seem like an important distinction now, it will be important as we move on to more advanced topics.

## Declaring variables

Before we can use a variable in our expression, we need to create (or declare) it. We do this by using the JavaScript keyword (a word that has a special meaning in the language) `let` followed by our variable name.

```js
let myText;
```

Once we have a variable, we can retrieve the data it points to by writing it's name.

```js{2}
let myText;
myText;
```

If you run this expression on your `Source Text` property you'll see that there isn't any text. That's because while we have created a variable, it doesn't have a value assigned to it yet.

### Naming variables

Limitations apply when naming variables, as well as some best practices.

Some names that aren't allowed are:

- Names starting with a number
- Reserved words such as `if`, `function`, or `for` (you can find a full list of reserved words [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords))

> It's best to give variables a name that describes their value, and not single letters or numbers. This will make your code much easier for other people to read, or your future self.

The convention is to write variable names in lower camel case, where you capitalize the first letter of every word except for the first one, such as `myText`, `animationDuration`, or `currentLayerWidth`.

### Undefined vs is not defined

JavaScript gives variables that don't point to anything are given a special value called `undefined`.

It's important to note that this is different to when we access a variable that we haven't declared, in which case we will get an error `variable is not defined`. We can test this using our example earlier:

```js{2}
let myText;
(myText === undefined);
```

Will show the value `true`, while:

```js
(myText === undefined);
```

Will give us the error `myText is not defined` since we've tried to access a variable we haven't declared.

## Assigning their value

Once we've declared a variable, we can give it a value by writing it's name followed by the equals sign (`=`) and the value we want to give it. You call assigning a variable's value the first time 'initializing' that variable.

```js{2}
let myText;
myText = 'Hello world';
```

If we now use our variable `myText`, we'll see it's value returned and set as the `Source Text` of our text layer.

```js{3}
let myText;
myText = 'Hello world';
myText;
```

We can shorten our expression by declaring and initializing in the same line.

```js
let myText = 'Hello world';
myText;
```

This is what we'll want to do most of the time as it's much shorter.

## Updating variables

As suggested by their name, we can update the value that a variable points to at any place in our code by using the equals (`=`) sign:

```js{2}
let myText = 'Hello world';
myText = 'Hello JavaScript!';
myText;
```

Which will display 'Hello JavaScript!' on our text layer.

## Data types

There a specific types of data that we can store in variables, which we will explore more in depth in future articles.

- **Number**, such as `8`, `12.653`, which we can perform mathematical calculations on
- **String**, which are pieces of text such as our 'Hello world' example. Strings must be wrapped in single (`''`) or double (`""`) quotes so JavaScript knows you're not trying to access a variable
- **Boolean**, which you can think of like switches, as they can either have the value `true` of `false` (notice these are not wrapped in quotes)
- More complex data types such as Object, Null, Undefined, and Symbols

> In JavaScript variables themselves don't have a type, only they data they refer to

## Var vs let

You might be wondering why we've been using `let` so far, and what happened to `var`.

`let` is a new way to declare variables available in modern versions of JavaScript (such as what we use in CC2019). It's introduced to be a more strict alternative to `var`, which would let you create and use variables in ways which could cause confusion or hard to diagnose bugs.

We won't cover the differences between the two in this post, but for now all you need to know is it's best to use `let` in your expressions.

## Constants

We've been using `let` to declare variables, which as their name suggests you can change their value at any point in your expression. We can also create what's called a **constant**, which behaves much like a variable except that you cannot reassign it's value once it has been initialized. It's a *read only variable*.

We do this by using the keyword `const` instead of `let`.

```js{2}
const myText = 'Hello world';
myText;
```

If we tried to reassign the value of `myText`, we would get the error 'Assignment to constant variable'.

> It's important to note that while you can't change what value a constant references (points to), that underlying value can still be modifed. For example if you had a constant that pointed to a 'person', you couldn't change which person it referenced, but you could change that persons characteristics such as their height or weight.

### Why use a constant

It may be tempting to use `let` instead of `const` throughout your code since it's more flexible. However, it's much easer to understand what's happening in your expressions when you know that the value of a variable isn't going to, or hasn't been, changed.

For example, if we had this expression on our `Source Text` property:

```js
let dialog = 'Hello World';

if (time > 10) {
  dialog = 'Goodbye World';
}

dialog;
```

When reading this expression, you would need to go back and check where the last place the value of `dialog` had been changed was to know what your text would be. In larger expressions with more complex flows, this can be difficult.

If we used a constant we can be confidant what value each variable has without having to look through our expression.

```js
const helloDialog = 'Hello World';
const goodbyeDialog = 'Goodbye World';

if (time > 10) {
  goodbyeDialog;
} else {
  helloDialog;
}
```

This might seem trivial in this example, but it's a good habit to always use `const` where possible.

## Wrapping up

Now you know how to use `let` and `const` to create and use variables, as well as best practices that will help you as you go on to write more complex expressions.
