(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["KYC-AddKYC-AddKYC-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Pages/Dashboard/KYC/AddKYC/AddKYC.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Pages/Dashboard/KYC/AddKYC/AddKYC.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row page-titles\">\r\n    <div class=\"col-md-5 align-self-center\">\r\n      <h4 class=\"text-themecolor\">{{LANG.Add_KYC}}</h4>\r\n    </div>\r\n    <div class=\"col-md-7 align-self-center text-right\">\r\n      <div class=\"d-flex justify-content-end align-items-center\">\r\n        <ol class=\"breadcrumb\">\r\n          <li class=\"breadcrumb-item\"><a href=\"javascript:void(0)\">{{LANG.Home}}</a></li>\r\n          <li class=\"breadcrumb-item active\">{{LANG.Add_KYC}}</li>\r\n        </ol>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body\">\r\n          <form class=\"mt-4\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"exampleInputEmail1\">{{LANG.KYC_Name}}</label>\r\n                  <input\r\n                    type=\"email\"\r\n                    class=\"form-control\"\r\n                    name=\"kyc_name\"\r\n                    placeholder=\"{{LANG.Enter_Your_KYC_Name}}\"\r\n                    [(ngModel)]=\"kyc_name\"\r\n                  />\r\n                  <span class=\"error\" *ngIf=\"error.kyc_name\">{{LANG.This_field_is_required}}</span>\r\n\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"exampleInputPassword1\"\r\n                    >{{LANG.KYC_Ar_Name}}</label\r\n                  >\r\n                  <input\r\n                    type=\"text\"\r\n                    class=\"form-control text-right\"\r\n                    name=\"kyc_name_ar\"\r\n                    placeholder=\"{{LANG.Enter_Your_KYC_Ar_Name}}\"\r\n                    [(ngModel)]=\"kyc_name_ar\"\r\n                  />\r\n                  <span class=\"error\" *ngIf=\"error.kyc_name_ar\">{{LANG.This_field_is_required}}</span>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row p-t-20\">\r\n              \r\n\r\n              <div class=\"col-md-6\">\r\n                <div class=\"form-group has-success mb-0\">\r\n                  <label class=\"control-label\">{{LANG.Status}}</label>\r\n                  <select\r\n                    class=\"form-control custom-select\"\r\n                    name=\"status\"\r\n                    [(ngModel)]=\"status\"\r\n                  >\r\n                    <option value=\"1\">{{LANG.Active}}</option>\r\n                    <option value=\"2\">{{LANG.Inactive}}</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-md-6\">\r\n                <div class=\"form-group has-success\">\r\n                  <label class=\"control-label\">{{LANG.Position}}</label>\r\n                  <select\r\n                    class=\"form-control custom-select\"\r\n                    name=\"position\"\r\n                    [(ngModel)]=\"position\"\r\n                  >\r\n                    <option *ngFor=\"let number of positions;let i = index\" value=\"{{number}}\">{{number}}</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12\">\r\n                <h4 class=\"card-title\">{{LANG.KYC_Details}}</h4>\r\n\r\n                <div\r\n                  class=\"row border-class form-group mb-0 p-2 kyc-section\"\r\n                  *ngFor=\"let data of kyc_details; let i = index;\"\r\n                >\r\n                <div class=\"col-md-12 mb-2\">\r\n                  <div class=\"input-group-append justify-content-end\">\r\n                    <button\r\n                      *ngIf=\"i == 0\"\r\n                      class=\"btn btn-success\"\r\n                      type=\"button\"\r\n                      (click)=\"addMore()\"\r\n                    >\r\n                      <i class=\"fa fa-plus\"></i>\r\n                    </button>\r\n                    <button\r\n                      *ngIf=\"i != 0 && data.is_present !=20\"\r\n                      class=\"btn btn-danger\"\r\n                      type=\"button\"\r\n                      (click)=\"remove(i)\"\r\n                    >\r\n                      <i class=\"fa fa-minus\"></i>\r\n                    </button>\r\n                  </div>\r\n\r\n                </div>\r\n                  <div class=\"col-sm-6 nopadding\">\r\n                    <div class=\"form-group\">\r\n                      <input\r\n                        type=\"text\"\r\n                        class=\"form-control\"\r\n                        name=\"detail_title{{i}}\"\r\n                        [(ngModel)]=\"data.title\"\r\n                        placeholder=\"{{LANG.Enter_KYC_Detail_Title}}\"\r\n                      />\r\n                    <span class=\"error\" *ngIf=\"data.title_error\">{{LANG.This_field_is_required}}</span>\r\n\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-6 nopadding\">\r\n                    <div class=\"form-group\">\r\n                      <input\r\n                        type=\"text\"\r\n                        class=\"form-control\"\r\n                        name=\"detail_ar_title{{i}}\"\r\n                        [(ngModel)]=\"data.ar_title\"\r\n                        placeholder=\"{{LANG.Enter_Ar_KYC_Detail_Title}}\"\r\n                      />\r\n                        <span class=\"error\" *ngIf=\"data.ar_title_error\">{{LANG.This_field_is_required}}</span>\r\n\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"col-sm-4 nopadding\">\r\n                    <div class=\"form-group mb-2\">\r\n                      <select\r\n                        class=\"form-control\"\r\n                        id=\"fieldType{{i}}\"\r\n                        name=\"fieldType{{i}}\"\r\n                        [(ngModel)]=\"data.type\"\r\n                      >\r\n                      <option value=\"\" selected disabled>{{LANG.Select_Field_Type}}</option>\r\n\r\n                        <option *ngFor=\"let data of fieldType;let i = index\" value=\"{{data.id}}\">{{data.title}}</option>\r\n                      </select>\r\n                      <span class=\"error\" *ngIf=\"data.type_error\">{{LANG.This_field_is_required}}</span>\r\n\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-4 nopadding\">\r\n                    <div class=\"form-group mb-2\">\r\n                      <select\r\n                        class=\"form-control\"\r\n                        name=\"infoTypeList{{i}}\"\r\n                        [(ngModel)]=\"data.info_type\"\r\n                      >\r\n                      <option value=\"\" selected disabled>{{LANG.Select_Information_Type}}</option>\r\n                        <option *ngFor=\"let data of infoTypeList;let i = index\" value=\"{{data.id}}\">{{data.title}}</option>\r\n                      </select>\r\n                      <span class=\"error\" *ngIf=\"data.info_type_error\">{{LANG.This_field_is_required}}</span>\r\n\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"col-sm-4 nopadding\">\r\n                    <div class=\"form-group mb-0\">\r\n                      <div class=\"input-group\">\r\n                        <select\r\n                          class=\"form-control\"\r\n                          name=\"mandatory{{i}}\"\r\n                          [(ngModel)]=\"data.mandatory\"\r\n                        >\r\n                          <option value=\"\" selected disabled>{{LANG.Select_Mandatory}}</option>\r\n                          <option value=\"1\">{{LANG.Yes}}</option>\r\n                          <option value=\"0\">{{LANG.No}}</option>\r\n                        </select>\r\n                        \r\n                        \r\n                      </div>\r\n                      <span class=\"error\" *ngIf=\"data.mandatory_error\">{{LANG.This_field_is_required}}</span>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"col-sm-4 nopadding\">\r\n                    <div class=\"form-group\">\r\n                      <input\r\n                        type=\"text\"\r\n                        class=\"form-control\"\r\n                        name=\"length{{i}}\"\r\n                        [(ngModel)]=\"data.length\"\r\n                        placeholder=\"{{LANG.Length}}\"\r\n                      />\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"col-sm-4 nopadding\">\r\n                    <div class=\"form-group mb-2\">\r\n                      <select\r\n                        class=\"form-control\"\r\n                        name=\"detail_position{{i}}\"\r\n                        [(ngModel)]=\"data.position\"\r\n                      >\r\n                        <option *ngFor=\"let number of positions;let i = index\" value=\"{{number}}\">{{number}}</option>\r\n                      </select>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"col-sm-4 nopadding\">\r\n                    <div class=\"form-group mb-0\">\r\n                      <div class=\"input-group\">\r\n                        <select\r\n                          class=\"form-control\"\r\n                          name=\"detail_status{{i}}\"\r\n                          [(ngModel)]=\"data.status\"\r\n                        >\r\n                          <option value=\"1\">{{LANG.Active}}</option>\r\n                          <option value=\"0\">{{LANG.Inactive}}</option>\r\n                        </select>\r\n                        \r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <!-- <div class=\"custom-control custom-checkbox mr-sm-2 mb-3\">\r\n                            <input type=\"checkbox\" class=\"custom-control-input\" id=\"checkbox0\" value=\"check\">\r\n                            <label class=\"custom-control-label\" for=\"checkbox0\">Check Me Out !</label>\r\n                        </div> -->\r\n            <button *ngIf=\"!load\" type=\"submit\" class=\"btn btn-primary mt-2\" (click)=\"addProductAttribute()\">{{id ? LANG.Update : LANG.Submit}}</button>\r\n            <button class=\"btn btn-primary\" *ngIf=\"load\">                                \r\n                <loader></loader>\r\n            </button>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Pages/Dashboard/KYC/AddKYC/AddKYC.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/Pages/Dashboard/KYC/AddKYC/AddKYC.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".kyc-section{\r\n    box-shadow: 1px 1px 4px 1px #b1b1b18c;\r\n    padding: 10px 15px;\r\n    margin: 15px 0;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvRGFzaGJvYXJkL0tZQy9BZGRLWUMvQWRkS1lDLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQ0FBcUM7SUFDckMsa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9QYWdlcy9EYXNoYm9hcmQvS1lDL0FkZEtZQy9BZGRLWUMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5reWMtc2VjdGlvbntcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNHB4IDFweCAjYjFiMWIxOGM7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICBtYXJnaW46IDE1cHggMDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/Pages/Dashboard/KYC/AddKYC/AddKYC.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/Pages/Dashboard/KYC/AddKYC/AddKYC.component.ts ***!
  \****************************************************************/
/*! exports provided: AddKycComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddKycComponent", function() { return AddKycComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_shared_Services_kyc_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/Services/kyc.service */ "./src/app/shared/Services/kyc.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddKycComponent = /** @class */ (function () {
    function AddKycComponent(kycService, toastr, route, location) {
        var _this = this;
        this.kycService = kycService;
        this.toastr = toastr;
        this.route = route;
        this.location = location;
        this.initialProducts = {
            "type": "",
            "info_type": "",
            "title": "",
            "ar_title": "",
            "position": "1",
            "status": "1",
            "mandatory": "",
            "length": ""
        };
        this.id = "";
        this.kyc_name = "";
        this.kyc_name_ar = "";
        this.status = "1";
        this.position = "1";
        this.infoTypeList = [];
        this.fieldType = [];
        this.positions = [];
        this.kyc_details = [__assign({}, this.initialProducts)];
        this.err = false;
        this.load = false;
        this.error = {
            kyc_name: false,
            kyc_name_ar: false,
        };
        this.LANG = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].english_translations;
        for (var i = 1; i <= 20; i++) {
            this.positions.push(i);
        }
        this.fieldType = [
            { id: 1, title: "Characters" },
            { id: 2, title: "Email" },
            { id: 3, title: "Textarea" },
            { id: 4, title: "Mobile" },
            { id: 5, title: "Fileupload" },
            { id: 6, title: "Number" },
            { id: 7, title: "Date" },
            { id: 8, title: "Yes/No" },
            { id: 9, title: "Commercial Number" }
        ];
        this.route.queryParams
            .subscribe(function (params) {
            if (params['id']) {
                _this.id = atob(atob(params['id']));
                _this.getKYCDetails();
            }
        });
    }
    AddKycComponent.prototype.ngOnInit = function () {
        this.getInfoTypeList();
    };
    AddKycComponent.prototype.getInfoTypeList = function () {
        var _this = this;
        this.kycService.getInfoTypeList().subscribe(function (res) {
            if (res.status) {
                _this.infoTypeList = res.response;
            }
        });
    };
    AddKycComponent.prototype.addMore = function () {
        var new_product = __assign({}, this.initialProducts);
        new_product.position = (this.kyc_details.length + 1).toString();
        this.kyc_details.push(new_product);
    };
    AddKycComponent.prototype.remove = function (i) {
        this.kyc_details.splice(i, 1);
    };
    AddKycComponent.prototype.errorHandler = function () {
        var _this = this;
        if (this.kyc_name == undefined || this.kyc_name == '') {
            this.error.kyc_name = true;
            this.err = true;
        }
        if (this.kyc_name_ar == undefined || this.kyc_name_ar == '') {
            this.error.kyc_name_ar = true;
            this.err = true;
        }
        this.kyc_details.map(function (data) {
            if (data.title == "" || data.title == undefined) {
                data.title_error = true;
                _this.err = true;
            }
            else {
                data.title_error = false;
            }
            if (data.ar_title == "" || data.ar_title == undefined) {
                data.ar_title_error = true;
                _this.err = true;
            }
            else {
                data.ar_title_error = false;
            }
            if (data.type == "" || data.type == undefined) {
                data.type_error = true;
                _this.err = true;
            }
            else {
                data.type_error = false;
            }
            if (data.info_type == "" || data.info_type == undefined) {
                data.info_type_error = true;
                _this.err = true;
            }
            else {
                data.info_type_error = false;
            }
            if (data.mandatory == "" || data.mandatory == undefined) {
                data.mandatory_error = true;
                _this.err = true;
            }
            else {
                data.mandatory_error = false;
            }
        });
    };
    AddKycComponent.prototype.resetError = function () {
        this.err = false;
        this.load = false;
        this.error = {
            kyc_name: false,
            kyc_name_ar: false,
        };
    };
    AddKycComponent.prototype.addProductAttribute = function () {
        this.resetError();
        this.errorHandler();
        if (this.err) {
            return;
        }
        var data = {
            "title": this.kyc_name,
            "ar_title": this.kyc_name_ar,
            "status": this.status,
            "position": this.position,
            "kyc_detail": this.kyc_details
        };
        this.load = true;
        if (this.id) {
            data.id = this.id;
            this.update(data);
            return;
        }
        this.add(data);
    };
    AddKycComponent.prototype.getKYCDetails = function () {
        var _this = this;
        this.kycService.getKYCDetails(this.id).subscribe(function (res) {
            if (res.status) {
                _this.kyc_name = res.response.title;
                _this.kyc_name_ar = res.response.ar_title;
                _this.status = res.response.status;
                _this.position = res.response.position;
                _this.kyc_details = res.response.kyc_detail || [__assign({}, _this.initialProducts)];
                _this.kyc_details.map(function (data) {
                    data.detail_title = data.title,
                        data.detail_ar_title = data.ar_title;
                });
            }
        });
    };
    AddKycComponent.prototype.add = function (data) {
        var _this = this;
        this.kycService.addKYC(data).subscribe(function (res) {
            _this.load = false;
            if (res.status) {
                _this.toastr.successToastr(_this.LANG.KYC_added_successfully);
                _this.location.back();
                return;
            }
            _this.toastr.warningToastr(res.message);
        });
    };
    AddKycComponent.prototype.update = function (data) {
        var _this = this;
        this.kycService.updateKYC(data).subscribe(function (res) {
            _this.load = false;
            if (res.status) {
                _this.toastr.successToastr(_this.LANG.KYC_updated_successfully);
                _this.location.back();
                return;
            }
            _this.toastr.warningToastr(res.message);
        });
    };
    AddKycComponent.ctorParameters = function () { return [
        { type: src_app_shared_Services_kyc_service__WEBPACK_IMPORTED_MODULE_4__["KYCService"] },
        { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_2__["ToastrManager"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
    ]; };
    AddKycComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! raw-loader!./AddKYC.component.html */ "./node_modules/raw-loader/index.js!./src/app/Pages/Dashboard/KYC/AddKYC/AddKYC.component.html"),
            styles: [__webpack_require__(/*! ./AddKYC.component.css */ "./src/app/Pages/Dashboard/KYC/AddKYC/AddKYC.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_shared_Services_kyc_service__WEBPACK_IMPORTED_MODULE_4__["KYCService"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_2__["ToastrManager"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], AddKycComponent);
    return AddKycComponent;
}());



/***/ }),

/***/ "./src/app/Pages/Dashboard/KYC/AddKYC/AddKYC.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/Pages/Dashboard/KYC/AddKYC/AddKYC.module.ts ***!
  \*************************************************************/
/*! exports provided: AddKYCModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddKYCModule", function() { return AddKYCModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_shared_loader_Loader_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/loader/Loader.module */ "./src/app/shared/loader/Loader.module.ts");
/* harmony import */ var _AddKYC_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AddKYC.component */ "./src/app/Pages/Dashboard/KYC/AddKYC/AddKYC.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ChildRoutes = [
    {
        path: 'add-kyc',
        component: _AddKYC_component__WEBPACK_IMPORTED_MODULE_5__["AddKycComponent"]
    },
];
var AddKYCModule = /** @class */ (function () {
    function AddKYCModule() {
    }
    AddKYCModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(ChildRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                src_app_shared_loader_Loader_module__WEBPACK_IMPORTED_MODULE_4__["LoaderModule"]
            ],
            declarations: [
                _AddKYC_component__WEBPACK_IMPORTED_MODULE_5__["AddKycComponent"]
            ]
        })
    ], AddKYCModule);
    return AddKYCModule;
}());



/***/ })

}]);
//# sourceMappingURL=KYC-AddKYC-AddKYC-module.js.map