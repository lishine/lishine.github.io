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
      lineNumber: 12
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
      lineNumber: 26
    },
    __self: this
  }));
}; // const LineTo = dynamic(() => import('react-lineto').then(r => r), { ssr: false })


var Page = function Page() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    className: "grid-container padding-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["H1"], {
    mb: 1,
    borderBottom: "2px solid currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Portfolio"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["H4"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Projects I have done and technologies I have used during my web development career"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["P"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "* In a chronological order, from most recent to the first one"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    mt: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["H3"], {
    whiteSpace: "nowrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Manage barcodes for users"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", {
    href: "https://github.com/lishine/login-full-stack",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Login Full Stack project"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["UL"], {
    mt: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["LI"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Server built with Express"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["LI"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "JWT authentication"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["LI"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "React made me excited to write a client structured with components"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["LI"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "React is the main reason I started web-coding."), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["LI"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "I was able to take advantage of community built components, this opportunity was the main reason to ditch the desktop way of development"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
    mt: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    flexGrow: 0,
    flexBasis: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_archer__WEBPACK_IMPORTED_MODULE_4__["ArcherContainer"], {
    strokeColor: "red",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
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
      lineNumber: 65
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
    pb: 1,
    flexDirection: "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["H3"], {
    whiteSpace: "nowrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
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
      lineNumber: 89
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["Span"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "Show Events"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["Span"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "Manage hydrants"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["Span"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
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
      lineNumber: 105
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_archer__WEBPACK_IMPORTED_MODULE_4__["ArcherElement"], {
    id: "B",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["H4"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, "Server"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["P"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, "Built with Meteor"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["P"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, "MongoDB")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_archer__WEBPACK_IMPORTED_MODULE_4__["ArcherElement"], {
    id: "C",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["H4"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, "Client"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["P"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, "Built with React+React-router"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["P"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, "Notifications with Web-Workers"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["P"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, "Show hydrants on a map")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_archer__WEBPACK_IMPORTED_MODULE_4__["ArcherElement"], {
    id: "D",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["H4"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, "Mobile"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["P"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, "Built with React-Native and MobX"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["P"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, "Converted to Typescript"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["P"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, "Notifications"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["P"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, "Geolocation"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["P"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, "Barcode Scanning")))))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    mt: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["H3"], {
    whiteSpace: "nowrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, "My first React project"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["P"], {
    mt: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, "While I was working as an Electronics Engineer, I was assigned to develop a Laboratory experiments management software."), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["UL"], {
    mt: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["LI"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, "Instead of building the usual desktop solution using Delphi/Vb/C#, I turned to develop distributed system which will be available through a client anywhere"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["LI"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, "Meteor enabled me to get started easily and build Full-Stack solution"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["LI"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, "React made me excited to write a client structured with components"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["LI"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, "React is the main reason I started web-coding."), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_styles_ss_components__WEBPACK_IMPORTED_MODULE_3__["LI"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, "I was able to take advantage of community built components, this opportunity was the main reason to ditch the desktop way of development"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ })

})
//# sourceMappingURL=index.js.c14fc61e0d996e0978ee.hot-update.js.map