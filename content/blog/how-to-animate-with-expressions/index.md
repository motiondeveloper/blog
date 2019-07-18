---
title: How to animate with expressions (Intro to eKeys)
date: 2019-07-16T07:11:06.032Z
description: >-
  How to animate using expressions, with full control over the easing, using the
  importable After Effects animation engine eKeys.
---

[GithubPage]: https://github.com/motiondeveloper/eKeys

When making [Motion Graphics Templates](https://helpx.adobe.com/au/after-effects/using/creating-motion-graphics-templates.html) in After Effects, or any other type of automated work, there comes a time when you wish you were able to add and modify keyframes with expressions. 

While you're able to get some functionality using the `linear` or `ease` expressions, this quickly gets messy, and you're still not able to modify the easing like you are with keyframes.

**eKeys** solves this problem by giving you an easy way to create keyframes in expressions. In this blog post, you'll learn how to get starting using eKeys in your projects.

## What is eKeys?

eKeys is an importable animation engine for After Effects that allows you to animate within expressions, with the same level of control as traditional keyframes.

It comes in the form of a `.jsx` file that's imported into your project, with the properties for each keyframe added/modified within the expression.

## Installation

You can download the latest version of eKeys from the [GitHub Releases page](https://github.com/motiondeveloper/eKeys/releases). You can also find some more detailed information [more detailed information][GithubPage] there on using eKeys.

Once downloaded, all you need to do is import the file into your After Effects project like you would any other footage item.

> ⚠️ Since After Effects doesn't count footage items that are only referenced within expressions as used, it's recommended that you also place the eKeys.jsx file in any compositions where it is referenced.
>
> This will ensure After Effects includes the file when collecting assets or packaging into a Motion Graphics Template

### Compatibility

eKeys is only compatible with the new [JavaScript](https://helpx.adobe.com/after-effects/using/expression-language-reference.html) engine available in CC2019.

If you're using an older version of After Effects, you can use an [old version of eKeys](https://github.com/motiondeveloper/ekeys/tree/extendscript) that's compatible.

## Writing the expression

To start using eKeys in an expression, you first need to create a reference to the file we imported earlier.

```js
const eKeys = footage('eKeys.jsx').sourceData;
```

Then we can create our keyframe objects.

### The Keyframe Array

eKeys represents each keyframe as an object in an array, with properties that define how to animate.

![diagram showing keyframe icons in an array, and the object properties of the first keyframe](keyframe-array.svg "eKeys Keyframe Array")

Below is two example keyframes that will animate a position property over two seconds.

```js
const eKeys = footage('eKeys.jsx').sourceData;
const keys = [
    {
        keyTime: 1,
        keyValue: [100, 540],
        easeOut: 90,
    },{
        keyTime: 2,
        keyValue: [800, 540],
        easeIn: 100,
    }
];
```

> eKeys expects each keyframe to have a `keyTime` and `keyValue` property, while all the other properties are optional.

#### The format of each of these properties is:

- **`keyTime`**

    The location of the keyframe on the timeline, in seconds

- **`keyValue`**

    The value of the keyframe, which can be a number or array

- **`easeIn`** and **`easeOut`**

    The amount of easing to be applied as a number between 0 and 100 (both defaulting to 33).
    
    This works the same way as the influence percentage you might be used to seeing on traditional keyframes.

- **`velocityIn`** and **`velocityOut`**

    The incoming and outgoing velocity of the keyframe (both defaulting to 0).

You can find more information on these properties on the [Github Page][GithubPage].

> eKeys sorts the keyframes by their time before animating, so you don't have to put them in the right order - but your expressions will be a lot clearer if you do!

### Animation Groups

Now that we have an array of keyframe objects, we need to create what's called an **animation group**, which is how we pass these keyframes into eKeys.

```js{13}
const eKeys = footage('eKeys.jsx').sourceData;
const keys = [
    {
        keyTime: 1,
        keyValue: [100, 540],
        easeOut: 90,
    },{
        keyTime: 2,
        keyValue: [800, 540],
        easeIn: 100,
    }
];
const animateRight = eKeys.AnimGroup(keys);
```

> You can create as many animation groups with different keyframes as you need to

### Returning the final animation

You can now return your final animation with the line:

```js{14}
const eKeys = footage('eKeys.jsx').sourceData;
const keys = [
    {
        keyTime: 1,
        keyValue: [100, 540],
        easeOut: 90,
    },{
        keyTime: 2,
        keyValue: [800, 540],
        easeIn: 100,
    }
];
const animateRight = eKeys.AnimGroup(keys);
animateRight(time);
```