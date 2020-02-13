# Introduction to jQuery

## What is jQuery

[jQuery](https://jquery.com/) is a library built on top of JavaScript to make our lives easier as developers. It provides some extra functionality for accessing and manipulating elements on the DOM, as well as responding to events.

While it is an older library, it is still used in [plenty](https://trends.builtwith.com/javascript) of codebases. Furthermore, sometimes interviewers will give you a code challenge in jQuery, so it's a good thing to be familiar with.

Until you start working in a framework like React, jQuery will be able to make your DOM manipulation much easier, so we're going to focus on the follow four areas of the library's functionality:

1. Selecting Elements
2. Getting and Setting Content
3. Responding to events
4. Traversing the DOM

Before that, let's talk about how to install it.

## Getting jQuery

jQuery can be added to a project in two ways:
1. A Content-Delivery Network (CDN)
2. Via a package manager (like `npm`)

A CDN functions much like a script tag -- we add it an html file, and import the library whenever the HTML page runs. This is what we'll use for this lesson.

```HTML
<!-- Google-Hosted CDN: -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

```

You're likely to see jQuery imported as a package down the line. In some project starter kits, the library will already be brought in as a dependency, but it's good to know how to set it up yourself.


## Using jQuery

jQuery provides a function that looks like this:
```JavaScript
$('selector')
```
Where `'selector'` is a string used to select some kind of element.

The selectors are typically CSS selectors -- similar to what you've used when querySelecting elements.

Unlike `document.querySelector`, the jQuery function will give you back a jQuery object with a [whole lot of methods](https://api.jquery.com/) in it.

```JavaScript
$('h1') // => outputs a jQuery object for any h1 elements on the page
// contrast with
document.querySelector('h1') // => outputs a DOMElement

$('h1').addClass('blue');
```

We'll look more deeply at other methods available to us later on, but for now, explore the documentation a bit.

### Side Note: `$(document).ready()`
Sometimes a DOM may take longer to load than jQuery expects. If this happens, jQuery may try and run code on elements that don't exist yet! To avoid this potential issue, it's safe to put your jQuery code inside of a [`$(document).ready()`](https://learn.jquery.com/using-jquery-core/document-ready/) callback function. This way, the jQuery won't run until the `document` is completely loaded.

```JavaScript
// Top of a scripts.js or similar file:

$(document).ready(function() {
  // jQuery code goes here, in the body of this callback function
})
```

The [docs](https://learn.jquery.com/using-jquery-core/document-ready/) are a helpful resource to understand what this method is doing, but the takeaway is that putting your jQuery code in a `$(document).ready()` is a safe way to prevent bugs.


## Questions
1. What terminal command would you use to bring jQuery in via npm?

npm install jquery

2. After you have jQuery brought in as a dependency, how would you access it in a JavaScript file? (think about how we bring `chai` into a project)

Require it in your JS file

3. Why would we bring in jQuery as a `dependency` rather than a `devDependency`?

Because the jQuery library is required for the code to run

4. Looking at the documentation, what does `.addClass()` do?

adds a class to the selected element

## Exercises:

Let's get some basic practice with jQuery.
1. Navigate into the `intro-exercise` directory. jQuery is included in this project via the CDN.
2. In the `intro.js` file, use jQuery to select the span element and:
  1. change the span's text to say '1911'
  2. give the span a class of 'green'
3. Commit your changes!

## Up next:
Go to the [selectors](./part-1-selectors/) README file.
