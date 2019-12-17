---
title: "Expression Basics: Introduction and Overview"
date: 2019-10-06
difficulty: Beginner
tags: ["basics", "javascript"]
pinned: true
description: >-
  Learn the basics of After Effects expressions in this free course by Motion Developer. You'll learn everything from the basics of variables and conditions to more advanced topics like functions and objects.
---

Expressions can be daunting when you're starting out, with lots of confusing words and seemingly endless possibilities.

This course will break down expressions into their fundamentals, teaching you all you need to know to be able to write them with ease.

## Course Content

The topics you'll cover are:

- [Variables](../basics-variables)
- [Conditions](../basics-conditions)
- Referencing layers and compositions (coming soon)
- Native attributes (coming soon)
- Loops (coming soon)
- Functions (coming soon)
- Native methods (coming soon)
- Objects (coming soon)
- Arrays (coming soon)

## What are expressions?

When working in After Effects you change layers properties (such as position, opacity or text) by typing them in, or dragging the values around, adding keyframes to change them over time.

This process of changing and animating properties forms the basis of working and animating in After Effects.

What if rather than setting a property manually, you need it to always be the same as another one? Or decide what value to have based of another layer?

This is where expressions come in, as an alternate way of setting the value of properties, that enable you to combine values together and make automatic decisions about what that property should be.

![Example Expression](example-expression.png)

This alternate way is by writing lines of code, in a language called **JavaScript**, that After Effects will run. It then sets the value of the property to the result of that code.

> Expressions are lines of computer code that After Effects runs to generate the value of a property

## How to add an expression

You can add an expression to a property in a couple of ways, with the most simple being to <kbd>alt</kbd> + <kbd>click</kbd> on that properties stop watch (the icon next to it's name) or to use the 'Add Expression' shortcut <kbd>alt</kbd> + <kbd>shift</kbd> + <kbd>=</kbd>.

This will add a new expression with some placeholder code in there for you. This placeholder references the **before expression value**, that is the value of the property without any expression applied.

When After Effects runs the code, it will see the reference to the value and use that, meaning you can change and animate the property as normal.

> Add a new expression to any property of a layer by alt-clicking on the stopwatch, such as position, and change the property. You'll see the property change as it's referenced by the expression

![Changing a value with the default expression applied](default-expression.png)

## Setting the value

The statement completion value of the entire expression.

The last line that has a completion value of (`!empty`).

[https://github.com/getify/You-Dont-Know-JS/blob/9959fc904d584bbf0b02cf41c192f74ff4238581/types-grammar/ch5.md#statements--expressions]

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval]

[https://www.mattzeunert.com/2017/01/10/whats-a-statement-completion-value-in-javascript.html]

[https://www.ecma-international.org/ecma-262/6.0/#sec-block-runtime-semantics-evaluation]