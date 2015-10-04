# Async Control Flow

A few questions on helping you understand async control flow with callbacks and promises.
It also uses TDD development!

First, read the slides: https://jonathanong.github.com/async-control-flow/

## Installation

You need `node.js` installed! I recommend you install `node v4` or higher!
You need at least `node v0.12` for `Promise`s.

Clone this repo:

```bash
git clone https://github.com/jonathanong/async-control-flow
cd async-control-flow
```

Install the dependencies:

```bash
npm install
```

You could also install `mocha` globally to make typing easier for you.

```bash
npm install -g mocha
```

## Usage

Go into one of the folders:

- Read the `README.md` for instructions.
- Edit the `index.js` file until the tests pass.
- Checkout the `test.js` file to understand how the function should work.

To run the test from the root folder, type:

```bash
./node_modules/.bin/mocha 1-zalgo/test.js
```

If you have `mocha` install globally, just run `mocha` on the test file:

```bash
mocha 1-zalgo/test.js
```

If the tests pass, you're good!

If you want to test all the questions at once, just type `npm test`!

## Questions

Let me know if you have any questions!
