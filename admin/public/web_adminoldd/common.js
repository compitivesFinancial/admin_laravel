(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/Shared/enums.ts":
/*!*********************************!*\
  !*** ./src/app/Shared/enums.ts ***!
  \*********************************/
/*! exports provided: FieldType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldType", function() { return FieldType; });
var FieldType;
(function (FieldType) {
    FieldType[FieldType["Characters"] = 1] = "Characters";
    FieldType[FieldType["Email"] = 2] = "Email";
    FieldType[FieldType["Textarea"] = 3] = "Textarea";
    FieldType[FieldType["Mobile"] = 4] = "Mobile";
    FieldType[FieldType["Fileupload"] = 5] = "Fileupload";
    FieldType[FieldType["Number"] = 6] = "Number";
    FieldType[FieldType["Date"] = 7] = "Date";
    FieldType[FieldType["Yes_No"] = 8] = "Yes_No";
})(FieldType || (FieldType = {}));


/***/ }),

/***/ "./src/app/shared/Services/user.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/Services/user.service.ts ***!
  \*************************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
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


var UsersService = /** @class */ (function () {
    function UsersService(api) {
        this.api = api;
        this.url = "";
    }
    UsersService.prototype.adminList = function () {
        this.url = "admin_list";
        var query = "";
        return this.api.get(this.url, query);
    };
    UsersService.prototype.departmentList = function (data) {
        this.url = "get_department";
        return this.api.post(this.url, data);
    };
    UsersService.prototype.adminDepartments = function () {
        this.url = "admin_department";
        return this.api.get(this.url, "");
    };
    UsersService.prototype.getUserTpe = function () {
        this.url = "usertype_list/2";
        return this.api.get(this.url, "");
    };
    UsersService.prototype.getAdminDetails = function (id) {
        this.url = "get_user_detail/" + id;
        return this.api.get(this.url, "");
    };
    UsersService.prototype.addAdmins = function (data) {
        this.url = "add_admin";
        return this.api.post(this.url, data);
    };
    UsersService.prototype.updateAdmin = function (data) {
        this.url = "update_admin";
        return this.api.post(this.url, data);
    };
    UsersService.prototype.adminIpList = function () {
        this.url = "admin_ip_list";
        return this.api.get(this.url, "");
    };
    UsersService.prototype.addAdminIp = function (data) {
        this.url = "add_admin_ip";
        return this.api.post(this.url, data);
    };
    UsersService.prototype.adminIpLogList = function () {
        this.url = "list_adminiplogs";
        return this.api.get(this.url, "");
    };
    UsersService.prototype.addEmailTemplates = function (data) {
        this.url = "insert_template";
        return this.api.post(this.url, data);
    };
    UsersService.prototype.updateEmailTemplates = function (data) {
        this.url = "update_template";
        return this.api.post(this.url, data);
    };
    UsersService.prototype.templatesList = function () {
        this.url = "list_template";
        return this.api.get(this.url, "");
    };
    UsersService.prototype.getTemplatesDetails = function (id) {
        this.url = "get_email_byid/" + id;
        return this.api.get(this.url, "");
    };
    UsersService.prototype.getTemplatesType = function () {
        this.url = "get_template_type";
        return this.api.get(this.url, "");
    };
    UsersService.ctorParameters = function () { return [
        { type: _Services_api_service__WEBPACK_IMPORTED_MODULE_1__["apiServiceComponent"] }
    ]; };
    UsersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_Services_api_service__WEBPACK_IMPORTED_MODULE_1__["apiServiceComponent"]])
    ], UsersService);
    return UsersService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map