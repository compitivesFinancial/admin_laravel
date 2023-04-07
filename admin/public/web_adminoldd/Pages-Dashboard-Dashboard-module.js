(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-Dashboard-Dashboard-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Pages/Dashboard/Dashboard.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Pages/Dashboard/Dashboard.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/Pages/Dashboard/Dashboard.css":
/*!***********************************************!*\
  !*** ./src/app/Pages/Dashboard/Dashboard.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-comp{\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvRGFzaGJvYXJkL0Rhc2hib2FyZC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9QYWdlcy9EYXNoYm9hcmQvRGFzaGJvYXJkLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtY29tcHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/Pages/Dashboard/Dashboard.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/Pages/Dashboard/Dashboard.module.ts ***!
  \*****************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _Dashboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Dashboard */ "./src/app/Pages/Dashboard/Dashboard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ChildRoutes = [
    {
        path: 'dashboard',
        component: _Dashboard__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
        children: [
            {
                path: '',
                loadChildren: './Products/ProductAttributes/productAttributes.module#ProductAttributesModule'
            },
            {
                path: '',
                loadChildren: './Products/AddProductAttributes/AddProductAttributes.module#AddProductAttributesModule'
            },
            {
                path: '',
                loadChildren: './Products/ProductList/productList.module#ProductListModule'
            },
            {
                path: '',
                loadChildren: './Products/UpdateProductList/update-product-list.module#UpdateProductListModule'
            },
            {
                path: '',
                loadChildren: './KYC/KYCList/KYCList.module#KYCListModule'
            },
            {
                path: '',
                loadChildren: './KYC/AddKYC/AddKYC.module#AddKYCModule'
            },
            {
                path: '',
                loadChildren: './KYC/UserRoles/UserRole.module#UserRoleModule',
            },
            {
                path: '',
                loadChildren: './KYC/InfoType/InfoTypeList/InfoType.module#InfoTypeModule',
            },
            {
                path: '',
                loadChildren: './KYC/InfoType/AddInfoType/AddInfoType.module#AddInfoTypeModule',
            },
            {
                path: '',
                loadChildren: './EvaluationProcess/EvaluationList/EvaluationList.module#EvaluationListModule'
            },
            {
                path: '',
                loadChildren: './EvaluationProcess/AddEvaluation/AddEvaluation.module#AddEvaluationModule'
            },
            {
                path: '',
                loadChildren: './CampaignEvaluation/CampaignDetails/CampaignDetails.module#CampaignDetailsModule'
            },
            {
                path: '',
                loadChildren: './CampaignEvaluation/CampaignList/CampaignList.module#CampaignListModule'
            },
            {
                path: '',
                loadChildren: './CampaignEvaluation/Component3/Component3.module#Component3Module'
            },
            {
                path: '',
                loadChildren: './CampaignEvaluation/Component4/Component4.module#Component4Module'
            },
            {
                path: '',
                loadChildren: './KYC/InvestorBorrowerKYCList/investor-borrower-kyc.module#InvestorBorrowerKYCModule',
            },
            {
                path: '',
                loadChildren: './KYC/InvestorBorrowerKYCDetails/investor-borrower-kycdetails.module#InvestorBorrowerKYCDetailsModule',
            },
            {
                path: '',
                loadChildren: './Products/LoanManagement/add-loan/add-loan.module#AddLoanModule',
            },
            {
                path: '',
                loadChildren: './Pages/pages.module#PagesModule',
            },
            {
                path: '',
                loadChildren: './Pages/AddPages/addPages.module#AddPagesModule',
            },
            {
                path: '',
                loadChildren: './user-management/AdminList/AdminList.module#AdminListModule',
            },
            {
                path: '',
                loadChildren: './user-management/AddAdmin/add-admin.module#AddAdminModule',
            },
            {
                path: '',
                loadChildren: './user-management/AdminIpList/admin-ip-list.module#AdminIpListModule',
            },
            {
                path: '',
                loadChildren: './user-management/AddAdminIp/add-admin-ip.module#AddAdminIpModule',
            },
            {
                path: '',
                loadChildren: './user-management/AdminIpLogs/admin-ip-log.module#AdminIpLogsModule',
            },
            {
                path: '',
                loadChildren: './Notifications/Email/email-template-list/email-template-list.module#EmailTemplateListModule',
            },
            {
                path: '',
                loadChildren: './Notifications/Email/add-email-templates/add-email-templates.module#AddEmailTemplateModule',
            },
            {
                path: '',
                loadChildren: './Notifications/SMS/email-template-list/email-template-list.module#EmailTemplateListModule',
            },
            {
                path: '',
                loadChildren: './Notifications/SMS/add-email-templates/add-email-templates.module#AddEmailTemplateModule',
            },
            {
                path: '',
                loadChildren: './OpportunitySetup/opportunity-setup.module#OpportunitySetupModule',
            },
            {
                path: '',
                loadChildren: './Home/Sections/SectionList/sectionList.module#SectionListModule',
            },
            {
                path: '',
                loadChildren: './Home/Sections/AddSection/add-section.module#AddSectionModule',
            },
        ],
    },
];
var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(ChildRoutes),
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            ],
            declarations: [
                _Dashboard__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/Pages/Dashboard/Dashboard.ts":
/*!**********************************************!*\
  !*** ./src/app/Pages/Dashboard/Dashboard.ts ***!
  \**********************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! raw-loader!./Dashboard.html */ "./node_modules/raw-loader/index.js!./src/app/Pages/Dashboard/Dashboard.html"),
            styles: [__webpack_require__(/*! ./Dashboard.css */ "./src/app/Pages/Dashboard/Dashboard.css")]
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ })

}]);
//# sourceMappingURL=Pages-Dashboard-Dashboard-module.js.map