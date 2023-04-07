(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["KYC-UserRoles-UserRole-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Pages/Dashboard/KYC/UserRoles/UserRole.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Pages/Dashboard/KYC/UserRoles/UserRole.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <!-- ============================================================== -->\r\n    <!-- Bread crumb and right sidebar toggle -->\r\n    <!-- ============================================================== -->\r\n    <div class=\"row page-titles\">\r\n        <div class=\"col-md-5 align-self-center\">\r\n            <h4 class=\"text-themecolor\">{{LANG.User_roles}}</h4>\r\n        </div>\r\n        <div class=\"col-md-7 align-self-center text-right\">\r\n            <div class=\"d-flex justify-content-end align-items-center\">\r\n                <ol class=\"breadcrumb\">\r\n                    <li class=\"breadcrumb-item\"><a href=\"javascript:void(0)\">{{LANG.Home}}</a></li>\r\n                    <li class=\"breadcrumb-item active\">{{LANG.User_roles}}</li>\r\n                </ol>\r\n                <button type=\"button\" class=\"btn btn-info d-none d-lg-block m-l-15\" (click)=\"addInfoType()\"><i\r\n                    class=\"fa fa-plus-circle\"></i> {{LANG.Create_New}}</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"row attributes mt-3\" *ngFor=\"let data of userTypeList;let i=index;\">\r\n                        <div class=\"col-md-6\">\r\n                          <h3>{{data.title}}</h3>\r\n                         \r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                          <ng-container>\r\n                              <select class=\"js-example-basic-multiple multi-id\" name=\"details{{i}}[]\" multiple=\"multiple\" id=\"{{i}}_multi-{{data.id}}\">\r\n                                <option *ngFor=\"let item of kycList;let j=index;\" value=\"{{item.id}},{{item.title}}\">{{item.title}}</option>\r\n                              </select>\r\n                          </ng-container>\r\n                          <!-- <ng-template #single_select>\r\n                            <select class=\"js-example-basic-single single-id\" name=\"details{{i}}\" id=\"single{{i}}-{{data.id}}\">\r\n                              <option *ngFor=\"let item of data.detail;let j=index;\" value=\"{{item.id}}\">{{item.title}}</option>\r\n                            </select> \r\n                          </ng-template> -->\r\n        \r\n                          \r\n                         \r\n                        </div>\r\n                        \r\n                      </div>\r\n                      <div class=\"col-md-12 text-center mt-3\">\r\n                        <button *ngIf=\"!load\" type=\"submit\" class=\"btn btn-primary mt-2\" (click)=\"updateUserRole()\">{{LANG.Update}}</button>\r\n                        <button class=\"btn btn-primary\" *ngIf=\"load\">                                \r\n                            <loader></loader>\r\n                        </button>\r\n                      </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Pages/Dashboard/KYC/UserRoles/UserRole.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/Pages/Dashboard/KYC/UserRoles/UserRole.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep  .select2-container{\r\n    width: 50% !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvRGFzaGJvYXJkL0tZQy9Vc2VyUm9sZXMvVXNlclJvbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL0Rhc2hib2FyZC9LWUMvVXNlclJvbGVzL1VzZXJSb2xlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgIC5zZWxlY3QyLWNvbnRhaW5lcntcclxuICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/Pages/Dashboard/KYC/UserRoles/UserRole.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/Pages/Dashboard/KYC/UserRoles/UserRole.component.ts ***!
  \*********************************************************************/
/*! exports provided: UserRoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoleComponent", function() { return UserRoleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_app_shared_Services_kyc_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/Services/kyc.service */ "./src/app/shared/Services/kyc.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserRoleComponent = /** @class */ (function () {
    function UserRoleComponent(router, kycService, toast) {
        this.router = router;
        this.kycService = kycService;
        this.toast = toast;
        this.userTypeList = [];
        this.kycList = [];
        this.load = false;
        this.LANG = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].english_translations;
    }
    UserRoleComponent.prototype.ngOnInit = function () {
        this.getInfoTypeList();
    };
    UserRoleComponent.prototype.addInfoType = function () {
        this.router.navigate(["/dashboard/add-info-type"]);
    };
    UserRoleComponent.prototype.getInfoTypeList = function () {
        var _this = this;
        this.kycService.getUserTypeList().subscribe(function (res) {
            if (res.status) {
                _this.userTypeList = res.response.user_type;
                _this.getKYCList();
            }
        });
    };
    UserRoleComponent.prototype.getKYCList = function () {
        var _this = this;
        this.kycService.getKYCList().subscribe(function (res) {
            if (res.status) {
                _this.kycList = res.response;
                setTimeout(function () {
                    _this.loadSelect2();
                }, 100);
            }
        });
    };
    UserRoleComponent.prototype.loadSelect2 = function () {
        var _this = this;
        $('.js-example-basic-multiple').select2();
        this.setDefaultValues();
        $(".multi-id").select2().on('change', function (e) {
            _this.handleMultiSelect(e.target.id);
        });
    };
    UserRoleComponent.prototype.setDefaultValues = function () {
        this.userTypeList.map(function (data, i) {
            var values = [];
            data.value.map(function (item) {
                values.push(item.id + "," + item.title);
            });
            var id = "#" + i + "_multi-" + data.id;
            $(id).val(values);
            $(id).trigger('change');
            return;
        });
    };
    UserRoleComponent.prototype.handleMultiSelect = function (id) {
        var _this = this;
        var values = $("#" + id).val() || [];
        var index = id.split("_")[0];
        this.userTypeList[index].value = [];
        values.map(function (data) {
            var id = data.split(",")[0];
            var title = data.split(",")[1];
            var value_index = _this.userTypeList[index].value.findIndex(function (item) { return item.id == id; });
            if (value_index != -1) {
                // this.userTypeList[index].value.splice(value_index,1)
            }
            else {
                var post_data = { "id": id, "title": title };
                _this.userTypeList[index].value.push(post_data);
            }
        });
        console.log(this.userTypeList);
        return;
    };
    UserRoleComponent.prototype.updateUserRole = function () {
        var _this = this;
        this.load = true;
        var data = {
            "user_type": this.userTypeList
        };
        this.kycService.updateUserRole(data).subscribe(function (res) {
            _this.load = false;
            if (res.status) {
                _this.toast.successToastr(_this.LANG.User_roles_updated_successfully);
                return;
            }
            _this.toast.warningToastr(res.response.message);
        });
    };
    UserRoleComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: src_app_shared_Services_kyc_service__WEBPACK_IMPORTED_MODULE_3__["KYCService"] },
        { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_2__["ToastrManager"] }
    ]; };
    UserRoleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! raw-loader!./UserRole.component.html */ "./node_modules/raw-loader/index.js!./src/app/Pages/Dashboard/KYC/UserRoles/UserRole.component.html"),
            styles: [__webpack_require__(/*! ./UserRole.component.css */ "./src/app/Pages/Dashboard/KYC/UserRoles/UserRole.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_app_shared_Services_kyc_service__WEBPACK_IMPORTED_MODULE_3__["KYCService"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_2__["ToastrManager"]])
    ], UserRoleComponent);
    return UserRoleComponent;
}());



/***/ }),

/***/ "./src/app/Pages/Dashboard/KYC/UserRoles/UserRole.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/Pages/Dashboard/KYC/UserRoles/UserRole.module.ts ***!
  \******************************************************************/
/*! exports provided: UserRoleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoleModule", function() { return UserRoleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_shared_loader_Loader_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/loader/Loader.module */ "./src/app/shared/loader/Loader.module.ts");
/* harmony import */ var _UserRole_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UserRole.component */ "./src/app/Pages/Dashboard/KYC/UserRoles/UserRole.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ChildRoutes = [
    {
        path: 'user-role',
        component: _UserRole_component__WEBPACK_IMPORTED_MODULE_5__["UserRoleComponent"]
    },
];
var UserRoleModule = /** @class */ (function () {
    function UserRoleModule() {
    }
    UserRoleModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(ChildRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                src_app_shared_loader_Loader_module__WEBPACK_IMPORTED_MODULE_4__["LoaderModule"]
            ],
            declarations: [
                _UserRole_component__WEBPACK_IMPORTED_MODULE_5__["UserRoleComponent"]
            ]
        })
    ], UserRoleModule);
    return UserRoleModule;
}());



/***/ })

}]);
//# sourceMappingURL=KYC-UserRoles-UserRole-module.js.map