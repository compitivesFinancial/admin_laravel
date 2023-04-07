(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Products-ProductList-productList-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Pages/Dashboard/Products/ProductList/productList.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Pages/Dashboard/Products/ProductList/productList.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <!-- ============================================================== -->\r\n    <!-- Bread crumb and right sidebar toggle -->\r\n    <!-- ============================================================== -->\r\n    <div class=\"row page-titles\">\r\n        <div class=\"col-md-5 align-self-center\">\r\n            <h4 class=\"text-themecolor\">{{LANG.Produc_List}}</h4>\r\n        </div>\r\n        <div class=\"col-md-7 align-self-center text-right\">\r\n            <div class=\"d-flex justify-content-end align-items-center\">\r\n                <ol class=\"breadcrumb\">\r\n                    <li class=\"breadcrumb-item\"><a href=\"javascript:void(0)\">{{LANG.Home}}</a></li>\r\n                    <li class=\"breadcrumb-item active\">{{LANG.Produc_List}}</li>\r\n                </ol>\r\n                <button type=\"button\" class=\"btn btn-info d-none d-lg-block m-l-15\" (click)=\"addAttributes()\"><i\r\n                    class=\"fa fa-plus-circle\"></i> {{LANG.Create_New}}</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-3 p-0\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body  p-0 content card-body-1\">\r\n                    <div class=\"table-responsive m-t-40\">\r\n                        <table id=\"example23\"\r\n                            class=\"display nowrap table table-hover table-striped table-bordered\"\r\n                            cellspacing=\"0\" width=\"96%\">\r\n                            <thead>\r\n                                <!-- <tr>\r\n                                    <th>Instrument with End Client</th>\r\n                                    <th *ngFor=\"let data of productAttributes; let i=index;\">{{data.title}}</th>\r\n                                </tr> -->\r\n                            </thead>\r\n                            <tbody  class=\"table-tr\">\r\n                                <tr *ngFor=\"let data of productAttributes; let i=index; \" >\r\n                                    <th style=\"height: 73px;\">{{data.title}}</th>\r\n                                   \r\n                                    <!-- <ng-container *ngFor=\"let item of productList; let j=index;\">\r\n                                        <td *ngIf=\"i==0\">{{item.title}} <a class=\"ml-3\" (click)=\"edit(item)\"><i class=\"fas fa-edit\"></i></a></td>\r\n                                        <ng-container *ngFor=\"let items of item.product_attribute_detail;let k = index;\">\r\n                                            <td *ngIf=\"k+1 == i\">{{items.value}}</td>\r\n                                        </ng-container>\r\n                                    </ng-container> -->\r\n                                </tr> \r\n                                \r\n                            </tbody>\r\n                        </table>  \r\n                    </div>\r\n                </div>\r\n            </div>\r\n            \r\n            \r\n        </div>\r\n        <div class=\"col-9 p-0\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body p-0\">\r\n                    <div class=\"table-responsive\">\r\n                        <table  class=\"display nowrap table table-hover table-striped table-bordered\">\r\n                            <tbody>\r\n                                <div class=\"table-responsive m-t-40\">\r\n                                    <tr *ngFor=\"let data of productAttributes; let i=index;\">\r\n                                        \r\n                                        <ng-container *ngFor=\"let item of productList; let j=index;\">\r\n                                            <td *ngIf=\"i==0\">{{item.title}} <a class=\"ml-3\" (click)=\"edit(item)\"><i class=\"fas fa-edit\"></i></a></td>\r\n                                            <ng-container *ngFor=\"let items of item.product_attribute_detail;let k = index;\">\r\n                                                <td *ngIf=\"k+1 == i\">{{items.value}}</td>\r\n                                            </ng-container>\r\n                                        </ng-container> \r\n                                    </tr>\r\n                                    \r\n                            </div>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            \r\n           \r\n        </div>\r\n       \r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Pages/Dashboard/Products/ProductList/limit-words.pipe.ts":
/*!**************************************************************************!*\
  !*** ./src/app/Pages/Dashboard/Products/ProductList/limit-words.pipe.ts ***!
  \**************************************************************************/
/*! exports provided: LimitWordsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LimitWordsPipe", function() { return LimitWordsPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LimitWordsPipe = /** @class */ (function () {
    function LimitWordsPipe() {
    }
    LimitWordsPipe.prototype.transform = function (value, limit) {
        return value.length > limit
            ? value
                .split(" ")
                .slice(0, limit)
                .join(" ") + "..."
            : value;
    };
    LimitWordsPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: "limitWords"
        })
    ], LimitWordsPipe);
    return LimitWordsPipe;
}());



/***/ }),

/***/ "./src/app/Pages/Dashboard/Products/ProductList/productList.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/Pages/Dashboard/Products/ProductList/productList.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dt-buttons {\r\n    padding-top: 5px;\r\n    margin-bottom: 15px;\r\n}\r\n.dt-buttons .dt-button {\r\n    padding: 5px 15px;\r\n    border-radius: 0.25rem;\r\n    background: #fb9678;\r\n    color: #fff;\r\n    margin-right: 3px;\r\n}\r\n/* .card{\r\n    margin-right: 250px;\r\n} */\r\n.col-3 {\r\n   \r\n    -webkit-box-flex: 2;\r\n   \r\n            flex: 2 0 60px;\r\n    margin-top: 0px;\r\n    font-size: 14;\r\n}\r\n.card-body-1 {\r\n    /* background-color: #7460ee; */\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvRGFzaGJvYXJkL1Byb2R1Y3RzL1Byb2R1Y3RMaXN0L3Byb2R1Y3RMaXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCO0FBQ0E7O0dBRUc7QUFHSDs7SUFFSSxtQkFBYzs7WUFBZCxjQUFjO0lBQ2QsZUFBZTtJQUNmLGFBQWE7QUFDakI7QUFFQTtJQUNJLCtCQUErQjtBQUNuQyIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL0Rhc2hib2FyZC9Qcm9kdWN0cy9Qcm9kdWN0TGlzdC9wcm9kdWN0TGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmR0LWJ1dHRvbnMge1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuLmR0LWJ1dHRvbnMgLmR0LWJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmI5Njc4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDNweDtcclxufVxyXG4vKiAuY2FyZHtcclxuICAgIG1hcmdpbi1yaWdodDogMjUwcHg7XHJcbn0gKi9cclxuXHJcblxyXG4uY29sLTMge1xyXG4gICBcclxuICAgIGZsZXg6IDIgMCA2MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNDtcclxufVxyXG5cclxuLmNhcmQtYm9keS0xIHtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICM3NDYwZWU7ICovXHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/Pages/Dashboard/Products/ProductList/productList.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/Pages/Dashboard/Products/ProductList/productList.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_Services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/Services/product.service */ "./src/app/shared/Services/product.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(router, productService) {
        this.router = router;
        this.productService = productService;
        this.productList = [];
        this.productAttributes = [];
        this.LANG = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].english_translations;
    }
    ProductListComponent.prototype.ngOnInit = function () {
        this.getAttributeList();
    };
    ProductListComponent.prototype.addAttributes = function () {
        this.router.navigate(["/dashboard/add-products"]);
    };
    ProductListComponent.prototype.getProductList = function () {
        var _this = this;
        this.productService.getProductList().subscribe(function (res) {
            if (res.status) {
                _this.productList = res.response;
                // setTimeout(() => {   
                //   $('#example23').DataTable({
                //     dom: 'Bfrtip',
                //     "ordering": false,
                //     responsive: true,
                //     buttons: [
                //         'copy', 'csv', 'excel', 'pdf', 'print'
                //     ]
                // });
                // $('.buttons-copy, .buttons-csv, .buttons-print, .buttons-pdf, .buttons-excel').addClass('btn btn-primary mr-1');
                // }, 100);
            }
        });
    };
    ProductListComponent.prototype.getAttributeList = function () {
        var _this = this;
        this.productService.getProductAttributes().subscribe(function (res) {
            if (res.status) {
                _this.productAttributes = res.response;
                _this.productAttributes.unshift({ title: "Instrument with End Client" });
                _this.getProductList();
            }
        });
    };
    ProductListComponent.prototype.edit = function (data) {
        this.router.navigate(["/dashboard/add-products"], { queryParams: { id: btoa(btoa(data.id)) } });
    };
    ProductListComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: src_app_shared_Services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }
    ]; };
    ProductListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! raw-loader!./productList.component.html */ "./node_modules/raw-loader/index.js!./src/app/Pages/Dashboard/Products/ProductList/productList.component.html"),
            styles: [__webpack_require__(/*! ./productList.component.css */ "./src/app/Pages/Dashboard/Products/ProductList/productList.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_app_shared_Services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./src/app/Pages/Dashboard/Products/ProductList/productList.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/Pages/Dashboard/Products/ProductList/productList.module.ts ***!
  \****************************************************************************/
/*! exports provided: ProductListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListModule", function() { return ProductListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _productList_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./productList.component */ "./src/app/Pages/Dashboard/Products/ProductList/productList.component.ts");
/* harmony import */ var _limit_words_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./limit-words.pipe */ "./src/app/Pages/Dashboard/Products/ProductList/limit-words.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { LoaderModule } from 'src/app/shared/loader/Loader.module';


var ChildRoutes = [
    {
        path: 'product-list',
        component: _productList_component__WEBPACK_IMPORTED_MODULE_4__["ProductListComponent"]
    },
];
var ProductListModule = /** @class */ (function () {
    function ProductListModule() {
    }
    ProductListModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(ChildRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            ],
            declarations: [
                _productList_component__WEBPACK_IMPORTED_MODULE_4__["ProductListComponent"],
                _limit_words_pipe__WEBPACK_IMPORTED_MODULE_5__["LimitWordsPipe"]
            ]
        })
    ], ProductListModule);
    return ProductListModule;
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



/***/ })

}]);
//# sourceMappingURL=Products-ProductList-productList-module.js.map