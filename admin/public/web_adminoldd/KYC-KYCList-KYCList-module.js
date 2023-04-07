(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["KYC-KYCList-KYCList-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Pages/Dashboard/KYC/KYCList/KYCList.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Pages/Dashboard/KYC/KYCList/KYCList.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <!-- ============================================================== -->\r\n    <!-- Bread crumb and right sidebar toggle -->\r\n    <!-- ============================================================== -->\r\n    <div class=\"row page-titles\">\r\n        <div class=\"col-md-5 align-self-center\">\r\n            <h4 class=\"text-themecolor\">{{LANG.KYC_List}}</h4>\r\n        </div>\r\n        <div class=\"col-md-7 align-self-center text-right\">\r\n            <div class=\"d-flex justify-content-end align-items-center\">\r\n                <ol class=\"breadcrumb\">\r\n                    <li class=\"breadcrumb-item\"><a href=\"javascript:void(0)\">{{LANG.Home}}</a></li>\r\n                    <li class=\"breadcrumb-item active\">{{LANG.KYC_List}}</li>\r\n                </ol>\r\n                <button type=\"button\" class=\"btn btn-info d-none d-lg-block m-l-15\" (click)=\"addKYC()\"><i\r\n                    class=\"fa fa-plus-circle\"></i> {{LANG.Create_New}}</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"table-responsive m-t-40\">\r\n                        <table id=\"example23\"\r\n                            class=\"display nowrap table table-hover table-striped table-bordered\"\r\n                            cellspacing=\"0\" width=\"100%\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>{{LANG.TITLE}}</th>\r\n                                    <th>{{LANG.AR_TITLE}}</th>\r\n                                    <th>{{LANG.Status}}</th>\r\n                                    <th>{{LANG.Position}}</th>\r\n                                    <th>{{LANG.Action}}</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let data of kycList; let i=index;\">\r\n                                    <td>{{data.title}}</td>\r\n                                    <td>{{data.ar_title}}</td>\r\n                                    <td>{{data.status == '1' ? LANG.Active : LANG.Inactive}}</td>\r\n                                    <td>{{data.position}}</td>\r\n                                    <td> \r\n                                        <span class=\"del mr-3\" (click)=\"showDeleteModal(data)\"><i class=\"fa fa-trash\"></i></span>\r\n                                        <a (click)=\"edit(data)\"><i class=\"fas fa-edit\"></i></a>\r\n                                    </td>\r\n                                </tr>   \r\n                               \r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"modal fade\" id=\"delete\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-body\">\r\n            <p>{{LANG.Are_you_sure_you_want_to_delete_this}}</p>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" *ngIf=\"!load\" data-dismiss=\"modal\" class=\"btn btn-primary btn-danger loader-btn w-30\" id=\"delete\" (click)=\"delete()\">{{LANG.Delete}}</button>\r\n            <button type=\"button\" *ngIf=\"load\" class=\"btn btn-primary btn-danger loader-btn w-30\"><loader></loader></button>\r\n            <button type=\"button\" data-dismiss=\"modal\" class=\"btn loader-btn w-30\" (click)=\"cancel()\" [disabled]=\"load\">{{LANG.Cancel}}</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/Pages/Dashboard/KYC/KYCList/KYCList.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/Pages/Dashboard/KYC/KYCList/KYCList.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dt-buttons {\r\n    padding-top: 5px;\r\n    margin-bottom: 15px;\r\n}\r\n.dt-buttons .dt-button {\r\n    padding: 5px 15px;\r\n    border-radius: 0.25rem;\r\n    background: #fb9678;\r\n    color: #fff;\r\n    margin-right: 3px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvRGFzaGJvYXJkL0tZQy9LWUNMaXN0L0tZQ0xpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9QYWdlcy9EYXNoYm9hcmQvS1lDL0tZQ0xpc3QvS1lDTGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmR0LWJ1dHRvbnMge1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuLmR0LWJ1dHRvbnMgLmR0LWJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmI5Njc4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDNweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/Pages/Dashboard/KYC/KYCList/KYCList.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/Pages/Dashboard/KYC/KYCList/KYCList.component.ts ***!
  \******************************************************************/
/*! exports provided: KYCListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KYCListComponent", function() { return KYCListComponent; });
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





var KYCListComponent = /** @class */ (function () {
    function KYCListComponent(router, kycService, toast) {
        this.router = router;
        this.kycService = kycService;
        this.toast = toast;
        this.kycList = [];
        this.delete_data = {};
        this.load = false;
        this.LANG = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].english_translations;
    }
    KYCListComponent.prototype.ngOnInit = function () {
        this.getKYCList();
    };
    KYCListComponent.prototype.addKYC = function () {
        this.router.navigate(["/dashboard/add-kyc"]);
    };
    KYCListComponent.prototype.getKYCList = function (type) {
        var _this = this;
        this.kycService.getKYCList().subscribe(function (res) {
            if (res.status) {
                _this.kycList = res.response;
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
    KYCListComponent.prototype.edit = function (data) {
        this.router.navigate(["/dashboard/add-kyc"], { queryParams: { id: btoa(btoa(data.id)) } });
    };
    KYCListComponent.prototype.showDeleteModal = function (data) {
        $("#delete").modal("show");
        this.delete_data = data;
    };
    KYCListComponent.prototype.cancel = function () {
        this.delete_data = {};
    };
    KYCListComponent.prototype.delete = function () {
        var _this = this;
        this.load = true;
        var data = { "id": this.delete_data.id };
        this.kycService.deleteKYC(data).subscribe(function (res) {
            _this.load = false;
            if (res.status) {
                $("#delete").modal("hide");
                _this.toast.successToastr(_this.LANG.KYC_deleted_successfully);
                _this.getKYCList(1);
                return;
            }
            _this.toast.warningToastr(res.response.message);
        });
    };
    KYCListComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: src_app_shared_Services_kyc_service__WEBPACK_IMPORTED_MODULE_3__["KYCService"] },
        { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_2__["ToastrManager"] }
    ]; };
    KYCListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! raw-loader!./KYCList.component.html */ "./node_modules/raw-loader/index.js!./src/app/Pages/Dashboard/KYC/KYCList/KYCList.component.html"),
            styles: [__webpack_require__(/*! ./KYCList.component.css */ "./src/app/Pages/Dashboard/KYC/KYCList/KYCList.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_app_shared_Services_kyc_service__WEBPACK_IMPORTED_MODULE_3__["KYCService"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_2__["ToastrManager"]])
    ], KYCListComponent);
    return KYCListComponent;
}());



/***/ }),

/***/ "./src/app/Pages/Dashboard/KYC/KYCList/KYCList.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/Pages/Dashboard/KYC/KYCList/KYCList.module.ts ***!
  \***************************************************************/
/*! exports provided: KYCListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KYCListModule", function() { return KYCListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_shared_loader_Loader_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/loader/Loader.module */ "./src/app/shared/loader/Loader.module.ts");
/* harmony import */ var _KYCList_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./KYCList.component */ "./src/app/Pages/Dashboard/KYC/KYCList/KYCList.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ChildRoutes = [
    {
        path: 'list-kyc',
        component: _KYCList_component__WEBPACK_IMPORTED_MODULE_5__["KYCListComponent"]
    },
];
var KYCListModule = /** @class */ (function () {
    function KYCListModule() {
    }
    KYCListModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(ChildRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                src_app_shared_loader_Loader_module__WEBPACK_IMPORTED_MODULE_4__["LoaderModule"]
            ],
            declarations: [
                _KYCList_component__WEBPACK_IMPORTED_MODULE_5__["KYCListComponent"]
            ]
        })
    ], KYCListModule);
    return KYCListModule;
}());



/***/ })

}]);
//# sourceMappingURL=KYC-KYCList-KYCList-module.js.map