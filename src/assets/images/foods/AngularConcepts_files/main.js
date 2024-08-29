"use strict";
(self["webpackChunkangularConcepts"] = self["webpackChunkangularConcepts"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    {
        path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
    },
    {
        path: 'search/:searchTerm', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header.component */ 3482);



class AppComponent {
    constructor() {
        this.title = 'angularConcepts';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header")(1, "router-outlet");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ 3482);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var ng_starrating__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-starrating */ 8197);
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search/search.component */ 6392);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);








class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        ng_starrating__WEBPACK_IMPORTED_MODULE_7__.RatingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent,
        _home_home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent,
        _search_search_component__WEBPACK_IMPORTED_MODULE_4__.SearchComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        ng_starrating__WEBPACK_IMPORTED_MODULE_7__.RatingModule] }); })();


/***/ }),

/***/ 3482:
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 9, vars: 0, consts: [[1, "container"], ["href", "#", "routerLink", "/", 1, "logo"], ["href", "#", "routerLink", "/cart-page"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header")(1, "div", 0)(2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Food Mine!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav")(5, "ul")(6, "li")(7, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: ["header[_ngcontent-%COMP%] {\n  background: white;\n  padding: 0;\n  border-bottom: 1px solid #e72929;\n}\n\na[_ngcontent-%COMP%] {\n  color: #af1313;\n}\n\na[_ngcontent-%COMP%]:hover {\n  background-color: #e72929;\n  color: white;\n}\n\n.container[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n  align-items: stretch;\n}\n\na.logo[_ngcontent-%COMP%] {\n  font-weight: bold;\n  padding: 1em;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin: 0;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 1em;\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL0Zvb2QlMjBBcHBsaWNhdGlvbiUyMEFuZ3VsYXIvQW5ndWxhci9hbmd1bGFyQ29uY2VwdHMvc3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0NBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNDLHlCQUFBO0VBQ0EsWUFBQTtBQ0NEOztBREVBO0VBRUUsY0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG9CQUFBO0FDQUY7O0FESUE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUNERjs7QURJQTtFQUNFLHFCQUFBO0VBQ0EsU0FBQTtBQ0RGOztBRElBO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0FDREYiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVye1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzowO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U3MjkyOTtcbn1cblxuYXtcbiAgY29sb3I6ICNhZjEzMTM7XG59XG5cbmE6aG92ZXJ7XG4gYmFja2dyb3VuZC1jb2xvcjogI2U3MjkyOTtcbiBjb2xvcjogd2hpdGU7XG59XG5cbi5jb250YWluZXJcbntcbiAgbWFyZ2luOjAgYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczpzdHJldGNoIDtcblxufVxuXG5hLmxvZ297XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAxZW07XG59XG5cbm5hdiB1bHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBtYXJnaW46IDA7XG59XG5cbm5hdiB1bCBsaSBhIHtcbiAgcGFkZGluZzoxZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbiIsImhlYWRlciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U3MjkyOTtcbn1cblxuYSB7XG4gIGNvbG9yOiAjYWYxMzEzO1xufVxuXG5hOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3MjkyOTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG59XG5cbmEubG9nbyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAxZW07XG59XG5cbm5hdiB1bCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xufVxuXG5uYXYgdWwgbGkgYSB7XG4gIHBhZGRpbmc6IDFlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufSJdfQ== */"] });


/***/ }),

/***/ 5067:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_food_food_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/food/food.service */ 6262);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var ng_starrating__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-starrating */ 8197);
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../search/search.component */ 6392);






function HomeComponent_li_2_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const origin_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", origin_r3, " ");
} }
function HomeComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li")(1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2)(4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4)(7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " \u2764 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "star-rating", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 6)(11, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, HomeComponent_li_2_span_12_Template, 2, 1, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 8)(14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " \u23F0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 9)(18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](20, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const food_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", food_r1.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", food_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("favorite ", food_r1.favorite ? "" : "not", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", food_r1.stars)("totalstars", 5)("readonly", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", food_r1.origins);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", food_r1.cookTime, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](20, 11, food_r1.price), " ");
} }
class HomeComponent {
    constructor(foodService, route) {
        this.foodService = foodService;
        this.route = route;
        this.foods = [];
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            if (params['searchTerm']) {
                const searchTerm = params['searchTerm'].toLowerCase();
                this.foods = this.foodService.getAll().filter(food => food.name.toLowerCase().includes(searchTerm));
            }
            else {
                this.foods = this.foodService.getAll();
            }
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_food_food_service__WEBPACK_IMPORTED_MODULE_0__.FoodService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute)); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 3, vars: 1, consts: [[4, "ngFor", "ngForOf"], ["alt", "foodimage", 3, "src"], [1, "content"], [1, "name"], [1, "stars"], ["checkedcolor", "red", "uncheckedcolor", "black", "size", "18px", 3, "value", "totalstars", "readonly"], [1, "product-item-footer"], [1, "origins"], [1, "cook-time"], [1, "price"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-search");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, HomeComponent_li_2_Template, 21, 13, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.foods);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, ng_starrating__WEBPACK_IMPORTED_MODULE_5__.StarRatingComponent, _search_search_component__WEBPACK_IMPORTED_MODULE_1__.SearchComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CurrencyPipe], styles: ["ul[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  list-style-type: none;\n  padding: 0;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  height: 23.5rem;\n  width: 20rem;\n  border: 1px solid whitesmoke;\n  border-radius: 1rem;\n  margin: 0.5rem;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  color: #e72929;\n}\n\nli[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n  cursor: pointer;\n}\n\n.content[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  position: relative;\n}\n\n.favorite[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.5rem;\n  right: 1rem;\n  font-size: 1.2rem;\n}\n\n.favorite.not[_ngcontent-%COMP%] {\n  color: grey;\n}\n\n.stars[_ngcontent-%COMP%] {\n  margin-bottom: 0.2rem;\n}\n\n.product-item-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.origins[_ngcontent-%COMP%] {\n  flex: 9;\n}\n\n.origins[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  border-radius: 2rem;\n  background-color: whitesmoke;\n  display: inline-block;\n  font-size: 0.7rem;\n  color: grey;\n  margin-right: 0.3rem;\n}\n\n.cook-time[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  flex: 3;\n  text-align: right;\n}\n\n.price[_ngcontent-%COMP%] {\n  color: #414141;\n  margin-top: 0.7rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi9Gb29kJTIwQXBwbGljYXRpb24lMjBBbmd1bGFyL0FuZ3VsYXIvYW5ndWxhckNvbmNlcHRzL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0FDQUY7O0FESUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDREY7O0FESUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQ0RGOztBRElBO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtBQ0RGOztBRElBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDREY7O0FESUE7RUFDRSxXQUFBO0FDREY7O0FER0E7RUFDRSxxQkFBQTtBQ0FGOztBREdBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNBRjs7QURHQTtFQUNFLE9BQUE7QUNBRjs7QURHQTtFQUNFLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0FDQUY7O0FER0E7RUFDRSxpQkFBQTtFQUNBLE9BQUE7RUFDQSxpQkFBQTtBQ0FGOztBRElBO0VBRUUsY0FBQTtFQUNBLGtCQUFBO0FDRkYiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInVsXG57XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZzowO1xuXG59XG5cbnVsIGxpIGF7XG4gIGhlaWdodDogMjMuNXJlbTtcbiAgd2lkdGg6IDIwcmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZXNtb2tlO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBtYXJnaW46IDAuNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY29sb3I6ICAjZTcyOTI5O1xufVxuXG5saSBhIDpob3ZlcntcbiAgb3BhY2l0eTogMC45O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jb250ZW50e1xuICBwYWRkaW5nOjAuNXJlbSAxcmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5mYXZvcml0ZXtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6MC41cmVtO1xuICByaWdodDogMXJlbTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbi5mYXZvcml0ZS5ub3R7XG4gIGNvbG9yOiBncmV5XG59XG4uc3RhcnN7XG4gIG1hcmdpbi1ib3R0b206IC4ycmVtO1xufVxuXG4ucHJvZHVjdC1pdGVtLWZvb3RlcntcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ub3JpZ2luc3tcbiAgZmxleDogOTtcbn1cblxuLm9yaWdpbnMgc3BhbntcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDAuN3JlbTtcbiAgY29sb3I6IGdyZXk7XG4gIG1hcmdpbi1yaWdodDogMC4zcmVtO1xufVxuXG4uY29vay10aW1le1xuICBmb250LXNpemU6LjhyZW0gO1xuICBmbGV4OiAzO1xuICB0ZXh0LWFsaWduOiByaWdodDtcblxufVxuXG4ucHJpY2V7XG5cbiAgY29sb3I6ICM0MTQxNDE7XG4gIG1hcmdpbi10b3A6LjdyZW07XG59XG5cbiIsInVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBwYWRkaW5nOiAwO1xufVxuXG51bCBsaSBhIHtcbiAgaGVpZ2h0OiAyMy41cmVtO1xuICB3aWR0aDogMjByZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlc21va2U7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIG1hcmdpbjogMC41cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBjb2xvcjogI2U3MjkyOTtcbn1cblxubGkgYSA6aG92ZXIge1xuICBvcGFjaXR5OiAwLjk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNvbnRlbnQge1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZmF2b3JpdGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMC41cmVtO1xuICByaWdodDogMXJlbTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbi5mYXZvcml0ZS5ub3Qge1xuICBjb2xvcjogZ3JleTtcbn1cblxuLnN0YXJzIHtcbiAgbWFyZ2luLWJvdHRvbTogMC4ycmVtO1xufVxuXG4ucHJvZHVjdC1pdGVtLWZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm9yaWdpbnMge1xuICBmbGV4OiA5O1xufVxuXG4ub3JpZ2lucyBzcGFuIHtcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDAuN3JlbTtcbiAgY29sb3I6IGdyZXk7XG4gIG1hcmdpbi1yaWdodDogMC4zcmVtO1xufVxuXG4uY29vay10aW1lIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGZsZXg6IDM7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ucHJpY2Uge1xuICBjb2xvcjogIzQxNDE0MTtcbiAgbWFyZ2luLXRvcDogMC43cmVtO1xufSJdfQ== */"] });


/***/ }),

/***/ 6392:
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchComponent": () => (/* binding */ SearchComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class SearchComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
        this.searchTerm = "";
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            if (params['searchTerm']) {
                this.searchTerm = params['searchTerm'];
            }
        });
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
SearchComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], decls: 4, vars: 1, consts: [["type", "text", "placeholder", "Search Food Mine!", 3, "value"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.searchTerm);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWFyY2guY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6262:
/*!***********************************************!*\
  !*** ./src/app/services/food/food.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FoodService": () => (/* binding */ FoodService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class FoodService {
    constructor() { }
    getAll() {
        return [
            {
                id: 1,
                name: 'Pizza',
                cookTime: '10-20 min',
                price: 25,
                favorite: false,
                origins: ['italy'],
                stars: 4.5,
                imageUrl: 'assets/images/foods/pizza2.jpg',
                tags: ['FastFood', 'Pizza', 'Lunch'],
            },
            {
                id: 2,
                name: 'Meatball',
                price: 40,
                cookTime: '30-40 min',
                favorite: true,
                origins: ['persia', 'middle east', 'china'],
                stars: 4.7,
                imageUrl: 'assets/images/foods/meatball2.jpeg',
                tags: ['SlowFood', 'Lunch'],
            },
            {
                id: 3,
                name: 'Hamburger',
                price: 35,
                cookTime: '20-25 min',
                favorite: false,
                origins: ['germany', 'us'],
                stars: 3.5,
                imageUrl: 'assets/images/foods/hamburger5.jpeg',
                tags: ['FastFood', 'Hamburger'],
            },
            {
                id: 4,
                name: 'Fried Potatoes',
                price: 15,
                cookTime: '10-12 min',
                favorite: true,
                origins: ['belgium', 'france'],
                stars: 3.3,
                imageUrl: 'assets/images/foods/frenchfries4.jpeg',
                tags: ['FastFood', 'Fry'],
            },
            {
                id: 5,
                name: 'Chicken Soup',
                price: 20,
                cookTime: '40-50 min',
                favorite: false,
                origins: ['india', 'asia'],
                stars: 3.0,
                imageUrl: 'assets/images/foods/soup2.jpeg',
                tags: ['SlowFood', 'Soup'],
            },
            {
                id: 6,
                name: 'Vegetables Pizza',
                price: 22,
                cookTime: '20-30 min',
                favorite: false,
                origins: ['italy'],
                stars: 4.0,
                imageUrl: 'assets/images/foods/pizza1.avif',
                tags: ['FastFood', 'Pizza', 'Lunch'],
            },
        ];
    }
}
FoodService.ɵfac = function FoodService_Factory(t) { return new (t || FoodService)(); };
FoodService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FoodService, factory: FoodService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(1211), __webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map