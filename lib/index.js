'use strict';

function isPromise(obj) {
  return 'function' === typeof obj.then;
}

var array = function (list) {
  var promises = [];

  var hook = function (promise, index) {
    promise.then(function (val) {
      list[index] = val;
    });
  };

  for (var i = 0; i < list.length; i++) {
    var value = list[i];
    if (value && isPromise(value)) {
      hook(value, i);
      promises.push(value);
    }
  }

  return Promise.all(promises).then(function () {
    return list;
  });
};

var object = function (obj) {
  var promises = [];
  var keys = Object.keys(obj);

  var hook = function (promise, key) {
    promise.then(function (val) {
      obj[key] = val;
    });
  };

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var value = obj[key];
    if (value && isPromise(value)) {
      hook(value, key);
      promises.push(value);
    }
  }

  return Promise.all(promises).then(function () {
    return obj;
  });
};

module.exports = function (input) {
  if (Array.isArray(input)) {
    return array(input);
  } else if (input && typeof input === 'object') {
    return object(input);
  }

  return Promise.resolve(input);
};
