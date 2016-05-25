# tinywork

只做了一点微小的工作。

## Installation

You can install it as dependency via `npm`.

```sh
$ npm install tinywork --save
// or
$ cnpm install tinywork --save
```

## Usage

tinywork can process mix Promise list or mix Object.

### mix object

You can use `co` and `yield` like this:

```js
yield tinywork({
  a: Promise.resolve(1),
  b: Promise.resolve(2),
  c: 'c'
});

// =>

{
  a: 1,
  b: 2,
  c: 'c'
}
```

And use `async/await` like this:

```js
await tinywork({
  a: Promise.resolve(1),
  b: Promise.resolve(2),
  c: 'c'
});

// =>

{
  a: 1,
  b: 2,
  c: 'c'
}
```

### mix array

You can use `co` and `yield` like this:

```js
yield tinywork([
  Promise.resolve(1),
  Promise.resolve(2),
  'c'
]);

// =>
// [1, 2, 'c'];
```

And use `async/await` like this:

```js
await tinywork([
  Promise.resolve(1),
  Promise.resolve(2),
  'c'
]);

// =>
// [1, 2, 'c'];
```

## License

The MIT license
