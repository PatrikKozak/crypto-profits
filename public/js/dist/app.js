(function(modules) {
    function webpackJsonpCallback(data) {
        var chunkIds = data[0];
        var moreModules = data[1];
        var executeModules = data[2];
        var moduleId, chunkId, i = 0, resolves = [];
        for (;i < chunkIds.length; i++) {
            chunkId = chunkIds[i];
            if (installedChunks[chunkId]) resolves.push(installedChunks[chunkId][0]);
            installedChunks[chunkId] = 0;
        }
        for (moduleId in moreModules) if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) modules[moduleId] = moreModules[moduleId];
        if (parentJsonpFunction) parentJsonpFunction(data);
        while (resolves.length) resolves.shift()();
        deferredModules.push.apply(deferredModules, executeModules || []);
        return checkDeferredModules();
    }
    function checkDeferredModules() {
        var result;
        for (var i = 0; i < deferredModules.length; i++) {
            var deferredModule = deferredModules[i];
            var fulfilled = true;
            for (var j = 1; j < deferredModule.length; j++) {
                var depId = deferredModule[j];
                if (0 !== installedChunks[depId]) fulfilled = false;
            }
            if (fulfilled) {
                deferredModules.splice(i--, 1);
                result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
            }
        }
        return result;
    }
    var installedModules = {};
    var installedChunks = {
        app: 0
    };
    var deferredModules = [];
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function(exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
        });
    };
    __webpack_require__.r = function(exports) {
        if ("undefined" !== typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        });
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
    };
    __webpack_require__.t = function(value, mode) {
        if (1 & mode) value = __webpack_require__(value);
        if (8 & mode) return value;
        if (4 & mode && "object" === typeof value && value && value.__esModule) return value;
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", {
            enumerable: true,
            value: value
        });
        if (2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
            return value[key];
        }.bind(null, key));
        return ns;
    };
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module["default"];
        } : function() {
            return module;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
    };
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    __webpack_require__.p = "";
    var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
    var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
    jsonpArray.push = webpackJsonpCallback;
    jsonpArray = jsonpArray.slice();
    for (var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
    var parentJsonpFunction = oldJsonpFunction;
    deferredModules.push([ "./assets/js/components/app.js", "vendors~app" ]);
    return checkDeferredModules();
})({
    "./assets/js/components/Home.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Home; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-datepicker */ "./node_modules/react-datepicker/es/index.js");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nclass Home extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {\n  constructor() {\n    super();\n    this.state = {\n      name: \'Patrik\'\n    };\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n      id: "home"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "container"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "col-md-6"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {\n      src: "/img/bitcoin-logo-two.png",\n      className: "bitcoin-logo"\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "col-md-6"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Enter Transaction:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Crypto Amount"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {\n      type: "text",\n      name: "amount",\n      onChange: this.props.onInputChange,\n      value: this.props.globalState.cryptoAmount\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Date"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_datepicker__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {\n      selected: this.props.globalState.date,\n      onChange: this.props.handleDateChange\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {\n      type: "submit",\n      onClick: this.props.checkProfits\n    }, "See Profits!"))));\n  }\n\n}\nconst app = document.getElementById(\'app\');\n\n//# sourceURL=webpack:///./assets/js/components/Home.js?');
    },
    "./assets/js/components/Results.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Results; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n\n\nclass Results extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {\n  constructor() {\n    super();\n    this.state = {\n      name: \'Patrik\'\n    };\n    this.checkGains = this.checkGains.bind(this);\n  }\n\n  checkGains() {\n    const {\n      percent\n    } = this.props.globalState.totalStatus;\n\n    if (this.props.globalState.status == \'gain\') {\n      return "You made ".concat(percent, "% profit");\n    } else {\n      return "You lost ".concat(percent, "% of your initial investment");\n    }\n  }\n\n  render() {\n    const {\n      percent,\n      newCP,\n      newSP,\n      newProf\n    } = this.props.globalState.totalStatus;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n      id: "results"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "container"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "col-md-12"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Your $", newCP, " investment is now:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "$", newSP), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, this.checkGains()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Your profit amount: $", newProf), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {\n      href: "#",\n      className: "main-btn active",\n      onClick: this.props.goBack\n    }, "Check Another Transaction"))));\n  }\n\n}\nconst app = document.getElementById(\'app\');\n\n//# sourceURL=webpack:///./assets/js/components/Results.js?');
    },
    "./assets/js/components/app.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-datepicker */ "./node_modules/react-datepicker/es/index.js");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Home_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Home.js */ "./assets/js/components/Home.js");\n/* harmony import */ var _Results_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Results.js */ "./assets/js/components/Results.js");\n\n\n\n\n\n\n\n\nclass Layout extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {\n  constructor() {\n    super();\n    this.state = {\n      name: \'Patrik\',\n      location: \'home\',\n      date: moment__WEBPACK_IMPORTED_MODULE_3___default()(),\n      data: \'\',\n      cryptoAmount: 1,\n      status: \'\',\n      totalStatus: \'\'\n    };\n    this.routingSystem = this.routingSystem.bind(this);\n    this.handleDateChange = this.handleDateChange.bind(this);\n    this.checkProfits = this.checkProfits.bind(this);\n    this.onInputChange = this.onInputChange.bind(this);\n    this.goBack = this.goBack.bind(this);\n  }\n\n  componentWillMount() {\n    var self = this;\n    axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=USD,EUR&e=Coinbase&ts=".concat(moment__WEBPACK_IMPORTED_MODULE_3___default()().unix(), "&extraParams=crypto_currency_profits")).then(function (response) {\n      self.setState({\n        btcToday: response.data.BTC\n      }, () => {\n        console.log(self.state);\n      });\n    }).catch(function (error) {\n      console.log(error);\n    });\n  }\n\n  routingSystem() {\n    switch (this.state.location) {\n      case \'home\':\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Home_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {\n          handleDateChange: this.handleDateChange,\n          globalState: this.state,\n          onInputChange: this.onInputChange,\n          checkProfits: this.checkProfits\n        });\n        break;\n\n      case \'results\':\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Results_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {\n          globalState: this.state,\n          goBack: this.goBack\n        });\n        break;\n\n      default:\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Home_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], null);\n    }\n  }\n\n  handleDateChange(date) {\n    this.setState({\n      date: date\n    }, () => console.log(this.state.date.unix()));\n  }\n\n  onInputChange(event) {\n    this.setState({\n      cryptoAmount: event.target.value\n    });\n  }\n\n  checkProfits() {\n    //https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=USD,EUR&e=Coinbase&ts=1612289232&extraParams=crypto_currency_profits\n    var self = this;\n    axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=USD,EUR&e=Coinbase&ts=".concat(self.state.date.unix(), "&extraParams=crypto_currency_profits")).then(function (response) {\n      self.setState({\n        data: response.data.BTC\n      }, () => {\n        console.log(self.state);\n        const CP = self.state.data.USD;\n        var newCP = self.state.cryptoAmount * 100;\n        newCP = newCP * CP / 100;\n        const SP = self.state.btcToday.USD;\n        var newSP = self.state.cryptoAmount * 100;\n        newSP = newSP * SP / 100;\n        var newProf = newSP - newCP;\n\n        if (newCP < newSP) {\n          var gain = newSP - newCP;\n          var gainPercent = gain / newCP * 100;\n          gainPercent = gainPercent.toFixed(2);\n          console.log("".concat(self.state.cryptoAmount, " bitcoin newSP: ").concat(newSP, ", SP: ").concat(SP, ", newCP: ").concat(newCP, ", CP: ").concat(CP));\n          console.log("profit percent is ".concat(gainPercent)); // Set state with totals and change location\n\n          self.setState({\n            location: \'results\',\n            status: \'gain\',\n            totalStatus: {\n              newCP: newCP.toFixed(2),\n              CP: CP,\n              newSP: newSP.toFixed(2),\n              SP: SP,\n              percent: gainPercent,\n              newProf: newProf.toFixed(2)\n            }\n          }, () => console.log(self.state));\n        } else {\n          var loss = newCP - newSP;\n          var lossPercent = loss / newCP * 100;\n          lossPercent = lossPercent.toFixed(2);\n          console.log("loss percent is ".concat(lossPercent)); // Set state with totals and change location\n\n          self.setState({\n            location: \'results\',\n            status: \'loss\',\n            totalStatus: {\n              newCP: newCP.toFixed(2),\n              CP: CP,\n              newSP: newSP.toFixed(2),\n              SP: SP,\n              percent: lossPercent,\n              newProf: newProf.toFixed(2)\n            }\n          }, () => console.log(self.state));\n        }\n      });\n    }).catch(function (error) {\n      console.log(error);\n    });\n  }\n\n  goBack() {\n    this.setState({\n      location: \'home\',\n      date: moment__WEBPACK_IMPORTED_MODULE_3___default()(),\n      data: \'\',\n      cryptoAmount: 1,\n      status: \'\',\n      totalStatus: \'\'\n    });\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "home"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "container"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "logo",\n      onClick: this.checkProfits\n    }, "Crypto Currency Profits"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {\n      className: "menu"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {\n      href: "#",\n      className: "main-btn"\n    }, "Sign Up"))), this.routingSystem()));\n  }\n\n}\n\nconst app = document.getElementById(\'app\');\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Layout, null), app);\n\n//# sourceURL=webpack:///./assets/js/components/app.js?');
    },
    "./node_modules/moment/locale sync recursive ^\\.\\/.*$": function(module, exports, __webpack_require__) {
        eval('var map = {\n\t"./af": "./node_modules/moment/locale/af.js",\n\t"./af.js": "./node_modules/moment/locale/af.js",\n\t"./ar": "./node_modules/moment/locale/ar.js",\n\t"./ar-dz": "./node_modules/moment/locale/ar-dz.js",\n\t"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",\n\t"./ar-kw": "./node_modules/moment/locale/ar-kw.js",\n\t"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",\n\t"./ar-ly": "./node_modules/moment/locale/ar-ly.js",\n\t"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",\n\t"./ar-ma": "./node_modules/moment/locale/ar-ma.js",\n\t"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",\n\t"./ar-sa": "./node_modules/moment/locale/ar-sa.js",\n\t"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",\n\t"./ar-tn": "./node_modules/moment/locale/ar-tn.js",\n\t"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",\n\t"./ar.js": "./node_modules/moment/locale/ar.js",\n\t"./az": "./node_modules/moment/locale/az.js",\n\t"./az.js": "./node_modules/moment/locale/az.js",\n\t"./be": "./node_modules/moment/locale/be.js",\n\t"./be.js": "./node_modules/moment/locale/be.js",\n\t"./bg": "./node_modules/moment/locale/bg.js",\n\t"./bg.js": "./node_modules/moment/locale/bg.js",\n\t"./bm": "./node_modules/moment/locale/bm.js",\n\t"./bm.js": "./node_modules/moment/locale/bm.js",\n\t"./bn": "./node_modules/moment/locale/bn.js",\n\t"./bn.js": "./node_modules/moment/locale/bn.js",\n\t"./bo": "./node_modules/moment/locale/bo.js",\n\t"./bo.js": "./node_modules/moment/locale/bo.js",\n\t"./br": "./node_modules/moment/locale/br.js",\n\t"./br.js": "./node_modules/moment/locale/br.js",\n\t"./bs": "./node_modules/moment/locale/bs.js",\n\t"./bs.js": "./node_modules/moment/locale/bs.js",\n\t"./ca": "./node_modules/moment/locale/ca.js",\n\t"./ca.js": "./node_modules/moment/locale/ca.js",\n\t"./cs": "./node_modules/moment/locale/cs.js",\n\t"./cs.js": "./node_modules/moment/locale/cs.js",\n\t"./cv": "./node_modules/moment/locale/cv.js",\n\t"./cv.js": "./node_modules/moment/locale/cv.js",\n\t"./cy": "./node_modules/moment/locale/cy.js",\n\t"./cy.js": "./node_modules/moment/locale/cy.js",\n\t"./da": "./node_modules/moment/locale/da.js",\n\t"./da.js": "./node_modules/moment/locale/da.js",\n\t"./de": "./node_modules/moment/locale/de.js",\n\t"./de-at": "./node_modules/moment/locale/de-at.js",\n\t"./de-at.js": "./node_modules/moment/locale/de-at.js",\n\t"./de-ch": "./node_modules/moment/locale/de-ch.js",\n\t"./de-ch.js": "./node_modules/moment/locale/de-ch.js",\n\t"./de.js": "./node_modules/moment/locale/de.js",\n\t"./dv": "./node_modules/moment/locale/dv.js",\n\t"./dv.js": "./node_modules/moment/locale/dv.js",\n\t"./el": "./node_modules/moment/locale/el.js",\n\t"./el.js": "./node_modules/moment/locale/el.js",\n\t"./en-SG": "./node_modules/moment/locale/en-SG.js",\n\t"./en-SG.js": "./node_modules/moment/locale/en-SG.js",\n\t"./en-au": "./node_modules/moment/locale/en-au.js",\n\t"./en-au.js": "./node_modules/moment/locale/en-au.js",\n\t"./en-ca": "./node_modules/moment/locale/en-ca.js",\n\t"./en-ca.js": "./node_modules/moment/locale/en-ca.js",\n\t"./en-gb": "./node_modules/moment/locale/en-gb.js",\n\t"./en-gb.js": "./node_modules/moment/locale/en-gb.js",\n\t"./en-ie": "./node_modules/moment/locale/en-ie.js",\n\t"./en-ie.js": "./node_modules/moment/locale/en-ie.js",\n\t"./en-il": "./node_modules/moment/locale/en-il.js",\n\t"./en-il.js": "./node_modules/moment/locale/en-il.js",\n\t"./en-nz": "./node_modules/moment/locale/en-nz.js",\n\t"./en-nz.js": "./node_modules/moment/locale/en-nz.js",\n\t"./eo": "./node_modules/moment/locale/eo.js",\n\t"./eo.js": "./node_modules/moment/locale/eo.js",\n\t"./es": "./node_modules/moment/locale/es.js",\n\t"./es-do": "./node_modules/moment/locale/es-do.js",\n\t"./es-do.js": "./node_modules/moment/locale/es-do.js",\n\t"./es-us": "./node_modules/moment/locale/es-us.js",\n\t"./es-us.js": "./node_modules/moment/locale/es-us.js",\n\t"./es.js": "./node_modules/moment/locale/es.js",\n\t"./et": "./node_modules/moment/locale/et.js",\n\t"./et.js": "./node_modules/moment/locale/et.js",\n\t"./eu": "./node_modules/moment/locale/eu.js",\n\t"./eu.js": "./node_modules/moment/locale/eu.js",\n\t"./fa": "./node_modules/moment/locale/fa.js",\n\t"./fa.js": "./node_modules/moment/locale/fa.js",\n\t"./fi": "./node_modules/moment/locale/fi.js",\n\t"./fi.js": "./node_modules/moment/locale/fi.js",\n\t"./fo": "./node_modules/moment/locale/fo.js",\n\t"./fo.js": "./node_modules/moment/locale/fo.js",\n\t"./fr": "./node_modules/moment/locale/fr.js",\n\t"./fr-ca": "./node_modules/moment/locale/fr-ca.js",\n\t"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",\n\t"./fr-ch": "./node_modules/moment/locale/fr-ch.js",\n\t"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",\n\t"./fr.js": "./node_modules/moment/locale/fr.js",\n\t"./fy": "./node_modules/moment/locale/fy.js",\n\t"./fy.js": "./node_modules/moment/locale/fy.js",\n\t"./ga": "./node_modules/moment/locale/ga.js",\n\t"./ga.js": "./node_modules/moment/locale/ga.js",\n\t"./gd": "./node_modules/moment/locale/gd.js",\n\t"./gd.js": "./node_modules/moment/locale/gd.js",\n\t"./gl": "./node_modules/moment/locale/gl.js",\n\t"./gl.js": "./node_modules/moment/locale/gl.js",\n\t"./gom-latn": "./node_modules/moment/locale/gom-latn.js",\n\t"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",\n\t"./gu": "./node_modules/moment/locale/gu.js",\n\t"./gu.js": "./node_modules/moment/locale/gu.js",\n\t"./he": "./node_modules/moment/locale/he.js",\n\t"./he.js": "./node_modules/moment/locale/he.js",\n\t"./hi": "./node_modules/moment/locale/hi.js",\n\t"./hi.js": "./node_modules/moment/locale/hi.js",\n\t"./hr": "./node_modules/moment/locale/hr.js",\n\t"./hr.js": "./node_modules/moment/locale/hr.js",\n\t"./hu": "./node_modules/moment/locale/hu.js",\n\t"./hu.js": "./node_modules/moment/locale/hu.js",\n\t"./hy-am": "./node_modules/moment/locale/hy-am.js",\n\t"./hy-am.js": "./node_modules/moment/locale/hy-am.js",\n\t"./id": "./node_modules/moment/locale/id.js",\n\t"./id.js": "./node_modules/moment/locale/id.js",\n\t"./is": "./node_modules/moment/locale/is.js",\n\t"./is.js": "./node_modules/moment/locale/is.js",\n\t"./it": "./node_modules/moment/locale/it.js",\n\t"./it-ch": "./node_modules/moment/locale/it-ch.js",\n\t"./it-ch.js": "./node_modules/moment/locale/it-ch.js",\n\t"./it.js": "./node_modules/moment/locale/it.js",\n\t"./ja": "./node_modules/moment/locale/ja.js",\n\t"./ja.js": "./node_modules/moment/locale/ja.js",\n\t"./jv": "./node_modules/moment/locale/jv.js",\n\t"./jv.js": "./node_modules/moment/locale/jv.js",\n\t"./ka": "./node_modules/moment/locale/ka.js",\n\t"./ka.js": "./node_modules/moment/locale/ka.js",\n\t"./kk": "./node_modules/moment/locale/kk.js",\n\t"./kk.js": "./node_modules/moment/locale/kk.js",\n\t"./km": "./node_modules/moment/locale/km.js",\n\t"./km.js": "./node_modules/moment/locale/km.js",\n\t"./kn": "./node_modules/moment/locale/kn.js",\n\t"./kn.js": "./node_modules/moment/locale/kn.js",\n\t"./ko": "./node_modules/moment/locale/ko.js",\n\t"./ko.js": "./node_modules/moment/locale/ko.js",\n\t"./ku": "./node_modules/moment/locale/ku.js",\n\t"./ku.js": "./node_modules/moment/locale/ku.js",\n\t"./ky": "./node_modules/moment/locale/ky.js",\n\t"./ky.js": "./node_modules/moment/locale/ky.js",\n\t"./lb": "./node_modules/moment/locale/lb.js",\n\t"./lb.js": "./node_modules/moment/locale/lb.js",\n\t"./lo": "./node_modules/moment/locale/lo.js",\n\t"./lo.js": "./node_modules/moment/locale/lo.js",\n\t"./lt": "./node_modules/moment/locale/lt.js",\n\t"./lt.js": "./node_modules/moment/locale/lt.js",\n\t"./lv": "./node_modules/moment/locale/lv.js",\n\t"./lv.js": "./node_modules/moment/locale/lv.js",\n\t"./me": "./node_modules/moment/locale/me.js",\n\t"./me.js": "./node_modules/moment/locale/me.js",\n\t"./mi": "./node_modules/moment/locale/mi.js",\n\t"./mi.js": "./node_modules/moment/locale/mi.js",\n\t"./mk": "./node_modules/moment/locale/mk.js",\n\t"./mk.js": "./node_modules/moment/locale/mk.js",\n\t"./ml": "./node_modules/moment/locale/ml.js",\n\t"./ml.js": "./node_modules/moment/locale/ml.js",\n\t"./mn": "./node_modules/moment/locale/mn.js",\n\t"./mn.js": "./node_modules/moment/locale/mn.js",\n\t"./mr": "./node_modules/moment/locale/mr.js",\n\t"./mr.js": "./node_modules/moment/locale/mr.js",\n\t"./ms": "./node_modules/moment/locale/ms.js",\n\t"./ms-my": "./node_modules/moment/locale/ms-my.js",\n\t"./ms-my.js": "./node_modules/moment/locale/ms-my.js",\n\t"./ms.js": "./node_modules/moment/locale/ms.js",\n\t"./mt": "./node_modules/moment/locale/mt.js",\n\t"./mt.js": "./node_modules/moment/locale/mt.js",\n\t"./my": "./node_modules/moment/locale/my.js",\n\t"./my.js": "./node_modules/moment/locale/my.js",\n\t"./nb": "./node_modules/moment/locale/nb.js",\n\t"./nb.js": "./node_modules/moment/locale/nb.js",\n\t"./ne": "./node_modules/moment/locale/ne.js",\n\t"./ne.js": "./node_modules/moment/locale/ne.js",\n\t"./nl": "./node_modules/moment/locale/nl.js",\n\t"./nl-be": "./node_modules/moment/locale/nl-be.js",\n\t"./nl-be.js": "./node_modules/moment/locale/nl-be.js",\n\t"./nl.js": "./node_modules/moment/locale/nl.js",\n\t"./nn": "./node_modules/moment/locale/nn.js",\n\t"./nn.js": "./node_modules/moment/locale/nn.js",\n\t"./pa-in": "./node_modules/moment/locale/pa-in.js",\n\t"./pa-in.js": "./node_modules/moment/locale/pa-in.js",\n\t"./pl": "./node_modules/moment/locale/pl.js",\n\t"./pl.js": "./node_modules/moment/locale/pl.js",\n\t"./pt": "./node_modules/moment/locale/pt.js",\n\t"./pt-br": "./node_modules/moment/locale/pt-br.js",\n\t"./pt-br.js": "./node_modules/moment/locale/pt-br.js",\n\t"./pt.js": "./node_modules/moment/locale/pt.js",\n\t"./ro": "./node_modules/moment/locale/ro.js",\n\t"./ro.js": "./node_modules/moment/locale/ro.js",\n\t"./ru": "./node_modules/moment/locale/ru.js",\n\t"./ru.js": "./node_modules/moment/locale/ru.js",\n\t"./sd": "./node_modules/moment/locale/sd.js",\n\t"./sd.js": "./node_modules/moment/locale/sd.js",\n\t"./se": "./node_modules/moment/locale/se.js",\n\t"./se.js": "./node_modules/moment/locale/se.js",\n\t"./si": "./node_modules/moment/locale/si.js",\n\t"./si.js": "./node_modules/moment/locale/si.js",\n\t"./sk": "./node_modules/moment/locale/sk.js",\n\t"./sk.js": "./node_modules/moment/locale/sk.js",\n\t"./sl": "./node_modules/moment/locale/sl.js",\n\t"./sl.js": "./node_modules/moment/locale/sl.js",\n\t"./sq": "./node_modules/moment/locale/sq.js",\n\t"./sq.js": "./node_modules/moment/locale/sq.js",\n\t"./sr": "./node_modules/moment/locale/sr.js",\n\t"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",\n\t"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",\n\t"./sr.js": "./node_modules/moment/locale/sr.js",\n\t"./ss": "./node_modules/moment/locale/ss.js",\n\t"./ss.js": "./node_modules/moment/locale/ss.js",\n\t"./sv": "./node_modules/moment/locale/sv.js",\n\t"./sv.js": "./node_modules/moment/locale/sv.js",\n\t"./sw": "./node_modules/moment/locale/sw.js",\n\t"./sw.js": "./node_modules/moment/locale/sw.js",\n\t"./ta": "./node_modules/moment/locale/ta.js",\n\t"./ta.js": "./node_modules/moment/locale/ta.js",\n\t"./te": "./node_modules/moment/locale/te.js",\n\t"./te.js": "./node_modules/moment/locale/te.js",\n\t"./tet": "./node_modules/moment/locale/tet.js",\n\t"./tet.js": "./node_modules/moment/locale/tet.js",\n\t"./tg": "./node_modules/moment/locale/tg.js",\n\t"./tg.js": "./node_modules/moment/locale/tg.js",\n\t"./th": "./node_modules/moment/locale/th.js",\n\t"./th.js": "./node_modules/moment/locale/th.js",\n\t"./tl-ph": "./node_modules/moment/locale/tl-ph.js",\n\t"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",\n\t"./tlh": "./node_modules/moment/locale/tlh.js",\n\t"./tlh.js": "./node_modules/moment/locale/tlh.js",\n\t"./tr": "./node_modules/moment/locale/tr.js",\n\t"./tr.js": "./node_modules/moment/locale/tr.js",\n\t"./tzl": "./node_modules/moment/locale/tzl.js",\n\t"./tzl.js": "./node_modules/moment/locale/tzl.js",\n\t"./tzm": "./node_modules/moment/locale/tzm.js",\n\t"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",\n\t"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",\n\t"./tzm.js": "./node_modules/moment/locale/tzm.js",\n\t"./ug-cn": "./node_modules/moment/locale/ug-cn.js",\n\t"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",\n\t"./uk": "./node_modules/moment/locale/uk.js",\n\t"./uk.js": "./node_modules/moment/locale/uk.js",\n\t"./ur": "./node_modules/moment/locale/ur.js",\n\t"./ur.js": "./node_modules/moment/locale/ur.js",\n\t"./uz": "./node_modules/moment/locale/uz.js",\n\t"./uz-latn": "./node_modules/moment/locale/uz-latn.js",\n\t"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",\n\t"./uz.js": "./node_modules/moment/locale/uz.js",\n\t"./vi": "./node_modules/moment/locale/vi.js",\n\t"./vi.js": "./node_modules/moment/locale/vi.js",\n\t"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",\n\t"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",\n\t"./yo": "./node_modules/moment/locale/yo.js",\n\t"./yo.js": "./node_modules/moment/locale/yo.js",\n\t"./zh-cn": "./node_modules/moment/locale/zh-cn.js",\n\t"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",\n\t"./zh-hk": "./node_modules/moment/locale/zh-hk.js",\n\t"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",\n\t"./zh-tw": "./node_modules/moment/locale/zh-tw.js",\n\t"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error("Cannot find module \'" + req + "\'");\n\t\te.code = \'MODULE_NOT_FOUND\';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = "./node_modules/moment/locale sync recursive ^\\\\.\\\\/.*$";\n\n//# sourceURL=webpack:///./node_modules/moment/locale_sync_^\\.\\/.*$?');
    }
});