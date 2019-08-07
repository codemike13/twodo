# TwoDo

It's TWO pieces of data! And it's todo app number TWO. It's TWOdo.

Get it?


### Setup

Using our humble arrays only, we're going to incorporate completeness into our TWOdo app. Every item will not only have a string representing the task we have to do, but also a boolean representing whether it's done yet.

There are TWO (okay I'll stop) ways to architect this app.

1. Hold our todo names in one array and their completeness in another, allowing us to say that a todo name at a given index holds its completeness information in *another* array at the *same* index.
2. Represent each array as a sub-array of two items, a string that's the title and a boolean that's the completeness. That way, at a given index, we can say that the index 0 of *the array there* will be that todo's name, and the value at index 1 of that array will be the todo's completeness.

Both architectures have been started for you, and you can simply comment in or out whichever one you want! Choose whichever you think you'll "reason about" (as they say) best, but also feel free to switch.

Or do both! I did both!


### Tasks

<!-- 1. Write a function to print a given todo to the dom. You've done this before! -->
<!-- 1. Write a function to print every todo individually, using the function you just made. Now, you'll want to pass the todo's *name*. If you're using sub-arrays, that means you'll have to pass in not the `todo`, but the todo's name value, which should be its first (0th) index. Be careful! -->
<!-- 1. Now that you've written them, call your list-printing function, maybe up there right after your arrays. If you did it right, on load your page should list the todos we started with! -->
<!-- 1. Write a little helper function that adds a todo to your array(s). You'll need to push into both arrays if you're going with a dual-array setup, or push in a sub-array, depending on your setup. -->
<!-- 1. Write the equivalent helper function to *remove* one item from the array(s). -->
<!-- 1. Now let's write a function to add to our list, complete with an event listener to run it when our add function is run. Grab the user's input and add it to your data and to the dom! -->
<!-- 1. Let's write some new helper functions for our mark complete feature. The first takes in a number and marks the matching todo complete in our data. -->
<!-- 1. Now write a helper function that, given a number, marks the equivalent `li` complete. I recommend a line through the text, but apply any other or additional css you want. There area few ways to use the number you're given to find the `li` you want to mark; I recommend an `nth-child()` selector. -->
<!-- 1. Given those helper functions (and try using them in the console to see if they work!), let's write our user-facing function for marking complete. It should run whenever the user hits the MARK COMPLETE function (so... an event listener!), and the function should grab the user's input and pass it to your two helper functions. Don't forget to adjust for index vs number, as our data is 0-based, but we should no longer expect our users to think that way! -->
1. Last major part: deleting *all todos* that are marked complete. But first, let's write a helper function to delete all `li`s from the DOM.
1. Now the function: it should run every time the DELETE COMPLETED button is pushed, and it should go through and find those marked completed and delete them from the array (don't worry about the dom yet!). You can build a new set of data that doesn't have the completed ones, or splice the current set of data, but both are tricky! When your data is only incomplete todos, run your dom-list-clearing function and your list-printing function, and this big ol' function is all done!
1. As are you!