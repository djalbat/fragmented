# Fragmented

Relates to URL hash fragments.

Fragmented allows your application to affect and be affected by the hash fragment of the URL in the browser's address bar. Changes to the fragment are invisible to the server whilst being included in the browser's history. For this reason fragments are useful to single page applications that need the back and forward buttons to work for them, and for deep linking.

All that Fragmented does is create a global [`fragment`](https://github.com/djalbat/Fragmented/blob/master/es6/fragmented.js) variable, the value of which the application can get or set, and which also has `onFragmentChange` and `offFragmentChange` properties so that handlers can be registered and unregistered.

## Installation

With [npm](https://www.npmjs.com/):

    npm install fragmented

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/fragmented.git

...then install the necessary modules with npm from within the project's root directory:

    npm install

You will need to do this if you want to look at the example.

## Example

Launch the `example.html` file in the project's root directory.

## Usage

```js
require('fragmented');
```

To assign the current value of the fragment to a variable:

```js
var pageFragment = fragment;
```

To set the fragment:

```js
fragment = 'test';
```

Registering and un-registering change handlers:

```js
const { onFragmentChange, offFragmentChange } = fragment;

function fragmentChangeHandler() {
  console.log(fragment)
}

onFragmentChange(fragmentChangeHandler);

// offFragmentChange(fragmentChangeHandler);
```

Note that change handlers are invoked whenever the `fragment` variable is set. If you do not want this behaviour, in other words you want to be able to change the fragment in the address bar without your change handlers being invoked, you can to this with an additional `setFragment()` function as follows:

```js
const { setFragment } = fragment;

setFragment('test'); // change handlers won't be invoked
```

Also note that the `fragment` variable is an instance of the `String` object, rather than a string primitive, in order that properties on it can be defined. So use `==` rather than `===` if equating it to a string primitive. Finally, note that if you use a `switch` statement, which uses strict equality, you will need to explicitly coerce the `fragment` variable to a string primitive before passing it in.

Finally, if you do not like a 'global' `fragment` variable floating around, you can of course refer to it as `window.fragment`.

## Compiling from source

Automation is thanks to [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Contact

- james.smith@djalbat.com
- http://djalbat.com
