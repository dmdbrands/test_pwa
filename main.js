(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<gsg-content></gsg-content>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _gsg_gsg_content_gsg_content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gsg/gsg-content/gsg-content.component */ "./src/app/gsg/gsg-content/gsg-content.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _gsg_gsg_content_gsg_content_component__WEBPACK_IMPORTED_MODULE_4__["GsgContentComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["FlexLayoutModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/gsg/gsg-content/gsg-content.component.html":
/*!************************************************************!*\
  !*** ./src/app/gsg/gsg-content/gsg-content.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-container\">\n\t<h1>Welocome To Your {{ gsg.name}} Getting Started Guide</h1>\n\t<div class=\"video-container\">\n\t\t<iframe class=\"video\" frameborder=\"0\" [src]=\"sanitizeUrl(gsg.videoUrl)\"></iframe>\n\t</div>\n\n\t<!-- accordion sections -->\n\t<div class=\"menu-item\" fxLayout=\"row\" [style.margin-top]=\"'2rem'\" (click)=\"toggleShow('description')\">\n\t\t<div fxFlex=\"2rem\">\n\t\t\t<svg\n\t\t\t\t#menuArrow\n\t\t\t\tid=\"description\"\n\t\t\t\tclass=\"menu-arrow\"\n\t\t\t\tviewBox=\"0 0 72 72\">\n\t\t\t\t<polyline fill=\"none\" stroke=\"#000000\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" stroke-width=\"7.0233\" points=\"48,61 36,48.2 24,35.5 36,22.7 48,9.9\"/>\n\t\t\t</svg>\n\t\t</div>\n\t\t<div fxFlex=\"85%\" class=\"section-title\">\n\t\t\t<span class=\"menu-title\">Product Description</span>\n\t\t</div>\n\t</div>\n\t<div #content id=\"description\" class=\"menu-content-container hide\">\n\t\t<p>{{ gsg.description }}</p>\n\t</div>\n\t<!-- images -->\n\t<div class=\"menu-item\" fxLayout=\"row\" (click)=\"toggleShow('images')\">\n\t\t<div fxFlex=\"2rem\">\n\t\t\t<svg\n\t\t\t\t#menuArrow\n\t\t\t\tid=\"images\"\n\t\t\t\tclass=\"menu-arrow\"\n\t\t\t\tviewBox=\"0 0 72 72\">\n\t\t\t\t<polyline fill=\"none\" stroke=\"#000000\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" stroke-width=\"7.0233\" points=\"48,61 36,48.2 24,35.5 36,22.7 48,9.9\"/>\n\t\t\t</svg>\n\t\t</div>\n\t\t<div fxFlex=\"85%\" class=\"section-title\">\n\t\t\t<span class=\"menu-title\">Product Images</span>\n\t\t</div>\n\t</div>\n\t<div #content id=\"images\" class=\"menu-content-container hide\">\n\t\t<div *ngFor=\"let imageUrl of gsg.imageUrls\">\n\t\t\t<img [src]=\"imageUrl\" [style.width]=\"'100%'\"/>\n\t\t</div>\n\t</div>\n\t<!-- faq -->\n\t<div class=\"menu-item\" fxLayout=\"row\" (click)=\"toggleShow('faq')\">\n\t\t<div fxFlex=\"2rem\">\n\t\t\t<svg\n\t\t\t\t#menuArrow\n\t\t\t\tid=\"faq\"\n\t\t\t\tclass=\"menu-arrow\"\n\t\t\t\tviewBox=\"0 0 72 72\">\n\t\t\t\t<polyline fill=\"none\" stroke=\"#000000\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" stroke-width=\"7.0233\" points=\"48,61 36,48.2 24,35.5 36,22.7 48,9.9\"/>\n\t\t\t</svg>\n\t\t</div>\n\t\t<div fxFlex=\"85%\" class=\"section-title\">\n\t\t\t<span class=\"menu-title\">Product FAQ</span>\n\t\t</div>\n\t</div>\n\t<div #content id=\"faq\" class=\"menu-content-container hide\">\n\t\t<div *ngFor=\"let question of gsg.faq\">\n\t\t\t<h3>{{ question.question }}</h3>\n\t\t\t<p [style.margin-top]=\"'5px'\">{{ question.answer }}</p>\n\t\t</div>\n\t</div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/gsg/gsg-content/gsg-content.component.scss":
/*!************************************************************!*\
  !*** ./src/app/gsg/gsg-content/gsg-content.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Override star rating colors by using scss variables */\n.row {\n  display: flex;\n  justify-content: space-between; }\n.col6 {\n  flex: 1 1 50%; }\n.col8 {\n  flex: 1 1 60%; }\n.col3 {\n  flex: 1 1 33%; }\n.col4 {\n  flex: 1 1 40%; }\nh1 {\n  font-weight: 200; }\n.content-container {\n  padding: 0 2rem; }\n.menu-content-container {\n  overflow: hidden;\n  transition: height .4s ease-out; }\n.menu-content-container.hide {\n    height: 0 !important; }\n.menu-arrow {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n  transition: -webkit-transform .4s ease-out;\n  transition: transform .4s ease-out;\n  transition: transform .4s ease-out, -webkit-transform .4s ease-out; }\n.menu-arrow-down {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg); }\n.menu-item {\n  background-color: white;\n  border-top: 1px solid #E3E3E3;\n  cursor: default;\n  height: 5rem;\n  line-height: 5rem;\n  margin: 0 1rem;\n  opacity: 1;\n  overflow: hidden;\n  position: relative;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  width: calc(100vw - 2rem); }\n.menu-item svg {\n    margin-top: 28px;\n    width: 24px; }\n.menu-item img {\n    width: 24px; }\n.video-container {\n  position: relative;\n  width: 100%;\n  height: 0;\n  padding-bottom: 56.25%; }\n.video {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%; }\n"

/***/ }),

/***/ "./src/app/gsg/gsg-content/gsg-content.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/gsg/gsg-content/gsg-content.component.ts ***!
  \**********************************************************/
/*! exports provided: GsgContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GsgContentComponent", function() { return GsgContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _sample_gsg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sample-gsg */ "./src/app/gsg/sample-gsg.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GsgContentComponent = /** @class */ (function () {
    function GsgContentComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this.gsg = _sample_gsg__WEBPACK_IMPORTED_MODULE_2__["sampleGSG"];
    }
    GsgContentComponent.prototype.ngOnInit = function () {
    };
    GsgContentComponent.prototype.sanitizeUrl = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + url);
    };
    GsgContentComponent.prototype.toggleShow = function (selectedContent) {
        // sets which arrow and content section to animate
        var menuSelection = this.gsgContentSections.find(function (menuItem) { return menuItem.nativeElement.id === selectedContent; });
        var menuArrow = this.menuArrows.find(function (arrow) { return arrow.nativeElement.id === selectedContent; });
        // height changes based on display content which is dynamic.
        var height = menuSelection.nativeElement.scrollHeight;
        // only toggles class to selected element
        if (menuArrow) {
            menuArrow.nativeElement.classList.toggle('menu-arrow-down');
        }
        // set height of element before hide class is toggled
        menuSelection.nativeElement.style.height = height + "px";
        // setTimeout is needed for css transitions to be properly triggered
        setTimeout(function () {
            menuSelection.nativeElement.classList.toggle('hide');
        }, 1);
        setTimeout(function () {
            // this is needed so the the container and show/shrink if a nested element is expanded
            menuSelection.nativeElement.style.height = 'auto';
        }, 410);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])('arrow'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], GsgContentComponent.prototype, "arrows", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])('content'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], GsgContentComponent.prototype, "gsgContentSections", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])('menuArrow'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], GsgContentComponent.prototype, "menuArrows", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('registerPopup'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], GsgContentComponent.prototype, "registerPopup", void 0);
    GsgContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'gsg-content',
            template: __webpack_require__(/*! ./gsg-content.component.html */ "./src/app/gsg/gsg-content/gsg-content.component.html"),
            styles: [__webpack_require__(/*! ./gsg-content.component.scss */ "./src/app/gsg/gsg-content/gsg-content.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], GsgContentComponent);
    return GsgContentComponent;
}());



/***/ }),

/***/ "./src/app/gsg/sample-gsg.ts":
/*!***********************************!*\
  !*** ./src/app/gsg/sample-gsg.ts ***!
  \***********************************/
/*! exports provided: sampleGSG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sampleGSG", function() { return sampleGSG; });
var sampleGSG = {
    sku: '0480',
    name: 'Basic Kitchen Scale',
    description: 'Our top-selling food scale looks great on your counter, stores away easily, and tells you what you need to know to make better meals, whether you’re trying to count macros or perfect your signature cookie recipe. A straightforward design focused around the essentials makes it easy to quickly weigh the ingredients you use every day.',
    videoUrl: 'c_Il8NE8gWQ',
    faq: [
        {
            question: 'How do I replace the battery?',
            answer: 'Your scale arrives with 2 CR2032 batteries—one for now, and one for later. When you see a "Lo" error message on the screen, that means that your battery is low and it\'s time for the next one. To replace it, just turn your scale over, slide the battery cover open, pop the old battery out, and place in the new CR2032 battery with the positive end facing you. Then, close the battery cover and your scale should work as normal.'
        },
        {
            question: 'I keep pressing the ZERO or UNIT button but nothing happens. What’s wrong?',
            answer: 'Because the buttons are part of the surface of the scale, you need to make sure you are pressing squarely in the center of the button with the pad of your finger. If this still doesn’t work, please contact Customer Support for additional help'
        },
        {
            question: 'How do I change the unit of measure?',
            answer: 'Tap the UNIT button to switch between grams, ounces, fluid ounces, and milliliters.'
        }
    ],
    imageUrls: [
        'https://s3.amazonaws.com/gg-mark/gsg/variation2s1t7NSkoZ4VJsp0lqiCrK.jpg',
        'https://s3.amazonaws.com/gg-mark/gsg/variation32HwuOjTCBxpmltJFGzJUe.jpg',
        'https://s3.amazonaws.com/gg-mark/gsg/variation3MRFJ2w2FRE5qj3AQEemMN.jpg'
    ],
    thumbnailUrl: 'https://s3.amazonaws.com/gg-mark/gsg/variation2MyIa3DuZzaCasUtrnv0Rz.png'
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/alexanderorear/Documents/PWA-GSG/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map