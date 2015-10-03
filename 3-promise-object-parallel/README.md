# Promise.all() for Objects

There is a `Promise.all([])` method that resolves all the promises in an array in parallel.

```js
Promise.all([
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3)
]).then(function (val) {
  // val === [1, 2, 3]
})
```

Your task:

- Create a function that resolves all the values in an object.

```js
parallel({
  one: Promise.resolve(1),
  two: Promise.resolve(2),
  three: Promise.resolve(3)
}).then(function (val) {
  // val = { one: 1, two: 2, three: 3}
})
```
