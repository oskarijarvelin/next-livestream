(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Oskari J\xE4rvelin\\Documents\\GitHub\\next-livestream\\components\\Footer.js";

function Footer() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
    bg: "body",
    p: "4",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
      align: "center",
      fontSize: "13",
      color: "bg",
      children: ['Copyright © ', new Date().getFullYear(), ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
        as: "span",
        display: "inline",
        fontWeight: "bold",
        fontSize: "12",
        px: "1",
        children: "Oskari J\xE4rvelin"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Head.js":
/*!****************************!*\
  !*** ./components/Head.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyHead)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Oskari J\xE4rvelin\\Documents\\GitHub\\next-livestream\\components\\Head.js";

function MyHead({
  title,
  desc,
  url,
  img
}) {
  let baseUrl = "https://next-livestream.vercel.app";
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
      children: [title, " - Livestream"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      name: "description",
      content: desc
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      name: "twitter:title",
      content: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      name: "twitter:description",
      content: desc
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      name: "twitter:url",
      content: baseUrl + url
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      name: "twitter:image",
      content: baseUrl + img
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      property: "og:url",
      content: baseUrl + url
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      property: "og:image",
      content: baseUrl + img
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      property: "og:title",
      content: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      property: "og:description",
      content: desc
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
      rel: "icon",
      type: "image/png",
      sizes: "512x512",
      href: "/icons/favicon.png"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
      rel: "manifest",
      href: "manifest.json"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_go__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/go */ "./node_modules/react-icons/go/index.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\Oskari J\xE4rvelin\\Documents\\GitHub\\next-livestream\\components\\Header.js";



function Header() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
    bg: "bg",
    color: "body",
    w: "100%",
    pos: "fixed",
    top: "0",
    left: "0",
    borderBottom: "1px solid #DEDEDE",
    zIndex: "99",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Wrap, {
      align: "center",
      px: {
        base: "4",
        lg: "8"
      },
      py: "4",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.WrapItem, {
        py: {
          base: "2",
          md: "2",
          lg: "4",
          xl: "8"
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
          as: "p",
          fontSize: {
            base: "16px",
            sm: "20px",
            md: "24px",
            lg: "32px",
            xl: "36px"
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: "/",
            passHref: true,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
              _hover: {
                textDecoration: "none"
              },
              children: "Livestream"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 12,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Spacer, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
      align: "center",
      px: {
        base: "4",
        lg: "8"
      },
      py: "4",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Menu, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.MenuButton, {
          as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button,
          bg: "bg",
          border: "2px solid #FCFCFC",
          borderRadius: "24px",
          height: {
            base: "32px",
            md: "40px",
            xl: "48px"
          },
          px: {
            base: "12px",
            md: "16px",
            xl: "24px"
          },
          _hover: {
            bg: "#DEDEDE"
          },
          _active: {
            bg: "#DEDEDE",
            borderColor: "#DEDEDE"
          },
          _focus: {
            border: "2px solid #DEDEDE"
          },
          rightIcon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
            as: react_icons_go__WEBPACK_IMPORTED_MODULE_3__.GoChevronDown
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 320
          }, this),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
            as: "p",
            size: "sm",
            fontSize: {
              base: "12px",
              md: "14px",
              lg: "16px"
            },
            children: "Striimit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.MenuList, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.MenuGroup, {
            title: "Ryhm\xE4 1",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
              pl: "6",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/striimi/1",
                passHref: true,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                  children: "Livestream 1"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 29,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 28,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Head */ "./components/Head.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\Users\\Oskari J\xE4rvelin\\Documents\\GitHub\\next-livestream\\components\\Layout.js";




function Layout({
  title,
  desc,
  url,
  img,
  children
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Head__WEBPACK_IMPORTED_MODULE_1__.default, {
      title: title,
      desc: desc,
      url: url,
      img: img
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
      bg: "bg",
      color: "body",
      pos: "relative",
      mt: {
        base: "73px",
        md: "77px",
        lg: "103px",
        xl: "140px"
      },
      minH: {
        base: "calc(100vh - 72px)",
        md: "calc(100vh - 76px)",
        lg: "calc(100vh - 102px)",
        xl: "calc(100vh - 139px)"
      },
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../shared/lib/router/router */ "./node_modules/next/dist/shared/lib/router/router.js");

var _router1 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router).isLocalURL(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router).isLocalURL(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null && as.indexOf('#') >= 0) {
    scroll = false;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + ( false ? 0 : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router1).useRouter();

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router).resolveHref(router, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router).resolveHref(router, props.as) : resolvedAs || resolvedHref
    };
  }, [router, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  let child;

  if (true) {
    try {
      child = _react.default.Children.only(children);
    } catch (err) {
      throw new Error(`Multiple children were passed to <Link> with \`href\` of \`${props.href}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + ( false ? 0 : ''));
    }
  } else {}

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection).useIntersection({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  _react.default.useEffect(() => {
    const shouldPrefetch = isVisible && p && (0, _router).isLocalURL(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);

  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router).isLocalURL(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router).getDomainLocale(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router).addBasePath((0, _router).addLocale(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}

const normalizePathTrailingSlash =  false ? 0 : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.requestIdleCallback = exports.cancelIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.createRouteLoader = createRouteLoader;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/utils/get-asset-path-from-route */ "../shared/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (e) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR');

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // We wait for pages to be built in dev before we start the route transition
// timeout to prevent an un-necessary hard navigation in development.


let devBuildPromise; // Resolve a promise that times out after given amount of milliseconds.

function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject); // We wrap these checks separately for better dead-code elimination in
    // production bundles.

    if (true) {
      (devBuildPromise || Promise.resolve()).then(() => {
        (0, _requestIdleCallback).requestIdleCallback(() => setTimeout(() => {
          if (!cancelled) {
            reject(err);
          }
        }, ms));
      });
    }

    if (false) {}
  });
}

function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute).default(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        const routeFilesPromise = getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        });

        if (true) {
          devBuildPromise = new Promise(resolve => {
            if (routeFilesPromise) {
              return routeFilesPromise.finally(() => {
                resolve();
              });
            }
          });
        }

        return resolvePromiseWithTimeout(routeFilesPromise, MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback).requestIdleCallback(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "Router", ({
  enumerable: true,
  get: function () {
    return _router.default;
  }
}));
Object.defineProperty(exports, "withRouter", ({
  enumerable: true,
  get: function () {
    return _withRouter.default;
  }
}));
exports.useRouter = useRouter;
exports.createRouter = createRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/router */ "./node_modules/next/dist/shared/lib/router/router.js"));

var _routerContext = __webpack_require__(/*! ../shared/lib/router-context */ "../shared/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const singletonRouter = {
  router: null,
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain', 'domainLocales'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" on the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
}

var _default = singletonRouter;
exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
}

function createRouter(...args) {
  singletonRouter.router = new _router.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}

function makePublicRouterInstance(router) {
  const _router1 = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router1[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router1[property]) ? [] : {}, _router1[property]) // makes sure query is not stateful
      ;
      continue;
    }

    instance[property] = _router1[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router1[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react).useRef();
  const [visible, setVisible] = (0, _react).useState(false);
  const setRef = (0, _react).useCallback(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react).useEffect(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback).requestIdleCallback(() => setVisible(true));
        return () => (0, _requestIdleCallback).cancelIdleCallback(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router).useRouter()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/shared/lib/router/router.js":
/*!************************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/router/router.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../../server/denormalize-page-path */ "../../../server/denormalize-page-path");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "../i18n/normalize-locale-path");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "../mitt"));

var _utils = __webpack_require__(/*! ../utils */ "../shared/lib/utils");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./utils/is-dynamic");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./utils/parse-relative-url");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./utils/querystring");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "?5c99"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./utils/route-matcher");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./utils/route-regex");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash).normalizePathTrailingSlash(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {} else {
    return false;
  }
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}

function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#') || url.startsWith('?')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils).getLocationOrigin();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex).getRouteRegex(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher).getRouteMatcher(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = '' // did not satisfy all requirements
    ; // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}

function resolveHref(router, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;
  let urlAsString = typeof href === 'string' ? href : (0, _utils).formatWithValidation(href); // repeated slashes and backslashes in the URL are considered
  // invalid and will never match a Next.js page/file

  const urlProtoMatch = urlAsString.match(/^[a-zA-Z]{1,}:\/\//);
  const urlAsStringNoProto = urlProtoMatch ? urlAsString.substr(urlProtoMatch[0].length) : urlAsString;
  const urlParts = urlAsStringNoProto.split('?');

  if ((urlParts[0] || '').match(/(\/\/|\\)/)) {
    console.error(`Invalid href passed to next/router: ${urlAsString}, repeated forward-slashes (//) or backslashes \\ are not valid in the href`);
    const normalizedUrl = (0, _utils).normalizeRepeatedSlashes(urlAsStringNoProto);
    urlAsString = (urlProtoMatch ? urlProtoMatch[0] : '') + normalizedUrl;
  } // Return because it cannot be routed by the Next.js router


  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    base = new URL(urlAsString.startsWith('#') ? router.asPath : router.pathname, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash).normalizePathTrailingSlash(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic).isDynamicRoute(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring).searchParamsToUrlQuery(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils).formatWithValidation({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils).getLocationOrigin();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router, url, true);
  const origin = (0, _utils).getLocationOrigin();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash).removePathTrailingSlash((0, _denormalizePagePath).denormalizePagePath(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic).isDynamicRoute(page) && (0, _routeRegex).getRouteRegex(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname);
}

const manualScrollRestoration =  false && 0;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader).markAssetError(err);
    }

    throw err;
  });
}

class Router {
  constructor(pathname1, query1, as1, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component: Component1,
    err: err1,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    // Static Data Cache
    this.sdc = {}; // In-flight Server Data Requests, for deduping

    this.sdr = {};
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname: pathname1,
          query: query1
        } = this;
        this.changeState('replaceState', (0, _utils).formatWithValidation({
          pathname: addBasePath(pathname1),
          query: query1
        }), (0, _utils).getURL());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as: as1,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname: pathname1
      } = (0, _parseRelativeUrl).parseRelativeUrl(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as1 === this.asPath && pathname1 === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as1, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname1 !== '/_error') {
      this.components[this.route] = {
        Component: Component1,
        initial: true,
        props: initialProps,
        err: err1,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: []
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname1;
    this.query = query1; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic).isDynamicRoute(pathname1) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? pathname1 : as1;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || self.__NEXT_DATA__.appGip && !self.__NEXT_DATA__.gsp || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h || options._shouldResolveHref; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    }

    const prevLocale = this.locale;

    if (false) { var ref; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as;
    let localeChange = prevLocale !== this.locale; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs) && !localeChange) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname: pathname1,
      query: query1
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader).getClientBuildManifest());
    } catch (err1) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname1 = pathname1 ? (0, _normalizeTrailingSlash).removePathTrailingSlash(delBasePath(pathname1)) : pathname1;

    if (shouldResolveHref && pathname1 !== '/_error') {
      options._shouldResolveHref = true;

      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname1, pages);

        if (parsed.pathname !== pathname1) {
          pathname1 = parsed.pathname;
          parsed.pathname = addBasePath(pathname1);
          url = (0, _utils).formatWithValidation(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic).isDynamicRoute(route)) {
      const parsedAs = (0, _parseRelativeUrl).parseRelativeUrl(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex).getRouteRegex(route);
      const routeMatch = (0, _routeMatcher).getRouteMatcher(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query1) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query1[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils).formatWithValidation(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query1, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query1, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var ref, ref1;
      let routeInfo = await this.getRouteInfo(route, pathname1, query1, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl).parseRelativeUrl(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query1, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      if (options._h && pathname1 === '/_error' && ((ref = self.__NEXT_DATA__.props) === null || ref === void 0 ? void 0 : (ref1 = ref.pageProps) === null || ref1 === void 0 ? void 0 : ref1.statusCode) === 500 && (props === null || props === void 0 ? void 0 : props.pageProps)) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      var _scroll;

      const shouldScroll = (_scroll = options.scroll) !== null && _scroll !== void 0 ? _scroll : !isValidShallowRoute;
      const resetScroll = shouldScroll ? {
        x: 0,
        y: 0
      } : null;
      await this.set(route, pathname1, query1, cleanedAs, routeInfo, forcedScroll !== null && forcedScroll !== void 0 ? forcedScroll : resetScroll).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err1) {
      if (err1.cancelled) {
        return false;
      }

      throw err1;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils).getURL() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader).isAssetError(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component1;
      let styleSheets;
      let props;

      if (typeof Component1 === 'undefined' || typeof styleSheets === 'undefined') {
        ({
          page: Component1,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component: Component1,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component1, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component: Component1,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component1)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils).formatWithValidation({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component1, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err2) {
      return this.handleRouteInfoError(err2, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname: pathname2
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname2) {
        pathname2 = parsed.pathname;
        parsed.pathname = pathname2;
        url = (0, _utils).formatWithValidation(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname2); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err2 = new Error('Loading initial props cancelled');
        err2.cancelled = true;
        throw err2;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err2 => {
      delete this.sdr[resourceKey];
      throw err2;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App1
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App1);

    ctx.AppTree = AppTree;
    return (0, _utils).loadGetInitialProps(App1, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

Router.events = (0, _mitt).default();
exports.default = Router;

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");

var _jsxFileName = "C:\\Users\\Oskari J\xE4rvelin\\Documents\\GitHub\\next-livestream\\pages\\index.js";



function Index() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__.default, {
    title: "Livestream",
    desc: "Next.js sivusto",
    url: "/",
    img: "/kansi-full.png",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
      maxW: "container.xl",
      py: {
        base: "3rem",
        lg: "6rem"
      },
      mx: "auto",
      px: "0",
      wrap: "wrap",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        justify: "center",
        direction: "column",
        minH: "100%",
        w: {
          base: "100%",
          lg: "50%"
        },
        flex: {
          base: "100%",
          lg: "50%"
        },
        py: "0",
        pl: {
          base: "1rem",
          lg: "2rem",
          xl: "0"
        },
        pb: {
          base: "3rem",
          lg: "0"
        },
        pr: {
          base: "1rem",
          lg: "3rem",
          xl: "6rem"
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
          as: "h1",
          fontSize: {
            base: "2xl",
            lg: "4xl"
          },
          pb: {
            base: "1.5rem",
            lg: "3rem"
          },
          lineHeight: "1.5",
          children: "Livestream"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
          fontSize: {
            base: "md",
            sm: "lg",
            lg: "xl"
          },
          children: "Livestream on Progressive Web Application -alusta vahvasti br\xE4nd\xE4tyille YouTube-livestriimeille toteutettuna Next.js:ll\xE4 ja Chakra UI:lla."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
        w: {
          base: "100%",
          lg: "50%"
        },
        flex: {
          base: "100%",
          lg: "50%"
        },
        p: "0",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
          src: "pic1.jpg",
          alt: "Photo by Jonas Jacobsson.",
          title: "Photo by Jonas Jacobsson.",
          mx: "auto"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v17.0.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
var REACT_FRAGMENT_TYPE = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  REACT_FRAGMENT_TYPE = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
          case REACT_SUSPENSE_LIST_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false;
var hasWarnedAboutDeprecatedIsConcurrentMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
    }
  }

  return false;
}
function isConcurrentMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
      hasWarnedAboutDeprecatedIsConcurrentMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isConcurrentMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
    }
  }

  return false;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-icons/go/index.esm.js":
/*!**************************************************!*\
  !*** ./node_modules/react-icons/go/index.esm.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoAlert": () => (/* binding */ GoAlert),
/* harmony export */   "GoArchive": () => (/* binding */ GoArchive),
/* harmony export */   "GoArrowBoth": () => (/* binding */ GoArrowBoth),
/* harmony export */   "GoArrowDown": () => (/* binding */ GoArrowDown),
/* harmony export */   "GoArrowLeft": () => (/* binding */ GoArrowLeft),
/* harmony export */   "GoArrowRight": () => (/* binding */ GoArrowRight),
/* harmony export */   "GoArrowSmallDown": () => (/* binding */ GoArrowSmallDown),
/* harmony export */   "GoArrowSmallLeft": () => (/* binding */ GoArrowSmallLeft),
/* harmony export */   "GoArrowSmallRight": () => (/* binding */ GoArrowSmallRight),
/* harmony export */   "GoArrowSmallUp": () => (/* binding */ GoArrowSmallUp),
/* harmony export */   "GoArrowUp": () => (/* binding */ GoArrowUp),
/* harmony export */   "GoBeaker": () => (/* binding */ GoBeaker),
/* harmony export */   "GoBell": () => (/* binding */ GoBell),
/* harmony export */   "GoBold": () => (/* binding */ GoBold),
/* harmony export */   "GoBook": () => (/* binding */ GoBook),
/* harmony export */   "GoBookmark": () => (/* binding */ GoBookmark),
/* harmony export */   "GoBriefcase": () => (/* binding */ GoBriefcase),
/* harmony export */   "GoBroadcast": () => (/* binding */ GoBroadcast),
/* harmony export */   "GoBrowser": () => (/* binding */ GoBrowser),
/* harmony export */   "GoBug": () => (/* binding */ GoBug),
/* harmony export */   "GoCalendar": () => (/* binding */ GoCalendar),
/* harmony export */   "GoCheck": () => (/* binding */ GoCheck),
/* harmony export */   "GoChecklist": () => (/* binding */ GoChecklist),
/* harmony export */   "GoChevronDown": () => (/* binding */ GoChevronDown),
/* harmony export */   "GoChevronLeft": () => (/* binding */ GoChevronLeft),
/* harmony export */   "GoChevronRight": () => (/* binding */ GoChevronRight),
/* harmony export */   "GoChevronUp": () => (/* binding */ GoChevronUp),
/* harmony export */   "GoCircleSlash": () => (/* binding */ GoCircleSlash),
/* harmony export */   "GoCircuitBoard": () => (/* binding */ GoCircuitBoard),
/* harmony export */   "GoClippy": () => (/* binding */ GoClippy),
/* harmony export */   "GoClock": () => (/* binding */ GoClock),
/* harmony export */   "GoCloudDownload": () => (/* binding */ GoCloudDownload),
/* harmony export */   "GoCloudUpload": () => (/* binding */ GoCloudUpload),
/* harmony export */   "GoCode": () => (/* binding */ GoCode),
/* harmony export */   "GoCommentDiscussion": () => (/* binding */ GoCommentDiscussion),
/* harmony export */   "GoComment": () => (/* binding */ GoComment),
/* harmony export */   "GoCreditCard": () => (/* binding */ GoCreditCard),
/* harmony export */   "GoDash": () => (/* binding */ GoDash),
/* harmony export */   "GoDashboard": () => (/* binding */ GoDashboard),
/* harmony export */   "GoDatabase": () => (/* binding */ GoDatabase),
/* harmony export */   "GoDesktopDownload": () => (/* binding */ GoDesktopDownload),
/* harmony export */   "GoDeviceCameraVideo": () => (/* binding */ GoDeviceCameraVideo),
/* harmony export */   "GoDeviceCamera": () => (/* binding */ GoDeviceCamera),
/* harmony export */   "GoDeviceDesktop": () => (/* binding */ GoDeviceDesktop),
/* harmony export */   "GoDeviceMobile": () => (/* binding */ GoDeviceMobile),
/* harmony export */   "GoDiffAdded": () => (/* binding */ GoDiffAdded),
/* harmony export */   "GoDiffIgnored": () => (/* binding */ GoDiffIgnored),
/* harmony export */   "GoDiffModified": () => (/* binding */ GoDiffModified),
/* harmony export */   "GoDiffRemoved": () => (/* binding */ GoDiffRemoved),
/* harmony export */   "GoDiffRenamed": () => (/* binding */ GoDiffRenamed),
/* harmony export */   "GoDiff": () => (/* binding */ GoDiff),
/* harmony export */   "GoEllipsis": () => (/* binding */ GoEllipsis),
/* harmony export */   "GoEyeClosed": () => (/* binding */ GoEyeClosed),
/* harmony export */   "GoEye": () => (/* binding */ GoEye),
/* harmony export */   "GoFileBinary": () => (/* binding */ GoFileBinary),
/* harmony export */   "GoFileCode": () => (/* binding */ GoFileCode),
/* harmony export */   "GoFileDirectory": () => (/* binding */ GoFileDirectory),
/* harmony export */   "GoFileMedia": () => (/* binding */ GoFileMedia),
/* harmony export */   "GoFilePdf": () => (/* binding */ GoFilePdf),
/* harmony export */   "GoFileSubmodule": () => (/* binding */ GoFileSubmodule),
/* harmony export */   "GoFileSymlinkDirectory": () => (/* binding */ GoFileSymlinkDirectory),
/* harmony export */   "GoFileSymlinkFile": () => (/* binding */ GoFileSymlinkFile),
/* harmony export */   "GoFileZip": () => (/* binding */ GoFileZip),
/* harmony export */   "GoFile": () => (/* binding */ GoFile),
/* harmony export */   "GoFlame": () => (/* binding */ GoFlame),
/* harmony export */   "GoFoldDown": () => (/* binding */ GoFoldDown),
/* harmony export */   "GoFoldUp": () => (/* binding */ GoFoldUp),
/* harmony export */   "GoFold": () => (/* binding */ GoFold),
/* harmony export */   "GoGear": () => (/* binding */ GoGear),
/* harmony export */   "GoGift": () => (/* binding */ GoGift),
/* harmony export */   "GoGistSecret": () => (/* binding */ GoGistSecret),
/* harmony export */   "GoGist": () => (/* binding */ GoGist),
/* harmony export */   "GoGitBranch": () => (/* binding */ GoGitBranch),
/* harmony export */   "GoGitCommit": () => (/* binding */ GoGitCommit),
/* harmony export */   "GoGitCompare": () => (/* binding */ GoGitCompare),
/* harmony export */   "GoGitMerge": () => (/* binding */ GoGitMerge),
/* harmony export */   "GoGitPullRequest": () => (/* binding */ GoGitPullRequest),
/* harmony export */   "GoGithubAction": () => (/* binding */ GoGithubAction),
/* harmony export */   "GoGlobe": () => (/* binding */ GoGlobe),
/* harmony export */   "GoGrabber": () => (/* binding */ GoGrabber),
/* harmony export */   "GoGraph": () => (/* binding */ GoGraph),
/* harmony export */   "GoHeart": () => (/* binding */ GoHeart),
/* harmony export */   "GoHistory": () => (/* binding */ GoHistory),
/* harmony export */   "GoHome": () => (/* binding */ GoHome),
/* harmony export */   "GoHorizontalRule": () => (/* binding */ GoHorizontalRule),
/* harmony export */   "GoHubot": () => (/* binding */ GoHubot),
/* harmony export */   "GoInbox": () => (/* binding */ GoInbox),
/* harmony export */   "GoInfo": () => (/* binding */ GoInfo),
/* harmony export */   "GoIssueClosed": () => (/* binding */ GoIssueClosed),
/* harmony export */   "GoIssueOpened": () => (/* binding */ GoIssueOpened),
/* harmony export */   "GoIssueReopened": () => (/* binding */ GoIssueReopened),
/* harmony export */   "GoItalic": () => (/* binding */ GoItalic),
/* harmony export */   "GoJersey": () => (/* binding */ GoJersey),
/* harmony export */   "GoKebabHorizontal": () => (/* binding */ GoKebabHorizontal),
/* harmony export */   "GoKebabVertical": () => (/* binding */ GoKebabVertical),
/* harmony export */   "GoKey": () => (/* binding */ GoKey),
/* harmony export */   "GoKeyboard": () => (/* binding */ GoKeyboard),
/* harmony export */   "GoLaw": () => (/* binding */ GoLaw),
/* harmony export */   "GoLightBulb": () => (/* binding */ GoLightBulb),
/* harmony export */   "GoLinkExternal": () => (/* binding */ GoLinkExternal),
/* harmony export */   "GoLink": () => (/* binding */ GoLink),
/* harmony export */   "GoListOrdered": () => (/* binding */ GoListOrdered),
/* harmony export */   "GoListUnordered": () => (/* binding */ GoListUnordered),
/* harmony export */   "GoLocation": () => (/* binding */ GoLocation),
/* harmony export */   "GoLock": () => (/* binding */ GoLock),
/* harmony export */   "GoLogoGist": () => (/* binding */ GoLogoGist),
/* harmony export */   "GoLogoGithub": () => (/* binding */ GoLogoGithub),
/* harmony export */   "GoMailRead": () => (/* binding */ GoMailRead),
/* harmony export */   "GoMail": () => (/* binding */ GoMail),
/* harmony export */   "GoMarkGithub": () => (/* binding */ GoMarkGithub),
/* harmony export */   "GoMarkdown": () => (/* binding */ GoMarkdown),
/* harmony export */   "GoMegaphone": () => (/* binding */ GoMegaphone),
/* harmony export */   "GoMention": () => (/* binding */ GoMention),
/* harmony export */   "GoMilestone": () => (/* binding */ GoMilestone),
/* harmony export */   "GoMirror": () => (/* binding */ GoMirror),
/* harmony export */   "GoMortarBoard": () => (/* binding */ GoMortarBoard),
/* harmony export */   "GoMute": () => (/* binding */ GoMute),
/* harmony export */   "GoNoNewline": () => (/* binding */ GoNoNewline),
/* harmony export */   "GoNote": () => (/* binding */ GoNote),
/* harmony export */   "GoOctoface": () => (/* binding */ GoOctoface),
/* harmony export */   "GoOrganization": () => (/* binding */ GoOrganization),
/* harmony export */   "GoPackage": () => (/* binding */ GoPackage),
/* harmony export */   "GoPaintcan": () => (/* binding */ GoPaintcan),
/* harmony export */   "GoPencil": () => (/* binding */ GoPencil),
/* harmony export */   "GoPerson": () => (/* binding */ GoPerson),
/* harmony export */   "GoPin": () => (/* binding */ GoPin),
/* harmony export */   "GoPlay": () => (/* binding */ GoPlay),
/* harmony export */   "GoPlug": () => (/* binding */ GoPlug),
/* harmony export */   "GoPlusSmall": () => (/* binding */ GoPlusSmall),
/* harmony export */   "GoPlus": () => (/* binding */ GoPlus),
/* harmony export */   "GoPrimitiveDot": () => (/* binding */ GoPrimitiveDot),
/* harmony export */   "GoPrimitiveSquare": () => (/* binding */ GoPrimitiveSquare),
/* harmony export */   "GoProject": () => (/* binding */ GoProject),
/* harmony export */   "GoPulse": () => (/* binding */ GoPulse),
/* harmony export */   "GoQuestion": () => (/* binding */ GoQuestion),
/* harmony export */   "GoQuote": () => (/* binding */ GoQuote),
/* harmony export */   "GoRadioTower": () => (/* binding */ GoRadioTower),
/* harmony export */   "GoReply": () => (/* binding */ GoReply),
/* harmony export */   "GoRepoClone": () => (/* binding */ GoRepoClone),
/* harmony export */   "GoRepoForcePush": () => (/* binding */ GoRepoForcePush),
/* harmony export */   "GoRepoForked": () => (/* binding */ GoRepoForked),
/* harmony export */   "GoRepoPull": () => (/* binding */ GoRepoPull),
/* harmony export */   "GoRepoPush": () => (/* binding */ GoRepoPush),
/* harmony export */   "GoRepo": () => (/* binding */ GoRepo),
/* harmony export */   "GoReport": () => (/* binding */ GoReport),
/* harmony export */   "GoRequestChanges": () => (/* binding */ GoRequestChanges),
/* harmony export */   "GoRocket": () => (/* binding */ GoRocket),
/* harmony export */   "GoRss": () => (/* binding */ GoRss),
/* harmony export */   "GoRuby": () => (/* binding */ GoRuby),
/* harmony export */   "GoScreenFull": () => (/* binding */ GoScreenFull),
/* harmony export */   "GoScreenNormal": () => (/* binding */ GoScreenNormal),
/* harmony export */   "GoSearch": () => (/* binding */ GoSearch),
/* harmony export */   "GoServer": () => (/* binding */ GoServer),
/* harmony export */   "GoSettings": () => (/* binding */ GoSettings),
/* harmony export */   "GoShield": () => (/* binding */ GoShield),
/* harmony export */   "GoSignIn": () => (/* binding */ GoSignIn),
/* harmony export */   "GoSignOut": () => (/* binding */ GoSignOut),
/* harmony export */   "GoSmiley": () => (/* binding */ GoSmiley),
/* harmony export */   "GoSquirrel": () => (/* binding */ GoSquirrel),
/* harmony export */   "GoStar": () => (/* binding */ GoStar),
/* harmony export */   "GoStop": () => (/* binding */ GoStop),
/* harmony export */   "GoSync": () => (/* binding */ GoSync),
/* harmony export */   "GoTag": () => (/* binding */ GoTag),
/* harmony export */   "GoTasklist": () => (/* binding */ GoTasklist),
/* harmony export */   "GoTelescope": () => (/* binding */ GoTelescope),
/* harmony export */   "GoTerminal": () => (/* binding */ GoTerminal),
/* harmony export */   "GoTextSize": () => (/* binding */ GoTextSize),
/* harmony export */   "GoThreeBars": () => (/* binding */ GoThreeBars),
/* harmony export */   "GoThumbsdown": () => (/* binding */ GoThumbsdown),
/* harmony export */   "GoThumbsup": () => (/* binding */ GoThumbsup),
/* harmony export */   "GoTools": () => (/* binding */ GoTools),
/* harmony export */   "GoTrashcan": () => (/* binding */ GoTrashcan),
/* harmony export */   "GoTriangleDown": () => (/* binding */ GoTriangleDown),
/* harmony export */   "GoTriangleLeft": () => (/* binding */ GoTriangleLeft),
/* harmony export */   "GoTriangleRight": () => (/* binding */ GoTriangleRight),
/* harmony export */   "GoTriangleUp": () => (/* binding */ GoTriangleUp),
/* harmony export */   "GoUnfold": () => (/* binding */ GoUnfold),
/* harmony export */   "GoUnmute": () => (/* binding */ GoUnmute),
/* harmony export */   "GoUnverified": () => (/* binding */ GoUnverified),
/* harmony export */   "GoVerified": () => (/* binding */ GoVerified),
/* harmony export */   "GoVersions": () => (/* binding */ GoVersions),
/* harmony export */   "GoWatch": () => (/* binding */ GoWatch),
/* harmony export */   "GoX": () => (/* binding */ GoX),
/* harmony export */   "GoZap": () => (/* binding */ GoZap)
/* harmony export */ });
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib */ "./node_modules/react-icons/lib/cjs/index.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lib__WEBPACK_IMPORTED_MODULE_0__);
// THIS FILE IS AUTO GENERATED

function GoAlert (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}}]})(props);
};
function GoArchive (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 14 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M13 2H1v2h12V2zM0 4a1 1 0 0 0 1 1v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v2zm2 1h10v9H2V5zm2 3h6V7H4v1z"}}]})(props);
};
function GoArrowBoth (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 16"},"child":[{"tag":"path","attr":{"d":"M0 8l6-5v3h8V3l6 5-6 5v-3H6v3L0 8z"}}]})(props);
};
function GoArrowDown (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 10 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M7 7V3H3v4H0l5 6 5-6H7z"}}]})(props);
};
function GoArrowLeft (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 10 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6 3L0 8l6 5v-3h4V6H6V3z"}}]})(props);
};
function GoArrowRight (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 10 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 8L4 3v3H0v4h4v3l6-5z"}}]})(props);
};
function GoArrowSmallDown (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 6 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4 7V5H2v2H0l3 4 3-4H4z"}}]})(props);
};
function GoArrowSmallLeft (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 6 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4 7V5L0 8l4 3V9h2V7H4z"}}]})(props);
};
function GoArrowSmallRight (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 6 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6 8L2 5v2H0v2h2v2l4-3z"}}]})(props);
};
function GoArrowSmallUp (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 6 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 5L0 9h2v2h2V9h2L3 5z"}}]})(props);
};
function GoArrowUp (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 10 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5 3L0 9h3v4h4V9h3L5 3z"}}]})(props);
};
function GoBeaker (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M14.38 14.59L11 7V3h1V2H3v1h1v4L.63 14.59A1 1 0 0 0 1.54 16h11.94c.72 0 1.2-.75.91-1.41h-.01zM3.75 10L5 7V3h5v4l1.25 3h-7.5zM8 8h1v1H8V8zM7 7H6V6h1v1zm0-3h1v1H7V4zm0-3H6V0h1v1z"}}]})(props);
};
function GoBell (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 15 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M14 12v1H0v-1l.73-.58c.77-.77.81-2.55 1.19-4.42C2.69 3.23 6 2 6 2c0-.55.45-1 1-1s1 .45 1 1c0 0 3.39 1.23 4.16 5 .38 1.88.42 3.66 1.19 4.42l.66.58H14zm-7 4c1.11 0 2-.89 2-2H5c0 1.11.89 2 2 2z"}}]})(props);
};
function GoBold (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 10 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M1 2h3.83c2.48 0 4.3.75 4.3 2.95 0 1.14-.63 2.23-1.67 2.61v.06c1.33.3 2.3 1.23 2.3 2.86 0 2.39-1.97 3.52-4.61 3.52H1V2zm3.66 4.95c1.67 0 2.38-.66 2.38-1.69 0-1.17-.78-1.61-2.34-1.61H3.13v3.3h1.53zm.27 5.39c1.77 0 2.75-.64 2.75-1.98 0-1.27-.95-1.81-2.75-1.81h-1.8v3.8h1.8v-.01z"}}]})(props);
};
function GoBook (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"}}]})(props);
};
function GoBookmark (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 10 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M9 0H1C.27 0 0 .27 0 1v15l5-3.09L10 16V1c0-.73-.27-1-1-1zm-.78 4.25L6.36 5.61l.72 2.16c.06.22-.02.28-.2.17L5 6.6 3.12 7.94c-.19.11-.25.05-.2-.17l.72-2.16-1.86-1.36c-.17-.16-.14-.23.09-.23l2.3-.03.7-2.16h.25l.7 2.16 2.3.03c.23 0 .27.08.09.23h.01z"}}]})(props);
};
function GoBriefcase (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 14 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M9 4V3c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v1H1c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1H9zM6 3h2v1H6V3zm7 6H8v1H6V9H1V5h1v3h10V5h1v4z"}}]})(props);
};
function GoBroadcast (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M9 9H8c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1H6c-.55 0-1 .45-1 1v2h1v3c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-3h1v-2c0-.55-.45-1-1-1zM7 7h1v1H7V7zm2 4H8v4H7v-4H6v-1h3v1zm2.09-3.5c0-1.98-1.61-3.59-3.59-3.59A3.593 3.593 0 0 0 4 8.31v1.98c-.61-.77-1-1.73-1-2.8 0-2.48 2.02-4.5 4.5-4.5S12 5.01 12 7.49c0 1.06-.39 2.03-1 2.8V8.31c.06-.27.09-.53.09-.81zm3.91 0c0 2.88-1.63 5.38-4 6.63v-1.05a6.553 6.553 0 0 0 3.09-5.58A6.59 6.59 0 0 0 7.5.91 6.59 6.59 0 0 0 .91 7.5c0 2.36 1.23 4.42 3.09 5.58v1.05A7.497 7.497 0 0 1 7.5 0C11.64 0 15 3.36 15 7.5z"}}]})(props);
};
function GoBrowser (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 14 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5 3h1v1H5V3zM3 3h1v1H3V3zM1 3h1v1H1V3zm12 10H1V5h12v8zm0-9H7V3h6v1zm1-1c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V3z"}}]})(props);
};
function GoBug (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M11 10h3V9h-3V8l3.17-1.03-.34-.94L11 7V6c0-.55-.45-1-1-1V4c0-.48-.36-.88-.83-.97L10.2 2H12V1H9.8l-2 2h-.59L5.2 1H3v1h1.8l1.03 1.03C5.36 3.12 5 3.51 5 4v1c-.55 0-1 .45-1 1v1l-2.83-.97-.34.94L4 8v1H1v1h3v1L.83 12.03l.34.94L4 12v1c0 .55.45 1 1 1h1l1-1V6h1v7l1 1h1c.55 0 1-.45 1-1v-1l2.83.97.34-.94L11 11v-1zM9 5H6V4h3v1z"}}]})(props);
};
function GoCalendar (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 14 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M13 2h-1v1.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5V2H6v1.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5V2H2c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h11c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 12H2V5h11v9zM5 3H4V1h1v2zm6 0h-1V1h1v2zM6 7H5V6h1v1zm2 0H7V6h1v1zm2 0H9V6h1v1zm2 0h-1V6h1v1zM4 9H3V8h1v1zm2 0H5V8h1v1zm2 0H7V8h1v1zm2 0H9V8h1v1zm2 0h-1V8h1v1zm-8 2H3v-1h1v1zm2 0H5v-1h1v1zm2 0H7v-1h1v1zm2 0H9v-1h1v1zm2 0h-1v-1h1v1zm-8 2H3v-1h1v1zm2 0H5v-1h1v1zm2 0H7v-1h1v1zm2 0H9v-1h1v1z"}}]})(props);
};
function GoCheck (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 12 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"}}]})(props);
};
function GoChecklist (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M16 8.5l-6 6-3-3L8.5 10l1.5 1.5L14.5 7 16 8.5zM5.7 12.2l.8.8H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h7c.55 0 1 .45 1 1v6.5l-.8-.8c-.39-.39-1.03-.39-1.42 0L5.7 10.8a.996.996 0 0 0 0 1.41v-.01zM4 4h5V3H4v1zm0 2h5V5H4v1zm0 2h3V7H4v1zM3 9H2v1h1V9zm0-2H2v1h1V7zm0-2H2v1h1V5zm0-2H2v1h1V3z"}}]})(props);
};
function GoChevronDown (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 10 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5 11L0 6l1.5-1.5L5 8.25 8.5 4.5 10 6l-5 5z"}}]})(props);
};
function GoChevronLeft (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 8 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5.5 3L7 4.5 3.25 8 7 11.5 5.5 13l-5-5 5-5z"}}]})(props);
};
function GoChevronRight (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 8 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M7.5 8l-5 5L1 11.5 4.75 8 1 4.5 2.5 3l5 5z"}}]})(props);
};
function GoChevronUp (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 10 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 10l-1.5 1.5L5 7.75 1.5 11.5 0 10l5-5 5 5z"}}]})(props);
};
function GoCircleSlash (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 14 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm0 1.3c1.3 0 2.5.44 3.47 1.17l-8 8A5.755 5.755 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zm0 11.41c-1.3 0-2.5-.44-3.47-1.17l8-8c.73.97 1.17 2.17 1.17 3.47 0 3.14-2.56 5.7-5.7 5.7z"}}]})(props);
};
function GoCircuitBoard (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 14 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 5c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zm8 0c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1zm0 6c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1zm2-10H5v2.17c.36.19.64.47.83.83h2.34c.42-.78 1.33-1.28 2.34-1.05.75.19 1.36.8 1.53 1.55.31 1.38-.72 2.59-2.05 2.59-.8 0-1.48-.44-1.83-1.09H5.83c-.42.8-1.33 1.28-2.34 1.03-.73-.17-1.34-.78-1.52-1.52C1.72 4.49 2.2 3.59 3 3.17V1H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1l5-5h2.17c.42-.78 1.33-1.28 2.34-1.05.75.19 1.36.8 1.53 1.55.31 1.38-.72 2.59-2.05 2.59-.8 0-1.48-.44-1.83-1.09H6.99L4 15h9c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1z"}}]})(props);
};
function GoClippy (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 14 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z"}}]})(props);
};
function GoClock (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 14 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M8 8h3v2H7c-.55 0-1-.45-1-1V4h2v4zM7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7z"}}]})(props);
};
function GoCloudDownload (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M9 12h2l-3 3-3-3h2V7h2v5zm3-8c0-.44-.91-3-4.5-3C5.08 1 3 2.92 3 5 1.02 5 0 6.52 0 8c0 1.53 1 3 3 3h3V9.7H3C1.38 9.7 1.3 8.28 1.3 8c0-.17.05-1.7 1.7-1.7h1.3V5c0-1.39 1.56-2.7 3.2-2.7 2.55 0 3.13 1.55 3.2 1.8v1.2H12c.81 0 2.7.22 2.7 2.2 0 2.09-2.25 2.2-2.7 2.2h-2V11h2c2.08 0 4-1.16 4-3.5C16 5.06 14.08 4 12 4z"}}]})(props);
};
function GoCloudUpload (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M7 9H5l3-3 3 3H9v5H7V9zm5-4c0-.44-.91-3-4.5-3C5.08 2 3 3.92 3 6 1.02 6 0 7.52 0 9c0 1.53 1 3 3 3h3v-1.3H3c-1.62 0-1.7-1.42-1.7-1.7 0-.17.05-1.7 1.7-1.7h1.3V6c0-1.39 1.56-2.7 3.2-2.7 2.55 0 3.13 1.55 3.2 1.8v1.2H12c.81 0 2.7.22 2.7 2.2 0 2.09-2.25 2.2-2.7 2.2h-2V12h2c2.08 0 4-1.16 4-3.5C16 6.06 14.08 5 12 5z"}}]})(props);
};
function GoCode (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 14 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"}}]})(props);
};
function GoCommentDiscussion (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M15 1H6c-.55 0-1 .45-1 1v2H1c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h1v3l3-3h4c.55 0 1-.45 1-1V9h1l3 3V9h1c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zM9 11H4.5L3 12.5V11H1V5h4v3c0 .55.45 1 1 1h3v2zm6-3h-2v1.5L11.5 8H6V2h9v6z"}}]})(props);
};
function GoComment (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M14 1H2c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h2v3.5L7.5 11H14c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm0 9H7l-2 2v-2H2V2h12v8z"}}]})(props);
};
function GoCreditCard (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M12 9H2V8h10v1zm4-6v9c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h14c.55 0 1 .45 1 1zm-1 3H1v6h14V6zm0-3H1v1h14V3zm-9 7H2v1h4v-1z"}}]})(props);
};
function GoDash (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 8 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M0 7v2h8V7H0z"}}]})(props);
};
function GoDashboard (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M9 5H8V4h1v1zm4 3h-1v1h1V8zM6 5H5v1h1V5zM5 8H4v1h1V8zm11-5.5l-.5-.5L9 7c-.06-.02-1 0-1 0-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-.92l6-5.58zm-1.59 4.09c.19.61.3 1.25.3 1.91 0 3.42-2.78 6.2-6.2 6.2-3.42 0-6.21-2.78-6.21-6.2 0-3.42 2.78-6.2 6.2-6.2 1.2 0 2.31.34 3.27.94l.94-.94A7.459 7.459 0 0 0 8.51 1C4.36 1 1 4.36 1 8.5 1 12.64 4.36 16 8.5 16c4.14 0 7.5-3.36 7.5-7.5 0-1.03-.2-2.02-.59-2.91l-1 1z"}}]})(props);
};
function GoDatabase (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 12 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6 15c-3.31 0-6-.9-6-2v-2c0-.17.09-.34.21-.5.67.86 3 1.5 5.79 1.5s5.12-.64 5.79-1.5c.13.16.21.33.21.5v2c0 1.1-2.69 2-6 2zm0-4c-3.31 0-6-.9-6-2V7c0-.11.04-.21.09-.31.03-.06.07-.13.12-.19C.88 7.36 3.21 8 6 8s5.12-.64 5.79-1.5c.05.06.09.13.12.19.05.1.09.21.09.31v2c0 1.1-2.69 2-6 2zm0-4c-3.31 0-6-.9-6-2V3c0-1.1 2.69-2 6-2s6 .9 6 2v2c0 1.1-2.69 2-6 2zm0-5c-2.21 0-4 .45-4 1s1.79 1 4 1 4-.45 4-1-1.79-1-4-1z"}}]})(props);
};
function GoDesktopDownload (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4 6h3V0h2v6h3l-4 4-4-4zm11-4h-4v1h4v8H1V3h4V2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1z"}}]})(props);
};
function GoDeviceCameraVideo (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M15.2 2.09L10 5.72V3c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V9.28l5.2 3.63c.33.23.8 0 .8-.41v-10c0-.41-.47-.64-.8-.41z"}}]})(props);
};
function GoDeviceCamera (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M15 3H7c0-.55-.45-1-1-1H2c-.55 0-1 .45-1 1-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM6 5H2V4h4v1zm4.5 7C8.56 12 7 10.44 7 8.5S8.56 5 10.5 5 14 6.56 14 8.5 12.44 12 10.5 12zM13 8.5c0 1.38-1.13 2.5-2.5 2.5S8 9.87 8 8.5 9.13 6 10.5 6 13 7.13 13 8.5z"}}]})(props);
};
function GoDeviceDesktop (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"}}]})(props);
};
function GoDeviceMobile (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 10 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M9 0H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zM5 15.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zM9 12H1V2h8v10z"}}]})(props);
};
function GoDiffAdded (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 14 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M13 1H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm0 13H1V2h12v12zM6 9H3V7h3V4h2v3h3v2H8v3H6V9z"}}]})(props);
};
function GoDiffIgnored (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 14 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M13 1H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm0 13H1V2h12v12zm-8.5-2H3v-1.5L9.5 4H11v1.5L4.5 12z"}}]})(props);
};
function GoDiffModified (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 14 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M13 1H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm0 13H1V2h12v12zM4 8c0-1.66 1.34-3 3-3s3 1.34 3 3-1.34 3-3 3-3-1.34-3-3z"}}]})(props);
};
function GoDiffRemoved (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 14 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M13 1H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm0 13H1V2h12v12zm-2-5H3V7h8v2z"}}]})(props);
};
function GoDiffRenamed (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 14 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6 9H3V7h3V4l5 4-5 4V9zm8-7v12c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h12c.55 0 1 .45 1 1zm-1 0H1v12h12V2z"}}]})(props);
};
function GoDiff (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 13 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6 7h2v1H6v2H5V8H3V7h2V5h1v2zm-3 6h5v-1H3v1zM7.5 2L11 5.5V15c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h6.5zM10 6L7 3H1v12h9V6zM8.5 0H3v1h5l4 4v8h1V4.5L8.5 0z"}}]})(props);
};
function GoEllipsis (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 12 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M11 5H1c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zM4 9H2V7h2v2zm3 0H5V7h2v2zm3 0H8V7h2v2z"}}]})(props);
};
function GoEyeClosed (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 16 14"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M14.822.854a.5.5 0 1 0-.707-.708l-2.11 2.11C10.89 1.483 9.565.926 8.06.926c-5.06 0-8.06 6-8.06 6s1.162 2.323 3.258 4.078l-2.064 2.065a.5.5 0 1 0 .707.707L14.822.854zM4.86 9.403L6.292 7.97A1.999 1.999 0 0 1 6 6.925c0-1.11.89-2 2-2 .384 0 .741.106 1.045.292l1.433-1.433A3.98 3.98 0 0 0 8 2.925c-2.2 0-4 1.8-4 4 0 .938.321 1.798.859 2.478zm7.005-3.514l1.993-1.992A14.873 14.873 0 0 1 16 6.925s-3 6-7.94 6a6.609 6.609 0 0 1-2.661-.57l1.565-1.566c.33.089.678.136 1.036.136 2.22 0 4-1.78 4-4 0-.358-.047-.705-.136-1.036zM9.338 8.415l.152-.151a1.996 1.996 0 0 1-.152.151z"}}]})(props);
};
function GoEye (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"}}]})(props);
};
function GoFileBinary (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 12 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4 12h1v1H2v-1h1v-2H2V9h2v3zm8-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5zM8 4H6v1h1v2H6v1h3V7H8V4zM2 4h3v4H2V4zm1 3h1V5H3v2zm3 2h3v4H6V9zm1 3h1v-2H7v2z"}}]})(props);
};
function GoFileCode (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 12 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M8.5 1H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V4.5L8.5 1zM11 14H1V2h7l3 3v9zM5 6.98L3.5 8.5 5 10l-.5 1L2 8.5 4.5 6l.5.98zM7.5 6L10 8.5 7.5 11l-.5-.98L8.5 8.5 7 7l.5-1z"}}]})(props);
};
function GoFileDirectory (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 14 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M13 4H7V3c0-.66-.31-1-1-1H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zM6 4H1V3h5v1z"}}]})(props);
};
function GoFileMedia (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 12 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6 5h2v2H6V5zm6-.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v11l3-5 2 4 2-2 3 3V5z"}}]})(props);
};
function GoFilePdf (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 12 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M8.5 1H1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V4.5L8.5 1zM1 2h4a.68.68 0 0 0-.31.2 1.08 1.08 0 0 0-.23.47 4.22 4.22 0 0 0-.09 1.47c.06.609.173 1.211.34 1.8A21.78 21.78 0 0 1 3.6 8.6c-.5 1-.8 1.66-.91 1.84a7.156 7.156 0 0 0-.69.3c-.362.165-.699.38-1 .64V2zm4.42 4.8a5.65 5.65 0 0 0 1.17 2.09c.275.237.595.417.94.53-.64.09-1.23.2-1.81.33-.618.15-1.223.347-1.81.59s.22-.44.61-1.25c.365-.74.67-1.51.91-2.3l-.01.01zM11 14H1.5a.743.743 0 0 1-.17 0 2.12 2.12 0 0 0 .73-.44 10.14 10.14 0 0 0 1.78-2.38c.31-.13.58-.23.81-.31l.42-.14c.45-.13.94-.23 1.44-.33s1-.16 1.48-.2c.447.216.912.394 1.39.53.403.11.814.188 1.23.23h.38V14H11zm0-4.86a3.743 3.743 0 0 0-.64-.28 4.221 4.221 0 0 0-.75-.11c-.411.003-.822.03-1.23.08a3 3 0 0 1-1-.64 6.07 6.07 0 0 1-1.29-2.33c.111-.661.178-1.33.2-2 .02-.25.02-.5 0-.75a1.05 1.05 0 0 0-.2-.88.82.82 0 0 0-.61-.23H8l3 3v4.14z"}}]})(props);
};
function GoFileSubmodule (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 14 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 7H4v7h9c.55 0 1-.45 1-1V8h-4V7zM9 9H5V8h4v1zm4-5H7V3c0-.66-.31-1-1-1H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h2V7c0-.55.45-1 1-1h6c.55 0 1 .45 1 1h3V5c0-.55-.45-1-1-1zM6 4H1V3h5v1z"}}]})(props);
};
function GoFileSymlinkDirectory (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 14 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M13 4H7V3c0-.66-.31-1-1-1H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zM1 3h5v1H1V3zm6 9v-2c-.98-.02-1.84.22-2.55.7-.71.48-1.19 1.25-1.45 2.3.02-1.64.39-2.88 1.13-3.73C4.86 8.43 5.82 8 7.01 8V6l4 3-4 3H7z"}}]})(props);
};
function GoFileSymlinkFile (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 12 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M8.5 1H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V4.5L8.5 1zM11 14H1V2h7l3 3v9zM6 4.5l4 3-4 3v-2c-.98-.02-1.84.22-2.55.7-.71.48-1.19 1.25-1.45 2.3.02-1.64.39-2.88 1.13-3.73.73-.84 1.69-1.27 2.88-1.27v-2H6z"}}]})(props);
};
function GoFileZip (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 12 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M8.5 1H1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V4.5L8.5 1zM11 14H1V2h3v1h1V2h3l3 3v9zM5 4V3h1v1H5zM4 4h1v1H4V4zm1 2V5h1v1H5zM4 6h1v1H4V6zm1 2V7h1v1H5zM4 9.28A2 2 0 0 0 3 11v1h4v-1a2 2 0 0 0-2-2V8H4v1.28zM6 10v1H4v-1h2z"}}]})(props);
};
function GoFile (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 12 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"}}]})(props);
};
function GoFlame (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 12 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}}]})(props);
};
function GoFoldDown (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 14 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4 11l3 3 3-3H8V5H6v6H4zm-4 0c0 .55.45 1 1 1h2.5l-1-1h-1l2-2H5V8H3.5l-2-2H5V5H1c-.55 0-1 .45-1 1l2.5 2.5L0 11zm10.5-2H9V8h1.5l2-2H9V5h4c.55 0 1 .45 1 1l-2.5 2.5L14 11c0 .55-.45 1-1 1h-2.5l1-1h1l-2-2z"}}]})(props);
};
function GoFoldUp (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 14 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 6L7 3 4 6h2v6h2V6h2zm4 0c0-.55-.45-1-1-1h-2.5l1 1h1l-2 2H9v1h1.5l2 2H9v1h4c.55 0 1-.45 1-1l-2.5-2.5L14 6zM3.5 8H5v1H3.5l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 6c0-.55.45-1 1-1h2.5l-1 1h-1l2 2z"}}]})(props);
};
function GoFold (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 14 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M7 9l3 3H8v3H6v-3H4l3-3zm3-6H8V0H6v3H4l3 3 3-3zm4 2c0-.55-.45-1-1-1h-2.5l-1 1h3l-2 2h-7l-2-2h3l-1-1H1c-.55 0-1 .45-1 1l2.5 2.5L0 10c0 .55.45 1 1 1h2.5l1-1h-3l2-2h7l2 2h-3l1 1H13c.55 0 1-.45 1-1l-2.5-2.5L14 5z"}}]})(props);
};
function GoGear (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 14 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M14 8.77v-1.6l-1.94-.64-.45-1.09.88-1.84-1.13-1.13-1.81.91-1.09-.45-.69-1.92h-1.6l-.63 1.94-1.11.45-1.84-.88-1.13 1.13.91 1.81-.45 1.09L0 7.23v1.59l1.94.64.45 1.09-.88 1.84 1.13 1.13 1.81-.91 1.09.45.69 1.92h1.59l.63-1.94 1.11-.45 1.84.88 1.13-1.13-.92-1.81.47-1.09L14 8.75v.02zM7 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"}}]})(props);
};
function GoGift (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 14 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M13 4h-1.38c.19-.33.33-.67.36-.91.06-.67-.11-1.22-.52-1.61C11.1 1.1 10.65 1 10.1 1h-.11c-.53.02-1.11.25-1.53.58-.42.33-.73.72-.97 1.2-.23-.48-.55-.88-.97-1.2-.42-.32-1-.58-1.53-.58h-.03c-.56 0-1.06.09-1.44.48-.41.39-.58.94-.52 1.61.03.23.17.58.36.91H1.98c-.55 0-1 .45-1 1v3h1v5c0 .55.45 1 1 1h9c.55 0 1-.45 1-1V8h1V5c0-.55-.45-1-1-1H13zm-4.78-.88c.17-.36.42-.67.75-.92.3-.23.72-.39 1.05-.41h.09c.45 0 .66.11.8.25s.33.39.3.95c-.05.19-.25.61-.5 1h-2.9l.41-.88v.01zM4.09 2.04c.13-.13.31-.25.91-.25.31 0 .72.17 1.03.41.33.25.58.55.75.92L7.2 4H4.3c-.25-.39-.45-.81-.5-1-.03-.56.16-.81.3-.95l-.01-.01zM7 12.99H3V8h4v5-.01zm0-6H2V5h5v2-.01zm5 6H8V8h4v5-.01zm1-6H8V5h5v2-.01z"}}]})(props);
};
function GoGistSecret (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 14 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M8 10.5L9 14H5l1-3.5L5.25 9h3.5L8 10.5zM10 6H4L2 7h10l-2-1zM9 2L7 3 5 2 4 5h6L9 2zm4.03 7.75L10 9l1 2-2 3h3.22c.45 0 .86-.31.97-.75l.56-2.28c.14-.53-.19-1.08-.72-1.22zM4 9l-3.03.75c-.53.14-.86.69-.72 1.22l.56 2.28c.11.44.52.75.97.75H5l-2-3 1-2z"}}]})(props);
};
function GoGist (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 12 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M7.5 5L10 7.5 7.5 10l-.75-.75L8.5 7.5 6.75 5.75 7.5 5zm-3 0L2 7.5 4.5 10l.75-.75L3.5 7.5l1.75-1.75L4.5 5zM0 13V2c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v11c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1zm1 0h10V2H1v11z"}}]})(props);
};
function GoGitBranch (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 10 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 5c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v.3c-.02.52-.23.98-.63 1.38-.4.4-.86.61-1.38.63-.83.02-1.48.16-2 .45V4.72a1.993 1.993 0 0 0-1-3.72C.88 1 0 1.89 0 3a2 2 0 0 0 1 1.72v6.56c-.59.35-1 .99-1 1.72 0 1.11.89 2 2 2 1.11 0 2-.89 2-2 0-.53-.2-1-.53-1.36.09-.06.48-.41.59-.47.25-.11.56-.17.94-.17 1.05-.05 1.95-.45 2.75-1.25S8.95 7.77 9 6.73h-.02C9.59 6.37 10 5.73 10 5zM2 1.8c.66 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2C1.35 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2zm0 12.41c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm6-8c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"}}]})(props);
};
function GoGitCommit (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 14 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10.86 7c-.45-1.72-2-3-3.86-3-1.86 0-3.41 1.28-3.86 3H0v2h3.14c.45 1.72 2 3 3.86 3 1.86 0 3.41-1.28 3.86-3H14V7h-3.14zM7 10.2c-1.22 0-2.2-.98-2.2-2.2 0-1.22.98-2.2 2.2-2.2 1.22 0 2.2.98 2.2 2.2 0 1.22-.98 2.2-2.2 2.2z"}}]})(props);
};
function GoGitCompare (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 14 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5 12H4c-.27-.02-.48-.11-.69-.31-.21-.2-.3-.42-.31-.69V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V11c.03.78.34 1.47.94 2.06.6.59 1.28.91 2.06.94h1v2l3-3-3-3v2zM2 1.8c.66 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2C1.35 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2zm11 9.48V5c-.03-.78-.34-1.47-.94-2.06-.6-.59-1.28-.91-2.06-.94H9V0L6 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 12 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"}}]})(props);
};
function GoGitMerge (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 12 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 7c-.73 0-1.38.41-1.73 1.02V8C7.22 7.98 6 7.64 5.14 6.98c-.75-.58-1.5-1.61-1.89-2.44A1.993 1.993 0 0 0 2 .99C.89.99 0 1.89 0 3a2 2 0 0 0 1 1.72v6.56c-.59.35-1 .99-1 1.72 0 1.11.89 2 2 2a1.993 1.993 0 0 0 1-3.72V7.67c.67.7 1.44 1.27 2.3 1.69.86.42 2.03.63 2.97.64v-.02c.36.61 1 1.02 1.73 1.02 1.11 0 2-.89 2-2 0-1.11-.89-2-2-2zm-6.8 6c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm8 6c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"}}]})(props);
};
function GoGitPullRequest (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 12 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"}}]})(props);
};
function GoGithubAction (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M9 2h6c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1H9a1 1 0 1 1-2 0H1c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h6a1 1 0 1 1 2 0zm6 1v10H1V3h14zm-2.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"}}]})(props);
};
function GoGlobe (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 14 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M7 1C3.14 1 0 4.14 0 8s3.14 7 7 7c.48 0 .94-.05 1.38-.14-.17-.08-.2-.73-.02-1.09.19-.41.81-1.45.2-1.8-.61-.35-.44-.5-.81-.91-.37-.41-.22-.47-.25-.58-.08-.34.36-.89.39-.94.02-.06.02-.27 0-.33 0-.08-.27-.22-.34-.23-.06 0-.11.11-.2.13-.09.02-.5-.25-.59-.33-.09-.08-.14-.23-.27-.34-.13-.13-.14-.03-.33-.11s-.8-.31-1.28-.48c-.48-.19-.52-.47-.52-.66-.02-.2-.3-.47-.42-.67-.14-.2-.16-.47-.2-.41-.04.06.25.78.2.81-.05.02-.16-.2-.3-.38-.14-.19.14-.09-.3-.95s.14-1.3.17-1.75c.03-.45.38.17.19-.13-.19-.3 0-.89-.14-1.11-.13-.22-.88.25-.88.25.02-.22.69-.58 1.16-.92.47-.34.78-.06 1.16.05.39.13.41.09.28-.05-.13-.13.06-.17.36-.13.28.05.38.41.83.36.47-.03.05.09.11.22s-.06.11-.38.3c-.3.2.02.22.55.61s.38-.25.31-.55c-.07-.3.39-.06.39-.06.33.22.27.02.5.08.23.06.91.64.91.64-.83.44-.31.48-.17.59.14.11-.28.3-.28.3-.17-.17-.19.02-.3.08-.11.06-.02.22-.02.22-.56.09-.44.69-.42.83 0 .14-.38.36-.47.58-.09.2.25.64.06.66-.19.03-.34-.66-1.31-.41-.3.08-.94.41-.59 1.08.36.69.92-.19 1.11-.09.19.1-.06.53-.02.55.04.02.53.02.56.61.03.59.77.53.92.55.17 0 .7-.44.77-.45.06-.03.38-.28 1.03.09.66.36.98.31 1.2.47.22.16.08.47.28.58.2.11 1.06-.03 1.28.31.22.34-.88 2.09-1.22 2.28-.34.19-.48.64-.84.92s-.81.64-1.27.91c-.41.23-.47.66-.66.8 3.14-.7 5.48-3.5 5.48-6.84 0-3.86-3.14-7-7-7L7 1zm1.64 6.56c-.09.03-.28.22-.78-.08-.48-.3-.81-.23-.86-.28 0 0-.05-.11.17-.14.44-.05.98.41 1.11.41.13 0 .19-.13.41-.05.22.08.05.13-.05.14zM6.34 1.7c-.05-.03.03-.08.09-.14.03-.03.02-.11.05-.14.11-.11.61-.25.52.03-.11.27-.58.3-.66.25zm1.23.89c-.19-.02-.58-.05-.52-.14.3-.28-.09-.38-.34-.38-.25-.02-.34-.16-.22-.19.12-.03.61.02.7.08.08.06.52.25.55.38.02.13 0 .25-.17.25zm1.47-.05c-.14.09-.83-.41-.95-.52-.56-.48-.89-.31-1-.41-.11-.1-.08-.19.11-.34.19-.15.69.06 1 .09.3.03.66.27.66.55.02.25.33.5.19.63h-.01z"}}]})(props);
};
function GoGrabber (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 8 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M8 4v1H0V4h8zM0 8h8V7H0v1zm0 3h8v-1H0v1z"}}]})(props);
};
function GoGraph (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"}}]})(props);
};
function GoHeart (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 12 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M9 2c-.97 0-1.69.42-2.2 1-.51.58-.78.92-.8 1-.02-.08-.28-.42-.8-1-.52-.58-1.17-1-2.2-1-1.632.086-2.954 1.333-3 3 0 .52.09 1.52.67 2.67C1.25 8.82 3.01 10.61 6 13c2.98-2.39 4.77-4.17 5.34-5.33C11.91 6.51 12 5.5 12 5c-.047-1.69-1.342-2.913-3-3z"}}]})(props);
};
function GoHistory (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 14 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M8 13H6V6h5v2H8v5zM7 1C4.81 1 2.87 2.02 1.59 3.59L0 2v4h4L2.5 4.5C3.55 3.17 5.17 2.3 7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-.34.03-.67.09-1H.08C.03 7.33 0 7.66 0 8c0 3.86 3.14 7 7 7s7-3.14 7-7-3.14-7-7-7z"}}]})(props);
};
function GoHome (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M16 9l-3-3V2h-2v2L8 1 0 9h2l1 5c0 .55.45 1 1 1h8c.55 0 1-.45 1-1l1-5h2zm-4 5H9v-4H7v4H4L2.81 7.69 8 2.5l5.19 5.19L12 14z"}}]})(props);
};
function GoHorizontalRule (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 10 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M1 7h2v2h1V3H3v3H1V3H0v6h1V7zm9 2V7H9v2h1zm0-3V4H9v2h1zM7 6V4h2V3H6v6h1V7h2V6H7zm-7 7h10v-2H0v2z"}}]})(props);
};
function GoHubot (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 14 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 6c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1H3zm8 1.75L9.75 9h-1.5L7 7.75 5.75 9h-1.5L3 7.75V7h.75L5 8.25 6.25 7h1.5L9 8.25 10.25 7H11v.75zM5 11h4v1H5v-1zm2-9C3.14 2 0 4.91 0 8.5V13c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V8.5C14 4.91 10.86 2 7 2zm6 11H1V8.5c0-3.09 2.64-5.59 6-5.59s6 2.5 6 5.59V13z"}}]})(props);
};
function GoInbox (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 14 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M14 9l-1.13-7.14c-.08-.48-.5-.86-1-.86H2.13c-.5 0-.92.38-1 .86L0 9v5c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V9zm-3.28.55l-.44.89c-.17.34-.52.56-.91.56H4.61c-.38 0-.72-.22-.89-.55l-.44-.91c-.17-.33-.52-.55-.89-.55H1l1-7h10l1 7h-1.38c-.39 0-.73.22-.91.55l.01.01z"}}]})(props);
};
function GoInfo (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 14 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}}]})(props);
};
function GoIssueClosed (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M7 10h2v2H7v-2zm2-6H7v5h2V4zm1.5 1.5l-1 1L12 9l4-4.5-1-1L12 7l-1.5-1.5zM8 13.7A5.71 5.71 0 0 1 2.3 8c0-3.14 2.56-5.7 5.7-5.7 1.83 0 3.45.88 4.5 2.2l.92-.92A6.947 6.947 0 0 0 8 1C4.14 1 1 4.14 1 8s3.14 7 7 7 7-3.14 7-7l-1.52 1.52c-.66 2.41-2.86 4.19-5.48 4.19v-.01z"}}]})(props);
};
function GoIssueOpened (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 14 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}}]})(props);
};
function GoIssueReopened (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 14 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M8 9H6V4h2v5zm-2 3h2v-2H6v2zm6.33-2H10l1.5 1.5c-1.05 1.33-2.67 2.2-4.5 2.2A5.71 5.71 0 0 1 1.3 8c0-.34.03-.67.09-1H.08C.03 7.33 0 7.66 0 8c0 3.86 3.14 7 7 7 2.19 0 4.13-1.02 5.41-2.59L14 14v-4h-1.67zM1.67 6H4L2.5 4.5C3.55 3.17 5.17 2.3 7 2.3c3.14 0 5.7 2.56 5.7 5.7 0 .34-.03.67-.09 1h1.31c.05-.33.08-.66.08-1 0-3.86-3.14-7-7-7-2.19 0-4.13 1.02-5.41 2.59L0 2v4h1.67z"}}]})(props);
};
function GoItalic (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 6 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M2.81 5h1.98L3 14H1l1.81-9zm.36-2.7c0-.7.58-1.3 1.33-1.3.56 0 1.13.38 1.13 1.03 0 .75-.59 1.3-1.33 1.3-.58 0-1.13-.38-1.13-1.03z"}}]})(props);
};
function GoJersey (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 14 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4.5 6l-.5.5v5l.5.5h2l.5-.5v-5L6.5 6h-2zM6 11H5V7h1v4zm6.27-7.25C12.05 2.37 11.96 1.12 12 0H9.02c0 .27-.13.48-.39.69-.25.2-.63.3-1.13.3-.5 0-.88-.09-1.13-.3-.23-.2-.36-.42-.36-.69H3c.05 1.13-.03 2.38-.25 3.75C2.55 5.13 1.95 5.88 1 6v9c.02.27.11.48.31.69.2.21.42.3.69.31h11c.27-.02.48-.11.69-.31.21-.2.3-.42.31-.69V6c-.95-.13-1.53-.88-1.75-2.25h.02zM13 15H2V7c.89-.5 1.48-1.25 1.72-2.25S4.03 2.5 4 1h1c-.02.78.16 1.47.52 2.06.36.58 1.02.89 2 .94.98-.02 1.64-.33 2-.94.36-.59.5-1.28.48-2.06h1c.02 1.42.13 2.55.33 3.38.2.81.69 2 1.67 2.63v8V15zM8.5 6l-.5.5v5l.5.5h2l.5-.5v-5l-.5-.5h-2zm1.5 5H9V7h1v4z"}}]})(props);
};
function GoKebabHorizontal (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 13 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM13 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"}}]})(props);
};
function GoKebabVertical (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 3 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M0 2.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0zm0 5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0zM1.5 14a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"}}]})(props);
};
function GoKey (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 14 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M12.83 2.17C12.08 1.42 11.14 1.03 10 1c-1.13.03-2.08.42-2.83 1.17S6.04 3.86 6.01 5c0 .3.03.59.09.89L0 12v1l1 1h2l1-1v-1h1v-1h1v-1h2l1.09-1.11c.3.08.59.11.91.11 1.14-.03 2.08-.42 2.83-1.17S13.97 6.14 14 5c-.03-1.14-.42-2.08-1.17-2.83zM11 5.38c-.77 0-1.38-.61-1.38-1.38 0-.77.61-1.38 1.38-1.38.77 0 1.38.61 1.38 1.38 0 .77-.61 1.38-1.38 1.38z"}}]})(props);
};
function GoKeyboard (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 5H9V4h1v1zM3 6H2v1h1V6zm5-2H7v1h1V4zM4 4H2v1h2V4zm8 7h2v-1h-2v1zM8 7h1V6H8v1zm-4 3H2v1h2v-1zm8-6h-1v1h1V4zm2 0h-1v1h1V4zm-2 5h2V6h-2v3zm4-6v9c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h14c.55 0 1 .45 1 1zm-1 0H1v9h14V3zM6 7h1V6H6v1zm0-3H5v1h1V4zM4 7h1V6H4v1zm1 4h6v-1H5v1zm5-4h1V6h-1v1zM3 8H2v1h1V8zm5 0v1h1V8H8zM6 8v1h1V8H6zM5 8H4v1h1V8zm5 1h1V8h-1v1z"}}]})(props);
};
function GoLaw (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 14 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M7 4c-.83 0-1.5-.67-1.5-1.5S6.17 1 7 1s1.5.67 1.5 1.5S7.83 4 7 4zm7 6c0 1.11-.89 2-2 2h-1c-1.11 0-2-.89-2-2l2-4h-1c-.55 0-1-.45-1-1H8v8c.42 0 1 .45 1 1h1c.42 0 1 .45 1 1H3c0-.55.58-1 1-1h1c0-.55.58-1 1-1h.03L6 5H5c0 .55-.45 1-1 1H3l2 4c0 1.11-.89 2-2 2H2c-1.11 0-2-.89-2-2l2-4H1V5h3c0-.55.45-1 1-1h4c.55 0 1 .45 1 1h3v1h-1l2 4zM2.5 7L1 10h3L2.5 7zM13 10l-1.5-3-1.5 3h3z"}}]})(props);
};
function GoLightBulb (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 12 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}}]})(props);
};
function GoLinkExternal (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 12 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M11 10h1v3c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h3v1H1v10h10v-3zM6 2l2.25 2.25L5 7.5 6.5 9l3.25-3.25L12 8V2H6z"}}]})(props);
};
function GoLink (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}}]})(props);
};
function GoListOrdered (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 13 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M12.01 13c0 .59 0 1-.59 1H4.6c-.59 0-.59-.41-.59-1 0-.59 0-1 .59-1h6.81c.59 0 .59.41.59 1h.01zM4.6 4h6.81C12 4 12 3.59 12 3c0-.59 0-1-.59-1H4.6c-.59 0-.59.41-.59 1 0 .59 0 1 .59 1zm6.81 3H4.6c-.59 0-.59.41-.59 1 0 .59 0 1 .59 1h6.81C12 9 12 8.59 12 8c0-.59 0-1-.59-1zm-9.4-6h-.72c-.3.19-.58.25-1.03.34V2h.75v2.14H.17V5h2.84v-.86h-1V1zm.392 8.12c-.129 0-.592.04-.802.07.53-.56 1.14-1.25 1.14-1.89C2.72 6.52 2.18 6 1.38 6c-.59 0-.97.2-1.38.64l.58.58c.19-.19.38-.38.64-.38.28 0 .48.16.48.52 0 .53-.77 1.2-1.7 2.06V10h3v-.88h-.598zm-.222 3.79v-.03c.44-.19.64-.47.64-.86 0-.7-.56-1.11-1.44-1.11-.48 0-.89.19-1.28.52l.55.64c.25-.2.44-.31.69-.31.27 0 .42.13.42.36 0 .27-.2.44-.86.44v.75c.83 0 .98.17.98.47 0 .25-.23.38-.58.38-.28 0-.56-.14-.81-.38l-.48.66c.3.36.77.56 1.41.56.83 0 1.53-.41 1.53-1.16 0-.5-.31-.81-.77-.94v.01z"}}]})(props);
};
function GoListUnordered (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 12 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M2 13c0 .59 0 1-.59 1H.59C0 14 0 13.59 0 13c0-.59 0-1 .59-1h.81c.59 0 .59.41.59 1H2zm2.59-9h6.81c.59 0 .59-.41.59-1 0-.59 0-1-.59-1H4.59C4 2 4 2.41 4 3c0 .59 0 1 .59 1zM1.41 7H.59C0 7 0 7.41 0 8c0 .59 0 1 .59 1h.81c.59 0 .59-.41.59-1 0-.59 0-1-.59-1h.01zm0-5H.59C0 2 0 2.41 0 3c0 .59 0 1 .59 1h.81c.59 0 .59-.41.59-1 0-.59 0-1-.59-1h.01zm10 5H4.59C4 7 4 7.41 4 8c0 .59 0 1 .59 1h6.81c.59 0 .59-.41.59-1 0-.59 0-1-.59-1h.01zm0 5H4.59C4 12 4 12.41 4 13c0 .59 0 1 .59 1h6.81c.59 0 .59-.41.59-1 0-.59 0-1-.59-1h.01z"}}]})(props);
};
function GoLocation (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 12 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"}}]})(props);
};
function GoLock (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 12 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4 13H3v-1h1v1zm8-6v7c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h1V4c0-2.2 1.8-4 4-4s4 1.8 4 4v2h1c.55 0 1 .45 1 1zM3.8 6h4.41V4c0-1.22-.98-2.2-2.2-2.2-1.22 0-2.2.98-2.2 2.2v2H3.8zM11 7H2v7h9V7zM4 8H3v1h1V8zm0 2H3v1h1v-1z"}}]})(props);
};
function GoLogoGist (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 25 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4.7 8.73h2.45v4.02c-.55.27-1.64.34-2.53.34-2.56 0-3.47-2.2-3.47-5.05 0-2.85.91-5.06 3.48-5.06 1.28 0 2.06.23 3.28.73V2.66C7.27 2.33 6.25 2 4.63 2 1.13 2 0 4.69 0 8.03c0 3.34 1.11 6.03 4.63 6.03 1.64 0 2.81-.27 3.59-.64V7.73H4.7v1zm6.39 3.72V6.06h-1.05v6.28c0 1.25.58 1.72 1.72 1.72v-.89c-.48 0-.67-.16-.67-.7v-.02zm.25-8.72c0-.44-.33-.78-.78-.78s-.77.34-.77.78.33.78.77.78.78-.34.78-.78zm4.34 5.69c-1.5-.13-1.78-.48-1.78-1.17 0-.77.33-1.34 1.88-1.34 1.05 0 1.66.16 2.27.36v-.94c-.69-.3-1.52-.39-2.25-.39-2.2 0-2.92 1.2-2.92 2.31 0 1.08.47 1.88 2.73 2.08 1.55.13 1.77.63 1.77 1.34 0 .73-.44 1.42-2.06 1.42-1.11 0-1.86-.19-2.33-.36v.94c.5.2 1.58.39 2.33.39 2.38 0 3.14-1.2 3.14-2.41 0-1.28-.53-2.03-2.75-2.23h-.03zm8.58-2.47v-.86h-2.42v-2.5l-1.08.31v2.11l-1.56.44v.48h1.56v5c0 1.53 1.19 2.13 2.5 2.13.19 0 .52-.02.69-.05v-.89c-.19.03-.41.03-.61.03-.97 0-1.5-.39-1.5-1.34V6.94h2.42v.02-.01z"}}]})(props);
};
function GoLogoGithub (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 45 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M18.53 12.03h-.02c.009 0 .015.01.024.011h.006l-.01-.01zm.004.011c-.093.001-.327.05-.574.05-.78 0-1.05-.36-1.05-.83V8.13h1.59c.09 0 .16-.08.16-.19v-1.7c0-.09-.08-.17-.16-.17h-1.59V3.96c0-.08-.05-.13-.14-.13h-2.16c-.09 0-.14.05-.14.13v2.17s-1.09.27-1.16.28c-.08.02-.13.09-.13.17v1.36c0 .11.08.19.17.19h1.11v3.28c0 2.44 1.7 2.69 2.86 2.69.53 0 1.17-.17 1.27-.22.06-.02.09-.09.09-.16v-1.5a.177.177 0 0 0-.146-.18zM42.23 9.84c0-1.81-.73-2.05-1.5-1.97-.6.04-1.08.34-1.08.34v3.52s.49.34 1.22.36c1.03.03 1.36-.34 1.36-2.25zm2.43-.16c0 3.43-1.11 4.41-3.05 4.41-1.64 0-2.52-.83-2.52-.83s-.04.46-.09.52c-.03.06-.08.08-.14.08h-1.48c-.1 0-.19-.08-.19-.17l.02-11.11c0-.09.08-.17.17-.17h2.13c.09 0 .17.08.17.17v3.77s.82-.53 2.02-.53l-.01-.02c1.2 0 2.97.45 2.97 3.88zm-8.72-3.61h-2.1c-.11 0-.17.08-.17.19v5.44s-.55.39-1.3.39-.97-.34-.97-1.09V6.25c0-.09-.08-.17-.17-.17h-2.14c-.09 0-.17.08-.17.17v5.11c0 2.2 1.23 2.75 2.92 2.75 1.39 0 2.52-.77 2.52-.77s.05.39.08.45c.02.05.09.09.16.09h1.34c.11 0 .17-.08.17-.17l.02-7.47c0-.09-.08-.17-.19-.17zm-23.7-.01h-2.13c-.09 0-.17.09-.17.2v7.34c0 .2.13.27.3.27h1.92c.2 0 .25-.09.25-.27V6.23c0-.09-.08-.17-.17-.17zm-1.05-3.38c-.77 0-1.38.61-1.38 1.38 0 .77.61 1.38 1.38 1.38.75 0 1.36-.61 1.36-1.38 0-.77-.61-1.38-1.36-1.38zm16.49-.25h-2.11c-.09 0-.17.08-.17.17v4.09h-3.31V2.6c0-.09-.08-.17-.17-.17h-2.13c-.09 0-.17.08-.17.17v11.11c0 .09.09.17.17.17h2.13c.09 0 .17-.08.17-.17V8.96h3.31l-.02 4.75c0 .09.08.17.17.17h2.13c.09 0 .17-.08.17-.17V2.6c0-.09-.08-.17-.17-.17zM8.81 7.35v5.74c0 .04-.01.11-.06.13 0 0-1.25.89-3.31.89-2.49 0-5.44-.78-5.44-5.92S2.58 1.99 5.1 2c2.18 0 3.06.49 3.2.58.04.05.06.09.06.14L7.94 4.5c0 .09-.09.2-.2.17-.36-.11-.9-.33-2.17-.33-1.47 0-3.05.42-3.05 3.73s1.5 3.7 2.58 3.7c.92 0 1.25-.11 1.25-.11v-2.3H4.88c-.11 0-.19-.08-.19-.17V7.35c0-.09.08-.17.19-.17h3.74c.11 0 .19.08.19.17z"}}]})(props);
};
function GoMailRead (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 14 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6 5H4V4h2v1zm3 1H4v1h5V6zm5-.48V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V5.52c0-.33.16-.63.42-.81L2 3.58V3c0-.55.45-1 1-1h1.2L7 0l2.8 2H11c.55 0 1 .45 1 1v.58l1.58 1.13c.27.19.42.48.42.81zM3 7.5L7 10l4-2.5V3H3v4.5zm-2 6l4.5-3-4.5-3v6zm11 .5l-5-3-5 3h10zm1-6.5l-4.5 3 4.5 3v-6z"}}]})(props);
};
function GoMail (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 14 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M0 4v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1zm13 0L7 9 1 4h12zM1 5.5l4 3-4 3v-6zM2 12l3.5-3L7 10.5 8.5 9l3.5 3H2zm11-.5l-4-3 4-3v6z"}}]})(props);
};
function GoMarkGithub (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"}}]})(props);
};
function GoMarkdown (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M14.85 3H1.15C.52 3 0 3.52 0 4.15v7.69C0 12.48.52 13 1.15 13h13.69c.64 0 1.15-.52 1.15-1.15v-7.7C16 3.52 15.48 3 14.85 3zM9 11H7V8L5.5 9.92 4 8v3H2V5h2l1.5 2L7 5h2v6zm2.99.5L9.5 8H11V5h2v3h1.5l-2.51 3.5z"}}]})(props);
};
function GoMegaphone (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 1c-.17 0-.36.05-.52.14C8.04 2.02 4.5 4.58 3 5c-1.38 0-3 .67-3 2.5S1.63 10 3 10c.3.08.64.23 1 .41V15h2v-3.45c1.34.86 2.69 1.83 3.48 2.31.16.09.34.14.52.14.52 0 1-.42 1-1V2c0-.58-.48-1-1-1zm0 12c-.38-.23-.89-.58-1.5-1-.16-.11-.33-.22-.5-.34V3.31c.16-.11.31-.2.47-.31.61-.41 1.16-.77 1.53-1v11zm2-6h4v1h-4V7zm0 2l4 2v1l-4-2V9zm4-6v1l-4 2V5l4-2z"}}]})(props);
};
function GoMention (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 14 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6.58 15c1.25 0 2.52-.31 3.56-.94l-.42-.94c-.84.52-1.89.83-3.03.83-3.23 0-5.64-2.08-5.64-5.72 0-4.37 3.23-7.18 6.58-7.18 3.45 0 5.22 2.19 5.22 5.2 0 2.39-1.34 3.86-2.5 3.86-1.05 0-1.36-.73-1.05-2.19l.73-3.75H8.98l-.11.72c-.41-.63-.94-.83-1.56-.83-2.19 0-3.66 2.39-3.66 4.38 0 1.67.94 2.61 2.3 2.61.84 0 1.67-.53 2.3-1.25.11.94.94 1.45 1.98 1.45 1.67 0 3.77-1.67 3.77-5C14 2.61 11.59 0 7.83 0 3.66 0 0 3.33 0 8.33 0 12.71 2.92 15 6.58 15zm-.31-5c-.73 0-1.36-.52-1.36-1.67 0-1.45.94-3.22 2.41-3.22.52 0 .84.2 1.25.83l-.52 3.02c-.63.73-1.25 1.05-1.78 1.05V10z"}}]})(props);
};
function GoMilestone (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 14 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M8 2H6V0h2v2zm4 5H2c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h10l2 2-2 2zM8 4H6v2h2V4zM6 16h2V8H6v8z"}}]})(props);
};
function GoMirror (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M15.5 4.7L8.5 0l-7 4.7c-.3.19-.5.45-.5.8V16l7.5-4 7.5 4V5.5c0-.34-.2-.61-.5-.8zm-.5 9.8l-6-3.25V10H8v1.25L2 14.5v-9l6-4V6h1V1.5l6 4v9zM6 7h5V5l3 3-3 3V9H6v2L3 8l3-3v2z"}}]})(props);
};
function GoMortarBoard (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M8.11 2.8a.34.34 0 0 0-.2 0L.27 5.18a.35.35 0 0 0 0 .67L2 6.4v1.77c-.3.17-.5.5-.5.86 0 .19.05.36.14.5-.08.14-.14.31-.14.5v2.58c0 .55 2 .55 2 0v-2.58c0-.19-.05-.36-.14-.5.08-.14.14-.31.14-.5 0-.38-.2-.69-.5-.86V6.72l4.89 1.53c.06.02.14.02.2 0l7.64-2.38a.35.35 0 0 0 0-.67L8.1 2.81l.01-.01zM4 8l3.83 1.19h-.02c.13.03.25.03.36 0L12 8v2.5c0 1-1.8 1.5-4 1.5s-4-.5-4-1.5V8zm3.02-2.5c0 .28.45.5 1 .5s1-.22 1-.5-.45-.5-1-.5-1 .22-1 .5z"}}]})(props);
};
function GoMute (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M8 2.81v10.38c0 .67-.81 1-1.28.53L3 10H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h2l3.72-3.72C7.19 1.81 8 2.14 8 2.81zm7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06L11.44 8 9.47 9.97l1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06L13.56 8l1.97-1.97z"}}]})(props);
};
function GoNoNewline (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M16 5v3c0 .55-.45 1-1 1h-3v2L9 8l3-3v2h2V5h2zM8 8c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4zM1.5 9.66L5.66 5.5C5.18 5.19 4.61 5 4 5 2.34 5 1 6.34 1 8c0 .61.19 1.17.5 1.66zM7 8c0-.61-.19-1.17-.5-1.66L2.34 10.5c.48.31 1.05.5 1.66.5 1.66 0 3-1.34 3-3z"}}]})(props);
};
function GoNote (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 14 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 10h4V9H3v1zm0-2h6V7H3v1zm0-2h8V5H3v1zm10 6H1V3h12v9zM1 2c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1H1z"}}]})(props);
};
function GoOctoface (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M14.7 5.34c.13-.32.55-1.59-.13-3.31 0 0-1.05-.33-3.44 1.3-1-.28-2.07-.32-3.13-.32s-2.13.04-3.13.32c-2.39-1.64-3.44-1.3-3.44-1.3-.68 1.72-.26 2.99-.13 3.31C.49 6.21 0 7.33 0 8.69 0 13.84 3.33 15 7.98 15S16 13.84 16 8.69c0-1.36-.49-2.48-1.3-3.35zM8 14.02c-3.3 0-5.98-.15-5.98-3.35 0-.76.38-1.48 1.02-2.07 1.07-.98 2.9-.46 4.96-.46 2.07 0 3.88-.52 4.96.46.65.59 1.02 1.3 1.02 2.07 0 3.19-2.68 3.35-5.98 3.35zM5.49 9.01c-.66 0-1.2.8-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.54-1.78-1.2-1.78zm5.02 0c-.66 0-1.2.79-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.53-1.78-1.2-1.78z"}}]})(props);
};
function GoOrganization (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M16 12.999c0 .439-.45 1-1 1H7.995c-.539 0-.994-.447-.995-.999H1c-.54 0-1-.561-1-1 0-2.634 3-4 3-4s.229-.409 0-1c-.841-.621-1.058-.59-1-3 .058-2.419 1.367-3 2.5-3s2.442.58 2.5 3c.058 2.41-.159 2.379-1 3-.229.59 0 1 0 1s1.549.711 2.42 2.088C9.196 9.369 10 8.999 10 8.999s.229-.409 0-1c-.841-.62-1.058-.59-1-3 .058-2.419 1.367-3 2.5-3s2.437.581 2.495 3c.059 2.41-.158 2.38-1 3-.229.59 0 1 0 1s3.005 1.366 3.005 4z"}}]})(props);
};
function GoPackage (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M1 4.27v7.47c0 .45.3.84.75.97l6.5 1.73c.16.05.34.05.5 0l6.5-1.73c.45-.13.75-.52.75-.97V4.27c0-.45-.3-.84-.75-.97l-6.5-1.74a1.4 1.4 0 0 0-.5 0L1.75 3.3c-.45.13-.75.52-.75.97zm7 9.09l-6-1.59V5l6 1.61v6.75zM2 4l2.5-.67L11 5.06l-2.5.67L2 4zm13 7.77l-6 1.59V6.61l2-.55V8.5l2-.53V5.53L15 5v6.77zm-2-7.24L6.5 2.8l2-.53L15 4l-2 .53z"}}]})(props);
};
function GoPaintcan (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 12 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6 0C2.69 0 0 2.69 0 6v1c0 .55.45 1 1 1v5c0 1.1 2.24 2 5 2s5-.9 5-2V8c.55 0 1-.45 1-1V6c0-3.31-2.69-6-6-6zm3 10v.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5V10c0-.28-.22-.5-.5-.5s-.5.22-.5.5v2.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-2c0-.28-.22-.5-.5-.5s-.5.22-.5.5v.5c0 .55-.45 1-1 1s-1-.45-1-1v-1c-.55 0-1-.45-1-1V7.2c.91.49 2.36.8 4 .8 1.64 0 3.09-.31 4-.8V9c0 .55-.45 1-1 1zM6 7c-1.68 0-3.12-.41-3.71-1C2.88 5.41 4.32 5 6 5c1.68 0 3.12.41 3.71 1-.59.59-2.03 1-3.71 1zm0-3c-2.76 0-5 .89-5 2 0-2.76 2.24-5 5-5s5 2.24 5 5c0-1.1-2.24-2-5-2z"}}]})(props);
};
function GoPencil (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 14 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"}}]})(props);
};
function GoPerson (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 12 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M12 14.002a.998.998 0 0 1-.998.998H1.001A1 1 0 0 1 0 13.999V13c0-2.633 4-4 4-4s.229-.409 0-1c-.841-.62-.944-1.59-1-4 .173-2.413 1.867-3 3-3s2.827.586 3 3c-.056 2.41-.159 3.38-1 4-.229.59 0 1 0 1s4 1.367 4 4v1.002z"}}]})(props);
};
function GoPin (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 1.2V2l.5 1L6 6H2.2c-.44 0-.67.53-.34.86L5 10l-4 5 5-4 3.14 3.14a.5.5 0 0 0 .86-.34V10l3-4.5 1 .5h.8c.44 0 .67-.53.34-.86L10.86.86a.5.5 0 0 0-.86.34z"}}]})(props);
};
function GoPlay (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 14 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M14 8A7 7 0 1 1 0 8a7 7 0 0 1 14 0zm-8.223 3.482l4.599-3.066a.5.5 0 0 0 0-.832L5.777 4.518A.5.5 0 0 0 5 4.934v6.132a.5.5 0 0 0 .777.416z"}}]})(props);
};
function GoPlug (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 14 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M14 6V5h-4V3H8v1H6c-1.03 0-1.77.81-2 2L3 7c-1.66 0-3 1.34-3 3v2h1v-2c0-1.11.89-2 2-2l1 1c.25 1.16.98 2 2 2h2v1h2v-2h4V9h-4V6h4z"}}]})(props);
};
function GoPlusSmall (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 7 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4 4H3v3H0v1h3v3h1V8h3V7H4V4z"}}]})(props);
};
function GoPlus (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 12 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M12 9H7v5H5V9H0V7h5V2h2v5h5v2z"}}]})(props);
};
function GoPrimitiveDot (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 8 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z"}}]})(props);
};
function GoPrimitiveSquare (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 8 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M8 12H0V4h8v8z"}}]})(props);
};
function GoProject (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 15 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"}}]})(props);
};
function GoPulse (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 14 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M11.5 8L8.8 5.4 6.6 8.5 5.5 1.6 2.38 8H0v2h3.6l.9-1.8.9 5.4L9 8.5l1.6 1.5H14V8h-2.5z"}}]})(props);
};
function GoQuestion (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 14 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6 10h2v2H6v-2zm4-3.5C10 8.64 8 9 8 9H6c0-.55.45-1 1-1h.5c.28 0 .5-.22.5-.5v-1c0-.28-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5V7H4c0-1.5 1.5-3 3-3s3 1 3 2.5zM7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7z"}}]})(props);
};
function GoQuote (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 14 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6.16 3.5C3.73 5.06 2.55 6.67 2.55 9.36c.16-.05.3-.05.44-.05 1.27 0 2.5.86 2.5 2.41 0 1.61-1.03 2.61-2.5 2.61-1.9 0-2.99-1.52-2.99-4.25 0-3.8 1.75-6.53 5.02-8.42L6.16 3.5zm7 0c-2.43 1.56-3.61 3.17-3.61 5.86.16-.05.3-.05.44-.05 1.27 0 2.5.86 2.5 2.41 0 1.61-1.03 2.61-2.5 2.61-1.89 0-2.98-1.52-2.98-4.25 0-3.8 1.75-6.53 5.02-8.42l1.14 1.84h-.01z"}}]})(props);
};
function GoRadioTower (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4.79 6.11c.25-.25.25-.67 0-.92-.32-.33-.48-.76-.48-1.19 0-.43.16-.86.48-1.19.25-.26.25-.67 0-.92a.613.613 0 0 0-.45-.19c-.16 0-.33.06-.45.19-.57.58-.85 1.35-.85 2.11 0 .76.29 1.53.85 2.11.25.25.66.25.9 0zM2.33.52a.651.651 0 0 0-.92 0C.48 1.48.01 2.74.01 3.99c0 1.26.47 2.52 1.4 3.48.25.26.66.26.91 0s.25-.68 0-.94c-.68-.7-1.02-1.62-1.02-2.54 0-.92.34-1.84 1.02-2.54a.66.66 0 0 0 .01-.93zm5.69 5.1A1.62 1.62 0 1 0 6.4 4c-.01.89.72 1.62 1.62 1.62zM14.59.53a.628.628 0 0 0-.91 0c-.25.26-.25.68 0 .94.68.7 1.02 1.62 1.02 2.54 0 .92-.34 1.83-1.02 2.54-.25.26-.25.68 0 .94a.651.651 0 0 0 .92 0c.93-.96 1.4-2.22 1.4-3.48A5.048 5.048 0 0 0 14.59.53zM8.02 6.92c-.41 0-.83-.1-1.2-.3l-3.15 8.37h1.49l.86-1h4l.84 1h1.49L9.21 6.62c-.38.2-.78.3-1.19.3zm-.01.48L9.02 11h-2l.99-3.6zm-1.99 5.59l1-1h2l1 1h-4zm5.19-11.1c-.25.25-.25.67 0 .92.32.33.48.76.48 1.19 0 .43-.16.86-.48 1.19-.25.26-.25.67 0 .92a.63.63 0 0 0 .9 0c.57-.58.85-1.35.85-2.11 0-.76-.28-1.53-.85-2.11a.634.634 0 0 0-.9 0z"}}]})(props);
};
function GoReply (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 14 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6 3.5c3.92.44 8 3.125 8 10-2.312-5.062-4.75-6-8-6V11L.5 5.5 6 0v3.5z"}}]})(props);
};
function GoRepoClone (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M15 0H9v7c0 .55.45 1 1 1h1v1h1V8h3c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-4 7h-1V6h1v1zm4 0h-3V6h3v1zm0-2h-4V1h4v4zM4 5H3V4h1v1zm0-2H3V2h1v1zM2 1h6V0H1C.45 0 0 .45 0 1v12c0 .55.45 1 1 1h2v2l1.5-1.5L6 16v-2h5c.55 0 1-.45 1-1v-3H2V1zm9 10v2H6v-1H3v1H1v-2h10zM3 8h1v1H3V8zm1-1H3V6h1v1z"}}]})(props);
};
function GoRepoForcePush (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 12 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 9H8v7H6V9H4l2.25-3H4l3-4 3 4H7.75L10 9zm1-9H1C.45 0 0 .45 0 1v12c0 .55.45 1 1 1h4v-1H1v-2h4v-1H2V1h9v9H9v1h2v2H9v1h2c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1z"}}]})(props);
};
function GoRepoForked (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 10 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"}}]})(props);
};
function GoRepoPull (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M13 8V6H7V4h6V2l3 3-3 3zM4 2H3v1h1V2zm7 5h1v6c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v2h-1V1H2v9h9V7zm0 4H1v2h2v-1h3v1h5v-2zM4 6H3v1h1V6zm0-2H3v1h1V4zM3 9h1V8H3v1z"}}]})(props);
};
function GoRepoPush (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 12 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4 3H3V2h1v1zM3 5h1V4H3v1zm4 0L4 9h2v7h2V9h2L7 5zm4-5H1C.45 0 0 .45 0 1v12c0 .55.45 1 1 1h4v-1H1v-2h4v-1H2V1h9.02L11 10H9v1h2v2H9v1h2c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1z"}}]})(props);
};
function GoRepo (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 12 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"}}]})(props);
};
function GoReport (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H7l-4 4v-4H1a1 1 0 0 1-1-1V2zm1 0h14v9H6.5L4 13.5V11H1V2zm6 6h2v2H7V8zm0-5h2v4H7V3z"}}]})(props);
};
function GoRequestChanges (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H7.5L4 15.5V12H1a1 1 0 0 1-1-1V1zm1 0v10h4v2l2-2h8V1H1zm7.5 3h2v1h-2v2h-1V5h-2V4h2V2h1v2zm2 5h-5V8h5v1z"}}]})(props);
};
function GoRocket (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M12.17 3.83c-.27-.27-.47-.55-.63-.88-.16-.31-.27-.66-.34-1.02-.58.33-1.16.7-1.73 1.13-.58.44-1.14.94-1.69 1.48-.7.7-1.33 1.81-1.78 2.45H3L0 10h3l2-2c-.34.77-1.02 2.98-1 3l1 1c.02.02 2.23-.64 3-1l-2 2v3l3-3v-3c.64-.45 1.75-1.09 2.45-1.78.55-.55 1.05-1.13 1.47-1.7.44-.58.81-1.16 1.14-1.72-.36-.08-.7-.19-1.03-.34a3.39 3.39 0 0 1-.86-.63zM16 0s-.09.38-.3 1.06c-.2.7-.55 1.58-1.06 2.66-.7-.08-1.27-.33-1.66-.72-.39-.39-.63-.94-.7-1.64C13.36.84 14.23.48 14.92.28 15.62.08 16 0 16 0z"}}]})(props);
};
function GoRss (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 10 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M2 13H0v-2c1.11 0 2 .89 2 2zM0 3v1a9 9 0 0 1 9 9h1C10 7.48 5.52 3 0 3zm0 4v1c2.75 0 5 2.25 5 5h1c0-3.31-2.69-6-6-6z"}}]})(props);
};
function GoRuby (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M13 6l-5 5V4h3l2 2zm3 0l-8 8-8-8 4-4h8l4 4zm-8 6.5L14.5 6l-3-3h-7l-3 3L8 12.5z"}}]})(props);
};
function GoScreenFull (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 14 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M13 10h1v3c0 .547-.453 1-1 1h-3v-1h3v-3zM1 10H0v3c0 .547.453 1 1 1h3v-1H1v-3zm0-7h3V2H1c-.547 0-1 .453-1 1v3h1V3zm1 1h10v8H2V4zm2 6h6V6H4v4zm6-8v1h3v3h1V3c0-.547-.453-1-1-1h-3z"}}]})(props);
};
function GoScreenNormal (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 14 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M2 4H0V3h2V1h1v2c0 .547-.453 1-1 1zm0 8H0v1h2v2h1v-2c0-.547-.453-1-1-1zm9-2c0 .547-.453 1-1 1H4c-.547 0-1-.453-1-1V6c0-.547.453-1 1-1h6c.547 0 1 .453 1 1v4zM9 7H5v2h4V7zm2 6v2h1v-2h2v-1h-2c-.547 0-1 .453-1 1zm1-10V1h-1v2c0 .547.453 1 1 1h2V3h-2z"}}]})(props);
};
function GoSearch (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"}}]})(props);
};
function GoServer (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 12 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M11 6H1c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1zM2 9H1V7h1v2zm2 0H3V7h1v2zm2 0H5V7h1v2zm2 0H7V7h1v2zm3-8H1c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zM2 4H1V2h1v2zm2 0H3V2h1v2zm2 0H5V2h1v2zm2 0H7V2h1v2zm3-1h-1V2h1v1zm0 8H1c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1zm-9 3H1v-2h1v2zm2 0H3v-2h1v2zm2 0H5v-2h1v2zm2 0H7v-2h1v2z"}}]})(props);
};
function GoSettings (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4 7H3V2h1v5zm-1 7h1v-3H3v3zm5 0h1V8H8v6zm5 0h1v-2h-1v2zm1-12h-1v6h1V2zM9 2H8v2h1V2zM5 8H2c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1zm5-3H7c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1zm5 4h-3c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1z"}}]})(props);
};
function GoShield (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 14 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M7 0L0 2v6.02C0 12.69 5.31 16 7 16c1.69 0 7-3.31 7-7.98V2L7 0zM5 11l1.14-2.8a.568.568 0 0 0-.25-.59C5.33 7.25 5 6.66 5 6c0-1.09.89-2 1.98-2C8.06 4 9 4.91 9 6c0 .66-.33 1.25-.89 1.61-.19.13-.3.36-.25.59L9 11H5z"}}]})(props);
};
function GoSignIn (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 14 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M7 6.75V12h4V8h1v4c0 .55-.45 1-1 1H7v3l-5.45-2.72c-.33-.17-.55-.52-.55-.91V1c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v3h-1V1H3l4 2v2.25L10 3v2h4v2h-4v2L7 6.75z"}}]})(props);
};
function GoSignOut (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 16 17"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M12 9V7H8V5h4V3l4 3-4 3zm-2 3H6V3L2 1h8v3h1V1c0-.55-.45-1-1-1H1C.45 0 0 .45 0 1v11.38c0 .39.22.73.55.91L6 16.01V13h4c.55 0 1-.45 1-1V8h-1v4z"}}]})(props);
};
function GoSmiley (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm4.81 12.81a6.72 6.72 0 0 1-2.17 1.45c-.83.36-1.72.53-2.64.53-.92 0-1.81-.17-2.64-.53-.81-.34-1.55-.83-2.17-1.45a6.773 6.773 0 0 1-1.45-2.17A6.59 6.59 0 0 1 1.21 8c0-.92.17-1.81.53-2.64.34-.81.83-1.55 1.45-2.17.62-.62 1.36-1.11 2.17-1.45A6.59 6.59 0 0 1 8 1.21c.92 0 1.81.17 2.64.53.81.34 1.55.83 2.17 1.45.62.62 1.11 1.36 1.45 2.17.36.83.53 1.72.53 2.64 0 .92-.17 1.81-.53 2.64-.34.81-.83 1.55-1.45 2.17zM4 6.8v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2H5.2C4.53 8 4 7.47 4 6.8zm5 0v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2h-.59C9.53 8 9 7.47 9 6.8zm4 3.2c-.72 1.88-2.91 3-5 3s-4.28-1.13-5-3c-.14-.39.23-1 .66-1h8.59c.41 0 .89.61.75 1z"}}]})(props);
};
function GoSquirrel (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M12 1C9.79 1 8 2.31 8 3.92c0 1.94.5 3.03 0 6.08 0-4.5-2.77-6.34-4-6.34.05-.5-.48-.66-.48-.66s-.22.11-.3.34c-.27-.31-.56-.27-.56-.27l-.13.58S.7 4.29.68 6.87c.2.33 1.53.6 2.47.43.89.05.67.79.47.99C2.78 9.13 2 8 1 8S0 9 1 9s1 1 3 1c-3.09 1.2 0 4 0 4H3c-1 0-1 1-1 1h6c3 0 5-1 5-3.47 0-.85-.43-1.79-1-2.53-1.11-1.46.23-2.68 1-2 .77.68 3 1 3-2 0-2.21-1.79-4-4-4zM2.5 6c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5z"}}]})(props);
};
function GoStar (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 14 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"}}]})(props);
};
function GoStop (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 14 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 1H4L0 5v6l4 4h6l4-4V5l-4-4zm3 9.5L9.5 14h-5L1 10.5v-5L4.5 2h5L13 5.5v5zM6 4h2v5H6V4zm0 6h2v2H6v-2z"}}]})(props);
};
function GoSync (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 12 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10.24 7.4a4.15 4.15 0 0 1-1.2 3.6 4.346 4.346 0 0 1-5.41.54L4.8 10.4.5 9.8l.6 4.2 1.31-1.26c2.36 1.74 5.7 1.57 7.84-.54a5.876 5.876 0 0 0 1.74-4.46l-1.75-.34zM2.96 5a4.346 4.346 0 0 1 5.41-.54L7.2 5.6l4.3.6-.6-4.2-1.31 1.26c-2.36-1.74-5.7-1.57-7.85.54C.5 5.03-.06 6.65.01 8.26l1.75.35A4.17 4.17 0 0 1 2.96 5z"}}]})(props);
};
function GoTag (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 15 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M7.73 1.73C7.26 1.26 6.62 1 5.96 1H3.5C2.13 1 1 2.13 1 3.5v2.47c0 .66.27 1.3.73 1.77l6.06 6.06c.39.39 1.02.39 1.41 0l4.59-4.59a.996.996 0 0 0 0-1.41L7.73 1.73zM2.38 7.09c-.31-.3-.47-.7-.47-1.13V3.5c0-.88.72-1.59 1.59-1.59h2.47c.42 0 .83.16 1.13.47l6.14 6.13-4.73 4.73-6.13-6.15zM3.01 3h2v2H3V3h.01z"}}]})(props);
};
function GoTasklist (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M15.41 9H7.59C7 9 7 8.59 7 8c0-.59 0-1 .59-1h7.81c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM9.59 4C9 4 9 3.59 9 3c0-.59 0-1 .59-1h5.81c.59 0 .59.41.59 1 0 .59 0 1-.59 1H9.59zM0 3.91l1.41-1.3L3 4.2 7.09 0 8.5 1.41 3 6.91l-3-3zM7.59 12h7.81c.59 0 .59.41.59 1 0 .59 0 1-.59 1H7.59C7 14 7 13.59 7 13c0-.59 0-1 .59-1z"}}]})(props);
};
function GoTelescope (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 14 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M8 9l3 6h-1l-2-4v5H7v-6l-2 5H4l2-5 2-1zM7 0H6v1h1V0zM5 3H4v1h1V3zM2 1H1v1h1V1zM.63 9a.52.52 0 0 0-.16.67l.55.92c.13.23.41.31.64.2l1.39-.66-1.16-2-1.27.86.01.01zm7.89-5.39l-5.8 3.95L3.95 9.7l6.33-3.03-1.77-3.06h.01zm4.22 1.28l-1.47-2.52a.51.51 0 0 0-.72-.17l-1.2.83 1.84 3.2 1.33-.64c.27-.13.36-.44.22-.7z"}}]})(props);
};
function GoTerminal (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 14 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M7 10h4v1H7v-1zm-3 1l3-3-3-3-.75.75L5.5 8l-2.25 2.25L4 11zm10-8v10c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h12c.55 0 1 .45 1 1zm-1 0H1v10h12V3z"}}]})(props);
};
function GoTextSize (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 18 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M13.62 9.08L12.1 3.66h-.06l-1.5 5.42h3.08zM5.7 10.13S4.68 6.52 4.53 6.02h-.08l-1.13 4.11H5.7zM17.31 14h-2.25l-.95-3.25h-4.07L9.09 14H6.84l-.69-2.33H2.87L2.17 14H0l3.3-9.59h2.5l2.17 6.34L10.86 2h2.52l3.94 12h-.01z"}}]})(props);
};
function GoThreeBars (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 12 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"}}]})(props);
};
function GoThumbsdown (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M15.98 7.83l-.97-5.95C14.84.5 13.13 0 12 0H5.69c-.2 0-.38.05-.53.14L3.72 1H2C.94 1 0 1.94 0 3v4c0 1.06.94 2.02 2 2h2c.91 0 1.39.45 2.39 1.55.91 1 .88 1.8.63 3.27-.08.5.06 1 .42 1.42.39.47.98.76 1.56.76 1.83 0 3-3.71 3-5.01l-.02-.98h2.04c1.16 0 1.95-.8 1.98-1.97 0-.11-.02-.21-.02-.21zm-1.97 1.19h-1.99c-.7 0-1.03.28-1.03.97l.03 1.03c0 1.27-1.17 4-2 4-.5 0-1.08-.5-1-1 .25-1.58.34-2.78-.89-4.14C6.11 8.75 5.36 8 4 8V2l1.67-1H12c.73 0 1.95.31 2 1l.02.02 1 6c-.03.64-.38 1-1 1h-.01z"}}]})(props);
};
function GoThumbsup (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M15.98 8.17l-.97 5.95C14.84 15.5 13.13 16 12 16H5.69c-.2 0-.38-.05-.53-.14L3.72 15H2c-1.06 0-2-.94-2-2V9c0-1.06.94-2.02 2-2h2c.91 0 1.39-.45 2.39-1.55.91-1 .88-1.8.63-3.27-.08-.5.06-1 .42-1.42C7.83.29 8.42 0 9 0c1.83 0 3 3.71 3 5.01l-.02.98h2.04c1.16 0 1.95.8 1.98 1.97 0 .11-.02.21-.02.21zm-1.97-1.19h-1.99c-.7 0-1.03-.28-1.03-.97l.03-1.03c0-1.27-1.17-4-2-4-.5 0-1.08.5-1 1 .25 1.58.34 2.78-.89 4.14C6.11 7.25 5.36 8 4 8v6l1.67 1H12c.73 0 1.95-.31 2-1l.02-.02 1-6c-.03-.64-.38-1-1-1h-.01z"}}]})(props);
};
function GoTools (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4.48 7.27c.26.26 1.28 1.33 1.28 1.33l.56-.58-.88-.91 1.69-1.8s-.76-.74-.43-.45c.32-1.19.03-2.51-.87-3.44C4.93.5 3.66.2 2.52.51l1.93 2-.51 1.96-1.89.52-1.93-2C-.19 4.17.1 5.48 1 6.4c.94.98 2.29 1.26 3.48.87zm6.44 1.94l-2.33 2.3 3.84 3.98c.31.33.73.49 1.14.49.41 0 .82-.16 1.14-.49.63-.65.63-1.7 0-2.35l-3.79-3.93zM16 2.53L13.55 0 6.33 7.46l.88.91-4.31 4.46-.99.53-1.39 2.27.35.37 2.2-1.44.51-1.02L7.9 9.08l.88.91L16 2.53z"}}]})(props);
};
function GoTrashcan (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 12 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"}}]})(props);
};
function GoTriangleDown (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 12 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M0 5l6 6 6-6H0z"}}]})(props);
};
function GoTriangleLeft (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 6 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6 2L0 8l6 6V2z"}}]})(props);
};
function GoTriangleRight (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 6 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M0 14l6-6-6-6v12z"}}]})(props);
};
function GoTriangleUp (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 12 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M12 11L6 5l-6 6h12z"}}]})(props);
};
function GoUnfold (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 14 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"}}]})(props);
};
function GoUnmute (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M12 8.02c0 1.09-.45 2.09-1.17 2.83l-.67-.67c.55-.56.89-1.31.89-2.16 0-.85-.34-1.61-.89-2.16l.67-.67A3.99 3.99 0 0 1 12 8.02zM7.72 2.28L4 6H2c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h2l3.72 3.72c.47.47 1.28.14 1.28-.53V2.81c0-.67-.81-1-1.28-.53zm5.94.08l-.67.67a6.996 6.996 0 0 1 2.06 4.98c0 1.94-.78 3.7-2.06 4.98l.67.67A7.973 7.973 0 0 0 16 8c0-2.22-.89-4.22-2.34-5.66v.02zm-1.41 1.41l-.69.67a5.05 5.05 0 0 1 1.48 3.58c0 1.39-.56 2.66-1.48 3.56l.69.67A5.971 5.971 0 0 0 14 8.02c0-1.65-.67-3.16-1.75-4.25z"}}]})(props);
};
function GoUnverified (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M15.67 7.066l-1.08-1.34a1.5 1.5 0 0 1-.309-.77l-.19-1.698a1.51 1.51 0 0 0-1.329-1.33l-1.699-.19c-.3-.03-.56-.159-.78-.329L8.945.33a1.504 1.504 0 0 0-1.878 0l-1.34 1.08a1.5 1.5 0 0 1-.77.31l-1.698.19c-.7.08-1.25.63-1.33 1.329l-.19 1.699c-.03.3-.159.56-.329.78L.33 7.055a1.504 1.504 0 0 0 0 1.878l1.08 1.34c.17.22.28.48.31.77l.19 1.698c.08.7.63 1.25 1.329 1.33l1.699.19c.3.03.56.159.78.329l1.339 1.08c.55.439 1.329.439 1.878 0l1.34-1.08c.22-.17.48-.28.77-.31l1.698-.19c.7-.08 1.25-.63 1.33-1.329l.19-1.699c.03-.3.159-.56.329-.78l1.08-1.339a1.504 1.504 0 0 0 0-1.878zM9 11.5c0 .28-.22.5-.5.5h-1c-.27 0-.5-.22-.5-.5v-1c0-.28.23-.5.5-.5h1c.28 0 .5.22.5.5v1zm1.56-4.89c-.06.17-.17.33-.3.47-.13.16-.14.19-.33.38-.16.17-.31.3-.52.45-.11.09-.2.19-.28.27-.08.08-.14.17-.19.27-.05.1-.08.19-.11.3-.03.11-.03.13-.03.25H7.13c0-.22 0-.31.03-.48.03-.19.08-.36.14-.52.06-.14.14-.28.25-.42.11-.13.23-.25.41-.38.27-.19.36-.3.48-.52.12-.22.2-.38.2-.59 0-.27-.06-.45-.2-.58-.13-.13-.31-.19-.58-.19-.09 0-.19.02-.3.05-.11.03-.17.09-.25.16-.08.07-.14.11-.2.2a.41.41 0 0 0-.09.28h-2c0-.38.13-.56.27-.83.16-.27.36-.5.61-.67.25-.17.55-.3.88-.38.33-.08.7-.13 1.09-.13.44 0 .83.05 1.17.13.34.09.63.22.88.39.23.17.41.38.55.63.13.25.19.55.19.88 0 .22 0 .42-.08.59l-.02-.01z"}}]})(props);
};
function GoVerified (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M15.67 7.066l-1.08-1.34a1.5 1.5 0 0 1-.309-.77l-.19-1.698a1.51 1.51 0 0 0-1.329-1.33l-1.699-.19c-.3-.03-.56-.159-.78-.329L8.945.33a1.504 1.504 0 0 0-1.878 0l-1.34 1.08a1.5 1.5 0 0 1-.77.31l-1.698.19c-.7.08-1.25.63-1.33 1.329l-.19 1.699c-.03.3-.159.56-.329.78L.33 7.055a1.504 1.504 0 0 0 0 1.878l1.08 1.34c.17.22.28.48.31.77l.19 1.698c.08.7.63 1.25 1.329 1.33l1.699.19c.3.03.56.159.78.329l1.339 1.08c.55.439 1.329.439 1.878 0l1.34-1.08c.22-.17.48-.28.77-.31l1.698-.19c.7-.08 1.25-.63 1.33-1.329l.19-1.699c.03-.3.159-.56.329-.78l1.08-1.339a1.504 1.504 0 0 0 0-1.878zM6.5 12.01L3 8.51l1.5-1.5 2 2 5-5L13 5.56l-6.5 6.45z"}}]})(props);
};
function GoVersions (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 14 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"}}]})(props);
};
function GoWatch (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 12 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6 8h2v1H5V5h1v3zm6 0c0 2.22-1.2 4.16-3 5.19V15c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1v-1.81C1.2 12.16 0 10.22 0 8s1.2-4.16 3-5.19V1c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v1.81c1.8 1.03 3 2.97 3 5.19zm-1 0c0-2.77-2.23-5-5-5S1 5.23 1 8s2.23 5 5 5 5-2.23 5-5z"}}]})(props);
};
function GoX (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 12 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"}}]})(props);
};
function GoZap (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 10 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 7H6l3-7-9 9h4l-3 7 9-9z"}}]})(props);
};


/***/ }),

/***/ "./node_modules/react-icons/lib/cjs/iconBase.js":
/*!******************************************************!*\
  !*** ./node_modules/react-icons/lib/cjs/iconBase.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IconBase = exports.GenIcon = void 0;
var React = __webpack_require__(/*! react */ "react");
var iconContext_1 = __webpack_require__(/*! ./iconContext */ "./node_modules/react-icons/lib/cjs/iconContext.js");
function Tree2Element(tree) {
    return tree && tree.map(function (node, i) { return React.createElement(node.tag, __assign({ key: i }, node.attr), Tree2Element(node.child)); });
}
function GenIcon(data) {
    return function (props) { return (React.createElement(IconBase, __assign({ attr: __assign({}, data.attr) }, props), Tree2Element(data.child))); };
}
exports.GenIcon = GenIcon;
function IconBase(props) {
    var elem = function (conf) {
        var attr = props.attr, size = props.size, title = props.title, svgProps = __rest(props, ["attr", "size", "title"]);
        var computedSize = size || conf.size || "1em";
        var className;
        if (conf.className)
            className = conf.className;
        if (props.className)
            className = (className ? className + ' ' : '') + props.className;
        return (React.createElement("svg", __assign({ stroke: "currentColor", fill: "currentColor", strokeWidth: "0" }, conf.attr, attr, svgProps, { className: className, style: __assign(__assign({ color: props.color || conf.color }, conf.style), props.style), height: computedSize, width: computedSize, xmlns: "http://www.w3.org/2000/svg" }),
            title && React.createElement("title", null, title),
            props.children));
    };
    return iconContext_1.IconContext !== undefined
        ? React.createElement(iconContext_1.IconContext.Consumer, null, function (conf) { return elem(conf); })
        : elem(iconContext_1.DefaultContext);
}
exports.IconBase = IconBase;


/***/ }),

/***/ "./node_modules/react-icons/lib/cjs/iconContext.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-icons/lib/cjs/iconContext.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IconContext = exports.DefaultContext = void 0;
var React = __webpack_require__(/*! react */ "react");
exports.DefaultContext = {
    color: undefined,
    size: undefined,
    className: undefined,
    style: undefined,
    attr: undefined,
};
exports.IconContext = React.createContext && React.createContext(exports.DefaultContext);


/***/ }),

/***/ "./node_modules/react-icons/lib/cjs/iconsManifest.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-icons/lib/cjs/iconsManifest.js ***!
  \***********************************************************/
/***/ ((module) => {

module.exports.IconsManifest = [
  {
    "id": "fa",
    "name": "Font Awesome",
    "projectUrl": "https://fontawesome.com/",
    "license": "CC BY 4.0 License",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0/"
  },
  {
    "id": "io",
    "name": "Ionicons 4",
    "projectUrl": "https://ionicons.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/ionic-team/ionicons/blob/master/LICENSE"
  },
  {
    "id": "io5",
    "name": "Ionicons 5",
    "projectUrl": "https://ionicons.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/ionic-team/ionicons/blob/master/LICENSE"
  },
  {
    "id": "md",
    "name": "Material Design icons",
    "projectUrl": "http://google.github.io/material-design-icons/",
    "license": "Apache License Version 2.0",
    "licenseUrl": "https://github.com/google/material-design-icons/blob/master/LICENSE"
  },
  {
    "id": "ti",
    "name": "Typicons",
    "projectUrl": "http://s-ings.com/typicons/",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/"
  },
  {
    "id": "go",
    "name": "Github Octicons icons",
    "projectUrl": "https://octicons.github.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/primer/octicons/blob/master/LICENSE"
  },
  {
    "id": "fi",
    "name": "Feather",
    "projectUrl": "https://feathericons.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/feathericons/feather/blob/master/LICENSE"
  },
  {
    "id": "gi",
    "name": "Game Icons",
    "projectUrl": "https://game-icons.net/",
    "license": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"
  },
  {
    "id": "wi",
    "name": "Weather Icons",
    "projectUrl": "https://erikflowers.github.io/weather-icons/",
    "license": "SIL OFL 1.1",
    "licenseUrl": "http://scripts.sil.org/OFL"
  },
  {
    "id": "di",
    "name": "Devicons",
    "projectUrl": "https://vorillaz.github.io/devicons/",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "ai",
    "name": "Ant Design Icons",
    "projectUrl": "https://github.com/ant-design/ant-design-icons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "bs",
    "name": "Bootstrap Icons",
    "projectUrl": "https://github.com/twbs/icons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "ri",
    "name": "Remix Icon",
    "projectUrl": "https://github.com/Remix-Design/RemixIcon",
    "license": "Apache License Version 2.0",
    "licenseUrl": "http://www.apache.org/licenses/"
  },
  {
    "id": "fc",
    "name": "Flat Color Icons",
    "projectUrl": "https://github.com/icons8/flat-color-icons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "gr",
    "name": "Grommet-Icons",
    "projectUrl": "https://github.com/grommet/grommet-icons",
    "license": "Apache License Version 2.0",
    "licenseUrl": "http://www.apache.org/licenses/"
  },
  {
    "id": "hi",
    "name": "Heroicons",
    "projectUrl": "https://github.com/tailwindlabs/heroicons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "si",
    "name": "Simple Icons",
    "projectUrl": "https://simpleicons.org/",
    "license": "CC0 1.0 Universal",
    "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/"
  },
  {
    "id": "im",
    "name": "IcoMoon Free",
    "projectUrl": "https://github.com/Keyamoon/IcoMoon-Free",
    "license": "CC BY 4.0 License"
  },
  {
    "id": "bi",
    "name": "BoxIcons",
    "projectUrl": "https://github.com/atisawd/boxicons",
    "license": "CC BY 4.0 License"
  },
  {
    "id": "cg",
    "name": "css.gg",
    "projectUrl": "https://github.com/astrit/css.gg",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "vsc",
    "name": "VS Code Icons",
    "projectUrl": "https://github.com/microsoft/vscode-codicons",
    "license": "CC BY 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0/"
  }
]

/***/ }),

/***/ "./node_modules/react-icons/lib/cjs/index.js":
/*!***************************************************!*\
  !*** ./node_modules/react-icons/lib/cjs/index.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./iconsManifest */ "./node_modules/react-icons/lib/cjs/iconsManifest.js"), exports);
__exportStar(__webpack_require__(/*! ./iconBase */ "./node_modules/react-icons/lib/cjs/iconBase.js"), exports);
__exportStar(__webpack_require__(/*! ./iconContext */ "./node_modules/react-icons/lib/cjs/iconContext.js"), exports);


/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "../../../server/denormalize-page-path":
/*!************************************************************!*\
  !*** external "next/dist/server/denormalize-page-path.js" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ "../i18n/normalize-locale-path":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/i18n/normalize-locale-path.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ "../mitt":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/mitt.js" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ "../shared/lib/router-context":
/*!*********************************************************!*\
  !*** external "next/dist/shared/lib/router-context.js" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ "../shared/lib/router/utils/get-asset-path-from-route":
/*!*********************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/get-asset-path-from-route.js" ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./utils/is-dynamic":
/*!******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/is-dynamic.js" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ "./utils/parse-relative-url":
/*!**************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/parse-relative-url.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ "./utils/querystring":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/querystring.js" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ "./utils/route-matcher":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-matcher.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ "./utils/route-regex":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-regex.js" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ "../shared/lib/utils":
/*!************************************************!*\
  !*** external "next/dist/shared/lib/utils.js" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "?5c99":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (() => {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWdCSDs7QUFFRCxpRUFBZTRpQixLQUFmOzs7Ozs7Ozs7O0FDdEJBLHlHQUE4Qzs7Ozs7Ozs7Ozs7O0FDQTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7O0FBRWIsSUFBSSxJQUFxQztBQUN6QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCOztBQUU1QjtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEOztBQUVsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDs7QUFFdkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNsSmE7QUFDYjtBQUNBO0FBQ0EsbUNBQW1DLG9DQUFvQyxnQkFBZ0I7QUFDdkYsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGFBQWEsbUJBQU8sQ0FBQyw0RUFBaUI7QUFDdEMsYUFBYSxtQkFBTyxDQUFDLGtFQUFZO0FBQ2pDLGFBQWEsbUJBQU8sQ0FBQyx3RUFBZTs7Ozs7Ozs7Ozs7O0FDZHBDOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWxpdmVzdHJlYW0vLi9jb21wb25lbnRzL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9uZXh0LWxpdmVzdHJlYW0vLi9jb21wb25lbnRzL0hlYWQuanMiLCJ3ZWJwYWNrOi8vbmV4dC1saXZlc3RyZWFtLy4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vbmV4dC1saXZlc3RyZWFtLy4vY29tcG9uZW50cy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vbmV4dC1saXZlc3RyZWFtLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbGluay5qcyIsIndlYnBhY2s6Ly9uZXh0LWxpdmVzdHJlYW0vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMiLCJ3ZWJwYWNrOi8vbmV4dC1saXZlc3RyZWFtLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzIiwid2VicGFjazovL25leHQtbGl2ZXN0cmVhbS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlLWxvYWRlci5qcyIsIndlYnBhY2s6Ly9uZXh0LWxpdmVzdHJlYW0vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vbmV4dC1saXZlc3RyZWFtLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvdXNlLWludGVyc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9uZXh0LWxpdmVzdHJlYW0vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC93aXRoLXJvdXRlci5qcyIsIndlYnBhY2s6Ly9uZXh0LWxpdmVzdHJlYW0vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3JvdXRlci5qcyIsIndlYnBhY2s6Ly9uZXh0LWxpdmVzdHJlYW0vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9uZXh0LWxpdmVzdHJlYW0vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovL25leHQtbGl2ZXN0cmVhbS8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9yZWFjdC1pcy9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vbmV4dC1saXZlc3RyZWFtLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2luZGV4LmpzIiwid2VicGFjazovL25leHQtbGl2ZXN0cmVhbS8uL25vZGVfbW9kdWxlcy9yZWFjdC1pY29ucy9nby9pbmRleC5lc20uanMiLCJ3ZWJwYWNrOi8vbmV4dC1saXZlc3RyZWFtLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWljb25zL2xpYi9janMvaWNvbkJhc2UuanMiLCJ3ZWJwYWNrOi8vbmV4dC1saXZlc3RyZWFtLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWljb25zL2xpYi9janMvaWNvbkNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vbmV4dC1saXZlc3RyZWFtLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWljb25zL2xpYi9janMvaWNvbnNNYW5pZmVzdC5qcyIsIndlYnBhY2s6Ly9uZXh0LWxpdmVzdHJlYW0vLi9ub2RlX21vZHVsZXMvcmVhY3QtaWNvbnMvbGliL2Nqcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9uZXh0LWxpdmVzdHJlYW0vZXh0ZXJuYWwgXCJAY2hha3JhLXVpL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vbmV4dC1saXZlc3RyZWFtL2V4dGVybmFsIFwibmV4dC9kaXN0L3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanNcIiIsIndlYnBhY2s6Ly9uZXh0LWxpdmVzdHJlYW0vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qc1wiIiwid2VicGFjazovL25leHQtbGl2ZXN0cmVhbS9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL21pdHQuanNcIiIsIndlYnBhY2s6Ly9uZXh0LWxpdmVzdHJlYW0vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL25leHQtbGl2ZXN0cmVhbS9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vbmV4dC1saXZlc3RyZWFtL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMuanNcIiIsIndlYnBhY2s6Ly9uZXh0LWxpdmVzdHJlYW0vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLmpzXCIiLCJ3ZWJwYWNrOi8vbmV4dC1saXZlc3RyZWFtL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLmpzXCIiLCJ3ZWJwYWNrOi8vbmV4dC1saXZlc3RyZWFtL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIuanNcIiIsIndlYnBhY2s6Ly9uZXh0LWxpdmVzdHJlYW0vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanNcIiIsIndlYnBhY2s6Ly9uZXh0LWxpdmVzdHJlYW0vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovL25leHQtbGl2ZXN0cmVhbS9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL25leHQtbGl2ZXN0cmVhbS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbmV4dC1saXZlc3RyZWFtL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vbmV4dC1saXZlc3RyZWFtL2lnbm9yZWR8QzpcXFVzZXJzXFxPc2thcmkgSsOkcnZlbGluXFxEb2N1bWVudHNcXEdpdEh1YlxcbmV4dC1saXZlc3RyZWFtXFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXHNoYXJlZFxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgSGVhZGluZywgVGV4dCB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3RlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJveCBiZz1cImJvZHlcIiBwPVwiNFwiPlxyXG4gICAgICAgICAgICA8VGV4dCBhbGlnbj1cImNlbnRlclwiIGZvbnRTaXplPVwiMTNcIiBjb2xvcj1cImJnXCI+XHJcbiAgICAgICAgICAgICAgICB7J0NvcHlyaWdodCDCqSAnfVxyXG4gICAgICAgICAgICAgICAge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX17JyAnfVxyXG4gICAgICAgICAgICAgICAgPFRleHQgYXM9XCJzcGFuXCIgZGlzcGxheT1cImlubGluZVwiIGZvbnRXZWlnaHQ9XCJib2xkXCIgZm9udFNpemU9XCIxMlwiIHB4PVwiMVwiPk9za2FyaSBKw6RydmVsaW48L1RleHQ+XHJcbiAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICA8L0JveD5cclxuICAgICk7XHJcbn0iLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUhlYWQoe3RpdGxlLCBkZXNjLCB1cmwsIGltZ30pIHtcclxuICAgIGxldCBiYXNlVXJsID0gXCJodHRwczovL25leHQtbGl2ZXN0cmVhbS52ZXJjZWwuYXBwXCI7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICA8dGl0bGU+e3RpdGxlfSAtIExpdmVzdHJlYW08L3RpdGxlPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtkZXNjfSAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjp0aXRsZVwiIGNvbnRlbnQ9e3RpdGxlfSAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2N9IC8+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnVybFwiIGNvbnRlbnQ9e2Jhc2VVcmwgKyB1cmx9IC8+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmltYWdlXCIgY29udGVudD17YmFzZVVybCArIGltZ30gLz5cclxuICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PXtiYXNlVXJsICsgdXJsfSAvPlxyXG4gICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD17YmFzZVVybCArIGltZ30gLz5cclxuICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e3RpdGxlfSAvPlxyXG4gICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY30gLz5cclxuICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBzaXplcz1cIjUxMng1MTJcIiAgaHJlZj1cIi9pY29ucy9mYXZpY29uLnBuZ1wiPjwvbGluaz5cclxuICAgICAgICAgICAgPGxpbmsgcmVsPVwibWFuaWZlc3RcIiBocmVmPVwibWFuaWZlc3QuanNvblwiPjwvbGluaz5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICApO1xyXG59IiwiaW1wb3J0IHsgRmxleCwgV3JhcCwgV3JhcEl0ZW0sIFNwYWNlciwgQnV0dG9uLCBIZWFkaW5nLCBNZW51LCBNZW51QnV0dG9uLCBNZW51TGlzdCwgTWVudUdyb3VwLCBNZW51SXRlbSwgSWNvbiwgTGluayB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXHJcbmltcG9ydCB7IEdvQ2hldnJvbkRvd24gfSBmcm9tICdyZWFjdC1pY29ucy9nbydcclxuaW1wb3J0IE5leHRMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZsZXggYmc9XCJiZ1wiIGNvbG9yPVwiYm9keVwiIHc9XCIxMDAlXCIgcG9zPVwiZml4ZWRcIiB0b3A9XCIwXCIgbGVmdD1cIjBcIiBib3JkZXJCb3R0b209XCIxcHggc29saWQgI0RFREVERVwiIHpJbmRleD1cIjk5XCI+XHJcbiAgICAgICAgICAgIDxXcmFwIGFsaWduPVwiY2VudGVyXCIgcHg9e3tiYXNlOiBcIjRcIiwgbGc6IFwiOFwifX0gcHk9XCI0XCI+XHJcbiAgICAgICAgICAgICAgICA8V3JhcEl0ZW0gcHk9e3tiYXNlOiBcIjJcIiwgbWQ6IFwiMlwiLCBsZzogXCI0XCIsIHhsOlwiOFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhlYWRpbmcgYXM9XCJwXCIgZm9udFNpemU9e3tiYXNlOiBcIjE2cHhcIiwgc206IFwiMjBweFwiLCBtZDogXCIyNHB4XCIsIGxnOiBcIjMycHhcIiwgeGw6IFwiMzZweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOZXh0TGluayBocmVmPVwiL1wiIHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgX2hvdmVyPXt7dGV4dERlY29yYXRpb246IFwibm9uZVwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGl2ZXN0cmVhbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L05leHRMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgICAgICAgICAgIDwvV3JhcEl0ZW0+XHJcbiAgICAgICAgICAgIDwvV3JhcD5cclxuICAgICAgICAgICAgPFNwYWNlciAvPlxyXG4gICAgICAgICAgICA8RmxleCBhbGlnbj1cImNlbnRlclwiIHB4PXt7YmFzZTogXCI0XCIsIGxnOiBcIjhcIn19IHB5PVwiNFwiPlxyXG4gICAgICAgICAgICAgICAgPE1lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnVCdXR0b24gYXM9e0J1dHRvbn0gYmc9XCJiZ1wiIGJvcmRlcj1cIjJweCBzb2xpZCAjRkNGQ0ZDXCIgYm9yZGVyUmFkaXVzPVwiMjRweFwiIGhlaWdodD17e2Jhc2U6IFwiMzJweFwiLCBtZDogXCI0MHB4XCIsIHhsOiBcIjQ4cHhcIn19IHB4PXt7YmFzZTogXCIxMnB4XCIsIG1kOiBcIjE2cHhcIiwgeGw6IFwiMjRweFwifX0gX2hvdmVyPXt7IGJnOiBcIiNERURFREVcIiB9fSBfYWN0aXZlPXt7Ymc6IFwiI0RFREVERVwiLCBib3JkZXJDb2xvcjogXCIjREVERURFXCIgfX0gX2ZvY3VzPXt7Ym9yZGVyOiBcIjJweCBzb2xpZCAjREVERURFXCJ9fSByaWdodEljb249ezxJY29uIGFzPXtHb0NoZXZyb25Eb3dufSAvPn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkaW5nIGFzPVwicFwiIHNpemU9XCJzbVwiIGZvbnRTaXplPXt7YmFzZTogXCIxMnB4XCIsIG1kOiBcIjE0cHhcIiwgbGc6IFwiMTZweFwifX0+U3RyaWltaXQ8L0hlYWRpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9NZW51QnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51TGlzdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVHcm91cCB0aXRsZT1cIlJ5aG3DpCAxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gcGw9XCI2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5leHRMaW5rIGhyZWY9XCIvc3RyaWltaS8xXCIgcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rPkxpdmVzdHJlYW0gMTwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05leHRMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9NZW51TGlzdD5cclxuICAgICAgICAgICAgICAgIDwvTWVudT5cclxuICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgIDwvRmxleD5cclxuICApO1xyXG59IiwiaW1wb3J0IEhlYWQgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkJ1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJ1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJ1xyXG5pbXBvcnQgeyBCb3ggfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHt0aXRsZSwgZGVzYywgdXJsLCBpbWcsIGNoaWxkcmVufSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZCB0aXRsZT17dGl0bGV9IGRlc2M9e2Rlc2N9IHVybD17dXJsfSBpbWc9e2ltZ30gLz5cclxuXHJcbiAgICAgICAgICAgIDxIZWFkZXIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8Qm94IGJnPVwiYmdcIiBjb2xvcj1cImJvZHlcIiBwb3M9XCJyZWxhdGl2ZVwiIG10PXt7YmFzZTogXCI3M3B4XCIsIG1kOiBcIjc3cHhcIiwgbGc6IFwiMTAzcHhcIiwgeGw6XCIxNDBweFwifX0gbWluSD17e2Jhc2U6IFwiY2FsYygxMDB2aCAtIDcycHgpXCIsIG1kOiBcImNhbGMoMTAwdmggLSA3NnB4KVwiLCBsZzogXCJjYWxjKDEwMHZoIC0gMTAycHgpXCIsIHhsOiBcImNhbGMoMTAwdmggLSAxMzlweClcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG5cclxuICAgICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfcm91dGVyID0gcmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyL3JvdXRlclwiKTtcbnZhciBfcm91dGVyMSA9IHJlcXVpcmUoXCIuL3JvdXRlclwiKTtcbnZhciBfdXNlSW50ZXJzZWN0aW9uID0gcmVxdWlyZShcIi4vdXNlLWludGVyc2VjdGlvblwiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmNvbnN0IHByZWZldGNoZWQgPSB7XG59O1xuZnVuY3Rpb24gcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgb3B0aW9ucykge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhcm91dGVyKSByZXR1cm47XG4gICAgaWYgKCEoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuO1xuICAgIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gICAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gICAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gICAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgY3VyTG9jYWxlID0gb3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnID8gb3B0aW9ucy5sb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZTtcbiAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV0gPSB0cnVlO1xufVxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50KSB7XG4gICAgY29uc3QgeyB0YXJnZXQgIH0gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgIHJldHVybiB0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnIHx8IGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuY3RybEtleSB8fCBldmVudC5zaGlmdEtleSB8fCBldmVudC5hbHRLZXkgfHwgZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDI7XG59XG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSkge1xuICAgIGNvbnN0IHsgbm9kZU5hbWUgIH0gPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgICBpZiAoc2Nyb2xsID09IG51bGwgJiYgYXMuaW5kZXhPZignIycpID49IDApIHtcbiAgICAgICAgc2Nyb2xsID0gZmFsc2U7XG4gICAgfVxuICAgIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICAgIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywge1xuICAgICAgICBzaGFsbG93LFxuICAgICAgICBsb2NhbGUsXG4gICAgICAgIHNjcm9sbFxuICAgIH0pO1xufVxuZnVuY3Rpb24gTGluayhwcm9wcykge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICsgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiIDogJycpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQgPSB7XG4gICAgICAgICAgICBocmVmOiB0cnVlXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlcXVpcmVkUHJvcHMgPSBPYmplY3Qua2V5cyhyZXF1aXJlZFByb3BzR3VhcmQpO1xuICAgICAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleSk9PntcbiAgICAgICAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldID09IG51bGwgfHwgdHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICAgICAgICAgIGNvbnN0IF8gPSBrZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQgPSB7XG4gICAgICAgICAgICBhczogdHJ1ZSxcbiAgICAgICAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICAgICAgICBzY3JvbGw6IHRydWUsXG4gICAgICAgICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICAgICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICAgICAgICAgIGxvY2FsZTogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBvcHRpb25hbFByb3BzID0gT2JqZWN0LmtleXMob3B0aW9uYWxQcm9wc0d1YXJkKTtcbiAgICAgICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXkpPT57XG4gICAgICAgICAgICBjb25zdCB2YWxUeXBlID0gdHlwZW9mIHByb3BzW2tleV07XG4gICAgICAgICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycgJiYgdmFsVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnbG9jYWxlJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ3JlcGxhY2UnIHx8IGtleSA9PT0gJ3Njcm9sbCcgfHwga2V5ID09PSAnc2hhbGxvdycgfHwga2V5ID09PSAncGFzc0hyZWYnIHx8IGtleSA9PT0gJ3ByZWZldGNoJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdmFsVHlwZSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgICAgICAgICBjb25zdCBfID0ga2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgICAgIGNvbnN0IGhhc1dhcm5lZCA9IF9yZWFjdC5kZWZhdWx0LnVzZVJlZihmYWxzZSk7XG4gICAgICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlO1xuICAgIGNvbnN0IHJvdXRlciA9ICgwLCBfcm91dGVyMSkudXNlUm91dGVyKCk7XG4gICAgY29uc3QgeyBocmVmICwgYXMgIH0gPSBfcmVhY3QuZGVmYXVsdC51c2VNZW1vKCgpPT57XG4gICAgICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gKDAsIF9yb3V0ZXIpLnJlc29sdmVIcmVmKHJvdXRlciwgcHJvcHMuaHJlZiwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICAgICAgICBhczogcHJvcHMuYXMgPyAoMCwgX3JvdXRlcikucmVzb2x2ZUhyZWYocm91dGVyLCBwcm9wcy5hcykgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZlxuICAgICAgICB9O1xuICAgIH0sIFtcbiAgICAgICAgcm91dGVyLFxuICAgICAgICBwcm9wcy5ocmVmLFxuICAgICAgICBwcm9wcy5hc1xuICAgIF0pO1xuICAgIGxldCB7IGNoaWxkcmVuICwgcmVwbGFjZSAsIHNoYWxsb3cgLCBzY3JvbGwgLCBsb2NhbGUgIH0gPSBwcm9wcztcbiAgICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgICAgICBjaGlsZHJlbiA9IC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFcIiwgbnVsbCwgY2hpbGRyZW4pO1xuICAgIH1cbiAgICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgICBsZXQgY2hpbGQ7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjaGlsZCA9IF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTXVsdGlwbGUgY2hpbGRyZW4gd2VyZSBwYXNzZWQgdG8gPExpbms+IHdpdGggXFxgaHJlZlxcYCBvZiBcXGAke3Byb3BzLmhyZWZ9XFxgIGJ1dCBvbmx5IG9uZSBjaGlsZCBpcyBzdXBwb3J0ZWQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbGluay1tdWx0aXBsZS1jaGlsZHJlbmAgKyAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCIgOiAnJykpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGQgPSBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcbiAgICB9XG4gICAgY29uc3QgY2hpbGRSZWYgPSBjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZjtcbiAgICBjb25zdCBbc2V0SW50ZXJzZWN0aW9uUmVmLCBpc1Zpc2libGVdID0gKDAsIF91c2VJbnRlcnNlY3Rpb24pLnVzZUludGVyc2VjdGlvbih7XG4gICAgICAgIHJvb3RNYXJnaW46ICcyMDBweCdcbiAgICB9KTtcbiAgICBjb25zdCBzZXRSZWYgPSBfcmVhY3QuZGVmYXVsdC51c2VDYWxsYmFjaygoZWwpPT57XG4gICAgICAgIHNldEludGVyc2VjdGlvblJlZihlbCk7XG4gICAgICAgIGlmIChjaGlsZFJlZikge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGRSZWYoZWwpO1xuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGNoaWxkUmVmLmN1cnJlbnQgPSBlbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgY2hpbGRSZWYsXG4gICAgICAgIHNldEludGVyc2VjdGlvblJlZlxuICAgIF0pO1xuICAgIF9yZWFjdC5kZWZhdWx0LnVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBjb25zdCBzaG91bGRQcmVmZXRjaCA9IGlzVmlzaWJsZSAmJiBwICYmICgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpO1xuICAgICAgICBjb25zdCBjdXJMb2NhbGUgPSB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlO1xuICAgICAgICBjb25zdCBpc1ByZWZldGNoZWQgPSBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldO1xuICAgICAgICBpZiAoc2hvdWxkUHJlZmV0Y2ggJiYgIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywge1xuICAgICAgICAgICAgICAgIGxvY2FsZTogY3VyTG9jYWxlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgYXMsXG4gICAgICAgIGhyZWYsXG4gICAgICAgIGlzVmlzaWJsZSxcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICBwLFxuICAgICAgICByb3V0ZXJcbiAgICBdKTtcbiAgICBjb25zdCBjaGlsZFByb3BzID0ge1xuICAgICAgICByZWY6IHNldFJlZixcbiAgICAgICAgb25DbGljazogKGUpPT57XG4gICAgICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGUpPT57XG4gICAgICAgIGlmICghKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZikpIHJldHVybjtcbiAgICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKTtcbiAgICAgICAgfVxuICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgICAgICBwcmlvcml0eTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAgIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICAgIGlmIChwcm9wcy5wYXNzSHJlZiB8fCBjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSB7XG4gICAgICAgIGNvbnN0IGN1ckxvY2FsZSA9IHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGU7XG4gICAgICAgIC8vIHdlIG9ubHkgcmVuZGVyIGRvbWFpbiBsb2NhbGVzIGlmIHdlIGFyZSBjdXJyZW50bHkgb24gYSBkb21haW4gbG9jYWxlXG4gICAgICAgIC8vIHNvIHRoYXQgbG9jYWxlIGxpbmtzIGFyZSBzdGlsbCB2aXNpdGFibGUgaW4gZGV2ZWxvcG1lbnQvcHJldmlldyBlbnZzXG4gICAgICAgIGNvbnN0IGxvY2FsZURvbWFpbiA9IHJvdXRlciAmJiByb3V0ZXIuaXNMb2NhbGVEb21haW4gJiYgKDAsIF9yb3V0ZXIpLmdldERvbWFpbkxvY2FsZShhcywgY3VyTG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZXMsIHJvdXRlciAmJiByb3V0ZXIuZG9tYWluTG9jYWxlcyk7XG4gICAgICAgIGNoaWxkUHJvcHMuaHJlZiA9IGxvY2FsZURvbWFpbiB8fCAoMCwgX3JvdXRlcikuYWRkQmFzZVBhdGgoKDAsIF9yb3V0ZXIpLmFkZExvY2FsZShhcywgY3VyTG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGUpKTtcbiAgICB9XG4gICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKSk7XG59XG52YXIgX2RlZmF1bHQgPSBMaW5rO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpbmsuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g7XG5leHBvcnRzLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gdm9pZCAwO1xuZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCkge1xuICAgIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoO1xufVxuY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0ggPyAocGF0aCk9PntcbiAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpO1xuICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nO1xuICAgIH1cbn0gOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtcbmV4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaDtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrID0gZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2sgPSB2b2lkIDA7XG5jb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID0gdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjayAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2suYmluZCh3aW5kb3cpIHx8IGZ1bmN0aW9uKGNiKSB7XG4gICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgY2Ioe1xuICAgICAgICAgICAgZGlkVGltZW91dDogZmFsc2UsXG4gICAgICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgNTAgLSAoRGF0ZS5ub3coKSAtIHN0YXJ0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sIDEpO1xufTtcbmV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVlc3RJZGxlQ2FsbGJhY2s7XG5jb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2sgPSB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2sgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2suYmluZCh3aW5kb3cpIHx8IGZ1bmN0aW9uKGlkKSB7XG4gICAgcmV0dXJuIGNsZWFyVGltZW91dChpZCk7XG59O1xuZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2sgPSBjYW5jZWxJZGxlQ2FsbGJhY2s7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlcXVlc3QtaWRsZS1jYWxsYmFjay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMubWFya0Fzc2V0RXJyb3IgPSBtYXJrQXNzZXRFcnJvcjtcbmV4cG9ydHMuaXNBc3NldEVycm9yID0gaXNBc3NldEVycm9yO1xuZXhwb3J0cy5nZXRDbGllbnRCdWlsZE1hbmlmZXN0ID0gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdDtcbmV4cG9ydHMuY3JlYXRlUm91dGVMb2FkZXIgPSBjcmVhdGVSb3V0ZUxvYWRlcjtcbnZhciBfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZVwiKSk7XG52YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG4vLyAzLjhzIHdhcyBhcmJpdHJhcmlseSBjaG9zZW4gYXMgaXQncyB3aGF0IGh0dHBzOi8vd2ViLmRldi9pbnRlcmFjdGl2ZVxuLy8gY29uc2lkZXJzIGFzIFwiR29vZFwiIHRpbWUtdG8taW50ZXJhY3RpdmUuIFdlIG11c3QgYXNzdW1lIHNvbWV0aGluZyB3ZW50XG4vLyB3cm9uZyBiZXlvbmQgdGhpcyBwb2ludCwgYW5kIHRoZW4gZmFsbC1iYWNrIHRvIGEgZnVsbCBwYWdlIHRyYW5zaXRpb24gdG9cbi8vIHNob3cgdGhlIHVzZXIgc29tZXRoaW5nIG9mIHZhbHVlLlxuY29uc3QgTVNfTUFYX0lETEVfREVMQVkgPSAzODAwO1xuZnVuY3Rpb24gd2l0aEZ1dHVyZShrZXksIG1hcCwgZ2VuZXJhdG9yKSB7XG4gICAgbGV0IGVudHJ5ID0gbWFwLmdldChrZXkpO1xuICAgIGlmIChlbnRyeSkge1xuICAgICAgICBpZiAoJ2Z1dHVyZScgaW4gZW50cnkpIHtcbiAgICAgICAgICAgIHJldHVybiBlbnRyeS5mdXR1cmU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSk7XG4gICAgfVxuICAgIGxldCByZXNvbHZlcjtcbiAgICBjb25zdCBwcm9tID0gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XG4gICAgICAgIHJlc29sdmVyID0gcmVzb2x2ZTtcbiAgICB9KTtcbiAgICBtYXAuc2V0KGtleSwgZW50cnkgPSB7XG4gICAgICAgIHJlc29sdmU6IHJlc29sdmVyLFxuICAgICAgICBmdXR1cmU6IHByb21cbiAgICB9KTtcbiAgICByZXR1cm4gZ2VuZXJhdG9yID8gZ2VuZXJhdG9yKCkudGhlbigodmFsdWUpPT4ocmVzb2x2ZXIodmFsdWUpLCB2YWx1ZSlcbiAgICApIDogcHJvbTtcbn1cbmZ1bmN0aW9uIGhhc1ByZWZldGNoKGxpbmspIHtcbiAgICB0cnkge1xuICAgICAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgICAgICByZXR1cm4oLy8gZGV0ZWN0IElFMTEgc2luY2UgaXQgc3VwcG9ydHMgcHJlZmV0Y2ggYnV0IGlzbid0IGRldGVjdGVkXG4gICAgICAgIC8vIHdpdGggcmVsTGlzdC5zdXBwb3J0XG4gICAgICAgICghIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCAmJiAhIWRvY3VtZW50LmRvY3VtZW50TW9kZSkgfHwgbGluay5yZWxMaXN0LnN1cHBvcnRzKCdwcmVmZXRjaCcpKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5jb25zdCBjYW5QcmVmZXRjaCA9IGhhc1ByZWZldGNoKCk7XG5mdW5jdGlvbiBwcmVmZXRjaFZpYURvbShocmVmLCBhcywgbGluaykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopPT57XG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaW5rW3JlbD1cInByZWZldGNoXCJdW2hyZWZePVwiJHtocmVmfVwiXWApKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzKCk7XG4gICAgICAgIH1cbiAgICAgICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbDpcbiAgICAgICAgaWYgKGFzKSBsaW5rLmFzID0gYXM7XG4gICAgICAgIGxpbmsucmVsID0gYHByZWZldGNoYDtcbiAgICAgICAgbGluay5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47XG4gICAgICAgIGxpbmsub25sb2FkID0gcmVzO1xuICAgICAgICBsaW5rLm9uZXJyb3IgPSByZWo7XG4gICAgICAgIC8vIGBocmVmYCBzaG91bGQgYWx3YXlzIGJlIGxhc3Q6XG4gICAgICAgIGxpbmsuaHJlZiA9IGhyZWY7XG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgfSk7XG59XG5jb25zdCBBU1NFVF9MT0FEX0VSUk9SID0gU3ltYm9sKCdBU1NFVF9MT0FEX0VSUk9SJyk7XG5mdW5jdGlvbiBtYXJrQXNzZXRFcnJvcihlcnIpIHtcbiAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgQVNTRVRfTE9BRF9FUlJPUiwge1xuICAgIH0pO1xufVxuZnVuY3Rpb24gaXNBc3NldEVycm9yKGVycikge1xuICAgIHJldHVybiBlcnIgJiYgQVNTRVRfTE9BRF9FUlJPUiBpbiBlcnI7XG59XG5mdW5jdGlvbiBhcHBlbmRTY3JpcHQoc3JjLCBzY3JpcHQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWwuXG4gICAgICAgIC8vIDEuIFNldHVwIHN1Y2Nlc3MvZmFpbHVyZSBob29rcyBpbiBjYXNlIHRoZSBicm93c2VyIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gICAgZXhlY3V0ZXMgd2hlbiBgc3JjYCBpcyBzZXQuXG4gICAgICAgIHNjcmlwdC5vbmxvYWQgPSByZXNvbHZlO1xuICAgICAgICBzY3JpcHQub25lcnJvciA9ICgpPT5yZWplY3QobWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7c3JjfWApKSlcbiAgICAgICAgO1xuICAgICAgICAvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbiAgICAgICAgLy8gICAgYnJvd3NlciBiZWdpbnMgdG8gZmV0Y2guXG4gICAgICAgIHNjcmlwdC5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47XG4gICAgICAgIC8vIDMuIEZpbmFsbHksIHNldCB0aGUgc291cmNlIGFuZCBpbmplY3QgaW50byB0aGUgRE9NIGluIGNhc2UgdGhlIGNoaWxkXG4gICAgICAgIC8vICAgIG11c3QgYmUgYXBwZW5kZWQgZm9yIGZldGNoaW5nIHRvIHN0YXJ0LlxuICAgICAgICBzY3JpcHQuc3JjID0gc3JjO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgfSk7XG59XG4vLyBXZSB3YWl0IGZvciBwYWdlcyB0byBiZSBidWlsdCBpbiBkZXYgYmVmb3JlIHdlIHN0YXJ0IHRoZSByb3V0ZSB0cmFuc2l0aW9uXG4vLyB0aW1lb3V0IHRvIHByZXZlbnQgYW4gdW4tbmVjZXNzYXJ5IGhhcmQgbmF2aWdhdGlvbiBpbiBkZXZlbG9wbWVudC5cbmxldCBkZXZCdWlsZFByb21pc2U7XG4vLyBSZXNvbHZlIGEgcHJvbWlzZSB0aGF0IHRpbWVzIG91dCBhZnRlciBnaXZlbiBhbW91bnQgb2YgbWlsbGlzZWNvbmRzLlxuZnVuY3Rpb24gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChwLCBtcywgZXJyKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgcC50aGVuKChyKT0+e1xuICAgICAgICAgICAgLy8gUmVzb2x2ZWQsIGNhbmNlbCB0aGUgdGltZW91dFxuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJlc29sdmUocik7XG4gICAgICAgIH0pLmNhdGNoKHJlamVjdCk7XG4gICAgICAgIC8vIFdlIHdyYXAgdGhlc2UgY2hlY2tzIHNlcGFyYXRlbHkgZm9yIGJldHRlciBkZWFkLWNvZGUgZWxpbWluYXRpb24gaW5cbiAgICAgICAgLy8gcHJvZHVjdGlvbiBidW5kbGVzLlxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICAgIChkZXZCdWlsZFByb21pc2UgfHwgUHJvbWlzZS5yZXNvbHZlKCkpLnRoZW4oKCk9PntcbiAgICAgICAgICAgICAgICAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIG1zKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICAgICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+c2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBtcylcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSB7XG4gICAgaWYgKHNlbGYuX19CVUlMRF9NQU5JRkVTVCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCk7XG4gICAgfVxuICAgIGNvbnN0IG9uQnVpbGRNYW5pZmVzdCA9IG5ldyBQcm9taXNlKChyZXNvbHZlKT0+e1xuICAgICAgICAvLyBNYW5kYXRvcnkgYmVjYXVzZSB0aGlzIGlzIG5vdCBjb25jdXJyZW50IHNhZmU6XG4gICAgICAgIGNvbnN0IGNiID0gc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCO1xuICAgICAgICBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0IgPSAoKT0+e1xuICAgICAgICAgICAgcmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpO1xuICAgICAgICAgICAgY2IgJiYgY2IoKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChvbkJ1aWxkTWFuaWZlc3QsIE1TX01BWF9JRExFX0RFTEFZLCBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKSk7XG59XG5mdW5jdGlvbiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtcbiAgICAgICAgICAgIHNjcmlwdHM6IFtcbiAgICAgICAgICAgICAgICBhc3NldFByZWZpeCArICcvX25leHQvc3RhdGljL2NodW5rcy9wYWdlcycgKyBlbmNvZGVVUkkoKDAsIF9nZXRBc3NldFBhdGhGcm9tUm91dGUpLmRlZmF1bHQocm91dGUsICcuanMnKSksIFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIC8vIFN0eWxlcyBhcmUgaGFuZGxlZCBieSBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudDpcbiAgICAgICAgICAgIGNzczogW11cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkudGhlbigobWFuaWZlc3QpPT57XG4gICAgICAgIGlmICghKHJvdXRlIGluIG1hbmlmZXN0KSkge1xuICAgICAgICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9va3VwIHJvdXRlOiAke3JvdXRlfWApKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhbGxGaWxlcyA9IG1hbmlmZXN0W3JvdXRlXS5tYXAoKGVudHJ5KT0+YXNzZXRQcmVmaXggKyAnL19uZXh0LycgKyBlbmNvZGVVUkkoZW50cnkpXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzY3JpcHRzOiBhbGxGaWxlcy5maWx0ZXIoKHYpPT52LmVuZHNXaXRoKCcuanMnKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIGNzczogYWxsRmlsZXMuZmlsdGVyKCh2KT0+di5lbmRzV2l0aCgnLmNzcycpXG4gICAgICAgICAgICApXG4gICAgICAgIH07XG4gICAgfSk7XG59XG5mdW5jdGlvbiBjcmVhdGVSb3V0ZUxvYWRlcihhc3NldFByZWZpeCkge1xuICAgIGNvbnN0IGVudHJ5cG9pbnRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IGxvYWRlZFNjcmlwdHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3Qgc3R5bGVTaGVldHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3Qgcm91dGVzID0gbmV3IE1hcCgpO1xuICAgIGZ1bmN0aW9uIG1heWJlRXhlY3V0ZVNjcmlwdChzcmMpIHtcbiAgICAgICAgbGV0IHByb20gPSBsb2FkZWRTY3JpcHRzLmdldChzcmMpO1xuICAgICAgICBpZiAocHJvbSkge1xuICAgICAgICAgICAgcmV0dXJuIHByb207XG4gICAgICAgIH1cbiAgICAgICAgLy8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGxvYWRlZFNjcmlwdHMuc2V0KHNyYywgcHJvbSA9IGFwcGVuZFNjcmlwdChzcmMpKTtcbiAgICAgICAgcmV0dXJuIHByb207XG4gICAgfVxuICAgIGZ1bmN0aW9uIGZldGNoU3R5bGVTaGVldChocmVmKSB7XG4gICAgICAgIGxldCBwcm9tID0gc3R5bGVTaGVldHMuZ2V0KGhyZWYpO1xuICAgICAgICBpZiAocHJvbSkge1xuICAgICAgICAgICAgcmV0dXJuIHByb207XG4gICAgICAgIH1cbiAgICAgICAgc3R5bGVTaGVldHMuc2V0KGhyZWYsIHByb20gPSBmZXRjaChocmVmKS50aGVuKChyZXMpPT57XG4gICAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3R5bGVzaGVldDogJHtocmVmfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlcy50ZXh0KCkudGhlbigodGV4dCk9Pih7XG4gICAgICAgICAgICAgICAgICAgIGhyZWY6IGhyZWYsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHRleHRcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSkuY2F0Y2goKGVycik9PntcbiAgICAgICAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKGVycik7XG4gICAgICAgIH0pKTtcbiAgICAgICAgcmV0dXJuIHByb207XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHdoZW5FbnRyeXBvaW50IChyb3V0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHdpdGhGdXR1cmUocm91dGUsIGVudHJ5cG9pbnRzKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25FbnRyeXBvaW50IChyb3V0ZSwgZXhlY3V0ZSkge1xuICAgICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGUpLnRoZW4oKGZuKT0+Zm4oKVxuICAgICAgICAgICAgKS50aGVuKChleHBvcnRzKT0+KHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBleHBvcnRzICYmIGV4cG9ydHMuZGVmYXVsdCB8fCBleHBvcnRzLFxuICAgICAgICAgICAgICAgICAgICBleHBvcnRzOiBleHBvcnRzXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICwgKGVycik9Pih7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKS50aGVuKChpbnB1dCk9PntcbiAgICAgICAgICAgICAgICBjb25zdCBvbGQgPSBlbnRyeXBvaW50cy5nZXQocm91dGUpO1xuICAgICAgICAgICAgICAgIGVudHJ5cG9pbnRzLnNldChyb3V0ZSwgaW5wdXQpO1xuICAgICAgICAgICAgICAgIGlmIChvbGQgJiYgJ3Jlc29sdmUnIGluIG9sZCkgb2xkLnJlc29sdmUoaW5wdXQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGxvYWRSb3V0ZSAocm91dGUsIHByZWZldGNoKSB7XG4gICAgICAgICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgcm91dGVzLCAoKT0+e1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlRmlsZXNQcm9taXNlID0gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpLnRoZW4oKHsgc2NyaXB0cyAsIGNzcyAgfSk9PntcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5cG9pbnRzLmhhcyhyb3V0ZSkgPyBbXSA6IFByb21pc2UuYWxsKHNjcmlwdHMubWFwKG1heWJlRXhlY3V0ZVNjcmlwdCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwoY3NzLm1hcChmZXRjaFN0eWxlU2hlZXQpKSwgXG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgIH0pLnRoZW4oKHJlcyk9PntcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMud2hlbkVudHJ5cG9pbnQocm91dGUpLnRoZW4oKGVudHJ5cG9pbnQpPT4oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5cG9pbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzOiByZXNbMV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGRldkJ1aWxkUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJvdXRlRmlsZXNQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJvdXRlRmlsZXNQcm9taXNlLmZpbmFsbHkoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQocm91dGVGaWxlc1Byb21pc2UsIE1TX01BWF9JRExFX0RFTEFZLCBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYFJvdXRlIGRpZCBub3QgY29tcGxldGUgbG9hZGluZzogJHtyb3V0ZX1gKSkpLnRoZW4oKHsgZW50cnlwb2ludCAsIHN0eWxlcyAgfSk9PntcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM6IHN0eWxlc1xuICAgICAgICAgICAgICAgICAgICB9LCBlbnRyeXBvaW50KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdlcnJvcicgaW4gZW50cnlwb2ludCA/IGVudHJ5cG9pbnQgOiByZXM7XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycik9PntcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZWZldGNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSBkb24ndCB3YW50IHRvIGNhY2hlIGVycm9ycyBkdXJpbmcgcHJlZmV0Y2hcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVyclxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHByZWZldGNoIChyb3V0ZSkge1xuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZUxhYnMvcXVpY2tsaW5rL2Jsb2IvNDUzYTY2MWZhMWZhOTQwZTJkMmUwNDQ0NTIzOThlMzhjNjdhOThmYi9zcmMvaW5kZXgubWpzI0wxMTUtTDExOFxuICAgICAgICAgICAgLy8gTGljZW5zZTogQXBhY2hlIDIuMFxuICAgICAgICAgICAgbGV0IGNuO1xuICAgICAgICAgICAgaWYgKGNuID0gbmF2aWdhdG9yLmNvbm5lY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAvLyBEb24ndCBwcmVmZXRjaCBpZiB1c2luZyAyRyBvciBpZiBTYXZlLURhdGEgaXMgZW5hYmxlZC5cbiAgICAgICAgICAgICAgICBpZiAoY24uc2F2ZURhdGEgfHwgLzJnLy50ZXN0KGNuLmVmZmVjdGl2ZVR5cGUpKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpLnRoZW4oKG91dHB1dCk9PlByb21pc2UuYWxsKGNhblByZWZldGNoID8gb3V0cHV0LnNjcmlwdHMubWFwKChzY3JpcHQpPT5wcmVmZXRjaFZpYURvbShzY3JpcHQsICdzY3JpcHQnKVxuICAgICAgICAgICAgICAgICkgOiBbXSlcbiAgICAgICAgICAgICkudGhlbigoKT0+e1xuICAgICAgICAgICAgICAgICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+dGhpcy5sb2FkUm91dGUocm91dGUsIHRydWUpLmNhdGNoKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKC8vIHN3YWxsb3cgcHJlZmV0Y2ggZXJyb3JzXG4gICAgICAgICAgICAoKT0+e1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1sb2FkZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJSb3V0ZXJcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF9yb3V0ZXIuZGVmYXVsdDtcbiAgICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIndpdGhSb3V0ZXJcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF93aXRoUm91dGVyLmRlZmF1bHQ7XG4gICAgfVxufSk7XG5leHBvcnRzLnVzZVJvdXRlciA9IHVzZVJvdXRlcjtcbmV4cG9ydHMuY3JlYXRlUm91dGVyID0gY3JlYXRlUm91dGVyO1xuZXhwb3J0cy5tYWtlUHVibGljUm91dGVySW5zdGFuY2UgPSBtYWtlUHVibGljUm91dGVySW5zdGFuY2U7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9yb3V0ZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXJcIikpO1xudmFyIF9yb3V0ZXJDb250ZXh0ID0gcmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyLWNvbnRleHRcIik7XG52YXIgX3dpdGhSb3V0ZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3dpdGgtcm91dGVyXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmNvbnN0IHNpbmdsZXRvblJvdXRlciA9IHtcbiAgICByb3V0ZXI6IG51bGwsXG4gICAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICAgIHJlYWR5IChjYikge1xuICAgICAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpO1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYik7XG4gICAgICAgIH1cbiAgICB9XG59O1xuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICAgJ3BhdGhuYW1lJyxcbiAgICAncm91dGUnLFxuICAgICdxdWVyeScsXG4gICAgJ2FzUGF0aCcsXG4gICAgJ2NvbXBvbmVudHMnLFxuICAgICdpc0ZhbGxiYWNrJyxcbiAgICAnYmFzZVBhdGgnLFxuICAgICdsb2NhbGUnLFxuICAgICdsb2NhbGVzJyxcbiAgICAnZGVmYXVsdExvY2FsZScsXG4gICAgJ2lzUmVhZHknLFxuICAgICdpc1ByZXZpZXcnLFxuICAgICdpc0xvY2FsZURvbWFpbicsXG4gICAgJ2RvbWFpbkxvY2FsZXMnLCBcbl07XG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAgICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAgICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAgICdoYXNoQ2hhbmdlQ29tcGxldGUnLCBcbl07XG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAgICdwdXNoJyxcbiAgICAncmVwbGFjZScsXG4gICAgJ3JlbG9hZCcsXG4gICAgJ2JhY2snLFxuICAgICdwcmVmZXRjaCcsXG4gICAgJ2JlZm9yZVBvcFN0YXRlJywgXG5dO1xuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgICBnZXQgKCkge1xuICAgICAgICByZXR1cm4gX3JvdXRlci5kZWZhdWx0LmV2ZW50cztcbiAgICB9XG59KTtcbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKT0+e1xuICAgIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2Ugd2UgbmVlZCB0byByZXR1cm5cbiAgICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgICAgIGdldCAoKSB7XG4gICAgICAgICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKTtcbiAgICAgICAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpPT57XG4gICAgc2luZ2xldG9uUm91dGVyW2ZpZWxkXSA9ICguLi5hcmdzKT0+e1xuICAgICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKTtcbiAgICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncyk7XG4gICAgfTtcbn0pO1xucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KT0+e1xuICAgIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKT0+e1xuICAgICAgICBfcm91dGVyLmRlZmF1bHQuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncyk9PntcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKDEpfWA7XG4gICAgICAgICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyO1xuICAgICAgICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTtcbmZ1bmN0aW9uIGdldFJvdXRlcigpIHtcbiAgICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9ICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBvbiB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJztcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjtcbn1cbnZhciBfZGVmYXVsdCA9IHNpbmdsZXRvblJvdXRlcjtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xuZnVuY3Rpb24gdXNlUm91dGVyKCkge1xuICAgIHJldHVybiBfcmVhY3QuZGVmYXVsdC51c2VDb250ZXh0KF9yb3V0ZXJDb250ZXh0LlJvdXRlckNvbnRleHQpO1xufVxuZnVuY3Rpb24gY3JlYXRlUm91dGVyKC4uLmFyZ3MpIHtcbiAgICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IF9yb3V0ZXIuZGVmYXVsdCguLi5hcmdzKTtcbiAgICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpPT5jYigpXG4gICAgKTtcbiAgICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXTtcbiAgICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjtcbn1cbmZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXIpIHtcbiAgICBjb25zdCBfcm91dGVyMSA9IHJvdXRlcjtcbiAgICBjb25zdCBpbnN0YW5jZSA9IHtcbiAgICB9O1xuICAgIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpe1xuICAgICAgICBpZiAodHlwZW9mIF9yb3V0ZXIxW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oQXJyYXkuaXNBcnJheShfcm91dGVyMVtwcm9wZXJ0eV0pID8gW10gOiB7XG4gICAgICAgICAgICB9LCBfcm91dGVyMVtwcm9wZXJ0eV0pIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICAgICAgICA7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyMVtwcm9wZXJ0eV07XG4gICAgfVxuICAgIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgICBpbnN0YW5jZS5ldmVudHMgPSBfcm91dGVyLmRlZmF1bHQuZXZlbnRzO1xuICAgIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpPT57XG4gICAgICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzKT0+e1xuICAgICAgICAgICAgcmV0dXJuIF9yb3V0ZXIxW2ZpZWxkXSguLi5hcmdzKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMudXNlSW50ZXJzZWN0aW9uID0gdXNlSW50ZXJzZWN0aW9uO1xudmFyIF9yZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbnZhciBfcmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtcbmNvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyID0gdHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJztcbmZ1bmN0aW9uIHVzZUludGVyc2VjdGlvbih7IHJvb3RNYXJnaW4gLCBkaXNhYmxlZCAgfSkge1xuICAgIGNvbnN0IGlzRGlzYWJsZWQgPSBkaXNhYmxlZCB8fCAhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI7XG4gICAgY29uc3QgdW5vYnNlcnZlID0gKDAsIF9yZWFjdCkudXNlUmVmKCk7XG4gICAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gKDAsIF9yZWFjdCkudXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IHNldFJlZiA9ICgwLCBfcmVhY3QpLnVzZUNhbGxiYWNrKChlbCk9PntcbiAgICAgICAgaWYgKHVub2JzZXJ2ZS5jdXJyZW50KSB7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCgpO1xuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgdmlzaWJsZSkgcmV0dXJuO1xuICAgICAgICBpZiAoZWwgJiYgZWwudGFnTmFtZSkge1xuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSBvYnNlcnZlKGVsLCAoaXNWaXNpYmxlKT0+aXNWaXNpYmxlICYmIHNldFZpc2libGUoaXNWaXNpYmxlKVxuICAgICAgICAgICAgLCB7XG4gICAgICAgICAgICAgICAgcm9vdE1hcmdpblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIGlzRGlzYWJsZWQsXG4gICAgICAgIHJvb3RNYXJnaW4sXG4gICAgICAgIHZpc2libGVcbiAgICBdKTtcbiAgICAoMCwgX3JlYWN0KS51c2VFZmZlY3QoKCk9PntcbiAgICAgICAgaWYgKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgICAgICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaWRsZUNhbGxiYWNrID0gKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT5zZXRWaXNpYmxlKHRydWUpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKCk9PigwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykuY2FuY2VsSWRsZUNhbGxiYWNrKGlkbGVDYWxsYmFjaylcbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIHZpc2libGVcbiAgICBdKTtcbiAgICByZXR1cm4gW1xuICAgICAgICBzZXRSZWYsXG4gICAgICAgIHZpc2libGVcbiAgICBdO1xufVxuZnVuY3Rpb24gb2JzZXJ2ZShlbGVtZW50LCBjYWxsYmFjaywgb3B0aW9ucykge1xuICAgIGNvbnN0IHsgaWQgLCBvYnNlcnZlciAsIGVsZW1lbnRzICB9ID0gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyk7XG4gICAgZWxlbWVudHMuc2V0KGVsZW1lbnQsIGNhbGxiYWNrKTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO1xuICAgIHJldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKSB7XG4gICAgICAgIGVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtcbiAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpO1xuICAgICAgICAvLyBEZXN0cm95IG9ic2VydmVyIHdoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gd2F0Y2g6XG4gICAgICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICBvYnNlcnZlcnMuZGVsZXRlKGlkKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5jb25zdCBvYnNlcnZlcnMgPSBuZXcgTWFwKCk7XG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zKSB7XG4gICAgY29uc3QgaWQgPSBvcHRpb25zLnJvb3RNYXJnaW4gfHwgJyc7XG4gICAgbGV0IGluc3RhbmNlID0gb2JzZXJ2ZXJzLmdldChpZCk7XG4gICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG4gICAgY29uc3QgZWxlbWVudHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpPT57XG4gICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpPT57XG4gICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9IGVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpO1xuICAgICAgICAgICAgY29uc3QgaXNWaXNpYmxlID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwO1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrICYmIGlzVmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGlzVmlzaWJsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sIG9wdGlvbnMpO1xuICAgIG9ic2VydmVycy5zZXQoaWQsIGluc3RhbmNlID0ge1xuICAgICAgICBpZCxcbiAgICAgICAgb2JzZXJ2ZXIsXG4gICAgICAgIGVsZW1lbnRzXG4gICAgfSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtaW50ZXJzZWN0aW9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gd2l0aFJvdXRlcjtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3JvdXRlciA9IHJlcXVpcmUoXCIuL3JvdXRlclwiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmZ1bmN0aW9uIHdpdGhSb3V0ZXIoQ29tcG9zZWRDb21wb25lbnQpIHtcbiAgICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wcykge1xuICAgICAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvc2VkQ29tcG9uZW50LCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIHJvdXRlcjogKDAsIF9yb3V0ZXIpLnVzZVJvdXRlcigpXG4gICAgICAgIH0sIHByb3BzKSkpO1xuICAgIH1cbiAgICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM7XG4gICAgV2l0aFJvdXRlcldyYXBwZXIub3JpZ0dldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50Lm9yaWdHZXRJbml0aWFsUHJvcHM7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nO1xuICAgICAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYDtcbiAgICB9XG4gICAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD13aXRoLXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZ2V0RG9tYWluTG9jYWxlID0gZ2V0RG9tYWluTG9jYWxlO1xuZXhwb3J0cy5hZGRMb2NhbGUgPSBhZGRMb2NhbGU7XG5leHBvcnRzLmRlbExvY2FsZSA9IGRlbExvY2FsZTtcbmV4cG9ydHMuaGFzQmFzZVBhdGggPSBoYXNCYXNlUGF0aDtcbmV4cG9ydHMuYWRkQmFzZVBhdGggPSBhZGRCYXNlUGF0aDtcbmV4cG9ydHMuZGVsQmFzZVBhdGggPSBkZWxCYXNlUGF0aDtcbmV4cG9ydHMuaXNMb2NhbFVSTCA9IGlzTG9jYWxVUkw7XG5leHBvcnRzLmludGVycG9sYXRlQXMgPSBpbnRlcnBvbGF0ZUFzO1xuZXhwb3J0cy5yZXNvbHZlSHJlZiA9IHJlc29sdmVIcmVmO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoID0gcmVxdWlyZShcIi4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2hcIik7XG52YXIgX3JvdXRlTG9hZGVyID0gcmVxdWlyZShcIi4uLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXJcIik7XG52YXIgX2Rlbm9ybWFsaXplUGFnZVBhdGggPSByZXF1aXJlKFwiLi4vLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aFwiKTtcbnZhciBfbm9ybWFsaXplTG9jYWxlUGF0aCA9IHJlcXVpcmUoXCIuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aFwiKTtcbnZhciBfbWl0dCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL21pdHRcIikpO1xudmFyIF91dGlscyA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbnZhciBfaXNEeW5hbWljID0gcmVxdWlyZShcIi4vdXRpbHMvaXMtZHluYW1pY1wiKTtcbnZhciBfcGFyc2VSZWxhdGl2ZVVybCA9IHJlcXVpcmUoXCIuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybFwiKTtcbnZhciBfcXVlcnlzdHJpbmcgPSByZXF1aXJlKFwiLi91dGlscy9xdWVyeXN0cmluZ1wiKTtcbnZhciBfcmVzb2x2ZVJld3JpdGVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlscy9yZXNvbHZlLXJld3JpdGVzXCIpKTtcbnZhciBfcm91dGVNYXRjaGVyID0gcmVxdWlyZShcIi4vdXRpbHMvcm91dGUtbWF0Y2hlclwiKTtcbnZhciBfcm91dGVSZWdleCA9IHJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLXJlZ2V4XCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxubGV0IGRldGVjdERvbWFpbkxvY2FsZTtcbmlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgZGV0ZWN0RG9tYWluTG9jYWxlID0gcmVxdWlyZSgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpLmRldGVjdERvbWFpbkxvY2FsZTtcbn1cbmNvbnN0IGJhc2VQYXRoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCB8fCAnJztcbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgICAgICBjYW5jZWxsZWQ6IHRydWVcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aCwgcHJlZml4KSB7XG4gICAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKSA/IHBhdGggPT09ICcvJyA/ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KSA6IGAke3ByZWZpeH0ke3BhdGhOb1F1ZXJ5SGFzaChwYXRoKSA9PT0gJy8nID8gcGF0aC5zdWJzdHJpbmcoMSkgOiBwYXRofWAgOiBwYXRoO1xufVxuZnVuY3Rpb24gZ2V0RG9tYWluTG9jYWxlKHBhdGgsIGxvY2FsZSwgbG9jYWxlcywgZG9tYWluTG9jYWxlcykge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGxvY2FsZSA9IGxvY2FsZSB8fCAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aCwgbG9jYWxlcykuZGV0ZWN0ZWRMb2NhbGU7XG4gICAgICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHVuZGVmaW5lZCwgbG9jYWxlKTtcbiAgICAgICAgaWYgKGRldGVjdGVkRG9tYWluKSB7XG4gICAgICAgICAgICByZXR1cm4gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke2Jhc2VQYXRoIHx8ICcnfSR7bG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlID8gJycgOiBgLyR7bG9jYWxlfWB9JHtwYXRofWA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5mdW5jdGlvbiBhZGRMb2NhbGUocGF0aCwgbG9jYWxlLCBkZWZhdWx0TG9jYWxlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgY29uc3QgcGF0aG5hbWUgPSBwYXRoTm9RdWVyeUhhc2gocGF0aCk7XG4gICAgICAgIGNvbnN0IHBhdGhMb3dlciA9IHBhdGhuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IGxvY2FsZUxvd2VyID0gbG9jYWxlICYmIGxvY2FsZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICByZXR1cm4gbG9jYWxlICYmIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJiAhcGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlTG93ZXIgKyAnLycpICYmIHBhdGhMb3dlciAhPT0gJy8nICsgbG9jYWxlTG93ZXIgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSkgOiBwYXRoO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIGRlbExvY2FsZShwYXRoLCBsb2NhbGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBjb25zdCBwYXRobmFtZSA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtcbiAgICAgICAgY29uc3QgcGF0aExvd2VyID0gcGF0aG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgbG9jYWxlTG93ZXIgPSBsb2NhbGUgJiYgbG9jYWxlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiBsb2NhbGUgJiYgKHBhdGhMb3dlci5zdGFydHNXaXRoKCcvJyArIGxvY2FsZUxvd2VyICsgJy8nKSB8fCBwYXRoTG93ZXIgPT09ICcvJyArIGxvY2FsZUxvd2VyKSA/IChwYXRobmFtZS5sZW5ndGggPT09IGxvY2FsZS5sZW5ndGggKyAxID8gJy8nIDogJycpICsgcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpIDogcGF0aDtcbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG5mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aCkge1xuICAgIGNvbnN0IHF1ZXJ5SW5kZXggPSBwYXRoLmluZGV4T2YoJz8nKTtcbiAgICBjb25zdCBoYXNoSW5kZXggPSBwYXRoLmluZGV4T2YoJyMnKTtcbiAgICBpZiAocXVlcnlJbmRleCA+IC0xIHx8IGhhc2hJbmRleCA+IC0xKSB7XG4gICAgICAgIHBhdGggPSBwYXRoLnN1YnN0cmluZygwLCBxdWVyeUluZGV4ID4gLTEgPyBxdWVyeUluZGV4IDogaGFzaEluZGV4KTtcbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG5mdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoKSB7XG4gICAgcGF0aCA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtcbiAgICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKTtcbn1cbmZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGgpIHtcbiAgICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICAgIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKTtcbn1cbmZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGgpIHtcbiAgICBwYXRoID0gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpO1xuICAgIGlmICghcGF0aC5zdGFydHNXaXRoKCcvJykpIHBhdGggPSBgLyR7cGF0aH1gO1xuICAgIHJldHVybiBwYXRoO1xufVxuZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmwpIHtcbiAgICAvLyBwcmV2ZW50IGEgaHlkcmF0aW9uIG1pc21hdGNoIG9uIGhyZWYgZm9yIHVybCB3aXRoIGFuY2hvciByZWZzXG4gICAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykgfHwgdXJsLnN0YXJ0c1dpdGgoJyMnKSB8fCB1cmwuc3RhcnRzV2l0aCgnPycpKSByZXR1cm4gdHJ1ZTtcbiAgICB0cnkge1xuICAgICAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICAgICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSAoMCwgX3V0aWxzKS5nZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgICAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbik7XG4gICAgICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKTtcbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5mdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSkge1xuICAgIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnO1xuICAgIGNvbnN0IGR5bmFtaWNSZWdleCA9ICgwLCBfcm91dGVSZWdleCkuZ2V0Um91dGVSZWdleChyb3V0ZSk7XG4gICAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHM7XG4gICAgY29uc3QgZHluYW1pY01hdGNoZXMgPSAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gKDAsIF9yb3V0ZU1hdGNoZXIpLmdldFJvdXRlTWF0Y2hlcihkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpIDogJycpIHx8IC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeTtcbiAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlO1xuICAgIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpO1xuICAgIGlmICghcGFyYW1zLmV2ZXJ5KChwYXJhbSk9PntcbiAgICAgICAgbGV0IHZhbHVlID0gZHluYW1pY01hdGNoZXNbcGFyYW1dIHx8ICcnO1xuICAgICAgICBjb25zdCB7IHJlcGVhdCAsIG9wdGlvbmFsICB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV07XG4gICAgICAgIC8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuICAgICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWA7XG4gICAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbXG4gICAgICAgICAgICB2YWx1ZVxuICAgICAgICBdO1xuICAgICAgICByZXR1cm4gKG9wdGlvbmFsIHx8IHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSAmJiAvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbiAgICAgICAgKGludGVycG9sYXRlZFJvdXRlID0gaW50ZXJwb2xhdGVkUm91dGUucmVwbGFjZShyZXBsYWNlZCwgcmVwZWF0ID8gdmFsdWUubWFwKC8vIHRoZXNlIHZhbHVlcyBzaG91bGQgYmUgZnVsbHkgZW5jb2RlZCBpbnN0ZWFkIG9mIGp1c3RcbiAgICAgICAgLy8gcGF0aCBkZWxpbWl0ZXIgZXNjYXBlZCBzaW5jZSB0aGV5IGFyZSBiZWluZyBpbnNlcnRlZFxuICAgICAgICAvLyBpbnRvIHRoZSBVUkwgYW5kIHdlIGV4cGVjdCBVUkwgZW5jb2RlZCBzZWdtZW50c1xuICAgICAgICAvLyB3aGVuIHBhcnNpbmcgZHluYW1pYyByb3V0ZSBwYXJhbXNcbiAgICAgICAgKHNlZ21lbnQpPT5lbmNvZGVVUklDb21wb25lbnQoc2VnbWVudClcbiAgICAgICAgKS5qb2luKCcvJykgOiBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpKSB8fCAnLycpO1xuICAgIH0pKSB7XG4gICAgICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcbiAgICAgICAgO1xuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGFyYW1zLFxuICAgICAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlXG4gICAgfTtcbn1cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKSB7XG4gICAgY29uc3QgZmlsdGVyZWRRdWVyeSA9IHtcbiAgICB9O1xuICAgIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpPT57XG4gICAgICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV07XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZmlsdGVyZWRRdWVyeTtcbn1cbmZ1bmN0aW9uIHJlc29sdmVIcmVmKHJvdXRlciwgaHJlZiwgcmVzb2x2ZUFzKSB7XG4gICAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgICBsZXQgYmFzZTtcbiAgICBsZXQgdXJsQXNTdHJpbmcgPSB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZik7XG4gICAgLy8gcmVwZWF0ZWQgc2xhc2hlcyBhbmQgYmFja3NsYXNoZXMgaW4gdGhlIFVSTCBhcmUgY29uc2lkZXJlZFxuICAgIC8vIGludmFsaWQgYW5kIHdpbGwgbmV2ZXIgbWF0Y2ggYSBOZXh0LmpzIHBhZ2UvZmlsZVxuICAgIGNvbnN0IHVybFByb3RvTWF0Y2ggPSB1cmxBc1N0cmluZy5tYXRjaCgvXlthLXpBLVpdezEsfTpcXC9cXC8vKTtcbiAgICBjb25zdCB1cmxBc1N0cmluZ05vUHJvdG8gPSB1cmxQcm90b01hdGNoID8gdXJsQXNTdHJpbmcuc3Vic3RyKHVybFByb3RvTWF0Y2hbMF0ubGVuZ3RoKSA6IHVybEFzU3RyaW5nO1xuICAgIGNvbnN0IHVybFBhcnRzID0gdXJsQXNTdHJpbmdOb1Byb3RvLnNwbGl0KCc/Jyk7XG4gICAgaWYgKCh1cmxQYXJ0c1swXSB8fCAnJykubWF0Y2goLyhcXC9cXC98XFxcXCkvKSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIG5leHQvcm91dGVyOiAke3VybEFzU3RyaW5nfSwgcmVwZWF0ZWQgZm9yd2FyZC1zbGFzaGVzICgvLykgb3IgYmFja3NsYXNoZXMgXFxcXCBhcmUgbm90IHZhbGlkIGluIHRoZSBocmVmYCk7XG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRVcmwgPSAoMCwgX3V0aWxzKS5ub3JtYWxpemVSZXBlYXRlZFNsYXNoZXModXJsQXNTdHJpbmdOb1Byb3RvKTtcbiAgICAgICAgdXJsQXNTdHJpbmcgPSAodXJsUHJvdG9NYXRjaCA/IHVybFByb3RvTWF0Y2hbMF0gOiAnJykgKyBub3JtYWxpemVkVXJsO1xuICAgIH1cbiAgICAvLyBSZXR1cm4gYmVjYXVzZSBpdCBjYW5ub3QgYmUgcm91dGVkIGJ5IHRoZSBOZXh0LmpzIHJvdXRlclxuICAgIGlmICghaXNMb2NhbFVSTCh1cmxBc1N0cmluZykpIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVBcyA/IFtcbiAgICAgICAgICAgIHVybEFzU3RyaW5nXG4gICAgICAgIF0gOiB1cmxBc1N0cmluZztcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgYmFzZSA9IG5ldyBVUkwodXJsQXNTdHJpbmcuc3RhcnRzV2l0aCgnIycpID8gcm91dGVyLmFzUGF0aCA6IHJvdXRlci5wYXRobmFtZSwgJ2h0dHA6Ly9uJyk7XG4gICAgfSBjYXRjaCAoXykge1xuICAgICAgICAvLyBmYWxsYmFjayB0byAvIGZvciBpbnZhbGlkIGFzUGF0aCB2YWx1ZXMgZS5nLiAvL1xuICAgICAgICBiYXNlID0gbmV3IFVSTCgnLycsICdodHRwOi8vbicpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpO1xuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpO1xuICAgICAgICBsZXQgaW50ZXJwb2xhdGVkQXMgPSAnJztcbiAgICAgICAgaWYgKCgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiYgZmluYWxVcmwuc2VhcmNoUGFyYW1zICYmIHJlc29sdmVBcykge1xuICAgICAgICAgICAgY29uc3QgcXVlcnkgPSAoMCwgX3F1ZXJ5c3RyaW5nKS5zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KGZpbmFsVXJsLnNlYXJjaFBhcmFtcyk7XG4gICAgICAgICAgICBjb25zdCB7IHJlc3VsdCAsIHBhcmFtcyAgfSA9IGludGVycG9sYXRlQXMoZmluYWxVcmwucGF0aG5hbWUsIGZpbmFsVXJsLnBhdGhuYW1lLCBxdWVyeSk7XG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiByZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgIGhhc2g6IGZpbmFsVXJsLmhhc2gsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgICAgICBjb25zdCByZXNvbHZlZEhyZWYgPSBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKSA6IGZpbmFsVXJsLmhyZWY7XG4gICAgICAgIHJldHVybiByZXNvbHZlQXMgPyBbXG4gICAgICAgICAgICByZXNvbHZlZEhyZWYsXG4gICAgICAgICAgICBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZcbiAgICAgICAgXSA6IHJlc29sdmVkSHJlZjtcbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlQXMgPyBbXG4gICAgICAgICAgICB1cmxBc1N0cmluZ1xuICAgICAgICBdIDogdXJsQXNTdHJpbmc7XG4gICAgfVxufVxuZnVuY3Rpb24gc3RyaXBPcmlnaW4odXJsKSB7XG4gICAgY29uc3Qgb3JpZ2luID0gKDAsIF91dGlscykuZ2V0TG9jYXRpb25PcmlnaW4oKTtcbiAgICByZXR1cm4gdXJsLnN0YXJ0c1dpdGgob3JpZ2luKSA/IHVybC5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCkgOiB1cmw7XG59XG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyLCB1cmwsIGFzKSB7XG4gICAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gICAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgICBsZXQgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihyb3V0ZXIsIHVybCwgdHJ1ZSk7XG4gICAgY29uc3Qgb3JpZ2luID0gKDAsIF91dGlscykuZ2V0TG9jYXRpb25PcmlnaW4oKTtcbiAgICBjb25zdCBocmVmSGFkT3JpZ2luID0gcmVzb2x2ZWRIcmVmLnN0YXJ0c1dpdGgob3JpZ2luKTtcbiAgICBjb25zdCBhc0hhZE9yaWdpbiA9IHJlc29sdmVkQXMgJiYgcmVzb2x2ZWRBcy5zdGFydHNXaXRoKG9yaWdpbik7XG4gICAgcmVzb2x2ZWRIcmVmID0gc3RyaXBPcmlnaW4ocmVzb2x2ZWRIcmVmKTtcbiAgICByZXNvbHZlZEFzID0gcmVzb2x2ZWRBcyA/IHN0cmlwT3JpZ2luKHJlc29sdmVkQXMpIDogcmVzb2x2ZWRBcztcbiAgICBjb25zdCBwcmVwYXJlZFVybCA9IGhyZWZIYWRPcmlnaW4gPyByZXNvbHZlZEhyZWYgOiBhZGRCYXNlUGF0aChyZXNvbHZlZEhyZWYpO1xuICAgIGNvbnN0IHByZXBhcmVkQXMgPSBhcyA/IHN0cmlwT3JpZ2luKHJlc29sdmVIcmVmKHJvdXRlciwgYXMpKSA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmO1xuICAgIHJldHVybiB7XG4gICAgICAgIHVybDogcHJlcGFyZWRVcmwsXG4gICAgICAgIGFzOiBhc0hhZE9yaWdpbiA/IHByZXBhcmVkQXMgOiBhZGRCYXNlUGF0aChwcmVwYXJlZEFzKVxuICAgIH07XG59XG5mdW5jdGlvbiByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLCBwYWdlcykge1xuICAgIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKCgwLCBfZGVub3JtYWxpemVQYWdlUGF0aCkuZGVub3JtYWxpemVQYWdlUGF0aChwYXRobmFtZSkpO1xuICAgIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgICAgIHJldHVybiBwYXRobmFtZTtcbiAgICB9XG4gICAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICAgIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSkpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgICBwYWdlcy5zb21lKChwYWdlKT0+e1xuICAgICAgICAgICAgaWYgKCgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShwYWdlKSAmJiAoMCwgX3JvdXRlUmVnZXgpLmdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lKSkge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lID0gcGFnZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKTtcbn1cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID0gcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5ICYmICEhZnVuY3Rpb24oKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IHYgPSAnX19uZXh0JztcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh2LCB2KSwgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh2KSwgdHJ1ZTtcbiAgICB9IGNhdGNoIChuKSB7XG4gICAgfVxufSgpO1xuY29uc3QgU1NHX0RBVEFfTk9UX0ZPVU5EID0gU3ltYm9sKCdTU0dfREFUQV9OT1RfRk9VTkQnKTtcbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cykge1xuICAgIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAgICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgICAgICAvL1xuICAgICAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgICAgIC8vID4gb3B0aW9uLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAgICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidcbiAgICB9KS50aGVuKChyZXMpPT57XG4gICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLm5vdEZvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdEZvdW5kOiBTU0dfREFUQV9OT1RfRk9VTkRcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlcikge1xuICAgIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAgICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAgICAgLy8gbG9vcC5cbiAgICAgICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgICAgICAgKDAsIF9yb3V0ZUxvYWRlcikubWFya0Fzc2V0RXJyb3IoZXJyKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBlcnI7XG4gICAgfSk7XG59XG5jbGFzcyBSb3V0ZXIge1xuICAgIGNvbnN0cnVjdG9yKHBhdGhuYW1lMSwgcXVlcnkxLCBhczEsIHsgaW5pdGlhbFByb3BzICwgcGFnZUxvYWRlciAsIEFwcCAsIHdyYXBBcHAgLCBDb21wb25lbnQ6IENvbXBvbmVudDEgLCBlcnI6IGVycjEgLCBzdWJzY3JpcHRpb24gLCBpc0ZhbGxiYWNrICwgbG9jYWxlICwgbG9jYWxlcyAsIGRlZmF1bHRMb2NhbGUgLCBkb21haW5Mb2NhbGVzICwgaXNQcmV2aWV3ICB9KXtcbiAgICAgICAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgICAgICAgdGhpcy5zZGMgPSB7XG4gICAgICAgIH07XG4gICAgICAgIC8vIEluLWZsaWdodCBTZXJ2ZXIgRGF0YSBSZXF1ZXN0cywgZm9yIGRlZHVwaW5nXG4gICAgICAgIHRoaXMuc2RyID0ge1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9pZHggPSAwO1xuICAgICAgICB0aGlzLm9uUG9wU3RhdGUgPSAoZSk9PntcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZTtcbiAgICAgICAgICAgIGlmICghc3RhdGUpIHtcbiAgICAgICAgICAgICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgICAgICAgICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgICAgICAgICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgICAgICAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgICAgICAgICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgICAgICAgICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAgICAgICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZTogcGF0aG5hbWUxICwgcXVlcnk6IHF1ZXJ5MSAgfSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUxKSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5MVxuICAgICAgICAgICAgICAgIH0pLCAoMCwgX3V0aWxzKS5nZXRVUkwoKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZm9yY2VkU2Nyb2xsO1xuICAgICAgICAgICAgY29uc3QgeyB1cmwgLCBhczogYXMxICwgb3B0aW9ucyAsIGlkeCAgfSA9IHN0YXRlO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2lkeCAhPT0gaWR4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTbmFwc2hvdCBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LCBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IHNlbGYucGFnZVhPZmZzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IHNlbGYucGFnZVlPZmZzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBSZXN0b3JlIG9sZCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHYgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyBpZHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IEpTT04ucGFyc2Uodik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2lkeCA9IGlkeDtcbiAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMSAgfSA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybCh1cmwpO1xuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgICAgICAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICAgICAgICAgIGlmICh0aGlzLmlzU3NyICYmIGFzMSA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUxID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgICAgICAgICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICAgICAgICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhczEsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgfSwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgICAgICAgICAgIGxvY2FsZTogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgICB9KSwgZm9yY2VkU2Nyb2xsKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgICAgIHRoaXMucm91dGUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lMSk7XG4gICAgICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSB7XG4gICAgICAgIH07XG4gICAgICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAgICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAgICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgICAgICBpZiAocGF0aG5hbWUxICE9PSAnL19lcnJvcicpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgICAgICAgICBDb21wb25lbnQ6IENvbXBvbmVudDEsXG4gICAgICAgICAgICAgICAgaW5pdGlhbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICAgICAgICAgIGVycjogZXJyMSxcbiAgICAgICAgICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgICAgICAgIENvbXBvbmVudDogQXBwLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IFtdXG4gICAgICAgIH07XG4gICAgICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50cztcbiAgICAgICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlcjtcbiAgICAgICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lMTtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5MTtcbiAgICAgICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAgICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICAgICAgY29uc3QgYXV0b0V4cG9ydER5bmFtaWMgPSAoMCwgX2lzRHluYW1pYykuaXNEeW5hbWljUm91dGUocGF0aG5hbWUxKSAmJiBzZWxmLl9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydDtcbiAgICAgICAgdGhpcy5hc1BhdGggPSBhdXRvRXhwb3J0RHluYW1pYyA/IHBhdGhuYW1lMSA6IGFzMTtcbiAgICAgICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoO1xuICAgICAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcDtcbiAgICAgICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgICAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgICAgICB0aGlzLmlzU3NyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFjaztcbiAgICAgICAgdGhpcy5pc1JlYWR5ID0gISEoc2VsZi5fX05FWFRfREFUQV9fLmdzc3AgfHwgc2VsZi5fX05FWFRfREFUQV9fLmdpcCB8fCBzZWxmLl9fTkVYVF9EQVRBX18uYXBwR2lwICYmICFzZWxmLl9fTkVYVF9EQVRBX18uZ3NwIHx8ICFhdXRvRXhwb3J0RHluYW1pYyAmJiAhc2VsZi5sb2NhdGlvbi5zZWFyY2ggJiYgIXByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpO1xuICAgICAgICB0aGlzLmlzUHJldmlldyA9ICEhaXNQcmV2aWV3O1xuICAgICAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gZmFsc2U7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZTtcbiAgICAgICAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXM7XG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGUgPSBkZWZhdWx0TG9jYWxlO1xuICAgICAgICAgICAgdGhpcy5kb21haW5Mb2NhbGVzID0gZG9tYWluTG9jYWxlcztcbiAgICAgICAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSAhIWRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLCBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAgICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgICAgICAgaWYgKGFzMS5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAgICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWYgPSBhczEgIT09IHBhdGhuYW1lMTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZTEpLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogcXVlcnkxXG4gICAgICAgICAgICAgICAgfSksICgwLCBfdXRpbHMpLmdldFVSTCgpLCBvcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSk7XG4gICAgICAgICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICAgICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZWxvYWQoKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi8gYmFjaygpIHtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICAgIH1cbiAgICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovIHB1c2godXJsLCBhcywgb3B0aW9ucyA9IHtcbiAgICB9KSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgICAgICAvLyBUT0RPOiByZW1vdmUgaW4gdGhlIGZ1dHVyZSB3aGVuIHdlIHVwZGF0ZSBoaXN0b3J5IGJlZm9yZSByb3V0ZSBjaGFuZ2VcbiAgICAgICAgICAgIC8vIGlzIGNvbXBsZXRlLCBhcyB0aGUgcG9wc3RhdGUgZXZlbnQgc2hvdWxkIGhhbmRsZSB0aGlzIGNhcHR1cmUuXG4gICAgICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAvLyBTbmFwc2hvdCBzY3JvbGwgcG9zaXRpb24gcmlnaHQgYmVmb3JlIG5hdmlnYXRpbmcgdG8gYSBuZXcgcGFnZTpcbiAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LCBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBzZWxmLnBhZ2VYT2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgeTogc2VsZi5wYWdlWU9mZnNldFxuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAge1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAoeyB1cmwgLCBhcyAgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi8gcmVwbGFjZSh1cmwsIGFzLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgKHsgdXJsICwgYXMgIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpO1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBhc3luYyBjaGFuZ2UobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zLCBmb3JjZWRTY3JvbGwpIHtcbiAgICAgICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNob3VsZFJlc29sdmVIcmVmID0gdXJsID09PSBhcyB8fCBvcHRpb25zLl9oIHx8IG9wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmO1xuICAgICAgICAvLyBmb3Igc3RhdGljIHBhZ2VzIHdpdGggcXVlcnkgcGFyYW1zIGluIHRoZSBVUkwgd2UgZGVsYXlcbiAgICAgICAgLy8gbWFya2luZyB0aGUgcm91dGVyIHJlYWR5IHVudGlsIGFmdGVyIHRoZSBxdWVyeSBpcyB1cGRhdGVkXG4gICAgICAgIGlmIChvcHRpb25zLl9oKSB7XG4gICAgICAgICAgICB0aGlzLmlzUmVhZHkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByZXZMb2NhbGUgPSB0aGlzLmxvY2FsZTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgIHRoaXMubG9jYWxlID0gb3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlID8gdGhpcy5kZWZhdWx0TG9jYWxlIDogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5sb2NhbGU7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMubG9jYWxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMubG9jYWxlID0gdGhpcy5sb2NhbGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRBcyA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZXMpO1xuICAgICAgICAgICAgaWYgKGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGU7XG4gICAgICAgICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSk7XG4gICAgICAgICAgICAgICAgYXMgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcyk7XG4gICAgICAgICAgICAgICAgdXJsID0gYWRkQmFzZVBhdGgoKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKGhhc0Jhc2VQYXRoKHVybCkgPyBkZWxCYXNlUGF0aCh1cmwpIDogdXJsLCB0aGlzLmxvY2FsZXMpLnBhdGhuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBkaWROYXZpZ2F0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlZjtcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgbG9jYWxlIGlzbid0IGNvbmZpZ3VyZWQgaGFyZCBuYXZpZ2F0ZSB0byBzaG93IDQwNCBwYWdlXG4gICAgICAgICAgICAgICAgaWYgKCEoKHJlZiA9IHRoaXMubG9jYWxlcykgPT09IG51bGwgfHwgcmVmID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWYuaW5jbHVkZXModGhpcy5sb2NhbGUpKSkge1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZExvY2FsZShwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAgICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKHRoaXMuZG9tYWluTG9jYWxlcywgdW5kZWZpbmVkLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxuICAgICAgICAgICAgICAgIC8vIGNvcnJlY3QgZG9tYWluXG4gICAgICAgICAgICAgICAgaWYgKCFkaWROYXZpZ2F0ZSAmJiBkZXRlY3RlZERvbWFpbiAmJiB0aGlzLmlzTG9jYWxlRG9tYWluICYmIHNlbGYubG9jYXRpb24uaG9zdG5hbWUgIT09IGRldGVjdGVkRG9tYWluLmRvbWFpbikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhc05vQmFzZVBhdGggPSBkZWxCYXNlUGF0aChhcyk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke2FkZEJhc2VQYXRoKGAke3RoaXMubG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlID8gJycgOiBgLyR7dGhpcy5sb2NhbGV9YH0ke2FzTm9CYXNlUGF0aCA9PT0gJy8nID8gJycgOiBhc05vQmFzZVBhdGh9YCB8fCAnLycpfWA7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGlkTmF2aWdhdGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCk9PntcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIW9wdGlvbnMuX2gpIHtcbiAgICAgICAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgICAgIGlmIChfdXRpbHMuU1QpIHtcbiAgICAgICAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBzaGFsbG93ID1mYWxzZSAgfSA9IG9wdGlvbnM7XG4gICAgICAgIGNvbnN0IHJvdXRlUHJvcHMgPSB7XG4gICAgICAgICAgICBzaGFsbG93XG4gICAgICAgIH07XG4gICAgICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICAgICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlLCByb3V0ZVByb3BzKTtcbiAgICAgICAgfVxuICAgICAgICBhcyA9IGFkZEJhc2VQYXRoKGFkZExvY2FsZShoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcywgb3B0aW9ucy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSkpO1xuICAgICAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsIHRoaXMubG9jYWxlKTtcbiAgICAgICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzO1xuICAgICAgICBsZXQgbG9jYWxlQ2hhbmdlID0gcHJldkxvY2FsZSAhPT0gdGhpcy5sb2NhbGU7XG4gICAgICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cbiAgICAgICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgICAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgICAgICBpZiAoIW9wdGlvbnMuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSAmJiAhbG9jYWxlQ2hhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBcztcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcyk7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0sIG51bGwpO1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcGFyc2VkID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHVybCk7XG4gICAgICAgIGxldCB7IHBhdGhuYW1lOiBwYXRobmFtZTEgLCBxdWVyeTogcXVlcnkxICB9ID0gcGFyc2VkO1xuICAgICAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgICAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgICAgICBsZXQgcGFnZXMsIHJld3JpdGVzO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTtcbiAgICAgICAgICAgICh7IF9fcmV3cml0ZXM6IHJld3JpdGVzICB9ID0gYXdhaXQgKDAsIF9yb3V0ZUxvYWRlcikuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyMSkge1xuICAgICAgICAgICAgLy8gSWYgd2UgZmFpbCB0byByZXNvbHZlIHRoZSBwYWdlIGxpc3Qgb3IgY2xpZW50LWJ1aWxkIG1hbmlmZXN0LCB3ZSBtdXN0XG4gICAgICAgICAgICAvLyBkbyBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb246XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgICAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICAgICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykgJiYgIWxvY2FsZUNoYW5nZSkge1xuICAgICAgICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSc7XG4gICAgICAgIH1cbiAgICAgICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAgICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgICAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzO1xuICAgICAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAgICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICAgICAgcGF0aG5hbWUxID0gcGF0aG5hbWUxID8gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZTEpKSA6IHBhdGhuYW1lMTtcbiAgICAgICAgaWYgKHNob3VsZFJlc29sdmVIcmVmICYmIHBhdGhuYW1lMSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICAgICAgICBvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZiA9IHRydWU7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhcy5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9ICgwLCBfcmVzb2x2ZVJld3JpdGVzKS5kZWZhdWx0KGFkZEJhc2VQYXRoKGFkZExvY2FsZShjbGVhbmVkQXMsIHRoaXMubG9jYWxlKSksIHBhZ2VzLCByZXdyaXRlcywgcXVlcnkxLCAocCk9PnJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpXG4gICAgICAgICAgICAgICAgLCB0aGlzLmxvY2FsZXMpO1xuICAgICAgICAgICAgICAgIHJlc29sdmVkQXMgPSByZXdyaXRlc1Jlc3VsdC5hc1BhdGg7XG4gICAgICAgICAgICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgICAgICAgICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lMSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGF0aG5hbWUxKTtcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUxLCBwYWdlcyk7XG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUxKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lMSA9IHBhcnNlZC5wYXRobmFtZTtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGF0aG5hbWUxKTtcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgcm91dGUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lMSk7XG4gICAgICAgIGlmICghaXNMb2NhbFVSTChhcykpIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGhyZWY6IFwiJHt1cmx9XCIgYW5kIGFzOiBcIiR7YXN9XCIsIHJlY2VpdmVkIHJlbGF0aXZlIGhyZWYgYW5kIGV4dGVybmFsIGFzYCArIGBcXG5TZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9pbnZhbGlkLXJlbGF0aXZlLXVybC1leHRlcm5hbC1hc2ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhcztcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgIGlmICgoMCwgX2lzRHluYW1pYykuaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRBcyA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKTtcbiAgICAgICAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZTtcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSAoMCwgX3JvdXRlUmVnZXgpLmdldFJvdXRlUmVnZXgocm91dGUpO1xuICAgICAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9ICgwLCBfcm91dGVNYXRjaGVyKS5nZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSk7XG4gICAgICAgICAgICBjb25zdCBzaG91bGRJbnRlcnBvbGF0ZSA9IHJvdXRlID09PSBhc1BhdGhuYW1lO1xuICAgICAgICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZSA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5MSkgOiB7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcigocGFyYW0pPT4hcXVlcnkxW3BhcmFtXVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGAke3Nob3VsZEludGVycG9sYXRlID8gYEludGVycG9sYXRpbmcgaHJlZmAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICsgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKChzaG91bGRJbnRlcnBvbGF0ZSA/IGBUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArIGBSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzLyR7c2hvdWxkSW50ZXJwb2xhdGUgPyAnaHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCcgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgICAgICAgICBhcyA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgICAgIH0sIHBhcnNlZEFzLCB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnkxLCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMpXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnkxLCByb3V0ZU1hdGNoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgcmVmLCByZWYxO1xuICAgICAgICAgICAgbGV0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZTEsIHF1ZXJ5MSwgYXMsIHJlc29sdmVkQXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgbGV0IHsgZXJyb3IgLCBwcm9wcyAsIF9fTl9TU0cgLCBfX05fU1NQICB9ID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICAgICAgICBpZiAoKF9fTl9TU0cgfHwgX19OX1NTUCkgJiYgcHJvcHMpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHMucGFnZVByb3BzICYmIHByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1QpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSBwcm9wcy5wYWdlUHJvcHMuX19OX1JFRElSRUNUO1xuICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAgICAgICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgICAgICAgICAgICAgIC8vIGl0J3Mgbm90XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkSHJlZi5wYXRobmFtZSwgcGFnZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeyB1cmw6IG5ld1VybCAsIGFzOiBuZXdBcyAgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCBkZXN0aW5hdGlvbiwgZGVzdGluYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKG1ldGhvZCwgbmV3VXJsLCBuZXdBcywgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmlzUHJldmlldyA9ICEhcHJvcHMuX19OX1BSRVZJRVc7XG4gICAgICAgICAgICAgICAgLy8gaGFuZGxlIFNTRyBkYXRhIDQwNFxuICAgICAgICAgICAgICAgIGlmIChwcm9wcy5ub3RGb3VuZCA9PT0gU1NHX0RBVEFfTk9UX0ZPVU5EKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBub3RGb3VuZFJvdXRlO1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnLzQwNCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvNDA0JztcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvX2Vycm9yJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhub3RGb3VuZFJvdXRlLCBub3RGb3VuZFJvdXRlLCBxdWVyeTEsIGFzLCByZXNvbHZlZEFzLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFsbG93OiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFwcENvbXAgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50O1xuICAgICAgICAgICAgICAgIHdpbmRvdy5uZXh0LmlzUHJlcmVuZGVyZWQgPSBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmICFyb3V0ZUluZm8uQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25zLl9oICYmIHBhdGhuYW1lMSA9PT0gJy9fZXJyb3InICYmICgocmVmID0gc2VsZi5fX05FWFRfREFUQV9fLnByb3BzKSA9PT0gbnVsbCB8fCByZWYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChyZWYxID0gcmVmLnBhZ2VQcm9wcykgPT09IG51bGwgfHwgcmVmMSA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVmMS5zdGF0dXNDb2RlKSA9PT0gNTAwICYmIChwcm9wcyA9PT0gbnVsbCB8fCBwcm9wcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcHJvcHMucGFnZVByb3BzKSkge1xuICAgICAgICAgICAgICAgIC8vIGVuc3VyZSBzdGF0dXNDb2RlIGlzIHN0aWxsIGNvcnJlY3QgZm9yIHN0YXRpYyA1MDAgcGFnZVxuICAgICAgICAgICAgICAgIC8vIHdoZW4gdXBkYXRpbmcgcXVlcnkgaW5mb3JtYXRpb25cbiAgICAgICAgICAgICAgICBwcm9wcy5wYWdlUHJvcHMuc3RhdHVzQ29kZSA9IDUwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHNoYWxsb3cgcm91dGluZyBpcyBvbmx5IGFsbG93ZWQgZm9yIHNhbWUgcGFnZSBVUkwgY2hhbmdlcy5cbiAgICAgICAgICAgIGNvbnN0IGlzVmFsaWRTaGFsbG93Um91dGUgPSBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGU7XG4gICAgICAgICAgICB2YXIgX3Njcm9sbDtcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZFNjcm9sbCA9IChfc2Nyb2xsID0gb3B0aW9ucy5zY3JvbGwpICE9PSBudWxsICYmIF9zY3JvbGwgIT09IHZvaWQgMCA/IF9zY3JvbGwgOiAhaXNWYWxpZFNoYWxsb3dSb3V0ZTtcbiAgICAgICAgICAgIGNvbnN0IHJlc2V0U2Nyb2xsID0gc2hvdWxkU2Nyb2xsID8ge1xuICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgeTogMFxuICAgICAgICAgICAgfSA6IG51bGw7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUxLCBxdWVyeTEsIGNsZWFuZWRBcywgcm91dGVJbmZvLCBmb3JjZWRTY3JvbGwgIT09IG51bGwgJiYgZm9yY2VkU2Nyb2xsICE9PSB2b2lkIDAgPyBmb3JjZWRTY3JvbGwgOiByZXNldFNjcm9sbCkuY2F0Y2goKGUpPT57XG4gICAgICAgICAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGU7XG4gICAgICAgICAgICAgICAgZWxzZSB0aHJvdyBlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubG9jYWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nID0gdGhpcy5sb2NhbGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gY2F0Y2ggKGVycjEpIHtcbiAgICAgICAgICAgIGlmIChlcnIxLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IGVycjE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgKDAsIF91dGlscykuZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICAgICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93O1xuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXSh7XG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGFzLFxuICAgICAgICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICAgICAgICAgIGlkeDogdGhpcy5faWR4ID0gbWV0aG9kICE9PSAncHVzaFN0YXRlJyA/IHRoaXMuX2lkeCA6IHRoaXMuX2lkeCArIDFcbiAgICAgICAgICAgIH0sIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICAgICAnJywgYXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcywgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKDAsIF9yb3V0ZUxvYWRlcikuaXNBc3NldEVycm9yKGVycikgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgICAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcbiAgICAgICAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhcztcbiAgICAgICAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgICAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IENvbXBvbmVudDE7XG4gICAgICAgICAgICBsZXQgc3R5bGVTaGVldHM7XG4gICAgICAgICAgICBsZXQgcHJvcHM7XG4gICAgICAgICAgICBpZiAodHlwZW9mIENvbXBvbmVudDEgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBzdHlsZVNoZWV0cyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAoeyBwYWdlOiBDb21wb25lbnQxICwgc3R5bGVTaGVldHMgIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvID0ge1xuICAgICAgICAgICAgICAgIHByb3BzLFxuICAgICAgICAgICAgICAgIENvbXBvbmVudDogQ29tcG9uZW50MSxcbiAgICAgICAgICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgZXJyb3I6IGVyclxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICghcm91dGVJbmZvLnByb3BzKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50MSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKTtcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByb3V0ZUluZm87XG4gICAgICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBnZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJlc29sdmVkQXMsIHJvdXRlUHJvcHMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXTtcbiAgICAgICAgICAgIGlmIChyb3V0ZVByb3BzLnNoYWxsb3cgJiYgZXhpc3RpbmdSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXhpc3RpbmdSb3V0ZUluZm87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSBleGlzdGluZ1JvdXRlSW5mbyAmJiAnaW5pdGlhbCcgaW4gZXhpc3RpbmdSb3V0ZUluZm8gPyB1bmRlZmluZWQgOiBleGlzdGluZ1JvdXRlSW5mbztcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mbyA/IGNhY2hlZFJvdXRlSW5mbyA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcyk9Pih7XG4gICAgICAgICAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCB7IENvbXBvbmVudDogQ29tcG9uZW50MSAsIF9fTl9TU0cgLCBfX05fU1NQICB9ID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSAgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50MSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBkYXRhSHJlZjtcbiAgICAgICAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZigoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeVxuICAgICAgICAgICAgICAgIH0pLCByZXNvbHZlZEFzLCBfX05fU1NHLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGEoKCk9Pl9fTl9TU0cgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKSA6IF9fTl9TU1AgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmKSA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudDEsIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsZTogdGhpcy5sb2NhbGUsXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsZXM6IHRoaXMubG9jYWxlcyxcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdExvY2FsZTogdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wcztcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICByZXR1cm4gcm91dGVJbmZvO1xuICAgICAgICB9IGNhdGNoIChlcnIyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXQocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIGRhdGEsIHJlc2V0U2Nyb2xsKSB7XG4gICAgICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJvdXRlID0gcm91dGU7XG4gICAgICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGFzO1xuICAgICAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpO1xuICAgIH1cbiAgICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovIGJlZm9yZVBvcFN0YXRlKGNiKSB7XG4gICAgICAgIHRoaXMuX2JwcyA9IGNiO1xuICAgIH1cbiAgICBvbmx5QUhhc2hDaGFuZ2UoYXMpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJyk7XG4gICAgICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKTtcbiAgICAgICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgICAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgICAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoO1xuICAgIH1cbiAgICBzY3JvbGxUb0hhc2goYXMpIHtcbiAgICAgICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWUgb3IgYCN0b3BgXG4gICAgICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgICAgICBpZiAoaGFzaCA9PT0gJycgfHwgaGFzaCA9PT0gJ3RvcCcpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgICAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaCk7XG4gICAgICAgIGlmIChpZEVsKSB7XG4gICAgICAgICAgICBpZEVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgICAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXTtcbiAgICAgICAgaWYgKG5hbWVFbCkge1xuICAgICAgICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXJsSXNOZXcoYXNQYXRoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoO1xuICAgIH1cbiAgICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqLyBhc3luYyBwcmVmZXRjaCh1cmwsIGFzUGF0aCA9IHVybCwgb3B0aW9ucyA9IHtcbiAgICB9KSB7XG4gICAgICAgIGxldCBwYXJzZWQgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwodXJsKTtcbiAgICAgICAgbGV0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMiAgfSA9IHBhcnNlZDtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZTIgPSAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aG5hbWUyLCB0aGlzLmxvY2FsZXMpLnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lMjtcbiAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgICAgIGxldCBwYXJzZWRBcyA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChhc1BhdGgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBsb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgIG9wdGlvbnMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGU7XG4gICAgICAgICAgICAgICAgYXNQYXRoID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KCk7XG4gICAgICAgIGxldCByZXNvbHZlZEFzID0gYXNQYXRoO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhc1BhdGguc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICBsZXQgcmV3cml0ZXM7XG4gICAgICAgICAgICAoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyAgfSA9IGF3YWl0ICgwLCBfcm91dGVMb2FkZXIpLmdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSk7XG4gICAgICAgICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9ICgwLCBfcmVzb2x2ZVJld3JpdGVzKS5kZWZhdWx0KGFkZEJhc2VQYXRoKGFkZExvY2FsZShhc1BhdGgsIHRoaXMubG9jYWxlKSksIHBhZ2VzLCByZXdyaXRlcywgcGFyc2VkLnF1ZXJ5LCAocCk9PnJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpXG4gICAgICAgICAgICAsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJld3JpdGVzUmVzdWx0LmFzUGF0aCksIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgICAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgICAgICAgICBwYXRobmFtZTIgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWY7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWUyO1xuICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZC5wYXRobmFtZSwgcGFnZXMpO1xuICAgICAgICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUyKSB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUyID0gcGFyc2VkLnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lMjtcbiAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJvdXRlID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZTIpO1xuICAgICAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLl9pc1NzZyhyb3V0ZSkudGhlbigoaXNTc2cpPT57XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzU3NnID8gdGhpcy5fZ2V0U3RhdGljRGF0YSh0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYodXJsLCByZXNvbHZlZEFzLCB0cnVlLCB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnID8gb3B0aW9ucy5sb2NhbGUgOiB0aGlzLmxvY2FsZSkpIDogZmFsc2U7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSwgXG4gICAgICAgIF0pO1xuICAgIH1cbiAgICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZSkge1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9IHRoaXMuY2xjID0gKCk9PntcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSk7XG4gICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgKTtcbiAgICAgICAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21wb25lbnRSZXN1bHQ7XG4gICAgfVxuICAgIF9nZXREYXRhKGZuKSB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gKCk9PntcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY2xjID0gY2FuY2VsO1xuICAgICAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKT0+e1xuICAgICAgICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyMiA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpO1xuICAgICAgICAgICAgICAgIGVycjIuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnIyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZikge1xuICAgICAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5ICB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiAhdGhpcy5pc1ByZXZpZXcgJiYgdGhpcy5zZGNbY2FjaGVLZXldKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZikge1xuICAgICAgICBjb25zdCB7IGhyZWY6IHJlc291cmNlS2V5ICB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICBpZiAodGhpcy5zZHJbcmVzb3VyY2VLZXldKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV0gPSBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKT0+e1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KS5jYXRjaCgoZXJyMik9PntcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV07XG4gICAgICAgICAgICB0aHJvdyBlcnIyO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgY3R4KSB7XG4gICAgICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAxICB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddO1xuICAgICAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAxKTtcbiAgICAgICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlO1xuICAgICAgICByZXR1cm4gKDAsIF91dGlscykubG9hZEdldEluaXRpYWxQcm9wcyhBcHAxLCB7XG4gICAgICAgICAgICBBcHBUcmVlLFxuICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgICAgICAgY3R4XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhYm9ydENvbXBvbmVudExvYWQoYXMsIHJvdXRlUHJvcHMpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHRoaXMuY2xjKCk7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbm90aWZ5KGRhdGEsIHJlc2V0U2Nyb2xsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50LCByZXNldFNjcm9sbCk7XG4gICAgfVxufVxuUm91dGVyLmV2ZW50cyA9ICgwLCBfbWl0dCkuZGVmYXVsdCgpO1xuZXhwb3J0cy5kZWZhdWx0ID0gUm91dGVyO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZXIuanMubWFwIiwiaW1wb3J0IHsgRmxleCwgQm94LCBUZXh0LCBIZWFkaW5nLCBJbWFnZSB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXHJcblxyXG5mdW5jdGlvbiBJbmRleCgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dCB0aXRsZT1cIkxpdmVzdHJlYW1cIiBkZXNjPVwiTmV4dC5qcyBzaXZ1c3RvXCIgdXJsPVwiL1wiIGltZz1cIi9rYW5zaS1mdWxsLnBuZ1wiPlxyXG5cclxuICAgICAgICAgICAgPEZsZXggbWF4Vz1cImNvbnRhaW5lci54bFwiIHB5PXt7YmFzZTogXCIzcmVtXCIsIGxnOiBcIjZyZW1cIn19IG14PVwiYXV0b1wiIHB4PVwiMFwiIHdyYXA9XCJ3cmFwXCI+XHJcbiAgICAgICAgICAgICAgICA8RmxleCBqdXN0aWZ5PVwiY2VudGVyXCIgZGlyZWN0aW9uPVwiY29sdW1uXCIgbWluSD1cIjEwMCVcIiB3PXt7YmFzZTogXCIxMDAlXCIsIGxnOiBcIjUwJVwifX0gZmxleD17e2Jhc2U6IFwiMTAwJVwiLCBsZzogXCI1MCVcIn19IHB5PVwiMFwiIHBsPXt7YmFzZTogXCIxcmVtXCIsIGxnOiBcIjJyZW1cIiwgeGw6IFwiMFwifX0gcGI9e3tiYXNlOiBcIjNyZW1cIiwgbGc6IFwiMFwifX0gcHI9e3tiYXNlOiBcIjFyZW1cIiwgbGc6IFwiM3JlbVwiLCB4bDogXCI2cmVtXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICA8SGVhZGluZyBhcz1cImgxXCIgZm9udFNpemU9e3tiYXNlOiBcIjJ4bFwiLCBsZzogXCI0eGxcIn19IHBiPXt7YmFzZTogXCIxLjVyZW1cIiwgbGc6IFwiM3JlbVwifX0gbGluZUhlaWdodD1cIjEuNVwiPkxpdmVzdHJlYW08L0hlYWRpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHQgZm9udFNpemU9e3tiYXNlOiBcIm1kXCIsIHNtOiBcImxnXCIsIGxnOiBcInhsXCJ9fT5MaXZlc3RyZWFtIG9uIFByb2dyZXNzaXZlIFdlYiBBcHBsaWNhdGlvbiAtYWx1c3RhIHZhaHZhc3RpIGJyw6RuZMOkdHlpbGxlIFlvdVR1YmUtbGl2ZXN0cmlpbWVpbGxlIHRvdGV1dGV0dHVuYSBOZXh0LmpzOmxsw6QgamEgQ2hha3JhIFVJOmxsYS48L1RleHQ+XHJcbiAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcblxyXG4gICAgICAgICAgICAgICAgPEJveCB3PXt7YmFzZTogXCIxMDAlXCIsIGxnOiBcIjUwJVwifX0gZmxleD17e2Jhc2U6IFwiMTAwJVwiLCBsZzogXCI1MCVcIn19IHA9XCIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cInBpYzEuanBnXCIgYWx0PVwiUGhvdG8gYnkgSm9uYXMgSmFjb2Jzc29uLlwiIHRpdGxlPVwiUGhvdG8gYnkgSm9uYXMgSmFjb2Jzc29uLlwiIG14PVwiYXV0b1wiLz5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8L0ZsZXg+XHJcblxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKVxyXG59XHJcbiAgXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNy4wLjJcbiAqIHJlYWN0LWlzLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gQVRURU5USU9OXG4vLyBXaGVuIGFkZGluZyBuZXcgc3ltYm9scyB0byB0aGlzIGZpbGUsXG4vLyBQbGVhc2UgY29uc2lkZXIgYWxzbyBhZGRpbmcgdG8gJ3JlYWN0LWRldnRvb2xzLXNoYXJlZC9zcmMvYmFja2VuZC9SZWFjdFN5bWJvbHMnXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IDB4ZWFjYTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IDB4ZWFjZTtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gMHhlYWQwO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IDB4ZWFkOTtcbnZhciBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IDB4ZWFkYTtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gMHhlYWQ1O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSAweGVhZDc7XG52YXIgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSAweGVhZTA7XG52YXIgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSAweGVhZTE7XG52YXIgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSAweGVhZTI7XG52YXIgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gMHhlYWUzO1xuXG5pZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yKSB7XG4gIHZhciBzeW1ib2xGb3IgPSBTeW1ib2wuZm9yO1xuICBSRUFDVF9FTEVNRU5UX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmVsZW1lbnQnKTtcbiAgUkVBQ1RfUE9SVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnBvcnRhbCcpO1xuICBSRUFDVF9GUkFHTUVOVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mcmFnbWVudCcpO1xuICBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpO1xuICBSRUFDVF9QUk9GSUxFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm9maWxlcicpO1xuICBSRUFDVF9QUk9WSURFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm92aWRlcicpO1xuICBSRUFDVF9DT05URVhUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmNvbnRleHQnKTtcbiAgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZm9yd2FyZF9yZWYnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2UnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0Jyk7XG4gIFJFQUNUX01FTU9fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubWVtbycpO1xuICBSRUFDVF9MQVpZX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxhenknKTtcbiAgUkVBQ1RfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuYmxvY2snKTtcbiAgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNlcnZlci5ibG9jaycpO1xuICBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpO1xuICBSRUFDVF9TQ09QRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zY29wZScpO1xuICBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub3BhcXVlLmlkJyk7XG4gIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5kZWJ1Z190cmFjZV9tb2RlJyk7XG4gIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vZmZzY3JlZW4nKTtcbiAgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sZWdhY3lfaGlkZGVuJyk7XG59XG5cbi8vIEZpbHRlciBjZXJ0YWluIERPTSBhdHRyaWJ1dGVzIChlLmcuIHNyYywgaHJlZikgaWYgdGhlaXIgdmFsdWVzIGFyZSBlbXB0eSBzdHJpbmdzLlxuXG52YXIgZW5hYmxlU2NvcGVBUEkgPSBmYWxzZTsgLy8gRXhwZXJpbWVudGFsIENyZWF0ZSBFdmVudCBIYW5kbGUgQVBJLlxuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gTm90ZTogdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgKGUuZy4gaWYgaXQncyBhIHBvbHlmaWxsKS5cblxuXG4gIGlmICh0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgfHwgZW5hYmxlU2NvcGVBUEkgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwpIHtcbiAgICBpZiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSB8fCB0eXBlWzBdID09PSBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiB0eXBlT2Yob2JqZWN0KSB7XG4gIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwpIHtcbiAgICB2YXIgJCR0eXBlb2YgPSBvYmplY3QuJCR0eXBlb2Y7XG5cbiAgICBzd2l0Y2ggKCQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgdmFyIHR5cGUgPSBvYmplY3QudHlwZTtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YXIgJCR0eXBlb2ZUeXBlID0gdHlwZSAmJiB0eXBlLiQkdHlwZW9mO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2ZUeXBlO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG52YXIgQ29udGV4dENvbnN1bWVyID0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xudmFyIENvbnRleHRQcm92aWRlciA9IFJFQUNUX1BST1ZJREVSX1RZUEU7XG52YXIgRWxlbWVudCA9IFJFQUNUX0VMRU1FTlRfVFlQRTtcbnZhciBGb3J3YXJkUmVmID0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbnZhciBGcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG52YXIgTGF6eSA9IFJFQUNUX0xBWllfVFlQRTtcbnZhciBNZW1vID0gUkVBQ1RfTUVNT19UWVBFO1xudmFyIFBvcnRhbCA9IFJFQUNUX1BPUlRBTF9UWVBFO1xudmFyIFByb2ZpbGVyID0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbnZhciBTdHJpY3RNb2RlID0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbnZhciBTdXNwZW5zZSA9IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG52YXIgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSBmYWxzZTtcbnZhciBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0NvbmN1cnJlbnRNb2RlID0gZmFsc2U7IC8vIEFzeW5jTW9kZSBzaG91bGQgYmUgZGVwcmVjYXRlZFxuXG5mdW5jdGlvbiBpc0FzeW5jTW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcblxuICAgICAgY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0FzeW5jTW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxOCsuJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNDb25jdXJyZW50TW9kZSkge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNDb25jdXJyZW50TW9kZSA9IHRydWU7IC8vIFVzaW5nIGNvbnNvbGVbJ3dhcm4nXSB0byBldmFkZSBCYWJlbCBhbmQgRVNMaW50XG5cbiAgICAgIGNvbnNvbGVbJ3dhcm4nXSgnVGhlIFJlYWN0SXMuaXNDb25jdXJyZW50TW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxOCsuJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0Q29uc3VtZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0UHJvdmlkZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRm9yd2FyZFJlZihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xufVxuZnVuY3Rpb24gaXNGcmFnbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNMYXp5KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0xBWllfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTWVtbyhvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9NRU1PX1RZUEU7XG59XG5mdW5jdGlvbiBpc1BvcnRhbChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QT1JUQUxfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUHJvZmlsZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3RyaWN0TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdXNwZW5zZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xufVxuXG5leHBvcnRzLkNvbnRleHRDb25zdW1lciA9IENvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuQ29udGV4dFByb3ZpZGVyID0gQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5FbGVtZW50ID0gRWxlbWVudDtcbmV4cG9ydHMuRm9yd2FyZFJlZiA9IEZvcndhcmRSZWY7XG5leHBvcnRzLkZyYWdtZW50ID0gRnJhZ21lbnQ7XG5leHBvcnRzLkxhenkgPSBMYXp5O1xuZXhwb3J0cy5NZW1vID0gTWVtbztcbmV4cG9ydHMuUG9ydGFsID0gUG9ydGFsO1xuZXhwb3J0cy5Qcm9maWxlciA9IFByb2ZpbGVyO1xuZXhwb3J0cy5TdHJpY3RNb2RlID0gU3RyaWN0TW9kZTtcbmV4cG9ydHMuU3VzcGVuc2UgPSBTdXNwZW5zZTtcbmV4cG9ydHMuaXNBc3luY01vZGUgPSBpc0FzeW5jTW9kZTtcbmV4cG9ydHMuaXNDb25jdXJyZW50TW9kZSA9IGlzQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLmlzQ29udGV4dENvbnN1bWVyID0gaXNDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLmlzQ29udGV4dFByb3ZpZGVyID0gaXNDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLmlzRWxlbWVudCA9IGlzRWxlbWVudDtcbmV4cG9ydHMuaXNGb3J3YXJkUmVmID0gaXNGb3J3YXJkUmVmO1xuZXhwb3J0cy5pc0ZyYWdtZW50ID0gaXNGcmFnbWVudDtcbmV4cG9ydHMuaXNMYXp5ID0gaXNMYXp5O1xuZXhwb3J0cy5pc01lbW8gPSBpc01lbW87XG5leHBvcnRzLmlzUG9ydGFsID0gaXNQb3J0YWw7XG5leHBvcnRzLmlzUHJvZmlsZXIgPSBpc1Byb2ZpbGVyO1xuZXhwb3J0cy5pc1N0cmljdE1vZGUgPSBpc1N0cmljdE1vZGU7XG5leHBvcnRzLmlzU3VzcGVuc2UgPSBpc1N1c3BlbnNlO1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGU7XG5leHBvcnRzLnR5cGVPZiA9IHR5cGVPZjtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiLy8gVEhJUyBGSUxFIElTIEFVVE8gR0VORVJBVEVEXG5pbXBvcnQgeyBHZW5JY29uIH0gZnJvbSAnLi4vbGliJztcbmV4cG9ydCBmdW5jdGlvbiBHb0FsZXJ0IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAxNiAxNlwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNOC44OTMgMS41Yy0uMTgzLS4zMS0uNTItLjUtLjg4Ny0uNXMtLjcwMy4xOS0uODg2LjVMLjEzOCAxMy40OTlhLjk4Ljk4IDAgMCAwIDAgMS4wMDFjLjE5My4zMS41My41MDEuODg2LjUwMWgxMy45NjRjLjM2NyAwIC43MDQtLjE5Ljg3Ny0uNWExLjAzIDEuMDMgMCAwIDAgLjAxLTEuMDAyTDguODkzIDEuNXptLjEzMyAxMS40OTdINi45ODd2LTIuMDAzaDIuMDM5djIuMDAzem0wLTMuMDA0SDYuOTg3VjUuOTg3aDIuMDM5djQuMDA2elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBHb0FyY2hpdmUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDE0IDE2XCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xMyAySDF2MmgxMlYyek0wIDRhMSAxIDAgMCAwIDEgMXY5YTEgMSAwIDAgMCAxIDFoMTBhMSAxIDAgMCAwIDEtMVY1YTEgMSAwIDAgMCAxLTFWMmExIDEgMCAwIDAtMS0xSDFhMSAxIDAgMCAwLTEgMXYyem0yIDFoMTB2OUgyVjV6bTIgM2g2VjdINHYxelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBHb0Fycm93Qm90aCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMTZcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNMCA4bDYtNXYzaDhWM2w2IDUtNiA1di0zSDZ2M0wwIDh6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEdvQXJyb3dEb3duIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAxMCAxNlwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNNyA3VjNIM3Y0SDBsNSA2IDUtNkg3elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBHb0Fycm93TGVmdCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMTAgMTZcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTYgM0wwIDhsNiA1di0zaDRWNkg2VjN6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEdvQXJyb3dSaWdodCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMTAgMTZcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTEwIDhMNCAzdjNIMHY0aDR2M2w2LTV6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEdvQXJyb3dTbWFsbERvd24gKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDYgMTZcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTQgN1Y1SDJ2MkgwbDMgNCAzLTRINHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gR29BcnJvd1NtYWxsTGVmdCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgNiAxNlwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNNCA3VjVMMCA4bDQgM1Y5aDJWN0g0elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBHb0Fycm93U21hbGxSaWdodCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgNiAxNlwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNNiA4TDIgNXYySDB2MmgydjJsNC0zelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBHb0Fycm93U21hbGxVcCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgNiAxNlwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMyA1TDAgOWgydjJoMlY5aDJMMyA1elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBHb0Fycm93VXAgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDEwIDE2XCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk01IDNMMCA5aDN2NGg0VjloM0w1IDN6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEdvQmVha2VyIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAxNiAxNlwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTQuMzggMTQuNTlMMTEgN1YzaDFWMkgzdjFoMXY0TC42MyAxNC41OUExIDEgMCAwIDAgMS41NCAxNmgxMS45NGMuNzIgMCAxLjItLjc1LjkxLTEuNDFoLS4wMXpNMy43NSAxMEw1IDdWM2g1djRsMS4yNSAzaC03LjV6TTggOGgxdjFIOFY4ek03IDdINlY2aDF2MXptMC0zaDF2MUg3VjR6bTAtM0g2VjBoMXYxelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBHb0JlbGwgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDE1IDE2XCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xNCAxMnYxSDB2LTFsLjczLS41OGMuNzctLjc3LjgxLTIuNTUgMS4xOS00LjQyQzIuNjkgMy4yMyA2IDIgNiAyYzAtLjU1LjQ1LTEgMS0xczEgLjQ1IDEgMWMwIDAgMy4zOSAxLjIzIDQuMTYgNSAuMzggMS44OC40MiAzLjY2IDEuMTkgNC40MmwuNjYuNThIMTR6bS03IDRjMS4xMSAwIDItLjg5IDItMkg1YzAgMS4xMS44OSAyIDIgMnpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gR29Cb2xkIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAxMCAxNlwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMSAyaDMuODNjMi40OCAwIDQuMy43NSA0LjMgMi45NSAwIDEuMTQtLjYzIDIuMjMtMS42NyAyLjYxdi4wNmMxLjMzLjMgMi4zIDEuMjMgMi4zIDIuODYgMCAyLjM5LTEuOTcgMy41Mi00LjYxIDMuNTJIMVYyem0zLjY2IDQuOTVjMS42NyAwIDIuMzgtLjY2IDIuMzgtMS42OSAwLTEuMTctLjc4LTEuNjEtMi4zNC0xLjYxSDMuMTN2My4zaDEuNTN6bS4yNyA1LjM5YzEuNzcgMCAyLjc1LS42NCAyLjc1LTEuOTggMC0xLjI3LS45NS0xLjgxLTIuNzUtMS44MWgtMS44djMuOGgxLjh2LS4wMXpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gR29Cb29rIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAxNiAxNlwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMyA1aDR2MUgzVjV6bTAgM2g0VjdIM3Yxem0wIDJoNFY5SDN2MXptMTEtNWgtNHYxaDRWNXptMCAyaC00djFoNFY3em0wIDJoLTR2MWg0Vjl6bTItNnY5YzAgLjU1LS40NSAxLTEgMUg5LjVsLTEgMS0xLTFIMmMtLjU1IDAtMS0uNDUtMS0xVjNjMC0uNTUuNDUtMSAxLTFoNS41bDEgMSAxLTFIMTVjLjU1IDAgMSAuNDUgMSAxem0tOCAuNUw3LjUgM0gydjloNlYzLjV6bTctLjVIOS41bC0uNS41VjEyaDZWM3pcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gR29Cb29rbWFyayAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMTAgMTZcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTkgMEgxQy4yNyAwIDAgLjI3IDAgMXYxNWw1LTMuMDlMMTAgMTZWMWMwLS43My0uMjctMS0xLTF6bS0uNzggNC4yNUw2LjM2IDUuNjFsLjcyIDIuMTZjLjA2LjIyLS4wMi4yOC0uMi4xN0w1IDYuNiAzLjEyIDcuOTRjLS4xOS4xMS0uMjUuMDUtLjItLjE3bC43Mi0yLjE2LTEuODYtMS4zNmMtLjE3LS4xNi0uMTQtLjIzLjA5LS4yM2wyLjMtLjAzLjctMi4xNmguMjVsLjcgMi4xNiAyLjMuMDNjLjIzIDAgLjI3LjA4LjA5LjIzaC4wMXpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gR29CcmllZmNhc2UgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDE0IDE2XCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk05IDRWM2MwLS41NS0uNDUtMS0xLTFINmMtLjU1IDAtMSAuNDUtMSAxdjFIMWMtLjU1IDAtMSAuNDUtMSAxdjhjMCAuNTUuNDUgMSAxIDFoMTJjLjU1IDAgMS0uNDUgMS0xVjVjMC0uNTUtLjQ1LTEtMS0xSDl6TTYgM2gydjFINlYzem03IDZIOHYxSDZWOUgxVjVoMXYzaDEwVjVoMXY0elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBHb0Jyb2FkY2FzdCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMTYgMTZcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTkgOUg4Yy41NSAwIDEtLjQ1IDEtMVY3YzAtLjU1LS40NS0xLTEtMUg3Yy0uNTUgMC0xIC40NS0xIDF2MWMwIC41NS40NSAxIDEgMUg2Yy0uNTUgMC0xIC40NS0xIDF2MmgxdjNjMCAuNTUuNDUgMSAxIDFoMWMuNTUgMCAxLS40NSAxLTF2LTNoMXYtMmMwLS41NS0uNDUtMS0xLTF6TTcgN2gxdjFIN1Y3em0yIDRIOHY0SDd2LTRINnYtMWgzdjF6bTIuMDktMy41YzAtMS45OC0xLjYxLTMuNTktMy41OS0zLjU5QTMuNTkzIDMuNTkzIDAgMCAwIDQgOC4zMXYxLjk4Yy0uNjEtLjc3LTEtMS43My0xLTIuOCAwLTIuNDggMi4wMi00LjUgNC41LTQuNVMxMiA1LjAxIDEyIDcuNDljMCAxLjA2LS4zOSAyLjAzLTEgMi44VjguMzFjLjA2LS4yNy4wOS0uNTMuMDktLjgxem0zLjkxIDBjMCAyLjg4LTEuNjMgNS4zOC00IDYuNjN2LTEuMDVhNi41NTMgNi41NTMgMCAwIDAgMy4wOS01LjU4QTYuNTkgNi41OSAwIDAgMCA3LjUuOTEgNi41OSA2LjU5IDAgMCAwIC45MSA3LjVjMCAyLjM2IDEuMjMgNC40MiAzLjA5IDUuNTh2MS4wNUE3LjQ5NyA3LjQ5NyAwIDAgMSA3LjUgMEMxMS42NCAwIDE1IDMuMzYgMTUgNy41elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBHb0Jyb3dzZXIgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDE0IDE2XCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk01IDNoMXYxSDVWM3pNMyAzaDF2MUgzVjN6TTEgM2gxdjFIMVYzem0xMiAxMEgxVjVoMTJ2OHptMC05SDdWM2g2djF6bTEtMWMwLS41NS0uNDUtMS0xLTFIMWMtLjU1IDAtMSAuNDUtMSAxdjEwYzAgLjU1LjQ1IDEgMSAxaDEyYy41NSAwIDEtLjQ1IDEtMVYzelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBHb0J1ZyAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMTYgMTZcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTExIDEwaDNWOWgtM1Y4bDMuMTctMS4wMy0uMzQtLjk0TDExIDdWNmMwLS41NS0uNDUtMS0xLTFWNGMwLS40OC0uMzYtLjg4LS44My0uOTdMMTAuMiAySDEyVjFIOS44bC0yIDJoLS41OUw1LjIgMUgzdjFoMS44bDEuMDMgMS4wM0M1LjM2IDMuMTIgNSAzLjUxIDUgNHYxYy0uNTUgMC0xIC40NS0xIDF2MWwtMi44My0uOTctLjM0Ljk0TDQgOHYxSDF2MWgzdjFMLjgzIDEyLjAzbC4zNC45NEw0IDEydjFjMCAuNTUuNDUgMSAxIDFoMWwxLTFWNmgxdjdsMSAxaDFjLjU1IDAgMS0uNDUgMS0xdi0xbDIuODMuOTcuMzQtLjk0TDExIDExdi0xek05IDVINlY0aDN2MXpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gR29DYWxlbmRhciAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMTQgMTZcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTEzIDJoLTF2MS41YzAgLjI4LS4yMi41LS41LjVoLTJjLS4yOCAwLS41LS4yMi0uNS0uNVYySDZ2MS41YzAgLjI4LS4yMi41LS41LjVoLTJjLS4yOCAwLS41LS4yMi0uNS0uNVYySDJjLS41NSAwLTEgLjQ1LTEgMXYxMWMwIC41NS40NSAxIDEgMWgxMWMuNTUgMCAxLS40NSAxLTFWM2MwLS41NS0uNDUtMS0xLTF6bTAgMTJIMlY1aDExdjl6TTUgM0g0VjFoMXYyem02IDBoLTFWMWgxdjJ6TTYgN0g1VjZoMXYxem0yIDBIN1Y2aDF2MXptMiAwSDlWNmgxdjF6bTIgMGgtMVY2aDF2MXpNNCA5SDNWOGgxdjF6bTIgMEg1VjhoMXYxem0yIDBIN1Y4aDF2MXptMiAwSDlWOGgxdjF6bTIgMGgtMVY4aDF2MXptLTggMkgzdi0xaDF2MXptMiAwSDV2LTFoMXYxem0yIDBIN3YtMWgxdjF6bTIgMEg5di0xaDF2MXptMiAwaC0xdi0xaDF2MXptLTggMkgzdi0xaDF2MXptMiAwSDV2LTFoMXYxem0yIDBIN3YtMWgxdjF6bTIgMEg5di0xaDF2MXpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gR29DaGVjayAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMTIgMTZcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTEyIDVsLTggOC00LTQgMS41LTEuNUw0IDEwbDYuNS02LjVMMTIgNXpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gR29DaGVja2xpc3QgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDE2IDE2XCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xNiA4LjVsLTYgNi0zLTNMOC41IDEwbDEuNSAxLjVMMTQuNSA3IDE2IDguNXpNNS43IDEyLjJsLjguOEgyYy0uNTUgMC0xLS40NS0xLTFWM2MwLS41NS40NS0xIDEtMWg3Yy41NSAwIDEgLjQ1IDEgMXY2LjVsLS44LS44Yy0uMzktLjM5LTEuMDMtLjM5LTEuNDIgMEw1LjcgMTAuOGEuOTk2Ljk5NiAwIDAgMCAwIDEuNDF2LS4wMXpNNCA0aDVWM0g0djF6bTAgMmg1VjVINHYxem0wIDJoM1Y3SDR2MXpNMyA5SDJ2MWgxVjl6bTAtMkgydjFoMVY3em0wLTJIMnYxaDFWNXptMC0ySDJ2MWgxVjN6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEdvQ2hldnJvbkRvd24gKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDEwIDE2XCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk01IDExTDAgNmwxLjUtMS41TDUgOC4yNSA4LjUgNC41IDEwIDZsLTUgNXpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gR29DaGV2cm9uTGVmdCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgOCAxNlwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNNS41IDNMNyA0LjUgMy4yNSA4IDcgMTEuNSA1LjUgMTNsLTUtNSA1LTV6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEdvQ2hldnJvblJpZ2h0IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCA4IDE2XCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk03LjUgOGwtNSA1TDEgMTEuNSA0Ljc1IDggMSA0LjUgMi41IDNsNSA1elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBHb0NoZXZyb25VcCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMTAgMTZcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTEwIDEwbC0xLjUgMS41TDUgNy43NSAxLjUgMTEuNSAwIDEwbDUtNSA1IDV6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEdvQ2lyY2xlU2xhc2ggKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDE0IDE2XCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk03IDFDMy4xNCAxIDAgNC4xNCAwIDhzMy4xNCA3IDcgNyA3LTMuMTQgNy03LTMuMTQtNy03LTd6bTAgMS4zYzEuMyAwIDIuNS40NCAzLjQ3IDEuMTdsLTggOEE1Ljc1NSA1Ljc1NSAwIDAgMSAxLjMgOGMwLTMuMTQgMi41Ni01LjcgNS43LTUuN3ptMCAxMS40MWMtMS4zIDAtMi41LS40NC0zLjQ3LTEuMTdsOC04Yy43My45NyAxLjE3IDIuMTcgMS4xNyAzLjQ3IDAgMy4xNC0yLjU2IDUuNy01LjcgNS43elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBHb0NpcmN1aXRCb2FyZCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMTQgMTZcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTMgNWMwLS41NS40NS0xIDEtMXMxIC40NSAxIDEtLjQ1IDEtMSAxLTEtLjQ1LTEtMXptOCAwYzAtLjU1LS40NS0xLTEtMXMtMSAuNDUtMSAxIC40NSAxIDEgMSAxLS40NSAxLTF6bTAgNmMwLS41NS0uNDUtMS0xLTFzLTEgLjQ1LTEgMSAuNDUgMSAxIDEgMS0uNDUgMS0xem0yLTEwSDV2Mi4xN2MuMzYuMTkuNjQuNDcuODMuODNoMi4zNGMuNDItLjc4IDEuMzMtMS4yOCAyLjM0LTEuMDUuNzUuMTkgMS4zNi44IDEuNTMgMS41NS4zMSAxLjM4LS43MiAyLjU5LTIuMDUgMi41OS0uOCAwLTEuNDgtLjQ0LTEuODMtMS4wOUg1LjgzYy0uNDIuOC0xLjMzIDEuMjgtMi4zNCAxLjAzLS43My0uMTctMS4zNC0uNzgtMS41Mi0xLjUyQzEuNzIgNC40OSAyLjIgMy41OSAzIDMuMTdWMUgxYy0uNTUgMC0xIC40NS0xIDF2MTJjMCAuNTUuNDUgMSAxIDFsNS01aDIuMTdjLjQyLS43OCAxLjMzLTEuMjggMi4zNC0xLjA1Ljc1LjE5IDEuMzYuOCAxLjUzIDEuNTUuMzEgMS4zOC0uNzIgMi41OS0yLjA1IDIuNTktLjggMC0xLjQ4LS40NC0xLjgzLTEuMDlINi45OUw0IDE1aDljLjU1IDAgMS0uNDUgMS0xVjJjMC0uNTUtLjQ1LTEtMS0xelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBHb0NsaXBweSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMTQgMTZcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTIgMTNoNHYxSDJ2LTF6bTUtNkgydjFoNVY3em0yIDNWOGwtMyAzIDMgM3YtMmg1di0ySDl6TTQuNSA5SDJ2MWgyLjVWOXpNMiAxMmgyLjV2LTFIMnYxem05IDFoMXYyYy0uMDIuMjgtLjExLjUyLS4zLjctLjE5LjE4LS40Mi4yOC0uNy4zSDFjLS41NSAwLTEtLjQ1LTEtMVY0YzAtLjU1LjQ1LTEgMS0xaDNjMC0xLjExLjg5LTIgMi0yIDEuMTEgMCAyIC44OSAyIDJoM2MuNTUgMCAxIC40NSAxIDF2NWgtMVY2SDF2OWgxMHYtMnpNMiA1aDhjMC0uNTUtLjQ1LTEtMS0xSDhjLS41NSAwLTEtLjQ1LTEtMXMtLjQ1LTEtMS0xLTEgLjQ1LTEgMS0uNDUgMS0xIDFIM2MtLjU1IDAtMSAuNDUtMSAxelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBHb0Nsb2NrIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAxNCAxNlwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNOCA4aDN2Mkg3Yy0uNTUgMC0xLS40NS0xLTFWNGgydjR6TTcgMi4zYzMuMTQgMCA1LjcgMi41NiA1LjcgNS43cy0yLjU2IDUuNy01LjcgNS43QTUuNzEgNS43MSAwIDAgMSAxLjMgOGMwLTMuMTQgMi41Ni01LjcgNS43LTUuN3pNNyAxQzMuMTQgMSAwIDQuMTQgMCA4czMuMTQgNyA3IDcgNy0zLjE0IDctNy0zLjE0LTctNy03elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBHb0Nsb3VkRG93bmxvYWQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDE2IDE2XCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk05IDEyaDJsLTMgMy0zLTNoMlY3aDJ2NXptMy04YzAtLjQ0LS45MS0zLTQuNS0zQzUuMDggMSAzIDIuOTIgMyA1IDEuMDIgNSAwIDYuNTIgMCA4YzAgMS41MyAxIDMgMyAzaDNWOS43SDNDMS4zOCA5LjcgMS4zIDguMjggMS4zIDhjMC0uMTcuMDUtMS43IDEuNy0xLjdoMS4zVjVjMC0xLjM5IDEuNTYtMi43IDMuMi0yLjcgMi41NSAwIDMuMTMgMS41NSAzLjIgMS44djEuMkgxMmMuODEgMCAyLjcuMjIgMi43IDIuMiAwIDIuMDktMi4yNSAyLjItMi43IDIuMmgtMlYxMWgyYzIuMDggMCA0LTEuMTYgNC0zLjVDMTYgNS4wNiAxNC4wOCA0IDEyIDR6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEdvQ2xvdWRVcGxvYWQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDE2IDE2XCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk03IDlINWwzLTMgMyAzSDl2NUg3Vjl6bTUtNGMwLS40NC0uOTEtMy00LjUtM0M1LjA4IDIgMyAzLjkyIDMgNiAxLjAyIDYgMCA3LjUyIDAgOWMwIDEuNTMgMSAzIDMgM2gzdi0xLjNIM2MtMS42MiAwLTEuNy0xLjQyLTEuNy0xLjcgMC0uMTcuMDUtMS43IDEuNy0xLjdoMS4zVjZjMC0xLjM5IDEuNTYtMi43IDMuMi0yLjcgMi41NSAwIDMuMTMgMS41NSAzLjIgMS44djEuMkgxMmMuODEgMCAyLjcuMjIgMi43IDIuMiAwIDIuMDktMi4yNSAyLjItMi43IDIuMmgtMlYxMmgyYzIuMDggMCA0LTEuMTYgNC0zLjVDMTYgNi4wNiAxNC4wOCA1IDEyIDV6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEdvQ29kZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMTQgMTZcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTkuNSAzTDggNC41IDExLjUgOCA4IDExLjUgOS41IDEzIDE0IDggOS41IDN6bS01IDBMMCA4bDQuNSA1TDYgMTEuNSAyLjUgOCA2IDQuNSA0LjUgM3pcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gR29Db21tZW50RGlzY3Vzc2lvbiAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMTYgMTZcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTE1IDFINmMtLjU1IDAtMSAuNDUtMSAxdjJIMWMtLjU1IDAtMSAuNDUtMSAxdjZjMCAuNTUuNDUgMSAxIDFoMXYzbDMtM2g0Yy41NSAwIDEtLjQ1IDEtMVY5aDFsMyAzVjloMWMuNTUgMCAxLS40NSAxLTFWMmMwLS41NS0uNDUtMS0xLTF6TTkgMTFINC41TDMgMTIuNVYxMUgxVjVoNHYzYzAgLjU1LjQ1IDEgMSAxaDN2MnptNi0zaC0ydjEuNUwxMS41IDhINlYyaDl2NnpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gR29Db21tZW50IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAxNiAxNlwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTQgMUgyYy0uNTUgMC0xIC40NS0xIDF2OGMwIC41NS40NSAxIDEgMWgydjMuNUw3LjUgMTFIMTRjLjU1IDAgMS0uNDUgMS0xVjJjMC0uNTUtLjQ1LTEtMS0xem0wIDlIN2wtMiAydi0ySDJWMmgxMnY4elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBHb0NyZWRpdENhcmQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDE2IDE2XCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xMiA5SDJWOGgxMHYxem00LTZ2OWMwIC41NS0uNDUgMS0xIDFIMWMtLjU1IDAtMS0uNDUtMS0xVjNjMC0uNTUuNDUtMSAxLTFoMTRjLjU1IDAgMSAuNDUgMSAxem0tMSAzSDF2NmgxNFY2em0wLTNIMXYxaDE0VjN6bS05IDdIMnYxaDR2LTF6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEdvRGFzaCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgOCAxNlwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMCA3djJoOFY3SDB6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEdvRGFzaGJvYXJkIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAxNiAxNlwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNOSA1SDhWNGgxdjF6bTQgM2gtMXYxaDFWOHpNNiA1SDV2MWgxVjV6TTUgOEg0djFoMVY4em0xMS01LjVsLS41LS41TDkgN2MtLjA2LS4wMi0xIDAtMSAwLS41NSAwLTEgLjQ1LTEgMXYxYzAgLjU1LjQ1IDEgMSAxaDFjLjU1IDAgMS0uNDUgMS0xdi0uOTJsNi01LjU4em0tMS41OSA0LjA5Yy4xOS42MS4zIDEuMjUuMyAxLjkxIDAgMy40Mi0yLjc4IDYuMi02LjIgNi4yLTMuNDIgMC02LjIxLTIuNzgtNi4yMS02LjIgMC0zLjQyIDIuNzgtNi4yIDYuMi02LjIgMS4yIDAgMi4zMS4zNCAzLjI3Ljk0bC45NC0uOTRBNy40NTkgNy40NTkgMCAwIDAgOC41MSAxQzQuMzYgMSAxIDQuMzYgMSA4LjUgMSAxMi42NCA0LjM2IDE2IDguNSAxNmM0LjE0IDAgNy41LTMuMzYgNy41LTcuNSAwLTEuMDMtLjItMi4wMi0uNTktMi45MWwtMSAxelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBHb0RhdGFiYXNlIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAxMiAxNlwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNNiAxNWMtMy4zMSAwLTYtLjktNi0ydi0yYzAtLjE3LjA5LS4zNC4yMS0uNS42Ny44NiAzIDEuNSA1Ljc5IDEuNXM1LjEyLS42NCA1Ljc5LTEuNWMuMTMuMTYuMjEuMzMuMjEuNXYyYzAgMS4xLTIuNjkgMi02IDJ6bTAtNGMtMy4zMSAwLTYtLjktNi0yVjdjMC0uMTEuMDQtLjIxLjA5LS4zMS4wMy0uMDYuMDctLjEzLjEyLS4xOUMuODggNy4zNiAzLjIxIDggNiA4czUuMTItLjY0IDUuNzktMS41Yy4wNS4wNi4wOS4xMy4xMi4xOS4wNS4xLjA5LjIxLjA5LjMxdjJjMCAxLjEtMi42OSAyLTYgMnptMC00Yy0zLjMxIDAtNi0uOS02LTJWM2MwLTEuMSAyLjY5LTIgNi0yczYgLjkgNiAydjJjMCAxLjEtMi42OSAyLTYgMnptMC01Yy0yLjIxIDAtNCAuNDUtNCAxczEuNzkgMSA0IDEgNC0uNDUgNC0xLTEuNzktMS00LTF6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEdvRGVza3RvcERvd25sb2FkIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAxNiAxNlwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNNCA2aDNWMGgydjZoM2wtNCA0LTQtNHptMTEtNGgtNHYxaDR2OEgxVjNoNFYySDFjLS41NSAwLTEgLjQ1LTEgMXY5YzAgLjU1LjQ1IDEgMSAxaDUuMzRjLS4yNS42MS0uODYgMS4zOS0yLjM0IDJoOGMtMS40OC0uNjEtMi4wOS0xLjM5LTIuMzQtMkgxNWMuNTUgMCAxLS40NSAxLTFWM2MwLS41NS0uNDUtMS0xLTF6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEdvRGV2aWNlQ2FtZXJhVmlkZW8gKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDE2IDE2XCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xNS4yIDIuMDlMMTAgNS43MlYzYzAtLjU1LS40NS0xLTEtMUgxYy0uNTUgMC0xIC40NS0xIDF2OWMwIC41NS40NSAxIDEgMWg4Yy41NSAwIDEtLjQ1IDEtMVY5LjI4bDUuMiAzLjYzYy4zMy4yMy44IDAgLjgtLjQxdi0xMGMwLS40MS0uNDctLjY0LS44LS40MXpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gR29EZXZpY2VDYW1lcmEgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDE2IDE2XCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xNSAzSDdjMC0uNTUtLjQ1LTEtMS0xSDJjLS41NSAwLTEgLjQ1LTEgMS0uNTUgMC0xIC40NS0xIDF2OWMwIC41NS40NSAxIDEgMWgxNGMuNTUgMCAxLS40NSAxLTFWNGMwLS41NS0uNDUtMS0xLTF6TTYgNUgyVjRoNHYxem00LjUgN0M4LjU2IDEyIDcgMTAuNDQgNyA4LjVTOC41NiA1IDEwLjUgNSAxNCA2LjU2IDE0IDguNSAxMi40NCAxMiAxMC41IDEyek0xMyA4LjVjMCAxLjM4LTEuMTMgMi41LTIuNSAyLjVTOCA5Ljg3IDggOC41IDkuMTMgNiAxMC41IDYgMTMgNy4xMyAxMyA4LjV6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEdvRGV2aWNlRGVza3RvcCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMTYgMTZcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTE1IDJIMWMtLjU1IDAtMSAuNDUtMSAxdjljMCAuNTUuNDUgMSAxIDFoNS4zNGMtLjI1LjYxLS44NiAxLjM5LTIuMzQgMmg4Yy0xLjQ4LS42MS0yLjA5LTEuMzktMi4zNC0ySDE1Yy41NSAwIDEtLjQ1IDEtMVYzYzAtLjU1LS40NS0xLTEtMXptMCA5SDFWM2gxNHY4elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBHb0RldmljZU1vYmlsZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMTAgMTZcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTkgMEgxQy40NSAwIDAgLjQ1IDAgMXYxNGMwIC41NS40NSAxIDEgMWg4Yy41NSAwIDEtLjQ1IDEtMVYxYzAtLjU1LS40NS0xLTEtMXpNNSAxNS4zYy0uNzIgMC0xLjMtLjU4LTEuMy0xLjMgMC0uNzIuNTgtMS4zIDEuMy0xLjMuNzIgMCAxLjMuNTggMS4zIDEuMyAwIC43Mi0uNTggMS4zLTEuMyAxLjN6TTkgMTJIMVYyaDh2MTB6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEdvRGlmZkFkZGVkIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAxNCAxNlwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTMgMUgxYy0uNTUgMC0xIC40NS0xIDF2MTJjMCAuNTUuNDUgMSAxIDFoMTJjLjU1IDAgMS0uNDUgMS0xVjJjMC0uNTUtLjQ1LTEtMS0xem0wIDEzSDFWMmgxMnYxMnpNNiA5SDNWN2gzVjRoMnYzaDN2Mkg4djNINlY5elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBHb0RpZmZJZ25vcmVkIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAxNCAxNlwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTMgMUgxYy0uNTUgMC0xIC40NS0xIDF2MTJjMCAuNTUuNDUgMSAxIDFoMTJjLjU1IDAgMS0uNDUgMS0xVjJjMC0uNTUtLjQ1LTEtMS0xem0wIDEzSDFWMmgxMnYxMnptLTguNS0ySDN2LTEuNUw5LjUgNEgxMXYxLjVMNC41IDEyelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBHb0RpZmZNb2RpZmllZCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMTQgMTZcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTEzIDFIMWMtLjU1IDAtMSAuNDUtMSAxdjEyYzAgLjU1LjQ1IDEgMSAxaDEyYy41NSAwIDEtLjQ1IDEtMVYyYzAtLjU1LS40NS0xLTEtMXptMCAxM0gxVjJoMTJ2MTJ6TTQgOGMwLTEuNjYgMS4zNC0zIDMtM3MzIDEuMzQgMyAzLTEuMzQgMy0zIDMtMy0xLjM0LTMtM3pcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gR29EaWZmUmVtb3ZlZCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMTQgMTZcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTEzIDFIMWMtLjU1IDAtMSAuNDUtMSAxdjEyYzAgLjU1LjQ1IDEgMSAxaDEyYy41NSAwIDEtLjQ1IDEtMVYyYzAtLjU1LS40NS0xLTEtMXptMCAxM0gxVjJoMTJ2MTJ6bS0yLTVIM1Y3aDh2MnpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gR29EaWZmUmVuYW1lZCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMTQgMTZcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTYgOUgzVjdoM1Y0bDUgNC01IDRWOXptOC03djEyYzAgLjU1LS40NSAxLTEgMUgxYy0uNTUgMC0xLS40NS0xLTFWMmMwLS41NS40NS0xIDEtMWgxMmMuNTUgMCAxIC40NSAxIDF6bS0xIDBIMXYxMmgxMlYyelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBHb0RpZmYgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDEzIDE2XCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk02IDdoMnYxSDZ2Mkg1VjhIM1Y3aDJWNWgxdjJ6bS0zIDZoNXYtMUgzdjF6TTcuNSAyTDExIDUuNVYxNWMwIC41NS0uNDUgMS0xIDFIMWMtLjU1IDAtMS0uNDUtMS0xVjNjMC0uNTUuNDUtMSAxLTFoNi41ek0xMCA2TDcgM0gxdjEyaDlWNnpNOC41IDBIM3YxaDVsNCA0djhoMVY0LjVMOC41IDB6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEdvRWxsaXBzaXMgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDEyIDE2XCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xMSA1SDFjLS41NSAwLTEgLjQ1LTEgMXY0YzAgLjU1LjQ1IDEgMSAxaDEwYy41NSAwIDEtLjQ1IDEtMVY2YzAtLjU1LS40NS0xLTEtMXpNNCA5SDJWN2gydjJ6bTMgMEg1VjdoMnYyem0zIDBIOFY3aDJ2MnpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gR29FeWVDbG9zZWQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDE2IDE0XCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xNC44MjIuODU0YS41LjUgMCAxIDAtLjcwNy0uNzA4bC0yLjExIDIuMTFDMTAuODkgMS40ODMgOS41NjUuOTI2IDguMDYuOTI2Yy01LjA2IDAtOC4wNiA2LTguMDYgNnMxLjE2MiAyLjMyMyAzLjI1OCA0LjA3OGwtMi4wNjQgMi4wNjVhLjUuNSAwIDEgMCAuNzA3LjcwN0wxNC44MjIuODU0ek00Ljg2IDkuNDAzTDYuMjkyIDcuOTdBMS45OTkgMS45OTkgMCAwIDEgNiA2LjkyNWMwLTEuMTEuODktMiAyLTIgLjM4NCAwIC43NDEuMTA2IDEuMDQ1LjI5MmwxLjQzMy0xLjQzM0EzLjk4IDMuOTggMCAwIDAgOCAyLjkyNWMtMi4yIDAtNCAxLjgtNCA0IDAgLjkzOC4zMjEgMS43OTguODU5IDIuNDc4em03LjAwNS0zLjUxNGwxLjk5My0xLjk5MkExNC44NzMgMTQuODczIDAgMCAxIDE2IDYuOTI1cy0zIDYtNy45NCA2YTYuNjA5IDYuNjA5IDAgMCAxLTIuNjYxLS41N2wxLjU2NS0xLjU2NmMuMzMuMDg5LjY3OC4xMzYgMS4wMzYuMTM2IDIuMjIgMCA0LTEuNzggNC00IDAtLjM1OC0uMDQ3LS43MDUtLjEzNi0xLjAzNnpNOS4zMzggOC40MTVsLjE1Mi0uMTUxYTEuOTk2IDEuOTk2IDAgMCAxLS4xNTIuMTUxelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBHb0V5ZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMTYgMTZcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTguMDYgMkMzIDIgMCA4IDAgOHMzIDYgOC4wNiA2QzEzIDE0IDE2IDggMTYgOHMtMy02LTcuOTQtNnpNOCAxMmMtMi4yIDAtNC0xLjc4LTQtNCAwLTIuMiAxLjgtNCA0LTQgMi4yMiAwIDQgMS44IDQgNCAwIDIuMjItMS43OCA0LTQgNHptMi00YzAgMS4xMS0uODkgMi0yIDItMS4xMSAwLTItLjg5LTItMiAwLTEuMTEuODktMiAyLTIgMS4xMSAwIDIgLjg5IDIgMnpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gR29GaWxlQmluYXJ5IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAxMiAxNlwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNNCAxMmgxdjFIMnYtMWgxdi0ySDJWOWgydjN6bTgtNy41VjE0YzAgLjU1LS40NSAxLTEgMUgxYy0uNTUgMC0xLS40NS0xLTFWMmMwLS41NS40NS0xIDEtMWg3LjVMMTIgNC41ek0xMSA1TDggMkgxdjEyaDEwVjV6TTggNEg2djFoMXYySDZ2MWgzVjdIOFY0ek0yIDRoM3Y0SDJWNHptMSAzaDFWNUgzdjJ6bTMgMmgzdjRINlY5em0xIDNoMXYtMkg3djJ6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEdvRmlsZUNvZGUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDEyIDE2XCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk04LjUgMUgxYy0uNTUgMC0xIC40NS0xIDF2MTJjMCAuNTUuNDUgMSAxIDFoMTBjLjU1IDAgMS0uNDUgMS0xVjQuNUw4LjUgMXpNMTEgMTRIMVYyaDdsMyAzdjl6TTUgNi45OEwzLjUgOC41IDUgMTBsLS41IDFMMiA4LjUgNC41IDZsLjUuOTh6TTcuNSA2TDEwIDguNSA3LjUgMTFsLS41LS45OEw4LjUgOC41IDcgN2wuNS0xelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBHb0ZpbGVEaXJlY3RvcnkgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDE0IDE2XCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xMyA0SDdWM2MwLS42Ni0uMzEtMS0xLTFIMWMtLjU1IDAtMSAuNDUtMSAxdjEwYzAgLjU1LjQ1IDEgMSAxaDEyYy41NSAwIDEtLjQ1IDEtMVY1YzAtLjU1LS40NS0xLTEtMXpNNiA0SDFWM2g1djF6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEdvRmlsZU1lZGlhIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAxMiAxNlwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNNiA1aDJ2Mkg2VjV6bTYtLjVWMTRjMCAuNTUtLjQ1IDEtMSAxSDFjLS41NSAwLTEtLjQ1LTEtMVYyYzAtLjU1LjQ1LTEgMS0xaDcuNUwxMiA0LjV6TTExIDVMOCAySDF2MTFsMy01IDIgNCAyLTIgMyAzVjV6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEdvRmlsZVBkZiAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMTIgMTZcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTguNSAxSDFhMSAxIDAgMCAwLTEgMXYxMmExIDEgMCAwIDAgMSAxaDEwYTEgMSAwIDAgMCAxLTFWNC41TDguNSAxek0xIDJoNGEuNjguNjggMCAwIDAtLjMxLjIgMS4wOCAxLjA4IDAgMCAwLS4yMy40NyA0LjIyIDQuMjIgMCAwIDAtLjA5IDEuNDdjLjA2LjYwOS4xNzMgMS4yMTEuMzQgMS44QTIxLjc4IDIxLjc4IDAgMCAxIDMuNiA4LjZjLS41IDEtLjggMS42Ni0uOTEgMS44NGE3LjE1NiA3LjE1NiAwIDAgMC0uNjkuM2MtLjM2Mi4xNjUtLjY5OS4zOC0xIC42NFYyem00LjQyIDQuOGE1LjY1IDUuNjUgMCAwIDAgMS4xNyAyLjA5Yy4yNzUuMjM3LjU5NS40MTcuOTQuNTMtLjY0LjA5LTEuMjMuMi0xLjgxLjMzLS42MTguMTUtMS4yMjMuMzQ3LTEuODEuNTlzLjIyLS40NC42MS0xLjI1Yy4zNjUtLjc0LjY3LTEuNTEuOTEtMi4zbC0uMDEuMDF6TTExIDE0SDEuNWEuNzQzLjc0MyAwIDAgMS0uMTcgMCAyLjEyIDIuMTIgMCAwIDAgLjczLS40NCAxMC4xNCAxMC4xNCAwIDAgMCAxLjc4LTIuMzhjLjMxLS4xMy41OC0uMjMuODEtLjMxbC40Mi0uMTRjLjQ1LS4xMy45NC0uMjMgMS40NC0uMzNzMS0uMTYgMS40OC0uMmMuNDQ3LjIxNi45MTIuMzk0IDEuMzkuNTMuNDAzLjExLjgxNC4xODggMS4yMy4yM2guMzhWMTRIMTF6bTAtNC44NmEzLjc0MyAzLjc0MyAwIDAgMC0uNjQtLjI4IDQuMjIxIDQuMjIxIDAgMCAwLS43NS0uMTFjLS40MTEuMDAzLS44MjIuMDMtMS4yMy4wOGEzIDMgMCAwIDEtMS0uNjQgNi4wNyA2LjA3IDAgMCAxLTEuMjktMi4zM2MuMTExLS42NjEuMTc4LTEuMzMuMi0yIC4wMi0uMjUuMDItLjUgMC0uNzVhMS4wNSAxLjA1IDAgMCAwLS4yLS44OC44Mi44MiAwIDAgMC0uNjEtLjIzSDhsMyAzdjQuMTR6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEdvRmlsZVN1Ym1vZHVsZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMTQgMTZcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTEwIDdINHY3aDljLjU1IDAgMS0uNDUgMS0xVjhoLTRWN3pNOSA5SDVWOGg0djF6bTQtNUg3VjNjMC0uNjYtLjMxLTEtMS0xSDFjLS41NSAwLTEgLjQ1LTEgMXYxMGMwIC41NS40NSAxIDEgMWgyVjdjMC0uNTUuNDUtMSAxLTFoNmMuNTUgMCAxIC40NSAxIDFoM1Y1YzAtLjU1LS40NS0xLTEtMXpNNiA0SDFWM2g1djF6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEdvRmlsZVN5bWxpbmtEaXJlY3RvcnkgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDE0IDE2XCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xMyA0SDdWM2MwLS42Ni0uMzEtMS0xLTFIMWMtLjU1IDAtMSAuNDUtMSAxdjEwYzAgLjU1LjQ1IDEgMSAxaDEyYy41NSAwIDEtLjQ1IDEtMVY1YzAtLjU1LS40NS0xLTEtMXpNMSAzaDV2MUgxVjN6bTYgOXYtMmMtLjk4LS4wMi0xLjg0LjIyLTIuNTUuNy0uNzEuNDgtMS4xOSAxLjI1LTEuNDUgMi4zLjAyLTEuNjQuMzktMi44OCAxLjEzLTMuNzNDNC44NiA4LjQzIDUuODIgOCA3LjAxIDhWNmw0IDMtNCAzSDd6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEdvRmlsZVN5bWxpbmtGaWxlIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAxMiAxNlwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNOC41IDFIMWMtLjU1IDAtMSAuNDUtMSAxdjEyYzAgLjU1LjQ1IDEgMSAxaDEwYy41NSAwIDEtLjQ1IDEtMVY0LjVMOC41IDF6TTExIDE0SDFWMmg3bDMgM3Y5ek02IDQuNWw0IDMtNCAzdi0yYy0uOTgtLjAyLTEuODQuMjItMi41NS43LS43MS40OC0xLjE5IDEuMjUtMS40NSAyLjMuMDItMS42NC4zOS0yLjg4IDEuMTMtMy43My43My0uODQgMS42OS0xLjI3IDIuODgtMS4yN3YtMkg2elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBHb0ZpbGVaaXAgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDEyIDE2XCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk04LjUgMUgxYTEgMSAwIDAgMC0xIDF2MTJhMSAxIDAgMCAwIDEgMWgxMGExIDEgMCAwIDAgMS0xVjQuNUw4LjUgMXpNMTEgMTRIMVYyaDN2MWgxVjJoM2wzIDN2OXpNNSA0VjNoMXYxSDV6TTQgNGgxdjFINFY0em0xIDJWNWgxdjFINXpNNCA2aDF2MUg0VjZ6bTEgMlY3aDF2MUg1ek00IDkuMjhBMiAyIDAgMCAwIDMgMTF2MWg0di0xYTIgMiAwIDAgMC0yLTJWOEg0djEuMjh6TTYgMTB2MUg0di0xaDJ6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEdvRmlsZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMTIgMTZcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTYgNUgyVjRoNHYxek0yIDhoN1Y3SDJ2MXptMCAyaDdWOUgydjF6bTAgMmg3di0xSDJ2MXptMTAtNy41VjE0YzAgLjU1LS40NSAxLTEgMUgxYy0uNTUgMC0xLS40NS0xLTFWMmMwLS41NS40NS0xIDEtMWg3LjVMMTIgNC41ek0xMSA1TDggMkgxdjEyaDEwVjV6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEdvRmxhbWUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDEyIDE2XCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk01LjA1LjMxYy44MSAyLjE3LjQxIDMuMzgtLjUyIDQuMzFDMy41NSA1LjY3IDEuOTggNi40NS45IDcuOThjLTEuNDUgMi4wNS0xLjcgNi41MyAzLjUzIDcuNy0yLjItMS4xNi0yLjY3LTQuNTItLjMtNi42MS0uNjEgMi4wMy41MyAzLjMzIDEuOTQgMi44NiAxLjM5LS40NyAyLjMuNTMgMi4yNyAxLjY3LS4wMi43OC0uMzEgMS40NC0xLjEzIDEuODEgMy40Mi0uNTkgNC43OC0zLjQyIDQuNzgtNS41NiAwLTIuODQtMi41My0zLjIyLTEuMjUtNS42MS0xLjUyLjEzLTIuMDMgMS4xMy0xLjg5IDIuNzUuMDkgMS4wOC0xLjAyIDEuOC0xLjg2IDEuMzMtLjY3LS40MS0uNjYtMS4xOS0uMDYtMS43OEM4LjE4IDUuMzEgOC42OCAyLjQ1IDUuMDUuMzJMNS4wMy4zbC4wMi4wMXpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gR29Gb2xkRG93biAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMTQgMTZcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTQgMTFsMyAzIDMtM0g4VjVINnY2SDR6bS00IDBjMCAuNTUuNDUgMSAxIDFoMi41bC0xLTFoLTFsMi0ySDVWOEgzLjVsLTItMkg1VjVIMWMtLjU1IDAtMSAuNDUtMSAxbDIuNSAyLjVMMCAxMXptMTAuNS0ySDlWOGgxLjVsMi0ySDlWNWg0Yy41NSAwIDEgLjQ1IDEgMWwtMi41IDIuNUwxNCAxMWMwIC41NS0uNDUgMS0xIDFoLTIuNWwxLTFoMWwtMi0yelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBHb0ZvbGRVcCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMTQgMTZcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTEwIDZMNyAzIDQgNmgydjZoMlY2aDJ6bTQgMGMwLS41NS0uNDUtMS0xLTFoLTIuNWwxIDFoMWwtMiAySDl2MWgxLjVsMiAySDl2MWg0Yy41NSAwIDEtLjQ1IDEtMWwtMi41LTIuNUwxNCA2ek0zLjUgOEg1djFIMy41bC0yIDJINXYxSDFjLS41NSAwLTEtLjQ1LTEtMWwyLjUtMi41TDAgNmMwLS41NS40NS0xIDEtMWgyLjVsLTEgMWgtMWwyIDJ6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEdvRm9sZCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMTQgMTZcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTcgOWwzIDNIOHYzSDZ2LTNINGwzLTN6bTMtNkg4VjBINnYzSDRsMyAzIDMtM3ptNCAyYzAtLjU1LS40NS0xLTEtMWgtMi41bC0xIDFoM2wtMiAyaC03bC0yLTJoM2wtMS0xSDFjLS41NSAwLTEgLjQ1LTEgMWwyLjUgMi41TDAgMTBjMCAuNTUuNDUgMSAxIDFoMi41bDEtMWgtM2wyLTJoN2wyIDJoLTNsMSAxSDEzYy41NSAwIDEtLjQ1IDEtMWwtMi41LTIuNUwxNCA1elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBHb0dlYXIgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDE0IDE2XCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xNCA4Ljc3di0xLjZsLTEuOTQtLjY0LS40NS0xLjA5Ljg4LTEuODQtMS4xMy0xLjEzLTEuODEuOTEtMS4wOS0uNDUtLjY5LTEuOTJoLTEuNmwtLjYzIDEuOTQtMS4xMS40NS0xLjg0LS44OC0xLjEzIDEuMTMuOTEgMS44MS0uNDUgMS4wOUwwIDcuMjN2MS41OWwxLjk0LjY0LjQ1IDEuMDktLjg4IDEuODQgMS4xMyAxLjEzIDEuODEtLjkxIDEuMDkuNDUuNjkgMS45MmgxLjU5bC42My0xLjk0IDEuMTEtLjQ1IDEuODQuODggMS4xMy0xLjEzLS45Mi0xLjgxLjQ3LTEuMDlMMTQgOC43NXYuMDJ6TTcgMTFjLTEuNjYgMC0zLTEuMzQtMy0zczEuMzQtMyAzLTMgMyAxLjM0IDMgMy0xLjM0IDMtMyAzelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBHb0dpZnQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDE0IDE2XCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xMyA0aC0xLjM4Yy4xOS0uMzMuMzMtLjY3LjM2LS45MS4wNi0uNjctLjExLTEuMjItLjUyLTEuNjFDMTEuMSAxLjEgMTAuNjUgMSAxMC4xIDFoLS4xMWMtLjUzLjAyLTEuMTEuMjUtMS41My41OC0uNDIuMzMtLjczLjcyLS45NyAxLjItLjIzLS40OC0uNTUtLjg4LS45Ny0xLjItLjQyLS4zMi0xLS41OC0xLjUzLS41OGgtLjAzYy0uNTYgMC0xLjA2LjA5LTEuNDQuNDgtLjQxLjM5LS41OC45NC0uNTIgMS42MS4wMy4yMy4xNy41OC4zNi45MUgxLjk4Yy0uNTUgMC0xIC40NS0xIDF2M2gxdjVjMCAuNTUuNDUgMSAxIDFoOWMuNTUgMCAxLS40NSAxLTFWOGgxVjVjMC0uNTUtLjQ1LTEtMS0xSDEzem0tNC43OC0uODhjLjE3LS4zNi40Mi0uNjcuNzUtLjkyLjMtLjIzLjcyLS4zOSAxLjA1LS40MWguMDljLjQ1IDAgLjY2LjExLjguMjVzLjMzLjM5LjMuOTVjLS4wNS4xOS0uMjUuNjEtLjUgMWgtMi45bC40MS0uODh2LjAxek00LjA5IDIuMDRjLjEzLS4xMy4zMS0uMjUuOTEtLjI1LjMxIDAgLjcyLjE3IDEuMDMuNDEuMzMuMjUuNTguNTUuNzUuOTJMNy4yIDRINC4zYy0uMjUtLjM5LS40NS0uODEtLjUtMS0uMDMtLjU2LjE2LS44MS4zLS45NWwtLjAxLS4wMXpNNyAxMi45OUgzVjhoNHY1LS4wMXptMC02SDJWNWg1djItLjAxem01IDZIOFY4aDR2NS0uMDF6bTEtNkg4VjVoNXYyLS4wMXpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gR29HaXN0U2VjcmV0IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAxNCAxNlwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNOCAxMC41TDkgMTRINWwxLTMuNUw1LjI1IDloMy41TDggMTAuNXpNMTAgNkg0TDIgN2gxMGwtMi0xek05IDJMNyAzIDUgMiA0IDVoNkw5IDJ6bTQuMDMgNy43NUwxMCA5bDEgMi0yIDNoMy4yMmMuNDUgMCAuODYtLjMxLjk3LS43NWwuNTYtMi4yOGMuMTQtLjUzLS4xOS0xLjA4LS43Mi0xLjIyek00IDlsLTMuMDMuNzVjLS41My4xNC0uODYuNjktLjcyIDEuMjJsLjU2IDIuMjhjLjExLjQ0LjUyLjc1Ljk3Ljc1SDVsLTItMyAxLTJ6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEdvR2lzdCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMTIgMTZcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTcuNSA1TDEwIDcuNSA3LjUgMTBsLS43NS0uNzVMOC41IDcuNSA2Ljc1IDUuNzUgNy41IDV6bS0zIDBMMiA3LjUgNC41IDEwbC43NS0uNzVMMy41IDcuNWwxLjc1LTEuNzVMNC41IDV6TTAgMTNWMmMwLS41NS40NS0xIDEtMWgxMGMuNTUgMCAxIC40NSAxIDF2MTFjMCAuNTUtLjQ1IDEtMSAxSDFjLS41NSAwLTEtLjQ1LTEtMXptMSAwaDEwVjJIMXYxMXpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gR29HaXRCcmFuY2ggKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDEwIDE2XCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xMCA1YzAtMS4xMS0uODktMi0yLTJhMS45OTMgMS45OTMgMCAwIDAtMSAzLjcydi4zYy0uMDIuNTItLjIzLjk4LS42MyAxLjM4LS40LjQtLjg2LjYxLTEuMzguNjMtLjgzLjAyLTEuNDguMTYtMiAuNDVWNC43MmExLjk5MyAxLjk5MyAwIDAgMC0xLTMuNzJDLjg4IDEgMCAxLjg5IDAgM2EyIDIgMCAwIDAgMSAxLjcydjYuNTZjLS41OS4zNS0xIC45OS0xIDEuNzIgMCAxLjExLjg5IDIgMiAyIDEuMTEgMCAyLS44OSAyLTIgMC0uNTMtLjItMS0uNTMtMS4zNi4wOS0uMDYuNDgtLjQxLjU5LS40Ny4yNS0uMTEuNTYtLjE3Ljk0LS4xNyAxLjA1LS4wNSAxLjk1LS40NSAyLjc1LTEuMjVTOC45NSA3Ljc3IDkgNi43M2gtLjAyQzkuNTkgNi4zNyAxMCA1LjczIDEwIDV6TTIgMS44Yy42NiAwIDEuMi41NSAxLjIgMS4yIDAgLjY1LS41NSAxLjItMS4yIDEuMkMxLjM1IDQuMi44IDMuNjUuOCAzYzAtLjY1LjU1LTEuMiAxLjItMS4yem0wIDEyLjQxYy0uNjYgMC0xLjItLjU1LTEuMi0xLjIgMC0uNjUuNTUtMS4yIDEuMi0xLjIuNjUgMCAxLjIuNTUgMS4yIDEuMiAwIC42NS0uNTUgMS4yLTEuMiAxLjJ6bTYtOGMtLjY2IDAtMS4yLS41NS0xLjItMS4yIDAtLjY1LjU1LTEuMiAxLjItMS4yLjY1IDAgMS4yLjU1IDEuMiAxLjIgMCAuNjUtLjU1IDEuMi0xLjIgMS4yelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBHb0dpdENvbW1pdCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMTQgMTZcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTEwLjg2IDdjLS40NS0xLjcyLTItMy0zLjg2LTMtMS44NiAwLTMuNDEgMS4yOC0zLjg2IDNIMHYyaDMuMTRjLjQ1IDEuNzIgMiAzIDMuODYgMyAxLjg2IDAgMy40MS0xLjI4IDMuODYtM0gxNFY3aC0zLjE0ek03IDEwLjJjLTEuMjIgMC0yLjItLjk4LTIuMi0yLjIgMC0xLjIyLjk4LTIuMiAyLjItMi4yIDEuMjIgMCAyLjIuOTggMi4yIDIuMiAwIDEuMjItLjk4IDIuMi0yLjIgMi4yelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBHb0dpdENvbXBhcmUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDE0IDE2XCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk01IDEySDRjLS4yNy0uMDItLjQ4LS4xMS0uNjktLjMxLS4yMS0uMi0uMy0uNDItLjMxLS42OVY0LjcyQTEuOTkzIDEuOTkzIDAgMCAwIDIgMWExLjk5MyAxLjk5MyAwIDAgMC0xIDMuNzJWMTFjLjAzLjc4LjM0IDEuNDcuOTQgMi4wNi42LjU5IDEuMjguOTEgMi4wNi45NGgxdjJsMy0zLTMtM3Yyek0yIDEuOGMuNjYgMCAxLjIuNTUgMS4yIDEuMiAwIC42NS0uNTUgMS4yLTEuMiAxLjJDMS4zNSA0LjIuOCAzLjY1LjggM2MwLS42NS41NS0xLjIgMS4yLTEuMnptMTEgOS40OFY1Yy0uMDMtLjc4LS4zNC0xLjQ3LS45NC0yLjA2LS42LS41OS0xLjI4LS45MS0yLjA2LS45NEg5VjBMNiAzbDMgM1Y0aDFjLjI3LjAyLjQ4LjExLjY5LjMxLjIxLjIuMy40Mi4zMS42OXY2LjI4QTEuOTkzIDEuOTkzIDAgMCAwIDEyIDE1YTEuOTkzIDEuOTkzIDAgMCAwIDEtMy43MnptLTEgMi45MmMtLjY2IDAtMS4yLS41NS0xLjItMS4yIDAtLjY1LjU1LTEuMiAxLjItMS4yLjY1IDAgMS4yLjU1IDEuMiAxLjIgMCAuNjUtLjU1IDEuMi0xLjIgMS4yelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBHb0dpdE1lcmdlIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAxMiAxNlwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTAgN2MtLjczIDAtMS4zOC40MS0xLjczIDEuMDJWOEM3LjIyIDcuOTggNiA3LjY0IDUuMTQgNi45OGMtLjc1LS41OC0xLjUtMS42MS0xLjg5LTIuNDRBMS45OTMgMS45OTMgMCAwIDAgMiAuOTlDLjg5Ljk5IDAgMS44OSAwIDNhMiAyIDAgMCAwIDEgMS43MnY2LjU2Yy0uNTkuMzUtMSAuOTktMSAxLjcyIDAgMS4xMS44OSAyIDIgMmExLjk5MyAxLjk5MyAwIDAgMCAxLTMuNzJWNy42N2MuNjcuNyAxLjQ0IDEuMjcgMi4zIDEuNjkuODYuNDIgMi4wMy42MyAyLjk3LjY0di0uMDJjLjM2LjYxIDEgMS4wMiAxLjczIDEuMDIgMS4xMSAwIDItLjg5IDItMiAwLTEuMTEtLjg5LTItMi0yem0tNi44IDZjMCAuNjYtLjU1IDEuMi0xLjIgMS4yLS42NSAwLTEuMi0uNTUtMS4yLTEuMiAwLS42NS41NS0xLjIgMS4yLTEuMi42NSAwIDEuMi41NSAxLjIgMS4yek0yIDQuMkMxLjM0IDQuMi44IDMuNjUuOCAzYzAtLjY1LjU1LTEuMiAxLjItMS4yLjY1IDAgMS4yLjU1IDEuMiAxLjIgMCAuNjUtLjU1IDEuMi0xLjIgMS4yem04IDZjLS42NiAwLTEuMi0uNTUtMS4yLTEuMiAwLS42NS41NS0xLjIgMS4yLTEuMi42NSAwIDEuMi41NSAxLjIgMS4yIDAgLjY1LS41NSAxLjItMS4yIDEuMnpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gR29HaXRQdWxsUmVxdWVzdCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMTIgMTZcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTExIDExLjI4VjVjLS4wMy0uNzgtLjM0LTEuNDctLjk0LTIuMDZDOS40NiAyLjM1IDguNzggMi4wMyA4IDJIN1YwTDQgM2wzIDNWNGgxYy4yNy4wMi40OC4xMS42OS4zMS4yMS4yLjMuNDIuMzEuNjl2Ni4yOEExLjk5MyAxLjk5MyAwIDAgMCAxMCAxNWExLjk5MyAxLjk5MyAwIDAgMCAxLTMuNzJ6bS0xIDIuOTJjLS42NiAwLTEuMi0uNTUtMS4yLTEuMiAwLS42NS41NS0xLjIgMS4yLTEuMi42NSAwIDEuMi41NSAxLjIgMS4yIDAgLjY1LS41NSAxLjItMS4yIDEuMnpNNCAzYzAtMS4xMS0uODktMi0yLTJhMS45OTMgMS45OTMgMCAwIDAtMSAzLjcydjYuNTZBMS45OTMgMS45OTMgMCAwIDAgMiAxNWExLjk5MyAxLjk5MyAwIDAgMCAxLTMuNzJWNC43MmMuNTktLjM0IDEtLjk4IDEtMS43MnptLS44IDEwYzAgLjY2LS41NSAxLjItMS4yIDEuMi0uNjUgMC0xLjItLjU1LTEuMi0xLjIgMC0uNjUuNTUtMS4yIDEuMi0xLjIuNjUgMCAxLjIuNTUgMS4yIDEuMnpNMiA0LjJDMS4zNCA0LjIuOCAzLjY1LjggM2MwLS42NS41NS0xLjIgMS4yLTEuMi42NSAwIDEuMi41NSAxLjIgMS4yIDAgLjY1LS41NSAxLjItMS4yIDEuMnpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gR29HaXRodWJBY3Rpb24gKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDE2IDE2XCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk05IDJoNmMuNTUgMCAxIC40NSAxIDF2MTBjMCAuNTUtLjQ1IDEtMSAxSDlhMSAxIDAgMSAxLTIgMEgxYy0uNTUgMC0xLS40NS0xLTFWM2MwLS41NS40NS0xIDEtMWg2YTEgMSAwIDEgMSAyIDB6bTYgMXYxMEgxVjNoMTR6bS0yLjUgNGExLjUgMS41IDAgMSAwIDAtMyAxLjUgMS41IDAgMCAwIDAgM3pcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gR29HbG9iZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMTQgMTZcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTcgMUMzLjE0IDEgMCA0LjE0IDAgOHMzLjE0IDcgNyA3Yy40OCAwIC45NC0uMDUgMS4zOC0uMTQtLjE3LS4wOC0uMi0uNzMtLjAyLTEuMDkuMTktLjQxLjgxLTEuNDUuMi0xLjgtLjYxLS4zNS0uNDQtLjUtLjgxLS45MS0uMzctLjQxLS4yMi0uNDctLjI1LS41OC0uMDgtLjM0LjM2LS44OS4zOS0uOTQuMDItLjA2LjAyLS4yNyAwLS4zMyAwLS4wOC0uMjctLjIyLS4zNC0uMjMtLjA2IDAtLjExLjExLS4yLjEzLS4wOS4wMi0uNS0uMjUtLjU5LS4zMy0uMDktLjA4LS4xNC0uMjMtLjI3LS4zNC0uMTMtLjEzLS4xNC0uMDMtLjMzLS4xMXMtLjgtLjMxLTEuMjgtLjQ4Yy0uNDgtLjE5LS41Mi0uNDctLjUyLS42Ni0uMDItLjItLjMtLjQ3LS40Mi0uNjctLjE0LS4yLS4xNi0uNDctLjItLjQxLS4wNC4wNi4yNS43OC4yLjgxLS4wNS4wMi0uMTYtLjItLjMtLjM4LS4xNC0uMTkuMTQtLjA5LS4zLS45NXMuMTQtMS4zLjE3LTEuNzVjLjAzLS40NS4zOC4xNy4xOS0uMTMtLjE5LS4zIDAtLjg5LS4xNC0xLjExLS4xMy0uMjItLjg4LjI1LS44OC4yNS4wMi0uMjIuNjktLjU4IDEuMTYtLjkyLjQ3LS4zNC43OC0uMDYgMS4xNi4wNS4zOS4xMy40MS4wOS4yOC0uMDUtLjEzLS4xMy4wNi0uMTcuMzYtLjEzLjI4LjA1LjM4LjQxLjgzLjM2LjQ3LS4wMy4wNS4wOS4xMS4yMnMtLjA2LjExLS4zOC4zYy0uMy4yLjAyLjIyLjU1LjYxcy4zOC0uMjUuMzEtLjU1Yy0uMDctLjMuMzktLjA2LjM5LS4wNi4zMy4yMi4yNy4wMi41LjA4LjIzLjA2LjkxLjY0LjkxLjY0LS44My40NC0uMzEuNDgtLjE3LjU5LjE0LjExLS4yOC4zLS4yOC4zLS4xNy0uMTctLjE5LjAyLS4zLjA4LS4xMS4wNi0uMDIuMjItLjAyLjIyLS41Ni4wOS0uNDQuNjktLjQyLjgzIDAgLjE0LS4zOC4zNi0uNDcuNTgtLjA5LjIuMjUuNjQuMDYuNjYtLjE5LjAzLS4zNC0uNjYtMS4zMS0uNDEtLjMuMDgtLjk0LjQxLS41OSAxLjA4LjM2LjY5LjkyLS4xOSAxLjExLS4wOS4xOS4xLS4wNi41My0uMDIuNTUuMDQuMDIuNTMuMDIuNTYuNjEuMDMuNTkuNzcuNTMuOTIuNTUuMTcgMCAuNy0uNDQuNzctLjQ1LjA2LS4wMy4zOC0uMjggMS4wMy4wOS42Ni4zNi45OC4zMSAxLjIuNDcuMjIuMTYuMDguNDcuMjguNTguMi4xMSAxLjA2LS4wMyAxLjI4LjMxLjIyLjM0LS44OCAyLjA5LTEuMjIgMi4yOC0uMzQuMTktLjQ4LjY0LS44NC45MnMtLjgxLjY0LTEuMjcuOTFjLS40MS4yMy0uNDcuNjYtLjY2LjggMy4xNC0uNyA1LjQ4LTMuNSA1LjQ4LTYuODQgMC0zLjg2LTMuMTQtNy03LTdMNyAxem0xLjY0IDYuNTZjLS4wOS4wMy0uMjguMjItLjc4LS4wOC0uNDgtLjMtLjgxLS4yMy0uODYtLjI4IDAgMC0uMDUtLjExLjE3LS4xNC40NC0uMDUuOTguNDEgMS4xMS40MS4xMyAwIC4xOS0uMTMuNDEtLjA1LjIyLjA4LjA1LjEzLS4wNS4xNHpNNi4zNCAxLjdjLS4wNS0uMDMuMDMtLjA4LjA5LS4xNC4wMy0uMDMuMDItLjExLjA1LS4xNC4xMS0uMTEuNjEtLjI1LjUyLjAzLS4xMS4yNy0uNTguMy0uNjYuMjV6bTEuMjMuODljLS4xOS0uMDItLjU4LS4wNS0uNTItLjE0LjMtLjI4LS4wOS0uMzgtLjM0LS4zOC0uMjUtLjAyLS4zNC0uMTYtLjIyLS4xOS4xMi0uMDMuNjEuMDIuNy4wOC4wOC4wNi41Mi4yNS41NS4zOC4wMi4xMyAwIC4yNS0uMTcuMjV6bTEuNDctLjA1Yy0uMTQuMDktLjgzLS40MS0uOTUtLjUyLS41Ni0uNDgtLjg5LS4zMS0xLS40MS0uMTEtLjEtLjA4LS4xOS4xMS0uMzQuMTktLjE1LjY5LjA2IDEgLjA5LjMuMDMuNjYuMjcuNjYuNTUuMDIuMjUuMzMuNS4xOS42M2gtLjAxelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBHb0dyYWJiZXIgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDggMTZcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTggNHYxSDBWNGg4ek0wIDhoOFY3SDB2MXptMCAzaDh2LTFIMHYxelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBHb0dyYXBoIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAxNiAxNlwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTYgMTR2MUgwVjBoMXYxNGgxNXpNNSAxM0gzVjhoMnY1em00IDBIN1YzaDJ2MTB6bTQgMGgtMlY2aDJ2N3pcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gR29IZWFydCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMTIgMTZcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTkgMmMtLjk3IDAtMS42OS40Mi0yLjIgMS0uNTEuNTgtLjc4LjkyLS44IDEtLjAyLS4wOC0uMjgtLjQyLS44LTEtLjUyLS41OC0xLjE3LTEtMi4yLTEtMS42MzIuMDg2LTIuOTU0IDEuMzMzLTMgMyAwIC41Mi4wOSAxLjUyLjY3IDIuNjdDMS4yNSA4LjgyIDMuMDEgMTAuNjEgNiAxM2MyLjk4LTIuMzkgNC43Ny00LjE3IDUuMzQtNS4zM0MxMS45MSA2LjUxIDEyIDUuNSAxMiA1Yy0uMDQ3LTEuNjktMS4zNDItMi45MTMtMy0zelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBHb0hpc3RvcnkgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDE0IDE2XCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk04IDEzSDZWNmg1djJIOHY1ek03IDFDNC44MSAxIDIuODcgMi4wMiAxLjU5IDMuNTlMMCAydjRoNEwyLjUgNC41QzMuNTUgMy4xNyA1LjE3IDIuMyA3IDIuM2MzLjE0IDAgNS43IDIuNTYgNS43IDUuN3MtMi41NiA1LjctNS43IDUuN0E1LjcxIDUuNzEgMCAwIDEgMS4zIDhjMC0uMzQuMDMtLjY3LjA5LTFILjA4Qy4wMyA3LjMzIDAgNy42NiAwIDhjMCAzLjg2IDMuMTQgNyA3IDdzNy0zLjE0IDctNy0zLjE0LTctNy03elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBHb0hvbWUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDE2IDE2XCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xNiA5bC0zLTNWMmgtMnYyTDggMSAwIDloMmwxIDVjMCAuNTUuNDUgMSAxIDFoOGMuNTUgMCAxLS40NSAxLTFsMS01aDJ6bS00IDVIOXYtNEg3djRINEwyLjgxIDcuNjkgOCAyLjVsNS4xOSA1LjE5TDEyIDE0elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBHb0hvcml6b250YWxSdWxlIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAxMCAxNlwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMSA3aDJ2MmgxVjNIM3YzSDFWM0gwdjZoMVY3em05IDJWN0g5djJoMXptMC0zVjRIOXYyaDF6TTcgNlY0aDJWM0g2djZoMVY3aDJWNkg3em0tNyA3aDEwdi0ySDB2MnpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gR29IdWJvdCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMTQgMTZcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTMgNmMtLjU1IDAtMSAuNDUtMSAxdjJjMCAuNTUuNDUgMSAxIDFoOGMuNTUgMCAxLS40NSAxLTFWN2MwLS41NS0uNDUtMS0xLTFIM3ptOCAxLjc1TDkuNzUgOWgtMS41TDcgNy43NSA1Ljc1IDloLTEuNUwzIDcuNzVWN2guNzVMNSA4LjI1IDYuMjUgN2gxLjVMOSA4LjI1IDEwLjI1IDdIMTF2Ljc1ek01IDExaDR2MUg1di0xem0yLTlDMy4xNCAyIDAgNC45MSAwIDguNVYxM2MwIC41NS40NSAxIDEgMWgxMmMuNTUgMCAxLS40NSAxLTFWOC41QzE0IDQuOTEgMTAuODYgMiA3IDJ6bTYgMTFIMVY4LjVjMC0zLjA5IDIuNjQtNS41OSA2LTUuNTlzNiAyLjUgNiA1LjU5VjEzelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBHb0luYm94IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAxNCAxNlwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTQgOWwtMS4xMy03LjE0Yy0uMDgtLjQ4LS41LS44Ni0xLS44NkgyLjEzYy0uNSAwLS45Mi4zOC0xIC44NkwwIDl2NWMwIC41NS40NSAxIDEgMWgxMmMuNTUgMCAxLS40NSAxLTFWOXptLTMuMjguNTVsLS40NC44OWMtLjE3LjM0LS41Mi41Ni0uOTEuNTZINC42MWMtLjM4IDAtLjcyLS4yMi0uODktLjU1bC0uNDQtLjkxYy0uMTctLjMzLS41Mi0uNTUtLjg5LS41NUgxbDEtN2gxMGwxIDdoLTEuMzhjLS4zOSAwLS43My4yMi0uOTEuNTVsLjAxLjAxelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBHb0luZm8gKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDE0IDE2XCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk02LjMgNS42OWEuOTQyLjk0MiAwIDAgMS0uMjgtLjdjMC0uMjguMDktLjUyLjI4LS43LjE5LS4xOC40Mi0uMjguNy0uMjguMjggMCAuNTIuMDkuNy4yOC4xOC4xOS4yOC40Mi4yOC43IDAgLjI4LS4wOS41Mi0uMjguN2ExIDEgMCAwIDEtLjcuM2MtLjI4IDAtLjUyLS4xMS0uNy0uM3pNOCA3Ljk5Yy0uMDItLjI1LS4xMS0uNDgtLjMxLS42OS0uMi0uMTktLjQyLS4zLS42OS0uMzFINmMtLjI3LjAyLS40OC4xMy0uNjkuMzEtLjIuMi0uMy40NC0uMzEuNjloMXYzYy4wMi4yNy4xMS41LjMxLjY5LjIuMi40Mi4zMS42OS4zMWgxYy4yNyAwIC40OC0uMTEuNjktLjMxLjItLjE5LjMtLjQyLjMxLS42OUg4VjcuOTh2LjAxek03IDIuM2MtMy4xNCAwLTUuNyAyLjU0LTUuNyA1LjY4IDAgMy4xNCAyLjU2IDUuNyA1LjcgNS43czUuNy0yLjU1IDUuNy01LjdjMC0zLjE1LTIuNTYtNS42OS01LjctNS42OXYuMDF6TTcgLjk4YzMuODYgMCA3IDMuMTQgNyA3cy0zLjE0IDctNyA3LTctMy4xMi03LTcgMy4xNC03IDctN3pcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gR29Jc3N1ZUNsb3NlZCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMTYgMTZcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTcgMTBoMnYySDd2LTJ6bTItNkg3djVoMlY0em0xLjUgMS41bC0xIDFMMTIgOWw0LTQuNS0xLTFMMTIgN2wtMS41LTEuNXpNOCAxMy43QTUuNzEgNS43MSAwIDAgMSAyLjMgOGMwLTMuMTQgMi41Ni01LjcgNS43LTUuNyAxLjgzIDAgMy40NS44OCA0LjUgMi4ybC45Mi0uOTJBNi45NDcgNi45NDcgMCAwIDAgOCAxQzQuMTQgMSAxIDQuMTQgMSA4czMuMTQgNyA3IDcgNy0zLjE0IDctN2wtMS41MiAxLjUyYy0uNjYgMi40MS0yLjg2IDQuMTktNS40OCA0LjE5di0uMDF6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEdvSXNzdWVPcGVuZWQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDE0IDE2XCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk03IDIuM2MzLjE0IDAgNS43IDIuNTYgNS43IDUuN3MtMi41NiA1LjctNS43IDUuN0E1LjcxIDUuNzEgMCAwIDEgMS4zIDhjMC0zLjE0IDIuNTYtNS43IDUuNy01Ljd6TTcgMUMzLjE0IDEgMCA0LjE0IDAgOHMzLjE0IDcgNyA3IDctMy4xNCA3LTctMy4xNC03LTctN3ptMSAzSDZ2NWgyVjR6bTAgNkg2djJoMnYtMnpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gR29Jc3N1ZVJlb3BlbmVkIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAxNCAxNlwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNOCA5SDZWNGgydjV6bS0yIDNoMnYtMkg2djJ6bTYuMzMtMkgxMGwxLjUgMS41Yy0xLjA1IDEuMzMtMi42NyAyLjItNC41IDIuMkE1LjcxIDUuNzEgMCAwIDEgMS4zIDhjMC0uMzQuMDMtLjY3LjA5LTFILjA4Qy4wMyA3LjMzIDAgNy42NiAwIDhjMCAzLjg2IDMuMTQgNyA3IDcgMi4xOSAwIDQuMTMtMS4wMiA1LjQxLTIuNTlMMTQgMTR2LTRoLTEuNjd6TTEuNjcgNkg0TDIuNSA0LjVDMy41NSAzLjE3IDUuMTcgMi4zIDcgMi4zYzMuMTQgMCA1LjcgMi41NiA1LjcgNS43IDAgLjM0LS4wMy42Ny0uMDkgMWgxLjMxYy4wNS0uMzMuMDgtLjY2LjA4LTEgMC0zLjg2LTMuMTQtNy03LTctMi4xOSAwLTQuMTMgMS4wMi01LjQxIDIuNTlMMCAydjRoMS42N3pcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gR29JdGFsaWMgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDYgMTZcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTIuODEgNWgxLjk4TDMgMTRIMWwxLjgxLTl6bS4zNi0yLjdjMC0uNy41OC0xLjMgMS4zMy0xLjMuNTYgMCAxLjEzLjM4IDEuMTMgMS4wMyAwIC43NS0uNTkgMS4zLTEuMzMgMS4zLS41OCAwLTEuMTMtLjM4LTEuMTMtMS4wM3pcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gR29KZXJzZXkgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDE0IDE2XCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk00LjUgNmwtLjUuNXY1bC41LjVoMmwuNS0uNXYtNUw2LjUgNmgtMnpNNiAxMUg1VjdoMXY0em02LjI3LTcuMjVDMTIuMDUgMi4zNyAxMS45NiAxLjEyIDEyIDBIOS4wMmMwIC4yNy0uMTMuNDgtLjM5LjY5LS4yNS4yLS42My4zLTEuMTMuMy0uNSAwLS44OC0uMDktMS4xMy0uMy0uMjMtLjItLjM2LS40Mi0uMzYtLjY5SDNjLjA1IDEuMTMtLjAzIDIuMzgtLjI1IDMuNzVDMi41NSA1LjEzIDEuOTUgNS44OCAxIDZ2OWMuMDIuMjcuMTEuNDguMzEuNjkuMi4yMS40Mi4zLjY5LjMxaDExYy4yNy0uMDIuNDgtLjExLjY5LS4zMS4yMS0uMi4zLS40Mi4zMS0uNjlWNmMtLjk1LS4xMy0xLjUzLS44OC0xLjc1LTIuMjVoLjAyek0xMyAxNUgyVjdjLjg5LS41IDEuNDgtMS4yNSAxLjcyLTIuMjVTNC4wMyAyLjUgNCAxaDFjLS4wMi43OC4xNiAxLjQ3LjUyIDIuMDYuMzYuNTggMS4wMi44OSAyIC45NC45OC0uMDIgMS42NC0uMzMgMi0uOTQuMzYtLjU5LjUtMS4yOC40OC0yLjA2aDFjLjAyIDEuNDIuMTMgMi41NS4zMyAzLjM4LjIuODEuNjkgMiAxLjY3IDIuNjN2OFYxNXpNOC41IDZsLS41LjV2NWwuNS41aDJsLjUtLjV2LTVsLS41LS41aC0yem0xLjUgNUg5VjdoMXY0elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBHb0tlYmFiSG9yaXpvbnRhbCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMTMgMTZcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTEuNSA5YTEuNSAxLjUgMCAxIDAgMC0zIDEuNSAxLjUgMCAwIDAgMCAzem01IDBhMS41IDEuNSAwIDEgMCAwLTMgMS41IDEuNSAwIDAgMCAwIDN6TTEzIDcuNWExLjUgMS41IDAgMSAxLTMgMCAxLjUgMS41IDAgMCAxIDMgMHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gR29LZWJhYlZlcnRpY2FsIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAzIDE2XCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0wIDIuNWExLjUgMS41IDAgMSAwIDMgMCAxLjUgMS41IDAgMCAwLTMgMHptMCA1YTEuNSAxLjUgMCAxIDAgMyAwIDEuNSAxLjUgMCAwIDAtMyAwek0xLjUgMTRhMS41IDEuNSAwIDEgMSAwLTMgMS41IDEuNSAwIDAgMSAwIDN6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEdvS2V5IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAxNCAxNlwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTIuODMgMi4xN0MxMi4wOCAxLjQyIDExLjE0IDEuMDMgMTAgMWMtMS4xMy4wMy0yLjA4LjQyLTIuODMgMS4xN1M2LjA0IDMuODYgNi4wMSA1YzAgLjMuMDMuNTkuMDkuODlMMCAxMnYxbDEgMWgybDEtMXYtMWgxdi0xaDF2LTFoMmwxLjA5LTEuMTFjLjMuMDguNTkuMTEuOTEuMTEgMS4xNC0uMDMgMi4wOC0uNDIgMi44My0xLjE3UzEzLjk3IDYuMTQgMTQgNWMtLjAzLTEuMTQtLjQyLTIuMDgtMS4xNy0yLjgzek0xMSA1LjM4Yy0uNzcgMC0xLjM4LS42MS0xLjM4LTEuMzggMC0uNzcuNjEtMS4zOCAxLjM4LTEuMzguNzcgMCAxLjM4LjYxIDEuMzggMS4zOCAwIC43Ny0uNjEgMS4zOC0xLjM4IDEuMzh6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEdvS2V5Ym9hcmQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDE2IDE2XCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xMCA1SDlWNGgxdjF6TTMgNkgydjFoMVY2em01LTJIN3YxaDFWNHpNNCA0SDJ2MWgyVjR6bTggN2gydi0xaC0ydjF6TTggN2gxVjZIOHYxem0tNCAzSDJ2MWgydi0xem04LTZoLTF2MWgxVjR6bTIgMGgtMXYxaDFWNHptLTIgNWgyVjZoLTJ2M3ptNC02djljMCAuNTUtLjQ1IDEtMSAxSDFjLS41NSAwLTEtLjQ1LTEtMVYzYzAtLjU1LjQ1LTEgMS0xaDE0Yy41NSAwIDEgLjQ1IDEgMXptLTEgMEgxdjloMTRWM3pNNiA3aDFWNkg2djF6bTAtM0g1djFoMVY0ek00IDdoMVY2SDR2MXptMSA0aDZ2LTFINXYxem01LTRoMVY2aC0xdjF6TTMgOEgydjFoMVY4em01IDB2MWgxVjhIOHpNNiA4djFoMVY4SDZ6TTUgOEg0djFoMVY4em01IDFoMVY4aC0xdjF6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEdvTGF3IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAxNCAxNlwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNNyA0Yy0uODMgMC0xLjUtLjY3LTEuNS0xLjVTNi4xNyAxIDcgMXMxLjUuNjcgMS41IDEuNVM3LjgzIDQgNyA0em03IDZjMCAxLjExLS44OSAyLTIgMmgtMWMtMS4xMSAwLTItLjg5LTItMmwyLTRoLTFjLS41NSAwLTEtLjQ1LTEtMUg4djhjLjQyIDAgMSAuNDUgMSAxaDFjLjQyIDAgMSAuNDUgMSAxSDNjMC0uNTUuNTgtMSAxLTFoMWMwLS41NS41OC0xIDEtMWguMDNMNiA1SDVjMCAuNTUtLjQ1IDEtMSAxSDNsMiA0YzAgMS4xMS0uODkgMi0yIDJIMmMtMS4xMSAwLTItLjg5LTItMmwyLTRIMVY1aDNjMC0uNTUuNDUtMSAxLTFoNGMuNTUgMCAxIC40NSAxIDFoM3YxaC0xbDIgNHpNMi41IDdMMSAxMGgzTDIuNSA3ek0xMyAxMGwtMS41LTMtMS41IDNoM3pcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gR29MaWdodEJ1bGIgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDEyIDE2XCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk02LjUgMEMzLjQ4IDAgMSAyLjE5IDEgNWMwIC45Mi41NSAyLjI1IDEgMyAxLjM0IDIuMjUgMS43OCAyLjc4IDIgNHYxaDV2LTFjLjIyLTEuMjIuNjYtMS43NSAyLTQgLjQ1LS43NSAxLTIuMDggMS0zIDAtMi44MS0yLjQ4LTUtNS41LTV6bTMuNjQgNy40OGMtLjI1LjQ0LS40Ny44LS42NyAxLjExLS44NiAxLjQxLTEuMjUgMi4wNi0xLjQ1IDMuMjMtLjAyLjA1LS4wMi4xMS0uMDIuMTdINWMwLS4wNiAwLS4xMy0uMDItLjE3LS4yLTEuMTctLjU5LTEuODMtMS40NS0zLjIzLS4yLS4zMS0uNDItLjY3LS42Ny0xLjExQzIuNDQgNi43OCAyIDUuNjUgMiA1YzAtMi4yIDIuMDItNCA0LjUtNCAxLjIyIDAgMi4zNi40MiAzLjIyIDEuMTlDMTAuNTUgMi45NCAxMSAzLjk0IDExIDVjMCAuNjYtLjQ0IDEuNzgtLjg2IDIuNDh6TTQgMTRoNWMtLjIzIDEuMTQtMS4zIDItMi41IDJzLTIuMjctLjg2LTIuNS0yelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBHb0xpbmtFeHRlcm5hbCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMTIgMTZcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTExIDEwaDF2M2MwIC41NS0uNDUgMS0xIDFIMWMtLjU1IDAtMS0uNDUtMS0xVjNjMC0uNTUuNDUtMSAxLTFoM3YxSDF2MTBoMTB2LTN6TTYgMmwyLjI1IDIuMjVMNSA3LjUgNi41IDlsMy4yNS0zLjI1TDEyIDhWMkg2elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBHb0xpbmsgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDE2IDE2XCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk00IDloMXYxSDRjLTEuNSAwLTMtMS42OS0zLTMuNVMyLjU1IDMgNCAzaDRjMS40NSAwIDMgMS42OSAzIDMuNSAwIDEuNDEtLjkxIDIuNzItMiAzLjI1VjguNTljLjU4LS40NSAxLTEuMjcgMS0yLjA5QzEwIDUuMjIgOC45OCA0IDggNEg0Yy0uOTggMC0yIDEuMjItMiAyLjVTMyA5IDQgOXptOS0zaC0xdjFoMWMxIDAgMiAxLjIyIDIgMi41UzEzLjk4IDEyIDEzIDEySDljLS45OCAwLTItMS4yMi0yLTIuNSAwLS44My40Mi0xLjY0IDEtMi4wOVY2LjI1Yy0xLjA5LjUzLTIgMS44NC0yIDMuMjVDNiAxMS4zMSA3LjU1IDEzIDkgMTNoNGMxLjQ1IDAgMy0xLjY5IDMtMy41UzE0LjUgNiAxMyA2elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBHb0xpc3RPcmRlcmVkIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAxMyAxNlwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTIuMDEgMTNjMCAuNTkgMCAxLS41OSAxSDQuNmMtLjU5IDAtLjU5LS40MS0uNTktMSAwLS41OSAwLTEgLjU5LTFoNi44MWMuNTkgMCAuNTkuNDEuNTkgMWguMDF6TTQuNiA0aDYuODFDMTIgNCAxMiAzLjU5IDEyIDNjMC0uNTkgMC0xLS41OS0xSDQuNmMtLjU5IDAtLjU5LjQxLS41OSAxIDAgLjU5IDAgMSAuNTkgMXptNi44MSAzSDQuNmMtLjU5IDAtLjU5LjQxLS41OSAxIDAgLjU5IDAgMSAuNTkgMWg2LjgxQzEyIDkgMTIgOC41OSAxMiA4YzAtLjU5IDAtMS0uNTktMXptLTkuNC02aC0uNzJjLS4zLjE5LS41OC4yNS0xLjAzLjM0VjJoLjc1djIuMTRILjE3VjVoMi44NHYtLjg2aC0xVjF6bS4zOTIgOC4xMmMtLjEyOSAwLS41OTIuMDQtLjgwMi4wNy41My0uNTYgMS4xNC0xLjI1IDEuMTQtMS44OUMyLjcyIDYuNTIgMi4xOCA2IDEuMzggNmMtLjU5IDAtLjk3LjItMS4zOC42NGwuNTguNThjLjE5LS4xOS4zOC0uMzguNjQtLjM4LjI4IDAgLjQ4LjE2LjQ4LjUyIDAgLjUzLS43NyAxLjItMS43IDIuMDZWMTBoM3YtLjg4aC0uNTk4em0tLjIyMiAzLjc5di0uMDNjLjQ0LS4xOS42NC0uNDcuNjQtLjg2IDAtLjctLjU2LTEuMTEtMS40NC0xLjExLS40OCAwLS44OS4xOS0xLjI4LjUybC41NS42NGMuMjUtLjIuNDQtLjMxLjY5LS4zMS4yNyAwIC40Mi4xMy40Mi4zNiAwIC4yNy0uMi40NC0uODYuNDR2Ljc1Yy44MyAwIC45OC4xNy45OC40NyAwIC4yNS0uMjMuMzgtLjU4LjM4LS4yOCAwLS41Ni0uMTQtLjgxLS4zOGwtLjQ4LjY2Yy4zLjM2Ljc3LjU2IDEuNDEuNTYuODMgMCAxLjUzLS40MSAxLjUzLTEuMTYgMC0uNS0uMzEtLjgxLS43Ny0uOTR2LjAxelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBHb0xpc3RVbm9yZGVyZWQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDEyIDE2XCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0yIDEzYzAgLjU5IDAgMS0uNTkgMUguNTlDMCAxNCAwIDEzLjU5IDAgMTNjMC0uNTkgMC0xIC41OS0xaC44MWMuNTkgMCAuNTkuNDEuNTkgMUgyem0yLjU5LTloNi44MWMuNTkgMCAuNTktLjQxLjU5LTEgMC0uNTkgMC0xLS41OS0xSDQuNTlDNCAyIDQgMi40MSA0IDNjMCAuNTkgMCAxIC41OSAxek0xLjQxIDdILjU5QzAgNyAwIDcuNDEgMCA4YzAgLjU5IDAgMSAuNTkgMWguODFjLjU5IDAgLjU5LS40MS41OS0xIDAtLjU5IDAtMS0uNTktMWguMDF6bTAtNUguNTlDMCAyIDAgMi40MSAwIDNjMCAuNTkgMCAxIC41OSAxaC44MWMuNTkgMCAuNTktLjQxLjU5LTEgMC0uNTkgMC0xLS41OS0xaC4wMXptMTAgNUg0LjU5QzQgNyA0IDcuNDEgNCA4YzAgLjU5IDAgMSAuNTkgMWg2LjgxYy41OSAwIC41OS0uNDEuNTktMSAwLS41OSAwLTEtLjU5LTFoLjAxem0wIDVINC41OUM0IDEyIDQgMTIuNDEgNCAxM2MwIC41OSAwIDEgLjU5IDFoNi44MWMuNTkgMCAuNTktLjQxLjU5LTEgMC0uNTkgMC0xLS41OS0xaC4wMXpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gR29Mb2NhdGlvbiAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMTIgMTZcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTYgMEMyLjY5IDAgMCAyLjUgMCA1LjUgMCAxMC4wMiA2IDE2IDYgMTZzNi01Ljk4IDYtMTAuNUMxMiAyLjUgOS4zMSAwIDYgMHptMCAxNC41NUM0LjE0IDEyLjUyIDEgOC40NCAxIDUuNSAxIDMuMDIgMy4yNSAxIDYgMWMxLjM0IDAgMi42MS40OCAzLjU2IDEuMzYuOTIuODYgMS40NCAxLjk3IDEuNDQgMy4xNCAwIDIuOTQtMy4xNCA3LjAyLTUgOS4wNXpNOCA1LjVjMCAxLjExLS44OSAyLTIgMi0xLjExIDAtMi0uODktMi0yIDAtMS4xMS44OS0yIDItMiAxLjExIDAgMiAuODkgMiAyelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBHb0xvY2sgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDEyIDE2XCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk00IDEzSDN2LTFoMXYxem04LTZ2N2MwIC41NS0uNDUgMS0xIDFIMWMtLjU1IDAtMS0uNDUtMS0xVjdjMC0uNTUuNDUtMSAxLTFoMVY0YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDR2MmgxYy41NSAwIDEgLjQ1IDEgMXpNMy44IDZoNC40MVY0YzAtMS4yMi0uOTgtMi4yLTIuMi0yLjItMS4yMiAwLTIuMi45OC0yLjIgMi4ydjJIMy44ek0xMSA3SDJ2N2g5Vjd6TTQgOEgzdjFoMVY4em0wIDJIM3YxaDF2LTF6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEdvTG9nb0dpc3QgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDI1IDE2XCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk00LjcgOC43M2gyLjQ1djQuMDJjLS41NS4yNy0xLjY0LjM0LTIuNTMuMzQtMi41NiAwLTMuNDctMi4yLTMuNDctNS4wNSAwLTIuODUuOTEtNS4wNiAzLjQ4LTUuMDYgMS4yOCAwIDIuMDYuMjMgMy4yOC43M1YyLjY2QzcuMjcgMi4zMyA2LjI1IDIgNC42MyAyIDEuMTMgMiAwIDQuNjkgMCA4LjAzYzAgMy4zNCAxLjExIDYuMDMgNC42MyA2LjAzIDEuNjQgMCAyLjgxLS4yNyAzLjU5LS42NFY3LjczSDQuN3Yxem02LjM5IDMuNzJWNi4wNmgtMS4wNXY2LjI4YzAgMS4yNS41OCAxLjcyIDEuNzIgMS43MnYtLjg5Yy0uNDggMC0uNjctLjE2LS42Ny0uN3YtLjAyem0uMjUtOC43MmMwLS40NC0uMzMtLjc4LS43OC0uNzhzLS43Ny4zNC0uNzcuNzguMzMuNzguNzcuNzguNzgtLjM0Ljc4LS43OHptNC4zNCA1LjY5Yy0xLjUtLjEzLTEuNzgtLjQ4LTEuNzgtMS4xNyAwLS43Ny4zMy0xLjM0IDEuODgtMS4zNCAxLjA1IDAgMS42Ni4xNiAyLjI3LjM2di0uOTRjLS42OS0uMy0xLjUyLS4zOS0yLjI1LS4zOS0yLjIgMC0yLjkyIDEuMi0yLjkyIDIuMzEgMCAxLjA4LjQ3IDEuODggMi43MyAyLjA4IDEuNTUuMTMgMS43Ny42MyAxLjc3IDEuMzQgMCAuNzMtLjQ0IDEuNDItMi4wNiAxLjQyLTEuMTEgMC0xLjg2LS4xOS0yLjMzLS4zNnYuOTRjLjUuMiAxLjU4LjM5IDIuMzMuMzkgMi4zOCAwIDMuMTQtMS4yIDMuMTQtMi40MSAwLTEuMjgtLjUzLTIuMDMtMi43NS0yLjIzaC0uMDN6bTguNTgtMi40N3YtLjg2aC0yLjQydi0yLjVsLTEuMDguMzF2Mi4xMWwtMS41Ni40NHYuNDhoMS41NnY1YzAgMS41MyAxLjE5IDIuMTMgMi41IDIuMTMuMTkgMCAuNTItLjAyLjY5LS4wNXYtLjg5Yy0uMTkuMDMtLjQxLjAzLS42MS4wMy0uOTcgMC0xLjUtLjM5LTEuNS0xLjM0VjYuOTRoMi40MnYuMDItLjAxelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBHb0xvZ29HaXRodWIgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDQ1IDE2XCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xOC41MyAxMi4wM2gtLjAyYy4wMDkgMCAuMDE1LjAxLjAyNC4wMTFoLjAwNmwtLjAxLS4wMXptLjAwNC4wMTFjLS4wOTMuMDAxLS4zMjcuMDUtLjU3NC4wNS0uNzggMC0xLjA1LS4zNi0xLjA1LS44M1Y4LjEzaDEuNTljLjA5IDAgLjE2LS4wOC4xNi0uMTl2LTEuN2MwLS4wOS0uMDgtLjE3LS4xNi0uMTdoLTEuNTlWMy45NmMwLS4wOC0uMDUtLjEzLS4xNC0uMTNoLTIuMTZjLS4wOSAwLS4xNC4wNS0uMTQuMTN2Mi4xN3MtMS4wOS4yNy0xLjE2LjI4Yy0uMDguMDItLjEzLjA5LS4xMy4xN3YxLjM2YzAgLjExLjA4LjE5LjE3LjE5aDEuMTF2My4yOGMwIDIuNDQgMS43IDIuNjkgMi44NiAyLjY5LjUzIDAgMS4xNy0uMTcgMS4yNy0uMjIuMDYtLjAyLjA5LS4wOS4wOS0uMTZ2LTEuNWEuMTc3LjE3NyAwIDAgMC0uMTQ2LS4xOHpNNDIuMjMgOS44NGMwLTEuODEtLjczLTIuMDUtMS41LTEuOTctLjYuMDQtMS4wOC4zNC0xLjA4LjM0djMuNTJzLjQ5LjM0IDEuMjIuMzZjMS4wMy4wMyAxLjM2LS4zNCAxLjM2LTIuMjV6bTIuNDMtLjE2YzAgMy40My0xLjExIDQuNDEtMy4wNSA0LjQxLTEuNjQgMC0yLjUyLS44My0yLjUyLS44M3MtLjA0LjQ2LS4wOS41MmMtLjAzLjA2LS4wOC4wOC0uMTQuMDhoLTEuNDhjLS4xIDAtLjE5LS4wOC0uMTktLjE3bC4wMi0xMS4xMWMwLS4wOS4wOC0uMTcuMTctLjE3aDIuMTNjLjA5IDAgLjE3LjA4LjE3LjE3djMuNzdzLjgyLS41MyAyLjAyLS41M2wtLjAxLS4wMmMxLjIgMCAyLjk3LjQ1IDIuOTcgMy44OHptLTguNzItMy42MWgtMi4xYy0uMTEgMC0uMTcuMDgtLjE3LjE5djUuNDRzLS41NS4zOS0xLjMuMzktLjk3LS4zNC0uOTctMS4wOVY2LjI1YzAtLjA5LS4wOC0uMTctLjE3LS4xN2gtMi4xNGMtLjA5IDAtLjE3LjA4LS4xNy4xN3Y1LjExYzAgMi4yIDEuMjMgMi43NSAyLjkyIDIuNzUgMS4zOSAwIDIuNTItLjc3IDIuNTItLjc3cy4wNS4zOS4wOC40NWMuMDIuMDUuMDkuMDkuMTYuMDloMS4zNGMuMTEgMCAuMTctLjA4LjE3LS4xN2wuMDItNy40N2MwLS4wOS0uMDgtLjE3LS4xOS0uMTd6bS0yMy43LS4wMWgtMi4xM2MtLjA5IDAtLjE3LjA5LS4xNy4ydjcuMzRjMCAuMi4xMy4yNy4zLjI3aDEuOTJjLjIgMCAuMjUtLjA5LjI1LS4yN1Y2LjIzYzAtLjA5LS4wOC0uMTctLjE3LS4xN3ptLTEuMDUtMy4zOGMtLjc3IDAtMS4zOC42MS0xLjM4IDEuMzggMCAuNzcuNjEgMS4zOCAxLjM4IDEuMzguNzUgMCAxLjM2LS42MSAxLjM2LTEuMzggMC0uNzctLjYxLTEuMzgtMS4zNi0xLjM4em0xNi40OS0uMjVoLTIuMTFjLS4wOSAwLS4xNy4wOC0uMTcuMTd2NC4wOWgtMy4zMVYyLjZjMC0uMDktLjA4LS4xNy0uMTctLjE3aC0yLjEzYy0uMDkgMC0uMTcuMDgtLjE3LjE3djExLjExYzAgLjA5LjA5LjE3LjE3LjE3aDIuMTNjLjA5IDAgLjE3LS4wOC4xNy0uMTdWOC45NmgzLjMxbC0uMDIgNC43NWMwIC4wOS4wOC4xNy4xNy4xN2gyLjEzYy4wOSAwIC4xNy0uMDguMTctLjE3VjIuNmMwLS4wOS0uMDgtLjE3LS4xNy0uMTd6TTguODEgNy4zNXY1Ljc0YzAgLjA0LS4wMS4xMS0uMDYuMTMgMCAwLTEuMjUuODktMy4zMS44OS0yLjQ5IDAtNS40NC0uNzgtNS40NC01LjkyUzIuNTggMS45OSA1LjEgMmMyLjE4IDAgMy4wNi40OSAzLjIuNTguMDQuMDUuMDYuMDkuMDYuMTRMNy45NCA0LjVjMCAuMDktLjA5LjItLjIuMTctLjM2LS4xMS0uOS0uMzMtMi4xNy0uMzMtMS40NyAwLTMuMDUuNDItMy4wNSAzLjczczEuNSAzLjcgMi41OCAzLjdjLjkyIDAgMS4yNS0uMTEgMS4yNS0uMTF2LTIuM0g0Ljg4Yy0uMTEgMC0uMTktLjA4LS4xOS0uMTdWNy4zNWMwLS4wOS4wOC0uMTcuMTktLjE3aDMuNzRjLjExIDAgLjE5LjA4LjE5LjE3elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBHb01haWxSZWFkIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAxNCAxNlwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNNiA1SDRWNGgydjF6bTMgMUg0djFoNVY2em01LS40OFYxNGMwIC41NS0uNDUgMS0xIDFIMWMtLjU1IDAtMS0uNDUtMS0xVjUuNTJjMC0uMzMuMTYtLjYzLjQyLS44MUwyIDMuNThWM2MwLS41NS40NS0xIDEtMWgxLjJMNyAwbDIuOCAySDExYy41NSAwIDEgLjQ1IDEgMXYuNThsMS41OCAxLjEzYy4yNy4xOS40Mi40OC40Mi44MXpNMyA3LjVMNyAxMGw0LTIuNVYzSDN2NC41em0tMiA2bDQuNS0zLTQuNS0zdjZ6bTExIC41bC01LTMtNSAzaDEwem0xLTYuNWwtNC41IDMgNC41IDN2LTZ6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEdvTWFpbCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMTQgMTZcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTAgNHY4YzAgLjU1LjQ1IDEgMSAxaDEyYy41NSAwIDEtLjQ1IDEtMVY0YzAtLjU1LS40NS0xLTEtMUgxYy0uNTUgMC0xIC40NS0xIDF6bTEzIDBMNyA5IDEgNGgxMnpNMSA1LjVsNCAzLTQgM3YtNnpNMiAxMmwzLjUtM0w3IDEwLjUgOC41IDlsMy41IDNIMnptMTEtLjVsLTQtMyA0LTN2NnpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gR29NYXJrR2l0aHViIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAxNiAxNlwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNOCAwQzMuNTggMCAwIDMuNTggMCA4YzAgMy41NCAyLjI5IDYuNTMgNS40NyA3LjU5LjQuMDcuNTUtLjE3LjU1LS4zOCAwLS4xOS0uMDEtLjgyLS4wMS0xLjQ5LTIuMDEuMzctMi41My0uNDktMi42OS0uOTQtLjA5LS4yMy0uNDgtLjk0LS44Mi0xLjEzLS4yOC0uMTUtLjY4LS41Mi0uMDEtLjUzLjYzLS4wMSAxLjA4LjU4IDEuMjMuODIuNzIgMS4yMSAxLjg3Ljg3IDIuMzMuNjYuMDctLjUyLjI4LS44Ny41MS0xLjA3LTEuNzgtLjItMy42NC0uODktMy42NC0zLjk1IDAtLjg3LjMxLTEuNTkuODItMi4xNS0uMDgtLjItLjM2LTEuMDIuMDgtMi4xMiAwIDAgLjY3LS4yMSAyLjIuODIuNjQtLjE4IDEuMzItLjI3IDItLjI3LjY4IDAgMS4zNi4wOSAyIC4yNyAxLjUzLTEuMDQgMi4yLS44MiAyLjItLjgyLjQ0IDEuMS4xNiAxLjkyLjA4IDIuMTIuNTEuNTYuODIgMS4yNy44MiAyLjE1IDAgMy4wNy0xLjg3IDMuNzUtMy42NSAzLjk1LjI5LjI1LjU0LjczLjU0IDEuNDggMCAxLjA3LS4wMSAxLjkzLS4wMSAyLjIgMCAuMjEuMTUuNDYuNTUuMzhBOC4wMTMgOC4wMTMgMCAwIDAgMTYgOGMwLTQuNDItMy41OC04LTgtOHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gR29NYXJrZG93biAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMTYgMTZcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTE0Ljg1IDNIMS4xNUMuNTIgMyAwIDMuNTIgMCA0LjE1djcuNjlDMCAxMi40OC41MiAxMyAxLjE1IDEzaDEzLjY5Yy42NCAwIDEuMTUtLjUyIDEuMTUtMS4xNXYtNy43QzE2IDMuNTIgMTUuNDggMyAxNC44NSAzek05IDExSDdWOEw1LjUgOS45MiA0IDh2M0gyVjVoMmwxLjUgMkw3IDVoMnY2em0yLjk5LjVMOS41IDhIMTFWNWgydjNoMS41bC0yLjUxIDMuNXpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gR29NZWdhcGhvbmUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDE2IDE2XCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xMCAxYy0uMTcgMC0uMzYuMDUtLjUyLjE0QzguMDQgMi4wMiA0LjUgNC41OCAzIDVjLTEuMzggMC0zIC42Ny0zIDIuNVMxLjYzIDEwIDMgMTBjLjMuMDguNjQuMjMgMSAuNDFWMTVoMnYtMy40NWMxLjM0Ljg2IDIuNjkgMS44MyAzLjQ4IDIuMzEuMTYuMDkuMzQuMTQuNTIuMTQuNTIgMCAxLS40MiAxLTFWMmMwLS41OC0uNDgtMS0xLTF6bTAgMTJjLS4zOC0uMjMtLjg5LS41OC0xLjUtMS0uMTYtLjExLS4zMy0uMjItLjUtLjM0VjMuMzFjLjE2LS4xMS4zMS0uMi40Ny0uMzEuNjEtLjQxIDEuMTYtLjc3IDEuNTMtMXYxMXptMi02aDR2MWgtNFY3em0wIDJsNCAydjFsLTQtMlY5em00LTZ2MWwtNCAyVjVsNC0yelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBHb01lbnRpb24gKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDE0IDE2XCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk02LjU4IDE1YzEuMjUgMCAyLjUyLS4zMSAzLjU2LS45NGwtLjQyLS45NGMtLjg0LjUyLTEuODkuODMtMy4wMy44My0zLjIzIDAtNS42NC0yLjA4LTUuNjQtNS43MiAwLTQuMzcgMy4yMy03LjE4IDYuNTgtNy4xOCAzLjQ1IDAgNS4yMiAyLjE5IDUuMjIgNS4yIDAgMi4zOS0xLjM0IDMuODYtMi41IDMuODYtMS4wNSAwLTEuMzYtLjczLTEuMDUtMi4xOWwuNzMtMy43NUg4Ljk4bC0uMTEuNzJjLS40MS0uNjMtLjk0LS44My0xLjU2LS44My0yLjE5IDAtMy42NiAyLjM5LTMuNjYgNC4zOCAwIDEuNjcuOTQgMi42MSAyLjMgMi42MS44NCAwIDEuNjctLjUzIDIuMy0xLjI1LjExLjk0Ljk0IDEuNDUgMS45OCAxLjQ1IDEuNjcgMCAzLjc3LTEuNjcgMy43Ny01QzE0IDIuNjEgMTEuNTkgMCA3LjgzIDAgMy42NiAwIDAgMy4zMyAwIDguMzMgMCAxMi43MSAyLjkyIDE1IDYuNTggMTV6bS0uMzEtNWMtLjczIDAtMS4zNi0uNTItMS4zNi0xLjY3IDAtMS40NS45NC0zLjIyIDIuNDEtMy4yMi41MiAwIC44NC4yIDEuMjUuODNsLS41MiAzLjAyYy0uNjMuNzMtMS4yNSAxLjA1LTEuNzggMS4wNVYxMHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gR29NaWxlc3RvbmUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDE0IDE2XCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk04IDJINlYwaDJ2MnptNCA1SDJjLS41NSAwLTEtLjQ1LTEtMVY0YzAtLjU1LjQ1LTEgMS0xaDEwbDIgMi0yIDJ6TTggNEg2djJoMlY0ek02IDE2aDJWOEg2djh6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEdvTWlycm9yIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAxNiAxNlwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTUuNSA0LjdMOC41IDBsLTcgNC43Yy0uMy4xOS0uNS40NS0uNS44VjE2bDcuNS00IDcuNSA0VjUuNWMwLS4zNC0uMi0uNjEtLjUtLjh6bS0uNSA5LjhsLTYtMy4yNVYxMEg4djEuMjVMMiAxNC41di05bDYtNFY2aDFWMS41bDYgNHY5ek02IDdoNVY1bDMgMy0zIDNWOUg2djJMMyA4bDMtM3YyelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBHb01vcnRhckJvYXJkIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAxNiAxNlwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNOC4xMSAyLjhhLjM0LjM0IDAgMCAwLS4yIDBMLjI3IDUuMThhLjM1LjM1IDAgMCAwIDAgLjY3TDIgNi40djEuNzdjLS4zLjE3LS41LjUtLjUuODYgMCAuMTkuMDUuMzYuMTQuNS0uMDguMTQtLjE0LjMxLS4xNC41djIuNThjMCAuNTUgMiAuNTUgMiAwdi0yLjU4YzAtLjE5LS4wNS0uMzYtLjE0LS41LjA4LS4xNC4xNC0uMzEuMTQtLjUgMC0uMzgtLjItLjY5LS41LS44NlY2LjcybDQuODkgMS41M2MuMDYuMDIuMTQuMDIuMiAwbDcuNjQtMi4zOGEuMzUuMzUgMCAwIDAgMC0uNjdMOC4xIDIuODFsLjAxLS4wMXpNNCA4bDMuODMgMS4xOWgtLjAyYy4xMy4wMy4yNS4wMy4zNiAwTDEyIDh2Mi41YzAgMS0xLjggMS41LTQgMS41cy00LS41LTQtMS41Vjh6bTMuMDItMi41YzAgLjI4LjQ1LjUgMSAuNXMxLS4yMiAxLS41LS40NS0uNS0xLS41LTEgLjIyLTEgLjV6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEdvTXV0ZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMTYgMTZcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTggMi44MXYxMC4zOGMwIC42Ny0uODEgMS0xLjI4LjUzTDMgMTBIMWMtLjU1IDAtMS0uNDUtMS0xVjdjMC0uNTUuNDUtMSAxLTFoMmwzLjcyLTMuNzJDNy4xOSAxLjgxIDggMi4xNCA4IDIuODF6bTcuNTMgMy4yMmwtMS4wNi0xLjA2LTEuOTcgMS45Ny0xLjk3LTEuOTctMS4wNiAxLjA2TDExLjQ0IDggOS40NyA5Ljk3bDEuMDYgMS4wNiAxLjk3LTEuOTcgMS45NyAxLjk3IDEuMDYtMS4wNkwxMy41NiA4bDEuOTctMS45N3pcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gR29Ob05ld2xpbmUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDE2IDE2XCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xNiA1djNjMCAuNTUtLjQ1IDEtMSAxaC0zdjJMOSA4bDMtM3YyaDJWNWgyek04IDhjMCAyLjItMS44IDQtNCA0cy00LTEuOC00LTQgMS44LTQgNC00IDQgMS44IDQgNHpNMS41IDkuNjZMNS42NiA1LjVDNS4xOCA1LjE5IDQuNjEgNSA0IDUgMi4zNCA1IDEgNi4zNCAxIDhjMCAuNjEuMTkgMS4xNy41IDEuNjZ6TTcgOGMwLS42MS0uMTktMS4xNy0uNS0xLjY2TDIuMzQgMTAuNWMuNDguMzEgMS4wNS41IDEuNjYuNSAxLjY2IDAgMy0xLjM0IDMtM3pcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gR29Ob3RlIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAxNCAxNlwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMyAxMGg0VjlIM3Yxem0wLTJoNlY3SDN2MXptMC0yaDhWNUgzdjF6bTEwIDZIMVYzaDEydjl6TTEgMmMtLjU1IDAtMSAuNDUtMSAxdjljMCAuNTUuNDUgMSAxIDFoMTJjLjU1IDAgMS0uNDUgMS0xVjNjMC0uNTUtLjQ1LTEtMS0xSDF6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEdvT2N0b2ZhY2UgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDE2IDE2XCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xNC43IDUuMzRjLjEzLS4zMi41NS0xLjU5LS4xMy0zLjMxIDAgMC0xLjA1LS4zMy0zLjQ0IDEuMy0xLS4yOC0yLjA3LS4zMi0zLjEzLS4zMnMtMi4xMy4wNC0zLjEzLjMyYy0yLjM5LTEuNjQtMy40NC0xLjMtMy40NC0xLjMtLjY4IDEuNzItLjI2IDIuOTktLjEzIDMuMzFDLjQ5IDYuMjEgMCA3LjMzIDAgOC42OSAwIDEzLjg0IDMuMzMgMTUgNy45OCAxNVMxNiAxMy44NCAxNiA4LjY5YzAtMS4zNi0uNDktMi40OC0xLjMtMy4zNXpNOCAxNC4wMmMtMy4zIDAtNS45OC0uMTUtNS45OC0zLjM1IDAtLjc2LjM4LTEuNDggMS4wMi0yLjA3IDEuMDctLjk4IDIuOS0uNDYgNC45Ni0uNDYgMi4wNyAwIDMuODgtLjUyIDQuOTYuNDYuNjUuNTkgMS4wMiAxLjMgMS4wMiAyLjA3IDAgMy4xOS0yLjY4IDMuMzUtNS45OCAzLjM1ek01LjQ5IDkuMDFjLS42NiAwLTEuMi44LTEuMiAxLjc4cy41NCAxLjc5IDEuMiAxLjc5Yy42NiAwIDEuMi0uOCAxLjItMS43OXMtLjU0LTEuNzgtMS4yLTEuNzh6bTUuMDIgMGMtLjY2IDAtMS4yLjc5LTEuMiAxLjc4cy41NCAxLjc5IDEuMiAxLjc5Yy42NiAwIDEuMi0uOCAxLjItMS43OXMtLjUzLTEuNzgtMS4yLTEuNzh6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEdvT3JnYW5pemF0aW9uIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAxNiAxNlwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTYgMTIuOTk5YzAgLjQzOS0uNDUgMS0xIDFINy45OTVjLS41MzkgMC0uOTk0LS40NDctLjk5NS0uOTk5SDFjLS41NCAwLTEtLjU2MS0xLTEgMC0yLjYzNCAzLTQgMy00cy4yMjktLjQwOSAwLTFjLS44NDEtLjYyMS0xLjA1OC0uNTktMS0zIC4wNTgtMi40MTkgMS4zNjctMyAyLjUtM3MyLjQ0Mi41OCAyLjUgM2MuMDU4IDIuNDEtLjE1OSAyLjM3OS0xIDMtLjIyOS41OSAwIDEgMCAxczEuNTQ5LjcxMSAyLjQyIDIuMDg4QzkuMTk2IDkuMzY5IDEwIDguOTk5IDEwIDguOTk5cy4yMjktLjQwOSAwLTFjLS44NDEtLjYyLTEuMDU4LS41OS0xLTMgLjA1OC0yLjQxOSAxLjM2Ny0zIDIuNS0zczIuNDM3LjU4MSAyLjQ5NSAzYy4wNTkgMi40MS0uMTU4IDIuMzgtMSAzLS4yMjkuNTkgMCAxIDAgMXMzLjAwNSAxLjM2NiAzLjAwNSA0elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBHb1BhY2thZ2UgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDE2IDE2XCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xIDQuMjd2Ny40N2MwIC40NS4zLjg0Ljc1Ljk3bDYuNSAxLjczYy4xNi4wNS4zNC4wNS41IDBsNi41LTEuNzNjLjQ1LS4xMy43NS0uNTIuNzUtLjk3VjQuMjdjMC0uNDUtLjMtLjg0LS43NS0uOTdsLTYuNS0xLjc0YTEuNCAxLjQgMCAwIDAtLjUgMEwxLjc1IDMuM2MtLjQ1LjEzLS43NS41Mi0uNzUuOTd6bTcgOS4wOWwtNi0xLjU5VjVsNiAxLjYxdjYuNzV6TTIgNGwyLjUtLjY3TDExIDUuMDZsLTIuNS42N0wyIDR6bTEzIDcuNzdsLTYgMS41OVY2LjYxbDItLjU1VjguNWwyLS41M1Y1LjUzTDE1IDV2Ni43N3ptLTItNy4yNEw2LjUgMi44bDItLjUzTDE1IDRsLTIgLjUzelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBHb1BhaW50Y2FuIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAxMiAxNlwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNNiAwQzIuNjkgMCAwIDIuNjkgMCA2djFjMCAuNTUuNDUgMSAxIDF2NWMwIDEuMSAyLjI0IDIgNSAyczUtLjkgNS0yVjhjLjU1IDAgMS0uNDUgMS0xVjZjMC0zLjMxLTIuNjktNi02LTZ6bTMgMTB2LjVjMCAuMjgtLjIyLjUtLjUuNXMtLjUtLjIyLS41LS41VjEwYzAtLjI4LS4yMi0uNS0uNS0uNXMtLjUuMjItLjUuNXYyLjVjMCAuMjgtLjIyLjUtLjUuNXMtLjUtLjIyLS41LS41di0yYzAtLjI4LS4yMi0uNS0uNS0uNXMtLjUuMjItLjUuNXYuNWMwIC41NS0uNDUgMS0xIDFzLTEtLjQ1LTEtMXYtMWMtLjU1IDAtMS0uNDUtMS0xVjcuMmMuOTEuNDkgMi4zNi44IDQgLjggMS42NCAwIDMuMDktLjMxIDQtLjhWOWMwIC41NS0uNDUgMS0xIDF6TTYgN2MtMS42OCAwLTMuMTItLjQxLTMuNzEtMUMyLjg4IDUuNDEgNC4zMiA1IDYgNWMxLjY4IDAgMy4xMi40MSAzLjcxIDEtLjU5LjU5LTIuMDMgMS0zLjcxIDF6bTAtM2MtMi43NiAwLTUgLjg5LTUgMiAwLTIuNzYgMi4yNC01IDUtNXM1IDIuMjQgNSA1YzAtMS4xLTIuMjQtMi01LTJ6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEdvUGVuY2lsIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAxNCAxNlwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMCAxMnYzaDNsOC04LTMtMy04IDh6bTMgMkgxdi0yaDF2MWgxdjF6bTEwLjMtOS4zTDEyIDYgOSAzbDEuMy0xLjNhLjk5Ni45OTYgMCAwIDEgMS40MSAwbDEuNTkgMS41OWMuMzkuMzkuMzkgMS4wMiAwIDEuNDF6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEdvUGVyc29uIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAxMiAxNlwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTIgMTQuMDAyYS45OTguOTk4IDAgMCAxLS45OTguOTk4SDEuMDAxQTEgMSAwIDAgMSAwIDEzLjk5OVYxM2MwLTIuNjMzIDQtNCA0LTRzLjIyOS0uNDA5IDAtMWMtLjg0MS0uNjItLjk0NC0xLjU5LTEtNCAuMTczLTIuNDEzIDEuODY3LTMgMy0zczIuODI3LjU4NiAzIDNjLS4wNTYgMi40MS0uMTU5IDMuMzgtMSA0LS4yMjkuNTkgMCAxIDAgMXM0IDEuMzY3IDQgNHYxLjAwMnpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gR29QaW4gKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDE2IDE2XCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xMCAxLjJWMmwuNSAxTDYgNkgyLjJjLS40NCAwLS42Ny41My0uMzQuODZMNSAxMGwtNCA1IDUtNCAzLjE0IDMuMTRhLjUuNSAwIDAgMCAuODYtLjM0VjEwbDMtNC41IDEgLjVoLjhjLjQ0IDAgLjY3LS41My4zNC0uODZMMTAuODYuODZhLjUuNSAwIDAgMC0uODYuMzR6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEdvUGxheSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMTQgMTZcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTE0IDhBNyA3IDAgMSAxIDAgOGE3IDcgMCAwIDEgMTQgMHptLTguMjIzIDMuNDgybDQuNTk5LTMuMDY2YS41LjUgMCAwIDAgMC0uODMyTDUuNzc3IDQuNTE4QS41LjUgMCAwIDAgNSA0LjkzNHY2LjEzMmEuNS41IDAgMCAwIC43NzcuNDE2elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBHb1BsdWcgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDE0IDE2XCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xNCA2VjVoLTRWM0g4djFINmMtMS4wMyAwLTEuNzcuODEtMiAyTDMgN2MtMS42NiAwLTMgMS4zNC0zIDN2Mmgxdi0yYzAtMS4xMS44OS0yIDItMmwxIDFjLjI1IDEuMTYuOTggMiAyIDJoMnYxaDJ2LTJoNFY5aC00VjZoNHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gR29QbHVzU21hbGwgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDcgMTZcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTQgNEgzdjNIMHYxaDN2M2gxVjhoM1Y3SDRWNHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gR29QbHVzIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAxMiAxNlwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTIgOUg3djVINVY5SDBWN2g1VjJoMnY1aDV2MnpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gR29QcmltaXRpdmVEb3QgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDggMTZcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTAgOGMwLTIuMiAxLjgtNCA0LTRzNCAxLjggNCA0LTEuOCA0LTQgNC00LTEuOC00LTR6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEdvUHJpbWl0aXZlU3F1YXJlIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCA4IDE2XCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk04IDEySDBWNGg4djh6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEdvUHJvamVjdCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMTUgMTZcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTEwIDEyaDNWMmgtM3YxMHptLTQtMmgzVjJINnY4em0tNCA0aDNWMkgydjEyem0tMSAxaDEzVjFIMXYxNHpNMTQgMEgxYTEgMSAwIDAgMC0xIDF2MTRhMSAxIDAgMCAwIDEgMWgxM2ExIDEgMCAwIDAgMS0xVjFhMSAxIDAgMCAwLTEtMXpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gR29QdWxzZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMTQgMTZcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTExLjUgOEw4LjggNS40IDYuNiA4LjUgNS41IDEuNiAyLjM4IDhIMHYyaDMuNmwuOS0xLjguOSA1LjRMOSA4LjVsMS42IDEuNUgxNFY4aC0yLjV6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEdvUXVlc3Rpb24gKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDE0IDE2XCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk02IDEwaDJ2Mkg2di0yem00LTMuNUMxMCA4LjY0IDggOSA4IDlINmMwLS41NS40NS0xIDEtMWguNWMuMjggMCAuNS0uMjIuNS0uNXYtMWMwLS4yOC0uMjItLjUtLjUtLjVoLTFjLS4yOCAwLS41LjIyLS41LjVWN0g0YzAtMS41IDEuNS0zIDMtM3MzIDEgMyAyLjV6TTcgMi4zYzMuMTQgMCA1LjcgMi41NiA1LjcgNS43cy0yLjU2IDUuNy01LjcgNS43QTUuNzEgNS43MSAwIDAgMSAxLjMgOGMwLTMuMTQgMi41Ni01LjcgNS43LTUuN3pNNyAxQzMuMTQgMSAwIDQuMTQgMCA4czMuMTQgNyA3IDcgNy0zLjE0IDctNy0zLjE0LTctNy03elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBHb1F1b3RlIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAxNCAxNlwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNNi4xNiAzLjVDMy43MyA1LjA2IDIuNTUgNi42NyAyLjU1IDkuMzZjLjE2LS4wNS4zLS4wNS40NC0uMDUgMS4yNyAwIDIuNS44NiAyLjUgMi40MSAwIDEuNjEtMS4wMyAyLjYxLTIuNSAyLjYxLTEuOSAwLTIuOTktMS41Mi0yLjk5LTQuMjUgMC0zLjggMS43NS02LjUzIDUuMDItOC40Mkw2LjE2IDMuNXptNyAwYy0yLjQzIDEuNTYtMy42MSAzLjE3LTMuNjEgNS44Ni4xNi0uMDUuMy0uMDUuNDQtLjA1IDEuMjcgMCAyLjUuODYgMi41IDIuNDEgMCAxLjYxLTEuMDMgMi42MS0yLjUgMi42MS0xLjg5IDAtMi45OC0xLjUyLTIuOTgtNC4yNSAwLTMuOCAxLjc1LTYuNTMgNS4wMi04LjQybDEuMTQgMS44NGgtLjAxelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBHb1JhZGlvVG93ZXIgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDE2IDE2XCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk00Ljc5IDYuMTFjLjI1LS4yNS4yNS0uNjcgMC0uOTItLjMyLS4zMy0uNDgtLjc2LS40OC0xLjE5IDAtLjQzLjE2LS44Ni40OC0xLjE5LjI1LS4yNi4yNS0uNjcgMC0uOTJhLjYxMy42MTMgMCAwIDAtLjQ1LS4xOWMtLjE2IDAtLjMzLjA2LS40NS4xOS0uNTcuNTgtLjg1IDEuMzUtLjg1IDIuMTEgMCAuNzYuMjkgMS41My44NSAyLjExLjI1LjI1LjY2LjI1LjkgMHpNMi4zMy41MmEuNjUxLjY1MSAwIDAgMC0uOTIgMEMuNDggMS40OC4wMSAyLjc0LjAxIDMuOTljMCAxLjI2LjQ3IDIuNTIgMS40IDMuNDguMjUuMjYuNjYuMjYuOTEgMHMuMjUtLjY4IDAtLjk0Yy0uNjgtLjctMS4wMi0xLjYyLTEuMDItMi41NCAwLS45Mi4zNC0xLjg0IDEuMDItMi41NGEuNjYuNjYgMCAwIDAgLjAxLS45M3ptNS42OSA1LjFBMS42MiAxLjYyIDAgMSAwIDYuNCA0Yy0uMDEuODkuNzIgMS42MiAxLjYyIDEuNjJ6TTE0LjU5LjUzYS42MjguNjI4IDAgMCAwLS45MSAwYy0uMjUuMjYtLjI1LjY4IDAgLjk0LjY4LjcgMS4wMiAxLjYyIDEuMDIgMi41NCAwIC45Mi0uMzQgMS44My0xLjAyIDIuNTQtLjI1LjI2LS4yNS42OCAwIC45NGEuNjUxLjY1MSAwIDAgMCAuOTIgMGMuOTMtLjk2IDEuNC0yLjIyIDEuNC0zLjQ4QTUuMDQ4IDUuMDQ4IDAgMCAwIDE0LjU5LjUzek04LjAyIDYuOTJjLS40MSAwLS44My0uMS0xLjItLjNsLTMuMTUgOC4zN2gxLjQ5bC44Ni0xaDRsLjg0IDFoMS40OUw5LjIxIDYuNjJjLS4zOC4yLS43OC4zLTEuMTkuM3ptLS4wMS40OEw5LjAyIDExaC0ybC45OS0zLjZ6bS0xLjk5IDUuNTlsMS0xaDJsMSAxaC00em01LjE5LTExLjFjLS4yNS4yNS0uMjUuNjcgMCAuOTIuMzIuMzMuNDguNzYuNDggMS4xOSAwIC40My0uMTYuODYtLjQ4IDEuMTktLjI1LjI2LS4yNS42NyAwIC45MmEuNjMuNjMgMCAwIDAgLjkgMGMuNTctLjU4Ljg1LTEuMzUuODUtMi4xMSAwLS43Ni0uMjgtMS41My0uODUtMi4xMWEuNjM0LjYzNCAwIDAgMC0uOSAwelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBHb1JlcGx5IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAxNCAxNlwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNNiAzLjVjMy45Mi40NCA4IDMuMTI1IDggMTAtMi4zMTItNS4wNjItNC43NS02LTgtNlYxMUwuNSA1LjUgNiAwdjMuNXpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gR29SZXBvQ2xvbmUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDE2IDE2XCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xNSAwSDl2N2MwIC41NS40NSAxIDEgMWgxdjFoMVY4aDNjLjU1IDAgMS0uNDUgMS0xVjFjMC0uNTUtLjQ1LTEtMS0xem0tNCA3aC0xVjZoMXYxem00IDBoLTNWNmgzdjF6bTAtMmgtNFYxaDR2NHpNNCA1SDNWNGgxdjF6bTAtMkgzVjJoMXYxek0yIDFoNlYwSDFDLjQ1IDAgMCAuNDUgMCAxdjEyYzAgLjU1LjQ1IDEgMSAxaDJ2MmwxLjUtMS41TDYgMTZ2LTJoNWMuNTUgMCAxLS40NSAxLTF2LTNIMlYxem05IDEwdjJINnYtMUgzdjFIMXYtMmgxMHpNMyA4aDF2MUgzVjh6bTEtMUgzVjZoMXYxelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBHb1JlcG9Gb3JjZVB1c2ggKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDEyIDE2XCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xMCA5SDh2N0g2VjlINGwyLjI1LTNINGwzLTQgMyA0SDcuNzVMMTAgOXptMS05SDFDLjQ1IDAgMCAuNDUgMCAxdjEyYzAgLjU1LjQ1IDEgMSAxaDR2LTFIMXYtMmg0di0xSDJWMWg5djlIOXYxaDJ2Mkg5djFoMmMuNTUgMCAxLS40NSAxLTFWMWMwLS41NS0uNDUtMS0xLTF6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEdvUmVwb0ZvcmtlZCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMTAgMTZcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTggMWExLjk5MyAxLjk5MyAwIDAgMC0xIDMuNzJWNkw1IDggMyA2VjQuNzJBMS45OTMgMS45OTMgMCAwIDAgMiAxYTEuOTkzIDEuOTkzIDAgMCAwLTEgMy43MlY2LjVsMyAzdjEuNzhBMS45OTMgMS45OTMgMCAwIDAgNSAxNWExLjk5MyAxLjk5MyAwIDAgMCAxLTMuNzJWOS41bDMtM1Y0LjcyQTEuOTkzIDEuOTkzIDAgMCAwIDggMXpNMiA0LjJDMS4zNCA0LjIuOCAzLjY1LjggM2MwLS42NS41NS0xLjIgMS4yLTEuMi42NSAwIDEuMi41NSAxLjIgMS4yIDAgLjY1LS41NSAxLjItMS4yIDEuMnptMyAxMGMtLjY2IDAtMS4yLS41NS0xLjItMS4yIDAtLjY1LjU1LTEuMiAxLjItMS4yLjY1IDAgMS4yLjU1IDEuMiAxLjIgMCAuNjUtLjU1IDEuMi0xLjIgMS4yem0zLTEwYy0uNjYgMC0xLjItLjU1LTEuMi0xLjIgMC0uNjUuNTUtMS4yIDEuMi0xLjIuNjUgMCAxLjIuNTUgMS4yIDEuMiAwIC42NS0uNTUgMS4yLTEuMiAxLjJ6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEdvUmVwb1B1bGwgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDE2IDE2XCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xMyA4VjZIN1Y0aDZWMmwzIDMtMyAzek00IDJIM3YxaDFWMnptNyA1aDF2NmMwIC41NS0uNDUgMS0xIDFINnYybC0xLjUtMS41TDMgMTZ2LTJIMWMtLjU1IDAtMS0uNDUtMS0xVjFjMC0uNTUuNDUtMSAxLTFoMTBjLjU1IDAgMSAuNDUgMSAxdjJoLTFWMUgydjloOVY3em0wIDRIMXYyaDJ2LTFoM3YxaDV2LTJ6TTQgNkgzdjFoMVY2em0wLTJIM3YxaDFWNHpNMyA5aDFWOEgzdjF6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEdvUmVwb1B1c2ggKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDEyIDE2XCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk00IDNIM1YyaDF2MXpNMyA1aDFWNEgzdjF6bTQgMEw0IDloMnY3aDJWOWgyTDcgNXptNC01SDFDLjQ1IDAgMCAuNDUgMCAxdjEyYzAgLjU1LjQ1IDEgMSAxaDR2LTFIMXYtMmg0di0xSDJWMWg5LjAyTDExIDEwSDl2MWgydjJIOXYxaDJjLjU1IDAgMS0uNDUgMS0xVjFjMC0uNTUtLjQ1LTEtMS0xelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBHb1JlcG8gKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDEyIDE2XCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk00IDlIM1Y4aDF2MXptMC0zSDN2MWgxVjZ6bTAtMkgzdjFoMVY0em0wLTJIM3YxaDFWMnptOC0xdjEyYzAgLjU1LS40NSAxLTEgMUg2djJsLTEuNS0xLjVMMyAxNnYtMkgxYy0uNTUgMC0xLS40NS0xLTFWMWMwLS41NS40NS0xIDEtMWgxMGMuNTUgMCAxIC40NSAxIDF6bS0xIDEwSDF2Mmgydi0xaDN2MWg1di0yem0wLTEwSDJ2OWg5VjF6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEdvUmVwb3J0IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAxNiAxNlwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMCAyYTEgMSAwIDAgMSAxLTFoMTRhMSAxIDAgMCAxIDEgMXY5YTEgMSAwIDAgMS0xIDFIN2wtNCA0di00SDFhMSAxIDAgMCAxLTEtMVYyem0xIDBoMTR2OUg2LjVMNCAxMy41VjExSDFWMnptNiA2aDJ2Mkg3Vjh6bTAtNWgydjRIN1YzelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBHb1JlcXVlc3RDaGFuZ2VzIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAxNiAxNlwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMCAxYTEgMSAwIDAgMSAxLTFoMTRhMSAxIDAgMCAxIDEgMXYxMGExIDEgMCAwIDEtMSAxSDcuNUw0IDE1LjVWMTJIMWExIDEgMCAwIDEtMS0xVjF6bTEgMHYxMGg0djJsMi0yaDhWMUgxem03LjUgM2gydjFoLTJ2MmgtMVY1aC0yVjRoMlYyaDF2MnptMiA1aC01VjhoNXYxelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBHb1JvY2tldCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMTYgMTZcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTEyLjE3IDMuODNjLS4yNy0uMjctLjQ3LS41NS0uNjMtLjg4LS4xNi0uMzEtLjI3LS42Ni0uMzQtMS4wMi0uNTguMzMtMS4xNi43LTEuNzMgMS4xMy0uNTguNDQtMS4xNC45NC0xLjY5IDEuNDgtLjcuNy0xLjMzIDEuODEtMS43OCAyLjQ1SDNMMCAxMGgzbDItMmMtLjM0Ljc3LTEuMDIgMi45OC0xIDNsMSAxYy4wMi4wMiAyLjIzLS42NCAzLTFsLTIgMnYzbDMtM3YtM2MuNjQtLjQ1IDEuNzUtMS4wOSAyLjQ1LTEuNzguNTUtLjU1IDEuMDUtMS4xMyAxLjQ3LTEuNy40NC0uNTguODEtMS4xNiAxLjE0LTEuNzItLjM2LS4wOC0uNy0uMTktMS4wMy0uMzRhMy4zOSAzLjM5IDAgMCAxLS44Ni0uNjN6TTE2IDBzLS4wOS4zOC0uMyAxLjA2Yy0uMi43LS41NSAxLjU4LTEuMDYgMi42Ni0uNy0uMDgtMS4yNy0uMzMtMS42Ni0uNzItLjM5LS4zOS0uNjMtLjk0LS43LTEuNjRDMTMuMzYuODQgMTQuMjMuNDggMTQuOTIuMjggMTUuNjIuMDggMTYgMCAxNiAwelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBHb1JzcyAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMTAgMTZcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTIgMTNIMHYtMmMxLjExIDAgMiAuODkgMiAyek0wIDN2MWE5IDkgMCAwIDEgOSA5aDFDMTAgNy40OCA1LjUyIDMgMCAzem0wIDR2MWMyLjc1IDAgNSAyLjI1IDUgNWgxYzAtMy4zMS0yLjY5LTYtNi02elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBHb1J1YnkgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDE2IDE2XCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xMyA2bC01IDVWNGgzbDIgMnptMyAwbC04IDgtOC04IDQtNGg4bDQgNHptLTggNi41TDE0LjUgNmwtMy0zaC03bC0zIDNMOCAxMi41elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBHb1NjcmVlbkZ1bGwgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDE0IDE2XCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xMyAxMGgxdjNjMCAuNTQ3LS40NTMgMS0xIDFoLTN2LTFoM3YtM3pNMSAxMEgwdjNjMCAuNTQ3LjQ1MyAxIDEgMWgzdi0xSDF2LTN6bTAtN2gzVjJIMWMtLjU0NyAwLTEgLjQ1My0xIDF2M2gxVjN6bTEgMWgxMHY4SDJWNHptMiA2aDZWNkg0djR6bTYtOHYxaDN2M2gxVjNjMC0uNTQ3LS40NTMtMS0xLTFoLTN6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEdvU2NyZWVuTm9ybWFsIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAxNCAxNlwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMiA0SDBWM2gyVjFoMXYyYzAgLjU0Ny0uNDUzIDEtMSAxem0wIDhIMHYxaDJ2Mmgxdi0yYzAtLjU0Ny0uNDUzLTEtMS0xem05LTJjMCAuNTQ3LS40NTMgMS0xIDFINGMtLjU0NyAwLTEtLjQ1My0xLTFWNmMwLS41NDcuNDUzLTEgMS0xaDZjLjU0NyAwIDEgLjQ1MyAxIDF2NHpNOSA3SDV2Mmg0Vjd6bTIgNnYyaDF2LTJoMnYtMWgtMmMtLjU0NyAwLTEgLjQ1My0xIDF6bTEtMTBWMWgtMXYyYzAgLjU0Ny40NTMgMSAxIDFoMlYzaC0yelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBHb1NlYXJjaCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMTYgMTZcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTE1LjcgMTMuM2wtMy44MS0zLjgzQTUuOTMgNS45MyAwIDAgMCAxMyA2YzAtMy4zMS0yLjY5LTYtNi02UzEgMi42OSAxIDZzMi42OSA2IDYgNmMxLjMgMCAyLjQ4LS40MSAzLjQ3LTEuMTFsMy44MyAzLjgxYy4xOS4yLjQ1LjMuNy4zLjI1IDAgLjUyLS4wOS43LS4zYS45OTYuOTk2IDAgMCAwIDAtMS40MXYuMDF6TTcgMTAuN2MtMi41OSAwLTQuNy0yLjExLTQuNy00LjcgMC0yLjU5IDIuMTEtNC43IDQuNy00LjcgMi41OSAwIDQuNyAyLjExIDQuNyA0LjcgMCAyLjU5LTIuMTEgNC43LTQuNyA0Ljd6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEdvU2VydmVyIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAxMiAxNlwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTEgNkgxYy0uNTUgMC0xIC40NS0xIDF2MmMwIC41NS40NSAxIDEgMWgxMGMuNTUgMCAxLS40NSAxLTFWN2MwLS41NS0uNDUtMS0xLTF6TTIgOUgxVjdoMXYyem0yIDBIM1Y3aDF2MnptMiAwSDVWN2gxdjJ6bTIgMEg3VjdoMXYyem0zLThIMWMtLjU1IDAtMSAuNDUtMSAxdjJjMCAuNTUuNDUgMSAxIDFoMTBjLjU1IDAgMS0uNDUgMS0xVjJjMC0uNTUtLjQ1LTEtMS0xek0yIDRIMVYyaDF2MnptMiAwSDNWMmgxdjJ6bTIgMEg1VjJoMXYyem0yIDBIN1YyaDF2MnptMy0xaC0xVjJoMXYxem0wIDhIMWMtLjU1IDAtMSAuNDUtMSAxdjJjMCAuNTUuNDUgMSAxIDFoMTBjLjU1IDAgMS0uNDUgMS0xdi0yYzAtLjU1LS40NS0xLTEtMXptLTkgM0gxdi0yaDF2MnptMiAwSDN2LTJoMXYyem0yIDBINXYtMmgxdjJ6bTIgMEg3di0yaDF2MnpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gR29TZXR0aW5ncyAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMTYgMTZcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTQgN0gzVjJoMXY1em0tMSA3aDF2LTNIM3Yzem01IDBoMVY4SDh2NnptNSAwaDF2LTJoLTF2MnptMS0xMmgtMXY2aDFWMnpNOSAySDh2MmgxVjJ6TTUgOEgyYy0uNTUgMC0xIC40NS0xIDFzLjQ1IDEgMSAxaDNjLjU1IDAgMS0uNDUgMS0xcy0uNDUtMS0xLTF6bTUtM0g3Yy0uNTUgMC0xIC40NS0xIDFzLjQ1IDEgMSAxaDNjLjU1IDAgMS0uNDUgMS0xcy0uNDUtMS0xLTF6bTUgNGgtM2MtLjU1IDAtMSAuNDUtMSAxcy40NSAxIDEgMWgzYy41NSAwIDEtLjQ1IDEtMXMtLjQ1LTEtMS0xelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBHb1NoaWVsZCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMTQgMTZcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTcgMEwwIDJ2Ni4wMkMwIDEyLjY5IDUuMzEgMTYgNyAxNmMxLjY5IDAgNy0zLjMxIDctNy45OFYyTDcgMHpNNSAxMWwxLjE0LTIuOGEuNTY4LjU2OCAwIDAgMC0uMjUtLjU5QzUuMzMgNy4yNSA1IDYuNjYgNSA2YzAtMS4wOS44OS0yIDEuOTgtMkM4LjA2IDQgOSA0LjkxIDkgNmMwIC42Ni0uMzMgMS4yNS0uODkgMS42MS0uMTkuMTMtLjMuMzYtLjI1LjU5TDkgMTFINXpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gR29TaWduSW4gKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDE0IDE2XCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk03IDYuNzVWMTJoNFY4aDF2NGMwIC41NS0uNDUgMS0xIDFIN3YzbC01LjQ1LTIuNzJjLS4zMy0uMTctLjU1LS41Mi0uNTUtLjkxVjFjMC0uNTUuNDUtMSAxLTFoOWMuNTUgMCAxIC40NSAxIDF2M2gtMVYxSDNsNCAydjIuMjVMMTAgM3YyaDR2MmgtNHYyTDcgNi43NXpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gR29TaWduT3V0IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAxNiAxN1wifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTIgOVY3SDhWNWg0VjNsNCAzLTQgM3ptLTIgM0g2VjNMMiAxaDh2M2gxVjFjMC0uNTUtLjQ1LTEtMS0xSDFDLjQ1IDAgMCAuNDUgMCAxdjExLjM4YzAgLjM5LjIyLjczLjU1LjkxTDYgMTYuMDFWMTNoNGMuNTUgMCAxLS40NSAxLTFWOGgtMXY0elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBHb1NtaWxleSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMTYgMTZcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTggMEMzLjU4IDAgMCAzLjU4IDAgOHMzLjU4IDggOCA4IDgtMy41OCA4LTgtMy41OC04LTgtOHptNC44MSAxMi44MWE2LjcyIDYuNzIgMCAwIDEtMi4xNyAxLjQ1Yy0uODMuMzYtMS43Mi41My0yLjY0LjUzLS45MiAwLTEuODEtLjE3LTIuNjQtLjUzLS44MS0uMzQtMS41NS0uODMtMi4xNy0xLjQ1YTYuNzczIDYuNzczIDAgMCAxLTEuNDUtMi4xN0E2LjU5IDYuNTkgMCAwIDEgMS4yMSA4YzAtLjkyLjE3LTEuODEuNTMtMi42NC4zNC0uODEuODMtMS41NSAxLjQ1LTIuMTcuNjItLjYyIDEuMzYtMS4xMSAyLjE3LTEuNDVBNi41OSA2LjU5IDAgMCAxIDggMS4yMWMuOTIgMCAxLjgxLjE3IDIuNjQuNTMuODEuMzQgMS41NS44MyAyLjE3IDEuNDUuNjIuNjIgMS4xMSAxLjM2IDEuNDUgMi4xNy4zNi44My41MyAxLjcyLjUzIDIuNjQgMCAuOTItLjE3IDEuODEtLjUzIDIuNjQtLjM0LjgxLS44MyAxLjU1LTEuNDUgMi4xN3pNNCA2Ljh2LS41OWMwLS42Ni41My0xLjE5IDEuMi0xLjE5aC41OWMuNjYgMCAxLjE5LjUzIDEuMTkgMS4xOXYuNTljMCAuNjctLjUzIDEuMi0xLjE5IDEuMkg1LjJDNC41MyA4IDQgNy40NyA0IDYuOHptNSAwdi0uNTljMC0uNjYuNTMtMS4xOSAxLjItMS4xOWguNTljLjY2IDAgMS4xOS41MyAxLjE5IDEuMTl2LjU5YzAgLjY3LS41MyAxLjItMS4xOSAxLjJoLS41OUM5LjUzIDggOSA3LjQ3IDkgNi44em00IDMuMmMtLjcyIDEuODgtMi45MSAzLTUgM3MtNC4yOC0xLjEzLTUtM2MtLjE0LS4zOS4yMy0xIC42Ni0xaDguNTljLjQxIDAgLjg5LjYxLjc1IDF6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEdvU3F1aXJyZWwgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDE2IDE2XCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xMiAxQzkuNzkgMSA4IDIuMzEgOCAzLjkyYzAgMS45NC41IDMuMDMgMCA2LjA4IDAtNC41LTIuNzctNi4zNC00LTYuMzQuMDUtLjUtLjQ4LS42Ni0uNDgtLjY2cy0uMjIuMTEtLjMuMzRjLS4yNy0uMzEtLjU2LS4yNy0uNTYtLjI3bC0uMTMuNThTLjcgNC4yOS42OCA2Ljg3Yy4yLjMzIDEuNTMuNiAyLjQ3LjQzLjg5LjA1LjY3Ljc5LjQ3Ljk5QzIuNzggOS4xMyAyIDggMSA4UzAgOSAxIDlzMSAxIDMgMWMtMy4wOSAxLjIgMCA0IDAgNEgzYy0xIDAtMSAxLTEgMWg2YzMgMCA1LTEgNS0zLjQ3IDAtLjg1LS40My0xLjc5LTEtMi41My0xLjExLTEuNDYuMjMtMi42OCAxLTIgLjc3LjY4IDMgMSAzLTIgMC0yLjIxLTEuNzktNC00LTR6TTIuNSA2Yy0uMjggMC0uNS0uMjItLjUtLjVzLjIyLS41LjUtLjUuNS4yMi41LjUtLjIyLjUtLjUuNXpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gR29TdGFyIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAxNCAxNlwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTQgNmwtNC45LS42NEw3IDEgNC45IDUuMzYgMCA2bDMuNiAzLjI2TDIuNjcgMTQgNyAxMS42NyAxMS4zMyAxNGwtLjkzLTQuNzRMMTQgNnpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gR29TdG9wIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAxNCAxNlwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTAgMUg0TDAgNXY2bDQgNGg2bDQtNFY1bC00LTR6bTMgOS41TDkuNSAxNGgtNUwxIDEwLjV2LTVMNC41IDJoNUwxMyA1LjV2NXpNNiA0aDJ2NUg2VjR6bTAgNmgydjJINnYtMnpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gR29TeW5jIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAxMiAxNlwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTAuMjQgNy40YTQuMTUgNC4xNSAwIDAgMS0xLjIgMy42IDQuMzQ2IDQuMzQ2IDAgMCAxLTUuNDEuNTRMNC44IDEwLjQuNSA5LjhsLjYgNC4yIDEuMzEtMS4yNmMyLjM2IDEuNzQgNS43IDEuNTcgNy44NC0uNTRhNS44NzYgNS44NzYgMCAwIDAgMS43NC00LjQ2bC0xLjc1LS4zNHpNMi45NiA1YTQuMzQ2IDQuMzQ2IDAgMCAxIDUuNDEtLjU0TDcuMiA1LjZsNC4zLjYtLjYtNC4yLTEuMzEgMS4yNmMtMi4zNi0xLjc0LTUuNy0xLjU3LTcuODUuNTRDLjUgNS4wMy0uMDYgNi42NS4wMSA4LjI2bDEuNzUuMzVBNC4xNyA0LjE3IDAgMCAxIDIuOTYgNXpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gR29UYWcgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDE1IDE2XCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk03LjczIDEuNzNDNy4yNiAxLjI2IDYuNjIgMSA1Ljk2IDFIMy41QzIuMTMgMSAxIDIuMTMgMSAzLjV2Mi40N2MwIC42Ni4yNyAxLjMuNzMgMS43N2w2LjA2IDYuMDZjLjM5LjM5IDEuMDIuMzkgMS40MSAwbDQuNTktNC41OWEuOTk2Ljk5NiAwIDAgMCAwLTEuNDFMNy43MyAxLjczek0yLjM4IDcuMDljLS4zMS0uMy0uNDctLjctLjQ3LTEuMTNWMy41YzAtLjg4LjcyLTEuNTkgMS41OS0xLjU5aDIuNDdjLjQyIDAgLjgzLjE2IDEuMTMuNDdsNi4xNCA2LjEzLTQuNzMgNC43My02LjEzLTYuMTV6TTMuMDEgM2gydjJIM1YzaC4wMXpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gR29UYXNrbGlzdCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMTYgMTZcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTE1LjQxIDlINy41OUM3IDkgNyA4LjU5IDcgOGMwLS41OSAwLTEgLjU5LTFoNy44MWMuNTkgMCAuNTkuNDEuNTkgMSAwIC41OSAwIDEtLjU5IDFoLjAxek05LjU5IDRDOSA0IDkgMy41OSA5IDNjMC0uNTkgMC0xIC41OS0xaDUuODFjLjU5IDAgLjU5LjQxLjU5IDEgMCAuNTkgMCAxLS41OSAxSDkuNTl6TTAgMy45MWwxLjQxLTEuM0wzIDQuMiA3LjA5IDAgOC41IDEuNDEgMyA2LjkxbC0zLTN6TTcuNTkgMTJoNy44MWMuNTkgMCAuNTkuNDEuNTkgMSAwIC41OSAwIDEtLjU5IDFINy41OUM3IDE0IDcgMTMuNTkgNyAxM2MwLS41OSAwLTEgLjU5LTF6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEdvVGVsZXNjb3BlIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAxNCAxNlwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNOCA5bDMgNmgtMWwtMi00djVIN3YtNmwtMiA1SDRsMi01IDItMXpNNyAwSDZ2MWgxVjB6TTUgM0g0djFoMVYzek0yIDFIMXYxaDFWMXpNLjYzIDlhLjUyLjUyIDAgMCAwLS4xNi42N2wuNTUuOTJjLjEzLjIzLjQxLjMxLjY0LjJsMS4zOS0uNjYtMS4xNi0yLTEuMjcuODYuMDEuMDF6bTcuODktNS4zOWwtNS44IDMuOTVMMy45NSA5LjdsNi4zMy0zLjAzLTEuNzctMy4wNmguMDF6bTQuMjIgMS4yOGwtMS40Ny0yLjUyYS41MS41MSAwIDAgMC0uNzItLjE3bC0xLjIuODMgMS44NCAzLjIgMS4zMy0uNjRjLjI3LS4xMy4zNi0uNDQuMjItLjd6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEdvVGVybWluYWwgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDE0IDE2XCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk03IDEwaDR2MUg3di0xem0tMyAxbDMtMy0zLTMtLjc1Ljc1TDUuNSA4bC0yLjI1IDIuMjVMNCAxMXptMTAtOHYxMGMwIC41NS0uNDUgMS0xIDFIMWMtLjU1IDAtMS0uNDUtMS0xVjNjMC0uNTUuNDUtMSAxLTFoMTJjLjU1IDAgMSAuNDUgMSAxem0tMSAwSDF2MTBoMTJWM3pcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gR29UZXh0U2l6ZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMTggMTZcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTEzLjYyIDkuMDhMMTIuMSAzLjY2aC0uMDZsLTEuNSA1LjQyaDMuMDh6TTUuNyAxMC4xM1M0LjY4IDYuNTIgNC41MyA2LjAyaC0uMDhsLTEuMTMgNC4xMUg1Ljd6TTE3LjMxIDE0aC0yLjI1bC0uOTUtMy4yNWgtNC4wN0w5LjA5IDE0SDYuODRsLS42OS0yLjMzSDIuODdMMi4xNyAxNEgwbDMuMy05LjU5aDIuNWwyLjE3IDYuMzRMMTAuODYgMmgyLjUybDMuOTQgMTJoLS4wMXpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gR29UaHJlZUJhcnMgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDEyIDE2XCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xMS40MSA5SC41OUMwIDkgMCA4LjU5IDAgOGMwLS41OSAwLTEgLjU5LTFIMTEuNGMuNTkgMCAuNTkuNDEuNTkgMSAwIC41OSAwIDEtLjU5IDFoLjAxem0wLTRILjU5QzAgNSAwIDQuNTkgMCA0YzAtLjU5IDAtMSAuNTktMUgxMS40Yy41OSAwIC41OS40MS41OSAxIDAgLjU5IDAgMS0uNTkgMWguMDF6TS41OSAxMUgxMS40Yy41OSAwIC41OS40MS41OSAxIDAgLjU5IDAgMS0uNTkgMUguNTlDMCAxMyAwIDEyLjU5IDAgMTJjMC0uNTkgMC0xIC41OS0xelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBHb1RodW1ic2Rvd24gKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDE2IDE2XCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xNS45OCA3LjgzbC0uOTctNS45NUMxNC44NC41IDEzLjEzIDAgMTIgMEg1LjY5Yy0uMiAwLS4zOC4wNS0uNTMuMTRMMy43MiAxSDJDLjk0IDEgMCAxLjk0IDAgM3Y0YzAgMS4wNi45NCAyLjAyIDIgMmgyYy45MSAwIDEuMzkuNDUgMi4zOSAxLjU1LjkxIDEgLjg4IDEuOC42MyAzLjI3LS4wOC41LjA2IDEgLjQyIDEuNDIuMzkuNDcuOTguNzYgMS41Ni43NiAxLjgzIDAgMy0zLjcxIDMtNS4wMWwtLjAyLS45OGgyLjA0YzEuMTYgMCAxLjk1LS44IDEuOTgtMS45NyAwLS4xMS0uMDItLjIxLS4wMi0uMjF6bS0xLjk3IDEuMTloLTEuOTljLS43IDAtMS4wMy4yOC0xLjAzLjk3bC4wMyAxLjAzYzAgMS4yNy0xLjE3IDQtMiA0LS41IDAtMS4wOC0uNS0xLTEgLjI1LTEuNTguMzQtMi43OC0uODktNC4xNEM2LjExIDguNzUgNS4zNiA4IDQgOFYybDEuNjctMUgxMmMuNzMgMCAxLjk1LjMxIDIgMWwuMDIuMDIgMSA2Yy0uMDMuNjQtLjM4IDEtMSAxaC0uMDF6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEdvVGh1bWJzdXAgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDE2IDE2XCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xNS45OCA4LjE3bC0uOTcgNS45NUMxNC44NCAxNS41IDEzLjEzIDE2IDEyIDE2SDUuNjljLS4yIDAtLjM4LS4wNS0uNTMtLjE0TDMuNzIgMTVIMmMtMS4wNiAwLTItLjk0LTItMlY5YzAtMS4wNi45NC0yLjAyIDItMmgyYy45MSAwIDEuMzktLjQ1IDIuMzktMS41NS45MS0xIC44OC0xLjguNjMtMy4yNy0uMDgtLjUuMDYtMSAuNDItMS40MkM3LjgzLjI5IDguNDIgMCA5IDBjMS44MyAwIDMgMy43MSAzIDUuMDFsLS4wMi45OGgyLjA0YzEuMTYgMCAxLjk1LjggMS45OCAxLjk3IDAgLjExLS4wMi4yMS0uMDIuMjF6bS0xLjk3LTEuMTloLTEuOTljLS43IDAtMS4wMy0uMjgtMS4wMy0uOTdsLjAzLTEuMDNjMC0xLjI3LTEuMTctNC0yLTQtLjUgMC0xLjA4LjUtMSAxIC4yNSAxLjU4LjM0IDIuNzgtLjg5IDQuMTRDNi4xMSA3LjI1IDUuMzYgOCA0IDh2NmwxLjY3IDFIMTJjLjczIDAgMS45NS0uMzEgMi0xbC4wMi0uMDIgMS02Yy0uMDMtLjY0LS4zOC0xLTEtMWgtLjAxelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBHb1Rvb2xzIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAxNiAxNlwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNNC40OCA3LjI3Yy4yNi4yNiAxLjI4IDEuMzMgMS4yOCAxLjMzbC41Ni0uNTgtLjg4LS45MSAxLjY5LTEuOHMtLjc2LS43NC0uNDMtLjQ1Yy4zMi0xLjE5LjAzLTIuNTEtLjg3LTMuNDRDNC45My41IDMuNjYuMiAyLjUyLjUxbDEuOTMgMi0uNTEgMS45Ni0xLjg5LjUyLTEuOTMtMkMtLjE5IDQuMTcuMSA1LjQ4IDEgNi40Yy45NC45OCAyLjI5IDEuMjYgMy40OC44N3ptNi40NCAxLjk0bC0yLjMzIDIuMyAzLjg0IDMuOThjLjMxLjMzLjczLjQ5IDEuMTQuNDkuNDEgMCAuODItLjE2IDEuMTQtLjQ5LjYzLS42NS42My0xLjcgMC0yLjM1bC0zLjc5LTMuOTN6TTE2IDIuNTNMMTMuNTUgMCA2LjMzIDcuNDZsLjg4LjkxLTQuMzEgNC40Ni0uOTkuNTMtMS4zOSAyLjI3LjM1LjM3IDIuMi0xLjQ0LjUxLTEuMDJMNy45IDkuMDhsLjg4LjkxTDE2IDIuNTN6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEdvVHJhc2hjYW4gKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDEyIDE2XCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xMSAySDljMC0uNTUtLjQ1LTEtMS0xSDVjLS41NSAwLTEgLjQ1LTEgMUgyYy0uNTUgMC0xIC40NS0xIDF2MWMwIC41NS40NSAxIDEgMXY5YzAgLjU1LjQ1IDEgMSAxaDdjLjU1IDAgMS0uNDUgMS0xVjVjLjU1IDAgMS0uNDUgMS0xVjNjMC0uNTUtLjQ1LTEtMS0xem0tMSAxMkgzVjVoMXY4aDFWNWgxdjhoMVY1aDF2OGgxVjVoMXY5em0xLTEwSDJWM2g5djF6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEdvVHJpYW5nbGVEb3duIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAxMiAxNlwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMCA1bDYgNiA2LTZIMHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gR29UcmlhbmdsZUxlZnQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDYgMTZcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTYgMkwwIDhsNiA2VjJ6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEdvVHJpYW5nbGVSaWdodCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgNiAxNlwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMCAxNGw2LTYtNi02djEyelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBHb1RyaWFuZ2xlVXAgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDEyIDE2XCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xMiAxMUw2IDVsLTYgNmgxMnpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gR29VbmZvbGQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDE0IDE2XCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xMS41IDcuNUwxNCAxMGMwIC41NS0uNDUgMS0xIDFIOXYtMWgzLjVsLTItMmgtN2wtMiAySDV2MUgxYy0uNTUgMC0xLS40NS0xLTFsMi41LTIuNUwwIDVjMC0uNTUuNDUtMSAxLTFoNHYxSDEuNWwyIDJoN2wyLTJIOVY0aDRjLjU1IDAgMSAuNDUgMSAxbC0yLjUgMi41ek02IDZoMlYzaDJMNyAwIDQgM2gydjN6bTIgM0g2djNINGwzIDMgMy0zSDhWOXpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gR29Vbm11dGUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDE2IDE2XCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xMiA4LjAyYzAgMS4wOS0uNDUgMi4wOS0xLjE3IDIuODNsLS42Ny0uNjdjLjU1LS41Ni44OS0xLjMxLjg5LTIuMTYgMC0uODUtLjM0LTEuNjEtLjg5LTIuMTZsLjY3LS42N0EzLjk5IDMuOTkgMCAwIDEgMTIgOC4wMnpNNy43MiAyLjI4TDQgNkgyYy0uNTUgMC0xIC40NS0xIDF2MmMwIC41NS40NSAxIDEgMWgybDMuNzIgMy43MmMuNDcuNDcgMS4yOC4xNCAxLjI4LS41M1YyLjgxYzAtLjY3LS44MS0xLTEuMjgtLjUzem01Ljk0LjA4bC0uNjcuNjdhNi45OTYgNi45OTYgMCAwIDEgMi4wNiA0Ljk4YzAgMS45NC0uNzggMy43LTIuMDYgNC45OGwuNjcuNjdBNy45NzMgNy45NzMgMCAwIDAgMTYgOGMwLTIuMjItLjg5LTQuMjItMi4zNC01LjY2di4wMnptLTEuNDEgMS40MWwtLjY5LjY3YTUuMDUgNS4wNSAwIDAgMSAxLjQ4IDMuNThjMCAxLjM5LS41NiAyLjY2LTEuNDggMy41NmwuNjkuNjdBNS45NzEgNS45NzEgMCAwIDAgMTQgOC4wMmMwLTEuNjUtLjY3LTMuMTYtMS43NS00LjI1elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBHb1VudmVyaWZpZWQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDE2IDE2XCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xNS42NyA3LjA2NmwtMS4wOC0xLjM0YTEuNSAxLjUgMCAwIDEtLjMwOS0uNzdsLS4xOS0xLjY5OGExLjUxIDEuNTEgMCAwIDAtMS4zMjktMS4zM2wtMS42OTktLjE5Yy0uMy0uMDMtLjU2LS4xNTktLjc4LS4zMjlMOC45NDUuMzNhMS41MDQgMS41MDQgMCAwIDAtMS44NzggMGwtMS4zNCAxLjA4YTEuNSAxLjUgMCAwIDEtLjc3LjMxbC0xLjY5OC4xOWMtLjcuMDgtMS4yNS42My0xLjMzIDEuMzI5bC0uMTkgMS42OTljLS4wMy4zLS4xNTkuNTYtLjMyOS43OEwuMzMgNy4wNTVhMS41MDQgMS41MDQgMCAwIDAgMCAxLjg3OGwxLjA4IDEuMzRjLjE3LjIyLjI4LjQ4LjMxLjc3bC4xOSAxLjY5OGMuMDguNy42MyAxLjI1IDEuMzI5IDEuMzNsMS42OTkuMTljLjMuMDMuNTYuMTU5Ljc4LjMyOWwxLjMzOSAxLjA4Yy41NS40MzkgMS4zMjkuNDM5IDEuODc4IDBsMS4zNC0xLjA4Yy4yMi0uMTcuNDgtLjI4Ljc3LS4zMWwxLjY5OC0uMTljLjctLjA4IDEuMjUtLjYzIDEuMzMtMS4zMjlsLjE5LTEuNjk5Yy4wMy0uMy4xNTktLjU2LjMyOS0uNzhsMS4wOC0xLjMzOWExLjUwNCAxLjUwNCAwIDAgMCAwLTEuODc4ek05IDExLjVjMCAuMjgtLjIyLjUtLjUuNWgtMWMtLjI3IDAtLjUtLjIyLS41LS41di0xYzAtLjI4LjIzLS41LjUtLjVoMWMuMjggMCAuNS4yMi41LjV2MXptMS41Ni00Ljg5Yy0uMDYuMTctLjE3LjMzLS4zLjQ3LS4xMy4xNi0uMTQuMTktLjMzLjM4LS4xNi4xNy0uMzEuMy0uNTIuNDUtLjExLjA5LS4yLjE5LS4yOC4yNy0uMDguMDgtLjE0LjE3LS4xOS4yNy0uMDUuMS0uMDguMTktLjExLjMtLjAzLjExLS4wMy4xMy0uMDMuMjVINy4xM2MwLS4yMiAwLS4zMS4wMy0uNDguMDMtLjE5LjA4LS4zNi4xNC0uNTIuMDYtLjE0LjE0LS4yOC4yNS0uNDIuMTEtLjEzLjIzLS4yNS40MS0uMzguMjctLjE5LjM2LS4zLjQ4LS41Mi4xMi0uMjIuMi0uMzguMi0uNTkgMC0uMjctLjA2LS40NS0uMi0uNTgtLjEzLS4xMy0uMzEtLjE5LS41OC0uMTktLjA5IDAtLjE5LjAyLS4zLjA1LS4xMS4wMy0uMTcuMDktLjI1LjE2LS4wOC4wNy0uMTQuMTEtLjIuMmEuNDEuNDEgMCAwIDAtLjA5LjI4aC0yYzAtLjM4LjEzLS41Ni4yNy0uODMuMTYtLjI3LjM2LS41LjYxLS42Ny4yNS0uMTcuNTUtLjMuODgtLjM4LjMzLS4wOC43LS4xMyAxLjA5LS4xMy40NCAwIC44My4wNSAxLjE3LjEzLjM0LjA5LjYzLjIyLjg4LjM5LjIzLjE3LjQxLjM4LjU1LjYzLjEzLjI1LjE5LjU1LjE5Ljg4IDAgLjIyIDAgLjQyLS4wOC41OWwtLjAyLS4wMXpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gR29WZXJpZmllZCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMTYgMTZcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTE1LjY3IDcuMDY2bC0xLjA4LTEuMzRhMS41IDEuNSAwIDAgMS0uMzA5LS43N2wtLjE5LTEuNjk4YTEuNTEgMS41MSAwIDAgMC0xLjMyOS0xLjMzbC0xLjY5OS0uMTljLS4zLS4wMy0uNTYtLjE1OS0uNzgtLjMyOUw4Ljk0NS4zM2ExLjUwNCAxLjUwNCAwIDAgMC0xLjg3OCAwbC0xLjM0IDEuMDhhMS41IDEuNSAwIDAgMS0uNzcuMzFsLTEuNjk4LjE5Yy0uNy4wOC0xLjI1LjYzLTEuMzMgMS4zMjlsLS4xOSAxLjY5OWMtLjAzLjMtLjE1OS41Ni0uMzI5Ljc4TC4zMyA3LjA1NWExLjUwNCAxLjUwNCAwIDAgMCAwIDEuODc4bDEuMDggMS4zNGMuMTcuMjIuMjguNDguMzEuNzdsLjE5IDEuNjk4Yy4wOC43LjYzIDEuMjUgMS4zMjkgMS4zM2wxLjY5OS4xOWMuMy4wMy41Ni4xNTkuNzguMzI5bDEuMzM5IDEuMDhjLjU1LjQzOSAxLjMyOS40MzkgMS44NzggMGwxLjM0LTEuMDhjLjIyLS4xNy40OC0uMjguNzctLjMxbDEuNjk4LS4xOWMuNy0uMDggMS4yNS0uNjMgMS4zMy0xLjMyOWwuMTktMS42OTljLjAzLS4zLjE1OS0uNTYuMzI5LS43OGwxLjA4LTEuMzM5YTEuNTA0IDEuNTA0IDAgMCAwIDAtMS44Nzh6TTYuNSAxMi4wMUwzIDguNTFsMS41LTEuNSAyIDIgNS01TDEzIDUuNTZsLTYuNSA2LjQ1elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBHb1ZlcnNpb25zIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAxNCAxNlwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTMgM0g3Yy0uNTUgMC0xIC40NS0xIDF2OGMwIC41NS40NSAxIDEgMWg2Yy41NSAwIDEtLjQ1IDEtMVY0YzAtLjU1LS40NS0xLTEtMXptLTEgOEg4VjVoNHY2ek00IDRoMXYxSDR2NmgxdjFINGMtLjU1IDAtMS0uNDUtMS0xVjVjMC0uNTUuNDUtMSAxLTF6TTEgNWgxdjFIMXY0aDF2MUgxYy0uNTUgMC0xLS40NS0xLTFWNmMwLS41NS40NS0xIDEtMXpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gR29XYXRjaCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMTIgMTZcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTYgOGgydjFINVY1aDF2M3ptNiAwYzAgMi4yMi0xLjIgNC4xNi0zIDUuMTlWMTVjMCAuNTUtLjQ1IDEtMSAxSDRjLS41NSAwLTEtLjQ1LTEtMXYtMS44MUMxLjIgMTIuMTYgMCAxMC4yMiAwIDhzMS4yLTQuMTYgMy01LjE5VjFjMC0uNTUuNDUtMSAxLTFoNGMuNTUgMCAxIC40NSAxIDF2MS44MWMxLjggMS4wMyAzIDIuOTcgMyA1LjE5em0tMSAwYzAtMi43Ny0yLjIzLTUtNS01UzEgNS4yMyAxIDhzMi4yMyA1IDUgNSA1LTIuMjMgNS01elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBHb1ggKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDEyIDE2XCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk03LjQ4IDhsMy43NSAzLjc1LTEuNDggMS40OEw2IDkuNDhsLTMuNzUgMy43NS0xLjQ4LTEuNDhMNC41MiA4IC43NyA0LjI1bDEuNDgtMS40OEw2IDYuNTJsMy43NS0zLjc1IDEuNDggMS40OEw3LjQ4IDh6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEdvWmFwIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAxMCAxNlwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTAgN0g2bDMtNy05IDloNGwtMyA3IDktOXpcIn19XX0pKHByb3BzKTtcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG52YXIgX19yZXN0ID0gKHRoaXMgJiYgdGhpcy5fX3Jlc3QpIHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgdmFyIHQgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcbiAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgICAgIH1cbiAgICByZXR1cm4gdDtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkljb25CYXNlID0gZXhwb3J0cy5HZW5JY29uID0gdm9pZCAwO1xudmFyIFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xudmFyIGljb25Db250ZXh0XzEgPSByZXF1aXJlKFwiLi9pY29uQ29udGV4dFwiKTtcbmZ1bmN0aW9uIFRyZWUyRWxlbWVudCh0cmVlKSB7XG4gICAgcmV0dXJuIHRyZWUgJiYgdHJlZS5tYXAoZnVuY3Rpb24gKG5vZGUsIGkpIHsgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQobm9kZS50YWcsIF9fYXNzaWduKHsga2V5OiBpIH0sIG5vZGUuYXR0ciksIFRyZWUyRWxlbWVudChub2RlLmNoaWxkKSk7IH0pO1xufVxuZnVuY3Rpb24gR2VuSWNvbihkYXRhKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwcm9wcykgeyByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbkJhc2UsIF9fYXNzaWduKHsgYXR0cjogX19hc3NpZ24oe30sIGRhdGEuYXR0cikgfSwgcHJvcHMpLCBUcmVlMkVsZW1lbnQoZGF0YS5jaGlsZCkpKTsgfTtcbn1cbmV4cG9ydHMuR2VuSWNvbiA9IEdlbkljb247XG5mdW5jdGlvbiBJY29uQmFzZShwcm9wcykge1xuICAgIHZhciBlbGVtID0gZnVuY3Rpb24gKGNvbmYpIHtcbiAgICAgICAgdmFyIGF0dHIgPSBwcm9wcy5hdHRyLCBzaXplID0gcHJvcHMuc2l6ZSwgdGl0bGUgPSBwcm9wcy50aXRsZSwgc3ZnUHJvcHMgPSBfX3Jlc3QocHJvcHMsIFtcImF0dHJcIiwgXCJzaXplXCIsIFwidGl0bGVcIl0pO1xuICAgICAgICB2YXIgY29tcHV0ZWRTaXplID0gc2l6ZSB8fCBjb25mLnNpemUgfHwgXCIxZW1cIjtcbiAgICAgICAgdmFyIGNsYXNzTmFtZTtcbiAgICAgICAgaWYgKGNvbmYuY2xhc3NOYW1lKVxuICAgICAgICAgICAgY2xhc3NOYW1lID0gY29uZi5jbGFzc05hbWU7XG4gICAgICAgIGlmIChwcm9wcy5jbGFzc05hbWUpXG4gICAgICAgICAgICBjbGFzc05hbWUgPSAoY2xhc3NOYW1lID8gY2xhc3NOYW1lICsgJyAnIDogJycpICsgcHJvcHMuY2xhc3NOYW1lO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwgX19hc3NpZ24oeyBzdHJva2U6IFwiY3VycmVudENvbG9yXCIsIGZpbGw6IFwiY3VycmVudENvbG9yXCIsIHN0cm9rZVdpZHRoOiBcIjBcIiB9LCBjb25mLmF0dHIsIGF0dHIsIHN2Z1Byb3BzLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lLCBzdHlsZTogX19hc3NpZ24oX19hc3NpZ24oeyBjb2xvcjogcHJvcHMuY29sb3IgfHwgY29uZi5jb2xvciB9LCBjb25mLnN0eWxlKSwgcHJvcHMuc3R5bGUpLCBoZWlnaHQ6IGNvbXB1dGVkU2l6ZSwgd2lkdGg6IGNvbXB1dGVkU2l6ZSwgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB9KSxcbiAgICAgICAgICAgIHRpdGxlICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0aXRsZVwiLCBudWxsLCB0aXRsZSksXG4gICAgICAgICAgICBwcm9wcy5jaGlsZHJlbikpO1xuICAgIH07XG4gICAgcmV0dXJuIGljb25Db250ZXh0XzEuSWNvbkNvbnRleHQgIT09IHVuZGVmaW5lZFxuICAgICAgICA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoaWNvbkNvbnRleHRfMS5JY29uQ29udGV4dC5Db25zdW1lciwgbnVsbCwgZnVuY3Rpb24gKGNvbmYpIHsgcmV0dXJuIGVsZW0oY29uZik7IH0pXG4gICAgICAgIDogZWxlbShpY29uQ29udGV4dF8xLkRlZmF1bHRDb250ZXh0KTtcbn1cbmV4cG9ydHMuSWNvbkJhc2UgPSBJY29uQmFzZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5JY29uQ29udGV4dCA9IGV4cG9ydHMuRGVmYXVsdENvbnRleHQgPSB2b2lkIDA7XG52YXIgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5leHBvcnRzLkRlZmF1bHRDb250ZXh0ID0ge1xuICAgIGNvbG9yOiB1bmRlZmluZWQsXG4gICAgc2l6ZTogdW5kZWZpbmVkLFxuICAgIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxuICAgIHN0eWxlOiB1bmRlZmluZWQsXG4gICAgYXR0cjogdW5kZWZpbmVkLFxufTtcbmV4cG9ydHMuSWNvbkNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0ICYmIFJlYWN0LmNyZWF0ZUNvbnRleHQoZXhwb3J0cy5EZWZhdWx0Q29udGV4dCk7XG4iLCJtb2R1bGUuZXhwb3J0cy5JY29uc01hbmlmZXN0ID0gW1xuICB7XG4gICAgXCJpZFwiOiBcImZhXCIsXG4gICAgXCJuYW1lXCI6IFwiRm9udCBBd2Vzb21lXCIsXG4gICAgXCJwcm9qZWN0VXJsXCI6IFwiaHR0cHM6Ly9mb250YXdlc29tZS5jb20vXCIsXG4gICAgXCJsaWNlbnNlXCI6IFwiQ0MgQlkgNC4wIExpY2Vuc2VcIixcbiAgICBcImxpY2Vuc2VVcmxcIjogXCJodHRwczovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvYnkvNC4wL1wiXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IFwiaW9cIixcbiAgICBcIm5hbWVcIjogXCJJb25pY29ucyA0XCIsXG4gICAgXCJwcm9qZWN0VXJsXCI6IFwiaHR0cHM6Ly9pb25pY29ucy5jb20vXCIsXG4gICAgXCJsaWNlbnNlXCI6IFwiTUlUXCIsXG4gICAgXCJsaWNlbnNlVXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vaW9uaWNvbnMvYmxvYi9tYXN0ZXIvTElDRU5TRVwiXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IFwiaW81XCIsXG4gICAgXCJuYW1lXCI6IFwiSW9uaWNvbnMgNVwiLFxuICAgIFwicHJvamVjdFVybFwiOiBcImh0dHBzOi8vaW9uaWNvbnMuY29tL1wiLFxuICAgIFwibGljZW5zZVwiOiBcIk1JVFwiLFxuICAgIFwibGljZW5zZVVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2lvbmljb25zL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcIm1kXCIsXG4gICAgXCJuYW1lXCI6IFwiTWF0ZXJpYWwgRGVzaWduIGljb25zXCIsXG4gICAgXCJwcm9qZWN0VXJsXCI6IFwiaHR0cDovL2dvb2dsZS5naXRodWIuaW8vbWF0ZXJpYWwtZGVzaWduLWljb25zL1wiLFxuICAgIFwibGljZW5zZVwiOiBcIkFwYWNoZSBMaWNlbnNlIFZlcnNpb24gMi4wXCIsXG4gICAgXCJsaWNlbnNlVXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2dvb2dsZS9tYXRlcmlhbC1kZXNpZ24taWNvbnMvYmxvYi9tYXN0ZXIvTElDRU5TRVwiXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IFwidGlcIixcbiAgICBcIm5hbWVcIjogXCJUeXBpY29uc1wiLFxuICAgIFwicHJvamVjdFVybFwiOiBcImh0dHA6Ly9zLWluZ3MuY29tL3R5cGljb25zL1wiLFxuICAgIFwibGljZW5zZVwiOiBcIkNDIEJZLVNBIDMuMFwiLFxuICAgIFwibGljZW5zZVVybFwiOiBcImh0dHBzOi8vY3JlYXRpdmVjb21tb25zLm9yZy9saWNlbnNlcy9ieS1zYS8zLjAvXCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCJnb1wiLFxuICAgIFwibmFtZVwiOiBcIkdpdGh1YiBPY3RpY29ucyBpY29uc1wiLFxuICAgIFwicHJvamVjdFVybFwiOiBcImh0dHBzOi8vb2N0aWNvbnMuZ2l0aHViLmNvbS9cIixcbiAgICBcImxpY2Vuc2VcIjogXCJNSVRcIixcbiAgICBcImxpY2Vuc2VVcmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vcHJpbWVyL29jdGljb25zL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcImZpXCIsXG4gICAgXCJuYW1lXCI6IFwiRmVhdGhlclwiLFxuICAgIFwicHJvamVjdFVybFwiOiBcImh0dHBzOi8vZmVhdGhlcmljb25zLmNvbS9cIixcbiAgICBcImxpY2Vuc2VcIjogXCJNSVRcIixcbiAgICBcImxpY2Vuc2VVcmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vZmVhdGhlcmljb25zL2ZlYXRoZXIvYmxvYi9tYXN0ZXIvTElDRU5TRVwiXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IFwiZ2lcIixcbiAgICBcIm5hbWVcIjogXCJHYW1lIEljb25zXCIsXG4gICAgXCJwcm9qZWN0VXJsXCI6IFwiaHR0cHM6Ly9nYW1lLWljb25zLm5ldC9cIixcbiAgICBcImxpY2Vuc2VcIjogXCJDQyBCWSAzLjBcIixcbiAgICBcImxpY2Vuc2VVcmxcIjogXCJodHRwczovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvYnkvMy4wL1wiXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IFwid2lcIixcbiAgICBcIm5hbWVcIjogXCJXZWF0aGVyIEljb25zXCIsXG4gICAgXCJwcm9qZWN0VXJsXCI6IFwiaHR0cHM6Ly9lcmlrZmxvd2Vycy5naXRodWIuaW8vd2VhdGhlci1pY29ucy9cIixcbiAgICBcImxpY2Vuc2VcIjogXCJTSUwgT0ZMIDEuMVwiLFxuICAgIFwibGljZW5zZVVybFwiOiBcImh0dHA6Ly9zY3JpcHRzLnNpbC5vcmcvT0ZMXCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCJkaVwiLFxuICAgIFwibmFtZVwiOiBcIkRldmljb25zXCIsXG4gICAgXCJwcm9qZWN0VXJsXCI6IFwiaHR0cHM6Ly92b3JpbGxhei5naXRodWIuaW8vZGV2aWNvbnMvXCIsXG4gICAgXCJsaWNlbnNlXCI6IFwiTUlUXCIsXG4gICAgXCJsaWNlbnNlVXJsXCI6IFwiaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcImFpXCIsXG4gICAgXCJuYW1lXCI6IFwiQW50IERlc2lnbiBJY29uc1wiLFxuICAgIFwicHJvamVjdFVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24taWNvbnNcIixcbiAgICBcImxpY2Vuc2VcIjogXCJNSVRcIixcbiAgICBcImxpY2Vuc2VVcmxcIjogXCJodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFwiXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IFwiYnNcIixcbiAgICBcIm5hbWVcIjogXCJCb290c3RyYXAgSWNvbnNcIixcbiAgICBcInByb2plY3RVcmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdHdicy9pY29uc1wiLFxuICAgIFwibGljZW5zZVwiOiBcIk1JVFwiLFxuICAgIFwibGljZW5zZVVybFwiOiBcImh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCJyaVwiLFxuICAgIFwibmFtZVwiOiBcIlJlbWl4IEljb25cIixcbiAgICBcInByb2plY3RVcmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vUmVtaXgtRGVzaWduL1JlbWl4SWNvblwiLFxuICAgIFwibGljZW5zZVwiOiBcIkFwYWNoZSBMaWNlbnNlIFZlcnNpb24gMi4wXCIsXG4gICAgXCJsaWNlbnNlVXJsXCI6IFwiaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL1wiXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IFwiZmNcIixcbiAgICBcIm5hbWVcIjogXCJGbGF0IENvbG9yIEljb25zXCIsXG4gICAgXCJwcm9qZWN0VXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2ljb25zOC9mbGF0LWNvbG9yLWljb25zXCIsXG4gICAgXCJsaWNlbnNlXCI6IFwiTUlUXCIsXG4gICAgXCJsaWNlbnNlVXJsXCI6IFwiaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcImdyXCIsXG4gICAgXCJuYW1lXCI6IFwiR3JvbW1ldC1JY29uc1wiLFxuICAgIFwicHJvamVjdFVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9ncm9tbWV0L2dyb21tZXQtaWNvbnNcIixcbiAgICBcImxpY2Vuc2VcIjogXCJBcGFjaGUgTGljZW5zZSBWZXJzaW9uIDIuMFwiLFxuICAgIFwibGljZW5zZVVybFwiOiBcImh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9cIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcImhpXCIsXG4gICAgXCJuYW1lXCI6IFwiSGVyb2ljb25zXCIsXG4gICAgXCJwcm9qZWN0VXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kbGFicy9oZXJvaWNvbnNcIixcbiAgICBcImxpY2Vuc2VcIjogXCJNSVRcIixcbiAgICBcImxpY2Vuc2VVcmxcIjogXCJodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFwiXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IFwic2lcIixcbiAgICBcIm5hbWVcIjogXCJTaW1wbGUgSWNvbnNcIixcbiAgICBcInByb2plY3RVcmxcIjogXCJodHRwczovL3NpbXBsZWljb25zLm9yZy9cIixcbiAgICBcImxpY2Vuc2VcIjogXCJDQzAgMS4wIFVuaXZlcnNhbFwiLFxuICAgIFwibGljZW5zZVVybFwiOiBcImh0dHBzOi8vY3JlYXRpdmVjb21tb25zLm9yZy9wdWJsaWNkb21haW4vemVyby8xLjAvXCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCJpbVwiLFxuICAgIFwibmFtZVwiOiBcIkljb01vb24gRnJlZVwiLFxuICAgIFwicHJvamVjdFVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9LZXlhbW9vbi9JY29Nb29uLUZyZWVcIixcbiAgICBcImxpY2Vuc2VcIjogXCJDQyBCWSA0LjAgTGljZW5zZVwiXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IFwiYmlcIixcbiAgICBcIm5hbWVcIjogXCJCb3hJY29uc1wiLFxuICAgIFwicHJvamVjdFVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9hdGlzYXdkL2JveGljb25zXCIsXG4gICAgXCJsaWNlbnNlXCI6IFwiQ0MgQlkgNC4wIExpY2Vuc2VcIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcImNnXCIsXG4gICAgXCJuYW1lXCI6IFwiY3NzLmdnXCIsXG4gICAgXCJwcm9qZWN0VXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2FzdHJpdC9jc3MuZ2dcIixcbiAgICBcImxpY2Vuc2VcIjogXCJNSVRcIixcbiAgICBcImxpY2Vuc2VVcmxcIjogXCJodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFwiXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IFwidnNjXCIsXG4gICAgXCJuYW1lXCI6IFwiVlMgQ29kZSBJY29uc1wiLFxuICAgIFwicHJvamVjdFVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvdnNjb2RlLWNvZGljb25zXCIsXG4gICAgXCJsaWNlbnNlXCI6IFwiQ0MgQlkgNC4wXCIsXG4gICAgXCJsaWNlbnNlVXJsXCI6IFwiaHR0cHM6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL2xpY2Vuc2VzL2J5LzQuMC9cIlxuICB9XG5dIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fZXhwb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19leHBvcnRTdGFyKSB8fCBmdW5jdGlvbihtLCBleHBvcnRzKSB7XG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIF9fY3JlYXRlQmluZGluZyhleHBvcnRzLCBtLCBwKTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vaWNvbnNNYW5pZmVzdFwiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vaWNvbkJhc2VcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2ljb25Db250ZXh0XCIpLCBleHBvcnRzKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvbWl0dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdXRpbHMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCIvKiAoaWdub3JlZCkgKi8iXSwibmFtZXMiOlsiQm94IiwiSGVhZGluZyIsIlRleHQiLCJGb290ZXIiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJIZWFkIiwiTXlIZWFkIiwidGl0bGUiLCJkZXNjIiwidXJsIiwiaW1nIiwiYmFzZVVybCIsIkZsZXgiLCJXcmFwIiwiV3JhcEl0ZW0iLCJTcGFjZXIiLCJCdXR0b24iLCJNZW51IiwiTWVudUJ1dHRvbiIsIk1lbnVMaXN0IiwiTWVudUdyb3VwIiwiTWVudUl0ZW0iLCJJY29uIiwiTGluayIsIkdvQ2hldnJvbkRvd24iLCJOZXh0TGluayIsIkhlYWRlciIsImJhc2UiLCJsZyIsIm1kIiwieGwiLCJzbSIsInRleHREZWNvcmF0aW9uIiwiYmciLCJib3JkZXJDb2xvciIsImJvcmRlciIsIkxheW91dCIsImNoaWxkcmVuIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJkZWZhdWx0IiwiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfcm91dGVyIiwiX3JvdXRlcjEiLCJfdXNlSW50ZXJzZWN0aW9uIiwib2JqIiwiX19lc01vZHVsZSIsInByZWZldGNoZWQiLCJwcmVmZXRjaCIsInJvdXRlciIsImhyZWYiLCJhcyIsIm9wdGlvbnMiLCJpc0xvY2FsVVJMIiwiY2F0Y2giLCJlcnIiLCJjdXJMb2NhbGUiLCJsb2NhbGUiLCJpc01vZGlmaWVkRXZlbnQiLCJldmVudCIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJtZXRhS2V5IiwiY3RybEtleSIsInNoaWZ0S2V5IiwiYWx0S2V5IiwibmF0aXZlRXZlbnQiLCJ3aGljaCIsImxpbmtDbGlja2VkIiwiZSIsInJlcGxhY2UiLCJzaGFsbG93Iiwic2Nyb2xsIiwibm9kZU5hbWUiLCJwcmV2ZW50RGVmYXVsdCIsImluZGV4T2YiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsImFyZ3MiLCJFcnJvciIsImtleSIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsImtleXMiLCJmb3JFYWNoIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInBhc3NIcmVmIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJ1c2VSZWYiLCJjdXJyZW50IiwiY29uc29sZSIsIndhcm4iLCJwIiwidXNlUm91dGVyIiwidXNlTWVtbyIsInJlc29sdmVkSHJlZiIsInJlc29sdmVkQXMiLCJyZXNvbHZlSHJlZiIsImNyZWF0ZUVsZW1lbnQiLCJjaGlsZCIsIkNoaWxkcmVuIiwib25seSIsImNoaWxkUmVmIiwicmVmIiwic2V0SW50ZXJzZWN0aW9uUmVmIiwiaXNWaXNpYmxlIiwidXNlSW50ZXJzZWN0aW9uIiwicm9vdE1hcmdpbiIsInNldFJlZiIsInVzZUNhbGxiYWNrIiwiZWwiLCJ1c2VFZmZlY3QiLCJzaG91bGRQcmVmZXRjaCIsImlzUHJlZmV0Y2hlZCIsImNoaWxkUHJvcHMiLCJvbkNsaWNrIiwiZGVmYXVsdFByZXZlbnRlZCIsIm9uTW91c2VFbnRlciIsInByaW9yaXR5IiwidHlwZSIsImxvY2FsZURvbWFpbiIsImlzTG9jYWxlRG9tYWluIiwiZ2V0RG9tYWluTG9jYWxlIiwibG9jYWxlcyIsImRvbWFpbkxvY2FsZXMiLCJhZGRCYXNlUGF0aCIsImFkZExvY2FsZSIsImRlZmF1bHRMb2NhbGUiLCJjbG9uZUVsZW1lbnQiLCJfZGVmYXVsdCIsInJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwYXRoIiwiZW5kc1dpdGgiLCJzbGljZSIsInByb2Nlc3MiLCJlbnYiLCJfX05FWFRfVFJBSUxJTkdfU0xBU0giLCJ0ZXN0IiwicmVxdWVzdElkbGVDYWxsYmFjayIsImNhbmNlbElkbGVDYWxsYmFjayIsInNlbGYiLCJiaW5kIiwid2luZG93IiwiY2IiLCJzdGFydCIsIm5vdyIsInNldFRpbWVvdXQiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIk1hdGgiLCJtYXgiLCJpZCIsImNsZWFyVGltZW91dCIsIm1hcmtBc3NldEVycm9yIiwiaXNBc3NldEVycm9yIiwiZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCIsImNyZWF0ZVJvdXRlTG9hZGVyIiwiX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSIsIl9yZXF1ZXN0SWRsZUNhbGxiYWNrIiwiTVNfTUFYX0lETEVfREVMQVkiLCJ3aXRoRnV0dXJlIiwibWFwIiwiZ2VuZXJhdG9yIiwiZW50cnkiLCJnZXQiLCJmdXR1cmUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlc29sdmVyIiwicHJvbSIsInNldCIsInRoZW4iLCJoYXNQcmVmZXRjaCIsImxpbmsiLCJkb2N1bWVudCIsIk1TSW5wdXRNZXRob2RDb250ZXh0IiwiZG9jdW1lbnRNb2RlIiwicmVsTGlzdCIsInN1cHBvcnRzIiwiY2FuUHJlZmV0Y2giLCJwcmVmZXRjaFZpYURvbSIsInJlcyIsInJlaiIsInF1ZXJ5U2VsZWN0b3IiLCJyZWwiLCJjcm9zc09yaWdpbiIsIl9fTkVYVF9DUk9TU19PUklHSU4iLCJvbmxvYWQiLCJvbmVycm9yIiwiaGVhZCIsImFwcGVuZENoaWxkIiwiQVNTRVRfTE9BRF9FUlJPUiIsIlN5bWJvbCIsImFwcGVuZFNjcmlwdCIsInNyYyIsInNjcmlwdCIsInJlamVjdCIsImJvZHkiLCJkZXZCdWlsZFByb21pc2UiLCJyZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0IiwibXMiLCJjYW5jZWxsZWQiLCJyIiwiX19CVUlMRF9NQU5JRkVTVCIsIm9uQnVpbGRNYW5pZmVzdCIsIl9fQlVJTERfTUFOSUZFU1RfQ0IiLCJnZXRGaWxlc0ZvclJvdXRlIiwiYXNzZXRQcmVmaXgiLCJyb3V0ZSIsInNjcmlwdHMiLCJlbmNvZGVVUkkiLCJjc3MiLCJtYW5pZmVzdCIsImFsbEZpbGVzIiwiZmlsdGVyIiwidiIsImVudHJ5cG9pbnRzIiwiTWFwIiwibG9hZGVkU2NyaXB0cyIsInN0eWxlU2hlZXRzIiwicm91dGVzIiwibWF5YmVFeGVjdXRlU2NyaXB0IiwiZmV0Y2hTdHlsZVNoZWV0IiwiZmV0Y2giLCJvayIsInRleHQiLCJjb250ZW50Iiwid2hlbkVudHJ5cG9pbnQiLCJvbkVudHJ5cG9pbnQiLCJleGVjdXRlIiwiZm4iLCJjb21wb25lbnQiLCJlcnJvciIsImlucHV0Iiwib2xkIiwibG9hZFJvdXRlIiwicm91dGVGaWxlc1Byb21pc2UiLCJhbGwiLCJoYXMiLCJlbnRyeXBvaW50Iiwic3R5bGVzIiwiZmluYWxseSIsImFzc2lnbiIsImNuIiwibmF2aWdhdG9yIiwiY29ubmVjdGlvbiIsInNhdmVEYXRhIiwiZWZmZWN0aXZlVHlwZSIsIm91dHB1dCIsImVudW1lcmFibGUiLCJfd2l0aFJvdXRlciIsImNyZWF0ZVJvdXRlciIsIm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSIsIl9yb3V0ZXJDb250ZXh0Iiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInB1c2giLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJldmVudHMiLCJmaWVsZCIsImdldFJvdXRlciIsIm9uIiwiZXZlbnRGaWVsZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsInVzZUNvbnRleHQiLCJSb3V0ZXJDb250ZXh0IiwiaW5zdGFuY2UiLCJwcm9wZXJ0eSIsIkFycmF5IiwiaXNBcnJheSIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJkaXNhYmxlZCIsImlzRGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInVzZVN0YXRlIiwidW5kZWZpbmVkIiwidGFnTmFtZSIsIm9ic2VydmUiLCJpZGxlQ2FsbGJhY2siLCJlbGVtZW50IiwiY2FsbGJhY2siLCJvYnNlcnZlciIsImVsZW1lbnRzIiwiY3JlYXRlT2JzZXJ2ZXIiLCJkZWxldGUiLCJzaXplIiwiZGlzY29ubmVjdCIsIm9ic2VydmVycyIsImVudHJpZXMiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwid2l0aFJvdXRlciIsIkNvbXBvc2VkQ29tcG9uZW50IiwiV2l0aFJvdXRlcldyYXBwZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwibmFtZSIsImRpc3BsYXlOYW1lIiwiZGVsTG9jYWxlIiwiaGFzQmFzZVBhdGgiLCJkZWxCYXNlUGF0aCIsImludGVycG9sYXRlQXMiLCJfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCIsIl9yb3V0ZUxvYWRlciIsIl9kZW5vcm1hbGl6ZVBhZ2VQYXRoIiwiX25vcm1hbGl6ZUxvY2FsZVBhdGgiLCJfbWl0dCIsIl91dGlscyIsIl9pc0R5bmFtaWMiLCJfcGFyc2VSZWxhdGl2ZVVybCIsIl9xdWVyeXN0cmluZyIsIl9yZXNvbHZlUmV3cml0ZXMiLCJfcm91dGVNYXRjaGVyIiwiX3JvdXRlUmVnZXgiLCJkZXRlY3REb21haW5Mb2NhbGUiLCJfX05FWFRfSTE4Tl9TVVBQT1JUIiwiYmFzZVBhdGgiLCJfX05FWFRfUk9VVEVSX0JBU0VQQVRIIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImFkZFBhdGhQcmVmaXgiLCJwcmVmaXgiLCJzdGFydHNXaXRoIiwicGF0aE5vUXVlcnlIYXNoIiwibm9ybWFsaXplTG9jYWxlUGF0aCIsImRldGVjdGVkTG9jYWxlIiwiZGV0ZWN0ZWREb21haW4iLCJodHRwIiwiZG9tYWluIiwicGF0aG5hbWUiLCJwYXRoTG93ZXIiLCJ0b0xvd2VyQ2FzZSIsImxvY2FsZUxvd2VyIiwibGVuZ3RoIiwic3Vic3RyIiwicXVlcnlJbmRleCIsImhhc2hJbmRleCIsImxvY2F0aW9uT3JpZ2luIiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsIlVSTCIsIm9yaWdpbiIsImFzUGF0aG5hbWUiLCJxdWVyeSIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZ2V0Um91dGVSZWdleCIsImR5bmFtaWNHcm91cHMiLCJncm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImdldFJvdXRlTWF0Y2hlciIsInBhcmFtcyIsImV2ZXJ5IiwicGFyYW0iLCJyZXBlYXQiLCJvcHRpb25hbCIsInJlcGxhY2VkIiwic2VnbWVudCIsImVuY29kZVVSSUNvbXBvbmVudCIsImpvaW4iLCJyZXN1bHQiLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJmaWx0ZXJlZFF1ZXJ5IiwiaW5jbHVkZXMiLCJyZXNvbHZlQXMiLCJ1cmxBc1N0cmluZyIsImZvcm1hdFdpdGhWYWxpZGF0aW9uIiwidXJsUHJvdG9NYXRjaCIsIm1hdGNoIiwidXJsQXNTdHJpbmdOb1Byb3RvIiwidXJsUGFydHMiLCJzcGxpdCIsIm5vcm1hbGl6ZWRVcmwiLCJub3JtYWxpemVSZXBlYXRlZFNsYXNoZXMiLCJhc1BhdGgiLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwiaXNEeW5hbWljUm91dGUiLCJzZWFyY2hQYXJhbXMiLCJzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IiwiaGFzaCIsInN0cmlwT3JpZ2luIiwicHJlcGFyZVVybEFzIiwiaHJlZkhhZE9yaWdpbiIsImFzSGFkT3JpZ2luIiwicHJlcGFyZWRVcmwiLCJwcmVwYXJlZEFzIiwicmVzb2x2ZUR5bmFtaWNSb3V0ZSIsInBhZ2VzIiwiY2xlYW5QYXRobmFtZSIsImRlbm9ybWFsaXplUGFnZVBhdGgiLCJzb21lIiwicGFnZSIsInJlIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJfX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OIiwiaGlzdG9yeSIsInNlc3Npb25TdG9yYWdlIiwic2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJuIiwiU1NHX0RBVEFfTk9UX0ZPVU5EIiwiZmV0Y2hSZXRyeSIsImF0dGVtcHRzIiwiY3JlZGVudGlhbHMiLCJzdGF0dXMiLCJqc29uIiwiZGF0YSIsIm5vdEZvdW5kIiwiZmV0Y2hOZXh0RGF0YSIsImRhdGFIcmVmIiwiaXNTZXJ2ZXJSZW5kZXIiLCJSb3V0ZXIiLCJjb25zdHJ1Y3RvciIsInBhdGhuYW1lMSIsInF1ZXJ5MSIsImFzMSIsImluaXRpYWxQcm9wcyIsInBhZ2VMb2FkZXIiLCJBcHAiLCJ3cmFwQXBwIiwiQ29tcG9uZW50IiwiQ29tcG9uZW50MSIsImVycjEiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwiaXNQcmV2aWV3Iiwic2RjIiwic2RyIiwiX2lkeCIsIm9uUG9wU3RhdGUiLCJzdGF0ZSIsImNoYW5nZVN0YXRlIiwiZ2V0VVJMIiwiX19OIiwiZm9yY2VkU2Nyb2xsIiwiaWR4IiwiSlNPTiIsInN0cmluZ2lmeSIsIngiLCJwYWdlWE9mZnNldCIsInkiLCJwYWdlWU9mZnNldCIsImdldEl0ZW0iLCJwYXJzZSIsInBhcnNlUmVsYXRpdmVVcmwiLCJpc1NzciIsIl9icHMiLCJjaGFuZ2UiLCJfc2hhbGxvdyIsImNvbXBvbmVudHMiLCJpbml0aWFsIiwiX19OX1NTRyIsIl9fTl9TU1AiLCJhdXRvRXhwb3J0RHluYW1pYyIsIl9fTkVYVF9EQVRBX18iLCJhdXRvRXhwb3J0Iiwic3ViIiwiY2xjIiwiX3dyYXBBcHAiLCJpc1JlYWR5IiwiZ3NzcCIsImdpcCIsImFwcEdpcCIsImdzcCIsImxvY2F0aW9uIiwic2VhcmNoIiwiX19ORVhUX0hBU19SRVdSSVRFUyIsImhvc3RuYW1lIiwiX3Nob3VsZFJlc29sdmVIcmVmIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcm9sbFJlc3RvcmF0aW9uIiwicmVsb2FkIiwiYmFjayIsIm1ldGhvZCIsInNob3VsZFJlc29sdmVIcmVmIiwiX2giLCJwcmV2TG9jYWxlIiwicGFyc2VkQXMiLCJsb2NhbGVQYXRoUmVzdWx0IiwiZGlkTmF2aWdhdGUiLCJhc05vQmFzZVBhdGgiLCJTVCIsInBlcmZvcm1hbmNlIiwibWFyayIsInJvdXRlUHJvcHMiLCJfaW5GbGlnaHRSb3V0ZSIsImFib3J0Q29tcG9uZW50TG9hZCIsImNsZWFuZWRBcyIsImxvY2FsZUNoYW5nZSIsIm9ubHlBSGFzaENoYW5nZSIsImVtaXQiLCJzY3JvbGxUb0hhc2giLCJub3RpZnkiLCJwYXJzZWQiLCJyZXdyaXRlcyIsImdldFBhZ2VMaXN0IiwiX19yZXdyaXRlcyIsInVybElzTmV3IiwicmV3cml0ZXNSZXN1bHQiLCJtYXRjaGVkUGFnZSIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicmVmMSIsInJvdXRlSW5mbyIsImdldFJvdXRlSW5mbyIsInBhZ2VQcm9wcyIsIl9fTl9SRURJUkVDVCIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsIm5ld1VybCIsIm5ld0FzIiwiX19OX1BSRVZJRVciLCJub3RGb3VuZFJvdXRlIiwiZmV0Y2hDb21wb25lbnQiLCJhcHBDb21wIiwibmV4dCIsImlzUHJlcmVuZGVyZWQiLCJzdGF0dXNDb2RlIiwiaXNWYWxpZFNoYWxsb3dSb3V0ZSIsIl9zY3JvbGwiLCJzaG91bGRTY3JvbGwiLCJyZXNldFNjcm9sbCIsImRvY3VtZW50RWxlbWVudCIsImxhbmciLCJoYW5kbGVSb3V0ZUluZm9FcnJvciIsImxvYWRFcnJvckZhaWwiLCJnaXBFcnIiLCJyb3V0ZUluZm9FcnIiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsIm1vZCIsImlzVmFsaWRFbGVtZW50VHlwZSIsImdldERhdGFIcmVmIiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiZXJyMiIsImJlZm9yZVBvcFN0YXRlIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsIm5ld1VybE5vSGFzaCIsIm5ld0hhc2giLCJzY3JvbGxUbyIsImlkRWwiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJwYXRobmFtZTIiLCJfaXNTc2ciLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsImxvYWRQYWdlIiwiY2FjaGVLZXkiLCJyZXNvdXJjZUtleSIsImN0eCIsIkFwcDEiLCJBcHBUcmVlIiwibG9hZEdldEluaXRpYWxQcm9wcyIsIkltYWdlIiwiSW5kZXgiXSwic291cmNlUm9vdCI6IiJ9