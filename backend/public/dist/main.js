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
		var e = new Error("Cannot find module '" + req + "'");
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

module.exports = "<app-movies-information></app-movies-information>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
        this.title = 'movies-information-test-project';
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _movies_information_movies_information_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./movies-information/movies-information.module */ "./src/app/movies-information/movies-information.module.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _movies_information_movies_information_module__WEBPACK_IMPORTED_MODULE_4__["MoviesInformationModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/movies-information/last-ten-movie-form-requests/last-ten-movie-form-requests.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/movies-information/last-ten-movie-form-requests/last-ten-movie-form-requests.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Last 10 form requests</h3>\n\n<table id=\"customers\">\n  <tr>\n    <th>Title</th>\n    <th>Type</th>\n    <th>Plot</th>\n    <th>Year</th>\n    <th>Actor</th>\n  </tr>\n  <tr *ngFor=\"let request of data\">\n    <td>{{ request.title }}</td>\n    <td>{{ request.type }}</td>\n    <td>{{ request.plot }}</td>\n    <td>{{ request.year }}</td>\n    <td>{{ request.actor }}</td>\n  </tr>\n</table>\n"

/***/ }),

/***/ "./src/app/movies-information/last-ten-movie-form-requests/last-ten-movie-form-requests.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/movies-information/last-ten-movie-form-requests/last-ten-movie-form-requests.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#customers {\n  font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\n  border-collapse: collapse;\n  width: 100%; }\n\n#customers td,\n#customers th {\n  border: 1px solid #ddd;\n  padding: 8px; }\n\n#customers tr:nth-child(even) {\n  background-color: #f2f2f2; }\n\n#customers tr:hover {\n  background-color: #ddd; }\n\n#customers th {\n  padding-top: 12px;\n  padding-bottom: 12px;\n  text-align: left;\n  background-color: #4CAF50;\n  color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWVzLWluZm9ybWF0aW9uL2xhc3QtdGVuLW1vdmllLWZvcm0tcmVxdWVzdHMvQzpcXFVzZXJzXFxhYmMtc29mdHdhcmUtYXJtaW5cXERlc2t0b3BcXG1vdmllcy1pbmZvcm1hdGlvbi10ZXN0LXByb2plY3RcXGZyb250ZW5kL3NyY1xcYXBwXFxtb3ZpZXMtaW5mb3JtYXRpb25cXGxhc3QtdGVuLW1vdmllLWZvcm0tcmVxdWVzdHNcXGxhc3QtdGVuLW1vdmllLWZvcm0tcmVxdWVzdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5REFBeUQ7RUFDekQseUJBQXlCO0VBQ3pCLFdBQVcsRUFBQTs7QUFHZjs7RUFFSSxzQkFBc0I7RUFDdEIsWUFBWSxFQUFBOztBQUdoQjtFQUNJLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb3ZpZXMtaW5mb3JtYXRpb24vbGFzdC10ZW4tbW92aWUtZm9ybS1yZXF1ZXN0cy9sYXN0LXRlbi1tb3ZpZS1mb3JtLXJlcXVlc3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2N1c3RvbWVycyB7XHJcbiAgICBmb250LWZhbWlseTogXCJUcmVidWNoZXQgTVNcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuI2N1c3RvbWVycyB0ZCxcclxuI2N1c3RvbWVycyB0aCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG59XHJcblxyXG4jY3VzdG9tZXJzIHRyOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG59XHJcblxyXG4jY3VzdG9tZXJzIHRyOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbn1cclxuXHJcbiNjdXN0b21lcnMgdGgge1xyXG4gICAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/movies-information/last-ten-movie-form-requests/last-ten-movie-form-requests.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/movies-information/last-ten-movie-form-requests/last-ten-movie-form-requests.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: LastTenMovieFormRequestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LastTenMovieFormRequestsComponent", function() { return LastTenMovieFormRequestsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LastTenMovieFormRequestsComponent = /** @class */ (function () {
    function LastTenMovieFormRequestsComponent() {
    }
    LastTenMovieFormRequestsComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], LastTenMovieFormRequestsComponent.prototype, "data", void 0);
    LastTenMovieFormRequestsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-last-ten-movie-form-requests',
            template: __webpack_require__(/*! ./last-ten-movie-form-requests.component.html */ "./src/app/movies-information/last-ten-movie-form-requests/last-ten-movie-form-requests.component.html"),
            styles: [__webpack_require__(/*! ./last-ten-movie-form-requests.component.scss */ "./src/app/movies-information/last-ten-movie-form-requests/last-ten-movie-form-requests.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LastTenMovieFormRequestsComponent);
    return LastTenMovieFormRequestsComponent;
}());



/***/ }),

/***/ "./src/app/movies-information/movie-form-result/movie-form-result.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/movies-information/movie-form-result/movie-form-result.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Search result</h3>\n\n<div class=\"movie-details\" *ngFor=\"let movie of data\">\n  <h4>{{ movie.title }}</h4>\n  <p>{{ movie.type }}</p>\n  <p>{{ movie.plot }}</p>\n  <p>{{ movie.year }}</p>\n  <p>{{ movie.actor }}</p>\n</div>\n"

/***/ }),

/***/ "./src/app/movies-information/movie-form-result/movie-form-result.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/movies-information/movie-form-result/movie-form-result.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".movie-details {\n  border-radius: 5px;\n  border: 1px solid gray;\n  background-color: #f2f2f2;\n  padding: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWVzLWluZm9ybWF0aW9uL21vdmllLWZvcm0tcmVzdWx0L0M6XFxVc2Vyc1xcYWJjLXNvZnR3YXJlLWFybWluXFxEZXNrdG9wXFxtb3ZpZXMtaW5mb3JtYXRpb24tdGVzdC1wcm9qZWN0XFxmcm9udGVuZC9zcmNcXGFwcFxcbW92aWVzLWluZm9ybWF0aW9uXFxtb3ZpZS1mb3JtLXJlc3VsdFxcbW92aWUtZm9ybS1yZXN1bHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb3ZpZXMtaW5mb3JtYXRpb24vbW92aWUtZm9ybS1yZXN1bHQvbW92aWUtZm9ybS1yZXN1bHQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW92aWUtZGV0YWlscyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/movies-information/movie-form-result/movie-form-result.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/movies-information/movie-form-result/movie-form-result.component.ts ***!
  \*************************************************************************************/
/*! exports provided: MovieFormResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieFormResultComponent", function() { return MovieFormResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MovieFormResultComponent = /** @class */ (function () {
    function MovieFormResultComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MovieFormResultComponent.prototype, "data", void 0);
    MovieFormResultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-movie-form-result',
            template: __webpack_require__(/*! ./movie-form-result.component.html */ "./src/app/movies-information/movie-form-result/movie-form-result.component.html"),
            styles: [__webpack_require__(/*! ./movie-form-result.component.scss */ "./src/app/movies-information/movie-form-result/movie-form-result.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MovieFormResultComponent);
    return MovieFormResultComponent;
}());



/***/ }),

/***/ "./src/app/movies-information/movie-form.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/movies-information/movie-form.service.ts ***!
  \**********************************************************/
/*! exports provided: MovieFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieFormService", function() { return MovieFormService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MovieFormService = /** @class */ (function () {
    function MovieFormService(http) {
        this.http = http;
        this.httpOptions = {};
    }
    MovieFormService.prototype.getMovies = function (data) {
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseEndPoint + "data/movies";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('title', data.title)
                .set('type', data.type)
                .set('plot', data.plot)
                .set('year', String(data.year))
                .set('actor', data.actor)
        };
        return this.http.get(this.url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res;
        }));
    };
    MovieFormService.prototype.getFormRequests = function () {
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseEndPoint + "data/requests";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.get(this.url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res;
        }));
    };
    MovieFormService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MovieFormService);
    return MovieFormService;
}());



/***/ }),

/***/ "./src/app/movies-information/movie-form/movie-form.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/movies-information/movie-form/movie-form.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Get movie deatils</h3>\n\n<div class=\"movie-form\">\n  <form\n    [formGroup]=\"movieForm\"\n    (ngSubmit)=\"submitMovieForm()\"\n    autocomplete=\"off\"\n  >\n    <label for=\"title\">Title</label>\n    <input\n      type=\"text\"\n      id=\"title\"\n      name=\"title\"\n      formControlName=\"title\"\n      placeholder=\"Title\"\n      [ngClass]=\"{\n        'has-error': title.invalid && (title.dirty || title.touched)\n      }\"\n    />\n    <app-error-message\n      *ngIf=\"title.invalid && (title.dirty || title.touched)\"\n      [errorConfig]=\"{ formControl: title, field: 'Title' }\"\n    ></app-error-message>\n\n    <label for=\"type\">Type</label>\n    <select\n      id=\"type\"\n      name=\"type\"\n      formControlName=\"type\"\n      [ngClass]=\"{\n        'has-error': type.invalid && (type.dirty || type.touched)\n      }\"\n    >\n      <option *ngFor=\"let movie of movieTypes\" [value]=\"movie.value\">{{\n        movie.label\n      }}</option>\n    </select>\n    <app-error-message\n      *ngIf=\"type.invalid && (type.dirty || type.touched)\"\n      [errorConfig]=\"{ formControl: type, field: 'Type' }\"\n    ></app-error-message>\n\n    <label for=\"plot\">Plot</label>\n    <select\n      id=\"plot\"\n      name=\"plot\"\n      formControlName=\"plot\"\n      [ngClass]=\"{\n        'has-error': plot.invalid && (plot.dirty || plot.touched)\n      }\"\n    >\n      <option *ngFor=\"let plot of plotTypes\" [value]=\"plot.value\">{{\n        plot.label\n      }}</option>\n    </select>\n    <app-error-message\n      *ngIf=\"plot.invalid && (plot.dirty || plot.touched)\"\n      [errorConfig]=\"{ formControl: plot, field: 'Plot' }\"\n    ></app-error-message>\n\n    <label for=\"year\">Year</label>\n    <input\n      type=\"text\"\n      id=\"year\"\n      name=\"year\"\n      formControlName=\"year\"\n      placeholder=\"Year..\"\n      [ngClass]=\"{\n        'has-error': year.invalid && (year.dirty || year.touched)\n      }\"\n    />\n    <app-error-message\n      *ngIf=\"year.invalid && (year.dirty || year.touched)\"\n      [errorConfig]=\"{ formControl: year, field: 'Year', patternMsg: 'number' }\"\n    ></app-error-message>\n\n    <label for=\"lname\">Actor</label>\n    <input\n      type=\"text\"\n      id=\"actor\"\n      name=\"actor\"\n      formControlName=\"actor\"\n      placeholder=\"Actor..\"\n      [ngClass]=\"{\n        'has-error': actor.invalid && (actor.dirty || actor.touched)\n      }\"\n    />\n    <app-error-message\n      *ngIf=\"actor.invalid && (actor.dirty || actor.touched)\"\n      [errorConfig]=\"{ formControl: actor, field: 'Actor' }\"\n    ></app-error-message>\n\n    <input\n      [ngClass]=\"{\n        disabled: movieForm.invalid\n      }\"\n      type=\"submit\"\n      value=\"Submit\"\n    />\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/movies-information/movie-form/movie-form.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/movies-information/movie-form/movie-form.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=text],\nselect {\n  width: 100%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box; }\n\ninput[type=submit] {\n  width: 15%;\n  background-color: #268DFA;\n  color: white;\n  padding: 14px 20px;\n  margin: 8px 0;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  display: block;\n  margin: 0 auto; }\n\ninput[type=submit]:hover {\n  opacity: 0.8; }\n\n.movie-form {\n  border-radius: 5px;\n  background-color: #f2f2f2;\n  padding: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWVzLWluZm9ybWF0aW9uL21vdmllLWZvcm0vQzpcXFVzZXJzXFxhYmMtc29mdHdhcmUtYXJtaW5cXERlc2t0b3BcXG1vdmllcy1pbmZvcm1hdGlvbi10ZXN0LXByb2plY3RcXGZyb250ZW5kL3NyY1xcYXBwXFxtb3ZpZXMtaW5mb3JtYXRpb25cXG1vdmllLWZvcm1cXG1vdmllLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUksV0FBVztFQUNYLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksVUFBVTtFQUNWLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixjQUFjO0VBQ2QsY0FBYyxFQUFBOztBQUdsQjtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vdmllcy1pbmZvcm1hdGlvbi9tb3ZpZS1mb3JtL21vdmllLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dFt0eXBlPXRleHRdLFxyXG5zZWxlY3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9c3VibWl0XSB7XHJcbiAgICB3aWR0aDogMTUlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI2OERGQTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDE0cHggMjBweDtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG59XHJcblxyXG4ubW92aWUtZm9ybSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/movies-information/movie-form/movie-form.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/movies-information/movie-form/movie-form.component.ts ***!
  \***********************************************************************/
/*! exports provided: MovieFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieFormComponent", function() { return MovieFormComponent; });
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared/constants */ "./src/app/shared/constants.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MovieFormComponent = /** @class */ (function () {
    function MovieFormComponent() {
        this.submitForm = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.movieTypes = _shared_constants__WEBPACK_IMPORTED_MODULE_0__["movieTypes"];
        this.plotTypes = _shared_constants__WEBPACK_IMPORTED_MODULE_0__["plotTypes"];
    }
    MovieFormComponent.prototype.ngOnInit = function () {
        this.createMovieForm();
    };
    MovieFormComponent.prototype.createMovieForm = function () {
        this.movieForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            plot: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            year: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]+(.[0-9]{1,})?$')
            ]),
            actor: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    };
    Object.defineProperty(MovieFormComponent.prototype, "title", {
        get: function () {
            return this.movieForm.get('title');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MovieFormComponent.prototype, "type", {
        get: function () {
            return this.movieForm.get('type');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MovieFormComponent.prototype, "plot", {
        get: function () {
            return this.movieForm.get('plot');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MovieFormComponent.prototype, "year", {
        get: function () {
            return this.movieForm.get('year');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MovieFormComponent.prototype, "actor", {
        get: function () {
            return this.movieForm.get('actor');
        },
        enumerable: true,
        configurable: true
    });
    MovieFormComponent.prototype.submitMovieForm = function () {
        this.submitForm.emit(this.movieForm.value);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], MovieFormComponent.prototype, "submitForm", void 0);
    MovieFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie-form',
            template: __webpack_require__(/*! ./movie-form.component.html */ "./src/app/movies-information/movie-form/movie-form.component.html"),
            styles: [__webpack_require__(/*! ./movie-form.component.scss */ "./src/app/movies-information/movie-form/movie-form.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MovieFormComponent);
    return MovieFormComponent;
}());



/***/ }),

/***/ "./src/app/movies-information/movies-information.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/movies-information/movies-information.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-movie-form (submitForm)=\"getMovies($event)\"></app-movie-form>\n<hr />\n<app-movie-form-result [data]=\"movies\"></app-movie-form-result>\n<hr />\n<app-last-ten-movie-form-requests\n  [data]=\"formRequests\"\n></app-last-ten-movie-form-requests>\n"

/***/ }),

/***/ "./src/app/movies-information/movies-information.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/movies-information/movies-information.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vdmllcy1pbmZvcm1hdGlvbi9tb3ZpZXMtaW5mb3JtYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/movies-information/movies-information.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/movies-information/movies-information.component.ts ***!
  \********************************************************************/
/*! exports provided: MoviesInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesInformationComponent", function() { return MoviesInformationComponent; });
/* harmony import */ var _movie_form_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movie-form.service */ "./src/app/movies-information/movie-form.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MoviesInformationComponent = /** @class */ (function () {
    function MoviesInformationComponent(movieFormService) {
        this.movieFormService = movieFormService;
        this.movies = [];
        this.formRequests = [];
    }
    MoviesInformationComponent.prototype.ngOnInit = function () {
        this.getLastTenFormRequests();
    };
    MoviesInformationComponent.prototype.getMovies = function (data) {
        var _this = this;
        this.movieFormService.getMovies(data).subscribe(function (response) {
            _this.movies = response;
            _this.getLastTenFormRequests();
        });
    };
    MoviesInformationComponent.prototype.getLastTenFormRequests = function () {
        var _this = this;
        this.movieFormService.getFormRequests().subscribe(function (data) {
            _this.formRequests = data;
        });
    };
    MoviesInformationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movies-information',
            template: __webpack_require__(/*! ./movies-information.component.html */ "./src/app/movies-information/movies-information.component.html"),
            styles: [__webpack_require__(/*! ./movies-information.component.scss */ "./src/app/movies-information/movies-information.component.scss")]
        }),
        __metadata("design:paramtypes", [_movie_form_service__WEBPACK_IMPORTED_MODULE_0__["MovieFormService"]])
    ], MoviesInformationComponent);
    return MoviesInformationComponent;
}());



/***/ }),

/***/ "./src/app/movies-information/movies-information.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/movies-information/movies-information.module.ts ***!
  \*****************************************************************/
/*! exports provided: MoviesInformationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesInformationModule", function() { return MoviesInformationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _movie_form_movie_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movie-form/movie-form.component */ "./src/app/movies-information/movie-form/movie-form.component.ts");
/* harmony import */ var _movie_form_result_movie_form_result_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./movie-form-result/movie-form-result.component */ "./src/app/movies-information/movie-form-result/movie-form-result.component.ts");
/* harmony import */ var _last_ten_movie_form_requests_last_ten_movie_form_requests_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./last-ten-movie-form-requests/last-ten-movie-form-requests.component */ "./src/app/movies-information/last-ten-movie-form-requests/last-ten-movie-form-requests.component.ts");
/* harmony import */ var _movies_information_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./movies-information.component */ "./src/app/movies-information/movies-information.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var MoviesInformationModule = /** @class */ (function () {
    function MoviesInformationModule() {
    }
    MoviesInformationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _movie_form_movie_form_component__WEBPACK_IMPORTED_MODULE_3__["MovieFormComponent"],
                _movie_form_result_movie_form_result_component__WEBPACK_IMPORTED_MODULE_4__["MovieFormResultComponent"],
                _last_ten_movie_form_requests_last_ten_movie_form_requests_component__WEBPACK_IMPORTED_MODULE_5__["LastTenMovieFormRequestsComponent"],
                _movies_information_component__WEBPACK_IMPORTED_MODULE_6__["MoviesInformationComponent"]
            ],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
            exports: [_movies_information_component__WEBPACK_IMPORTED_MODULE_6__["MoviesInformationComponent"]]
        })
    ], MoviesInformationModule);
    return MoviesInformationModule;
}());



/***/ }),

/***/ "./src/app/shared/constants.ts":
/*!*************************************!*\
  !*** ./src/app/shared/constants.ts ***!
  \*************************************/
/*! exports provided: movieTypes, plotTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "movieTypes", function() { return movieTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plotTypes", function() { return plotTypes; });
var movieTypes = [
    {
        label: 'Action',
        value: 'Action'
    },
    {
        label: 'Triler',
        value: 'Triler'
    },
    {
        label: 'Comedy',
        value: 'Comedy'
    }
];
var plotTypes = [
    {
        label: 'Full',
        value: 'Full'
    },
    {
        label: 'Short',
        value: 'Short'
    }
];


/***/ }),

/***/ "./src/app/shared/error-message/error-message.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/shared/error-message/error-message.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"error-msg\">\r\n  <span *ngIf=\"errorConfig.formControl.hasError('required')\">\r\n    {{ errorConfig.field }}\r\n    <span> is required! </span>\r\n  </span>\r\n\r\n  <span *ngIf=\"errorConfig.formControl.hasError('pattern')\">\r\n    <span *ngIf=\"errorConfig.patternMsg === 'invalid'\">\r\n      {{ errorConfig.field }}\r\n      <span>\r\n        is not valid!\r\n      </span>\r\n    </span>\r\n    <span *ngIf=\"errorConfig.patternMsg === 'number'\">\r\n      {{ errorConfig.field }}\r\n      <span> is not valid. Enter valid valid number value!</span>\r\n    </span>\r\n    <span *ngIf=\"errorConfig.patternMsg === 'date'\">\r\n      {{ errorConfig.field }}\r\n      <span> is not valid. Enter valid date!</span>\r\n    </span>\r\n  </span>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/error-message/error-message.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/shared/error-message/error-message.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error-msg {\n  font-family: ClanPro-Book;\n  color: red;\n  font-size: 10px;\n  line-height: 14px;\n  padding: 0px;\n  margin: 0px 0 10px;\n  transition: 0.28s;\n  overflow: hidden;\n  margin-top: 4px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Vycm9yLW1lc3NhZ2UvQzpcXFVzZXJzXFxhYmMtc29mdHdhcmUtYXJtaW5cXERlc2t0b3BcXG1vdmllcy1pbmZvcm1hdGlvbi10ZXN0LXByb2plY3RcXGZyb250ZW5kL3NyY1xcYXBwXFxzaGFyZWRcXGVycm9yLW1lc3NhZ2VcXGVycm9yLW1lc3NhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBeUI7RUFDekIsVUFBVTtFQUNWLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9lcnJvci1tZXNzYWdlL2Vycm9yLW1lc3NhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3ItbXNnIHtcclxuICAgIGZvbnQtZmFtaWx5OiBDbGFuUHJvLUJvb2s7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBtYXJnaW46IDBweCAwIDEwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjI4cztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/error-message/error-message.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/error-message/error-message.component.ts ***!
  \*****************************************************************/
/*! exports provided: ErrorMessageTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMessageTemplateComponent", function() { return ErrorMessageTemplateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorMessageTemplateComponent = /** @class */ (function () {
    function ErrorMessageTemplateComponent() {
    }
    ErrorMessageTemplateComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ErrorMessageTemplateComponent.prototype, "errorConfig", void 0);
    ErrorMessageTemplateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error-message',
            template: __webpack_require__(/*! ./error-message.component.html */ "./src/app/shared/error-message/error-message.component.html"),
            styles: [__webpack_require__(/*! ./error-message.component.scss */ "./src/app/shared/error-message/error-message.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ErrorMessageTemplateComponent);
    return ErrorMessageTemplateComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _error_message_error_message_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error-message/error-message.component */ "./src/app/shared/error-message/error-message.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_error_message_error_message_component__WEBPACK_IMPORTED_MODULE_2__["ErrorMessageTemplateComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: [_error_message_error_message_component__WEBPACK_IMPORTED_MODULE_2__["ErrorMessageTemplateComponent"]]
        })
    ], SharedModule);
    return SharedModule;
}());



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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    baseEndPoint: 'http://localhost:3000/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\abc-software-armin\Desktop\movies-information-test-project\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map