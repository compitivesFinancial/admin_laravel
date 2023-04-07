(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Notifications-Email-add-email-templates-add-email-templates-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Pages/Dashboard/Notifications/Email/add-email-templates/add-email-templates.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Pages/Dashboard/Notifications/Email/add-email-templates/add-email-templates.component.html ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"row page-titles\">\r\n      <div class=\"col-md-5 align-self-center\">\r\n        <h4 class=\"text-themecolor\">{{LANG.Add_Templates}}</h4>\r\n      </div>\r\n      <div class=\"col-md-7 align-self-center text-right\">\r\n        <div class=\"d-flex justify-content-end align-items-center\">\r\n          <ol class=\"breadcrumb\">\r\n            <li class=\"breadcrumb-item\"><a href=\"javascript:void(0)\">{{LANG.Home}}</a></li>\r\n            <li class=\"breadcrumb-item active\">{{LANG.Add_Templates}}</li>\r\n          </ol>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  \r\n    <div class=\"row\">\r\n      <div class=\"col-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-body\">\r\n            <form class=\"mt-4\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                  <div class=\"form-group\">\r\n                    <label for=\"exampleInputEmail1\">{{LANG.TITLE}}</label>\r\n                    <input\r\n                      type=\"text\"\r\n                      class=\"form-control\"\r\n                      name=\"title\"\r\n                      placeholder=\"{{LANG.Enter_Title}}\"\r\n                      [(ngModel)]=\"title\"\r\n                    />\r\n                    <span class=\"error\" *ngIf=\"error.title\">{{LANG.This_field_is_required}}</span>\r\n  \r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                      <label for=\"exampleInputEmail1\">{{LANG.AR_TITLE}}</label>\r\n                      <input\r\n                        type=\"text\"\r\n                        class=\"form-control\"\r\n                        name=\"ar_title\"\r\n                        placeholder=\"{{LANG.Enter_Ar_title}}\"\r\n                        [(ngModel)]=\"ar_title\"\r\n                      />\r\n                      <span class=\"error\" *ngIf=\"error.ar_title\">{{LANG.This_field_is_required}}</span>\r\n    \r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                      <label for=\"exampleInputEmail1\">{{LANG.Subject}}</label>\r\n                      <input\r\n                        type=\"text\"\r\n                        class=\"form-control\"\r\n                        name=\"subject\"\r\n                        placeholder=\"{{LANG.Enter_Subject}}\"\r\n                        [(ngModel)]=\"subject\"\r\n                      />\r\n                      <span class=\"error\" *ngIf=\"error.subject\">{{LANG.This_field_is_required}}</span>\r\n    \r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                      <label for=\"exampleInputEmail1\">{{LANG.Ar_Subject}}</label>\r\n                      <input\r\n                        type=\"text\"\r\n                        class=\"form-control\"\r\n                        name=\"ar_subject\"\r\n                        placeholder=\"Enter {{LANG.Enter_Ar_Subject}}\"\r\n                        [(ngModel)]=\"ar_subject\"\r\n                      />\r\n                      <span class=\"error\" *ngIf=\"error.ar_subject\">{{LANG.This_field_is_required}}</span>\r\n    \r\n                    </div>\r\n                  </div>\r\n                  \r\n                  <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                      <label for=\"exampleInputEmail1\">{{LANG.Template_Type}}</label>\r\n                      <select class=\"form-control\" name=\"module\" [(ngModel)]=\"module\">\r\n                        <option selected disabled value=\"\">{{LANG.Select_Template_type}}</option>\r\n                        <option *ngFor=\"let data of templates_type;\" value=\"{{data.id}}\">{{data.title}}</option>\r\n                      </select>\r\n                      <span class=\"error\" *ngIf=\"error.module\">{{LANG.This_field_is_required}}</span>\r\n    \r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                      <label for=\"exampleInputEmail1\">{{LANG.Message}}</label>\r\n                      <textarea\r\n                        type=\"text\"\r\n                        class=\"form-control\"\r\n                        name=\"message\"\r\n                        placeholder=\"{{LANG.Paste_your_HTML_content_here}}\"\r\n                        [(ngModel)]=\"message\"\r\n                      ></textarea>\r\n                      <span class=\"error\" *ngIf=\"error.message\">{{LANG.This_field_is_required}}</span>\r\n    \r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                      <label for=\"exampleInputEmail1\">{{LANG.Ar_Message}}</label>\r\n                      <textarea\r\n                        type=\"text\"\r\n                        class=\"form-control\"\r\n                        name=\"ar_message\"\r\n                        placeholder=\"{{LANG.Paste_your_HTML_content_here}}\"\r\n                        [(ngModel)]=\"ar_message\"\r\n                      ></textarea>\r\n                      <span class=\"error\" *ngIf=\"error.ar_message\">{{LANG.This_field_is_required}}</span>\r\n    \r\n                    </div>\r\n                  </div>\r\n              </div>\r\n\r\n\r\n              <button *ngIf=\"!load\" type=\"submit\" class=\"btn btn-primary mt-2\" (click)=\"addTemplate()\">{{id ? 'Update' : 'Submit'}}</button>\r\n              <button class=\"btn btn-primary\" *ngIf=\"load\">                                \r\n                  <loader></loader>\r\n              </button>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/loader/Loader.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/loader/Loader.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"lds-dual-ring\"></div>"

/***/ }),

/***/ "./src/app/Pages/Dashboard/Notifications/Email/add-email-templates/add-email-templates.component.css":
/*!***********************************************************************************************************!*\
  !*** ./src/app/Pages/Dashboard/Notifications/Email/add-email-templates/add-email-templates.component.css ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "textarea{\r\n    height: 500px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvRGFzaGJvYXJkL05vdGlmaWNhdGlvbnMvRW1haWwvYWRkLWVtYWlsLXRlbXBsYXRlcy9hZGQtZW1haWwtdGVtcGxhdGVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvUGFnZXMvRGFzaGJvYXJkL05vdGlmaWNhdGlvbnMvRW1haWwvYWRkLWVtYWlsLXRlbXBsYXRlcy9hZGQtZW1haWwtdGVtcGxhdGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0ZXh0YXJlYXtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/Pages/Dashboard/Notifications/Email/add-email-templates/add-email-templates.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/Pages/Dashboard/Notifications/Email/add-email-templates/add-email-templates.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: AddEmailTemplatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEmailTemplatesComponent", function() { return AddEmailTemplatesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_app_shared_Services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/Services/user.service */ "./src/app/shared/Services/user.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddEmailTemplatesComponent = /** @class */ (function () {
    function AddEmailTemplatesComponent(adminService, toastr, location, route) {
        var _this = this;
        this.adminService = adminService;
        this.toastr = toastr;
        this.location = location;
        this.route = route;
        this.err = false;
        this.load = false;
        this.title = "";
        this.ar_title = "";
        this.subject = "";
        this.ar_subject = "";
        this.message = "";
        this.ar_message = "";
        this.module = "";
        this.id = "";
        this.templates_type = [];
        this.error = {
            title: false,
            ar_title: false,
            ar_subject: false,
            subject: false,
            message: false,
            ar_message: false,
            module: false,
        };
        this.LANG = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].english_translations;
        this.route.queryParams
            .subscribe(function (params) {
            if (params['id']) {
                _this.id = atob(atob(params['id']));
                _this.getUserDetails();
            }
        });
    }
    AddEmailTemplatesComponent.prototype.ngOnInit = function () {
        this.getTemplatesType();
    };
    AddEmailTemplatesComponent.prototype.getUserDetails = function () {
        var _this = this;
        this.adminService.getTemplatesDetails(this.id).subscribe(function (res) {
            if (res.status) {
                _this.title = res.response.title;
                _this.ar_title = res.response.ar_title;
                _this.subject = res.response.subject;
                _this.ar_subject = res.response.ar_subject;
                _this.message = res.response.message;
                _this.ar_message = res.response.ar_message;
                _this.module = res.response.module.toString();
            }
        });
    };
    AddEmailTemplatesComponent.prototype.getTemplatesType = function () {
        var _this = this;
        this.adminService.getTemplatesType().subscribe(function (data) {
            if (data.status) {
                _this.templates_type = data.response;
            }
        });
    };
    AddEmailTemplatesComponent.prototype.errorHandler = function () {
        if (this.title == undefined || this.title == '') {
            this.error.title = true;
            this.err = true;
        }
        if (this.ar_title == undefined || this.ar_title == '') {
            this.error.ar_title = true;
            this.err = true;
        }
        if (this.subject == undefined || this.subject == '') {
            this.error.subject = true;
            this.err = true;
        }
        if (this.ar_subject == undefined || this.ar_subject == '') {
            this.error.ar_subject = true;
            this.err = true;
        }
        if (this.message == undefined || this.message == '') {
            this.error.message = true;
            this.err = true;
        }
        if (this.ar_message == undefined || this.ar_message == '') {
            this.error.ar_message = true;
            this.err = true;
        }
        if (this.module == undefined || this.module == '') {
            this.error.module = true;
            this.err = true;
        }
    };
    AddEmailTemplatesComponent.prototype.resetError = function () {
        this.err = false;
        this.load = false;
        this.error = {
            title: false,
            ar_title: false,
            ar_subject: false,
            subject: false,
            message: false,
            ar_message: false,
            module: false,
        };
    };
    AddEmailTemplatesComponent.prototype.addTemplate = function () {
        this.resetError();
        this.errorHandler();
        if (this.err) {
            return;
        }
        var data = {
            "title": this.title,
            "ar_title": this.ar_title,
            "subject": this.subject,
            "ar_subject": this.ar_subject,
            "message": this.message,
            "ar_message": this.ar_message,
            "module": this.module,
            "type": "1",
        };
        this.load = true;
        if (this.id) {
            data.id = this.id;
            this.update(data);
            return;
        }
        this.add(data);
    };
    AddEmailTemplatesComponent.prototype.add = function (data) {
        var _this = this;
        this.adminService.addEmailTemplates(data).subscribe(function (res) {
            _this.load = false;
            if (res.status) {
                _this.toastr.successToastr(_this.LANG.Template_added_successfully);
                _this.location.back();
                return;
            }
            _this.toastr.warningToastr(res.message);
        });
    };
    AddEmailTemplatesComponent.prototype.update = function (data) {
        var _this = this;
        this.adminService.updateEmailTemplates(data).subscribe(function (res) {
            _this.load = false;
            if (res.status) {
                _this.toastr.successToastr(_this.LANG.Template_updated_successfully);
                _this.location.back();
                return;
            }
            _this.toastr.warningToastr(res.response.message);
        });
    };
    AddEmailTemplatesComponent.ctorParameters = function () { return [
        { type: src_app_shared_Services_user_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"] },
        { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_1__["ToastrManager"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
    ]; };
    AddEmailTemplatesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-email-templates',
            template: __webpack_require__(/*! raw-loader!./add-email-templates.component.html */ "./node_modules/raw-loader/index.js!./src/app/Pages/Dashboard/Notifications/Email/add-email-templates/add-email-templates.component.html"),
            styles: [__webpack_require__(/*! ./add-email-templates.component.css */ "./src/app/Pages/Dashboard/Notifications/Email/add-email-templates/add-email-templates.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_shared_Services_user_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_1__["ToastrManager"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], AddEmailTemplatesComponent);
    return AddEmailTemplatesComponent;
}());



/***/ }),

/***/ "./src/app/Pages/Dashboard/Notifications/Email/add-email-templates/add-email-templates.module.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/Pages/Dashboard/Notifications/Email/add-email-templates/add-email-templates.module.ts ***!
  \*******************************************************************************************************/
/*! exports provided: AddEmailTemplateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEmailTemplateModule", function() { return AddEmailTemplateModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_shared_loader_Loader_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/loader/Loader.module */ "./src/app/shared/loader/Loader.module.ts");
/* harmony import */ var _add_email_templates_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-email-templates.component */ "./src/app/Pages/Dashboard/Notifications/Email/add-email-templates/add-email-templates.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ChildRoutes = [
    {
        path: 'add-email-templates',
        component: _add_email_templates_component__WEBPACK_IMPORTED_MODULE_5__["AddEmailTemplatesComponent"]
    },
];
var AddEmailTemplateModule = /** @class */ (function () {
    function AddEmailTemplateModule() {
    }
    AddEmailTemplateModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(ChildRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                src_app_shared_loader_Loader_module__WEBPACK_IMPORTED_MODULE_4__["LoaderModule"]
            ],
            declarations: [
                _add_email_templates_component__WEBPACK_IMPORTED_MODULE_5__["AddEmailTemplatesComponent"]
            ]
        })
    ], AddEmailTemplateModule);
    return AddEmailTemplateModule;
}());



/***/ }),

/***/ "./src/app/shared/loader/Loader.css":
/*!******************************************!*\
  !*** ./src/app/shared/loader/Loader.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".lds-dual-ring {\r\n  display: inline-block;\r\n  /* width: 80px;\r\n  height: 80px; */\r\n}\r\n.lds-dual-ring:after {\r\n  content: \" \";\r\n  display: block;\r\n  width: 30px;\r\n  height: 30px;\r\n  border-radius: 50%;\r\n  border: 4px solid #fff;\r\n  border-color: #fff transparent #fff transparent;\r\n  -webkit-animation: lds-dual-ring 1.2s linear infinite;\r\n          animation: lds-dual-ring 1.2s linear infinite;\r\n}\r\n@-webkit-keyframes lds-dual-ring {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n            transform: rotate(360deg);\r\n  }\r\n}\r\n@keyframes lds-dual-ring {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n            transform: rotate(360deg);\r\n  }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xvYWRlci9Mb2FkZXIuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCO2lCQUNlO0FBQ2pCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QiwrQ0FBK0M7RUFDL0MscURBQTZDO1VBQTdDLDZDQUE2QztBQUMvQztBQUNBO0VBQ0U7SUFDRSwrQkFBdUI7WUFBdkIsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxpQ0FBeUI7WUFBekIseUJBQXlCO0VBQzNCO0FBQ0Y7QUFQQTtFQUNFO0lBQ0UsK0JBQXVCO1lBQXZCLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsaUNBQXlCO1lBQXpCLHlCQUF5QjtFQUMzQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2xvYWRlci9Mb2FkZXIuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxkcy1kdWFsLXJpbmcge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAvKiB3aWR0aDogODBweDtcclxuICBoZWlnaHQ6IDgwcHg7ICovXHJcbn1cclxuLmxkcy1kdWFsLXJpbmc6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiIFwiO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyOiA0cHggc29saWQgI2ZmZjtcclxuICBib3JkZXItY29sb3I6ICNmZmYgdHJhbnNwYXJlbnQgI2ZmZiB0cmFuc3BhcmVudDtcclxuICBhbmltYXRpb246IGxkcy1kdWFsLXJpbmcgMS4ycyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuQGtleWZyYW1lcyBsZHMtZHVhbC1yaW5nIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/shared/loader/Loader.module.ts":
/*!************************************************!*\
  !*** ./src/app/shared/loader/Loader.module.ts ***!
  \************************************************/
/*! exports provided: LoaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderModule", function() { return LoaderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loader */ "./src/app/shared/loader/Loader.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var LoaderModule = /** @class */ (function () {
    function LoaderModule() {
    }
    LoaderModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [],
            declarations: [
                _Loader__WEBPACK_IMPORTED_MODULE_1__["LoaderComponent"]
            ],
            exports: [
                _Loader__WEBPACK_IMPORTED_MODULE_1__["LoaderComponent"]
            ]
        })
    ], LoaderModule);
    return LoaderModule;
}());



/***/ }),

/***/ "./src/app/shared/loader/Loader.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/loader/Loader.ts ***!
  \*****************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LoaderComponent = /** @class */ (function () {
    function LoaderComponent() {
    }
    LoaderComponent.prototype.ngOnInit = function () {
    };
    LoaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'loader',
            template: __webpack_require__(/*! raw-loader!./Loader.html */ "./node_modules/raw-loader/index.js!./src/app/shared/loader/Loader.html"),
            styles: [__webpack_require__(/*! ./Loader.css */ "./src/app/shared/loader/Loader.css")]
        })
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ })

}]);
//# sourceMappingURL=Notifications-Email-add-email-templates-add-email-templates-module.js.map