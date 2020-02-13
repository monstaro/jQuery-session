# Selectors and the jQuery Object

The jQuery function takes in an element selector string, and outputs a jQuery object.

```JavaScript
$(selector) // => jQuery Object

```

The selection process is similar to using `document.querySelector()`, but has some important differences. Let's take a look at how we can select things with jQuery.

Use the [jQuery Documentation](https://api.jquery.com/) to answer the following questions:

## Questions:
1. How do you select a single element in jQuery? How does this differ from vanilla JS?

$ selector, different because vanilla uses document.querySelector method. 


2. What does the jQuery function return? How is it similar or different from a DOM Element object?

Returns the jQuery object,
the jQuery object contains jQuery methods unlike
a DOM element object which returns a function


3. How can you select multiple elements with jQuery?

$("element1, element2, element3")

4. How can you select multiple elements with different IDs and classes in one selector expression?

$("header, .className, #idName")


5. What are the different ways of chaining selectors?

You can chain methods ex. $('.class').text('hello world').addClass('newClass')

6. How do you select elements based on different attributes?

Just like normal JS, # for IDs, . for classes. 

7. How do you select a checkbox based on its state?

:checked method.
$('.checkbox:checked')


## Exercises:
Open up the `selectors.html` file in your browser.
In the `selectors.js` file, use jQuery to:
1. Select all the labels and give them a class of "green"

2. Select all of the `phone` inputs and give them a class of "yellow"

3. Select the label for the email input and give it a class of "blue"


4. On page load, log the id of the checked check box (hint: look into the `.attr()` jQuery method)


5. Give all labels inside of a p tag a class of "purple"


6. Give the Clear button a class of red

7. Commit your changes!

Once you're done, head on to [part-2-content](../part-2-content/README.md)
