# tinywork

只做了一点微小的工作。

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Coverage Status](https://coveralls.io/repos/JacksonTian/tinywork/badge.svg?branch=master&service=github)](https://coveralls.io/github/JacksonTian/tinywork?branch=master)
[![David deps][david-image]][david-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/tinywork.svg?style=flat-square
[npm-url]: https://npmjs.org/package/tinywork
[travis-image]: https://img.shields.io/travis/JacksonTian/tinywork.svg?style=flat-square
[travis-url]: https://travis-ci.org/JacksonTian/tinywork
[david-image]: https://img.shields.io/david/JacksonTian/tinywork.svg?style=flat-square
[david-url]: https://david-dm.org/JacksonTian/tinywork
[download-image]: https://img.shields.io/npm/dm/tinywork.svg?style=flat-square
[download-url]: https://npmjs.org/package/tinywork

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
[1, 2, 'c'];
```

And use `async/await` like this:

```js
await tinywork([
  Promise.resolve(1),
  Promise.resolve(2),
  'c'
]);

// =>
[1, 2, 'c'];
```

### Others
Just return resolved Promise with value.

## License

The MIT license
