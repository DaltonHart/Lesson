# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) ES6 - `const` and `let`


### Learning Objectives
*After this lesson, you will be able to:*
- Contrast `const` with `var`
- Contrast `let` with `var`
- Apply `const` and `let`


## `const` and `let`

`const` and `let` are new keywords for declaring variables. Where before you would have declared:

```javascript
var x = 1;
```

With ES6, you can now declare:

```javascript
const x = 1;
```

or

```javascript
let x = 1;
```

### `const`

`const` is short for "constant". It literally means, "declaring a variable that will be constant." So, a `const` can't be reassigned. If I assign a `const` to a [primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) type (e.g. a string, number, or boolean), I can't change its value at all.

```javascript
const hi = 'hello';
hi = 'goodbye'; // this line will throw an error because I attempted to change
// the reference to a const.
```

Try to use `const` whenever possible to maintain predictability.

##### But!

Just to make it a little trickier, this does _not_ mean that a `const` is immutable. JavaScript assigns by reference. This means that a variable can't be reassigned entirely, but we *can* change a property of an object or add an item to an array. If I assign an object literal as a `const` variable like this:

```javascript
const anObject = {
  hi: 'hello',
  animal: `muffin`
};
```

I can then change the values of the keys in it, like this:

```javascript
anObject.animal = 'puppy';
```

The new value of `anObject` is now:

```javascript
{
  hi: 'hello',
  animal: 'puppy'
}
```

This is valid, because `anObject`'s reference doesn't change. I just can't wipe the whole variable.


### `let`


So, that's `const`. The other replacement for `var` is `let`.

`let` has the same normal assignment rules as `var`. The value and reference of a `let` variable can change, so this will run with no errors:

```javascript
let hi = 'hello';
hi = 'goodbye';
console.log(hi); // 'goodbye'
```

When declaring variables using ES6 syntax, if you need to declare a variable whose value will _not_ change, declare it as a `const`. If the variable's value _will_ or _might_ change, declare it as a `let`.

`let`, like `var`, can be reassigned as much as you like. Why use `let` at all, then, when you could just use `var`?

##### `let` is actually about scoping
Variables in JavaScript are **scoped** - or track values - either globally or within an entire function. Since `var` in JavaScript is scoped to the nearest parent function, it can be pretty unpredictable, right?

```javascript
function varTest() {
  var x = 1;
  if (true) {
    var x = 2;  // same variable!
    console.log(x);  // Prints 2
  }
  console.log(x);  // This is going to print 2!
}
varTest();
```

Despite declaring `var x` in two different places, it's the same variable, leading to some unwanted and unexpected behavior. Scoping is something that always needs to be tracked in JavaScript for precisely reasons like this.

ES6 introduced `let` to fix this scoping issue. Using `let` is more predictable and straightforward than using `var`. `let` is a **block scoped** variable, so its value is scoped to the nearest curly braces `{}`, rather than the whole function. Thus, within a loop, `let` will create a new instance for each iteration instead of changing the original variable.

```js
function letTest() {
  let x = 1;
  if (true) {
    let x = 2;  // curly braces = different variable
    console.log(x);  // 2
  }
  console.log(x);  // 1
}
```

Here's another example. Using regular `var`, this always prints 5.

```js
var array = [];
for(var i=0; i<5; i++) {
    array.push({onclick: function() { console.log('array: ', i); }});
}

array[0].onclick(); // array: 5
array[1].onclick(); // array: 5
```

It prints `5`
because `var` extends the scope of `i` outside the scope of the for loop curly
braces. In this example, there is just one variable called `i` whose value gets
overwritten many times.

However, if we use `let`, we can give each variable in that `for` loop its own scope.
`let` makes the scope of `i` appear only inside the curly braces of the `for` loop; `let` actually creates a new `i` variable each time the `for` loop goes through. Each `i` variable has a value that never changes.

```js
let array = [];
for(let i=0;i<5;i++) {
    array.push({onclick: function() { console.log('array: ', i); }});
}

array[0].onclick(); // array: 0
array[1].onclick(); // array: 1
```

With more predictable scope, `let` variables are easier to keep track of
visually than `var`s, and less likely to introduce bugs to your code.
