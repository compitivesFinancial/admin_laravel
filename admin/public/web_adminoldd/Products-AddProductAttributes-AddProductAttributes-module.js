(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Products-AddProductAttributes-AddProductAttributes-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Pages/Dashboard/Products/AddProductAttributes/AddProductAttributes.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Pages/Dashboard/Products/AddProductAttributes/AddProductAttributes.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row page-titles\">\r\n    <div class=\"col-md-5 align-self-center\">\r\n      <h4 class=\"text-themecolor\">{{id ? LANG.Edit : LANG.Add}} {{LANG.Product_Attributes}}</h4>\r\n    </div>\r\n    <div class=\"col-md-7 align-self-center text-right\">\r\n      <div class=\"d-flex justify-content-end align-items-center\">\r\n        <ol class=\"breadcrumb\">\r\n          <li class=\"breadcrumb-item\"><a href=\"javascript:void(0)\">{{LANG.Home}}</a></li>\r\n          <li class=\"breadcrumb-item active\">{{id ? LANG.Edit : LANG.Add}} {{LANG.Product_Attributes}}</li>\r\n        </ol>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body\">\r\n          <form class=\"mt-4\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"exampleInputEmail1\">{{LANG.Product_Attribute_Name}}</label>\r\n                  <input\r\n                    type=\"email\"\r\n                    class=\"form-control\"\r\n                    name=\"attribute_name\"\r\n                    placeholder=\"{{LANG.Enter_Your_Product_Attribute_Name}}\"\r\n                    [(ngModel)]=\"attribute_name\"\r\n                  />\r\n                  <span class=\"error\" *ngIf=\"error.attribute_name\">{{LANG.This_field_is_required}}</span>\r\n\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"exampleInputPassword1\"\r\n                    >{{LANG.Product_Attribute_Ar_Name}}</label\r\n                  >\r\n                  <input\r\n                    type=\"text\"\r\n                    class=\"form-control text-right\"\r\n                    name=\"attribute_name_ar\"\r\n                    placeholder=\"{{LANG.Enter_Your_Product_Attribute_Ar_Name}}\"\r\n                    [(ngModel)]=\"attribute_name_ar\"\r\n                  />\r\n                  <span class=\"error\" *ngIf=\"error.attribute_name_ar\">{{LANG.This_field_is_required}}</span>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row p-t-20\">\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group has-success\">\r\n                  <label class=\"control-label\">{{LANG.Multiselect}}</label>\r\n                  <select\r\n                    class=\"form-control custom-select\"\r\n                    name=\"multiselect\"\r\n                    [(ngModel)]=\"multiselect\"\r\n                  >\r\n                    <option value=\"1\">{{LANG.Yes}}</option>\r\n                    <option value=\"2\">{{LANG.No}}</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group has-success mb-0\">\r\n                  <label class=\"control-label\">{{LANG.Status}}</label>\r\n                  <select\r\n                    class=\"form-control custom-select\"\r\n                    name=\"status\"\r\n                    [(ngModel)]=\"status\"\r\n                  >\r\n                    <option value=\"1\">{{LANG.Active}}</option>\r\n                    <option value=\"2\">{{LANG.Inactive}}</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group has-success\">\r\n                  <label class=\"control-label\">{{LANG.Position}}</label>\r\n                  <select\r\n                    class=\"form-control custom-select\"\r\n                    name=\"position\"\r\n                    [(ngModel)]=\"position\"\r\n                  >\r\n                    <option *ngFor=\"let number of positions;let i = index\" value=\"{{number}}\">{{number}}</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12\">\r\n                <h4 class=\"card-title\">{{LANG.Product_Attribute_Details}}</h4>\r\n\r\n                <div\r\n                  class=\"row border-class form-group mb-0 p-2\"\r\n                  *ngFor=\"let data of product_details; let i = index\"\r\n                >\r\n                  <div class=\"col-sm-2 nopadding\">\r\n                    <div class=\"form-group mb-0\">\r\n                      <input\r\n                        type=\"text\"\r\n                        class=\"form-control\"\r\n                        name=\"title{{i}}\"\r\n                        [(ngModel)]=\"data.title\"\r\n                        placeholder=\"{{LANG.Enter_Product_Attribute_Detail_Title}}\"\r\n                      />\r\n                    <span class=\"error\" *ngIf=\"data.title_error\">{{LANG.This_field_is_required}}</span>\r\n\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-2 nopadding\">\r\n                    <div class=\"form-group mb-0\">\r\n                      <input\r\n                        type=\"text\"\r\n                        class=\"form-control\"\r\n                        name=\"ar_title{{i}}\"\r\n                        [(ngModel)]=\"data.ar_title\"\r\n                        placeholder=\"{{LANG.Enter_Ar_Product_Attribute_Detail_Title}}\"\r\n                      />\r\n                        <span class=\"error\" *ngIf=\"data.ar_title_error\">{{LANG.This_field_is_required}}</span>\r\n\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"col-sm-2 nopadding\">\r\n                    <div class=\"form-group mb-0\">\r\n                      <input\r\n                        type=\"text\"\r\n                        class=\"form-control\"\r\n                        name=\"detail_subtitle{{i}}\"\r\n                        [(ngModel)]=\"data.subtitle\"\r\n                        placeholder=\"{{LANG.Enter_Additional_details}}\"\r\n                      />\r\n                      <span class=\"error\" *ngIf=\"data.subtitle_error\">{{LANG.This_field_is_required}}</span>\r\n\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-2 nopadding\">\r\n                    <div class=\"form-group mb-0\">\r\n                      <input\r\n                        type=\"text\"\r\n                        class=\"form-control\"\r\n                        name=\"detail_ar_subtitle{{i}}\"\r\n                        [(ngModel)]=\"data.subtitle_ar\"\r\n                        placeholder=\"{{LANG.Enter_Ar_Additional_details}}\"\r\n                      />\r\n                      <span class=\"error\" *ngIf=\"data.subtitle_ar_error\">{{LANG.This_field_is_required}}</span>\r\n\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"col-sm-2 nopadding\">\r\n                    <div class=\"form-group mb-2\">\r\n                      <select\r\n                        class=\"form-control\"\r\n                        id=\"detail_position{{i}}\"\r\n                        name=\"detail_position{{i}}\"\r\n                        [(ngModel)]=\"data.position\"\r\n                      >\r\n                        <option *ngFor=\"let number of positions;let i = index\" value=\"{{number}}\">{{number}}</option>\r\n                      </select>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"col-sm-2 nopadding\">\r\n                    <div class=\"form-group mb-0\">\r\n                      <div class=\"input-group\">\r\n                        <select\r\n                          class=\"form-control\"\r\n                          name=\"detail_status{{i}}\"\r\n                          [(ngModel)]=\"data.status\"\r\n                        >\r\n                          <option value=\"1\">{{LANG.Active}}</option>\r\n                          <option value=\"0\">{{LANG.Inactive}}</option>\r\n                        </select>\r\n                        <div class=\"input-group-append\">\r\n                          <button\r\n                            *ngIf=\"i == 0\"\r\n                            class=\"btn btn-success\"\r\n                            type=\"button\"\r\n                            (click)=\"addMore()\"\r\n                          >\r\n                            <i class=\"fa fa-plus\"></i>\r\n                          </button>\r\n                          <button\r\n                            *ngIf=\"i != 0\"\r\n                            class=\"btn btn-danger\"\r\n                            type=\"button\"\r\n                            (click)=\"remove(i)\"\r\n                          >\r\n                            <i class=\"fa fa-minus\"></i>\r\n                          </button>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <!-- <div class=\"custom-control custom-checkbox mr-sm-2 mb-3\">\r\n                            <input type=\"checkbox\" class=\"custom-control-input\" id=\"checkbox0\" value=\"check\">\r\n                            <label class=\"custom-control-label\" for=\"checkbox0\">Check Me Out !</label>\r\n                        </div> -->\r\n            <button *ngIf=\"!load\" type=\"submit\" class=\"btn btn-primary\" (click)=\"addProductAttribute()\">{{id ? LLANG.Update : LANG.Submit}}</button>\r\n            <button class=\"btn btn-primary\" *ngIf=\"load\">                                \r\n                <loader></loader>\r\n            </button>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/loader/Loader.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/loader/Loader.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"lds-dual-ring\"></div>"

/***/ }),

/***/ "./src/app/Pages/Dashboard/Products/AddProductAttributes/AddProductAttributes.component.css":
/*!**************************************************************************************************!*\
  !*** ./src/app/Pages/Dashboard/Products/AddProductAttributes/AddProductAttributes.component.css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL0Rhc2hib2FyZC9Qcm9kdWN0cy9BZGRQcm9kdWN0QXR0cmlidXRlcy9BZGRQcm9kdWN0QXR0cmlidXRlcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/Pages/Dashboard/Products/AddProductAttributes/AddProductAttributes.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/Pages/Dashboard/Products/AddProductAttributes/AddProductAttributes.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: AddProductAttributesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductAttributesComponent", function() { return AddProductAttributesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_app_shared_Services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/Services/product.service */ "./src/app/shared/Services/product.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
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






var AddProductAttributesComponent = /** @class */ (function () {
    function AddProductAttributesComponent(productService, toastr, route, location) {
        var _this = this;
        this.productService = productService;
        this.toastr = toastr;
        this.route = route;
        this.location = location;
        this.initialProducts = {
            "title": "",
            "ar_title": "",
            "subtitle": "",
            "subtitle_ar": "",
            "status": "1",
            "position": "1"
        };
        this.id = "";
        this.attribute_name = "";
        this.attribute_name_ar = "";
        this.status = "1";
        this.position = "1";
        this.multiselect = "1";
        this.positions = [];
        this.product_details = [__assign({}, this.initialProducts)];
        this.err = false;
        this.load = false;
        this.error = {
            attribute_name: false,
            attribute_name_ar: false,
        };
        this.LANG = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].english_translations;
        for (var i = 1; i <= 20; i++) {
            this.positions.push(i);
        }
        this.route.queryParams
            .subscribe(function (params) {
            if (params['id']) {
                _this.id = atob(atob(params['id']));
                _this.getProductAttributeDetails();
            }
        });
    }
    AddProductAttributesComponent.prototype.ngOnInit = function () {
    };
    AddProductAttributesComponent.prototype.addMore = function () {
        var new_product = __assign({}, this.initialProducts);
        new_product.position = (this.product_details.length + 1).toString();
        this.product_details.push(new_product);
    };
    AddProductAttributesComponent.prototype.remove = function (i) {
        this.product_details.splice(i, 1);
    };
    AddProductAttributesComponent.prototype.errorHandler = function () {
        var _this = this;
        if (this.attribute_name == undefined || this.attribute_name == '') {
            this.error.attribute_name = true;
            this.err = true;
        }
        if (this.attribute_name_ar == undefined || this.attribute_name_ar == '') {
            this.error.attribute_name_ar = true;
            this.err = true;
        }
        this.product_details.map(function (data) {
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
            if (data.subtitle == "" || data.subtitle == undefined) {
                data.subtitle_error = true;
                _this.err = true;
            }
            else {
                data.subtitle_error = false;
            }
            if (data.subtitle_ar == "" || data.subtitle_ar == undefined) {
                data.subtitle_ar_error = true;
                _this.err = true;
            }
            else {
                data.subtitle_ar_error = false;
            }
        });
    };
    AddProductAttributesComponent.prototype.resetError = function () {
        this.err = false;
        this.load = false;
        this.error = {
            attribute_name: false,
            attribute_name_ar: false,
        };
    };
    AddProductAttributesComponent.prototype.addProductAttribute = function () {
        this.resetError();
        this.errorHandler();
        if (this.err) {
            return;
        }
        var data = {
            "title": this.attribute_name,
            "ar_title": this.attribute_name_ar,
            "multiselect": this.multiselect,
            "status": this.status,
            "position": this.position,
            "product_detail": this.product_details
        };
        this.load = true;
        if (this.id) {
            data.id = this.id;
            this.update(data);
            return;
        }
        this.add(data);
    };
    AddProductAttributesComponent.prototype.getProductAttributeDetails = function () {
        var _this = this;
        this.productService.getProductAttributeDetails(this.id).subscribe(function (res) {
            if (res.status) {
                _this.attribute_name = res.response.title;
                _this.attribute_name_ar = res.response.ar_title;
                _this.multiselect = res.response.multiselect || "1";
                _this.status = res.response.status;
                _this.position = res.response.position;
                _this.product_details = res.response.product_detail || [__assign({}, _this.initialProducts)];
            }
        });
    };
    AddProductAttributesComponent.prototype.add = function (data) {
        var _this = this;
        this.productService.addProductAttributes(data).subscribe(function (res) {
            _this.load = false;
            if (res.status) {
                _this.toastr.successToastr(_this.LANG.Attribute_added_successfully);
                _this.location.back();
                return;
            }
            _this.toastr.warningToastr(res.message);
        });
    };
    AddProductAttributesComponent.prototype.update = function (data) {
        var _this = this;
        this.productService.updateProductAttributes(data).subscribe(function (res) {
            _this.load = false;
            if (res.status) {
                _this.toastr.successToastr(_this.LANG.Attribute_updated_successfully);
                _this.location.back();
                return;
            }
            _this.toastr.warningToastr(res.message);
        });
    };
    AddProductAttributesComponent.ctorParameters = function () { return [
        { type: src_app_shared_Services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
        { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_2__["ToastrManager"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }
    ]; };
    AddProductAttributesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! raw-loader!./AddProductAttributes.component.html */ "./node_modules/raw-loader/index.js!./src/app/Pages/Dashboard/Products/AddProductAttributes/AddProductAttributes.component.html"),
            styles: [__webpack_require__(/*! ./AddProductAttributes.component.css */ "./src/app/Pages/Dashboard/Products/AddProductAttributes/AddProductAttributes.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_shared_Services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_2__["ToastrManager"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], AddProductAttributesComponent);
    return AddProductAttributesComponent;
}());



/***/ }),

/***/ "./src/app/Pages/Dashboard/Products/AddProductAttributes/AddProductAttributes.module.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/Pages/Dashboard/Products/AddProductAttributes/AddProductAttributes.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: AddProductAttributesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductAttributesModule", function() { return AddProductAttributesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_shared_loader_Loader_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/loader/Loader.module */ "./src/app/shared/loader/Loader.module.ts");
/* harmony import */ var _AddProductAttributes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AddProductAttributes.component */ "./src/app/Pages/Dashboard/Products/AddProductAttributes/AddProductAttributes.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ChildRoutes = [
    {
        path: 'add-product-attribute',
        component: _AddProductAttributes_component__WEBPACK_IMPORTED_MODULE_5__["AddProductAttributesComponent"]
    },
];
var AddProductAttributesModule = /** @class */ (function () {
    function AddProductAttributesModule() {
    }
    AddProductAttributesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(ChildRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                src_app_shared_loader_Loader_module__WEBPACK_IMPORTED_MODULE_4__["LoaderModule"]
            ],
            declarations: [
                _AddProductAttributes_component__WEBPACK_IMPORTED_MODULE_5__["AddProductAttributesComponent"]
            ]
        })
    ], AddProductAttributesModule);
    return AddProductAttributesModule;
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
//# sourceMappingURL=Products-AddProductAttributes-AddProductAttributes-module.js.map