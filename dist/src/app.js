"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.app = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = require("body-parser");

var _path = _interopRequireDefault(require("path"));

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var app = (0, _express.default)();
exports.app = app;
// BodyParser Middleware
app.use((0, _bodyParser.urlencoded)({
  extended: false,
  limit: "10mb"
}));
app.use((0, _bodyParser.json)({
  limit: "10mb"
}));
app.use((0, _cors.default)());
app.get("/", /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, res) {
    res.send("Server working for W.W !");
  });

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
app.all("*", /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (req, res) {
    throw new Error("Route not found !");
  });

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());