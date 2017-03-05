# Fragmented

Relates to URL hash fragments.

Fragmented allows your application to affect and be affected by the hash fragment of the URL in the browser's address bar. Changes to the fragment are invisible to the server whilst being included in the browser's history. For this reasonn fragments are useful to single page applications that need the back and forward buttons to work for them, and for deep linking.

All that Fragmented does is create a global [`fragment`](https://github.com/djalbat/Fragmented/blob/master/es6/fragmented.js) variable, the value of which the application can get or set, and which also has `onChange` and `offChange` properties so that handlers can be registered and unregistered.

## Installation

With [npm](https://www.npmjs.com/):

    npm install fragmented

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/Fragmented.git

...then install the necessary modules with npm from within the project's root directory:

    npm install

You will need to do this if you want to look at the examples.

## Example

Launch the `example.html` file in the project's root directory.

## Usage

```js
require('fragmented');
```

To print the fragment to the console:

```js
console.log(fragment)
```

To set the fragment:

```js
fragment = 'test';
```

Registering and unregistering change handlers:

```js
function fragmentChangeHandler() {
    console.log(fragment)
}

fragment.onChange(fragmentChangeHandler);

// fragment.offChange(fragmentChangeHandler);
```

Note that change handlers will not be called when the `fragment` variable is set, only when the actual fragment is changed. 

## Compiling from source

Automation is thanks to [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Contact

- james.smith@djalbat.com
- http://djalbat.com
