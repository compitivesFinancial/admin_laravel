(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-pages-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Pages/Dashboard/Pages/pages.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Pages/Dashboard/Pages/pages.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <!-- ============================================================== -->\r\n    <!-- Bread crumb and right sidebar toggle -->\r\n    <!-- ============================================================== -->\r\n    <div class=\"row page-titles\">\r\n        <div class=\"col-md-5 align-self-center\">\r\n            <h4 class=\"text-themecolor\">{{LANG.Pages}}</h4>\r\n        </div>\r\n        <div class=\"col-md-7 align-self-center text-right\">\r\n            <div class=\"d-flex justify-content-end align-items-center\">\r\n                <ol class=\"breadcrumb\">\r\n                    <li class=\"breadcrumb-item\"><a href=\"javascript:void(0)\">{{LANG.Home}}</a></li>\r\n                    <li class=\"breadcrumb-item active\">{{LANG.Pages}}</li>\r\n                </ol>\r\n                <!-- <button type=\"button\" class=\"btn btn-info d-none d-lg-block m-l-15\" (click)=\"addKYC()\"><i\r\n                    class=\"fa fa-plus-circle\"></i> {{LANG.Create_New}}</button> -->\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"table-responsive m-t-40\">\r\n                        <table id=\"example23\"\r\n                            class=\"display nowrap table table-hover table-striped table-bordered\"\r\n                            cellspacing=\"0\" width=\"100%\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>{{LANG.TITLE}}</th>\r\n                                    <th>{{LANG.AR_TITLE}}</th>\r\n                                    <th>{{LANG.description}}</th>\r\n                                    <th>{{LANG.ar_description}}</th>\r\n                                    <th>Type</th>\r\n                                    <th>{{LANG.STATUS}}</th>\r\n                                    <th>{{LANG.POSITION}}</th>\r\n                                    <th>{{LANG.Action}}</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let data of pages_list; let i=index;\">\r\n                                    <td>{{data.title}}</td>\r\n                                    <td>{{data.ar_title}}</td>\r\n                                    <td>{{data.type}}</td>\r\n                                    <td>{{data.description | slice:0:100}} ...</td>\r\n                                    <td>{{data.ar_description | slice:0:100}} ...</td>\r\n                                    <td>{{data.status == '1' ? LANG.Active : LANG.Inactive}}</td>\r\n                                    <td>{{data.position}}</td>\r\n                                    <td> \r\n                                        <!-- <span class=\"del mr-3\" (click)=\"showDeleteModal(data)\"><i class=\"fa fa-trash\"></i></span> -->\r\n                                        <a (click)=\"edit(data)\"><i class=\"fas fa-edit\"></i></a>\r\n                                    </td>\r\n                                </tr>   \r\n                               \r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"modal fade\" id=\"delete\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-body\">\r\n            <p>{{LANG.Are_you_sure_you_want_to_delete_this}}</p>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" *ngIf=\"!load\" data-dismiss=\"modal\" class=\"btn btn-primary btn-danger loader-btn w-30\" id=\"delete\" (click)=\"delete()\">{{LANG.Delete}}</button>\r\n            <button type=\"button\" *ngIf=\"load\" class=\"btn btn-primary btn-danger loader-btn w-30\"><loader></loader></button>\r\n            <button type=\"button\" data-dismiss=\"modal\" class=\"btn loader-btn w-30\" (click)=\"cancel()\" [disabled]=\"load\">{{LANG.Cancel}}</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Pages/Dashboard/Pages/pages.component.css":
/*!***********************************************************!*\
  !*** ./src/app/Pages/Dashboard/Pages/pages.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL0Rhc2hib2FyZC9QYWdlcy9wYWdlcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/Pages/Dashboard/Pages/pages.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/Pages/Dashboard/Pages/pages.component.ts ***!
  \**********************************************************/
/*! exports provided: PagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesComponent", function() { return PagesComponent; });
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





var PagesComponent = /** @class */ (function () {
    function PagesComponent(router, kycService, toast) {
        this.router = router;
        this.kycService = kycService;
        this.toast = toast;
        this.pages_list = [];
        this.delete_data = {};
        this.load = false;
        this.LANG = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].english_translations;
    }
    PagesComponent.prototype.ngOnInit = function () {
        this.getPages();
    };
    PagesComponent.prototype.addKYC = function () {
        this.router.navigate(["/dashboard/add-pages"]);
    };
    PagesComponent.prototype.getPages = function (type) {
        var _this = this;
        this.kycService.getPagesList().subscribe(function (res) {
            if (res.status) {
                _this.pages_list = res.response;
                if (type) {
                    _this.dataTable.destroy();
                }
                setTimeout(function () {
                    _this.dataTable = $('#example23').DataTable({
                        dom: 'Bfrtip',
                        "ordering": false,
                        responsive: true,
                        buttons: [
                            'copy', 'csv', 'excel', 'pdf', 'print'
                        ]
                    });
                    $('.buttons-copy, .buttons-csv, .buttons-print, .buttons-pdf, .buttons-excel').addClass('btn btn-primary mr-1');
                }, 100);
            }
        });
    };
    PagesComponent.prototype.edit = function (data) {
        this.router.navigate(["/dashboard/add-pages"], { queryParams: { id: btoa(btoa(data.id)) } });
    };
    PagesComponent.prototype.showDeleteModal = function (data) {
        $("#delete").modal("show");
        this.delete_data = data;
    };
    PagesComponent.prototype.cancel = function () {
        this.delete_data = {};
    };
    PagesComponent.prototype.delete = function () {
        var _this = this;
        this.load = true;
        var data = { "id": this.delete_data.id };
        this.kycService.deleteEvaluation(data).subscribe(function (res) {
            _this.load = false;
            if (res.status) {
                $("#delete").modal("hide");
                _this.toast.successToastr(_this.LANG.Evaluation_deleted_successfully);
                _this.getPages(1);
                return;
            }
            _this.toast.warningToastr(res.response.message);
        });
    };
    PagesComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: src_app_shared_Services_kyc_service__WEBPACK_IMPORTED_MODULE_3__["KYCService"] },
        { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_2__["ToastrManager"] }
    ]; };
    PagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pages',
            template: __webpack_require__(/*! raw-loader!./pages.component.html */ "./node_modules/raw-loader/index.js!./src/app/Pages/Dashboard/Pages/pages.component.html"),
            styles: [__webpack_require__(/*! ./pages.component.css */ "./src/app/Pages/Dashboard/Pages/pages.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_app_shared_Services_kyc_service__WEBPACK_IMPORTED_MODULE_3__["KYCService"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_2__["ToastrManager"]])
    ], PagesComponent);
    return PagesComponent;
}());



/***/ }),

/***/ "./src/app/Pages/Dashboard/Pages/pages.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/Pages/Dashboard/Pages/pages.module.ts ***!
  \*******************************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_shared_loader_Loader_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/loader/Loader.module */ "./src/app/shared/loader/Loader.module.ts");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages.component */ "./src/app/Pages/Dashboard/Pages/pages.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ChildRoutes = [
    {
        path: 'pages',
        component: _pages_component__WEBPACK_IMPORTED_MODULE_5__["PagesComponent"]
    },
];
var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(ChildRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                src_app_shared_loader_Loader_module__WEBPACK_IMPORTED_MODULE_4__["LoaderModule"]
            ],
            declarations: [
                _pages_component__WEBPACK_IMPORTED_MODULE_5__["PagesComponent"]
            ]
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ })

}]);
//# sourceMappingURL=Pages-pages-module.js.map