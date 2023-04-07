(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-AddPages-addPages-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Pages/Dashboard/Pages/AddPages/addPages.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Pages/Dashboard/Pages/AddPages/addPages.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"row page-titles\">\r\n      <div class=\"col-md-5 align-self-center\">\r\n        <h4 class=\"text-themecolor\">{{LANG.Add_page}}</h4>\r\n      </div>\r\n      <div class=\"col-md-7 align-self-center text-right\">\r\n        <div class=\"d-flex justify-content-end align-items-center\">\r\n          <ol class=\"breadcrumb\">\r\n            <li class=\"breadcrumb-item\"><a href=\"javascript:void(0)\">{{LANG.Home}}</a></li>\r\n            <li class=\"breadcrumb-item active\">{{LANG.Add_page}}</li>\r\n          </ol>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  \r\n    <div class=\"row\">\r\n      <div class=\"col-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-body\">\r\n            <form class=\"mt-4\" [formGroup]=\"descriptionForm\">\r\n              <div class=\"row\">\r\n             \r\n                <div class=\"col-md-6\">\r\n                  <div class=\"form-group\">\r\n                    <label for=\"exampleInputEmail1\">{{LANG.TITLE}}</label>\r\n                    <input\r\n                      type=\"email\"\r\n                      class=\"form-control\"\r\n                      name=\"title\"\r\n                      placeholder=\"{{LANG.Enter_Title}}\"\r\n                      [(ngModel)]=\"title\"\r\n                      formControlName=\"title\"\r\n                      [(ngModel)]=\"ckeditorContent\"\r\n                    >\r\n                    <span class=\"error\" *ngIf=\"error.title\">{{LANG.This_field_is_required}}</span>\r\n  \r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                  <div class=\"form-group\">\r\n                    <label for=\"exampleInputPassword1\"\r\n                      >{{LANG.AR_TITLE}}</label\r\n                    >\r\n                    <input\r\n                      type=\"text\"\r\n                      class=\"form-control text-right\"\r\n                      name=\"ar_title\"\r\n                      placeholder=\"{{LANG.Enter_Ar_title}}\"\r\n                      [(ngModel)]=\"ar_title\"\r\n                    formControlName=\"ar_title\"\r\n                    />\r\n                    <span class=\"error\" *ngIf=\"error.ar_title\">{{LANG.This_field_is_required}}</span>\r\n  \r\n                  </div>\r\n                </div>\r\n               \r\n              </div>\r\n              <div class=\"row mb-3\">\r\n                \r\n  \r\n                <div class=\"col-md-6\">\r\n                  <div class=\"form-group has-success mb-0\">\r\n                    <label class=\"control-label\">{{LANG.Status}}</label>\r\n                    <select\r\n                      class=\"form-control custom-select\"\r\n                      name=\"status\"\r\n                      [(ngModel)]=\"status\"\r\n                    >\r\n                      <option value=\"1\">{{LANG.Active}}</option>\r\n                      <option value=\"2\">{{LANG.Inactive}}</option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n  \r\n                <div class=\"col-md-6\">\r\n                  <div class=\"form-group has-success\">\r\n                    <label class=\"control-label\">{{LANG.Position}}</label>\r\n                    <select\r\n                      class=\"form-control custom-select\"\r\n                      name=\"position\"\r\n                      [(ngModel)]=\"position\"\r\n                     \r\n                    >\r\n                      <option *ngFor=\"let number of positions;let i = index\" value=\"{{number}}\">{{number}}</option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n\r\n\r\n                <div class=\"col-md-6\">\r\n                  <div class=\"form-group has-success\">\r\n                    <label class=\"control-label\">Type</label>\r\n                    <select (change)=\"selectedType($event.target.value)\"\r\n                      class=\"form-control custom-select\"\r\n                      name=\"type\"\r\n                    >\r\n                      <option *ngFor=\"let number of types\" value=\"{{number.id}}\">{{number.title}}</option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row mb-3\">\r\n                <div class=\"col-md-6\">\r\n                  <div class=\"form-group\">\r\n                    <label for=\"exampleInputEmail1\">{{LANG.description}}</label>\r\n                    <textarea\r\n                      type=\"text-right\"\r\n                      class=\"form-control\"\r\n                      name=\"description\"\r\n                      placeholder=\"{{LANG.enter_description}}\"\r\n                      [(ngModel)]=\"description\"\r\n                    id=\"editor\"\r\n                    ></textarea>\r\n                    <span class=\"error\" *ngIf=\"error.description\">{{LANG.This_field_is_required}}</span>\r\n  \r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                  <div class=\"form-group\">\r\n                    <label for=\"exampleInputPassword2\"\r\n                      >{{LANG.ar_description}}</label\r\n                    >\r\n                    <textarea\r\n                      type=\"text\"\r\n                      class=\"form-control\"\r\n                      name=\"ar_description\"\r\n                      placeholder=\"{{LANG.enter_ar_description}}\"\r\n                      [(ngModel)]=\"ar_description\"\r\n                    id=\"editor1\"\r\n                      \r\n\r\n                    ></textarea>\r\n              \r\n                    <span class=\"error\" *ngIf=\"error.ar_description\">{{LANG.This_field_is_required}}</span>\r\n  \r\n                  </div>\r\n                </div>\r\n              \r\n              </div>\r\n              <button *ngIf=\"!load\" type=\"submit\" class=\"btn btn-primary mt-2\" (click)=\"addProductAttribute()\">{{id ? LANG.Update : LANG.Submit}}</button>\r\n              <button class=\"btn btn-primary\" *ngIf=\"load\">                                \r\n                  <loader></loader>\r\n              </button>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/Pages/Dashboard/Pages/AddPages/addPages.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/Pages/Dashboard/Pages/AddPages/addPages.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL0Rhc2hib2FyZC9QYWdlcy9BZGRQYWdlcy9hZGRQYWdlcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/Pages/Dashboard/Pages/AddPages/addPages.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/Pages/Dashboard/Pages/AddPages/addPages.module.ts ***!
  \*******************************************************************/
/*! exports provided: AddPagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPagesModule", function() { return AddPagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_shared_loader_Loader_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/loader/Loader.module */ "./src/app/shared/loader/Loader.module.ts");
/* harmony import */ var _addPages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addPages */ "./src/app/Pages/Dashboard/Pages/AddPages/addPages.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
var ChildRoutes = [
    {
        path: 'add-pages',
        component: _addPages__WEBPACK_IMPORTED_MODULE_5__["AddPagesComponent"]
    },
];
var AddPagesModule = /** @class */ (function () {
    function AddPagesModule() {
    }
    AddPagesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(ChildRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                src_app_shared_loader_Loader_module__WEBPACK_IMPORTED_MODULE_4__["LoaderModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            ],
            declarations: [
                _addPages__WEBPACK_IMPORTED_MODULE_5__["AddPagesComponent"]
            ]
        })
    ], AddPagesModule);
    return AddPagesModule;
}());



/***/ }),

/***/ "./src/app/Pages/Dashboard/Pages/AddPages/addPages.ts":
/*!************************************************************!*\
  !*** ./src/app/Pages/Dashboard/Pages/AddPages/addPages.ts ***!
  \************************************************************/
/*! exports provided: AddPagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPagesComponent", function() { return AddPagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_shared_Services_kyc_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/Services/kyc.service */ "./src/app/shared/Services/kyc.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddPagesComponent = /** @class */ (function () {
    function AddPagesComponent(kycService, toastr, route, location, formBuilder) {
        var _this = this;
        this.kycService = kycService;
        this.toastr = toastr;
        this.route = route;
        this.location = location;
        this.formBuilder = formBuilder;
        this.id = "";
        this.title = "";
        this.ar_title = "";
        this.description = "";
        this.ar_description = "";
        this.status = "1";
        this.position = "1";
        this.type = "";
        this.infoTypeList = [];
        this.fieldType = [];
        this.positions = [];
        this.err = false;
        this.load = false;
        this.error = {
            title: false,
            ar_title: false,
            description: false,
            ar_description: false,
        };
        this.LANG = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].english_translations;
        this.descriptionForm = this.formBuilder.group({
            'title': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            'ar_title': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
        });
        for (var i = 1; i <= 20; i++) {
            this.positions.push(i);
        }
        this.route.queryParams
            .subscribe(function (params) {
            if (params['id']) {
                _this.id = atob(atob(params['id']));
                _this.getKYCDetails();
            }
        });
    }
    AddPagesComponent.prototype.ngOnInit = function () {
        $('#editor').summernote({
            height: 200,
        });
        $('#editor1').summernote({
            height: 200,
        });
        this.getType();
    };
    AddPagesComponent.prototype.errorHandler = function () {
        var description = $("#editor").val();
        var ar_description = $("#editor1").val();
        if (this.title == undefined || this.title == '') {
            this.error.title = true;
            this.err = true;
        }
        if (this.ar_title == undefined || this.ar_title == '') {
            this.error.ar_title = true;
            this.err = true;
        }
        if (description == undefined || description == '') {
            this.error.description = true;
            this.err = true;
        }
        if (ar_description == undefined || ar_description == '') {
            this.error.ar_description = true;
            this.err = true;
        }
    };
    AddPagesComponent.prototype.resetError = function () {
        this.err = false;
        this.load = false;
        this.error = {
            title: false,
            ar_title: false,
            description: false,
            ar_description: false,
        };
    };
    AddPagesComponent.prototype.addProductAttribute = function () {
        this.resetError();
        this.errorHandler();
        if (this.err) {
            return;
        }
        var description = $("#editor").val();
        var ar_description = $("#editor1").val();
        if (this.descriptionForm.valid) {
            var data = {
                "title": this.descriptionForm.controls.title.value,
                "ar_title": this.descriptionForm.controls.ar_title.value,
                "description": description,
                "ar_description": ar_description,
                "status": this.status,
                "position": this.position,
                "kyc_detail": this.ar_description,
                "type": this.selectTupe
            };
            this.load = true;
            if (this.id) {
                data.id = this.id;
                this.update(data);
                return;
            }
            this.add(data);
        }
    };
    AddPagesComponent.prototype.getKYCDetails = function () {
        var _this = this;
        this.kycService.getPagesDetails(this.id).subscribe(function (res) {
            if (res.status) {
                _this.title = res.response.title;
                _this.ar_title = res.response.ar_title;
                _this.description = res.response.description;
                _this.ar_description = res.response.ar_description;
                _this.status = res.response.status;
                _this.position = res.response.position;
                _this.type = res.response.title;
                $('#editor').summernote('code', _this.description);
                $('#editor1').summernote('code', _this.ar_description);
            }
        });
    };
    AddPagesComponent.prototype.add = function (data) {
        var _this = this;
        this.kycService.addPages(data).subscribe(function (res) {
            _this.load = false;
            if (res.status) {
                _this.toastr.successToastr(_this.LANG.KYC_added_successfully);
                _this.location.back();
                return;
            }
            _this.toastr.warningToastr(res.message);
        });
    };
    AddPagesComponent.prototype.update = function (data) {
        var _this = this;
        this.kycService.updatePages(data).subscribe(function (res) {
            _this.load = false;
            if (res.status) {
                _this.toastr.successToastr(_this.LANG.KYC_updated_successfully);
                _this.location.back();
                return;
            }
            _this.toastr.warningToastr(res.message);
        });
    };
    AddPagesComponent.prototype.getType = function () {
        var _this = this;
        this.kycService.getType().subscribe(function (res) {
            _this.types = res.response;
        });
    };
    AddPagesComponent.prototype.selectedType = function (number) {
        console.log(number);
        this.selectTupe = number;
    };
    AddPagesComponent.ctorParameters = function () { return [
        { type: src_app_shared_Services_kyc_service__WEBPACK_IMPORTED_MODULE_4__["KYCService"] },
        { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_2__["ToastrManager"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] }
    ]; };
    AddPagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! raw-loader!./addPages.html */ "./node_modules/raw-loader/index.js!./src/app/Pages/Dashboard/Pages/AddPages/addPages.html"),
            styles: [__webpack_require__(/*! ./addPages.component.css */ "./src/app/Pages/Dashboard/Pages/AddPages/addPages.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_shared_Services_kyc_service__WEBPACK_IMPORTED_MODULE_4__["KYCService"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_2__["ToastrManager"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
    ], AddPagesComponent);
    return AddPagesComponent;
}());



/***/ })

}]);
//# sourceMappingURL=Pages-AddPages-addPages-module.js.map