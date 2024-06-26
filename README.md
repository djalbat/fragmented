# Fragmented

Relates to URL hash fragments.

Fragmented allows your application to affect and be affected by the hash fragment of the URL in the browser's address bar. Changes to the fragment are invisible to the server whilst being included in the browser's history. For this reason fragments are useful to single page applications that need the back and forward buttons to work for them without triggering Ajax requests and the like.

Fragmented provides a global [`fragment`](https://github.com/djalbat/Fragmented/blob/master/es6/fragmented.js) variable which corresponds to the aforementioned hash fragment in the browser's address bar and the value of which the application can get or set. It also provides `onFragmentChange` and `offFragmentChange` functions so that handlers can be registered and unregistered.

## Installation

With [npm](https://www.npmjs.com/):

    npm install fragmented

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/fragmented.git

...then install the dependencies with npm from within the project's root directory:

    npm install

You will need to do this if you want to look at the example.

## Example

There is a small development server that can be run from within the project's directory with the following command:

    npm start

The example will then be available at the following URL:

http://localhost:8888

The source for the example can be found in the `src/example.js` file and corresponding `src/example` folder. You are encouraged to try the example whilst reading what follows. You can rebuild it on the fly with the following command:

    npm run watch-debug

The development server will reload the page whenever you make changes.

One last thing to bear in mind is that this package is included by way of a relative rather than a package import. If you are importing it into your own application, however, you should use the standard package import.

## Usage

In order to make use of the global `fragmented` variable you only need to import the package:

```
import "fragmented";
```

To assign the current value of the fragment to a variable:

```
const pageFragment = fragment;
```

To set the fragment:

```
fragment = "test";
```

When you set the fragment like this any handlers will be called. 

To register and unregister handlers:

```
const { onFragmentChange, offFragmentChange } = fragment;

const fragmentChangeHandler = () {
  console.log(fragment)
}

onFragmentChange(fragmentChangeHandler);

...

offFragmentChange(fragmentChangeHandler);
```

Note that handlers are invoked whenever the `fragment` variable is set. If you do not want this behaviour, in other words you want to be able to change the fragment in the address bar without your handlers being invoked, you can to this with an additional `setFragment()` function as follows:

```
const { setFragment } = fragment;

setFragment("test"); // handlers won't be invoked
```

Also note that the `fragment` variable is an instance of the `String` object, rather than a string primitive, in order that properties on it can be defined. So use `==` rather than `===` if equating it to a string primitive. And note that if you use a `switch` statement, which uses strict equality, you will need to explicitly coerce the `fragment` variable to a string primitive before passing it in.

By the way, you can import these functions more conventionally if you think that destructuring the global `fragment` variable is a bit too cute: 

```
import { getFragment, setFragment, resetFragment, onFragmentChange, offFragmentChange } from "fragmented";

...
```

Finally, the `resetFrageent()` function does as its name suggests, essentially removing the fragment altogether.

## Building

Automation is thanks to [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Contact

* james.smith@djalbat.com
