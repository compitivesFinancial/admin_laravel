(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["KYC-InfoType-AddInfoType-AddInfoType-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Pages/Dashboard/KYC/InfoType/AddInfoType/AddInfoType.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Pages/Dashboard/KYC/InfoType/AddInfoType/AddInfoType.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row page-titles\">\r\n    <div class=\"col-md-5 align-self-center\">\r\n      <h4 class=\"text-themecolor\">{{LANG.Add_Info_Type}}</h4>\r\n    </div>\r\n    <div class=\"col-md-7 align-self-center text-right\">\r\n      <div class=\"d-flex justify-content-end align-items-center\">\r\n        <ol class=\"breadcrumb\">\r\n          <li class=\"breadcrumb-item\"><a href=\"javascript:void(0)\">{{LANG.Home}}</a></li>\r\n          <li class=\"breadcrumb-item active\">{{LANG.Add_Info_Type}}</li>\r\n        </ol>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body\">\r\n          <form class=\"mt-4\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"exampleInputEmail1\">{{LANG.Info_Type_Name}}</label>\r\n                  <input\r\n                    type=\"email\"\r\n                    class=\"form-control\"\r\n                    name=\"title\"\r\n                    placeholder=\"{{LANG.Enter_Your_Info_Type_Name}}\"\r\n                    [(ngModel)]=\"title\"\r\n                  />\r\n                  <span class=\"error\" *ngIf=\"error.title\">{{LANG.This_field_is_required}}</span>\r\n\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"exampleInputPassword1\"\r\n                    >{{LANG.Info_Type_Ar_Name}}</label\r\n                  >\r\n                  <input\r\n                    type=\"text\"\r\n                    class=\"form-control text-right\"\r\n                    name=\"title_ar\"\r\n                    placeholder=\"{{LANG.Enter_Your_Info_Type_Ar_Name}}\"\r\n                    [(ngModel)]=\"title_ar\"\r\n                  />\r\n                  <span class=\"error\" *ngIf=\"error.title_ar\">{{LANG.This_field_is_required}}</span>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row p-t-20\">\r\n              <div class=\"col-md-6\">\r\n                <div class=\"form-group has-success mb-0\">\r\n                  <label class=\"control-label\">{{LANG.Status}}</label>\r\n                  <select\r\n                    class=\"form-control custom-select\"\r\n                    name=\"status\"\r\n                    [(ngModel)]=\"status\"\r\n                  >\r\n                    <option value=\"1\">{{LANG.Active}}</option>\r\n                    <option value=\"2\">{{LANG.Inactive}}</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-md-6\">\r\n                <div class=\"form-group has-success\">\r\n                  <label class=\"control-label\">{{LANG.Position}}</label>\r\n                  <select\r\n                    class=\"form-control custom-select\"\r\n                    name=\"position\"\r\n                    [(ngModel)]=\"position\"\r\n                  >\r\n                    <option *ngFor=\"let number of positions;let i = index\" value=\"{{number}}\">{{number}}</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <button *ngIf=\"!load\" type=\"submit\" class=\"btn btn-primary\" (click)=\"addProductAttribute()\">{{id ? LANG.Update : LANG.Submit}}</button>\r\n            <button class=\"btn btn-primary\" *ngIf=\"load\">                                \r\n                <loader></loader>\r\n            </button>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Pages/Dashboard/KYC/InfoType/AddInfoType/AddInfoType.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/Pages/Dashboard/KYC/InfoType/AddInfoType/AddInfoType.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL0Rhc2hib2FyZC9LWUMvSW5mb1R5cGUvQWRkSW5mb1R5cGUvQWRkSW5mb1R5cGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/Pages/Dashboard/KYC/InfoType/AddInfoType/AddInfoType.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/Pages/Dashboard/KYC/InfoType/AddInfoType/AddInfoType.module.ts ***!
  \********************************************************************************/
/*! exports provided: AddInfoTypeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddInfoTypeModule", function() { return AddInfoTypeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_shared_loader_Loader_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/loader/Loader.module */ "./src/app/shared/loader/Loader.module.ts");
/* harmony import */ var _AddInfoType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AddInfoType */ "./src/app/Pages/Dashboard/KYC/InfoType/AddInfoType/AddInfoType.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ChildRoutes = [
    {
        path: 'add-info-type',
        component: _AddInfoType__WEBPACK_IMPORTED_MODULE_5__["AddInfoTypeComponent"]
    },
];
var AddInfoTypeModule = /** @class */ (function () {
    function AddInfoTypeModule() {
    }
    AddInfoTypeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(ChildRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                src_app_shared_loader_Loader_module__WEBPACK_IMPORTED_MODULE_4__["LoaderModule"]
            ],
            declarations: [
                _AddInfoType__WEBPACK_IMPORTED_MODULE_5__["AddInfoTypeComponent"]
            ]
        })
    ], AddInfoTypeModule);
    return AddInfoTypeModule;
}());



/***/ }),

/***/ "./src/app/Pages/Dashboard/KYC/InfoType/AddInfoType/AddInfoType.ts":
/*!*************************************************************************!*\
  !*** ./src/app/Pages/Dashboard/KYC/InfoType/AddInfoType/AddInfoType.ts ***!
  \*************************************************************************/
/*! exports provided: AddInfoTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddInfoTypeComponent", function() { return AddInfoTypeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_shared_Services_kyc_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/Services/kyc.service */ "./src/app/shared/Services/kyc.service.ts");
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






var AddInfoTypeComponent = /** @class */ (function () {
    function AddInfoTypeComponent(kycService, toastr, route, location) {
        var _this = this;
        this.kycService = kycService;
        this.toastr = toastr;
        this.route = route;
        this.location = location;
        this.id = "";
        this.title = "";
        this.title_ar = "";
        this.status = "1";
        this.position = "1";
        this.positions = [];
        this.err = false;
        this.load = false;
        this.error = {
            title: false,
            title_ar: false,
        };
        this.LANG = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].english_translations;
        for (var i = 1; i <= 20; i++) {
            this.positions.push(i);
        }
        this.route.queryParams
            .subscribe(function (params) {
            if (params['id']) {
                _this.id = atob(atob(params['id']));
                _this.getInfoTypeDetails();
            }
        });
    }
    AddInfoTypeComponent.prototype.ngOnInit = function () {
    };
    AddInfoTypeComponent.prototype.errorHandler = function () {
        if (this.title == undefined || this.title == '') {
            this.error.title = true;
            this.err = true;
        }
        if (this.title_ar == undefined || this.title_ar == '') {
            this.error.title_ar = true;
            this.err = true;
        }
    };
    AddInfoTypeComponent.prototype.resetError = function () {
        this.err = false;
        this.load = false;
        this.error = {
            title: false,
            title_ar: false,
        };
    };
    AddInfoTypeComponent.prototype.addProductAttribute = function () {
        this.resetError();
        this.errorHandler();
        if (this.err) {
            return;
        }
        var data = {
            "title": this.title,
            "ar_title": this.title_ar,
            "status": this.status,
            "position": this.position,
        };
        this.load = true;
        if (this.id) {
            data.id = this.id;
            this.update(data);
            return;
        }
        this.add(data);
    };
    AddInfoTypeComponent.prototype.getInfoTypeDetails = function () {
        var _this = this;
        this.kycService.getInfoType(this.id).subscribe(function (res) {
            if (res.status) {
                _this.title = res.response.title;
                _this.title_ar = res.response.ar_title;
                _this.status = res.response.status;
                _this.position = res.response.position;
            }
        });
    };
    AddInfoTypeComponent.prototype.add = function (data) {
        var _this = this;
        this.kycService.addInfoType(data).subscribe(function (res) {
            _this.load = false;
            if (res.status) {
                _this.toastr.successToastr(_this.LANG.Info_Type_added_successfully);
                _this.location.back();
                return;
            }
            _this.toastr.warningToastr(res.message);
        });
    };
    AddInfoTypeComponent.prototype.update = function (data) {
        var _this = this;
        this.kycService.updateInfoType(data).subscribe(function (res) {
            _this.load = false;
            if (res.status) {
                _this.toastr.successToastr(_this.LANG.Info_Type_updated_successfully);
                _this.location.back();
                return;
            }
            _this.toastr.warningToastr(res.message);
        });
    };
    AddInfoTypeComponent.ctorParameters = function () { return [
        { type: src_app_shared_Services_kyc_service__WEBPACK_IMPORTED_MODULE_4__["KYCService"] },
        { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_2__["ToastrManager"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
    ]; };
    AddInfoTypeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! raw-loader!./AddInfoType.component.html */ "./node_modules/raw-loader/index.js!./src/app/Pages/Dashboard/KYC/InfoType/AddInfoType/AddInfoType.component.html"),
            styles: [__webpack_require__(/*! ./AddInfoType.component.css */ "./src/app/Pages/Dashboard/KYC/InfoType/AddInfoType/AddInfoType.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_shared_Services_kyc_service__WEBPACK_IMPORTED_MODULE_4__["KYCService"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_2__["ToastrManager"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], AddInfoTypeComponent);
    return AddInfoTypeComponent;
}());



/***/ })

}]);
//# sourceMappingURL=KYC-InfoType-AddInfoType-AddInfoType-module.js.map