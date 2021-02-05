"use strict";

var _app = require("./src/app");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var PORT = process.env.PORT || 5000;

var start = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* () {
    _app.app.listen(PORT, () => {
      console.log("Server started on ".concat(PORT));
    });
  });

  return function start() {
    return _ref.apply(this, arguments);
  };
}();

start();