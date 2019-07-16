---
title: How to animate using expressions in Adobe After Effects (Intro to eKeys)
date: 2019-07-16T07:11:06.032Z
description: >-
  How to animate using expressions, with full control over the easing, with the
  importable After Effects animation engine eKeys.
---
When making [Motion Graphics Templates](https://helpx.adobe.com/au/after-effects/using/creating-motion-graphics-templates.html) in After Effects, or any other type of automated work, there comes a time when you wish you were able to add and modify keyframes with expressions. 

While you're able to get some functionality using the `linear` or `ease` expressions, this quickly gets messy, and you're still not able to modify the easing like you are with keyframes.

This problem is solved with the After Effects tool, **eKeys**. In this blog post, you'll learn how to get starting animating with eKeys in one of your projects.

## What is eKeys?

eKeys is an importable animation engine for After Effects that allows you to animate within expressions, with the same level of control as traditional keyframes.

It comes in the form of a `.jsx` file that's imported into your project, with the properties for each keyframe added/modified within the expression.

## Installation

You can download the latest version of eKeys from the [GitHub Releases page](https://github.com/motiondeveloper/eKeys/releases). You can also find some more detailed information [more detailed information](https://github.com/motiondeveloper/eKeys) there on using eKeys.

Once downloaded, all you need to do is import the file into your After Effects project like you would any other footage item.

> ⚠️ Since After Effects doesn't count footage items that are only referenced within expressions as used, it's recommended that you also place the eKeys.jsx file in any compositions where it is referenced.
>
> This will ensure After Effects includes the file when collecting assets or packaging into a Motion Graphics Template

### Compatibility

eKeys is only compatible with the new [JavaScript](https://helpx.adobe.com/after-effects/using/expression-language-reference.html) engine available in CC2019.

If you would like to use eKeys, but are stuck using an older version of After Effects, you can use an [old version of eKeys](https://github.com/motiondeveloper/ekeys/tree/extendscript) that's compatible.

## Writing the expression

To start using eKeys in an expression, you first need to create a reference to the file we imported earlier.

```js
const eKeys = footage('eKeys.jsx').sourceData;
```

Then we can create our keyframe objects.

### The Keyframe Array

With eKeys, each keyframe is represented as an object in an array, with properties that define how to animate.

![diagram showing keyframe icons in an array, and the object properties of the first keyframe](/img/keyframe-array.svg "eKeys Keyframe Array")

Below is two example keyframes that will animate a position property over two seconds.

``` javascript
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

Here you can see that 
