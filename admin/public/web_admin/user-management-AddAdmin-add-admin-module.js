(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-management-AddAdmin-add-admin-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Pages/Dashboard/user-management/AddAdmin/add-admin.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Pages/Dashboard/user-management/AddAdmin/add-admin.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"row page-titles\">\r\n      <div class=\"col-md-5 align-self-center\">\r\n        <h4 class=\"text-themecolor\">{{LANG.Add_Admin}}</h4>\r\n      </div>\r\n      <div class=\"col-md-7 align-self-center text-right\">\r\n        <div class=\"d-flex justify-content-end align-items-center\">\r\n          <ol class=\"breadcrumb\">\r\n            <li class=\"breadcrumb-item\"><a href=\"javascript:void(0)\">{{LANG.Home}}</a></li>\r\n            <li class=\"breadcrumb-item active\">{{LANG.Add_Admin}}</li>\r\n          </ol>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  \r\n    <div class=\"row\">\r\n      <div class=\"col-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-body\">\r\n            <form class=\"mt-4\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                  <div class=\"form-group\">\r\n                    <label for=\"exampleInputEmail1\">{{LANG.User_Type}}</label>\r\n                    <select class=\"form-control\" name=\"user_type\" [(ngModel)]=\"user_type_id\">\r\n                      <option selected disabled value=\"\">{{LANG.Select_User_Type}}</option>\r\n                      <option *ngFor=\"let data of user_type;\" value=\"{{data.id}}\">{{data.title}}</option>\r\n                    </select>\r\n                    <span class=\"error\" *ngIf=\"error.user_type\">{{LANG.This_field_is_required}}</span>\r\n  \r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                  <div class=\"form-group\">\r\n                    <label for=\"exampleInputEmail1\">{{LANG.Name}}</label>\r\n                    <input\r\n                      type=\"text\"\r\n                      class=\"form-control\"\r\n                      name=\"name\"\r\n                      placeholder=\"{{LANG.Enter_Name}}\"\r\n                      [(ngModel)]=\"name\"\r\n                    />\r\n                    <span class=\"error\" *ngIf=\"error.name\">{{LANG.This_field_is_required}}</span>\r\n  \r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                  <div class=\"form-group\">\r\n                    <label for=\"exampleInputEmail1\">{{LANG.Department_Type}}</label>\r\n                    <select class=\"form-control\" name=\"department_type\" [(ngModel)]=\"department_type\" (change)=\"changeDepartmentType()\">\r\n                      <option selected disabled value=\"\">{{LANG.Select_Department_Type}}</option>\r\n                      <option value=\"1\">{{LANG.Menu}}</option>\r\n                      <option value=\"2\">{{LANG.Role}}</option>\r\n                    </select>\r\n                    <span class=\"error\" *ngIf=\"error.name\">{{LANG.This_field_is_required}}</span>\r\n  \r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"control-label d-block\">{{LANG.Role_Type}}</label>\r\n                  <select\r\n                    class=\"js-example-basic-multiple\"\r\n                    name=\"role_type[]\"\r\n                    multiple=\"multiple\"\r\n                    id=\"role_type\"\r\n                  >\r\n                    <option *ngFor=\"let data of roles; let i = index\" value=\"{{ data.id }}\">\r\n                      {{ data.title }}\r\n                    </option>\r\n                  </select>\r\n                  <span class=\"error\" *ngIf=\"error.role_type\">{{LANG.This_field_is_required}}</span>\r\n  \r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col-md-6\">\r\n                  <div class=\"form-group\">\r\n                    <label for=\"exampleInputEmail1\">{{LANG.Mobile_Number}}</label>\r\n                    <div class=\"country-code d-flex\">\r\n                      <select class=\"form-control\" name=\"country_code\" [(ngModel)]=\"country_code\">\r\n                        <option value=\"+966\">+966</option>\r\n                        <option value=\"+91\">+91</option>\r\n                      </select>\r\n                      <input\r\n                        type=\"text\"\r\n                        class=\"form-control\"\r\n                        name=\"mobile_number\"\r\n                        placeholder=\"{{LANG.Enter_Mobile_Number}}\"\r\n                        [(ngModel)]=\"mobile_number\"\r\n                      />\r\n                    </div>\r\n                    \r\n                    <span class=\"error\" *ngIf=\"error.mobile_number\">{{LANG.This_field_is_required}}</span>\r\n                    <span class=\"error\" *ngIf=\"error.mobile_number_valid && country_code == '+966'\">{{LANG.Enter_valid_Mobile_Number}} (Ex: 0551234567 or 551235678)</span>\r\n                    <span class=\"error\" *ngIf=\"error.mobile_number_valid && country_code == '+91'\">{{LANG.Enter_valid_Mobile_Number}}</span>\r\n  \r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col-md-6\">\r\n                  <div class=\"form-group\">\r\n                    <label for=\"exampleInputEmail1\">{{LANG.Email}}</label>\r\n                    <input\r\n                      type=\"text\"\r\n                      class=\"form-control\"\r\n                      name=\"email\"\r\n                      placeholder=\"{{LANG.Enter_Email}}\"\r\n                      [(ngModel)]=\"email\"\r\n                    />\r\n                            <span class=\"error\" *ngIf=\"error.email_valid\">{{LANG.Enter_valid_email_id}}</span>\r\n  \r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col-md-6\">\r\n                  <div class=\"form-group\">\r\n                    <label for=\"exampleInputEmail1\">{{LANG.Password}}</label>\r\n                    <input\r\n                        type=\"password\"\r\n                        class=\"form-control\"\r\n                        name=\"password\"\r\n                        placeholder=\"{{LANG.Enter_password}}\"\r\n                        [(ngModel)]=\"password\"\r\n                        [disabled]=\"editable\"\r\n                      />\r\n                    <span class=\"error\" *ngIf=\"error.password\">{{LANG.This_field_is_required}}</span>\r\n                    <span class=\"error\" *ngIf=\"error.password_valid\">{{LANG.Password_must_be_characters_or_more}}</span>\r\n  \r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col-md-6\">\r\n                  <div class=\"form-group\">\r\n                    <label for=\"exampleInputEmail1\">{{LANG.Department_Type}}</label>\r\n                    <select\r\n                    class=\"form-control custom-select\"\r\n                    name=\"status\"\r\n                    [(ngModel)]=\"status\"\r\n                  >\r\n                    <option value=\"1\">{{LANG.Active}}</option>\r\n                    <option value=\"2\">{{LANG.Inactive}}</option>\r\n                  </select>\r\n  \r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n\r\n              <button *ngIf=\"!load\" type=\"submit\" class=\"btn btn-primary mt-2\" (click)=\"addUsers()\">{{id ? LANG.Update : LANG.Submit}}</button>\r\n              <button class=\"btn btn-primary\" *ngIf=\"load\">                                \r\n                  <loader></loader>\r\n              </button>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/loader/Loader.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/loader/Loader.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"lds-dual-ring\"></div>"

/***/ }),

/***/ "./src/app/Pages/Dashboard/user-management/AddAdmin/add-admin.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/Pages/Dashboard/user-management/AddAdmin/add-admin.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .select2-container{\r\n    width: 100% !important;\r\n}\r\n\r\n.country-code select{\r\n    width: 20%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvRGFzaGJvYXJkL3VzZXItbWFuYWdlbWVudC9BZGRBZG1pbi9hZGQtYWRtaW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL0Rhc2hib2FyZC91c2VyLW1hbmFnZW1lbnQvQWRkQWRtaW4vYWRkLWFkbWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLnNlbGVjdDItY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNvdW50cnktY29kZSBzZWxlY3R7XHJcbiAgICB3aWR0aDogMjAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/Pages/Dashboard/user-management/AddAdmin/add-admin.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/Pages/Dashboard/user-management/AddAdmin/add-admin.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AddAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAdminComponent", function() { return AddAdminComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_app_shared_Services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/Services/user.service */ "./src/app/shared/Services/user.service.ts");
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






var AddAdminComponent = /** @class */ (function () {
    function AddAdminComponent(adminService, toastr, location, route) {
        var _this = this;
        this.adminService = adminService;
        this.toastr = toastr;
        this.location = location;
        this.route = route;
        this.err = false;
        this.load = false;
        this.name = "";
        this.admin_role_id = "";
        this.mobile_number = "";
        this.country_code = "+966";
        this.role_type = [];
        this.roleType = [];
        this.department_type = "";
        this.status = "1";
        this.id = "";
        this.editable = false;
        this.password = "";
        this.email = "";
        this.user_type = [];
        this.roles = [];
        this.user_type_id = "";
        this.error = {
            name: false,
            role_type: false,
            department_type: false,
            mobile_number: false,
            mobile_number_valid: false,
            password: false,
            password_valid: false,
            email: false,
            email_valid: false,
            user_type: false
        };
        this.LANG = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].english_translations;
        this.route.queryParams
            .subscribe(function (params) {
            if (params['id']) {
                _this.id = atob(atob(params['id']));
                _this.getRoles(1);
                _this.editable = true;
            }
        });
    }
    AddAdminComponent.prototype.ngOnInit = function () {
        this.loadSelect2();
        if (!this.id) {
            this.getUserType();
            this.getRoles();
        }
    };
    AddAdminComponent.prototype.getUserDetails = function () {
        var _this = this;
        this.adminService.getAdminDetails(this.id).subscribe(function (res) {
            if (res.status) {
                _this.user_type_id = res.response.role_type || "";
                _this.name = res.response.name;
                _this.department_type = res.response.department_type;
                _this.status = res.response.status;
                _this.country_code = res.response.country_code;
                _this.mobile_number = res.response.mobile_number;
                _this.email = res.response.email;
                _this.password = res.response.password;
                _this.role_type = res.response.department_role.toString().split(",");
                _this.changeDepartmentType(1);
            }
        });
    };
    AddAdminComponent.prototype.getUserType = function (type) {
        var _this = this;
        this.adminService.getUserTpe().subscribe(function (res) {
            if (res.status) {
                _this.user_type = res.response;
                if (type) {
                    _this.getUserDetails();
                }
            }
        });
    };
    AddAdminComponent.prototype.getRoles = function (type) {
        var _this = this;
        this.adminService.adminDepartments().subscribe(function (data) {
            if (data.status) {
                _this.roleType = data.response;
                if (type) {
                    _this.getUserType(1);
                }
            }
        });
    };
    AddAdminComponent.prototype.changeDepartmentType = function (type) {
        var _this = this;
        if (this.department_type == "1") {
            this.roles = this.roleType.menu;
        }
        else {
            this.roles = this.roleType.role;
        }
        setTimeout(function () {
            _this.loadSelect2();
            if (type) {
                $("#role_type").val(_this.role_type);
                $("#role_type").trigger('change');
            }
        }, 100);
    };
    AddAdminComponent.prototype.loadSelect2 = function () {
        $('#role_type').select2();
    };
    AddAdminComponent.prototype.errorHandler = function () {
        this.role_type = $("#role_type").val() || [];
        if (this.user_type_id == undefined || this.user_type_id == '') {
            this.error.user_type = true;
            this.err = true;
        }
        if (this.name == undefined || this.name == '') {
            this.error.name = true;
            this.err = true;
        }
        if (this.email == undefined || this.email == '') {
            this.error.email = true;
            this.err = true;
        }
        if (this.checkEmail(this.email) && !this.error.email) {
            this.error.email_valid = true;
            this.err = true;
        }
        if (this.department_type == undefined || this.department_type == '') {
            this.error.department_type = true;
            this.err = true;
        }
        if (this.role_type.length == 0) {
            this.error.role_type = true;
            this.err = true;
        }
        if (this.password == undefined || this.password == '') {
            this.error.password = true;
            this.err = true;
        }
        if (!this.error.password && this.checkPassword(this.password)) {
            this.error.password_valid = true;
            this.err = true;
        }
        if (this.country_code == "+966") {
            var re = /^([0]{1}[5]{1}[0-9]*)$/;
            var re1 = /^([5]{1}[0-9]*)$/;
            if (!this.error.mobile_number && !re.test(this.mobile_number) && !re1.test(this.mobile_number)) {
                this.error.mobile_number_valid = true;
                this.err = true;
            }
            if (!this.error.mobile_number && re.test(this.mobile_number) && this.mobile_number.length != 10) {
                this.error.mobile_number_valid = true;
                this.err = true;
            }
            if (!this.error.mobile_number && re1.test(this.mobile_number) && this.mobile_number.length != 9) {
                this.error.mobile_number_valid = true;
                this.err = true;
            }
            return;
        }
        if (this.country_code == "+91") {
            if (this.error.mobile_number == false && this.mobile_number.length != 10) {
                this.error.mobile_number_valid = true;
                this.err = true;
            }
            return;
        }
        if (this.error.mobile_number == false && (this.mobile_number.length < 8 || this.mobile_number.length > 10)) {
            this.error.mobile_number_valid = true;
            this.err = true;
        }
    };
    AddAdminComponent.prototype.checkEmail = function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return !re.test(email);
    };
    AddAdminComponent.prototype.checkPassword = function (password) {
        if (password.length < 6) {
            return true;
        }
        return;
    };
    AddAdminComponent.prototype.resetError = function () {
        this.err = false;
        this.load = false;
        this.error = {
            user_type: false,
            name: false,
            role_type: false,
            department_type: false,
            mobile_number: false,
            mobile_number_valid: false,
            password: false,
            password_valid: false,
            email: false,
            email_valid: false,
        };
    };
    AddAdminComponent.prototype.addUsers = function () {
        this.resetError();
        this.errorHandler();
        if (this.err) {
            return;
        }
        var data = {
            "name": this.name,
            "department_type": this.department_type,
            "department_role": this.role_type.toString(),
            "mobile_number": this.mobile_number,
            "country_code": this.country_code,
            "password": this.password,
            "status": this.status,
            "email": this.email,
            "user_type": this.user_type_id,
            "admin_role_id": "2"
        };
        this.load = true;
        if (this.id) {
            data.id = this.id;
            this.update(data);
            return;
        }
        this.add(data);
    };
    AddAdminComponent.prototype.add = function (data) {
        var _this = this;
        this.adminService.addAdmins(data).subscribe(function (res) {
            _this.load = false;
            if (res.status) {
                _this.toastr.successToastr(_this.LANG.User_added_successfully);
                _this.location.back();
                return;
            }
            _this.toastr.warningToastr(res.message);
        });
    };
    AddAdminComponent.prototype.update = function (data) {
        var _this = this;
        this.adminService.updateAdmin(data).subscribe(function (res) {
            _this.load = false;
            if (res.status) {
                _this.toastr.successToastr(_this.LANG.User_updated_successfully);
                _this.location.back();
                return;
            }
            _this.toastr.warningToastr(res.response.message);
        });
    };
    AddAdminComponent.ctorParameters = function () { return [
        { type: src_app_shared_Services_user_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"] },
        { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_0__["Location"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    AddAdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-admin',
            template: __webpack_require__(/*! raw-loader!./add-admin.component.html */ "./node_modules/raw-loader/index.js!./src/app/Pages/Dashboard/user-management/AddAdmin/add-admin.component.html"),
            styles: [__webpack_require__(/*! ./add-admin.component.css */ "./src/app/Pages/Dashboard/user-management/AddAdmin/add-admin.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_shared_Services_user_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], AddAdminComponent);
    return AddAdminComponent;
}());



/***/ }),

/***/ "./src/app/Pages/Dashboard/user-management/AddAdmin/add-admin.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/Pages/Dashboard/user-management/AddAdmin/add-admin.module.ts ***!
  \******************************************************************************/
/*! exports provided: AddAdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAdminModule", function() { return AddAdminModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_shared_loader_Loader_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/loader/Loader.module */ "./src/app/shared/loader/Loader.module.ts");
/* harmony import */ var _add_admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-admin.component */ "./src/app/Pages/Dashboard/user-management/AddAdmin/add-admin.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ChildRoutes = [
    {
        path: 'add-admin',
        component: _add_admin_component__WEBPACK_IMPORTED_MODULE_5__["AddAdminComponent"]
    },
];
var AddAdminModule = /** @class */ (function () {
    function AddAdminModule() {
    }
    AddAdminModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(ChildRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                src_app_shared_loader_Loader_module__WEBPACK_IMPORTED_MODULE_4__["LoaderModule"]
            ],
            declarations: [
                _add_admin_component__WEBPACK_IMPORTED_MODULE_5__["AddAdminComponent"]
            ]
        })
    ], AddAdminModule);
    return AddAdminModule;
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
//# sourceMappingURL=user-management-AddAdmin-add-admin-module.js.map