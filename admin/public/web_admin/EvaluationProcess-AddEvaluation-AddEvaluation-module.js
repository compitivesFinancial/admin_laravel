(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["EvaluationProcess-AddEvaluation-AddEvaluation-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Pages/Dashboard/EvaluationProcess/AddEvaluation/AddEvaluation.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Pages/Dashboard/EvaluationProcess/AddEvaluation/AddEvaluation.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row page-titles\">\r\n    <div class=\"col-md-5 align-self-center\">\r\n      <h4 class=\"text-themecolor\">{{LANG.Add_Evaluation_Attributes}}</h4>\r\n    </div>\r\n    <div class=\"col-md-7 align-self-center text-right\">\r\n      <div class=\"d-flex justify-content-end align-items-center\">\r\n        <ol class=\"breadcrumb\">\r\n          <li class=\"breadcrumb-item\"><a href=\"javascript:void(0)\">{{LANG.Home}}</a></li>\r\n          <li class=\"breadcrumb-item active\">{{LANG.Add_Evaluation_Attributes}}</li>\r\n        </ol>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body\">\r\n          <form class=\"mt-4\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"exampleInputEmail1\">{{LANG.Evaluation_Name}}</label>\r\n                  <input\r\n                    type=\"email\"\r\n                    class=\"form-control\"\r\n                    name=\"title\"\r\n                    placeholder=\"{{LANG.Enter_Your_Evaluation_Name}}\"\r\n                    [(ngModel)]=\"title\"\r\n                  />\r\n                  <span class=\"error\" *ngIf=\"error.title\"\r\n                    >{{LANG.This_field_is_required}}</span\r\n                  >\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"exampleInputPassword1\">{{LANG.Evaluation_Ar_Name}}</label>\r\n                  <input\r\n                    type=\"text\"\r\n                    class=\"form-control text-right\"\r\n                    name=\"title_ar\"\r\n                    placeholder=\"{{LANG.Enter_Your_Evaluation_Ar_Name}}\"\r\n                    [(ngModel)]=\"title_ar\"\r\n                  />\r\n                  <span class=\"error\" *ngIf=\"error.title_ar\"\r\n                    >{{LANG.This_field_is_required}}</span\r\n                  >\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row p-t-20\">\r\n              <div class=\"col-md-3\">\r\n                <div class=\"form-group has-success\">\r\n                  <label class=\"control-label d-block\">{{LANG.Role_Type}}</label>\r\n                  <select\r\n                    class=\"js-example-basic-multiple\"\r\n                    name=\"role_type[]\"\r\n                    multiple=\"multiple\"\r\n                    id=\"role_type\"\r\n                  >\r\n                    <option\r\n                      *ngFor=\"let data of roleType; let i = index\"\r\n                      value=\"{{ data.id }}\"\r\n                    >\r\n                      {{ data.title }}\r\n                    </option>\r\n                  </select>\r\n                  <span class=\"error\" *ngIf=\"error.role_type\"\r\n                    >{{LANG.This_field_is_required}}</span\r\n                  >\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-md-3\">\r\n                <div class=\"form-group has-success mb-0\">\r\n                  <label class=\"control-label\">{{LANG.Rank_Type}}</label>\r\n                  <select\r\n                    class=\"form-control custom-select\"\r\n                    name=\"rankType\"\r\n                    [(ngModel)]=\"rank_type\"\r\n                  >\r\n                    <option selected disabled value=\"\">{{LANG.Select_Rank_Type}}</option>\r\n                    <option\r\n                      *ngFor=\"let data of rankType; let i = index\"\r\n                      value=\"{{ data.id }}\"\r\n                    >\r\n                      {{ data.title }}\r\n                    </option>\r\n                  </select>\r\n                  <span class=\"error\" *ngIf=\"error.rank_type\"\r\n                    >{{LANG.This_field_is_required}}</span\r\n                  >\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-md-3\">\r\n                <div class=\"form-group has-success mb-0\">\r\n                  <label class=\"control-label\">{{LANG.Status}}</label>\r\n                  <select\r\n                    class=\"form-control custom-select\"\r\n                    name=\"status\"\r\n                    [(ngModel)]=\"status\"\r\n                  >\r\n                    <option value=\"1\">{{LANG.Active}}</option>\r\n                    <option value=\"2\">{{LANG.Inactive}}</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-md-3\">\r\n                <div class=\"form-group has-success\">\r\n                  <label class=\"control-label\">{{LANG.Position}}</label>\r\n                  <select\r\n                    class=\"form-control custom-select\"\r\n                    name=\"position\"\r\n                    [(ngModel)]=\"position\"\r\n                  >\r\n                    <option\r\n                      *ngFor=\"let number of positions; let i = index\"\r\n                      value=\"{{ number }}\"\r\n                    >\r\n                      {{ number }}\r\n                    </option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12\">\r\n                <h4 class=\"card-title\">{{LANG.Evaluation_Category_Details}}</h4>\r\n\r\n                <div\r\n                  class=\"row border-class form-group mb-0 p-2\"\r\n                  *ngFor=\"let data of evaluation_details; let i = index\"\r\n                >\r\n                  <div class=\"col-sm-4 nopadding\">\r\n                    <div class=\"form-group\">\r\n                      <input\r\n                        type=\"text\"\r\n                        class=\"form-control\"\r\n                        name=\"category_title{{ i }}\"\r\n                        [(ngModel)]=\"data.title\"\r\n                        placeholder=\"{{LANG.Enter_Category_Title}}\"\r\n                      />\r\n                      <span class=\"error\" *ngIf=\"data.category_title_error\"\r\n                        >{{LANG.This_field_is_required}}</span\r\n                      >\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-4 nopadding\">\r\n                    <div class=\"form-group\">\r\n                      <input\r\n                        type=\"text\"\r\n                        class=\"form-control\"\r\n                        name=\"category_title_ar{{ i }}\"\r\n                        [(ngModel)]=\"data.ar_title\"\r\n                        placeholder=\"{{LANG.Enter_Ar_Category_Title}}\"\r\n                      />\r\n                      <span class=\"error\" *ngIf=\"data.category_title_ar_error\"\r\n                        >{{LANG.This_field_is_required}}</span\r\n                      >\r\n                    </div>\r\n                  </div>\r\n\r\n                  <ng-container *ngIf=\"rank_type == '3'\">\r\n                    <div class=\"col-sm-4 nopadding\">\r\n                      <div class=\"form-group\">\r\n                        <input\r\n                          type=\"text\"\r\n                          class=\"form-control\"\r\n                          name=\"minrange{{ i }}\"\r\n                          [(ngModel)]=\"data.minrange\"\r\n                          placeholder=\"{{LANG.Enter_Min_Range}}\"\r\n                          (keypress)=\"onlyNumbers($event)\"\r\n                        />\r\n                        <span class=\"error\" *ngIf=\"data.minrange_error\"\r\n                          >{{LANG.This_field_is_required}}</span\r\n                        >\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-sm-4 nopadding\">\r\n                      <div class=\"form-group\">\r\n                        <input\r\n                          type=\"text\"\r\n                          class=\"form-control\"\r\n                          name=\"maxrange{{ i }}\"\r\n                          [(ngModel)]=\"data.maxrange\"\r\n                          placeholder=\"{{LANG.Enter_Max_Range}}\"\r\n                          (keypress)=\"onlyNumbers($event)\"\r\n                        />\r\n                        <span class=\"error\" *ngIf=\"data.maxrange_error\"\r\n                          >{{LANG.This_field_is_required}}</span\r\n                        >\r\n                      </div>\r\n                    </div>\r\n                  </ng-container>\r\n\r\n                  <div class=\"col-sm-2 nopadding\">\r\n                    <div class=\"form-group mb-2\">\r\n                      <select\r\n                        class=\"form-control\"\r\n                        id=\"detail_position{{ i }}\"\r\n                        name=\"detail_position{{ i }}\"\r\n                        [(ngModel)]=\"data.position\"\r\n                      >\r\n                        <option\r\n                          *ngFor=\"let number of positions; let i = index\"\r\n                          value=\"{{ number }}\"\r\n                        >\r\n                          {{ number }}\r\n                        </option>\r\n                      </select>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"col-sm-2 nopadding\">\r\n                    <div class=\"form-group mb-0\">\r\n                      <div class=\"input-group\">\r\n                        <select\r\n                          class=\"form-control\"\r\n                          name=\"detail_status{{ i }}\"\r\n                          [(ngModel)]=\"data.status\"\r\n                        >\r\n                          <option value=\"1\">{{LANG.Active}}</option>\r\n                          <option value=\"0\">{{LANG.Inactive}}</option>\r\n                        </select>\r\n                        <div class=\"input-group-append\" *ngIf=\"!id\">\r\n                          <button\r\n                            *ngIf=\"i == 0\"\r\n                            class=\"btn btn-success\"\r\n                            type=\"button\"\r\n                            (click)=\"addMore()\"\r\n                          >\r\n                            <i class=\"fa fa-plus\"></i>\r\n                          </button>\r\n                          <button\r\n                            *ngIf=\"i != 0\"\r\n                            class=\"btn btn-danger\"\r\n                            type=\"button\"\r\n                            (click)=\"remove(i)\"\r\n                          >\r\n                            <i class=\"fa fa-minus\"></i>\r\n                          </button>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <!-- <div class=\"custom-control custom-checkbox mr-sm-2 mb-3\">\r\n                            <input type=\"checkbox\" class=\"custom-control-input\" id=\"checkbox0\" value=\"check\">\r\n                            <label class=\"custom-control-label\" for=\"checkbox0\">Check Me Out !</label>\r\n                        </div> -->\r\n            <button\r\n              *ngIf=\"!load\"\r\n              type=\"submit\"\r\n              class=\"btn btn-primary\"\r\n              (click)=\"addProductAttribute()\"\r\n            >\r\n              {{ id ? LANG.Update : LANG.Submit }}\r\n            </button>\r\n            <button class=\"btn btn-primary\" *ngIf=\"load\">\r\n              <loader></loader>\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-dark ml-2\" (click)=\"goBack()\">\r\n              <i class=\"fa fa-arrow-left\"></i> {{LANG.Back}}\r\n            </button>\r\n\r\n            <div class=\"row mt-4\" *ngIf=\"id\">\r\n              <div class=\"col-md-12\">\r\n                <div\r\n                  class=\"d-flex justify-content-between align-items-center mb-2\"\r\n                >\r\n                  <h4 class=\"card-title m-0\">{{LANG.Evaluation_Category_Details}}</h4>\r\n\r\n                  <button\r\n                    type=\"button\"\r\n                    class=\"btn btn-info d-none d-lg-block m-l-15\"\r\n                    (click)=\"addCategory()\"\r\n                  >\r\n                    <i class=\"fa fa-plus-circle\"></i> {{LANG.Create_New}}\r\n                  </button>\r\n                </div>\r\n                <div\r\n                  class=\"row border-class form-group mb-0 p-2\"\r\n                  *ngIf=\"show_category_form\"\r\n                >\r\n                  <div class=\"col-sm-4 nopadding\">\r\n                    <div class=\"form-group\">\r\n                      <input\r\n                        type=\"text\"\r\n                        class=\"form-control\"\r\n                        name=\"category_title\"\r\n                        [(ngModel)]=\"category_title\"\r\n                        placeholder=\"{{LANG.Enter_Category_Title}}\"\r\n                      />\r\n                      <span class=\"error\" *ngIf=\"error.category_title_error\"\r\n                        >{{LANG.This_field_is_required}}</span\r\n                      >\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-4 nopadding\">\r\n                    <div class=\"form-group\">\r\n                      <input\r\n                        type=\"text\"\r\n                        class=\"form-control\"\r\n                        name=\"category_title_ar\"\r\n                        [(ngModel)]=\"category_title_ar\"\r\n                        placeholder=\"{{LANG.Enter_Ar_Category_Title}}\"\r\n                      />\r\n                      <span class=\"error\" *ngIf=\"error.category_title_ar_error\"\r\n                        >{{LANG.This_field_is_required}}</span\r\n                      >\r\n                    </div>\r\n                  </div>\r\n\r\n                  <ng-container *ngIf=\"rank_type == '3'\">\r\n                    <div class=\"col-sm-4 nopadding\">\r\n                      <div class=\"form-group\">\r\n                        <input\r\n                          type=\"text\"\r\n                          class=\"form-control\"\r\n                          name=\"cat_minrange\"\r\n                          [(ngModel)]=\"category_minrange\"\r\n                          placeholder=\"{{LANG.Enter_Min_Range}}\"\r\n                          (keypress)=\"onlyNumbers($event)\"\r\n                        />\r\n                        <span class=\"error\" *ngIf=\"error.minrange_error\"\r\n                          >{{LANG.This_field_is_required}}</span\r\n                        >\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-sm-4 nopadding\">\r\n                      <div class=\"form-group\">\r\n                        <input\r\n                          type=\"text\"\r\n                          class=\"form-control\"\r\n                          name=\"cat_maxrange\"\r\n                          [(ngModel)]=\"category_maxrange\"\r\n                          placeholder=\"{{LANG.Enter_Max_Range}}\"\r\n                          (keypress)=\"onlyNumbers($event)\"\r\n                        />\r\n                        <span class=\"error\" *ngIf=\"error.maxrange_error\"\r\n                          >{{LANG.This_field_is_required}}</span\r\n                        >\r\n                      </div>\r\n                    </div>\r\n                  </ng-container>\r\n\r\n                  <div class=\"col-sm-2 nopadding\">\r\n                    <div class=\"form-group mb-2\">\r\n                      <select\r\n                        class=\"form-control\"\r\n                        id=\"category_position\"\r\n                        name=\"category_position\"\r\n                        [(ngModel)]=\"category_position\"\r\n                      >\r\n                        <option\r\n                          *ngFor=\"let number of positions; let i = index\"\r\n                          value=\"{{ number }}\"\r\n                        >\r\n                          {{ number }}\r\n                        </option>\r\n                      </select>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"col-sm-2 nopadding\">\r\n                    <div class=\"form-group mb-0\">\r\n                      <div class=\"input-group\">\r\n                        <select\r\n                          class=\"form-control\"\r\n                          name=\"category_status\"\r\n                          [(ngModel)]=\"category_status\"\r\n                        >\r\n                          <option value=\"1\">{{LANG.Active}}</option>\r\n                          <option value=\"0\">{{LANG.Inactive}}</option>\r\n                        </select>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"col-md-12 text-center\">\r\n                    <button\r\n                      *ngIf=\"!category_load\"\r\n                      type=\"submit\"\r\n                      class=\"btn btn-primary\"\r\n                      (click)=\"addProductCategory()\"\r\n                    >\r\n                      {{LANG.Add}}\r\n                    </button>\r\n                    <button class=\"btn btn-primary\" *ngIf=\"category_load\">\r\n                      <loader></loader>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <ng-container *ngIf=\"id && rank_type != '3'\">\r\n    <h4 class=\"card-title text-center\">{{LANG.Evaluation_Attribute_Details}}</h4>\r\n  \r\n    <div class=\"row p-0 m-0 mt-2 form__bg_color\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"d-flex justify-content-end mt-2\">\r\n          <button type=\"button\" class=\"btn btn-info\" (click)=\"addAttributes()\">\r\n            <i class=\"fa fa-plus\"></i>{{LANG.Create_Attribute}}\r\n          </button>\r\n        </div>\r\n  \r\n        <form *ngIf=\"show_attribute_form\"\r\n          class=\"attribute_modal\"\r\n        >\r\n          \r\n          <div class=\"border-class mb-3 mt-3 p-3 row\">\r\n            <div class=\"col-sm-4 nopadding\">\r\n              <div class=\"form-group mb-2\">\r\n                <select class=\"form-control\" name=\"category\" [(ngModel)]=\"initialProducts.evo_cat_id\">\r\n                  <option value=\"\" disabled selected>{{LANG.Select_Category}}</option>\r\n                  <option *ngFor=\"let data of evaluation_details;\" value=\"{{data.id}}\">{{data.title}}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-4 nopadding\">\r\n              <div class=\"form-group mb-0\">\r\n                <input\r\n                  type=\"text\"\r\n                  class=\"form-control\"\r\n                  name=\"attribute_title\"\r\n                  [(ngModel)]=\"initialProducts.title\"\r\n                  placeholder=\"{{LANG.Enter_Attribute_Title}}\"\r\n                />\r\n                <span class=\"error\" *ngIf=\"error.attribute_title\">{{LANG.This_field_is_required}}</span>\r\n              </div>\r\n            </div>\r\n  \r\n            <div class=\"col-sm-4 nopadding\">\r\n              <div class=\"form-group mb-0\">\r\n                <input\r\n                  type=\"text\"\r\n                  class=\"form-control\"\r\n                  [(ngModel)]=\"initialProducts.ar_title\"\r\n                  name=\"attribute_ar_title\"\r\n                  placeholder=\"{{LANG.Enter_Ar_Attribute_Title}}\"\r\n                />\r\n                <span class=\"error\" *ngIf=\"error.ar_attribute_title\">{{LANG.This_field_is_required}}</span>\r\n  \r\n              </div>\r\n            </div>\r\n\r\n            <ng-container *ngIf=\"rank_type == '3' || rank_type == '1'\">\r\n              <div class=\"col-sm-4 nopadding\">\r\n                <div class=\"form-group\">\r\n                  <input\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    name=\"att_minrange\"\r\n                    [(ngModel)]=\"initialProducts.minrange\"\r\n                    placeholder=\"{{LANG.Enter_Min_Range}}\"\r\n                    (keypress)=\"onlyNumbers($event)\"\r\n                  />\r\n                  <span class=\"error\" *ngIf=\"error.att_minrange_error\"\r\n                    >{{LANG.This_field_is_required}}</span\r\n                  >\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-sm-4 nopadding\">\r\n                <div class=\"form-group\">\r\n                  <input\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    name=\"att_maxrange\"\r\n                    [(ngModel)]=\"initialProducts.maxrange\"\r\n                    placeholder=\"{{LANG.Enter_Max_Range}}\"\r\n                    (keypress)=\"onlyNumbers($event)\"\r\n                  />\r\n                  <span class=\"error\" *ngIf=\"error.att_maxrange_error\"\r\n                    >{{LANG.This_field_is_required}}</span\r\n                  >\r\n                </div>\r\n              </div>\r\n            </ng-container>\r\n  \r\n            <!-- <div class=\"col-sm-2 nopadding\">\r\n              <div class=\"form-group mb-0\">\r\n                <input\r\n                  type=\"text\"\r\n                  class=\"form-control\"\r\n                  id=\"minrange\"\r\n                  name=\"minrange\"\r\n                  value=\"\"\r\n                  placeholder=\"Enter Min Title\"\r\n                />\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-2 nopadding\">\r\n              <div class=\"form-group mb-0\">\r\n                <input\r\n                  type=\"text\"\r\n                  class=\"form-control\"\r\n                  id=\"maxrange\"\r\n                  name=\"maxrange\"\r\n                  value=\"\"\r\n                  placeholder=\"Enter Max Title\"\r\n                />\r\n              </div>\r\n            </div> -->\r\n  \r\n            <div class=\"col-sm-2 nopadding\">\r\n              <div class=\"form-group mb-2\">\r\n                <select\r\n                  class=\"form-control\"\r\n                  name=\"attribute_position\"\r\n                  [(ngModel)]=\"initialProducts.position\"\r\n                >\r\n                  <option\r\n                    *ngFor=\"let number of positions; let i = index\"\r\n                    value=\"{{ number }}\"\r\n                  >\r\n                    {{ number }}\r\n                  </option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n  \r\n            <div class=\"col-sm-2 nopadding\">\r\n              <div class=\"form-group mb-0\">\r\n                <div class=\"input-group\">\r\n                  <select\r\n                    class=\"form-control\"\r\n                    name=\"attribute_status\"\r\n                    [(ngModel)]=\"initialProducts.status\"\r\n                  >\r\n                    <option value=\"1\">{{LANG.Active}}</option>\r\n                    <option value=\"0\">{{LANG.Inactive}}</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n            </div>\r\n  \r\n            <div class=\"col-md-12 text-center\">\r\n              <button\r\n                *ngIf=\"!attribute_load\"\r\n                type=\"submit\"\r\n                class=\"btn btn-primary\"\r\n                (click)=\"addAttributeValue()\"\r\n              >\r\n                {{LANG.Add}}\r\n              </button>\r\n              <button class=\"btn btn-primary\" *ngIf=\"attribute_load\">\r\n                <loader></loader>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n  \r\n        <div class=\"card\">\r\n          <div class=\"card-body\">\r\n            <ul class=\"nav nav-tabs\" role=\"tablist\">\r\n              <li class=\"nav-item\" *ngFor=\"let data of evaluation_details;let i=index;\">\r\n                <a\r\n                  class=\"nav-link\"\r\n                  [class.active]=\"i == 0\"\r\n                  data-toggle=\"tab\"\r\n                  href=\"#tab{{i}}\"\r\n                  role=\"tab\"\r\n                  aria-selected=\"false\"\r\n                  ><span class=\"hidden-sm-up\"></span>\r\n                  <span class=\"hidden-xs-down\">{{data.title}}</span></a\r\n                >\r\n              </li>\r\n  \r\n            </ul>\r\n            <!-- Tab panes -->\r\n            <div class=\"tab-content tabcontent-border\">\r\n              <ng-container *ngFor=\"let data of evaluation_details;let i=index;\">\r\n                <div class=\"tab-pane p-20\" [class.active]=\"i == 0\" id=\"tab{{i}}\" role=\"tabpanel\">\r\n                  <div class=\"table-responsive\">\r\n                    <table class=\"table table-bordered table-striped\">\r\n                      <caption></caption>\r\n    \r\n                      <thead>\r\n                        <tr>\r\n                          <th>{{LANG.TITLE}}</th>\r\n                          <th>{{LANG.AR_TITLE}}</th>\r\n                          \r\n                          <ng-container *ngIf=\"rank_type != '2'\">\r\n                            <th>{{LANG.Min}}</th>\r\n                            <th>{{LANG.Max}}</th>\r\n                          </ng-container>\r\n    \r\n                          <th>{{LANG.POSITION}}</th>\r\n                          <th>{{LANG.STATUS}}</th>\r\n                        </tr>\r\n                      </thead>\r\n                      <tbody>\r\n                        <tr *ngFor=\"let item of data.detail\">\r\n                          <td>{{item.title}}</td>\r\n                          <td>{{item.ar_title}}</td>\r\n                          <ng-container *ngIf=\"rank_type != '2'\">\r\n    \r\n                            <td>{{item.minrange ? item.minrange+'>' : '-'}}</td>\r\n                            <td>{{item.maxrange ? item.maxrange : '-'}}</td>\r\n                          </ng-container>\r\n    \r\n                          <td>{{item.position}}</td>\r\n                          <td>{{item.status == '1' ? LANG.Active : LANG.Inactive}}</td>\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n                  </div>\r\n                </div>\r\n              </ng-container>\r\n  \r\n            </div>\r\n          </div>\r\n  \r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ng-container>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Pages/Dashboard/EvaluationProcess/AddEvaluation/AddEvaluation.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/Pages/Dashboard/EvaluationProcess/AddEvaluation/AddEvaluation.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .select2-container{\r\n    width: 100% !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvRGFzaGJvYXJkL0V2YWx1YXRpb25Qcm9jZXNzL0FkZEV2YWx1YXRpb24vQWRkRXZhbHVhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvUGFnZXMvRGFzaGJvYXJkL0V2YWx1YXRpb25Qcm9jZXNzL0FkZEV2YWx1YXRpb24vQWRkRXZhbHVhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5zZWxlY3QyLWNvbnRhaW5lcntcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/Pages/Dashboard/EvaluationProcess/AddEvaluation/AddEvaluation.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/Pages/Dashboard/EvaluationProcess/AddEvaluation/AddEvaluation.component.ts ***!
  \********************************************************************************************/
/*! exports provided: AddEvaluationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEvaluationComponent", function() { return AddEvaluationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_shared_Services_kyc_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/Services/kyc.service */ "./src/app/shared/Services/kyc.service.ts");
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






var AddEvaluationComponent = /** @class */ (function () {
    function AddEvaluationComponent(kycService, toastr, route, location) {
        var _this = this;
        this.kycService = kycService;
        this.toastr = toastr;
        this.route = route;
        this.location = location;
        this.initialProducts = {
            "title": "",
            "ar_title": "",
            "minrange": "",
            "maxrange": "",
            "status": "1",
            "position": "1",
            "evo_cat_id": ""
        };
        this.id = "";
        this.title = "";
        this.title_ar = "";
        this.role_type = [];
        this.rank_type = "";
        this.status = "1";
        this.position = "1";
        this.rankType = [];
        this.roleType = [];
        this.positions = [];
        this.evaluation_details = [__assign({}, this.initialProducts)];
        this.err = false;
        this.cat_err = false;
        this.att_err = false;
        this.load = false;
        this.category_title = "";
        this.category_title_ar = "";
        this.category_status = "1";
        this.category_position = "1";
        this.category_minrange = "";
        this.category_maxrange = "";
        this.show_category_form = false;
        this.category_load = false;
        this.show_attribute_form = false;
        this.attribute_load = false;
        this.error = {
            title: false,
            title_ar: false,
            role_type: false,
            rank_type: false,
            category_title_ar_error: false,
            category_title_error: false,
            attribute_title: false,
            ar_attribute_title: false,
            maxrange_error: false,
            minrange_error: false,
            att_minrange_error: false,
            att_maxrange_error: false,
        };
        this.LANG = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].english_translations;
        for (var i = 1; i <= 20; i++) {
            this.positions.push(i);
        }
        this.roleType = [
            { id: 1, title: "Super Admin" },
            { id: 2, title: "Admin" },
            { id: 6, title: "Product Manager" },
            { id: 7, title: "Parallel Analyser" },
            { id: 8, title: "Human Capital Analyser" },
            { id: 9, title: "Marketing User" },
            { id: 10, title: "Campaign Publisher" },
        ];
        this.rankType = [
            { id: 1, title: "range" },
            { id: 2, title: "Risk " },
            { id: 3, title: "Z score " },
        ];
        this.route.queryParams
            .subscribe(function (params) {
            if (params['id']) {
                _this.id = atob(atob(params['id']));
                _this.getEvaluationDetails();
            }
        });
    }
    AddEvaluationComponent.prototype.ngOnInit = function () {
        this.loadSelect2();
    };
    AddEvaluationComponent.prototype.loadSelect2 = function () {
        $('.js-example-basic-multiple').select2();
    };
    AddEvaluationComponent.prototype.addMore = function () {
        var new_product = __assign({}, this.initialProducts);
        new_product.position = (this.evaluation_details.length + 1).toString();
        this.evaluation_details.push(new_product);
    };
    AddEvaluationComponent.prototype.remove = function (i) {
        this.evaluation_details.splice(i, 1);
    };
    AddEvaluationComponent.prototype.addCategory = function () {
        this.clearData();
        this.show_category_form = true;
    };
    AddEvaluationComponent.prototype.clearData = function () {
        this.category_load = false;
        this.cat_err = false;
        this.category_position = "1";
        this.category_status = "1";
        this.category_title = "";
        this.category_title_ar = "";
        this.resetError();
    };
    AddEvaluationComponent.prototype.errorHandler = function () {
        var _this = this;
        this.role_type = $("#role_type").val() || [];
        if (this.title == undefined || this.title == '') {
            this.error.title = true;
            this.err = true;
        }
        if (this.title_ar == undefined || this.title_ar == '') {
            this.error.title_ar = true;
            this.err = true;
        }
        if (this.role_type.length == 0) {
            this.error.role_type = true;
            this.err = true;
        }
        if (this.rank_type == undefined || this.rank_type == '') {
            this.error.rank_type = true;
            this.err = true;
        }
        if (!this.id) {
            this.evaluation_details.map(function (data) {
                if (data.title == "" || data.title == undefined) {
                    data.category_title_error = true;
                    _this.err = true;
                }
                else {
                    data.category_title_error = false;
                }
                if (data.ar_title == "" || data.ar_title == undefined) {
                    data.category_title_ar_error = true;
                    _this.err = true;
                }
                else {
                    data.category_title_ar_error = false;
                }
                if (_this.rank_type == "3") {
                    if (data.minrange == "" || data.minrange == undefined) {
                        data.minrange_error = true;
                        _this.err = true;
                    }
                    else {
                        data.minrange_error = false;
                    }
                    if (data.maxrange == "" || data.maxrange == undefined) {
                        data.maxrange_error = true;
                        _this.err = true;
                    }
                    else {
                        data.maxrange_error = false;
                    }
                }
            });
        }
    };
    AddEvaluationComponent.prototype.resetError = function () {
        this.err = false;
        this.load = false;
        this.error = {
            title: false,
            title_ar: false,
            role_type: false,
            rank_type: false,
            category_title_ar_error: false,
            category_title_error: false,
            attribute_title: false,
            ar_attribute_title: false,
            minrange_error: false,
            maxrange_error: false,
            att_minrange_error: false,
            att_maxrange_error: false,
        };
    };
    AddEvaluationComponent.prototype.addProductAttribute = function () {
        this.resetError();
        this.errorHandler();
        if (this.err) {
            return;
        }
        var data = {
            "title": this.title,
            "ar_title": this.title_ar,
            "status": this.status,
            "position": this.position,
            "evo_category": this.evaluation_details,
            "role_id": this.role_type.toString(),
            "rank_type": this.rank_type,
        };
        this.load = true;
        if (this.id) {
            data.id = this.id;
            this.update(data);
            return;
        }
        this.add(data);
    };
    AddEvaluationComponent.prototype.goBack = function () {
        this.location.back();
    };
    AddEvaluationComponent.prototype.getEvaluationDetails = function () {
        var _this = this;
        this.kycService.getEvaluationDetails(this.id).subscribe(function (res) {
            if (res.status) {
                _this.title = res.response.title;
                _this.title_ar = res.response.ar_title;
                _this.status = res.response.status;
                _this.position = res.response.position;
                _this.rank_type = res.response.rank_type.toString();
                _this.role_type = res.response.role_id.split(",");
                _this.evaluation_details = res.response.category || [];
                $("#role_type").val(_this.role_type);
                $("#role_type").trigger('change');
            }
        });
    };
    AddEvaluationComponent.prototype.add = function (data) {
        var _this = this;
        this.kycService.addEvaluation(data).subscribe(function (res) {
            _this.load = false;
            if (res.status) {
                _this.toastr.successToastr(_this.LANG.Evaluation_added_successfully);
                _this.location.back();
                return;
            }
            _this.toastr.warningToastr(res.message);
        });
    };
    AddEvaluationComponent.prototype.update = function (data, type) {
        var _this = this;
        this.kycService.addEvaluation(data).subscribe(function (res) {
            _this.load = false;
            _this.category_load = false;
            _this.attribute_load = false;
            if (res.status) {
                _this.show_attribute_form = false;
                _this.show_category_form = false;
                _this.toastr.successToastr(_this.LANG.Attribute_updated_successfully);
                if (!type) {
                    _this.location.back();
                }
                return;
            }
            _this.toastr.warningToastr(res.response.message);
        });
    };
    AddEvaluationComponent.prototype.updateAttributeDetails = function (data) {
        var _this = this;
        this.kycService.updateEvaluationDetails(data).subscribe(function (res) {
            _this.load = false;
            _this.category_load = false;
            _this.attribute_load = false;
            if (res.status) {
                _this.show_attribute_form = false;
                _this.show_category_form = false;
                _this.toastr.successToastr(_this.LANG.Attribute_updated_successfully);
                return;
            }
            _this.toastr.warningToastr(res.response.message);
        });
    };
    AddEvaluationComponent.prototype.addAttributeValue = function () {
        var _this = this;
        this.attributeError();
        if (this.att_err) {
            return;
        }
        this.attribute_load = true;
        var index = this.evaluation_details.findIndex(function (item) { return item.id == _this.initialProducts.evo_cat_id; });
        if (index != -1) {
            this.evaluation_details[index].detail.push(this.initialProducts);
        }
        var post_data = {
            "evo_detail": [__assign({ "evo_id": this.id }, this.initialProducts)]
        };
        this.attribute_load = true;
        this.updateAttributeDetails(post_data);
    };
    AddEvaluationComponent.prototype.categoryError = function () {
        this.cat_err = false;
        this.resetError();
        if (this.category_title == undefined || this.category_title == '') {
            this.error.category_title_error = true;
            this.cat_err = true;
        }
        if (this.category_title_ar == undefined || this.category_title_ar == '') {
            this.error.category_title_ar_error = true;
            this.cat_err = true;
        }
        if (this.rank_type == "3" || this.rank_type == "1") {
            if (this.category_minrange == "" || this.category_minrange == undefined) {
                this.error.minrange_error = true;
                this.err = true;
            }
            if (this.category_maxrange == "" || this.category_maxrange == undefined) {
                this.error.maxrange_error = true;
                this.err = true;
            }
        }
    };
    AddEvaluationComponent.prototype.attributeError = function () {
        this.att_err = false;
        this.resetError();
        if (this.initialProducts.title == undefined || this.initialProducts.title == '') {
            this.error.attribute_title = true;
            this.att_err = true;
        }
        if (this.initialProducts.ar_title == undefined || this.initialProducts.ar_title == '') {
            this.error.ar_attribute_title = true;
            this.att_err = true;
        }
        if (this.rank_type == "3" || this.rank_type == "1") {
            if (this.initialProducts.minrange == "" || this.initialProducts.minrange == undefined) {
                this.error.att_minrange_error = true;
                this.err = true;
            }
            if (this.initialProducts.maxrange == "" || this.initialProducts.maxrange == undefined) {
                this.error.att_maxrange_error = true;
                this.err = true;
            }
        }
    };
    AddEvaluationComponent.prototype.addAttributes = function () {
        this.show_attribute_form = true;
        this.clearAttributeData();
    };
    AddEvaluationComponent.prototype.clearAttributeData = function () {
        this.attribute_load = false;
        this.att_err = false;
        this.initialProducts = {
            "title": "",
            "ar_title": "",
            "minrange": "",
            "maxrange": "",
            "status": "1",
            "position": "1",
            "evo_cat_id": ""
        };
        this.resetError();
    };
    AddEvaluationComponent.prototype.addProductCategory = function () {
        this.categoryError();
        if (this.cat_err) {
            return;
        }
        var data = {
            ar_title: this.category_title_ar,
            maxrange: parseInt(this.category_maxrange),
            minrange: parseInt(this.category_minrange),
            position: this.category_position,
            status: this.category_status,
            title: this.category_title,
            detail: []
        };
        this.category_load = true;
        this.evaluation_details.push(data);
        var post_data = {
            "title": this.title,
            "ar_title": this.title_ar,
            "status": this.status,
            "position": this.position,
            "evo_category": this.evaluation_details,
            "role_id": this.role_type.toString(),
            "rank_type": this.rank_type,
            "id": this.id
        };
        this.category_load = true;
        this.update(post_data, 1);
    };
    AddEvaluationComponent.prototype.onlyNumbers = function (event) {
        var keycode = (event.which) ? event.which : event.keyCode;
        if ((keycode < 48 || keycode > 57) && keycode !== 13 || keycode == 46) {
            event.preventDefault();
            return false;
        }
        return;
    };
    AddEvaluationComponent.ctorParameters = function () { return [
        { type: src_app_shared_Services_kyc_service__WEBPACK_IMPORTED_MODULE_4__["KYCService"] },
        { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_2__["ToastrManager"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
    ]; };
    AddEvaluationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! raw-loader!./AddEvaluation.component.html */ "./node_modules/raw-loader/index.js!./src/app/Pages/Dashboard/EvaluationProcess/AddEvaluation/AddEvaluation.component.html"),
            styles: [__webpack_require__(/*! ./AddEvaluation.component.css */ "./src/app/Pages/Dashboard/EvaluationProcess/AddEvaluation/AddEvaluation.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_shared_Services_kyc_service__WEBPACK_IMPORTED_MODULE_4__["KYCService"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_2__["ToastrManager"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], AddEvaluationComponent);
    return AddEvaluationComponent;
}());



/***/ }),

/***/ "./src/app/Pages/Dashboard/EvaluationProcess/AddEvaluation/AddEvaluation.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/Pages/Dashboard/EvaluationProcess/AddEvaluation/AddEvaluation.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: AddEvaluationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEvaluationModule", function() { return AddEvaluationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_shared_loader_Loader_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/loader/Loader.module */ "./src/app/shared/loader/Loader.module.ts");
/* harmony import */ var _AddEvaluation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AddEvaluation.component */ "./src/app/Pages/Dashboard/EvaluationProcess/AddEvaluation/AddEvaluation.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ChildRoutes = [
    {
        path: 'add-evaluation',
        component: _AddEvaluation_component__WEBPACK_IMPORTED_MODULE_5__["AddEvaluationComponent"]
    },
];
var AddEvaluationModule = /** @class */ (function () {
    function AddEvaluationModule() {
    }
    AddEvaluationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(ChildRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                src_app_shared_loader_Loader_module__WEBPACK_IMPORTED_MODULE_4__["LoaderModule"]
            ],
            declarations: [
                _AddEvaluation_component__WEBPACK_IMPORTED_MODULE_5__["AddEvaluationComponent"]
            ]
        })
    ], AddEvaluationModule);
    return AddEvaluationModule;
}());



/***/ })

}]);
//# sourceMappingURL=EvaluationProcess-AddEvaluation-AddEvaluation-module.js.map