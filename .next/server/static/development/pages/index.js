module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Card/Card.module.css":
/*!*****************************************!*\
  !*** ./components/Card/Card.module.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"Card": "Card_Card__3pcRI",
	"front": "Card_front__zmVa8",
	"back": "Card_back__1HFy_"
};

/***/ }),

/***/ "./components/Card/index.js":
/*!**********************************!*\
  !*** ./components/Card/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grommet */ "grommet");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(grommet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card.module.css */ "./components/Card/Card.module.css");
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Card_module_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/deriq/Desktop/challenges/better-chat/components/Card/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Card({
  children,
  back
}) {
  return __jsx("div", {
    className: _Card_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.Card,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("div", {
    className: _Card_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.front,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, children), __jsx("div", {
    className: _Card_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.back,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, back)));
}

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./components/ChatRoom/ChatRoom.module.css":
/*!*************************************************!*\
  !*** ./components/ChatRoom/ChatRoom.module.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"ChatRoom": "ChatRoom_ChatRoom__b-Uwd",
	"inputBox": "ChatRoom_inputBox__3YtCX"
};

/***/ }),

/***/ "./components/ChatRoom/index.js":
/*!**************************************!*\
  !*** ./components/ChatRoom/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Post */ "./components/Post/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers */ "./helpers.js");
/* harmony import */ var _InputBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../InputBox */ "./components/InputBox/index.js");
/* harmony import */ var _ChatRoom_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ChatRoom.module.css */ "./components/ChatRoom/ChatRoom.module.css");
/* harmony import */ var _ChatRoom_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ChatRoom_module_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/deriq/Desktop/challenges/better-chat/components/ChatRoom/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function ChatRoom({
  posts: initialPosts,
  users,
  currentUser
}) {
  const {
    0: posts,
    1: setPosts
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialPosts);

  const addPost = message => {
    Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["submitPost"])({
      message,
      ts: Date.now(),
      user: currentUser.id
    }).then(allPosts => setPosts(allPosts));
  };

  const postUser = post => {
    const {
      user: userId
    } = post;

    if (userId === currentUser.id) {
      return currentUser;
    }

    return users.find(user => user.id === userId);
  };

  return __jsx("div", {
    className: _ChatRoom_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.ChatRoom,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, posts.map(post => __jsx(_Post__WEBPACK_IMPORTED_MODULE_1__["default"], {
    key: post.ts,
    post: post,
    user: postUser(post),
    byCurrentUser: post.user == currentUser.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  })), __jsx("div", {
    className: _ChatRoom_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.inputBox,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx(_InputBox__WEBPACK_IMPORTED_MODULE_3__["default"], {
    submit: addPost,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (ChatRoom);

/***/ }),

/***/ "./components/InputBox/InputBox.module.css":
/*!*************************************************!*\
  !*** ./components/InputBox/InputBox.module.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"InputBox": "InputBox_InputBox__2xjhv",
	"charactersLeft": "InputBox_charactersLeft__pqrAn",
	"textForm": "InputBox_textForm__1zxsj",
	"textBox": "InputBox_textBox__2uDhM",
	"submit": "InputBox_submit__1R52E"
};

/***/ }),

/***/ "./components/InputBox/index.js":
/*!**************************************!*\
  !*** ./components/InputBox/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var grommet_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grommet-icons */ "grommet-icons");
/* harmony import */ var grommet_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(grommet_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useInputState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useInputState */ "./hooks/useInputState.js");
/* harmony import */ var _InputBox_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./InputBox.module.css */ "./components/InputBox/InputBox.module.css");
/* harmony import */ var _InputBox_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_InputBox_module_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/deriq/Desktop/challenges/better-chat/components/InputBox/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function InputBox({
  submit
}) {
  const {
    value,
    setValue,
    resetValue,
    charactersLeft
  } = Object(_hooks_useInputState__WEBPACK_IMPORTED_MODULE_2__["default"])('', 140);

  const onSubmit = event => {
    event.preventDefault();

    if (value) {
      submit(value);
      resetValue();
    }
  };

  return __jsx("div", {
    className: _InputBox_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.InputBox,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("div", {
    className: _InputBox_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.charactersLeft,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, charactersLeft), __jsx("form", {
    className: _InputBox_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.textForm,
    onSubmit: onSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("input", {
    className: _InputBox_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.textBox,
    type: "text",
    value: value,
    placeholder: "what's happening",
    onChange: setValue,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx(grommet_icons__WEBPACK_IMPORTED_MODULE_1__["Send"], {
    className: _InputBox_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.submit,
    onClick: onSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (InputBox);

/***/ }),

/***/ "./components/Post/Post.module.css":
/*!*****************************************!*\
  !*** ./components/Post/Post.module.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"Post": "Post_Post__7Cg2L",
	"avatar": "Post_avatar__U69bw",
	"contentWrapper": "Post_contentWrapper__uPHZs",
	"metadata": "Post_metadata__2gGrb",
	"user": "Post_user__kp333",
	"divider": "Post_divider__3WA4H",
	"username": "Post_username__15KgH",
	"verified": "Post_verified__1WN9g",
	"message": "Post_message__3xKfh",
	"activeDate": "Post_activeDate__3vVgd",
	"icon": "Post_icon__mKgTE",
	"byCurrentUser": "Post_byCurrentUser__1xZSM",
	"avatarWrapper": "Post_avatarWrapper__1_B7t"
};

/***/ }),

/***/ "./components/Post/index.js":
/*!**********************************!*\
  !*** ./components/Post/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var grommet_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grommet-icons */ "grommet-icons");
/* harmony import */ var grommet_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(grommet_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _TimeAgo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../TimeAgo */ "./components/TimeAgo/index.js");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Card */ "./components/Card/index.js");
/* harmony import */ var _Post_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Post.module.css */ "./components/Post/Post.module.css");
/* harmony import */ var _Post_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Post_module_css__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/deriq/Desktop/challenges/better-chat/components/Post/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function Post({
  post,
  user,
  byCurrentUser
}) {
  if (!post) return null;
  const {
    message,
    ts
  } = post;
  const {
    real_name,
    username,
    verified
  } = user;
  return __jsx("div", {
    className: `${_Post_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.Post} ${byCurrentUser ? _Post_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.byCurrentUser : ''}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("div", {
    className: _Post_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.avatarWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("img", {
    className: _Post_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.avatar,
    src: byCurrentUser ? '/images/better-icon.svg' : `/images/${username}.jpg`,
    alt: `${username}'s avatar`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }))), __jsx("div", {
    className: _Post_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.contentWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("div", {
    className: _Post_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.metadata,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("div", {
    className: _Post_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.user,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, !byCurrentUser && __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, real_name, __jsx("span", {
    className: _Post_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.divider,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "-"), __jsx("span", {
    className: _Post_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.username,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "@", username, verified && __jsx("span", {
    title: "verified",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx(grommet_icons__WEBPACK_IMPORTED_MODULE_1__["Validate"], {
    className: _Post_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.verified,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  })))))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx(_TimeAgo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    timestamp: ts,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }))), byCurrentUser ? __jsx("p", {
    className: _Post_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.message,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, message) : __jsx(_Card__WEBPACK_IMPORTED_MODULE_4__["default"], {
    back: __jsx("p", {
      className: _Post_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.activeDate,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, __jsx(grommet_icons__WEBPACK_IMPORTED_MODULE_1__["Calendar"], {
      className: _Post_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, "active since"), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, moment__WEBPACK_IMPORTED_MODULE_2___default()(user.created_at).format('MMMM DD, YYYY'))),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("p", {
    className: _Post_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.message,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, message))));
}

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ }),

/***/ "./components/TimeAgo/index.js":
/*!*************************************!*\
  !*** ./components/TimeAgo/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/deriq/Desktop/challenges/better-chat/components/TimeAgo/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function TimeAgo({
  timestamp
}) {
  const initialTimeAgo = moment__WEBPACK_IMPORTED_MODULE_1___default()(timestamp).fromNow();
  const {
    0: timeAgo,
    1: setTimeAgo
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialTimeAgo);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const timeAgoInterval = setInterval(updateTimeAgo, 30000);
    return () => clearTimeout(timeAgoInterval);
  });

  const updateTimeAgo = () => {
    const newTimeAgo = moment__WEBPACK_IMPORTED_MODULE_1___default()(timestamp).fromNow();
    if (newTimeAgo !== timeAgo) setTimeAgo(newTimeAgo);
  };

  return __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, timeAgo);
}

/* harmony default export */ __webpack_exports__["default"] = (TimeAgo);

/***/ }),

/***/ "./helpers.js":
/*!********************!*\
  !*** ./helpers.js ***!
  \********************/
/*! exports provided: submitPost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitPost", function() { return submitPost; });
function submitPost(newPost) {
  return fetch('/api/posts', {
    method: 'post',
    body: JSON.stringify(newPost),
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    }
  }).then(response => response.json()).catch(error => console.log(error));
}

/***/ }),

/***/ "./hooks/useInputState.js":
/*!********************************!*\
  !*** ./hooks/useInputState.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ((initialValue, maximumLength) => {
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialValue);

  const updateValue = event => {
    const newValue = event.target.value;

    if (newValue.length <= maximumLength) {
      setValue(newValue);
    }
  };

  const resetValue = () => {
    setValue(initialValue);
  };

  return {
    value,
    setValue: updateValue,
    resetValue,
    charactersLeft: maximumLength - value.length
  };
});

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_absolute_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-absolute-url */ "next-absolute-url");
/* harmony import */ var next_absolute_url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_absolute_url__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ChatRoom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ChatRoom */ "./components/ChatRoom/index.js");
var _jsxFileName = "/Users/deriq/Desktop/challenges/better-chat/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // placeholder for current user ;

const CURRENT_USER = {
  "id": "current_user"
};

function App({
  users,
  posts
}) {
  return __jsx("div", {
    className: "App",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx(_components_ChatRoom__WEBPACK_IMPORTED_MODULE_3__["default"], {
    users: users,
    posts: posts,
    currentUser: CURRENT_USER,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }));
} // async fetch on server-side for SSR


App.getInitialProps = async function ({
  req
}) {
  const {
    protocol,
    host
  } = next_absolute_url__WEBPACK_IMPORTED_MODULE_2___default()(req);
  const response = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(`${protocol}//${host}/api/chatroom`);
  const json = await response.json();
  const {
    users,
    posts
  } = json;
  return {
    users,
    posts
  };
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/deriq/Desktop/challenges/better-chat/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "grommet":
/*!**************************!*\
  !*** external "grommet" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("grommet");

/***/ }),

/***/ "grommet-icons":
/*!********************************!*\
  !*** external "grommet-icons" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("grommet-icons");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next-absolute-url":
/*!************************************!*\
  !*** external "next-absolute-url" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-absolute-url");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map