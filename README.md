# Fragmented

Relates to URL hash fragments.

Fragmented allows your application to effect and be affected by the hash fragment portion of the URL in the browser's address bar. The hash fragment is invisible to the server whilst being noticed by browser, with it's changes being added to the browser's history. For this reason Fragmented's functionality is useful to single page applications that wan't the back and forward buttons to work for them, and for deep linking.

All that Fragmented does is expose a global `fragmented` variable, the value of which the application can gan or set, and which also has `onChange` and `offChange` properties so that handlers can be registered and unregistered.

Installation

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

## Compiling from source

Automation is thanks to [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Contact

- james.smith@djalbat.com
- http://djalbat.com
