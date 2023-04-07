(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["OpportunitySetup-opportunity-setup-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Pages/Dashboard/OpportunitySetup/opportunity-setup.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Pages/Dashboard/OpportunitySetup/opportunity-setup.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <!-- ============================================================== -->\r\n    <!-- Bread crumb and right sidebar toggle -->\r\n    <!-- ============================================================== -->\r\n    <div class=\"row page-titles\">\r\n        <div class=\"col-md-5 align-self-center\">\r\n            <h4 class=\"text-themecolor\">{{LANG.Opportunity_setup}}</h4>\r\n        </div>\r\n        <div class=\"col-md-7 align-self-center text-right\">\r\n            <div class=\"d-flex justify-content-end align-items-center\">\r\n                <ol class=\"breadcrumb\">\r\n                    <li class=\"breadcrumb-item\"><a href=\"javascript:void(0)\">{{LANG.Home}}</a></li>\r\n                    <li class=\"breadcrumb-item active\">{{LANG.Opportunity_setup}}</li>\r\n                </ol>\r\n                \r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        \r\n        <div class=\"col-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group has-success\">\r\n                            <label class=\"control-label\">{{LANG.Opportunity_List}}</label>\r\n                            <select class=\"form-control custom-select\"\r\n                                name=\"opportunity_id\"\r\n                                [(ngModel)]=\"opportunity_id\"\r\n                            >\r\n                            <option value=\"\" selected disabled>{{LANG.Select_Opportunity}}</option>\r\n                                <option *ngFor=\"let data of opportunity_list;let i = index\" value=\"{{data.id}}\">{{data.tagline}}</option>\r\n                            </select>\r\n                            <span class=\"error\" *ngIf=\"opportunity_error\">{{LANG.This_field_is_required}}</span>\r\n            \r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row attributes mt-3\" *ngFor=\"let data of post_data;let i = index\">\r\n                        <div class=\"col-md-4 static\" >\r\n                          <h3>{{data.title}}</h3>\r\n                         \r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"form-group has-success\">\r\n                                <label class=\"control-label\">Step</label>\r\n\r\n                                <select\r\n                                    class=\"form-control custom-select\"\r\n                                    name=\"steps{{i}}\"\r\n                                    [(ngModel)]=\"data.steps\"\r\n                                >\r\n                                <!-- <option value=\"\" selected disabled>{{LANG.Select_Loan_Type}}</option> -->\r\n                                    <option *ngFor=\"let data of steps\">{{data}}</option>\r\n\r\n                                </select>\r\n                                <!-- <span class=\"error\" *ngIf=\"error.loan_type_error\">{{LANG.This_field_is_required}}</span> -->\r\n            \r\n                            </div>\r\n        \r\n                          \r\n                         \r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"form-group has-success\">\r\n                                <label class=\"control-label\">Role</label>\r\n\r\n                                <select\r\n                                    class=\"form-control custom-select\"\r\n                                    name=\"role{{i}}\"\r\n                                    [(ngModel)]=\"data.role\"\r\n                                >\r\n                                <option value=\"\" selected disabled>{{LANG.Select_Role}}</option>\r\n                                    <option *ngFor=\"let data of roles\" value=\"{{data.id}}\">{{data.title}}</option>\r\n                                </select>\r\n                                <span class=\"error\" *ngIf=\"data.role_error\">{{LANG.This_field_is_required}}</span>\r\n            \r\n                            </div>\r\n        \r\n                          \r\n                         \r\n                        </div>\r\n                        \r\n                    </div>\r\n                    \r\n                    <div class=\"col-md-12 text-center mt-3\">\r\n                    <button *ngIf=\"!load\" type=\"submit\" class=\"btn btn-primary mt-2\" (click)=\"updateRole()\">{{LANG.Add}}</button>\r\n                    <button class=\"btn btn-primary\" *ngIf=\"load\">                                \r\n                        <loader></loader>\r\n                    </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Pages/Dashboard/OpportunitySetup/opportunity-setup.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/Pages/Dashboard/OpportunitySetup/opportunity-setup.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".static{\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\n.static h3{\r\n    margin-top: 15px;\r\n    margin-bottom: 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvRGFzaGJvYXJkL09wcG9ydHVuaXR5U2V0dXAvb3Bwb3J0dW5pdHktc2V0dXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsb0JBQWE7SUFBYixhQUFhO0lBQ2Isd0JBQXVCO1lBQXZCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9QYWdlcy9EYXNoYm9hcmQvT3Bwb3J0dW5pdHlTZXR1cC9vcHBvcnR1bml0eS1zZXR1cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0YXRpY3tcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zdGF0aWMgaDN7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/Pages/Dashboard/OpportunitySetup/opportunity-setup.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/Pages/Dashboard/OpportunitySetup/opportunity-setup.component.ts ***!
  \*********************************************************************************/
/*! exports provided: OpportunitySetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpportunitySetupComponent", function() { return OpportunitySetupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_app_shared_Services_kyc_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/Services/kyc.service */ "./src/app/shared/Services/kyc.service.ts");
/* harmony import */ var src_app_shared_Services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/Services/user.service */ "./src/app/shared/Services/user.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
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





var OpportunitySetupComponent = /** @class */ (function () {
    function OpportunitySetupComponent(kyc_service, toast, adminService) {
        this.kyc_service = kyc_service;
        this.toast = toast;
        this.adminService = adminService;
        this.opportunity_list = [];
        this.roles = [];
        this.steps = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
        this.LANG = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].english_translations;
        this.opportunity_id = "";
        this.opportunity_error = false;
        this.error = {};
        this.evaluation_list = [];
        this.user_data = {};
        this.post_data = [];
        this.load = false;
        this.err = false;
        // initial_data_1={
        //   "master_id":1,
        //   "steps":1,
        //   "role":"",
        //   "activity":0,
        //   "master_type":0,
        //   "title":this.LANG.KYC
        // }
        this.initial_data_2 = {
            "master_id": 1,
            "steps": 1,
            "role": "",
            "activity": 0,
            "master_type": 0,
            "title": this.LANG.Opportunities
        };
        this.initial_data_3 = {
            "master_id": 2,
            "steps": 2,
            "role": "",
            "activity": 0,
            "master_type": 0,
            "title": this.LANG.Opportunity_Product
        };
        this.initial_data_4 = {
            "master_id": 3,
            "steps": 3,
            "role": "",
            "activity": 0,
            "master_type": 0,
            "title": this.LANG.Opportunity_Publish
        };
        this.initial_data_5 = {
            "master_id": 4,
            "steps": 4,
            "role": "",
            "activity": 0,
            "master_type": 0,
            "title": this.LANG.Investment_Details
        };
        this.initial_data_6 = {
            "master_id": 5,
            "steps": 5,
            "role": "",
            "activity": 0,
            "master_type": 0,
            "title": this.LANG.Loan_Management
        };
        var user_data = btoa(btoa("user_info"));
        if (localStorage.getItem(user_data) != undefined) {
            this.user_data = JSON.parse(atob(atob(localStorage.getItem(user_data) || '{}')));
        }
        // this.post_data.push(this.initial_data_1)
        this.post_data.push(this.initial_data_2);
    }
    OpportunitySetupComponent.prototype.ngOnInit = function () {
        this.getCampaignList();
        this.getRoles();
        this.getEvaluationList();
    };
    OpportunitySetupComponent.prototype.getCampaignList = function () {
        var _this = this;
        this.kyc_service.getAllCampaignList().subscribe(function (res) {
            if (res.status) {
                _this.opportunity_list = res.response || [];
            }
        });
    };
    OpportunitySetupComponent.prototype.getRoles = function () {
        var _this = this;
        this.adminService.getUserTpe().subscribe(function (res) {
            if (res.status) {
                _this.roles = res.response;
            }
        });
    };
    OpportunitySetupComponent.prototype.getEvaluationList = function () {
        var _this = this;
        this.kyc_service.getEvaluationList().subscribe(function (res) {
            _this.evaluation_list = res.response;
            if (_this.evaluation_list.length > 0) {
                _this.post_data = [];
                // this.post_data.push(this.initial_data_1)
                _this.post_data.push(_this.initial_data_2);
                _this.evaluation_list.map(function (data, index) {
                    var item = {
                        "master_id": data.id,
                        "steps": index + 2,
                        "role": "",
                        "activity": 0,
                        "master_type": 1,
                        "title": data.title
                    };
                    _this.post_data.push(item);
                });
                _this.post_data.push(__assign({}, _this.initial_data_3, { steps: _this.post_data.length + 1 }));
                _this.post_data.push(__assign({}, _this.initial_data_4, { steps: _this.post_data.length + 1 }));
                _this.post_data.push(__assign({}, _this.initial_data_5, { steps: _this.post_data.length + 1 }));
                _this.post_data.push(__assign({}, _this.initial_data_6, { steps: _this.post_data.length + 1 }));
            }
        });
    };
    OpportunitySetupComponent.prototype.updateRole = function () {
        var _this = this;
        this.err = false;
        this.opportunity_error = false;
        if (this.opportunity_id == "" || this.opportunity_id == undefined) {
            this.opportunity_error = true;
            this.err = true;
        }
        this.post_data.map(function (data) {
            if (data.role == "" || data.role == undefined) {
                data.role_error = true;
                _this.err = true;
            }
            else {
                data.role_error = false;
            }
        });
        if (this.err)
            return;
        this.load = true;
        // this.post_data.map(data=>{
        //   data.opportunity_id=this.opportunity_id
        // });
        var data = {
            "insert": this.post_data,
            "opportunity_id": this.opportunity_id,
        };
        this.kyc_service.insertOpportunitySetup(data).subscribe(function (res) {
            if (res.status) {
                _this.load = false;
                _this.toast.successToastr(res.response.message, "");
                return;
            }
            _this.load = false;
            _this.toast.warningToastr(res.response.message, "");
        });
    };
    OpportunitySetupComponent.ctorParameters = function () { return [
        { type: src_app_shared_Services_kyc_service__WEBPACK_IMPORTED_MODULE_2__["KYCService"] },
        { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_1__["ToastrManager"] },
        { type: src_app_shared_Services_user_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"] }
    ]; };
    OpportunitySetupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-opportunity-setup',
            template: __webpack_require__(/*! raw-loader!./opportunity-setup.component.html */ "./node_modules/raw-loader/index.js!./src/app/Pages/Dashboard/OpportunitySetup/opportunity-setup.component.html"),
            styles: [__webpack_require__(/*! ./opportunity-setup.component.css */ "./src/app/Pages/Dashboard/OpportunitySetup/opportunity-setup.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_shared_Services_kyc_service__WEBPACK_IMPORTED_MODULE_2__["KYCService"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_1__["ToastrManager"], src_app_shared_Services_user_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]])
    ], OpportunitySetupComponent);
    return OpportunitySetupComponent;
}());



/***/ }),

/***/ "./src/app/Pages/Dashboard/OpportunitySetup/opportunity-setup.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/Pages/Dashboard/OpportunitySetup/opportunity-setup.module.ts ***!
  \******************************************************************************/
/*! exports provided: OpportunitySetupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpportunitySetupModule", function() { return OpportunitySetupModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_shared_loader_Loader_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/loader/Loader.module */ "./src/app/shared/loader/Loader.module.ts");
/* harmony import */ var _opportunity_setup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./opportunity-setup.component */ "./src/app/Pages/Dashboard/OpportunitySetup/opportunity-setup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ChildRoutes = [
    {
        path: 'opportunity-setup',
        component: _opportunity_setup_component__WEBPACK_IMPORTED_MODULE_5__["OpportunitySetupComponent"]
    },
];
var OpportunitySetupModule = /** @class */ (function () {
    function OpportunitySetupModule() {
    }
    OpportunitySetupModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(ChildRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                src_app_shared_loader_Loader_module__WEBPACK_IMPORTED_MODULE_4__["LoaderModule"]
            ],
            declarations: [
                _opportunity_setup_component__WEBPACK_IMPORTED_MODULE_5__["OpportunitySetupComponent"]
            ]
        })
    ], OpportunitySetupModule);
    return OpportunitySetupModule;
}());



/***/ })

}]);
//# sourceMappingURL=OpportunitySetup-opportunity-setup-module.js.map