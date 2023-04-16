import React, { useState, useEffect } from 'react';

var Test = function Test() {
  return /*#__PURE__*/React.createElement("div", null, "hello");
};

var useCount = function useCount() {
  var _a = useState(0),
    count = _a[0],
    setCount = _a[1];
  useEffect(function () {
    console.log("hello");
  }, []);
  var add = function add() {
    setCount(function (prev) {
      return prev + 1;
    });
  };
  var subtract = function subtract() {
    setCount(function (prev) {
      return prev - 1;
    });
  };
  return {
    count: count,
    add: add,
    subtract: subtract
  };
};

export { Test, useCount };
//# sourceMappingURL=bundle.js.map
