/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = __webpack_require__(2);

var _express2 = _interopRequireDefault(_express);

var _bodyParser = __webpack_require__(8);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = __webpack_require__(9);

var _cors2 = _interopRequireDefault(_cors);

var _mongoose = __webpack_require__(1);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _config = __webpack_require__(10);

var _config2 = _interopRequireDefault(_config);

var _dotenv = __webpack_require__(11);

var _dotenv2 = _interopRequireDefault(_dotenv);

var _routes = __webpack_require__(12);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();

var DBHost = _config2.default.get('DBHost');

_mongoose2.default.connect(DBHost, {
	useMongoClient: true
}).then(console.log("Connected to mongodb..."));
var db = _mongoose2.default.connection;
db.on('error', console.error.bind('connection error'));

var app = (0, _express2.default)();

//Middleware
app.use((0, _cors2.default)());
app.use(_bodyParser2.default.json());
app.set('secret', process.env.SECRET_KEY);

app.use('/admin', _routes2.default);

exports.default = app;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = __webpack_require__(1);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reviewSchema = new _mongoose.Schema({
    title: String,
    thumbnail: String,
    reviewText: String,
    date: String,
    type: String
});

var Review = _mongoose2.default.model('Review', reviewSchema);

exports.default = Review;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(6);
module.exports = __webpack_require__(7);


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _app = __webpack_require__(0);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = process.env.PORT || 3000;

_app2.default.listen(port, function () {
	console.log('server is running on port ' + port);
});

exports.default = _app2.default;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("config");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(2);

var _express2 = _interopRequireDefault(_express);

var _admin = __webpack_require__(13);

var _admin2 = _interopRequireDefault(_admin);

var _auth = __webpack_require__(16);

var _auth2 = _interopRequireDefault(_auth);

var _review = __webpack_require__(17);

var _review2 = _interopRequireDefault(_review);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express2.default)();

router.get('/review', _review2.default.getReviews);

router.post('/login', _admin2.default.logIn);

router.post('/review', _auth2.default.verifyToken, _admin2.default.addReview);

router.delete('/review', _auth2.default.verifyToken, _admin2.default.removeReview);

router.post('/settings', _auth2.default.verifyToken, _admin2.default.changePassword);

exports.default = router;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _app = __webpack_require__(0);

var _app2 = _interopRequireDefault(_app);

var _review = __webpack_require__(3);

var _review2 = _interopRequireDefault(_review);

var _user = __webpack_require__(14);

var _user2 = _interopRequireDefault(_user);

var _jsonwebtoken = __webpack_require__(4);

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _bcryptNodejs = __webpack_require__(15);

var _bcryptNodejs2 = _interopRequireDefault(_bcryptNodejs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var adminController = {};

//POST Login
adminController.logIn = function (req, res) {
    var password = req.body.password;

    console.log("login attempt made");
    _user2.default.findOne({ 'name': 'admin' }).then(function (user) {
        if (_bcryptNodejs2.default.compareSync(password, user.password)) {
            console.log("passwords match");
            var payload = {
                name: user.name
            };
            var token = _jsonwebtoken2.default.sign(payload, _app2.default.get('secret'), { expiresIn: '2h' });
            res.status(201).json({
                success: true,
                token: token
            });
        } else {
            console.log("passwords don't match");
            res.status(404).json({
                success: false,
                message: "password does not match"
            });
        }
    }).catch(function (err) {
        res.status(500).json({
            success: false,
            err: err
        });
    });
};

//POST Add Review
adminController.addReview = function (req, res) {
    var _req$body = req.body,
        title = _req$body.title,
        thumbnail = _req$body.thumbnail,
        reviewText = _req$body.reviewText,
        type = _req$body.type;

    var today = new Date();
    var newReview = new _review2.default({
        title: title,
        thumbnail: thumbnail,
        reviewText: reviewText,
        date: today.toLocaleDateString(),
        type: type
    });

    newReview.save().then(function (review) {
        res.status(200).json({
            success: true,
            review: review
        });
    }).catch(function (err) {
        res.status(500).json({
            success: false,
            err: err
        });
    });
};

//DELETE Remove Review
adminController.removeReview = function (req, res) {
    var id = req.body.id;

    _review2.default.findOneAndRemove({ '_id': id }).then(function (data) {
        res.status(200).json({
            success: true,
            message: 'review removed',
            data: data
        });
    }).catch(function (err) {
        res.status(500).json({
            success: false,
            err: err
        });
    });
};

adminController.changePassword = function (req, res) {
    var password = req.body.password;

    var hash = _bcryptNodejs2.default.hashSync(password);
    _user2.default.findOneAndUpdate({ 'name': 'admin' }, { 'password': hash }).then(function (data) {
        res.status(200).json({
            success: true,
            message: 'password changed'
        });
    });
};

exports.default = adminController;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(1);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userSchema = new _mongoose.Schema({
  name: { type: String, required: true },
  password: { type: String, required: true }
});

var User = _mongoose2.default.model('User', userSchema);

exports.default = User;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("bcrypt-nodejs");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _app = __webpack_require__(0);

var _app2 = _interopRequireDefault(_app);

var _jsonwebtoken = __webpack_require__(4);

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var authController = {};

authController.verifyToken = function (req, res, next) {
	var token = req.body.token || req.query.token || req.headers['x-access-token'];

	if (token) {
		_jsonwebtoken2.default.verify(token, _app2.default.get('secret'), function (err, decoded) {
			if (err) {
				res.json({ success: false, message: 'Failed to verify token' });
				throw err;
			} else {
				req.decoded = decoded;
				next();
			}
		});
	} else {
		res.status(403).json({ success: false, message: 'no token provided' });
	}
};

exports.default = authController;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _app = __webpack_require__(0);

var _app2 = _interopRequireDefault(_app);

var _review = __webpack_require__(3);

var _review2 = _interopRequireDefault(_review);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reviewController = {};

reviewController.getReviews = function (req, res) {
  _review2.default.find().then(function (reviews) {
    res.status(200).json({
      success: true,
      reviews: reviews
    }).catch(function (err) {
      res.status(500).json({
        success: false,
        err: err
      });
    });
  });
};

exports.default = reviewController;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map