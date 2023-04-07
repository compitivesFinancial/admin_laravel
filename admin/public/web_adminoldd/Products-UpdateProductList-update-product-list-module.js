(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Products-UpdateProductList-update-product-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Pages/Dashboard/Products/UpdateProductList/update-product-list.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Pages/Dashboard/Products/UpdateProductList/update-product-list.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"row page-titles\">\r\n      <div class=\"col-md-5 align-self-center\">\r\n        <h4 class=\"text-themecolor\">{{id ? LANG.Update :LANG.Add}} {{LANG.Products}}</h4>\r\n      </div>\r\n      <div class=\"col-md-7 align-self-center text-right\">\r\n        <div class=\"d-flex justify-content-end align-items-center\">\r\n          <ol class=\"breadcrumb\">\r\n            <li class=\"breadcrumb-item\"><a href=\"javascript:void(0)\">{{LANG.Home}}</a></li>\r\n            <li class=\"breadcrumb-item active\">{{id ? LANG.Update :LANG.Add}} {{LANG.Products}}</li>\r\n          </ol>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  \r\n    <div class=\"row\">\r\n      <div class=\"col-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-body\">\r\n            <form class=\"mt-4\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                  <div class=\"form-group\">\r\n                    <label for=\"exampleInputEmail1\">{{LANG.Product_Name}}</label>\r\n                    <input\r\n                      type=\"email\"\r\n                      class=\"form-control\"\r\n                      name=\"product_name\"\r\n                      placeholder=\"{{LANG.Enter_Your_Product_Name}}\"\r\n                      [(ngModel)]=\"product_name\"\r\n                    />\r\n                    <span class=\"error\" *ngIf=\"error.product_name\">{{LANG.This_field_is_required}}</span>\r\n  \r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                  <div class=\"form-group\">\r\n                    <label for=\"exampleInputPassword1\"\r\n                      >{{LANG.Product_Ar_Name}}</label\r\n                    >\r\n                    <input\r\n                      type=\"text\"\r\n                      class=\"form-control text-right\"\r\n                      name=\"product_name_ar\"\r\n                      placeholder=\"{{LANG.Enter_Your_Product_Ar_Name}}\"\r\n                      [(ngModel)]=\"product_name_ar\"\r\n                    />\r\n                    <span class=\"error\" *ngIf=\"error.product_name_ar\">{{LANG.This_field_is_required}}</span>\r\n  \r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row p-t-20\">\r\n                \r\n  \r\n                <div class=\"col-md-6\">\r\n                  <div class=\"form-group has-success mb-0\">\r\n                    <label class=\"control-label\">{{LANG.Status}}</label>\r\n                    <select\r\n                      class=\"form-control custom-select\"\r\n                      name=\"status\"\r\n                      [(ngModel)]=\"status\"\r\n                    >\r\n                      <option value=\"1\">{{LANG.Active}}</option>\r\n                      <option value=\"2\">{{LANG.Inactive}}</option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n  \r\n                <div class=\"col-md-6\">\r\n                  <div class=\"form-group has-success\">\r\n                    <label class=\"control-label\">{{LANG.Position}}</label>\r\n                    <select\r\n                      class=\"form-control custom-select\"\r\n                      name=\"position\"\r\n                      [(ngModel)]=\"position\"\r\n                    >\r\n                      <option *ngFor=\"let number of positions;let i = index\" value=\"{{number}}\">{{number}}</option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n  \r\n              <div class=\"row attributes\" *ngFor=\"let data of productAttributes;let i=index;\">\r\n                <div class=\"col-md-6\">\r\n                  <h3>{{data.title}}</h3>\r\n                 \r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                  <ng-container *ngIf=\"data.multiselect == 1;else single_select;\">\r\n                      <select class=\"js-example-basic-multiple multi-id\" name=\"details{{i}}[]\" multiple=\"multiple\" id=\"multi{{i}}-{{data.id}}\">\r\n                        <option *ngFor=\"let item of data.detail;let j=index;\" value=\"{{item.id}}\">{{item.title}}</option>\r\n                      </select>\r\n                  </ng-container>\r\n                  <ng-template #single_select>\r\n                    <select class=\"js-example-basic-single single-id\" name=\"details{{i}}\" id=\"single{{i}}-{{data.id}}\">\r\n                      <option *ngFor=\"let item of data.detail;let j=index;\" value=\"{{item.id}}\">{{item.title}}</option>\r\n                    </select>\r\n                  </ng-template>\r\n\r\n                  \r\n                 \r\n                </div>\r\n              </div>\r\n              <button *ngIf=\"!load\" type=\"submit\" class=\"btn btn-primary\" (click)=\"addProduct()\">{{id ? LANG.Update : LANG.Add}}</button>\r\n              <button class=\"btn btn-primary\" *ngIf=\"load\">                                \r\n                  <loader></loader>\r\n              </button>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/loader/Loader.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/loader/Loader.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"lds-dual-ring\"></div>"

/***/ }),

/***/ "./src/app/Pages/Dashboard/Products/UpdateProductList/update-product-list.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/Pages/Dashboard/Products/UpdateProductList/update-product-list.component.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".attributes{\r\n    margin:20px 0;\r\n}\r\n\r\n::ng-deep .select2-container{\r\n    width: 70% !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvRGFzaGJvYXJkL1Byb2R1Y3RzL1VwZGF0ZVByb2R1Y3RMaXN0L3VwZGF0ZS1wcm9kdWN0LWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9QYWdlcy9EYXNoYm9hcmQvUHJvZHVjdHMvVXBkYXRlUHJvZHVjdExpc3QvdXBkYXRlLXByb2R1Y3QtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF0dHJpYnV0ZXN7XHJcbiAgICBtYXJnaW46MjBweCAwO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnNlbGVjdDItY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDcwJSAhaW1wb3J0YW50O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/Pages/Dashboard/Products/UpdateProductList/update-product-list.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/Pages/Dashboard/Products/UpdateProductList/update-product-list.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: UpdateProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateProductListComponent", function() { return UpdateProductListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_app_shared_Services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/Services/product.service */ "./src/app/shared/Services/product.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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






var UpdateProductListComponent = /** @class */ (function () {
    function UpdateProductListComponent(productService, toastr, route, location) {
        var _this = this;
        this.productService = productService;
        this.toastr = toastr;
        this.route = route;
        this.location = location;
        this.id = "";
        this.productDetails = {};
        this.product_name = "";
        this.product_name_ar = "";
        this.status = "1";
        this.position = "1";
        this.multiselect = "1";
        this.positions = [];
        this.err = false;
        this.load = false;
        this.error = {
            product_name: false,
            product_name_ar: false,
        };
        this.productAttributes = [];
        this.productAttributeDetail = [];
        this.LANG = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].english_translations;
        for (var i = 1; i <= 20; i++) {
            this.positions.push(i);
        }
        this.route.queryParams
            .subscribe(function (params) {
            if (params['id']) {
                _this.id = atob(atob(params['id']));
                _this.getProductDetails();
            }
            else {
                _this.getAttributeList();
            }
        });
    }
    UpdateProductListComponent.prototype.ngOnInit = function () {
    };
    UpdateProductListComponent.prototype.errorHandler = function () {
        if (this.product_name == undefined || this.product_name == '') {
            this.error.product_name = true;
            this.err = true;
        }
        if (this.product_name_ar == undefined || this.product_name_ar == '') {
            this.error.product_name_ar = true;
            this.err = true;
        }
    };
    UpdateProductListComponent.prototype.resetError = function () {
        this.err = false;
        this.load = false;
        this.error = {
            product_name: false,
            product_name_ar: false,
        };
    };
    UpdateProductListComponent.prototype.addProduct = function () {
        this.resetError();
        this.errorHandler();
        if (this.err) {
            return;
        }
        var data = {
            "title": this.product_name,
            "ar_title": this.product_name_ar,
            "status": this.status,
            "position": this.position,
            "product_detail": this.productDetails.product_detail
        };
        this.load = true;
        if (this.id) {
            this.update(data);
            return;
        }
        this.add(data);
    };
    UpdateProductListComponent.prototype.add = function (data) {
        var _this = this;
        this.productAttributes.map(function (data, i) {
            if (data.multiselect == 1) {
                var id_1 = "#multi" + i + "-" + data.id;
                var val_1 = $(id_1).val() || [];
                if (val_1.length > 0) {
                    _this.productAttributeDetail.push({
                        product_attribute_id: data.id,
                        product_detail_id: val_1.toString(),
                        status: 1
                    });
                }
                return;
            }
            var id = "#single" + i + "-" + data.id || false;
            var val = $(id).val();
            if (val) {
                _this.productAttributeDetail.push({
                    product_attribute_id: data.id,
                    product_detail_id: val,
                    status: 1
                });
            }
        });
        data.product_detail = this.productAttributeDetail;
        this.productService.addProduct(data).subscribe(function (res) {
            _this.load = false;
            if (res.status) {
                _this.toastr.successToastr(_this.LANG.Product_added_successfully);
                _this.location.back();
                return;
            }
            _this.toastr.warningToastr(res.message);
        });
    };
    UpdateProductListComponent.prototype.update = function (data) {
        var _this = this;
        data.id = this.id;
        this.productService.updateProduct(data).subscribe(function (res) {
            _this.load = false;
            if (res.status) {
                _this.toastr.successToastr(_this.LANG.Product_updated_successfully);
                _this.location.back();
                return;
            }
            _this.toastr.warningToastr(res.message);
        });
    };
    UpdateProductListComponent.prototype.getProductDetails = function () {
        var _this = this;
        this.productService.getProductDetails(this.id).subscribe(function (res) {
            if (res.status) {
                _this.productDetails = res.response;
                _this.product_name = res.response.title;
                _this.product_name_ar = res.response.ar_title;
                _this.getAttributeList();
            }
        });
    };
    UpdateProductListComponent.prototype.getAttributeList = function () {
        var _this = this;
        this.productService.getAttributeList().subscribe(function (res) {
            if (res.status) {
                _this.productAttributes = res.response;
                setTimeout(function () {
                    _this.loadSelect2();
                }, 100);
            }
        });
    };
    UpdateProductListComponent.prototype.loadSelect2 = function () {
        var _this = this;
        $('.js-example-basic-single').select2({
            placeholder: "Select Attribute",
        });
        $('.js-example-basic-multiple').select2();
        if (this.id) {
            this.setDefaultValues();
        }
        $(".multi-id").select2().on('change', function (e) {
            if (_this.id) {
                _this.handleMultiSelect(e.target.id);
            }
        });
        $(".single-id").select2().on('change', function (e) {
            if (_this.id) {
                _this.handleSingleSelect(e.target.id);
            }
        });
    };
    UpdateProductListComponent.prototype.setDefaultValues = function () {
        var _this = this;
        this.productAttributes.map(function (data, i) {
            if (data.multiselect == 1) {
                var index_1 = _this.productDetails.product_detail.findIndex(function (item) { return item.product_attribute_id == data.id; });
                var value_1 = [];
                if (index_1 != -1) {
                    if (_this.productDetails.product_detail[index_1].product_attribute_detail_id) {
                        value_1 = _this.productDetails.product_detail[index_1].product_attribute_detail_id.split(",");
                    }
                }
                var id_2 = "#multi" + i + "-" + data.id;
                $(id_2).val(value_1);
                $(id_2).trigger('change');
                return;
            }
            var index = _this.productDetails.product_detail.findIndex(function (item) { return item.product_attribute_id == data.id; });
            var value;
            if (index != -1) {
                if (_this.productDetails.product_detail[index].product_detail_id) {
                    value = _this.productDetails.product_detail[index].product_detail_id;
                }
            }
            var id = "#single" + i + "-" + data.id;
            $(id).val(value);
            $(id).trigger('change');
        });
    };
    UpdateProductListComponent.prototype.handleMultiSelect = function (id) {
        var values = $("#" + id).val() || [];
        var attribute_id = id.split("-")[1];
        if (this.id) {
            var index = this.productDetails.product_detail.findIndex(function (data) { return data.product_attribute_id == attribute_id; });
            if (index != -1) {
                this.productDetails.product_detail[index].product_attribute_detail_id = values.toString();
                return;
            }
            this.productDetails.product_detail.push({ product_attribute_id: attribute_id, product_attribute_detail_id: values.toString() });
            return;
        }
    };
    UpdateProductListComponent.prototype.handleSingleSelect = function (id) {
        var values = $("#" + id).val() || "";
        var attribute_id = id.split("-")[1];
        var index = this.productDetails.product_detail.findIndex(function (data) { return data.product_attribute_id == attribute_id; });
        if (index != -1) {
            this.productDetails.product_detail[index].product_detail_id = values;
            return;
        }
    };
    UpdateProductListComponent.ctorParameters = function () { return [
        { type: src_app_shared_Services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
        { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_1__["ToastrManager"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
    ]; };
    UpdateProductListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! raw-loader!./update-product-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/Pages/Dashboard/Products/UpdateProductList/update-product-list.component.html"),
            styles: [__webpack_require__(/*! ./update-product-list.component.css */ "./src/app/Pages/Dashboard/Products/UpdateProductList/update-product-list.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_shared_Services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_1__["ToastrManager"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], UpdateProductListComponent);
    return UpdateProductListComponent;
}());



/***/ }),

/***/ "./src/app/Pages/Dashboard/Products/UpdateProductList/update-product-list.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/Pages/Dashboard/Products/UpdateProductList/update-product-list.module.ts ***!
  \******************************************************************************************/
/*! exports provided: UpdateProductListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateProductListModule", function() { return UpdateProductListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_shared_loader_Loader_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/loader/Loader.module */ "./src/app/shared/loader/Loader.module.ts");
/* harmony import */ var _update_product_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./update-product-list.component */ "./src/app/Pages/Dashboard/Products/UpdateProductList/update-product-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ChildRoutes = [
    {
        path: 'add-products',
        component: _update_product_list_component__WEBPACK_IMPORTED_MODULE_5__["UpdateProductListComponent"]
    },
];
var UpdateProductListModule = /** @class */ (function () {
    function UpdateProductListModule() {
    }
    UpdateProductListModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(ChildRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                src_app_shared_loader_Loader_module__WEBPACK_IMPORTED_MODULE_4__["LoaderModule"]
            ],
            declarations: [
                _update_product_list_component__WEBPACK_IMPORTED_MODULE_5__["UpdateProductListComponent"]
            ]
        })
    ], UpdateProductListModule);
    return UpdateProductListModule;
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
//# sourceMappingURL=Products-UpdateProductList-update-product-list-module.js.map