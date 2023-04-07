(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Home-Sections-SectionList-sectionList-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Pages/Dashboard/Home/Sections/SectionList/sectionList.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Pages/Dashboard/Home/Sections/SectionList/sectionList.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <!-- ============================================================== -->\r\n    <!-- Bread crumb and right sidebar toggle -->\r\n    <!-- ============================================================== -->\r\n    <div class=\"row page-titles\">\r\n        <div class=\"col-md-5 align-self-center\">\r\n            <h4 class=\"text-themecolor\">Section List</h4>\r\n        </div>\r\n        <div class=\"col-md-7 align-self-center text-right\">\r\n            <div class=\"d-flex justify-content-end align-items-center\">\r\n                <ol class=\"breadcrumb\">\r\n                    <li class=\"breadcrumb-item\"><a href=\"javascript:void(0)\">{{LANG.Home}}</a></li>\r\n                    <li class=\"breadcrumb-item active\">Section List</li>\r\n                </ol>\r\n                <button type=\"button\" class=\"btn btn-info d-none d-lg-block m-l-15\" (click)=\"addSection()\" *ngIf=\"type == '9'\"><i\r\n                    class=\"fa fa-plus-circle\"></i> {{LANG.Create_New}}</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"page_loaded\">\r\n        <div class=\"col-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n\r\n\r\n                    <form class=\"mt-4\" *ngIf=\"type == '5' || type == '8'\">\r\n                        <ng-container *ngFor=\"let data of sectionList;let i= index\">\r\n                            <ng-container  *ngIf=\"data.flag == 1\">\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-md-6\">\r\n                                    <div class=\"form-group\">\r\n                                      <label for=\"exampleInputEmail1\">{{LANG.TITLE}}</label>\r\n                                      <input\r\n                                        type=\"email\"\r\n                                        class=\"form-control\"\r\n                                        name=\"title\"\r\n                                        placeholder=\"{{LANG.Enter_Title}}\"\r\n                                        [(ngModel)]=\"data.title\"\r\n                                      />\r\n                                      <span class=\"error\" *ngIf=\"error.title\">{{LANG.This_field_is_required}}</span>\r\n                    \r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-md-6\">\r\n                                    <div class=\"form-group\">\r\n                                      <label for=\"exampleInputPassword1\"\r\n                                        >{{LANG.AR_TITLE}}</label\r\n                                      >\r\n                                      <input\r\n                                        type=\"text\"\r\n                                        class=\"form-control text-right\"\r\n                                        name=\"title_ar\"\r\n                                        placeholder=\"{{LANG.Enter_Ar_title}}\"\r\n                                        [(ngModel)]=\"data.ar_title\"\r\n                                      />\r\n                                      <span class=\"error\" *ngIf=\"error.title_ar\">{{LANG.This_field_is_required}}</span>\r\n                    \r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <button *ngIf=\"!load\" type=\"submit\" class=\"btn btn-primary\" (click)=\"addSectionHeader(data)\">{{LANG.Update}}</button>\r\n                                <button class=\"btn btn-primary\" *ngIf=\"load\">                                \r\n                                    <loader></loader>\r\n                                </button>\r\n                            </ng-container>\r\n                        </ng-container>\r\n                        \r\n            \r\n                      </form>\r\n\r\n\r\n\r\n                    <div class=\"table-responsive m-t-40\">\r\n                        <table id=\"example23\"\r\n                            class=\"display nowrap table table-hover table-striped table-bordered\"\r\n                            cellspacing=\"0\" width=\"100%\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>{{LANG.TITLE}}</th>\r\n                                    <th>{{LANG.AR_TITLE}}</th>\r\n                                    <ng-container *ngIf=\"type !='3' && type != '8'\">\r\n                                        <th>{{LANG.description}}</th>\r\n                                        <th>{{LANG.ar_description}}</th>\r\n                                    </ng-container>\r\n                                    <th>{{LANG.STATUS}}</th>\r\n                                    <th>{{LANG.Action}}</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <ng-container *ngFor=\"let data of sectionList; let i=index;\">\r\n                                    <tr  *ngIf=\"data.flag != 1\">\r\n                                        <td>{{data.title}}</td>\r\n                                        <td>{{data.ar_title}}</td>\r\n    \r\n                                        <ng-container *ngIf=\"type !='3' && type != '8'\">\r\n                                            <td>{{data.description}}</td>\r\n                                            <td>{{data.ar_description}}</td>\r\n                                        </ng-container>\r\n    \r\n                                        <td>{{data.status == '1' ? LANG.Active : LANG.Inactive}}</td>\r\n                                        <td> \r\n                                            <span class=\"del mr-3\" (click)=\"showDeleteModal(data)\" *ngIf=\"type == '9'\"><i class=\"fa fa-trash\"></i></span>\r\n                                            <a (click)=\"edit(data)\"><i class=\"fas fa-edit\"></i></a>\r\n                                        </td>\r\n                                    </tr>   \r\n                                </ng-container>\r\n                                    \r\n                               \r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"modal fade\" id=\"delete\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-body\">\r\n            <p>{{LANG.Are_you_sure_you_want_to_delete_this}}</p>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" *ngIf=\"!load\" data-dismiss=\"modal\" class=\"btn btn-primary btn-danger loader-btn w-30\" id=\"delete\" (click)=\"delete()\">{{LANG.Delete}}</button>\r\n            <button type=\"button\" *ngIf=\"load\" class=\"btn btn-primary btn-danger loader-btn w-30\"><loader></loader></button>\r\n            <button type=\"button\" data-dismiss=\"modal\" class=\"btn loader-btn w-30\" (click)=\"cancel()\" [disabled]=\"load\">{{LANG.Cancel}}</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Pages/Dashboard/Home/Sections/SectionList/sectionList.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/Pages/Dashboard/Home/Sections/SectionList/sectionList.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL0Rhc2hib2FyZC9Ib21lL1NlY3Rpb25zL1NlY3Rpb25MaXN0L3NlY3Rpb25MaXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/Pages/Dashboard/Home/Sections/SectionList/sectionList.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/Pages/Dashboard/Home/Sections/SectionList/sectionList.component.ts ***!
  \************************************************************************************/
/*! exports provided: SectionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionsComponent", function() { return SectionsComponent; });
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





var SectionsComponent = /** @class */ (function () {
    function SectionsComponent(router, route, toastr, kycService, toast) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.toastr = toastr;
        this.kycService = kycService;
        this.toast = toast;
        this.sectionList = [];
        this.delete_data = {};
        this.load = false;
        this.err = false;
        this.LANG = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].english_translations;
        this.title = "";
        this.title_ar = "";
        this.page_loaded = false;
        this.error = {
            title: false,
            title_ar: false,
        };
        this.route.queryParams
            .subscribe(function (params) {
            if (params['type']) {
                _this.page_loaded = false;
                _this.type = atob(atob(params['type']));
                _this.getsectionList();
            }
        });
    }
    SectionsComponent.prototype.ngOnInit = function () {
    };
    SectionsComponent.prototype.addSection = function () {
        this.router.navigate(["/dashboard/add-section"], { queryParams: { type: btoa(btoa(this.type)) } });
    };
    SectionsComponent.prototype.getsectionList = function () {
        var _this = this;
        this.kycService.getSectionList(this.type).subscribe(function (res) {
            if (res.status) {
                _this.sectionList = res.response;
                _this.page_loaded = true;
            }
        });
    };
    SectionsComponent.prototype.edit = function (data) {
        this.router.navigate(["/dashboard/add-section"], { queryParams: { id: btoa(btoa(data.id)) } });
    };
    SectionsComponent.prototype.showDeleteModal = function (data) {
        $("#delete").modal("show");
        this.delete_data = data;
    };
    SectionsComponent.prototype.cancel = function () {
        this.delete_data = {};
    };
    SectionsComponent.prototype.delete = function () {
        var _this = this;
        this.load = true;
        var data = { "id": this.delete_data.id };
        this.kycService.deleteSection(data).subscribe(function (res) {
            _this.load = false;
            if (res.status) {
                $("#delete").modal("hide");
                _this.toast.successToastr(res.response.message);
                _this.getsectionList();
                return;
            }
            _this.toast.warningToastr(res.response.message);
        });
    };
    SectionsComponent.prototype.errorHandler = function () {
        var _this = this;
        this.sectionList.map(function (data) {
            if (data.title == undefined || data.title == '') {
                _this.error.title = true;
                _this.err = true;
            }
            if (data.ar_title == undefined || data.ar_title == '') {
                _this.error.title_ar = true;
                _this.err = true;
            }
        });
    };
    SectionsComponent.prototype.resetError = function () {
        this.err = false;
        this.load = false;
        this.error = {
            title: false,
            title_ar: false,
        };
    };
    SectionsComponent.prototype.addSectionHeader = function (item) {
        this.resetError();
        this.errorHandler();
        if (this.err) {
            return;
        }
        var data = {
            "title": item.title,
            "ar_title": item.ar_title,
            "type": this.type,
            "flag": 1,
            "id": item.id,
            "status": item.status
        };
        this.load = true;
        this.update(data);
    };
    SectionsComponent.prototype.update = function (data) {
        var _this = this;
        this.kycService.updateSection(data).subscribe(function (res) {
            _this.load = false;
            if (res.status) {
                _this.toastr.successToastr(res.response.message);
                _this.getsectionList();
                return;
            }
            _this.toastr.warningToastr(res.message);
        });
    };
    SectionsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_2__["ToastrManager"] },
        { type: src_app_shared_Services_kyc_service__WEBPACK_IMPORTED_MODULE_3__["KYCService"] },
        { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_2__["ToastrManager"] }
    ]; };
    SectionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sections',
            template: __webpack_require__(/*! raw-loader!./sectionList.component.html */ "./node_modules/raw-loader/index.js!./src/app/Pages/Dashboard/Home/Sections/SectionList/sectionList.component.html"),
            styles: [__webpack_require__(/*! ./sectionList.component.css */ "./src/app/Pages/Dashboard/Home/Sections/SectionList/sectionList.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_2__["ToastrManager"], src_app_shared_Services_kyc_service__WEBPACK_IMPORTED_MODULE_3__["KYCService"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_2__["ToastrManager"]])
    ], SectionsComponent);
    return SectionsComponent;
}());



/***/ }),

/***/ "./src/app/Pages/Dashboard/Home/Sections/SectionList/sectionList.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/Pages/Dashboard/Home/Sections/SectionList/sectionList.module.ts ***!
  \*********************************************************************************/
/*! exports provided: SectionListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionListModule", function() { return SectionListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_shared_loader_Loader_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/loader/Loader.module */ "./src/app/shared/loader/Loader.module.ts");
/* harmony import */ var _sectionList_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sectionList.component */ "./src/app/Pages/Dashboard/Home/Sections/SectionList/sectionList.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ChildRoutes = [
    {
        path: 'section-list',
        component: _sectionList_component__WEBPACK_IMPORTED_MODULE_5__["SectionsComponent"]
    },
];
var SectionListModule = /** @class */ (function () {
    function SectionListModule() {
    }
    SectionListModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(ChildRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                src_app_shared_loader_Loader_module__WEBPACK_IMPORTED_MODULE_4__["LoaderModule"]
            ],
            declarations: [
                _sectionList_component__WEBPACK_IMPORTED_MODULE_5__["SectionsComponent"]
            ]
        })
    ], SectionListModule);
    return SectionListModule;
}());



/***/ })

}]);
//# sourceMappingURL=Home-Sections-SectionList-sectionList-module.js.map