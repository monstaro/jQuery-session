# DOM Traversal

Last but not least, jQuery provides us methods for traversing the DOM.

Think back to your mod one projects (Check yo Self, Number Guesser, etc). If you had to delete a card by clicking a button, how many `.parentElement`s or `.nextSiblings` did you have to chain?

jQuery is here to ease things up a bit.

Let's say we had a list of elements:

```html
<ul>
  <li id="a">A</li>
  <li id="b">B</li>
  <li id="c">C</li>
  <li id="d">D</li>
</ul>
```

And when something happens to D, we want to change something else on A. In vanilla JS, this could look something like:

```JavaScript
let d = document.querySelector('#d');
d.addEventListener('click', function(e) {
  e.target.previousSibling.previousSibling.prepreviousSibling.innerText = "D was clicked!"
});
```

In jQuery, we could do this:

```JavaScript
$('#d').on('click', function() {
  $(this).siblings('#a').text('D was clicked!')
})
```

While some things may look new here, we're just chaining some handy methods on to the element that was clicked in order to access and modify its sibling.

We could also use jQuery to add or delete elements in response to an event like this! Let's explore some other methods:

## Questions:
1. Describe what DOM traversal is and why it is useful.
DOM Traversal refers to navigating through the DOM tree in events. It is useful because
we can utilize the DOM tree to do multiple things with one function. 

2. What can the siblings(), parent(), and children() methods do?
siblings() method selects everything shared by the parent on that element.
parent() selects the parent element that is targeted
children() selects anything below that element on the DOM tree.

3. What's the difference between `.siblings()` and `.siblings([selector])`?
.siblings() targets all siblings on an element, but the [selector] argument can be used to filter certain characteristics of the siblings.

4. What is prepend(), append(), and what are their differences?
prepend() will put something before the selected element, and append() will insert something after the selected element. 

5. What arguments can `.prepend()` and `.append()` take?
The arguments are basically the content you want to insert into the targeted element. They take a second argument which represents additional content you can add.

6. What is the difference between parent() and parents()? Why would I want to use either?
parents() targets all ancestors of the selected element(parent, grandparent, etc. ) whereas parent() only travels one element up the DOM tree. parent() would be used if you wanted to apply something to one thing (ex. remove a card/image from the dom). I can't think of why you would want to use parents() in a typical scenario.  

7. Describe closest() and find(). What are their use cases?
the closest() method gets passed a selector and travels up the DOM tree until it finds a match with that selector. find() method also gets passed a selector but doesn't just find it's closest parent with that selector, but all elements on the page with that selector. 


## Exercises:
We've got two sets of exercises to tie the last sections together:

1. [Grocery List](./grocery-list)
2. [Presidents](./presidents)

Once you've finished and committed these exercises, push up all your changes and make a PR to submit your work! You're ready to write some jQuery.
