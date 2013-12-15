Function wrapper that exposes 1 arg
==
[![Build Status](https://travis-ci.org/ogt/arg1.png)](https://travis-ci.org/ogt/arg1)

## Synopsis
The module is just a couple lines of code

    function arg1(func, obj) {
      if (obj) func = func.bind(obj);
      return function(arg) { return func(arg); };
    }

The library allows more compact code as seen below :
```
// this code
list.forEach(function(el) {
  console.log(el);
});

// becomes
list.forEach(arg1(console.log));

// this code
regex = /foo/;
filtered = list.filter(function(el) {
  return regex.test(el);
});

//becomes
regex = /foo/;
filtered = list.filter(arg1(regex.test,regex));
```
This function could be part of a callback utilities module - I wasn't able to find it in npm

#Description
Using this module:
```
var arg1 = require('arg1');
['Hello','World','!'].map(arg1(console.log));
```

## Installation 

Installing the module

    npm install arg1

