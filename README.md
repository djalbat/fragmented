# Fragmented

Relates to URL hash fragments.

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

You can also register and unregister change handlers:

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
