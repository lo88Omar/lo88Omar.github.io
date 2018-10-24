webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__taches_taches_component__ = __webpack_require__("./src/app/taches/taches.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__new_tache_new_tache_component__ = __webpack_require__("./src/app/new-tache/new-tache.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__contacts_contacts_component__ = __webpack_require__("./src/app/contacts/contacts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__new_contact_new_contact_component__ = __webpack_require__("./src/app/new-contact/new-contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__users_users_component__ = __webpack_require__("./src/app/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__page_not_found_page_not_found_component__ = __webpack_require__("./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__detail_contact_detail_contact_component__ = __webpack_require__("./src/app/detail-contact/detail-contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__detail_user_detail_user_component__ = __webpack_require__("./src/app/detail-user/detail-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__gallery_gallery_component__ = __webpack_require__("./src/app/gallery/gallery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__edit_tache_edit_tache_component__ = __webpack_require__("./src/app/edit-tache/edit-tache.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__detail_tache_detail_tache_component__ = __webpack_require__("./src/app/detail-tache/detail-tache.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__edit_user_edit_user_component__ = __webpack_require__("./src/app/edit-user/edit-user.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: "login", component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */] },
    { path: "home", component: __WEBPACK_IMPORTED_MODULE_14__home_home_component__["a" /* HomeComponent */] },
    { path: "taches", component: __WEBPACK_IMPORTED_MODULE_4__taches_taches_component__["a" /* TachesComponent */] },
    { path: "new-tache", component: __WEBPACK_IMPORTED_MODULE_5__new_tache_new_tache_component__["a" /* NewTacheComponent */] },
    { path: "contacts", component: __WEBPACK_IMPORTED_MODULE_6__contacts_contacts_component__["a" /* ContactsComponent */] },
    { path: "new-contact", component: __WEBPACK_IMPORTED_MODULE_7__new_contact_new_contact_component__["a" /* NewContactComponent */] },
    { path: "register", component: __WEBPACK_IMPORTED_MODULE_8__register_register_component__["a" /* RegisterComponent */] },
    { path: "users", component: __WEBPACK_IMPORTED_MODULE_9__users_users_component__["a" /* UsersComponent */] },
    { path: "galeries", component: __WEBPACK_IMPORTED_MODULE_13__gallery_gallery_component__["a" /* GalleryComponent */] },
    { path: "detail-contact/:id", component: __WEBPACK_IMPORTED_MODULE_11__detail_contact_detail_contact_component__["a" /* DetailContactComponent */] },
    { path: "detail-user/:id", component: __WEBPACK_IMPORTED_MODULE_12__detail_user_detail_user_component__["a" /* DetailUserComponent */] },
    { path: "edit-user/:id", component: __WEBPACK_IMPORTED_MODULE_17__edit_user_edit_user_component__["a" /* EditUserComponent */] },
    { path: "edit-tache/:id", component: __WEBPACK_IMPORTED_MODULE_15__edit_tache_edit_tache_component__["a" /* EditTacheComponent */] },
    { path: "detail-tache/:id", component: __WEBPACK_IMPORTED_MODULE_16__detail_tache_detail_tache_component__["a" /* DetailTacheComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_10__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(routes, { enableTracing: true })
            ],
            declarations: [],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__taches_taches_component__ = __webpack_require__("./src/app/taches/taches.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__new_tache_new_tache_component__ = __webpack_require__("./src/app/new-tache/new-tache.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__contacts_contacts_component__ = __webpack_require__("./src/app/contacts/contacts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__new_contact_new_contact_component__ = __webpack_require__("./src/app/new-contact/new-contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__users_users_component__ = __webpack_require__("./src/app/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__detail_user_detail_user_component__ = __webpack_require__("./src/app/detail-user/detail-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__detail_contact_detail_contact_component__ = __webpack_require__("./src/app/detail-contact/detail-contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_routing_app_routing_module__ = __webpack_require__("./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__page_not_found_page_not_found_component__ = __webpack_require__("./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__gallery_gallery_component__ = __webpack_require__("./src/app/gallery/gallery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_authentication_service__ = __webpack_require__("./src/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_taches_service__ = __webpack_require__("./src/services/taches.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__edit_tache_edit_tache_component__ = __webpack_require__("./src/app/edit-tache/edit-tache.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__detail_tache_detail_tache_component__ = __webpack_require__("./src/app/detail-tache/detail-tache.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_galery_service__ = __webpack_require__("./src/services/galery.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_users_service__ = __webpack_require__("./src/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__edit_user_edit_user_component__ = __webpack_require__("./src/app/edit-user/edit-user.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_6__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_7__taches_taches_component__["a" /* TachesComponent */],
                __WEBPACK_IMPORTED_MODULE_8__new_tache_new_tache_component__["a" /* NewTacheComponent */],
                __WEBPACK_IMPORTED_MODULE_9__contacts_contacts_component__["a" /* ContactsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__new_contact_new_contact_component__["a" /* NewContactComponent */],
                __WEBPACK_IMPORTED_MODULE_11__users_users_component__["a" /* UsersComponent */],
                __WEBPACK_IMPORTED_MODULE_12__detail_user_detail_user_component__["a" /* DetailUserComponent */],
                __WEBPACK_IMPORTED_MODULE_13__detail_contact_detail_contact_component__["a" /* DetailContactComponent */],
                __WEBPACK_IMPORTED_MODULE_15__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_16__gallery_gallery_component__["a" /* GalleryComponent */],
                __WEBPACK_IMPORTED_MODULE_17__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_20__edit_tache_edit_tache_component__["a" /* EditTacheComponent */],
                __WEBPACK_IMPORTED_MODULE_21__detail_tache_detail_tache_component__["a" /* DetailTacheComponent */],
                __WEBPACK_IMPORTED_MODULE_24__edit_user_edit_user_component__["a" /* EditUserComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_14__app_routing_app_routing_module__["a" /* AppRoutingModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_18__services_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_19__services_taches_service__["a" /* TachesService */], __WEBPACK_IMPORTED_MODULE_22__services_galery_service__["a" /* GaleryService */], __WEBPACK_IMPORTED_MODULE_23__services_users_service__["a" /* UsersService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contacts/contacts.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/contacts/contacts.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  contacts works!\n</p>\n"

/***/ }),

/***/ "./src/app/contacts/contacts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactsComponent = /** @class */ (function () {
    function ContactsComponent() {
    }
    ContactsComponent.prototype.ngOnInit = function () {
    };
    ContactsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contacts',
            template: __webpack_require__("./src/app/contacts/contacts.component.html"),
            styles: [__webpack_require__("./src/app/contacts/contacts.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactsComponent);
    return ContactsComponent;
}());



/***/ }),

/***/ "./src/app/detail-contact/detail-contact.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/detail-contact/detail-contact.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  detail-contact works!\n</p>\n"

/***/ }),

/***/ "./src/app/detail-contact/detail-contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DetailContactComponent = /** @class */ (function () {
    function DetailContactComponent() {
    }
    DetailContactComponent.prototype.ngOnInit = function () {
    };
    DetailContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-detail-contact',
            template: __webpack_require__("./src/app/detail-contact/detail-contact.component.html"),
            styles: [__webpack_require__("./src/app/detail-contact/detail-contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DetailContactComponent);
    return DetailContactComponent;
}());



/***/ }),

/***/ "./src/app/detail-tache/detail-tache.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/detail-tache/detail-tache.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse myColor navbar-fixed-top\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand active\">omar.lo.ch</a>\n      </div>\n      <div>\n        <ul class=\"nav navbar-nav\">\n          <li><a class=\"clikable\" routerLink=\"/taches\">Tâches</a></li>\n          <li><a class=\"clikable\" routerLink=\"/contacts\">Contacts</a></li>\n          <li><a class=\"clikable\" routerLink=\"/galeries\">Galeries</a></li>\n          <li *ngIf=\"authService.isAdmin()\"><a class=\"clikable\" routerLink=\"/users\">Utilisateurs</a></li>\n          <li *ngIf=\"authService.isAdmin()\"><a class=\"clikable\" routerLink=\"/roles\">Rôles</a></li>\n        </ul>\n      </div>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a class=\"clikable\"><span class=\"glyphicon glyphicon-user\"></span> Sign Up</a></li>\n        <li><a class=\"clikable\" (click)=\"onLogout()\"><span class=\"glyphicon glyphicon-log-in\"></span> Logout</a></li>\n        <li><a>{{authService.getUserConnected()}}\n            <span class=\"glyphicon glyphicon-user\"></span>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n<div class=\"container spacer\">\n  <div class=\"col-md-8 col-md-offset-2\">\n      <div class=\"panel panel-primary\">\n          <div class=\"panel-heading\">Détail de la tache </div>\n          <div class=\"panel-body\">\n            <div class=\"form-group\">\n              <label class=\"control-label\">\n                ID: <span class=\"badge\">{{tache.id}}</span>\n              </label>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label\">Nom de la tâche:\n                    <span class=\"badge\">{{tache.nom}}</span>\n                </label>\n            </div>\n            <div class=\"form-group\">\n              <label class=\"control-label\">Statut:</label>\n              <div class=\"form-control\">\n                  <label class=\"control-label\">\n                    <input [disabled]=true type=\"radio\" name=\"statut\"\n                      [checked]=\"tache.statut\"> Ouvert\n                    </label>\n                    <label class=\"control-label\">\n                      <input [disabled]=true type=\"radio\" name=\"statut\"\n                          [checked]=\"!tache.statut\"> Fermé\n                    </label>\n              </div>\n\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label\">Description:\n                    <span class=\"badge\">{{tache.nom}}</span>\n                </label>\n            </div>\n            <textarea disabled = true class=\"form-control\" name=\"description\" [(ngModel)]=\"tache.description\"\n                      cols=\"30\" rows=\"5\"></textarea> <!-- [defaultValue]=\"tache.description\" égale [(ngModel)] =\"tache.description\" -->\n            <div class=\"form-group\">\n              <label class=\"control-label\"> Date de création:\n                <span class=\"badge\">{{tache.dateCreation | date : \"dd-MM-yyyy\"}}</span>\n              </label>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label\"> Date d'expiration:\n                  <span class=\"badge\"> {{tache.dateExpiration | date : \"dd-MM-yyyy\"}}</span>\n                </label>\n              </div>\n            <div class=\"form-group\">\n                <button class=\"btn btn-primary\" (click)=\"onGoBack()\">Retour</button>\n            </div>\n          </div>\n        </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/detail-tache/detail-tache.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailTacheComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_model_tache__ = __webpack_require__("./src/model/model.tache.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_authentication_service__ = __webpack_require__("./src/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_taches_service__ = __webpack_require__("./src/services/taches.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DetailTacheComponent = /** @class */ (function () {
    function DetailTacheComponent(route, location, authService, tacheService, router) {
        this.route = route;
        this.location = location;
        this.authService = authService;
        this.tacheService = tacheService;
        this.router = router;
        this.tache = new __WEBPACK_IMPORTED_MODULE_3__model_model_tache__["a" /* Tache */]();
    }
    DetailTacheComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this.route.snapshot.params["id"];
        var token = this.authService.getToken();
        this.tacheService.getTache(token, id).subscribe(function (data) {
            _this.tache = data;
            console.log(_this.tache.statut);
        }, function (err) {
            console.log(err);
            _this.onGoBack();
        });
    };
    DetailTacheComponent.prototype.onLogout = function () {
        this.authService.logout();
        this.router.navigateByUrl("/login");
    };
    DetailTacheComponent.prototype.onGoBack = function () { this.location.back(); };
    DetailTacheComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-detail-tache',
            template: __webpack_require__("./src/app/detail-tache/detail-tache.component.html"),
            styles: [__webpack_require__("./src/app/detail-tache/detail-tache.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_4__services_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_5__services_taches_service__["a" /* TachesService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], DetailTacheComponent);
    return DetailTacheComponent;
}());



/***/ }),

/***/ "./src/app/detail-user/detail-user.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/detail-user/detail-user.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  detail-user works!\n</p>\n"

/***/ }),

/***/ "./src/app/detail-user/detail-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("./src/services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailUserComponent = /** @class */ (function () {
    function DetailUserComponent(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    DetailUserComponent.prototype.ngOnInit = function () {
        if (!this.authService.isAdmin()) {
            this.router.navigateByUrl("/login");
        }
    };
    DetailUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-detail-user',
            template: __webpack_require__("./src/app/detail-user/detail-user.component.html"),
            styles: [__webpack_require__("./src/app/detail-user/detail-user.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]])
    ], DetailUserComponent);
    return DetailUserComponent;
}());



/***/ }),

/***/ "./src/app/edit-tache/edit-tache.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/edit-tache/edit-tache.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse myColor navbar-fixed-top\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand active\">omar.lo.ch</a>\n      </div>\n      <div>\n        <ul class=\"nav navbar-nav\">\n          <li><a class=\"clikable\" routerLink=\"/taches\">Tâches</a></li>\n          <li><a class=\"clikable\" routerLink=\"/contacts\">Contacts</a></li>\n          <li><a class=\"clikable\" routerLink=\"/galeries\">Galeries</a></li>\n          <li *ngIf=\"authService.isAdmin()\"><a class=\"clikable\" routerLink=\"/users\">Utilisateurs</a></li>\n          <li *ngIf=\"authService.isAdmin()\"><a class=\"clikable\" routerLink=\"/roles\">Rôles</a></li>\n        </ul>\n      </div>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a class=\"clikable\"><span class=\"glyphicon glyphicon-user\"></span> Sign Up</a></li>\n        <li><a class=\"clikable\" (click)=\"onLogout()\"><span class=\"glyphicon glyphicon-log-in\"></span> Logout</a></li>\n        <li><a>{{authService.getUserConnected()}}\n            <span class=\"glyphicon glyphicon-user\"></span>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n<div class=\"container-fluid spacer\">\n  <div class=\"col-md-8 col-md-offset-2\">\n      <div class=\"panel panel-primary\">\n          <div class=\"panel-heading\">Nouvelle Tâche</div>\n          <div class=\"panel-body\">\n            <form #f=\"ngForm\" (ngSubmit)=\"onUpdate()\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Nom de la tâche</label>\n                <input name=\"nom\" [(ngModel)]=\"tache.nom\" class=\"form-control\"\n                  type=\"text\" required minlength=\"2\" #nom=\"ngModel\">\n              </div>\n              <div class=\"form-group\">\n                  <label class=\"control-label\">Statut:</label>\n                  <div class=\"form-control\">\n                      <label class=\"control-label\">\n                          <input type=\"radio\" name=\"statut\" [value]=true\n                          [(ngModel)]=\"tache.statut\"> Ouvert\n                        </label>\n                        <label class=\"control-label\">\n                            <input type=\"radio\" name=\"statut\" [value]=false\n                            [(ngModel)]=\"tache.statut\"> Fermé\n                        </label>\n                  </div>\n\n                </div>\n              <div class=\"form-group\">\n                  <label class=\"control-label\">Description de la tâche</label>\n                    <textarea class=\"form-control\" name=\"description\" [(ngModel)]=\"tache.description\"\n                      cols=\"30\" rows=\"5\"></textarea>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"control-label\">Date d'expiration</label>\n                    <input class=\"form-control\" type=\"date\" #dateExpiration=\"ngModel\"\n                        [(ngModel)]=\"tache.dateExpiration\" name=\"dateExpiration\" required>\n                </div>\n                <button [disabled]=\"!f.valid\" type=\"submit\" class=\"btn btn-primary\">Enregistrer</button>\n            </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/edit-tache/edit-tache.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditTacheComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("./src/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_taches_service__ = __webpack_require__("./src/services/taches.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_model_tache__ = __webpack_require__("./src/model/model.tache.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditTacheComponent = /** @class */ (function () {
    function EditTacheComponent(authService, tacheService, location, route, router) {
        this.authService = authService;
        this.tacheService = tacheService;
        this.location = location;
        this.route = route;
        this.router = router;
        this.tache = new __WEBPACK_IMPORTED_MODULE_3__model_model_tache__["a" /* Tache */]();
    }
    EditTacheComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.authService.isAdmin()) {
            this.router.navigateByUrl("/login");
        }
        var token = this.authService.getToken();
        //const id = +this.route.snapshot.paramMap.get('id');
        var id = +this.route.snapshot.params["id"];
        this.tacheService.getTache(token, id).subscribe(function (data) {
            _this.tache = data;
            console.log(_this.tache.statut);
        }, function (error) {
            console.log(error);
        });
    };
    EditTacheComponent.prototype.onUpdate = function () {
        var _this = this;
        console.log(this.tache.statut);
        console.log(this.tache);
        var token = this.authService.getToken();
        this.tacheService.updateTache(token, this.tache).subscribe(function (data) {
            console.log(data);
            _this.location.back();
        }, function (err) {
            console.log(err);
        });
    };
    EditTacheComponent.prototype.onLogout = function () {
        this.authService.logout();
        this.router.navigateByUrl("/login");
    };
    EditTacheComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-tache',
            template: __webpack_require__("./src/app/edit-tache/edit-tache.component.html"),
            styles: [__webpack_require__("./src/app/edit-tache/edit-tache.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_2__services_taches_service__["a" /* TachesService */], __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]])
    ], EditTacheComponent);
    return EditTacheComponent;
}());



/***/ }),

/***/ "./src/app/edit-user/edit-user.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/edit-user/edit-user.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  edit-user works!\n</p>\n"

/***/ }),

/***/ "./src/app/edit-user/edit-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditUserComponent = /** @class */ (function () {
    function EditUserComponent() {
    }
    EditUserComponent.prototype.ngOnInit = function () {
    };
    EditUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-user',
            template: __webpack_require__("./src/app/edit-user/edit-user.component.html"),
            styles: [__webpack_require__("./src/app/edit-user/edit-user.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EditUserComponent);
    return EditUserComponent;
}());



/***/ }),

/***/ "./src/app/gallery/gallery.component.css":
/***/ (function(module, exports) {

module.exports = ".cadre{\n  height: 250px;\n}\n"

/***/ }),

/***/ "./src/app/gallery/gallery.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse myColor navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand active\">omar.lo.ch</a>\n    </div>\n    <div>\n      <ul class=\"nav navbar-nav\">\n        <li><a class=\"clikable\" routerLink=\"/taches\">Tâches</a></li>\n        <li><a class=\"clikable\" routerLink=\"/contacts\">Contacts</a></li>\n        <li><a class=\"clikable\" routerLink=\"/galeries\">Galeries</a></li>\n        <li *ngIf=\"authService.isAdmin()\"><a class=\"clikable\" routerLink=\"/users\">Utilisateurs</a></li>\n        <li *ngIf=\"authService.isAdmin()\"><a class=\"clikable\" routerLink=\"/roles\">Rôles</a></li>\n      </ul>\n    </div>\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li><a class=\"clikable\"><span class=\"glyphicon glyphicon-user\"></span> Sign Up</a></li>\n      <li><a class=\"clikable\" (click)=\"onLogout()\"><span class=\"glyphicon glyphicon-log-in\"></span> Logout</a></li>\n      <li><a>{{authService.getUserConnected()}}\n          <span class=\"glyphicon glyphicon-user\"></span>\n        </a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<div class=\"container-fluid spacer\">\n  <div class=\"panel panel-primary\">\n    <div class=\"panel-heading myCenter\">Liste des photos</div>\n    <div class=\"panel-body\">\n      <form #f=\"ngForm\" (ngSubmit)=\"onChercher()\">\n        <div class=\"form-group\">\n          <input class=\"input\" name=\"motCle\" [(ngModel)]=\"motCle\"\n            type=\"text\" placeholder=\"Chercher les photos\" required>\n          <button [disabled]=\"!f.valid\" class=\"btn btn-primary btnRcherche\" type=\"submit\">\n            <span class=\"glyphicon glyphicon-search\"></span>\n          </button>\n        </div>\n      </form>\n      <div class=\"row\">\n        <div *ngFor= \"let photo of listePhotos?.hits\" class=\"col-md-3\">\n          <div class=\"panel panel-primary cadre\">\n            <div class=\"panel-heading\">\n              <img src=\"{{photo.userImageURL}}\" class=\"img-circle\" width=\"50\" height=\"50\">\n              <span>{{photo.user}}</span>\n            </div>\n            <div class=\"panel-body clikable\" >\n              <div>\n                  <p><strong>Tags</strong>: {{getTags(photo.tags)}}</p>\n              </div>\n              <img src=\"{{photo.previewURL}}\">\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"container\">\n        <ul class=\"nav nav-pills\">\n          <li *ngFor=\"let p of totalPages; let i = index\"\n            [ngClass]=\"{'active': pageCourrente == i + 1}\">\n            <a (click)=\"goToPage(i)\" class=\"clikable\">{{i}}</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/gallery/gallery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_galery_service__ = __webpack_require__("./src/services/galery.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("./src/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GalleryComponent = /** @class */ (function () {
    function GalleryComponent(galeryService, authService, router) {
        this.galeryService = galeryService;
        this.authService = authService;
        this.router = router;
        this.motCle = "";
        this.pageCourrente = 1;
        this.size = 10;
    }
    GalleryComponent.prototype.ngOnInit = function () {
    };
    GalleryComponent.prototype.onLogout = function () {
        this.router.navigateByUrl("/login");
    };
    GalleryComponent.prototype.onChercher = function () {
        var _this = this;
        this.galeryService.getPhotos(this.motCle, this.pageCourrente, this.size).subscribe(function (data) {
            console.log(data);
            _this.listePhotos = data;
            var nbPages = _this.listePhotos.totalHits / _this.size;
            if (_this.listePhotos.totalHits % _this.size != 0) {
                nbPages = Math.trunc(nbPages);
                ++nbPages;
            }
            /*
            if (this.listePhotos.totalHits % this.size != 0) {
              nbPages = Math.trunc(nbPages) + 1;
            }*/
            _this.totalPages = new Array(nbPages);
        }, function (err) {
            console.log(err);
        });
    };
    GalleryComponent.prototype.getTags = function (tags) {
        return tags.length <= 20 ? tags : this.getSortStr(tags);
    };
    GalleryComponent.prototype.getSortStr = function (tags) {
        var s = "";
        for (var i = 0; i <= 20; i++) {
            s += tags.charAt(i);
        }
        return s + "...";
    };
    GalleryComponent.prototype.goToPage = function (index) {
        this.pageCourrente = index + 1;
        this.onChercher();
    };
    GalleryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__("./src/app/gallery/gallery.component.html"),
            styles: [__webpack_require__("./src/app/gallery/gallery.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_galery_service__["a" /* GaleryService */],
            __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse myColor navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand active\">omar.lo.ch</a>\n    </div>\n    <div *ngIf=\"mode == 1\">\n      <ul class=\"nav navbar-nav\">\n        <li><a class=\"clikable\" routerLink=\"/taches\">Tâches</a></li>\n        <li><a class=\"clikable\" routerLink=\"/contacts\">Contacts</a></li>\n        <li><a class=\"clikable\" routerLink=\"/galeries\">Galeries</a></li>\n        <li *ngIf=\"authService.isAdmin()\"><a class=\"clikable\" routerLink=\"/users\">Utilisateurs</a></li>\n        <li *ngIf=\"authService.isAdmin()\"><a class=\"clikable\" routerLink=\"/roles\">Rôles</a></li>\n      </ul>\n    </div>\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li><a class=\"clikable\"><span class=\"glyphicon glyphicon-user\"></span> Sign Up</a></li>\n      <li><a class=\"clikable\" (click)=\"goBack()\"><span class=\"glyphicon glyphicon-log-in\"></span> Logout</a></li>\n      <li><a>{{authService.getUserConnected()}}\n          <span class=\"glyphicon glyphicon-user\"></span>\n        </a>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__ = __webpack_require__("./src/services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(location, router, authService) {
        this.location = location;
        this.router = router;
        this.authService = authService;
        this.mode = 1;
    }
    HomeComponent.prototype.ngOnInit = function () { };
    //onGoTaches(){ this.router.navigate(["/taches"]);}
    HomeComponent.prototype.goBack = function () {
        //this.location.back();
        this.authService.logout();
        this.router.navigateByUrl("/login");
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<p></p>\n<div></div>\n<div class=\"container\">\n  <div class=\"alert alert-danger\" *ngIf=\"mode == 1\">\n    <strong>Le nom d'utilisateur ou le mot de passe des invalide!!</strong>\n  </div>\n  <div class=\"col-md-6 col-md-offset-3 spacer\">\n      <div class=\"panel panel-primary\">\n          <div class=\"panel-heading myCenter\"> <h4>Authentification</h4> </div>\n          <div class=\"panel-body\">\n            <form #f=\"ngForm\" (ngSubmit)=\"onLogin(f.value)\">\n              <div class=\"form-group\">\n                <label class=\"control-label\"></label>\n                <label class=\"control-label\"></label>\n                <input (input)=\"setMode()\" class=\"form-control\" name=\"username\" type=\"text\" placeholder=\"Username\" ngModel required>\n              </div>\n              <div class=\"form-group\">\n                  <label class=\"control-label\"></label>\n                <input (input)=\"setMode()\"  class=\"form-control\" name=\"password\" type=\"password\" placeholder=\"Password\" ngModel required>\n                <label class=\"control-label\"></label>\n                <label class=\"control-label\"></label>\n              </div>\n              <button [disabled]=\"!f.valid\" class=\"btn btn-danger\" type=\"submit\">Login</button>\n              <button routerLink=\"/register\" class=\"btn btn-success\" type=\"submit\">S'enregistrer</button>\n            </form>\n          </div>\n        </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("./src/services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.mode = 0;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLogin = function (dataForm) {
        var _this = this;
        this.authService.login(dataForm).subscribe(function (res) {
            console.log(res);
            var jwt = res.headers.get("authorization");
            console.log(jwt);
            _this.authService.saveToken(jwt);
            //this.router.navigateByUrl("/home");
            _this.router.navigate(["/home"]);
        }, function (err) {
            console.log(err);
            _this.mode = 1;
        });
    };
    LoginComponent.prototype.setMode = function () {
        this.mode = 0;
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/new-contact/new-contact.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/new-contact/new-contact.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  new-contact works!\n</p>\n"

/***/ }),

/***/ "./src/app/new-contact/new-contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewContactComponent = /** @class */ (function () {
    function NewContactComponent() {
    }
    NewContactComponent.prototype.ngOnInit = function () {
    };
    NewContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-new-contact',
            template: __webpack_require__("./src/app/new-contact/new-contact.component.html"),
            styles: [__webpack_require__("./src/app/new-contact/new-contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NewContactComponent);
    return NewContactComponent;
}());



/***/ }),

/***/ "./src/app/new-tache/new-tache.component.css":
/***/ (function(module, exports) {

module.exports = ".myPosition{\n  float: right;\n}\n"

/***/ }),

/***/ "./src/app/new-tache/new-tache.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse myColor navbar-fixed-top\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand active\">omar.lo.ch</a>\n      </div>\n      <div>\n        <ul class=\"nav navbar-nav\">\n          <li><a class=\"clikable\" routerLink=\"/taches\">Tâches</a></li>\n          <li><a class=\"clikable\" routerLink=\"/contacts\">Contacts</a></li>\n          <li><a class=\"clikable\" routerLink=\"/galeries\">Galeries</a></li>\n          <li *ngIf=\"authService.isAdmin()\"><a class=\"clikable\" routerLink=\"/users\">Utilisateurs</a></li>\n          <li *ngIf=\"authService.isAdmin()\"><a class=\"clikable\" routerLink=\"/roles\">Rôles</a></li>\n        </ul>\n      </div>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a class=\"clikable\"><span class=\"glyphicon glyphicon-user\"></span> Sign Up</a></li>\n        <li><a class=\"clikable\" (click)=\"onLogout()\"><span class=\"glyphicon glyphicon-log-in\"></span> Logout</a></li>\n        <li><a>{{authService.getUserConnected()}}\n            <span class=\"glyphicon glyphicon-user\"></span>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n\n<div class=\"container-fluid spacer\">\n  <div class=\"col-md-6 col-md-offset-3\">\n      <div *ngIf=\"mode == 1\" class=\"alert alert-danger\">\n          <span>Le nom d'une tâche doit être unique!!</span>\n        </div>\n      <div *ngIf=\"mode==0\">\n          <div class=\"panel panel-primary\">\n              <div class=\"panel-heading\">Nouvelle Tâche</div>\n              <div class=\"panel-body\">\n                <form #f=\"ngForm\" (ngSubmit)=\"onSave(f.value)\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\">Nom de la tâche</label>\n                    <input (input)=\"setError()\"  name=\"nom\" [(ngModel)]=\"tache.nom\" class=\"form-control\"\n                      type=\"text\" required minlength=\"2\" #nom=\"ngModel\">\n                      <div *ngIf=\"nom.invalid && (nom.dirty || nom.touched)\"\n                          class=\"alert alert-danger\">\n                        <span>Le nom est obligatoire et doit avoir au\n                          moins deux caractères!!</span>\n                      </div>\n\n                  </div>\n                  <div class=\"form-group\">\n                      <label class=\"control-label\">Statut:</label>\n                      <div class=\"form-control\">\n                          <label class=\"control-label\">\n                              <input type=\"radio\" name=\"statut\" [value]=true [checked]=\"tache.statut\"\n                              [(ngModel)]=\"tache.statut\"> Ouvert\n                            </label>\n                            <label class=\"control-label\">\n                                <input type=\"radio\" name=\"statut\" [value]=false\n                                [(ngModel)]=\"tache.statut\"> Fermé\n                            </label>\n                      </div>\n\n                    </div>\n                  <div class=\"form-group\">\n                      <label class=\"control-label\">Description de la tâche</label>\n                        <textarea class=\"form-control\" name=\"description\" [(ngModel)]=\"tache.description\"\n                          cols=\"30\" rows=\"5\"></textarea>\n                    </div>\n                    <div class=\"form-group\">\n                        <label class=\"control-label\">Date d'expiration</label>\n                        <input class=\"form-control\" type=\"date\" #dateExpiration=\"ngModel\"\n                            [(ngModel)]=\"tache.dateExpiration\" name=\"dateExpiration\" required>\n                        <div *ngIf=\"dateExpiration.errors\" class=\"alert alert-danger\">\n                          <span>La date d'expiration est obligatoire!!</span>\n                        </div>\n                    </div>\n                    <button [disabled]=\"!f.valid\" type=\"submit\" class=\"btn btn-primary\">Enregistrer</button>\n                    <button class=\"btn btn-danger myPosition\" (click)=\"goBack()\">Annuler</button>\n                </form>\n              </div>\n            </div>\n      </div>\n      <div *ngIf=\"mode == 2\">\n          <div class=\"panel panel-primary\">\n              <div class=\"panel-heading\">Confirmation</div>\n              <div class=\"panel-body\">\n                <label class=\"control-label\">Nom de la tâche:\n                  <strong>{{tache.nom}}</strong>\n                </label>\n                <div class=\"form-group\">\n                    <label class=\"control-label\">Statut:</label>\n                    <div class=\"form-control\">\n                        <label class=\"control-label\">\n                          <input [disabled]=true type=\"radio\" name=\"statut\"\n                            [checked]=\"tache.statut\"> Ouvert\n                          </label>\n                          <label class=\"control-label\">\n                            <input [disabled]=true type=\"radio\" name=\"statut\"\n                                [checked]=\"!tache.statut\"> Fermé\n                          </label>\n                    </div>\n\n                  </div>\n                <label class=\"control-label\">Description:\n                  <strong>{{tache.nom}}</strong>\n                </label>\n                <textarea disabled = true class=\"form-control\" name=\"description\" [(ngModel)]=\"tache.description\"\n                          cols=\"30\" rows=\"5\"></textarea>\n                <div class=\"form-group\">\n                  <label class=\"control-label\"> Date de création:\n                    <strong>{{tache.dateCreation | date : \"dd-MM-yyyy\"}}</strong>\n                  </label>\n                </div>\n                <p></p>\n                <div class=\"form-group\">\n                    <label class=\"control-label\"> Date d'expiration:\n                        <strong>{{tache.dateExpiration | date : \"dd-MM-yyyy\"}}</strong>\n                    </label>\n                  </div>\n                <div class=\"form-group\">\n                    <button class=\"btn btn-danger\" (click)=\"goBack()\">Retour</button>\n                </div>\n              </div>\n            </div>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/new-tache/new-tache.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewTacheComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_model_tache__ = __webpack_require__("./src/model/model.tache.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_taches_service__ = __webpack_require__("./src/services/taches.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_authentication_service__ = __webpack_require__("./src/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NewTacheComponent = /** @class */ (function () {
    function NewTacheComponent(location, tacheService, authService, route) {
        this.location = location;
        this.tacheService = tacheService;
        this.authService = authService;
        this.route = route;
        this.mode = 0;
    }
    NewTacheComponent.prototype.ngOnInit = function () {
        if (!this.authService.isAdmin()) {
            this.route.navigateByUrl("/login");
        }
        this.tache = new __WEBPACK_IMPORTED_MODULE_2__model_model_tache__["a" /* Tache */]();
    };
    NewTacheComponent.prototype.setError = function () { this.mode = 0; };
    NewTacheComponent.prototype.onSave = function (dataForm) {
        var _this = this;
        var jwt = this.authService.getToken();
        this.tacheService.enregistrerTache(this.tache, jwt).subscribe(function (data) {
            _this.tache = data;
            _this.mode = 2;
        }, function (err) {
            _this.mode = 1;
            console.log(err.error.message);
            console.log(err);
            //console.log(JSON.parse(err.body).message);
        });
    };
    NewTacheComponent.prototype.goBack = function () { this.location.back(); };
    NewTacheComponent.prototype.onLogout = function () {
        this.authService.logout();
        this.route.navigateByUrl("/login");
    };
    NewTacheComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-new-tache',
            template: __webpack_require__("./src/app/new-tache/new-tache.component.html"),
            styles: [__webpack_require__("./src/app/new-tache/new-tache.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */], __WEBPACK_IMPORTED_MODULE_3__services_taches_service__["a" /* TachesService */],
            __WEBPACK_IMPORTED_MODULE_4__services_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]])
    ], NewTacheComponent);
    return NewTacheComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__("./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("./src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container myMargin\">\n    <div class=\"alert alert-danger\" *ngIf=\"mode == 1\">\n        <strong>Le nom d'utilisateur ou le mot de passe des invalide!!</strong>\n      </div>\n  <div class=\"col-md-6 col-md-offset-3\">\n      <div class=\"panel panel-primary\">\n          <div class=\"panel-heading myCenter\">Nouvel utilisateur</div>\n          <div class=\"panel-body\">\n              <form #f=\"ngForm\" (ngSubmit)=\"onEnregistrer(f.value)\">\n                  <div class=\"form-group\">\n                      <label class=\"control-label\"></label>\n                      <label class=\"control-label\"></label>\n                      <input class=\"form-control\" name=\"nom\" type=\"text\"\n                        placeholder=\"Saisissez votre nom\" ngModel #nom=\"ngModel\" required>\n\n                        <div *ngIf=\"nom.invalid\" class=\"alert alert-danger\">\n                          <span>Le nom est obligatoire!!</span>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label class=\"control-label\"></label>\n                        <label class=\"control-label\"></label>\n                        <input class=\"form-control\" name=\"prenom\" type=\"text\"\n                          placeholder=\"Saisissez votre prénom\" ngModel #prenom=\"ngModel\" required>\n\n                          <div *ngIf=\"prenom.invalid\" class=\"alert alert-danger\">\n                              <span>Le prénom est obligatoire!!</span>\n                            </div>\n                      </div>\n                      <div class=\"form-group\">\n                          <label class=\"control-label\"></label>\n                          <label class=\"control-label\"></label>\n                          <input class=\"form-control\" name=\"email\" type=\"email\"\n                            placeholder=\"Saisissez votre email\" ngModel #email=\"ngModel\" email required>\n\n                            <div *ngIf=\"email.invalid\" class=\"alert alert-danger\">\n                                <span>L'email est obligatoire!!</span>\n                              </div>\n                          </div>\n                  <div class=\"form-group\">\n                    <label class=\"control-label\"></label>\n                    <label class=\"control-label\"></label>\n                    <input class=\"form-control\" name=\"username\" type=\"text\"\n                      placeholder=\"Saisissez votre username\" #username=\"ngModel\" ngModel required>\n\n                      <div *ngIf=\"username.invalid\" class=\"alert alert-danger\">\n                          <span>Le nom d'utilisateur est obligatoire!!</span>\n                        </div>\n                    </div>\n                  <div class=\"form-group\">\n                      <label class=\"control-label\"></label>\n                    <input  class=\"form-control\" name=\"password\" type=\"password\"\n                      placeholder=\"Saisissez votre password\" #password=\"ngModel\" ngModel required>\n\n                      <div *ngIf=\"password.invalid\" class=\"alert alert-danger\">\n                          <span>Le password est obligatoire!!</span>\n                        </div>\n                    </div>\n                  <div class=\"form-group\">\n                      <label class=\"control-label\"></label>\n                    <input  class=\"form-control\" name=\"repassword\" type=\"password\"\n                      placeholder=\"Resaisissez votre password\" #repassword=\"ngModel\" ngModel required>\n\n                      <div *ngIf=\"repassword.invalid\" class=\"alert alert-danger\">\n                          <span>Il faut confirmer votre password!!</span>\n                        </div>\n                      <label class=\"control-label\"></label>\n                    <label class=\"control-label\"></label>\n                  </div>\n                  <button [disabled]=\"!f.valid\" class=\"btn btn-success\" type=\"submit\">S'enregistrer</button>\n                  <button routerLink=\"/login\"  class=\"btn btn-danger\" type=\"submit\">Annuler</button>\n                </form>\n          </div>\n        </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("./src/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, location) {
        this.authService = authService;
        this.location = location;
        this.mode = 0;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onEnregistrer = function (dataForm) {
        var _this = this;
        console.log(dataForm);
        this.authService.enregistrer(dataForm).subscribe(function (data) {
            console.log(data);
            _this.location.back();
            _this.mode = 0;
        }, function (err) {
            console.log(err);
            _this.mode = 1;
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/register/register.component.html"),
            styles: [__webpack_require__("./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/taches/taches.component.css":
/***/ (function(module, exports) {

module.exports = ".changeColor:hover{\n  background-color:lightskyblue;\n}\n\n.btnSpacer{\n  margin-bottom: 10px;\n}\n\n.myMargin{\n  margin-left: 35px;\n}\n"

/***/ }),

/***/ "./src/app/taches/taches.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse myColor navbar-fixed-top\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand active\">omar.lo.ch</a>\n      </div>\n      <div>\n        <ul class=\"nav navbar-nav\">\n          <li><a class=\"clikable\" routerLink=\"/taches\">Tâches</a></li>\n          <li><a class=\"clikable\" routerLink=\"/contacts\">Contacts</a></li>\n          <li><a class=\"clikable\" routerLink=\"/galeries\">Galeries</a></li>\n          <li *ngIf=\"autService.isAdmin()\"><a class=\"clikable\" routerLink=\"/users\">Utilisateurs</a></li>\n          <li *ngIf=\"autService.isAdmin()\"><a class=\"clikable\" routerLink=\"/roles\">Rôles</a></li>\n        </ul>\n      </div>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a class=\"clikable\"><span class=\"glyphicon glyphicon-user\"></span> Sign Up</a></li>\n        <li><a class=\"clikable\" (click)=\"onLogout()\"><span class=\"glyphicon glyphicon-log-in\"></span> Logout</a></li>\n        <li><a>{{autService.getUserConnected()}}\n            <span class=\"glyphicon glyphicon-user\"></span>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n\n  <div class=\"container-fluid spacer\">\n      <button *ngIf=\"autService.isAdmin()\" routerLink=\"/new-tache\"\n        class=\"btn btn-danger btnSpacer\">Nouvelle Tâche</button>\n      <div class=\"panel panel-primary\">\n        <div class=\"panel-heading myCenter\">Liste des Tâches</div>\n        <div class=\"panel-body\">\n          <form #f=\"ngForm\">\n            <div class=\"form-group\">\n                <input class=\"input\" name=\"motCle\" [(ngModel)]=\"motCle\" (input)=\"onChercher()\"\n                  type=\"text\" placeholder=\"Chercher une tâche\">\n            </div>\n          </form>\n          <table class=\"table table-striped table-hover\">\n            <tr>\n              <th>Nom</th><th>Description</th><th>Date de création</th>\n              <th>Date d'expiration</th><th>Statut</th><th></th><th></th>\n            </tr>\n            <tr *ngFor=\"let t of pageTaches?.content\"\n              class=\"clikable changeColor\">\n              <td routerLink=\"/detail-tache/{{t.id}}\">{{t.nom}}</td>\n              <td routerLink=\"/detail-tache/{{t.id}}\">\n                {{t.description != null ? getDescription(t.description) : \"\"}}\n              </td>\n              <td routerLink=\"/detail-tache/{{t.id}}\">{{t.dateCreation}}</td>\n              <td routerLink=\"/detail-tache/{{t.id}}\">{{t.dateExpiration}}</td>\n              <td routerLink=\"/detail-tache/{{t.id}}\">{{getStatut(t.statut)}}</td>\n              <!-- <td (click)=\"onEdit(t.id)\"><a >Editer</a></td> -->\n              <td *ngIf=\"autService.isAdmin()\" routerLink=\"/edit-tache/{{t.id}}\">\n                <a> <span class=\"glyphicon glyphicon-pencil\"></span> Editer</a>\n              </td>\n              <td *ngIf=\"autService.isAdmin()\" (click)=\"onRemove(t)\">\n                <a> <span class=\"glyphicon glyphicon-trash\"></span> Supprimer</a>\n              </td>\n            </tr>\n          </table>\n          <div class=\"container\">\n            <ul class=\"nav nav-pills\">\n              <li [ngClass]=\"{'active': i == pageCourrente}\" *ngFor=\"let p of pages; let i = index\">\n                <a class=\"clikable\" (click)=\"goToPage(i)\"> {{i}} </a>\n              </li>\n            </ul>\n          </div>\n          <p></p>\n          <div class=\"form-group\">\n              <button class=\"btn btn-success myMargin\" (click)=\"onGoBack()\">Retour</button>\n          </div>\n        </div>\n      </div>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/taches/taches.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TachesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("./src/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_taches_service__ = __webpack_require__("./src/services/taches.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TachesComponent = /** @class */ (function () {
    function TachesComponent(autService, router, tachesService, location) {
        this.autService = autService;
        this.router = router;
        this.tachesService = tachesService;
        this.location = location;
        this.pageCourrente = 0;
        this.size = 5;
        this.motCle = "";
    }
    TachesComponent.prototype.ngOnInit = function () {
        /*
        this.tachesService.getTaches(token).subscribe(data =>{
          console.log(data);
        }, err =>{
          console.log(err);
          this.router.navigateByUrl("/login");
        });*/
        //this.tachesService.chercherTaches(token, "A", 0, 5).subscribe( data =>console.log(data));
        this.doChercher();
    };
    TachesComponent.prototype.doChercher = function () {
        var _this = this;
        var token = this.autService.getToken();
        this.tachesService.chercherTaches(token, this.motCle, this.pageCourrente, this.size)
            .subscribe(function (data) {
            _this.pageTaches = data;
            _this.pages = new Array(_this.pageTaches.totalPages);
            console.log(_this.pageTaches);
        }, function (error) {
            console.log(error);
            _this.onLogout();
        });
    };
    TachesComponent.prototype.onLogout = function () {
        this.autService.logout();
        this.router.navigateByUrl("/login");
    };
    TachesComponent.prototype.onChercher = function () {
        this.doChercher();
    };
    TachesComponent.prototype.goToPage = function (index) {
        this.pageCourrente = index;
        this.doChercher();
    };
    /* 2ème façon d'appeler le composant Edit-tache
      onEdit(id: number){
        this.router.navigate(["/edit-tache", id]);
      }*/
    TachesComponent.prototype.onGoBack = function () {
        //this.location.back();
        this.router.navigateByUrl("/home");
    };
    TachesComponent.prototype.onRemove = function (t) {
        var _this = this;
        var token = this.autService.getToken();
        this.tachesService.deleteTache(t.id, token).subscribe(function (data) {
            _this.pageTaches.content.splice(_this.pageTaches.content.indexOf(t), 1);
        }, function (err) {
            console.log(err);
        });
    };
    TachesComponent.prototype.getStatut = function (t) {
        return t == true ? "Ouvert" : "Fermé";
    };
    TachesComponent.prototype.getDescription = function (desc) {
        return desc.length <= 5 ? desc : this.getSortStr(desc);
    };
    TachesComponent.prototype.getSortStr = function (desc) {
        var s = "";
        for (var i = 0; i <= 20; i++) {
            s += desc.charAt(i);
        }
        return s + "...";
    };
    TachesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-taches',
            template: __webpack_require__("./src/app/taches/taches.component.html"),
            styles: [__webpack_require__("./src/app/taches/taches.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_taches_service__["a" /* TachesService */], __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */]])
    ], TachesComponent);
    return TachesComponent;
}());



/***/ }),

/***/ "./src/app/users/users.component.css":
/***/ (function(module, exports) {

module.exports = ".changeColor:hover{\n  background-color:lightskyblue;\n}\n"

/***/ }),

/***/ "./src/app/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse myColor navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand active\">omar.lo.ch</a>\n    </div>\n    <div>\n      <ul class=\"nav navbar-nav\">\n        <li><a class=\"clikable\" routerLink=\"/taches\">Tâches</a></li>\n        <li><a class=\"clikable\" routerLink=\"/contacts\">Contacts</a></li>\n        <li><a class=\"clikable\" routerLink=\"/galeries\">Galeries</a></li>\n        <li *ngIf=\"authService.isAdmin()\"><a class=\"clikable\" routerLink=\"/users\">Utilisateurs</a></li>\n        <li *ngIf=\"authService.isAdmin()\"><a class=\"clikable\" routerLink=\"/roles\">Rôles</a></li>\n      </ul>\n    </div>\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li><a class=\"clikable\"><span class=\"glyphicon glyphicon-user\"></span> Sign Up</a></li>\n      <li><a class=\"clikable\" (click)=\"onLogout()\"><span class=\"glyphicon glyphicon-log-in\"></span> Logout</a></li>\n      <li><a>{{authService.getUserConnected()}}\n          <span class=\"glyphicon glyphicon-user\"></span>\n        </a>\n      </li>\n    </ul>\n  </div>\n</nav>\n<div class=\"container-fluid spacer\">\n  <div class=\"col-md-8 col-md-offset-2\">\n      <div class=\"panel panel-primary\">\n          <div class=\"panel-heading myCenter\">Liste des utilisateurs</div>\n          <div class=\"panel-body\">\n            <table class=\"table table-striped\">\n              <tr>\n                <th>ID</th><th>Username</th><th></th><th></th>\n              </tr>\n              <tr *ngFor=\"let u of users\" class=\"clikable changeColor\">\n              <!--  <td (click)=\"onDetail(u.id)\"> -->\n                <td routerLink=\"/detail-user/{{u.id}}\">\n                    <span class=\"badge\">{{u.id}}</span>\n                </td>\n                <td routerLink=\"/detail-user/{{u.id}}\">\n                  {{u.username}}\n                </td>\n             <!--   <td (click)=\"onEdit(u.id)\"> -->\n                <td routerLink=\"/edit-user/{{u.id}}\">\n                  <a> <span class=\"glyphicon glyphicon-pencil\"></span> Editer</a>\n                </td>\n                <td (click)=\"onRemove(u.id)\">\n                  <a> <span class=\"glyphicon glyphicon-trash\"></span> Supprimer</a>\n                </td>\n\n              </tr>\n            </table>\n            <!--\n            <ul class=\"nav\">\n              <li *ngFor=\"let u of users\">\n                <span class=\"badge\">{{u.id}}</span> {{u.username}}\n              </li>\n            </ul> -->\n          </div>\n        </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("./src/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_users_service__ = __webpack_require__("./src/services/users.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsersComponent = /** @class */ (function () {
    function UsersComponent(router, authService, usersService) {
        this.router = router;
        this.authService = authService;
        this.usersService = usersService;
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.authService.isAdmin()) {
            this.router.navigateByUrl("/login");
        }
        var jwt = this.authService.getToken();
        this.usersService.getUsers(jwt).subscribe(function (data) {
            console.log(data);
            _this.users = data;
        }, function (err) {
            console.log(err);
            _this.router.navigateByUrl("/home");
        });
    };
    UsersComponent.prototype.onLogout = function () {
        this.authService.logout();
        this.router.navigateByUrl("/login");
    };
    /*
      onDetail(id: number){
        this.router.navigate(["/detail-user", id]);
      } remplacé par routerLink="/detail-user/{{u.id}}"*/
    /*
    onEdit(id: number){
      this.router.navigate(["/edit-user", id]);
    } remplacé par routerLink="/edit-user/{{u.id}}"*/
    UsersComponent.prototype.onRemove = function (id) { };
    UsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-users',
            template: __webpack_require__("./src/app/users/users.component.html"),
            styles: [__webpack_require__("./src/app/users/users.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_3__services_users_service__["a" /* UsersService */]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/model/model.tache.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tache; });
var Tache = /** @class */ (function () {
    function Tache() {
        /*
        public nom: string;
        public description: string;
        public dateCreation: Date;
        public dateExpiration: Date;*/
        this.dateCreation = new Date();
        //Voici plusieurs façons de créer classe avec des attributs
    }
    return Tache;
}());



/***/ }),

/***/ "./src/services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        //private host: string = "http://localhost:8080";
        this.host = "https://gestiondescontactsettaches.cfapps.io";
        this.jwtToken = null;
        this.roles = [];
        this.userConnected = "";
    }
    AuthenticationService.prototype.login = function (user) {
        return this.http.post(this.host + "/login", user, { observe: "response" });
    };
    AuthenticationService.prototype.loadToken = function () {
        this.jwtToken = localStorage.getItem("token");
    };
    AuthenticationService.prototype.saveToken = function (jwt) {
        localStorage.setItem("token", jwt);
        var jwtHelper = new __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["JwtHelper"]();
        this.roles = jwtHelper.decodeToken(jwt).roles;
        this.userConnected = jwtHelper.decodeToken(jwt).sub;
    };
    AuthenticationService.prototype.getToken = function () {
        if (this.jwtToken == null) {
            this.loadToken();
        }
        return this.jwtToken;
    };
    AuthenticationService.prototype.logout = function () {
        this.jwtToken = null;
        localStorage.removeItem("token");
    };
    AuthenticationService.prototype.isAdmin = function () {
        for (var _i = 0, _a = this.roles; _i < _a.length; _i++) {
            var r = _a[_i];
            if (r.authority == "ADMIN")
                return true;
        }
        return false;
    };
    AuthenticationService.prototype.getUserConnected = function () { return this.userConnected; };
    AuthenticationService.prototype.enregistrer = function (userForm) {
        return this.http.post(this.host + "/AccountRestController/register", userForm);
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/services/galery.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GaleryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GaleryService = /** @class */ (function () {
    function GaleryService(http) {
        this.http = http;
        this.host = "https://pixabay.com/api/";
        this.string_key = "8000561-fb965d3bd2ba7696f0d46b078";
    }
    GaleryService.prototype.getPhotos = function (nomVille, page, size) {
        return this.http.get(this.host + "?key=" + this.string_key + "&q=" + nomVille + "&page=" + page
            + "&per_page=" + size);
    };
    GaleryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], GaleryService);
    return GaleryService;
}());



/***/ }),

/***/ "./src/services/taches.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TachesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TachesService = /** @class */ (function () {
    function TachesService(http) {
        this.http = http;
        //private host: string = "http://localhost:8080";
        this.host = "https://gestiondescontactsettaches.cfapps.io";
    }
    TachesService.prototype.getTaches = function (jwtToken) {
        return this.http.get(this.host + "/TachesRestController/taches", { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ "Authorization": jwtToken }) });
    };
    TachesService.prototype.getTache = function (jwtToken, id) {
        return this.http.get(this.host + "/TachesRestController/taches/" + id, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ "Authorization": jwtToken }) });
    };
    TachesService.prototype.chercherTaches = function (jwtToken, motCle, page, size) {
        return this.http.get(this.host + "/TachesRestController/chercherTaches?"
            + "motCle=" + motCle + "&page=" + page + "&size=" + size, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ "Authorization": jwtToken }) });
    };
    TachesService.prototype.enregistrerTache = function (tache, jwtToken) {
        return this.http.post(this.host + "/TachesRestController/taches", tache, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ "Authorization": jwtToken }) });
    };
    TachesService.prototype.updateTache = function (jwt, tache) {
        return this.http.put(this.host + "/TachesRestController/taches/" + tache.id, tache, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ "Authorization": jwt }) });
    };
    TachesService.prototype.deleteTache = function (id, jwt) {
        return this.http.delete(this.host + "/TachesRestController/taches/" + id, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ "Authorization": jwt }) });
    };
    TachesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], TachesService);
    return TachesService;
}());



/***/ }),

/***/ "./src/services/users.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersService = /** @class */ (function () {
    function UsersService(http) {
        this.http = http;
        //private host: string = "http://localhost:8080/AccountRestController";
        this.host = "https://gestiondescontactsettaches.cfapps.io/AccountRestController";
    }
    UsersService.prototype.getUsers = function (jwt) {
        return this.http.get(this.host + "/users", { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ "authorization": jwt }) });
    };
    UsersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map