webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__balms_balms_component__ = __webpack_require__("../../../../../src/app/balms/balms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__coconutAndClay_coconutAndClay_component__ = __webpack_require__("../../../../../src/app/coconutAndClay/coconutAndClay.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bathAndBody_bathAndBody_component__ = __webpack_require__("../../../../../src/app/bathAndBody/bathAndBody.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__faq_faq_component__ = __webpack_require__("../../../../../src/app/faq/faq.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__traditional_soap_traditional_soap_component__ = __webpack_require__("../../../../../src/app/traditional-soap/traditional-soap.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */] },
    { path: 'faq', component: __WEBPACK_IMPORTED_MODULE_6__faq_faq_component__["a" /* FAQComponent */] },
    { path: 'traditional', component: __WEBPACK_IMPORTED_MODULE_7__traditional_soap_traditional_soap_component__["a" /* TraditionalSoapComponent */] },
    { path: 'bathandbody', component: __WEBPACK_IMPORTED_MODULE_2__bathAndBody_bathAndBody_component__["a" /* BathAndBodyComponent */] },
    { path: 'coconutandclay', component: __WEBPACK_IMPORTED_MODULE_1__coconutAndClay_coconutAndClay_component__["a" /* CoconutAndClayComponent */] },
    { path: 'balms', component: __WEBPACK_IMPORTED_MODULE_0__balms_balms_component__["a" /* BalmsComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html")
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bathAndBody_bathAndBody_component__ = __webpack_require__("../../../../../src/app/bathAndBody/bathAndBody.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__faq_faq_component__ = __webpack_require__("../../../../../src/app/faq/faq.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__traditional_soap_traditional_soap_component__ = __webpack_require__("../../../../../src/app/traditional-soap/traditional-soap.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__card_card_component__ = __webpack_require__("../../../../../src/app/card/card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__products_products_component__ = __webpack_require__("../../../../../src/app/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__coconutAndClay_coconutAndClay_component__ = __webpack_require__("../../../../../src/app/coconutAndClay/coconutAndClay.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__balms_balms_component__ = __webpack_require__("../../../../../src/app/balms/balms.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var firebaseConfig = {
    apiKey: 'AIzaSyAZ9y2T1lYy3_j1JSYikPswA3WfBmEbhYo',
    authDomain: 'dvsoap.firebaseapp.com',
    databaseURL: 'https://dvsoap.firebaseio.com',
    projectId: 'dvsoap',
    storageBucket: 'dvsoap.appspot.com',
    messagingSenderId: '699302150733'
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["a" /* AngularFireAuthModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_11__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_12__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_13__faq_faq_component__["a" /* FAQComponent */],
            __WEBPACK_IMPORTED_MODULE_14__traditional_soap_traditional_soap_component__["a" /* TraditionalSoapComponent */],
            __WEBPACK_IMPORTED_MODULE_15__card_card_component__["a" /* CardComponent */],
            __WEBPACK_IMPORTED_MODULE_0__bathAndBody_bathAndBody_component__["a" /* BathAndBodyComponent */],
            __WEBPACK_IMPORTED_MODULE_16__products_products_component__["a" /* ProductsComponent */],
            __WEBPACK_IMPORTED_MODULE_17__coconutAndClay_coconutAndClay_component__["a" /* CoconutAndClayComponent */],
            __WEBPACK_IMPORTED_MODULE_18__balms_balms_component__["a" /* BalmsComponent */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/balms/balms.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/balms/balms.component.html":
/***/ (function(module, exports) {

module.exports = "<app-products [db]=\"'balms'\" [heading]=\"'Balms'\" [content]=\"''\"></app-products>"

/***/ }),

/***/ "../../../../../src/app/balms/balms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BalmsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BalmsComponent = (function () {
    function BalmsComponent() {
    }
    BalmsComponent.prototype.ngOnInit = function () {
    };
    return BalmsComponent;
}());
BalmsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-balms',
        template: __webpack_require__("../../../../../src/app/balms/balms.component.html"),
        styles: [__webpack_require__("../../../../../src/app/balms/balms.component.css")]
    }),
    __metadata("design:paramtypes", [])
], BalmsComponent);

//# sourceMappingURL=balms.component.js.map

/***/ }),

/***/ "../../../../../src/app/bathAndBody/bathAndBody.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/bathAndBody/bathAndBody.component.html":
/***/ (function(module, exports) {

module.exports = "<app-products [db]=\"'bathAndBody'\" [heading]=\"'Bath and Body'\" [content]=\"''\"></app-products>"

/***/ }),

/***/ "../../../../../src/app/bathAndBody/bathAndBody.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BathAndBodyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BathAndBodyComponent = (function () {
    function BathAndBodyComponent() {
    }
    BathAndBodyComponent.prototype.ngOnInit = function () {
    };
    return BathAndBodyComponent;
}());
BathAndBodyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-bathAndBody',
        template: __webpack_require__("../../../../../src/app/bathAndBody/bathAndBody.component.html"),
        styles: [__webpack_require__("../../../../../src/app/bathAndBody/bathAndBody.component.css")]
    }),
    __metadata("design:paramtypes", [])
], BathAndBodyComponent);

//# sourceMappingURL=bathAndBody.component.js.map

/***/ }),

/***/ "../../../../../src/app/card/card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card{\r\n    background-color: #444444;\r\n    color: white;\r\n    margin: 20px 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/card/card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <img class=\"card-img-top img-fluid\" [src]=\"src\" alt=\"{{alt}}\"/>\n  <div class=\"card-body\">\n    <h4 class=\"card-title\">{{title}}</h4>\n    <p class=\"card-text\">{{text}}</p>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/card/card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardComponent = (function () {
    function CardComponent(sanitizer) {
        this.sanitizer = sanitizer;
    }
    CardComponent.prototype.ngOnInit = function () {
        this.src = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    };
    return CardComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], CardComponent.prototype, "url", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], CardComponent.prototype, "alt", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], CardComponent.prototype, "title", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], CardComponent.prototype, "text", void 0);
CardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-card',
        template: __webpack_require__("../../../../../src/app/card/card.component.html"),
        styles: [__webpack_require__("../../../../../src/app/card/card.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _a || Object])
], CardComponent);

var _a;
//# sourceMappingURL=card.component.js.map

/***/ }),

/***/ "../../../../../src/app/coconutAndClay/coconutAndClay.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fragrances{\r\n    font-family: 'EB Garamond', serif;\r\n    font-size: 20px;\r\n    margin-bottom: 50px;\r\n}\r\n\r\n.fragrances > ul{\r\n    list-style-type: circle;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/coconutAndClay/coconutAndClay.component.html":
/***/ (function(module, exports) {

module.exports = "<app-products [db]=\"'coconutAndClay'\" [heading]=\"'Coconut and Clay Soap'\" [content]=\"'These soaps are available in a variety of pretty shapes and lovely fragrances.'\"></app-products>\n<div class=\"row justify-content-center m-0\">\n  <div class=\"fragrances\">\n    <h3>Fragrances:</h3>\n    <ul>\n      <li>Charcoal & Mint</li>\n      <li>Rooibos</li>\n      <li>Orange & Ginger</li>\n      <li>Sandalwood</li>\n      <li>Milk & Honey</li>\n      <li>Creamy White (fragrance free)</li>\n      <li>Myrrh (fragrance free)</li>\n      <li>Coco butter (fragrance free)</li>\n    </ul>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/coconutAndClay/coconutAndClay.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoconutAndClayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CoconutAndClayComponent = (function () {
    function CoconutAndClayComponent() {
    }
    CoconutAndClayComponent.prototype.ngOnInit = function () {
    };
    return CoconutAndClayComponent;
}());
CoconutAndClayComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-coconutAndClay',
        template: __webpack_require__("../../../../../src/app/coconutAndClay/coconutAndClay.component.html"),
        styles: [__webpack_require__("../../../../../src/app/coconutAndClay/coconutAndClay.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CoconutAndClayComponent);

//# sourceMappingURL=coconutAndClay.component.js.map

/***/ }),

/***/ "../../../../../src/app/faq/faq.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".faqs{\r\n    color: #383838;\r\n    padding: 50px;\r\n    background-color: white;\r\n    font-family: 'EB Garamond', serif;\r\n    font-size: 20px;\r\n}\r\n\r\nh3{\r\n    margin-bottom: 20px;\r\n}\r\n\r\nh5{\r\n    margin: 10px 0px;\r\n}\r\n\r\n.container{\r\n    border-top: 1px solid #E16BFB;\r\n    border-bottom: 1px solid #E16BFB;\r\n    margin: 40px 0px;\r\n    background-color: #EEEEEE;\r\n}\r\n\r\n.collapser{\r\n    color: #383838;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/faq/faq.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"faqs row justify-content-center m-0\">\n  <div class=\"col-md-8\">\n    <h3>Frequently Asked Questions:</h3>\n    <div class=\"container\">\n      <a class=\"collapser\" data-toggle=\"collapse\" href=\"#collapseOne\" aria-expanded=\"false\" aria-controls=\"collapse\">\n        <h5>\n          <u><b>Q: How do I care for natural soaps?</b></u>\n        </h5>\n      </a>\n      <p class=\"collapse\" id=\"collapseOne\">\n        <u>A:</u> Store in a dark, dry, well ventilated place if not used. Handmade Soaps vary in colour. Brown & white spots\n        are quite normal. When in use, do not allow to stand in water. Place in a soap dish that has drainage holes, away\n        from direct sunlight. Ideally use immediately. Within six months to a year of purchase is recommended. Years beyond\n        this period it is still very usable but will have lost some scent.\n      </p>\n    </div>\n\n    <div class=\"container\">\n      <a class=\"collapser\" data-toggle=\"collapse\" href=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapse\">\n        <h5>\n          <u><b>Q: What ingredients do you use in your soap?</b></u>\n        </h5>\n      </a>\n      <div class=\"collapse\" id=\"collapseTwo\">\n        <p>\n          <u>A:</u> Our traditional artisan soap is a beautiful hand cut bar made with care using only the finest ingredients.\n          Quality oils are used in the making of our soaps:\n        </p>\n\n        <b>Olive Oil:</b>\n        <p>\n          -Known skin moisturizer\n          <br>-Acts as a barrier to seal in the skin's natural moisture\n          <br>-Sourced locally\n        </p>\n\n        <b>Castor Oil:</b>\n        <p>\n          -A wonder oil with many skin caring properties\n          <br>-Produces smaller bubbles and gives intensity to the lather\n        </p>\n\n        <b>Coconut Oil:</b>\n        <p>\n          -A great all round skin loving oil\n          <br>-Creates a silky textured soap\n          <br>-Yields a creamy lather\n        </p>\n\n        <b>Palm Oil:</b>\n        <p>\n          -Yields a mild, firm, long lasting soap\n        </p>\n\n        <b>Lye:</b>\n        <p>\n          -Also known as sodium hydroxide\n          <br>-Used in the 'saponification' process\n        </p>\n\n        <b>Mountain Water:</b>\n        <p>\n          -Adds to the purity of the product\n        </p>\n\n        <b>Natural additives are used to enhance the soap's moisturizing, cleansing and soothing properties. These include:</b>\n        <p>\n          -Natural Colourants (e.g. pink clay; spirulina)\n          <br>-Pure Essential Oils (e.g. lavender; rosemary)\n          <br>-Botanicals (e.g. dried herbs like rooibos tea and lavender)\n          <br>-Exfoliates (e.g. charcoal or coffee)\n        </p>\n      </div>\n    </div>\n\n    <div class=\"container\">\n      <a class=\"collapser\" data-toggle=\"collapse\" href=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapse\">\n        <h5>\n          <u><b>Q: Are your soaps safe for sensitive skin?</b></u>\n        </h5>\n      </a>\n      <p class=\"collapse\" id=\"collapseThree\">\n        <u>A:</u> Yes, they contain no chemicals, only natural ingredients.</p>\n    </div>\n\n    <div class=\"container\">\n        <a class=\"collapser\" data-toggle=\"collapse\" href=\"#collapseFour\" aria-expanded=\"false\" aria-controls=\"collapse\">\n          <h5>\n            <u><b>Q: Are your soaps grey water and septic tank safe?</b></u>\n          </h5>\n        </a>\n        <p class=\"collapse\" id=\"collapseFour\">\n          <u>A:</u> Yes, our soaps are naturally biodegradable.</p>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/faq/faq.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FAQComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FAQComponent = (function () {
    function FAQComponent() {
    }
    FAQComponent.prototype.ngOnInit = function () {
    };
    return FAQComponent;
}());
FAQComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-faq',
        template: __webpack_require__("../../../../../src/app/faq/faq.component.html"),
        styles: [__webpack_require__("../../../../../src/app/faq/faq.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FAQComponent);

//# sourceMappingURL=faq.component.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".styled-footer{\r\n    padding: 40px 0px;\r\n    background-color: #393939;\r\n    color: white;\r\n    box-shadow: 0px -2px 2px #A41D9A;\r\n}\r\n\r\n.footer-icons{\r\n    color: white;\r\n    font-size: 30px;\r\n    margin-left: 20px;\r\n    margin-right: 20px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.emailIcon{\r\n    font-size: 20px;\r\n    margin: 2px 5px;\r\n    color: white;\r\n}\r\n\r\na{\r\n    color: white;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"styled-footer\">\n  <div class=\"row justify-content-center p-0 m-0\">\n    <h4>CONNECT WITH US!</h4>\n  </div>\n  <div class=\"row justify-content-center p-0 m-0\">\n    <a href=\"https://www.instagram.com/dvs.soap/\" target=\"_blank\" class=\"footer-icons\"><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i></a>\n    <a href=\"https://www.facebook.com/DreamValleyHandmadeSoap/\" target=\"_blank\" class=\"footer-icons\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a>\n    <a href=\"https://www.linkedin.com/in/lindy-kaese-32471b122/\" target=\"_blank\" class=\"footer-icons\"><i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i></a>\n  </div>\n  <div class=\"row justify-content-center p-0 m-0\">\n      <a href=\"mailto:lindy@breede.co.za\"><i class=\"fa fa-envelope-o emailIcon\" aria-hidden=\"true\"></i>lindy@breede.co.za</a>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".home{\r\n    color: #383838;\r\n    padding: 30px;\r\n    background-color: white;\r\n    font-family: 'EB Garamond', serif;\r\n    font-size: 20px;\r\n}\r\n\r\n.carousel-pane{\r\n    background-color: #4E005A;\r\n    padding: 5px;\r\n    border: 5px solid #6A007A;\r\n    border-radius: 10px;\r\n    margin: 40px 13px;\r\n    box-shadow: 0px 2px 5px black;\r\n    height: auto;\r\n}\r\n\r\n.facebook-pane{\r\n    background-color: #494949;\r\n    width: 100%;\r\n    padding-top: 60px;\r\n    margin-top: -60px;\r\n}\r\n\r\n.list{\r\n    padding-top: 20px;\r\n}\r\n\r\n.list > ul{\r\n    list-style-type: circle;\r\n}\r\n\r\n.text{\r\n    padding-right: 4%;\r\n}\r\n\r\n.latest-news{\r\n    box-shadow: 0px 1px 2px #A41D9A;\r\n    width: auto;\r\n}\r\n\r\n.list-heading{\r\n    font-weight: bold;\r\n    font-size: 20px;\r\n}\r\n\r\n.content{\r\n    line-height: 30px;\r\n}\r\n\r\n.container{\r\n    border-top: 1px solid #E16BFB;\r\n    border-bottom: 1px solid #E16BFB;\r\n    margin: 40px 0px;\r\n    background-color: #F7D3FF;\r\n}\r\n\r\n.fb-buttons{\r\n    margin-top: 28px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"home row justify-content-center m-0\">\n    <div class=\"col-md-9 text content\">\n        Dream Valley Soap makes soap, balms and creams. All our products are carefully handcrafted with quality natural oils and\n        ingredients sourced locally. Our Soaps are handcrafted with quality oils and lightly scented with essential oils\n        and herbs. After a good long maturing time they are mild, nourishing and moisturising.\n        <br>\n        <br>\n        <div class=\"row justify-content-center\">\n            <div class=\"col-md-6 col-sm-9 list\">\n                <u class=\"list-heading\">Luxury and goodness in a decadent bar.</u>\n                <br>\n                <ul class=\"styled-list\">\n                    <li>Bio-degradable; no added chemicals; SLES free.</li>\n                    <li>Is grey water and septic tank safe</li>\n                    <li>Contains no animal products.</li>\n                    <li>Is excellent for all types of skins.</li>\n                    <li>Lathers, moisturizes and washes beautifully.</li>\n                </ul>\n            </div>\n        </div>\n        <div class=\"row justify-content-center\">\n            <div id=\"carouselIndicators\" class=\"carousel slide carousel-pane col-md-6 col-sm-8\" data-ride=\"carousel\">\n                <ol class=\"carousel-indicators\">\n                    <li data-target=\"#carouselIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n                    <li data-target=\"#carouselIndicators\" data-slide-to=\"1\"></li>\n                </ol>\n                <div class=\"carousel-inner\" role=\"listbox\">\n                    <div class=\"carousel-item active\">\n                        <img class=\"d-block img-fluid rounded carousel-img\" src=\"../../assets/img/round hand.jpg\" alt=\"Slide 1\">\n                    </div>\n                    <div class=\"carousel-item\">\n                        <img class=\"d-block img-fluid rounded carousel-img\" src=\"../../assets/img/traditional.jpg\" alt=\"Slide 2\">\n                    </div>\n                </div>\n                <a class=\"carousel-control-prev\" href=\"#carouselIndicators\" role=\"button\" data-slide=\"prev\">\n              <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n              <span class=\"sr-only\">Previous</span>\n            </a>\n                <a class=\"carousel-control-next\" href=\"#carouselIndicators\" role=\"button\" data-slide=\"next\">\n              <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n              <span class=\"sr-only\">Next</span>\n            </a>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal fade\" id=\"modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"Latest News\" aria-hidden=\"true\">\n            <div class=\"modal-dialog\" role=\"document\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <h5 class=\"modal-title\" id=\"Label\">Latest News</h5>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n                    </div>\n                    <div class=\"modal-body row justify-content-center\" (load)=\"onResize($event)\" (window:resize)=\"onResize($event)\">\n                        <iframe class=\"fb-page\" [src]=\"fbLink\" data-adapt-container-width=\"true\" width=\"{{width}}px\" height=\"450\" style=\"border:none;overflow:hidden\"\n                            scrolling=\"no\" frameborder=\"0\" allowTransparency=\"true\"></iframe>\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-dark\" data-dismiss=\"modal\">Close</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this.width = window.innerWidth - 75;
        // tslint:disable-next-line:max-line-length
        this.fbLink = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FDreamValleyHandmadeSoap%2F&tabs=timeline&width=' + this.width + '&height=450&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId');
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.onResize = function (event) {
        this.width = window.innerWidth - 75;
        console.log(this.width);
        // tslint:disable-next-line:max-line-length
        this.fbLink = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FDreamValleyHandmadeSoap%2F&tabs=timeline&width=' + this.width + '&height=450&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId');
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".heading{\r\n    font-family: Vivaldi, cursive;\r\n    font-size: 48px;\r\n    color: #BB16AE !important;\r\n}\r\n\r\n.navigation{\r\n    background-color: #383838;\r\n    width: 100%;\r\n    min-height: 55px;\r\n    font-size: 18px;\r\n    float: right;\r\n    vertical-align: middle;\r\n    box-shadow: 0px 2px 2px #A41D9A;\r\n}\r\n\r\n.navbar-expand-lg .navbar-nav .nav-link{\r\n    color: white;\r\n}\r\n\r\n.navbar-expand-lg .navbar-nav .nav-link:hover{\r\n    color: #A41D9A;\r\n}\r\n\r\n.hamburger{\r\n    border-color: #A41D9A;\r\n}\r\n\r\n.dropdown-item:hover{\r\n    background-color: #383838;\r\n    color: white;\r\n}\r\n\r\n.nav-item{\r\n    margin-left: 15px;\r\n    margin-right: 15px;\r\n}\r\n\r\n@media screen and (max-width: 800px) {\r\n    .heading{\r\n        font-size: 32px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark navigation fixed-top\">\n    <a [routerLink]=\"['/home']\">\n        <h1 class=\"navbar-brand mb-0 heading\">Dream Valley Soap</h1>\n    </a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#Content\" aria-controls=\"Content\" aria-expanded=\"false\"\n        aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"Content\">\n        <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" [routerLink]=\"['/home']\">HOME</a>\n            </li>\n\n            <li class=\"nav-item dropdown\">\n                <a class=\"nav-link dropdown-toggle\" href=\"\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                  PRODUCTS\n                </a>\n                <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\n                    <a class=\"dropdown-item\" [routerLink]=\"['/traditional']\">Traditional Soap</a>\n                    <a class=\"dropdown-item\" [routerLink]=\"['/coconutandclay']\">Coconut & Clay Soap</a>\n                    <a class=\"dropdown-item\" [routerLink]=\"['/bathandbody']\">Bath & Body</a>\n                    <a class=\"dropdown-item\" [routerLink]=\"['/balms']\">Balms</a>\n                </div>\n            </li>\n\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" [routerLink]=\"['/faq']\">FAQ's</a>\n            </li>\n\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"\" data-toggle=\"modal\" data-target=\"#modal\">LATEST NEWS</a>\n            </li>\n        </ul>\n    </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = (function () {
    function NavbarComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this.width = window.innerWidth - 75;
        // tslint:disable-next-line:max-line-length
        this.fbLink = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FDreamValleyHandmadeSoap%2F&tabs=timeline&width=' + this.width + '&height=450&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId');
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onResize = function (event) {
        this.width = window.innerWidth - 75;
        console.log(this.width);
        // tslint:disable-next-line:max-line-length
        this.fbLink = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FDreamValleyHandmadeSoap%2F&tabs=timeline&width=' + this.width + '&height=450&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId');
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _a || Object])
], NavbarComponent);

var _a;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/products/products.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".products{\r\n    padding: 40px 0px;\r\n}\r\n\r\n.header{\r\n    font-family: 'EB Garamond', serif;\r\n    font-size: 20px;\r\n}\r\n\r\n.cards{\r\n    padding: 0px 10%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/products/products.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"products\">\n  <div class=\"header container\">\n    <h3>{{heading}}</h3>\n    <p>{{content}}</p>\n  </div>\n  <div class=\"row justify-content-center m-0 cards\">\n    <div *ngFor=\"let item of data | async\" class=\"col-md-4\">\n      <app-card [url]=\"[item.src]\" [alt]=\"[item.alt]\" [title]=\"[item.title]\" [text]=\"[item.text]\"></app-card>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/products/products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__("../../../../firebase/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductsComponent = (function () {
    function ProductsComponent(af) {
        this.database = __WEBPACK_IMPORTED_MODULE_2_firebase_app__["database"]();
        this.ref = af;
    }
    ProductsComponent.prototype.ngOnInit = function () {
        console.log(this.db);
        this.data = this.ref.list(this.db);
    };
    return ProductsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], ProductsComponent.prototype, "db", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], ProductsComponent.prototype, "heading", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], ProductsComponent.prototype, "content", void 0);
ProductsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-products',
        template: __webpack_require__("../../../../../src/app/products/products.component.html"),
        styles: [__webpack_require__("../../../../../src/app/products/products.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object])
], ProductsComponent);

var _a;
//# sourceMappingURL=products.component.js.map

/***/ }),

/***/ "../../../../../src/app/traditional-soap/traditional-soap.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/traditional-soap/traditional-soap.component.html":
/***/ (function(module, exports) {

module.exports = "<app-products [db]=\"'traditional'\" [heading]=\"'Traditional Soap'\" [content]=\"'Our Soaps are handcrafted with quality oils and lightly scented with essential oils and\nherbs. After a good long maturing time they are mild, nourishing and moisturising.\nLuxury and goodness in a decadent bar.'\"></app-products>"

/***/ }),

/***/ "../../../../../src/app/traditional-soap/traditional-soap.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TraditionalSoapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TraditionalSoapComponent = (function () {
    function TraditionalSoapComponent() {
    }
    TraditionalSoapComponent.prototype.ngOnInit = function () {
    };
    return TraditionalSoapComponent;
}());
TraditionalSoapComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-traditional-soap',
        template: __webpack_require__("../../../../../src/app/traditional-soap/traditional-soap.component.html"),
        styles: [__webpack_require__("../../../../../src/app/traditional-soap/traditional-soap.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TraditionalSoapComponent);

//# sourceMappingURL=traditional-soap.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map