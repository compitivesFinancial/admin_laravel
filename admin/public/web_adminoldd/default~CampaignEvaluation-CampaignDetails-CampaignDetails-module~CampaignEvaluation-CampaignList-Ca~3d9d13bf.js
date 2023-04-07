(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~CampaignEvaluation-CampaignDetails-CampaignDetails-module~CampaignEvaluation-CampaignList-Ca~3d9d13bf"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/loader/Loader.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/loader/Loader.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"lds-dual-ring\"></div>"

/***/ }),

/***/ "./src/app/shared/Services/kyc.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/Services/kyc.service.ts ***!
  \************************************************/
/*! exports provided: KYCService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KYCService", function() { return KYCService; });
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


var KYCService = /** @class */ (function () {
    function KYCService(api) {
        this.api = api;
        this.url = "";
    }
    KYCService.prototype.getKYCList = function () {
        this.url = "kyc_list";
        var query = "";
        return this.api.get(this.url, query);
    };
    KYCService.prototype.deleteKYC = function (data) {
        this.url = "delete_kyc";
        return this.api.post(this.url, data);
    };
    KYCService.prototype.getInfoTypeList = function () {
        this.url = "kyc_infotype_list";
        var query = "";
        return this.api.get(this.url, query);
    };
    KYCService.prototype.addInfoType = function (data) {
        this.url = "add_infotype";
        return this.api.post(this.url, data);
    };
    KYCService.prototype.updateInfoType = function (data) {
        this.url = "update_infotype";
        return this.api.post(this.url, data);
    };
    KYCService.prototype.deleteInfoType = function (data) {
        this.url = "delete_infotype";
        return this.api.post(this.url, data);
    };
    KYCService.prototype.getInfoType = function (id) {
        this.url = "get_infotype_id/" + id;
        var query = "";
        return this.api.get(this.url, query);
    };
    KYCService.prototype.addKYC = function (data) {
        this.url = "add_kyc";
        return this.api.post(this.url, data);
    };
    KYCService.prototype.updateKYC = function (data) {
        this.url = "update_kyc";
        return this.api.post(this.url, data);
    };
    KYCService.prototype.getKYCDetails = function (id) {
        this.url = "get_kyc_by_id/" + id;
        var query = "";
        return this.api.get(this.url, query);
    };
    KYCService.prototype.getEvaluationList = function () {
        this.url = "list_evaluation";
        var query = "";
        return this.api.get(this.url, query);
    };
    KYCService.prototype.getOpportunityList = function (data) {
        this.url = "get_opportunities_by_product";
        return this.api.post(this.url, data);
    };
    KYCService.prototype.getEvaluationDetails = function (id) {
        this.url = "get_evaluation_by_id/" + id;
        var query = "";
        return this.api.get(this.url, query);
    };
    KYCService.prototype.addEvaluation = function (data) {
        this.url = "add_evaluation";
        return this.api.post(this.url, data);
    };
    KYCService.prototype.updateEvaluationDetails = function (data) {
        this.url = "add_evaluation_detail";
        return this.api.post(this.url, data);
    };
    KYCService.prototype.deleteEvaluation = function (data) {
        this.url = "delete_evaluation";
        return this.api.post(this.url, data);
    };
    KYCService.prototype.getCampaignList = function (role_type) {
        this.url = "list_campaign/" + role_type;
        var query = "";
        return this.api.get(this.url, query);
    };
    KYCService.prototype.getAllCampaignList = function () {
        this.url = "listing_campaign";
        var query = "";
        return this.api.get(this.url, query);
    };
    KYCService.prototype.getCampaignDetails = function (id, role) {
        this.url = "get_campaign_by_id/" + id + "/" + role;
        return this.api.get(this.url, "");
    };
    KYCService.prototype.deleteCampaign = function (data) {
        this.url = "delete_campaign";
        return this.api.post(this.url, data);
    };
    KYCService.prototype.approveRejectKYC = function (data) {
        this.url = "kyc_approvestatus";
        if (data.type) {
            this.url = "campaign_approvestatus";
        }
        return this.api.post(this.url, data);
    };
    KYCService.prototype.updateCampaignDetails = function (data) {
        this.url = "modify_evaluation_campaign";
        return this.api.post(this.url, data);
    };
    KYCService.prototype.getUserTypeList = function () {
        this.url = "show_user_type";
        var query = "";
        return this.api.get(this.url, query);
    };
    KYCService.prototype.updateUserRole = function (data) {
        this.url = "update_user_type";
        return this.api.post(this.url, data);
    };
    KYCService.prototype.getUserKyc = function (type) {
        this.url = "get_user/" + type;
        return this.api.get(this.url, "");
    };
    KYCService.prototype.getUserKycDetails = function (id) {
        this.url = "get_user_detail/" + id;
        return this.api.get(this.url, "");
    };
    KYCService.prototype.getPagesList = function () {
        this.url = "get_page_list";
        var query = "";
        return this.api.get(this.url, query);
    };
    KYCService.prototype.getPagesDetails = function (id) {
        this.url = "get_page_by_id/" + id;
        return this.api.get(this.url, "");
    };
    KYCService.prototype.addPages = function (data) {
        this.url = "insert_page";
        return this.api.post(this.url, data);
    };
    KYCService.prototype.updatePages = function (data) {
        this.url = "update_page";
        return this.api.post(this.url, data);
    };
    KYCService.prototype.getUserRoles = function () {
        this.url = "usertype_list";
        var query = "";
        return this.api.get(this.url, query);
    };
    KYCService.prototype.getSectionList = function (type) {
        this.url = "get_by_type/" + type;
        return this.api.get(this.url, "");
    };
    KYCService.prototype.getSectionDetails = function (id) {
        this.url = "get_cms_by_id/" + id;
        return this.api.get(this.url, "");
    };
    KYCService.prototype.insertSection = function (data) {
        this.url = "insert_cms";
        return this.api.post(this.url, data);
    };
    KYCService.prototype.updateSection = function (data) {
        this.url = "update_cms";
        return this.api.post(this.url, data);
    };
    KYCService.prototype.deleteSection = function (data) {
        this.url = "delete_cms";
        return this.api.post(this.url, data);
    };
    KYCService.prototype.insertOpportunitySetup = function (data) {
        this.url = "insert_opportunity_setup";
        return this.api.post(this.url, data);
    };
    KYCService.prototype.getType = function () {
        this.url = "get_pagetype_list";
        return this.api.get(this.url, "");
    };
    KYCService.ctorParameters = function () { return [
        { type: _Services_api_service__WEBPACK_IMPORTED_MODULE_1__["apiServiceComponent"] }
    ]; };
    KYCService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_Services_api_service__WEBPACK_IMPORTED_MODULE_1__["apiServiceComponent"]])
    ], KYCService);
    return KYCService;
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
//# sourceMappingURL=default~CampaignEvaluation-CampaignDetails-CampaignDetails-module~CampaignEvaluation-CampaignList-Ca~3d9d13bf.js.map