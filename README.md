# css-modules-electron

Load [CSS Modules] in [Electron]. Once registered, you can `require` CSS modules
and they will automatically be compiled and injected into the `head` element of
your [Electron] app.

## Usage

This module has the same requirements as [`css-modules-require-hook`]. That
means you must have the following modules installed:

* `postcss` version 4 or higher
* `postcss-modules-extract-imports`
* `postcss-modules-local-by-default`
* `postcss-modules-scope`

You can register the hook in Electron by requiring the `register` module:

```js
require('css-modules-electron/register');
```

You can also specify options using the same API as [`css-modules-require-hook`]
by requiring the core module directly:

```js
require('css-modules-electron')({
  // `css-modules-require-hook` options here
});
```

See `example/src/front.js` for a working example.

## Running the Example

```sh
npm i
npm start
```

[`css-modules-require-hook`]: https://github.com/css-modules/css-modules-require-hook/tree/552c64a920c6c0b67a6d47aac100e1a43ba781ef "css-modules-require-hook"
[CSS Modules]: https://github.com/css-modules "CSS Modules"
[Electron]: http://electron.atom.io/ "Electron"
