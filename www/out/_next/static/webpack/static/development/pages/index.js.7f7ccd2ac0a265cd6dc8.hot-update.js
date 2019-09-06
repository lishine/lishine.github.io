webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_ss_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/ss-components */ "./styles/ss-components.js");
/* harmony import */ var react_archer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-archer */ "./node_modules/react-archer/lib/react-archer.js");
/* harmony import */ var react_archer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_archer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_image_gallery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-image-gallery */ "./node_modules/react-image-gallery/build/image-gallery.js");
/* harmony import */ var react_image_gallery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_image_gallery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_image_gallery_styles_scss_image_gallery_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-image-gallery/styles/scss/image-gallery.scss */ "./node_modules/react-image-gallery/styles/scss/image-gallery.scss");
/* harmony import */ var react_image_gallery_styles_scss_image_gallery_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_image_gallery_styles_scss_image_gallery_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_ss_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/ss-utils */ "./styles/ss-utils.js");

var _jsxFileName = "/c/Users/pv/dev/personal/www/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


 // import dynamic from 'next/dynamic'

 // import LineTo from 'react-lineto'





var _Gallery = function _Gallery(_ref) {
  var images = _ref.images,
      className = _ref.className;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_image_gallery__WEBPACK_IMPORTED_MODULE_5___default.a, {
    additionalClass: className // showFullscreenButton={false}
    ,
    showPlayButton: false,
    showBullets: false,
    showNav: false // showThumbnails={false}
    ,
    items: images.map(function (url) {
      return {
        original: url,
        thumbnail: url
      };
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  });
};

var Gallery = function Gallery(props) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_Gallery, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    css: _styles_ss_utils__WEBPACK_IMPORTED_MODULE_7__["boxCss"].css({
      bg: 'lightgrey',
      p: 1
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }));
}; // const LineTo = dynamic(() => import('react-lineto').then(r => r), { ssr: false })


var ProjectTitle = function ProjectTitle(props) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["H3"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    whiteSpace: "nowrap",
    borderBottom: "1px solid currentColor"
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }));
};

var Page = function Page() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    className: "grid-container padding-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["H1"], {
    mb: 1,
    borderBottom: "1px solid currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Portfolio")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["H4"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Projects I have done and technologies I have used during my web development career"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["P"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "In a chronological order, from most recent to the first one"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["P"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "Most of the recent and the best writen code is in private repositories that will be demonstrated upon request"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    mt: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(ProjectTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "Manage barcodes for users"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["NavLink"], {
    mt: 1,
    href: "https://github.com/lishine/login-full-stack",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "Login Full Stack project"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["H4"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "Features"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["UL"], {
    mt: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["LI"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "JWT authentication with emails"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["LI"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "Forms")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["H4"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "Technologies being used"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["UL"], {
    mt: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["LI"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "Webpack 4"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["LI"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "React"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["LI"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, "Router - redux-saga-first-router"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["LI"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "Client state management - Redux"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["LI"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "Redux middleware - Redux-Saga"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["LI"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "Client state management - React-easy-state"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["LI"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "CSS in Js - Styled components"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["LI"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "Server - Express"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["LI"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "DB - PostgreSQL"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["LI"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "DB Object interface - Massive"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
    mt: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    flexGrow: 0,
    flexBasis: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_archer__WEBPACK_IMPORTED_MODULE_4__["ArcherContainer"], {
    strokeColor: "red",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_archer__WEBPACK_IMPORTED_MODULE_4__["ArcherElement"], {
    id: "A",
    relations: [{
      targetId: 'B',
      sourceAnchor: 'bottom',
      targetAnchor: 'top'
    }, {
      targetId: 'C',
      sourceAnchor: 'bottom',
      targetAnchor: 'top'
    }, {
      targetId: 'D',
      sourceAnchor: 'bottom',
      targetAnchor: 'top'
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
    pb: 1,
    flexDirection: "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(ProjectTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, "System to to manage internet connected fire hydrants"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    mt: 1,
    justifyContent: "space-around",
    gridAutoColumns: "1fx",
    gridAutoFlow: "column",
    css: _styles_ss_utils__WEBPACK_IMPORTED_MODULE_7__["boxCss"].css({
      Span: {
        mx: 1
      }
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["Span"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, "Show Events"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["Span"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, "Manage hydrants"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["Span"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, "Manage users")))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    textAlign: "center",
    mt: 7,
    gridAutoColumns: "1fx",
    gridAutoFlow: "column",
    css: _styles_ss_utils__WEBPACK_IMPORTED_MODULE_7__["boxCss"].css({
      P: {
        mx: 1
      }
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_archer__WEBPACK_IMPORTED_MODULE_4__["ArcherElement"], {
    id: "B",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["H4"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, "Server"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["P"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, "Built with Meteor"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["P"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, "MongoDB")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_archer__WEBPACK_IMPORTED_MODULE_4__["ArcherElement"], {
    id: "C",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["H4"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, "Client"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["P"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, "Built with React + React-router"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["P"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, "Notifications with Web-Workers"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["P"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, "Show hydrants on a map")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_archer__WEBPACK_IMPORTED_MODULE_4__["ArcherElement"], {
    id: "D",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["H4"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, "Mobile"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["P"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, "Built with React-Native and MobX"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["P"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, "Converted to Typescript"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["P"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, "Notifications"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["P"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, "Geolocation"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["P"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, "Barcode Scanning")))))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
    mt: 4,
    flexDirection: ['column', 'row'],
    maxWidth: "800px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    mie: [null, 2],
    width: [null, '60%'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(Gallery, {
    images: [1, 2, 3, 4, 5].map(function (index) {
      return "/img/hd/".concat(index, ".png");
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    width: [null, '40%'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(Gallery, {
    images: [1, 2, 3, 4].map(function (index) {
      return "/img/hdm/".concat(index, ".jpg");
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    mt: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(ProjectTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, "My first React project"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["P"], {
    mt: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, "While I was working as an Electronics Engineer, I was assigned to develop a Laboratory experiments management software."), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["UL"], {
    mt: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["LI"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, "Instead of building the usual desktop solution using Delphi/Vb/C#, I turned to develop distributed system which will be available through a client anywhere"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["LI"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }, "Meteor enabled me to get started easily and build Full-Stack solution"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["LI"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, "React made me excited to write a client structured with components"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["LI"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, "React is the main reason I started web-coding."), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["LI"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }, "I was able to take advantage of community built components, this opportunity was the main reason to ditch the desktop way of development"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ })

})
//# sourceMappingURL=index.js.7f7ccd2ac0a265cd6dc8.hot-update.js.map