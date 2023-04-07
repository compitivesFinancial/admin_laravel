(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Products-ProductAttributes-productAttributes-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Pages/Dashboard/Products/ProductAttributes/productAttributes.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Pages/Dashboard/Products/ProductAttributes/productAttributes.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <!-- ============================================================== -->\r\n    <!-- Bread crumb and right sidebar toggle -->\r\n    <!-- ============================================================== -->\r\n    <div class=\"row page-titles\">\r\n        <div class=\"col-md-5 align-self-center\">\r\n            <h4 class=\"text-themecolor\">{{LANG.Product_Attribute_List}}</h4>\r\n        </div>\r\n        <div class=\"col-md-7 align-self-center text-right\">\r\n            <div class=\"d-flex justify-content-end align-items-center\">\r\n                <ol class=\"breadcrumb\">\r\n                    <li class=\"breadcrumb-item\"><a href=\"javascript:void(0)\">{{LANG.Home}}</a></li>\r\n                    <li class=\"breadcrumb-item active\">{{LANG.Product_Attribute_List}}</li>\r\n                </ol>\r\n                <button type=\"button\" class=\"btn btn-info d-none d-lg-block m-l-15\" (click)=\"addAttributes()\"><i\r\n                    class=\"fa fa-plus-circle\"></i> {{LANG.Create_New}}</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"table-responsive m-t-40\">\r\n                        <table id=\"example23\"\r\n                            class=\"display nowrap table table-hover table-striped table-bordered\"\r\n                            cellspacing=\"0\" width=\"100%\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>{{LANG.TITLE}}</th>\r\n                                    <th>{{LANG.AR_TITLE}}</th>\r\n                                    <th>{{LANG.Status}}</th>\r\n                                    <th>{{LANG.Position}}</th>\r\n                                    <th>{{LANG.Action}}</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let data of productAttributes; let i=index;\">\r\n                                    <td>{{data.title}}</td>\r\n                                    <td>{{data.ar_title}}</td>\r\n                                    <td>{{data.status == '1' ? LANG.Active : LANG.Inactive}}</td>\r\n                                    <td>{{data.position}}</td>\r\n                                    <td> \r\n                                        <span class=\"del mr-3\" (click)=\"showDeleteModal(data)\"><i class=\"fa fa-trash\"></i></span>\r\n                                        <a (click)=\"edit(data)\"><i class=\"fas fa-edit\"></i></a>\r\n                                    </td>\r\n                                </tr>\r\n                               \r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"modal fade\" id=\"delete\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-body\">\r\n            <p>{{LANG.Are_you_sure_you_want_to_delete_this}}</p>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" *ngIf=\"!load\" data-dismiss=\"modal\" class=\"btn btn-primary btn-danger loader-btn w-30\" id=\"delete\" (click)=\"delete()\">{{LANG.Delete}}</button>\r\n            <button type=\"button\" *ngIf=\"load\" class=\"btn btn-primary btn-danger loader-btn w-30\"><loader></loader></button>\r\n            <button type=\"button\" data-dismiss=\"modal\" class=\"btn loader-btn w-30\" (click)=\"cancel()\" [disabled]=\"load\">{{LANG.Cancel}}</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/loader/Loader.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/loader/Loader.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"lds-dual-ring\"></div>"

/***/ }),

/***/ "./src/app/Pages/Dashboard/Products/ProductAttributes/productAttributes.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/Pages/Dashboard/Products/ProductAttributes/productAttributes.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dt-buttons {\r\n    padding-top: 5px;\r\n    margin-bottom: 15px;\r\n}\r\n.dt-buttons .dt-button {\r\n    padding: 5px 15px;\r\n    border-radius: 0.25rem;\r\n    background: #fb9678;\r\n    color: #fff;\r\n    margin-right: 3px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvRGFzaGJvYXJkL1Byb2R1Y3RzL1Byb2R1Y3RBdHRyaWJ1dGVzL3Byb2R1Y3RBdHRyaWJ1dGVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvUGFnZXMvRGFzaGJvYXJkL1Byb2R1Y3RzL1Byb2R1Y3RBdHRyaWJ1dGVzL3Byb2R1Y3RBdHRyaWJ1dGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHQtYnV0dG9ucyB7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG4uZHQtYnV0dG9ucyAuZHQtYnV0dG9uIHtcclxuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxuICAgIGJhY2tncm91bmQ6ICNmYjk2Nzg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbi1yaWdodDogM3B4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/Pages/Dashboard/Products/ProductAttributes/productAttributes.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/Pages/Dashboard/Products/ProductAttributes/productAttributes.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ProductAttributesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductAttributesComponent", function() { return ProductAttributesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_app_shared_Services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/Services/product.service */ "./src/app/shared/Services/product.service.ts");
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





var ProductAttributesComponent = /** @class */ (function () {
    function ProductAttributesComponent(router, productService, toast) {
        this.router = router;
        this.productService = productService;
        this.toast = toast;
        this.productAttributes = [];
        this.delete_data = {};
        this.load = false;
        this.LANG = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].english_translations;
    }
    ProductAttributesComponent.prototype.ngOnInit = function () {
        this.getAttributeList();
    };
    ProductAttributesComponent.prototype.addAttributes = function () {
        this.router.navigate(["/dashboard/add-product-attribute"]);
    };
    ProductAttributesComponent.prototype.getAttributeList = function (type) {
        var _this = this;
        this.productService.getProductAttributes().subscribe(function (res) {
            if (res.status) {
                _this.productAttributes = res.response;
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
    ProductAttributesComponent.prototype.edit = function (data) {
        this.router.navigate(["/dashboard/add-product-attribute"], { queryParams: { id: btoa(btoa(data.id)) } });
    };
    ProductAttributesComponent.prototype.showDeleteModal = function (data) {
        $("#delete").modal("show");
        this.delete_data = data;
    };
    ProductAttributesComponent.prototype.cancel = function () {
        this.delete_data = {};
    };
    ProductAttributesComponent.prototype.delete = function () {
        var _this = this;
        this.load = true;
        var data = { "id": this.delete_data.id };
        this.productService.deleteProductAttributes(data).subscribe(function (res) {
            _this.load = false;
            if (res.status) {
                $("#delete").modal("hide");
                _this.toast.successToastr(_this.LANG.Attribute_deleted_successfully);
                _this.getAttributeList(1);
                return;
            }
            _this.toast.warningToastr(res.response.message);
        });
    };
    ProductAttributesComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: src_app_shared_Services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
        { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_2__["ToastrManager"] }
    ]; };
    ProductAttributesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! raw-loader!./productAttributes.component.html */ "./node_modules/raw-loader/index.js!./src/app/Pages/Dashboard/Products/ProductAttributes/productAttributes.component.html"),
            styles: [__webpack_require__(/*! ./productAttributes.component.css */ "./src/app/Pages/Dashboard/Products/ProductAttributes/productAttributes.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_app_shared_Services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_2__["ToastrManager"]])
    ], ProductAttributesComponent);
    return ProductAttributesComponent;
}());



/***/ }),

/***/ "./src/app/Pages/Dashboard/Products/ProductAttributes/productAttributes.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/Pages/Dashboard/Products/ProductAttributes/productAttributes.module.ts ***!
  \****************************************************************************************/
/*! exports provided: ProductAttributesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductAttributesModule", function() { return ProductAttributesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_shared_loader_Loader_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/loader/Loader.module */ "./src/app/shared/loader/Loader.module.ts");
/* harmony import */ var _productAttributes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./productAttributes.component */ "./src/app/Pages/Dashboard/Products/ProductAttributes/productAttributes.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ChildRoutes = [
    {
        path: 'list-product-attribute',
        component: _productAttributes_component__WEBPACK_IMPORTED_MODULE_5__["ProductAttributesComponent"]
    },
];
var ProductAttributesModule = /** @class */ (function () {
    function ProductAttributesModule() {
    }
    ProductAttributesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(ChildRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                src_app_shared_loader_Loader_module__WEBPACK_IMPORTED_MODULE_4__["LoaderModule"]
            ],
            declarations: [
                _productAttributes_component__WEBPACK_IMPORTED_MODULE_5__["ProductAttributesComponent"]
            ]
        })
    ], ProductAttributesModule);
    return ProductAttributesModule;
}());



/***/ }),

/***/ "./src/app/shared/Services/product.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/Services/product.service.ts ***!
  \****************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Services/api.service */ "./src/app/shared/Services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductService = /** @class */ (function () {
    function ProductService(api) {
        this.api = api;
        this.url = "";
    }
    ProductService.prototype.getProductList = function () {
        this.url = "product_list";
        var query = "";
        return this.api.get(this.url, query);
    };
    ProductService.prototype.getProductAttributes = function () {
        this.url = "list_product_attribute";
        var query = "";
        return this.api.get(this.url, query);
    };
    ProductService.prototype.deleteProductAttributes = function (data) {
        this.url = "delete_product_attribute";
        return this.api.post(this.url, data);
    };
    ProductService.prototype.getProductAttributeDetails = function (id) {
        this.url = "get_by_id/" + id;
        var query = "";
        return this.api.get(this.url, query);
    };
    ProductService.prototype.getProductDetails = function (id) {
        this.url = "get_product_by_id/" + id;
        var query = "";
        return this.api.get(this.url, query);
    };
    ProductService.prototype.getAttributeList = function () {
        this.url = "product_attribute_list";
        var query = "";
        return this.api.get(this.url, query);
    };
    ProductService.prototype.addProductAttributes = function (data) {
        this.url = "add_product_attribute";
        return this.api.post(this.url, data);
    };
    ProductService.prototype.updateProductAttributes = function (data) {
        this.url = "update_product_attribute";
        return this.api.post(this.url, data);
    };
    ProductService.prototype.addProduct = function (data) {
        this.url = "add_product";
        return this.api.post(this.url, data);
    };
    ProductService.prototype.updateProduct = function (data) {
        this.url = "update_product";
        return this.api.post(this.url, data);
    };
    ProductService.prototype.getLoanList = function () {
        this.url = "loan_list";
        var query = "";
        return this.api.get(this.url, query);
    };
    ProductService.prototype.addLoan = function (data) {
        this.url = "loan_insert";
        return this.api.post(this.url, data);
    };
    ProductService.prototype.updateLoan = function (data) {
        this.url = "loan_update";
        return this.api.post(this.url, data);
    };
    ProductService.prototype.getLoanTypeList = function () {
        this.url = "loantype_list";
        var query = "";
        return this.api.get(this.url, query);
    };
    ProductService.prototype.getIRCalculationList = function () {
        this.url = "intrest_calculation_list";
        var query = "";
        return this.api.get(this.url, query);
    };
    ProductService.prototype.getIRFrequencyList = function () {
        this.url = "accruedinterest_list";
        var query = "";
        return this.api.get(this.url, query);
    };
    ProductService.prototype.getIRChargedList = function () {
        this.url = "intrest_rate_charged_list";
        var query = "";
        return this.api.get(this.url, query);
    };
    ProductService.prototype.getGracePeriodList = function () {
        this.url = "graceperiod_list";
        var query = "";
        return this.api.get(this.url, query);
    };
    ProductService.prototype.getPaymentIntervalsList = function () {
        this.url = "payamentintervalmethod_list";
        var query = "";
        return this.api.get(this.url, query);
    };
    ProductService.prototype.addPaymentInfo = function (data) {
        this.url = "repaymentscheduling_insert";
        return this.api.post(this.url, data);
    };
    ProductService.prototype.applyLoan = function (data) {
        this.url = "applyloan";
        return this.api.post(this.url, data);
    };
    ProductService.prototype.getStatement = function (data) {
        this.url = "get_statements";
        return this.api.post(this.url, data);
    };
    ProductService.prototype.getLoadDetails = function (id) {
        this.url = "loanget_by_id/" + id;
        return this.api.get(this.url, "");
    };
    ProductService.prototype.getInvestorList = function (data) {
        this.url = "get_invester_list";
        return this.api.post(this.url, data);
    };
    ProductService.prototype.changeDate = function (data) {
        this.url = "campaign_update_closedate";
        return this.api.post(this.url, data);
    };
    ProductService.ctorParameters = function () { return [
        { type: _Services_api_service__WEBPACK_IMPORTED_MODULE_1__["apiServiceComponent"] }
    ]; };
    ProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_Services_api_service__WEBPACK_IMPORTED_MODULE_1__["apiServiceComponent"]])
    ], ProductService);
    return ProductService;
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
//# sourceMappingURL=Products-ProductAttributes-productAttributes-module.js.map