(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~CampaignEvaluation-CampaignDetails-CampaignDetails-module~Products-LoanManagement-add-loan-a~c73e1b0f"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Pages/Dashboard/Products/LoanManagement/add-loan/add-loan.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Pages/Dashboard/Products/LoanManagement/add-loan/add-loan.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"row page-titles\">\r\n      <div class=\"col-md-5 align-self-center\">\r\n        <h4 class=\"text-themecolor\">{{LANG.Add_Loan}}</h4>\r\n      </div>\r\n      <!-- <div class=\"col-md-7 align-self-center text-right\">\r\n        <div class=\"d-flex justify-content-end align-items-center\">\r\n          <ol class=\"breadcrumb\">\r\n            <li class=\"breadcrumb-item\"><a href=\"javascript:void(0)\">{{LANG.  Home}}</a></li>\r\n            <li class=\"breadcrumb-item active\">{{LANG.Add_Loan}}</li>\r\n          </ol>\r\n        </div>\r\n      </div> -->\r\n    </div>\r\n  \r\n    <div class=\"row\">\r\n      <div class=\"col-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-body\">\r\n            <form class=\"mt-4\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                  <div class=\"form-group\">\r\n                    <label for=\"exampleInputEmail1\">{{LANG.TITLE}}</label>\r\n                    <input [disabled]=\"input_disabled\"\r\n                      type=\"text\"\r\n                      class=\"form-control\"\r\n                      name=\"loan_title\"\r\n                      placeholder=\"{{LANG.Enter_Your_Title}}\"\r\n                      [(ngModel)]=\"loan_title\"\r\n                    />\r\n                    <span class=\"error\" *ngIf=\"error.loan_title\">{{LANG.This_field_is_required}}</span>\r\n  \r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                  <div class=\"form-group\">\r\n                    <label for=\"exampleInputPassword1\"\r\n                      >{{LANG.AR_TITLE}}</label\r\n                    >\r\n                    <input [disabled]=\"input_disabled\"\r\n                      type=\"text\"\r\n                      class=\"form-control text-right\"\r\n                      name=\"loan_title_ar\"\r\n                      placeholder=\"{{LANG.Enter_Your_Ar_Title}}\"\r\n                      [(ngModel)]=\"loan_title_ar\"\r\n                    />\r\n                    <span class=\"error\" *ngIf=\"error.loan_title_ar\">{{LANG.This_field_is_required}}</span>\r\n  \r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row p-t-20\">\r\n\r\n                <!-- <div class=\"col-md-3\">\r\n                    <div class=\"form-group has-success\">\r\n                      <label class=\"control-label\">{{LANG.Product_Category}}</label>\r\n                      <select [disabled]=\"input_disabled\"\r\n                        class=\"form-control custom-select\"\r\n                        name=\"product_id\"\r\n                        [(ngModel)]=\"product_id\"\r\n                        (change)=\"changeProduct()\"\r\n                      >\r\n                      <option value=\"\" selected disabled>{{LANG.Select_Product_Category}}</option>\r\n\r\n                        <option *ngFor=\"let data of products;let i = index\" value=\"{{data.id}}\">{{data.title}}</option>\r\n                      </select>\r\n                        <span class=\"error\" *ngIf=\"error.product_error\">{{LANG.This_field_is_required}}</span>\r\n\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-md-3\">\r\n                  <div class=\"form-group has-success\">\r\n                    <label class=\"control-label\">{{LANG.Opportunities}}</label>\r\n                    <select [disabled]=\"input_disabled\"\r\n                      class=\"form-control custom-select\"\r\n                      name=\"opportunity_id\"\r\n                      [(ngModel)]=\"opportunity_id\"\r\n                    >\r\n                    <option value=\"\" selected disabled>{{LANG.Select_Opportunity}}</option>\r\n\r\n                      <option *ngFor=\"let data of opportunity_list;let i = index\" value=\"{{data.id}}\">{{data.tagline}}</option>\r\n                    </select>\r\n                      <span class=\"error\" *ngIf=\"error.evaluation_error\">{{LANG.This_field_is_required}}</span>\r\n\r\n                  </div>\r\n              </div> -->\r\n\r\n                <div class=\"col-md-6\">\r\n                <div class=\"form-group has-success\">\r\n                    <label class=\"control-label\">{{LANG.Loan_Type}}</label>\r\n                    <select [disabled]=\"input_disabled\"\r\n                    class=\"form-control custom-select\"\r\n                    name=\"loan_type_id\"\r\n                    [(ngModel)]=\"loan_type_id\"\r\n                    >\r\n                    <option value=\"\" selected disabled>{{LANG.Select_Loan_Type}}</option>\r\n                    <option *ngFor=\"let data of loanType;let i = index\" value=\"{{data.id}}\">{{data.title}}</option>\r\n                    </select>\r\n                    <span class=\"error\" *ngIf=\"error.loan_type_error\">{{LANG.This_field_is_required}}</span>\r\n\r\n                </div>\r\n                </div>\r\n            \r\n\r\n            <div class=\"col-md-6\">\r\n                <div class=\"form-group has-success mb-0\">\r\n                <label class=\"control-label\">{{LANG.Status}}</label>\r\n                <select [disabled]=\"input_disabled\"\r\n                    class=\"form-control custom-select\"\r\n                    name=\"status\"\r\n                    [(ngModel)]=\"status\"\r\n                >\r\n                    <option value=\"1\">{{LANG.Active}}</option>\r\n                    <option value=\"2\">{{LANG.Inactive}}</option>\r\n                </select>\r\n                </div>\r\n            </div>\r\n\r\n            \r\n            </div>\r\n\r\n\r\n            <div class=\"row border-class form-group kyc-section\">\r\n            <div class=\"col-md-12\">\r\n                <h4 class=\"card-title\">{{LANG.Add_Interest_Details}}</h4>\r\n\r\n                <div class=\"row border-class form-group mb-0 p-2 kyc-section\">\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"form-group has-success\">\r\n                      <label class=\"control-label\">{{LANG.Interest_Calculation_Method}}</label>\r\n                      <select [disabled]=\"input_disabled\"\r\n                        class=\"form-control custom-select\"\r\n                        name=\"interest_calculation_method\"\r\n                        [(ngModel)]=\"interest_calculation_method\" \r\n                      >\r\n                      <!-- <option value=\"\" selected disabled>{{LANG.Select_Calculation_Method}}</option> -->\r\n\r\n                        <option *ngFor=\"let data of calculation_list;let i = index\" value=\"{{data.id}}\">{{data.title}}</option>\r\n                      </select>\r\n                        <span class=\"error\" *ngIf=\"error.interest_calculation_method\">{{LANG.This_field_is_required}}</span>\r\n\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"form-group has-success\">\r\n                      <label class=\"control-label\">{{LANG.Accured_Interest_Posting_Frequency}}</label>\r\n                      <select [disabled]=\"input_disabled\"\r\n                        class=\"form-control custom-select\"\r\n                        name=\"accured_interest_posting_frequency\"\r\n                        [(ngModel)]=\"accured_interest_posting_frequency\"\r\n                      >\r\n                      <!-- <option value=\"\" selected disabled>{{LANG.Select_posting_frequency}}</option> -->\r\n\r\n                        <option *ngFor=\"let data of ir_frequency;let i = index\" value=\"{{data.id}}\">{{data.title}}</option>\r\n                      </select>\r\n                        <span class=\"error\" *ngIf=\"error.accured_interest_posting_frequency\">{{LANG.This_field_is_required}}</span>\r\n\r\n                    </div>\r\n                </div>\r\n\r\n                <!-- <div class=\"col-md-4\">\r\n                    <div class=\"form-group has-success\">\r\n                      <label class=\"control-label\">{{LANG.How_is_Interest_Rate_charged}}</label>\r\n                      <select [disabled]=\"input_disabled\"\r\n                        class=\"form-control custom-select\"\r\n                        name=\"ir_charged\"\r\n                        [(ngModel)]=\"ir_charged\"\r\n                      >\r\n                      <option value=\"\" selected disabled>{{LANG.Select_Method}}</option>\r\n\r\n                        <option *ngFor=\"let data of charged_list;let i = index\" value=\"{{data.id}}\">{{data.title}}</option>\r\n                      </select>\r\n                        <span class=\"error\" *ngIf=\"error.ir_charged\">{{LANG.This_field_is_required}}</span>\r\n\r\n                    </div>\r\n                </div> -->\r\n\r\n                    \r\n                  </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row border-class form-group kyc-section\">\r\n                <div class=\"col-md-12\">\r\n                    <h4 class=\"card-title\">{{LANG.Interest_Rate_Constrains}}</h4>\r\n    \r\n                    <div class=\"row border-class form-group mb-0 p-2 kyc-section\">\r\n                    <div class=\"col-md-4\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"exampleInputEmail1\">{{LANG.interest_rate}}</label>\r\n                            <input [disabled]=\"input_disabled\"\r\n                              type=\"text\"\r\n                              class=\"form-control\"\r\n                              name=\"default\"\r\n                              placeholder=\"{{LANG.Enter_Default_Title}}\"\r\n                              [(ngModel)]=\"default\"\r\n                              (keypress)=\"onlyNumbers($event)\"\r\n\r\n                            />\r\n                            <span class=\"error\" *ngIf=\"error.default\">{{LANG.This_field_is_required}}</span>\r\n          \r\n                          </div>\r\n                    </div>\r\n    \r\n                    <!-- <div class=\"col-md-4\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"exampleInputEmail1\">Min</label>\r\n                            <input [disabled]=\"input_disabled\"\r\n                              type=\"text\"\r\n                              class=\"form-control\"\r\n                              name=\"min_value\"\r\n                              placeholder=\"Enter Minimum Value\"\r\n                              [(ngModel)]=\"min_value\"\r\n                              (keypress)=\"onlyNumbers($event)\"\r\n\r\n                            />\r\n                            <span class=\"error\" *ngIf=\"error.min_value\">{{LANG.This_field_is_required}}</span>\r\n          \r\n                          </div>\r\n                    </div>\r\n    \r\n                    <div class=\"col-md-4\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"exampleInputEmail1\">Max</label>\r\n                            <input [disabled]=\"input_disabled\"\r\n                              type=\"text\"\r\n                              class=\"form-control\"\r\n                              name=\"max_value\"\r\n                              placeholder=\"Enter Maximum value\"\r\n                              [(ngModel)]=\"max_value\"\r\n                              (keypress)=\"onlyNumbers($event)\"\r\n\r\n                            />\r\n                            <span class=\"error\" *ngIf=\"error.max_value\">{{LANG.This_field_is_required}}</span>\r\n          \r\n                        </div>\r\n                    </div> -->\r\n\r\n                    <div class=\"col-md-4\">\r\n                      <div class=\"form-group\">\r\n                          <label for=\"exampleInputEmail1\">{{LANG.Fundraiser_Profit}}</label>\r\n                          <input [disabled]=\"input_disabled\"\r\n                            type=\"text\"\r\n                            class=\"form-control\"\r\n                            name=\"fundraiser_profit\"\r\n                            placeholder=\"{{LANG.Enter_Fundraiser_Profit}}\"\r\n                            [(ngModel)]=\"fundraiser_profit\"\r\n                            (keypress)=\"onlyNumbers($event)\"\r\n\r\n                          />\r\n                          <span class=\"error\" *ngIf=\"error.fundraiser_profit\">{{LANG.This_field_is_required}}</span>\r\n        \r\n                        </div>\r\n                  </div>\r\n    \r\n                        \r\n                      </div>\r\n                    </div>\r\n            </div>\r\n\r\n\r\n            <app-add-payment-info [input_disabled]=\"input_disabled\"></app-add-payment-info>\r\n<!-- \r\n            <div class=\"row border-class form-group kyc-section\">\r\n                <div class=\"col-md-12\">\r\n                    <h4 class=\"card-title\">Account Terms</h4>\r\n    \r\n                    <div class=\"row border-class form-group mb-0 p-2 kyc-section\">\r\n                    <div class=\"col-md-5\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"exampleInputEmail1\">Interest Rate</label>\r\n                            <div class=\"d-flex align-items-center\">\r\n                                <input [disabled]=\"input_disabled\"\r\n                                  type=\"text\"\r\n                                  class=\"form-control\"\r\n                                  name=\"interest_rate\"\r\n                                  placeholder=\"Enter Interest Rate\"\r\n                                  [(ngModel)]=\"interest_rate\"\r\n                                />\r\n                                <span class=\"ml-4\">% {{ir_charged_title}}</span>\r\n                            </div>\r\n                            <span class=\"error\" *ngIf=\"error.interest_rate\">{{LANG.This_field_is_required}}</span>\r\n                            <span>Min: {{min_value}}</span>\r\n                          </div>\r\n                    </div>\r\n    \r\n                        \r\n                      </div>\r\n                    </div>\r\n            </div> -->\r\n\r\n\r\n\r\n              <div class=\"d-flex\">\r\n                <button *ngIf=\"!load && !input_disabled\" type=\"submit\" class=\"btn btn-primary\" (click)=\"addLoan()\" [disabled]=\"input_disabled\">{{loan_id ? LANG.Update : LANG.Submit}}</button>\r\n                <button class=\"btn btn-primary\" *ngIf=\"load\">                                \r\n                    <loader></loader>\r\n                </button>\r\n                <button *ngIf=\"!loan_loading && !input_disabled && show_apply_btn\" [disabled]=\"btndisable==true\" type=\"button\" class=\"btn btn-info d-none d-lg-block m-l-15\" (click)=\"applyLoan()\">\r\n                  <i class=\"fa fa-plus-circle\"></i> {{LANG.Apply_Loan}}</button>\r\n                  <button *ngIf=\"loan_loading\" type=\"button\" class=\"btn btn-info d-none d-lg-block m-l-15\"><loader></loader></button>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Pages/Dashboard/Products/PaymentManagement/add-payment-info/add-payment-info.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Pages/Dashboard/Products/PaymentManagement/add-payment-info/add-payment-info.component.html ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"row page-titles\">\r\n      <div class=\"col-md-5 align-self-center\">\r\n        <h4 class=\"text-themecolor\">{{LANG.Add_Payment_Info}}</h4>\r\n      </div>\r\n\r\n     \r\n\r\n      <!-- <div class=\"col-md-7 align-self-center text-right\">\r\n        <div class=\"d-flex justify-content-end align-items-center\">\r\n          <ol class=\"breadcrumb\">\r\n            <li class=\"breadcrumb-item\"><a href=\"javascript:void(0)\">Home</a></li>\r\n            <li class=\"breadcrumb-item active\">Add Payment Info</li>\r\n          </ol>\r\n        </div>\r\n      </div> -->\r\n    </div>\r\n    <div class=\"row border-class form-group kyc-section\">\r\n      <div class=\"col-md-12\">\r\n          <h4 class=\"card-title\">Tax Rate</h4>\r\n\r\n          <div class=\"row border-class form-group mb-0 p-2 kyc-section\">\r\n          <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                  <label for=\"exampleInputEmail1\">Investor Fees</label>\r\n                  <input [disabled]=\"input_disabled\"\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    name=\"investor_tax\"\r\n                    placeholder=\"Investor Fees\"\r\n                    [(ngModel)]=\"investor_tax\"\r\n                    (keypress)=\"onlyNumbers($event)\"\r\n\r\n                  />\r\n                  <span class=\"error\" *ngIf=\"error.default\">{{LANG.This_field_is_required}}</span>\r\n\r\n                </div>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <div class=\"form-group\">\r\n                <label for=\"exampleInputEmail1\">Borrower Tax</label>\r\n                <input [disabled]=\"input_disabled\"\r\n                  type=\"text\"\r\n                  class=\"form-control\"\r\n                  name=\"borrower_tax\"\r\n                  placeholder=\"Borrower Tax\"\r\n                  [(ngModel)]=\"borrower_tax\"\r\n                  (keypress)=\"onlyNumbers($event)\"\r\n\r\n                />\r\n                <span class=\"error\" *ngIf=\"error.fundraiser_profit\">{{LANG.This_field_is_required}}</span>\r\n\r\n              </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">Fees</label>\r\n              <input [disabled]=\"input_disabled\"\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                name=\"fees\"\r\n                placeholder=\"Fees\"\r\n                [(ngModel)]=\"fees\"\r\n                (keypress)=\"onlyNumbers($event)\"\r\n\r\n              />\r\n              <span class=\"error\" *ngIf=\"error.default\">{{LANG.This_field_is_required}}</span>\r\n\r\n            \r\n\r\n              \r\n            </div>\r\n          </div>\r\n  </div>\r\n  \r\n    <div class=\"row\">\r\n      <div class=\"col-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-body\">\r\n            <form class=\"mt-4\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group has-success\">\r\n                        <label class=\"control-label\">{{LANG.Payment_Interval_Method}}</label>\r\n                        <select [disabled]=\"input_disabled\"\r\n                            class=\"form-control custom-select\"\r\n                            name=\"payment_interval_method\"\r\n                            [(ngModel)]=\"payment_interval_method\"\r\n                        >\r\n                        <option value=\"0\" selected disabled>{{LANG.Select_Interval_Method}}</option>\r\n\r\n                            <option *ngFor=\"let data of payment_intervals;let i = index\" value=\"{{data.id}}\">{{data.title}}</option>\r\n                        </select>\r\n                        <span class=\"error\" *ngIf=\"error.payment_interval_method\">{{LANG.This_field_is_required}}</span>\r\n\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6\" *ngIf=\"payment_interval_method && payment_interval_method != 2\">\r\n                    <label class=\"control-label\">{{LANG.Payments_are_made_every}}</label>\r\n                    <div class=\"row\">\r\n\r\n                        <div class=\"col-md-4 p-0\">\r\n                            <div class=\"form-group has-success\">\r\n                                <input [disabled]=\"input_disabled\"\r\n                                type=\"text\"\r\n                                class=\"form-control\"\r\n                                name=\"payment_period\"\r\n                                placeholder=\"{{LANG.Enter_Payment_Period}}\"\r\n                                [(ngModel)]=\"payment_period\"\r\n                              />\r\n                                <span class=\"error\" *ngIf=\"error.payment_period\">{{LANG.This_field_is_required}}</span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6 p-0\">\r\n                            <div class=\"form-group\">\r\n                               \r\n                                <select [disabled]=\"input_disabled\"\r\n                                  class=\"form-control custom-select\"\r\n                                  name=\"payment_period_id\"\r\n                                  [(ngModel)]=\"payment_period_id\"\r\n                                >\r\n                                  <option value=\"\" selected disabled>{{LANG.Select_Payment_Period}}</option>\r\n                                  <option *ngFor=\"let data of payment_period_list;let i = index\" value=\"{{data.id}}\">{{data.title}}</option>\r\n                                </select>\r\n                                <span class=\"error\" *ngIf=\"error.payment_period_id\">{{LANG.This_field_is_required}}</span>\r\n              \r\n                              </div>\r\n                        </div>\r\n                    </div>\r\n                    \r\n                    \r\n                </div>\r\n              </div>\r\n\r\n            <div class=\"row border-class form-group kyc-section\">\r\n                <div class=\"col-md-12\">\r\n                    <h4 class=\"card-title\">{{LANG.Installment_Constrains}}</h4>\r\n    \r\n                    <div class=\"row border-class form-group mb-0 p-2 kyc-section\">\r\n                    <div class=\"col-md-4\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"exampleInputEmail1\">{{LANG.no_of_installments}}</label>\r\n                            <input [disabled]=\"input_disabled\"\r\n                              type=\"text\"\r\n                              class=\"form-control\"\r\n                              name=\"installments_default\"\r\n                              placeholder=\"{{LANG.Enter_Default_Title}}\"\r\n                              [(ngModel)]=\"installments_default\"\r\n                              (keypress)=\"onlyNumbers($event)\"\r\n\r\n                            />\r\n                            <span class=\"error\" *ngIf=\"error.installments_default\">{{LANG.This_field_is_required}}</span>\r\n          \r\n                          </div>\r\n                    </div>\r\n    \r\n                    <!-- <div class=\"col-md-4\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"exampleInputEmail1\">Min</label>\r\n                            <input [disabled]=\"input_disabled\"\r\n                              type=\"text\"\r\n                              class=\"form-control\"\r\n                              name=\"installments_min_value\"\r\n                              placeholder=\"Enter Minimum Value\"\r\n                              [(ngModel)]=\"installments_min_value\"\r\n                              (keypress)=\"onlyNumbers($event)\"\r\n\r\n                            />\r\n                            <span class=\"error\" *ngIf=\"error.installments_min_value\">{{LANG.This_field_is_required}}</span>\r\n          \r\n                          </div>\r\n                    </div>\r\n    \r\n                    <div class=\"col-md-4\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"exampleInputEmail1\">Max</label>\r\n                            <input [disabled]=\"input_disabled\"\r\n                              type=\"text\"\r\n                              class=\"form-control\"\r\n                              name=\"installments_max_value\"\r\n                              placeholder=\"Enter Maximum value\"\r\n                              [(ngModel)]=\"installments_max_value\"\r\n                              (keypress)=\"onlyNumbers($event)\"\r\n\r\n                            />\r\n                            <span class=\"error\" *ngIf=\"error.installments_max_value\">{{LANG.This_field_is_required}}</span>\r\n          \r\n                        </div>\r\n                    </div> -->\r\n    \r\n                        \r\n                      </div>\r\n                    </div>\r\n            </div>\r\n              \r\n\r\n\r\n            \r\n\r\n           \r\n\r\n            <div class=\"row border-class form-group kyc-section\">\r\n                <div class=\"col-md-12\">\r\n                    <h4 class=\"card-title\">{{LANG.First_Due_date_Offest_Constrains_Days}}</h4>\r\n    \r\n                    <div class=\"row border-class form-group mb-0 p-2 kyc-section\">\r\n                    <div class=\"col-md-4\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"exampleInputEmail1\">{{LANG.no_of_days}}</label>\r\n                            <input [disabled]=\"input_disabled\"\r\n                              type=\"text\"\r\n                              class=\"form-control\"\r\n                              name=\"due_date_default\"\r\n                              placeholder=\"{{LANG.Enter_Default_Title}}\"\r\n                              [(ngModel)]=\"due_date_default\"\r\n                              (keypress)=\"onlyNumbers($event)\"\r\n\r\n                            />\r\n                            <span class=\"error\" *ngIf=\"error.due_date_default\">{{LANG.This_field_is_required}}</span>\r\n          \r\n                          </div>\r\n                    </div>\r\n    \r\n                    <!-- <div class=\"col-md-4\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"exampleInputEmail1\">Min</label>\r\n                            <input [disabled]=\"input_disabled\"\r\n                              type=\"text\"\r\n                              class=\"form-control\"\r\n                              name=\"due_date_min_value\"\r\n                              placeholder=\"Enter Minimum Value\"\r\n                              [(ngModel)]=\"due_date_min_value\"\r\n                              (keypress)=\"onlyNumbers($event)\"\r\n\r\n                            />\r\n                            <span class=\"error\" *ngIf=\"error.due_date_min_value\">{{LANG.This_field_is_required}}</span>\r\n          \r\n                          </div>\r\n                    </div>\r\n    \r\n                    <div class=\"col-md-4\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"exampleInputEmail1\">Max</label>\r\n                            <input [disabled]=\"input_disabled\"\r\n                              type=\"text\"\r\n                              class=\"form-control\"\r\n                              name=\"due_date_max_value\"\r\n                              placeholder=\"Enter Maximum value\"\r\n                              [(ngModel)]=\"due_date_max_value\"\r\n                              (keypress)=\"onlyNumbers($event)\"\r\n\r\n                            />\r\n                            <span class=\"error\" *ngIf=\"error.due_date_max_value\">{{LANG.This_field_is_required}}</span>\r\n          \r\n                        </div>\r\n                    </div> -->\r\n    \r\n                        \r\n                      </div>\r\n                    </div>\r\n            </div>\r\n\r\n            <div class=\"row border-class form-group kyc-section\">\r\n                <div class=\"col-md-12\">\r\n                    <h4 class=\"card-title\">{{LANG.Other_Details}}</h4>\r\n    \r\n                    <div class=\"row border-class form-group mb-0 p-2 kyc-section\">\r\n                    <!-- <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"exampleInputEmail1\">{{LANG.Collect_Principle_every}}</label>\r\n                            <div class=\"d-flex align-items-center\">\r\n                                <input [disabled]=\"input_disabled\"\r\n                                  type=\"text\"\r\n                                  class=\"form-control\"\r\n                                  name=\"collect_principle\"\r\n                                  placeholder=\"{{LANG.Enter_Principle}}\"\r\n                                  [(ngModel)]=\"collect_principle\"\r\n                                />\r\n                                <span class=\"ml-2\">{{LANG.Repayments}}</span>\r\n                            </div>\r\n                            <span class=\"error\" *ngIf=\"error.collect_principle\">{{LANG.This_field_is_required}}</span>\r\n          \r\n                          </div>\r\n                    </div> -->\r\n\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group has-success\">\r\n                          <label class=\"control-label\">{{LANG.Grace_Period_Type}}</label>\r\n                          <select [disabled]=\"input_disabled\"\r\n                            class=\"form-control custom-select\"\r\n                            name=\"grace_period_type\"\r\n                            [(ngModel)]=\"grace_period_type\"\r\n                          >\r\n                          <option value=\"0\" selected disabled>{{LANG.Select_Grace_Period_Type}}</option>\r\n    \r\n                            <option *ngFor=\"let data of grace_period_list;let i = index\" value=\"{{data.id}}\">{{data.title}}</option>\r\n                          </select>\r\n                            <span class=\"error\" *ngIf=\"error.grace_period_type\">{{LANG.This_field_is_required}}</span>\r\n    \r\n                        </div>\r\n\r\n                        <div class=\"form-group has-success\" *ngIf=\"grace_period_type && grace_period_type != 1\">\r\n                            <label class=\"control-label\">{{LANG.Grace_Period}}</label>\r\n                            <input [disabled]=\"input_disabled\"\r\n                                type=\"text\"\r\n                                class=\"form-control\"\r\n                                name=\"grace_period\"\r\n                                placeholder=\"{{LANG.Enter_Grace_Period}}\"\r\n                                [(ngModel)]=\"grace_period\"\r\n                                (keypress)=\"onlyNumbers($event)\"\r\n                            />\r\n                              <span class=\"error\" *ngIf=\"error.grace_period\">{{LANG.This_field_is_required}}</span>\r\n      \r\n                          </div>\r\n                    </div>\r\n    \r\n                    \r\n    \r\n                        \r\n                      </div>\r\n                    </div>\r\n            </div>\r\n\r\n\r\n              <!-- <button *ngIf=\"!load\" type=\"submit\" class=\"btn btn-primary mt-2\" (click)=\"addLoan()\">{{id ? 'Update' : 'Submit'}}</button>\r\n              <button class=\"btn btn-primary\" *ngIf=\"load\">                                \r\n                  <loader></loader>\r\n              </button> -->\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/Pages/Dashboard/Products/LoanManagement/add-loan/add-loan.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/Pages/Dashboard/Products/LoanManagement/add-loan/add-loan.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".kyc-section{\r\n    box-shadow: 1px 1px 4px 1px #b1b1b18c;\r\n    padding: 10px 15px;\r\n    margin: 15px 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvRGFzaGJvYXJkL1Byb2R1Y3RzL0xvYW5NYW5hZ2VtZW50L2FkZC1sb2FuL2FkZC1sb2FuLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQ0FBcUM7SUFDckMsa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9QYWdlcy9EYXNoYm9hcmQvUHJvZHVjdHMvTG9hbk1hbmFnZW1lbnQvYWRkLWxvYW4vYWRkLWxvYW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5reWMtc2VjdGlvbntcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNHB4IDFweCAjYjFiMWIxOGM7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICBtYXJnaW46IDE1cHggMDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/Pages/Dashboard/Products/LoanManagement/add-loan/add-loan.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/Pages/Dashboard/Products/LoanManagement/add-loan/add-loan.component.ts ***!
  \****************************************************************************************/
/*! exports provided: AddLoanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddLoanComponent", function() { return AddLoanComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_Services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/Services/product.service */ "./src/app/shared/Services/product.service.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _PaymentManagement_add_payment_info_add_payment_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../PaymentManagement/add-payment-info/add-payment-info.component */ "./src/app/Pages/Dashboard/Products/PaymentManagement/add-payment-info/add-payment-info.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_Services_kyc_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/Services/kyc.service */ "./src/app/shared/Services/kyc.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AddLoanComponent = /** @class */ (function () {
    function AddLoanComponent(productService, kycService, toastr, location, route) {
        // this.route.queryParams
        //     .subscribe(
        //       (params: Params) => {
        //         // if(params['id']){
        //         //   this.id = atob(atob(params['id']))
        //         //   this.getLoanById();
        //         // }
        //       }
        // )
        this.productService = productService;
        this.kycService = kycService;
        this.toastr = toastr;
        this.location = location;
        this.route = route;
        this.loan_title = "";
        this.loan_title_ar = "";
        this.status = "1";
        this.loan_type_id = "";
        this.accured_interest_posting_frequency = "";
        this.ir_charged = "";
        this.product_id = "";
        this.opportunity_id = "";
        this.loan_loading = false;
        this.input_disabled = false;
        this.show_apply_btn = false;
        this.onSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.apply = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.products = [];
        this.loanType = [];
        this.calculation_list = [];
        this.ir_frequency = [];
        this.charged_list = [];
        this.opportunity_list = [];
        this.err = false;
        this.load = false;
        // id:string;
        this.LANG = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].english_translations;
        this.error = {
            loan_title: false,
            loan_title_ar: false,
            product_error: false,
            evaluation_error: false,
            loan_type_error: false,
            interest_calculation_method: false,
            accured_interest_posting_frequency: false,
            ir_charged: false,
            default: false,
            min_value: false,
            max_value: false,
            interest_rate: false,
            fundraiser_profit: false
        };
        this.btndisable = false;
    }
    AddLoanComponent.prototype.ngOnInit = function () {
        this.getProducts();
        this.getLoanType();
        this.getIRCalculationList();
        this.getIDFrequency();
        this.getIRChargedList();
    };
    AddLoanComponent.prototype.getLoanById = function () {
        var _this = this;
        this.productService.getLoadDetails(this.loan_id).subscribe(function (res) {
            if (res.status) {
                _this.show_apply_btn = true;
                _this.product_id = res.response.product_id;
                _this.opportunity_id = res.response.opportunity_id;
                _this.loan_type_id = res.response.loan_type_id;
                _this.loan_title = res.response.title;
                _this.loan_title_ar = res.response.ar_title;
                _this.status = res.response.status;
                _this.interest_calculation_method = res.response.intrest_calc_method_id;
                _this.accured_interest_posting_frequency = res.response.accrued_interest_id;
                _this.ir_charged = res.response.interest_rate_charged_id;
                _this.default = res.response.intrest_rate_constraint_default;
                _this.fundraiser_profit = res.response.fundriser_profit;
                _this.child.payment_interval_method = res.response.interval_method_id;
                _this.child.payment_period = res.response.payment_every;
                _this.child.payment_period_id = res.response.payment_every;
                _this.child.installments_default = res.response.installments_constraints_default;
                _this.child.due_date_default = res.response.first_due_date_default;
                _this.child.grace_period = res.response.grace_period_id;
                _this.child.grace_period_type = res.response.gracetype;
                _this.child.collect_principle = res.response.collect_principle;
                _this.child.investor_tax = res.response.investor_tax;
                _this.child.borrower_tax = res.response.borrower_tax;
                _this.child.fees = res.response.fees;
                _this.campaign_id = res.response.opportunity_id;
            }
        });
    };
    AddLoanComponent.prototype.getProducts = function () {
        var _this = this;
        this.productService.getProductList().subscribe(function (res) {
            if (res.status) {
                _this.products = res.response;
            }
        });
    };
    AddLoanComponent.prototype.changeProduct = function () {
        var _this = this;
        var data = { "product_id": this.product_id };
        this.opportunity_list = [];
        this.opportunity_id = "";
        this.kycService.getOpportunityList(data).subscribe(function (res) {
            if (res.status) {
                _this.opportunity_list = res.response;
            }
        });
    };
    AddLoanComponent.prototype.getLoanType = function () {
        var _this = this;
        this.productService.getLoanTypeList().subscribe(function (res) {
            if (res.status) {
                _this.loanType = res.response;
            }
        });
    };
    AddLoanComponent.prototype.getIRCalculationList = function () {
        var _this = this;
        this.productService.getIRCalculationList().subscribe(function (res) {
            if (res.status) {
                _this.calculation_list = res.response;
                _this.interest_calculation_method = res.response[0].id;
            }
        });
    };
    AddLoanComponent.prototype.getIDFrequency = function () {
        var _this = this;
        this.productService.getIRFrequencyList().subscribe(function (res) {
            if (res.status) {
                _this.ir_frequency = res.response;
                _this.accured_interest_posting_frequency = res.response[0].id;
            }
        });
    };
    AddLoanComponent.prototype.getIRChargedList = function () {
        var _this = this;
        this.productService.getIRChargedList().subscribe(function (res) {
            if (res.status) {
                _this.charged_list = res.response;
            }
        });
    };
    AddLoanComponent.prototype.errorHandler = function () {
        if (this.loan_title == undefined || this.loan_title == '') {
            this.error.loan_title = true;
            this.err = true;
        }
        if (this.loan_title_ar == undefined || this.loan_title_ar == '') {
            this.error.loan_title_ar = true;
            this.err = true;
        }
        if (this.loan_type_id == undefined || this.loan_type_id == '') {
            this.error.loan_type_error = true;
            this.err = true;
        }
        // if(this.product_id == undefined || this.product_id == ''){
        //   this.error.product_error=true;
        //   this.err=true;	
        // }
        // if(this.opportunity_id == undefined || this.opportunity_id == ''){
        //   this.error.evaluation_error=true;
        //   this.err=true;	
        // }
        if (this.interest_calculation_method == undefined || this.interest_calculation_method == '') {
            this.error.interest_calculation_method = true;
            this.err = true;
        }
        if (this.accured_interest_posting_frequency == undefined || this.accured_interest_posting_frequency == '') {
            this.error.accured_interest_posting_frequency = true;
            this.err = true;
        }
        // if(this.ir_charged == undefined || this.ir_charged == ''){
        //   this.error.ir_charged=true;
        //   this.err=true;	
        // }
        if (this.default == undefined || this.default == '') {
            this.error.default = true;
            this.err = true;
        }
        // if(this.min_value == undefined || this.min_value == ''){
        //   this.error.min_value=true;
        //   this.err=true;	
        // }
        // if(this.max_value == undefined || this.max_value == ''){
        //   this.error.max_value=true;
        //   this.err=true;	
        // }
        if (this.fundraiser_profit == undefined || this.fundraiser_profit == '') {
            this.error.fundraiser_profit = true;
            this.err = true;
        }
        // if(this.interest_rate == undefined || this.interest_rate == ''){
        //   this.error.interest_rate=true;
        //   this.err=true;	
        // }
    };
    AddLoanComponent.prototype.ngOnChanges = function (changes) {
        console.log(changes);
        if (changes.apply_loan_status && changes.apply_loan_status.currentValue == 1) {
            this.input_disabled = true;
        }
        if (changes.loan_id && changes.loan_id.currentValue) {
            this.getLoanById();
        }
    };
    AddLoanComponent.prototype.addLoan = function () {
        this.resetError();
        this.errorHandler();
        this.child.addLoan();
        if (this.err || this.child.err) {
            return;
        }
        var data = {
            "product_id": this.product_id,
            "opportunity_id": this.opportunity_id,
            "loan_type_id": this.loan_type_id,
            "title": this.loan_title,
            "ar_title": this.loan_title_ar,
            "status": this.status,
            "intrest_calc_method_id": this.interest_calculation_method,
            "accrued_interest_id": this.accured_interest_posting_frequency,
            "interest_rate_charged_id": this.ir_charged,
            "intrest_rate_constraint_default": this.default,
            "intrest_rate_constraint_min": this.min_value,
            "intrest_rate_constraint_max": this.max_value,
            "fundriser_profit": this.fundraiser_profit,
            "loan_id": 0,
            "interval_method_id": this.child.payment_interval_method,
            "payment_every": this.child.payment_period,
            "internal_type": this.child.payment_period_id,
            "inst_const_default": this.child.installments_default,
            "inst_const_min": this.child.installments_min_value,
            "inst_const_max": this.child.installments_min_value,
            "first_due_date_default": this.child.due_date_default,
            "first_due_date_min": this.child.due_date_min_value,
            "first_due_date_max": this.child.due_date_max_value,
            "grace_period": this.child.grace_period,
            "grace_period_type": this.child.grace_period_type,
            "collect_principle": this.child.collect_principle
        };
        this.load = true;
        if (this.input_disabled || this.loan_id) {
            data.id = this.loan_id;
            data.loan_id = this.loan_id;
            this.update(data);
            return;
        }
        this.add(data);
    };
    AddLoanComponent.prototype.applyLoan = function () {
        var _this = this;
        // this.apply.emit(true)
        var data = {
            "campaign_id": this.campaign_id
        };
        this.productService.applyLoan(data).subscribe(function (res) {
            if (res.status == false) {
                _this.toastr.warningToastr(res.response.message);
            }
            if (res.status == true) {
                _this.toastr.successToastr(res.response.message);
                _this.btndisable = true;
            }
        });
    };
    AddLoanComponent.prototype.add = function (data) {
        var _this = this;
        this.productService.addLoan(data).subscribe(function (res) {
            _this.load = false;
            if (res.status) {
                _this.toastr.successToastr(_this.LANG.Loan_Details_added_successfully);
                // this.location.back();
                // this.show_apply_btn=true;
                // this.onSubmit.emit(true);
                _this.loan_id = res.response.loan_id;
                _this.getLoanById();
                return;
            }
            _this.toastr.warningToastr(res.message);
        });
    };
    AddLoanComponent.prototype.update = function (data) {
        var _this = this;
        this.productService.updateLoan(data).subscribe(function (res) {
            _this.load = false;
            if (res.status) {
                _this.toastr.successToastr(_this.LANG.Loan_Details_updated_successfully);
                // this.location.back();
                // this.onSubmit.emit(true);
                _this.getLoanById();
                return;
            }
            _this.toastr.warningToastr(res.message);
        });
    };
    // IRChargedChanged(){
    //   this.ir_charged_id=this.ir_charged.split(",")[0];
    //   this.ir_charged_title=this.ir_charged.split(",")[1];
    // }
    AddLoanComponent.prototype.resetError = function () {
        this.err = false;
        this.load = false;
        this.error = {
            loan_title: false,
            loan_title_ar: false,
            loan_type_error: false,
            product_error: false,
            evaluation_error: false,
            interest_calculation_method: false,
            accured_interest_posting_frequency: false,
            ir_charged: false,
            default: false,
            min_value: false,
            max_value: false,
            interest_rate: false,
            fundraiser_profit: false
        };
    };
    AddLoanComponent.prototype.onlyNumbers = function (event) {
        var keycode = (event.which) ? event.which : event.keyCode;
        if ((keycode < 48 || keycode > 57) && keycode !== 13 || keycode == 46) {
            event.preventDefault();
            return false;
        }
        return;
    };
    AddLoanComponent.ctorParameters = function () { return [
        { type: src_app_shared_Services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"] },
        { type: src_app_shared_Services_kyc_service__WEBPACK_IMPORTED_MODULE_6__["KYCService"] },
        { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_2__["ToastrManager"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AddLoanComponent.prototype, "product_id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AddLoanComponent.prototype, "opportunity_id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AddLoanComponent.prototype, "apply_loan_status", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AddLoanComponent.prototype, "loan_id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AddLoanComponent.prototype, "loan_loading", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AddLoanComponent.prototype, "onSubmit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AddLoanComponent.prototype, "apply", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_PaymentManagement_add_payment_info_add_payment_info_component__WEBPACK_IMPORTED_MODULE_4__["AddPaymentInfoComponent"], { static: true }),
        __metadata("design:type", _PaymentManagement_add_payment_info_add_payment_info_component__WEBPACK_IMPORTED_MODULE_4__["AddPaymentInfoComponent"])
    ], AddLoanComponent.prototype, "child", void 0);
    AddLoanComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-loan',
            template: __webpack_require__(/*! raw-loader!./add-loan.component.html */ "./node_modules/raw-loader/index.js!./src/app/Pages/Dashboard/Products/LoanManagement/add-loan/add-loan.component.html"),
            styles: [__webpack_require__(/*! ./add-loan.component.css */ "./src/app/Pages/Dashboard/Products/LoanManagement/add-loan/add-loan.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_shared_Services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"], src_app_shared_Services_kyc_service__WEBPACK_IMPORTED_MODULE_6__["KYCService"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_2__["ToastrManager"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], AddLoanComponent);
    return AddLoanComponent;
}());



/***/ }),

/***/ "./src/app/Pages/Dashboard/Products/LoanManagement/add-loan/add-loan.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/Pages/Dashboard/Products/LoanManagement/add-loan/add-loan.module.ts ***!
  \*************************************************************************************/
/*! exports provided: AddLoanModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddLoanModule", function() { return AddLoanModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_shared_loader_Loader_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/loader/Loader.module */ "./src/app/shared/loader/Loader.module.ts");
/* harmony import */ var _add_loan_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-loan.component */ "./src/app/Pages/Dashboard/Products/LoanManagement/add-loan/add-loan.component.ts");
/* harmony import */ var _PaymentManagement_add_payment_info_add_payment_info_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../PaymentManagement/add-payment-info/add-payment-info.module */ "./src/app/Pages/Dashboard/Products/PaymentManagement/add-payment-info/add-payment-info.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ChildRoutes = [
    {
        path: 'add-loan',
        component: _add_loan_component__WEBPACK_IMPORTED_MODULE_5__["AddLoanComponent"]
    },
];
var AddLoanModule = /** @class */ (function () {
    function AddLoanModule() {
    }
    AddLoanModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(ChildRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                src_app_shared_loader_Loader_module__WEBPACK_IMPORTED_MODULE_4__["LoaderModule"],
                _PaymentManagement_add_payment_info_add_payment_info_module__WEBPACK_IMPORTED_MODULE_6__["AddPaymentInfoModule"]
            ],
            declarations: [
                _add_loan_component__WEBPACK_IMPORTED_MODULE_5__["AddLoanComponent"]
            ],
            exports: [_add_loan_component__WEBPACK_IMPORTED_MODULE_5__["AddLoanComponent"]]
        })
    ], AddLoanModule);
    return AddLoanModule;
}());



/***/ }),

/***/ "./src/app/Pages/Dashboard/Products/PaymentManagement/add-payment-info/add-payment-info.component.css":
/*!************************************************************************************************************!*\
  !*** ./src/app/Pages/Dashboard/Products/PaymentManagement/add-payment-info/add-payment-info.component.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".kyc-section{\r\n    box-shadow: 1px 1px 4px 1px #b1b1b18c;\r\n    padding: 10px 15px;\r\n    margin: 15px 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvRGFzaGJvYXJkL1Byb2R1Y3RzL1BheW1lbnRNYW5hZ2VtZW50L2FkZC1wYXltZW50LWluZm8vYWRkLXBheW1lbnQtaW5mby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUNBQXFDO0lBQ3JDLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvUGFnZXMvRGFzaGJvYXJkL1Byb2R1Y3RzL1BheW1lbnRNYW5hZ2VtZW50L2FkZC1wYXltZW50LWluZm8vYWRkLXBheW1lbnQtaW5mby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmt5Yy1zZWN0aW9ue1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA0cHggMXB4ICNiMWIxYjE4YztcclxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgIG1hcmdpbjogMTVweCAwO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/Pages/Dashboard/Products/PaymentManagement/add-payment-info/add-payment-info.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/Pages/Dashboard/Products/PaymentManagement/add-payment-info/add-payment-info.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: AddPaymentInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPaymentInfoComponent", function() { return AddPaymentInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_Services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/Services/product.service */ "./src/app/shared/Services/product.service.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
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





var AddPaymentInfoComponent = /** @class */ (function () {
    function AddPaymentInfoComponent(productService, toastr, location) {
        this.productService = productService;
        this.toastr = toastr;
        this.location = location;
        this.payment_interval_method = 0;
        this.payment_period = "";
        this.payment_period_id = "";
        this.grace_period = "";
        this.grace_period_type = 0;
        this.input_disabled = false;
        this.payment_intervals = [];
        this.payment_period_list = [{ id: 1, title: "Day" }, { id: 2, title: "Week" }, { id: 3, title: "Month" }, { id: 4, title: "Year" }];
        this.grace_period_list = [];
        this.err = false;
        this.load = false;
        this.error = {
            payment_interval_method: false,
            payment_period: false,
            payment_period_id: false,
            installments_default: false,
            installments_min_value: false,
            installments_max_value: false,
            collect_principle: false,
            due_date_default: false,
            due_date_min_value: false,
            due_date_max_value: false,
            grace_period: false,
            grace_period_type: false,
            investor_tax: false,
            borrower_tax: false,
            fees: false
        };
        this.LANG = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].english_translations;
    }
    AddPaymentInfoComponent.prototype.ngOnInit = function () {
        this.getGracePeriodList();
        this.getPaymentIntervals();
    };
    AddPaymentInfoComponent.prototype.getPaymentIntervals = function () {
        var _this = this;
        this.productService.getPaymentIntervalsList().subscribe(function (res) {
            if (res.status) {
                _this.payment_intervals = res.response;
            }
        });
    };
    AddPaymentInfoComponent.prototype.submit = function () {
        console.log("aa");
    };
    AddPaymentInfoComponent.prototype.getGracePeriodList = function () {
        var _this = this;
        this.productService.getGracePeriodList().subscribe(function (res) {
            if (res.status) {
                _this.grace_period_list = res.response;
            }
        });
    };
    AddPaymentInfoComponent.prototype.errorHandler = function () {
        if (this.payment_interval_method == undefined || this.payment_interval_method == null || this.payment_interval_method == 0) {
            this.error.payment_interval_method = true;
            this.err = true;
        }
        if (this.payment_interval_method != 2 && this.payment_interval_method != 0) {
            if (this.payment_period == undefined || this.payment_period == '') {
                this.error.payment_period = true;
                this.err = true;
            }
            if (this.payment_period_id == undefined || this.payment_period_id == '') {
                this.error.payment_period_id = true;
                this.err = true;
            }
        }
        if (this.investor_tax == undefined || this.investor_tax == null) {
            this.error.investor_tax = true;
            this.err = true;
        }
        if (this.borrower_tax == undefined || this.borrower_tax == null) {
            this.error.borrower_tax = true;
            this.err = true;
        }
        if (this.fees == undefined || this.fees == null) {
            this.error.fees = true;
            this.err = true;
        }
        if (this.installments_default == undefined || this.installments_default == '') {
            this.error.installments_default = true;
            this.err = true;
        }
        // if(this.installments_min_value == undefined || this.installments_min_value == ''){
        //   this.error.installments_min_value=true;
        //   this.err=true;	
        // }
        // if(this.installments_max_value == undefined || this.installments_max_value == ''){
        //   this.error.installments_max_value=true;
        //   this.err=true;	
        // }
        if (this.due_date_default == undefined || this.due_date_default == '') {
            this.error.due_date_default = true;
            this.err = true;
        }
        // if(this.due_date_min_value == undefined || this.due_date_min_value == ''){
        //   this.error.due_date_min_value=true;
        //   this.err=true;	
        // }
        // if(this.due_date_max_value == undefined || this.due_date_max_value == ''){
        //   this.error.due_date_max_value=true;
        //   this.err=true;	
        // }
        // if(this.collect_principle == undefined || this.collect_principle == ''){
        //   this.error.collect_principle=true;
        //   this.err=true;	
        // }
        if (this.grace_period_type == null || this.grace_period_type == 0) {
            this.error.grace_period_type = true;
            this.err = true;
        }
        if (this.grace_period_type && this.grace_period_type != 1) {
            if (this.grace_period == undefined || this.grace_period == '') {
                this.error.grace_period = true;
                this.err = true;
            }
        }
    };
    AddPaymentInfoComponent.prototype.addLoan = function () {
        this.resetError();
        this.errorHandler();
        if (this.err) {
            return;
        }
        // const data:any={
        //   "loan_id":0,
        //   "interval_method_id":this.payment_interval_method,
        //   "payment_every":this.payment_period,
        //   "internal_type":this.payment_period_id,
        //   "inst_const_default":this.installments_default,
        //   "inst_const_min":this.installments_min_value,
        //   "inst_const_max":this.installments_min_value,
        //   "first_due_date_default":this.due_date_default,
        //   "first_due_date_min":this.due_date_min_value,
        //   "first_due_date_max":this.due_date_max_value,
        //   "grace_period":this.grace_period,
        //   "grace_period_type":this.grace_period_type,
        //   "collect_principle":this.collect_principle
        // }
        this.load = true;
        // if(this.id){
        //     data.id=this.id;
        //     this.update(data)
        //     return
        // }
        // this.add(data)
    };
    AddPaymentInfoComponent.prototype.add = function (data) {
        var _this = this;
        this.productService.addPaymentInfo(data).subscribe(function (res) {
            _this.load = false;
            if (res.status) {
                _this.toastr.successToastr(_this.LANG.Loan_Details_added_successfully);
                _this.location.back();
                return;
            }
            _this.toastr.warningToastr(res.message);
        });
    };
    AddPaymentInfoComponent.prototype.resetError = function () {
        this.err = false;
        this.load = false;
        this.error = {
            payment_interval_method: false,
            payment_period: false,
            payment_period_id: false,
            installments_default: false,
            installments_min_value: false,
            installments_max_value: false,
            collect_principle: false,
            due_date_default: false,
            due_date_min_value: false,
            due_date_max_value: false,
            grace_period: false,
            grace_period_type: false,
            investor_tax: false,
            borrower_tax: false,
            fees: false
        };
    };
    AddPaymentInfoComponent.prototype.onlyNumbers = function (event) {
        var keycode = (event.which) ? event.which : event.keyCode;
        if ((keycode < 48 || keycode > 57) && keycode !== 13 || keycode == 46) {
            event.preventDefault();
            return false;
        }
        return;
    };
    AddPaymentInfoComponent.ctorParameters = function () { return [
        { type: src_app_shared_Services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"] },
        { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_2__["ToastrManager"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AddPaymentInfoComponent.prototype, "input_disabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AddPaymentInfoComponent.prototype, "loan_id", void 0);
    AddPaymentInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-payment-info',
            template: __webpack_require__(/*! raw-loader!./add-payment-info.component.html */ "./node_modules/raw-loader/index.js!./src/app/Pages/Dashboard/Products/PaymentManagement/add-payment-info/add-payment-info.component.html"),
            styles: [__webpack_require__(/*! ./add-payment-info.component.css */ "./src/app/Pages/Dashboard/Products/PaymentManagement/add-payment-info/add-payment-info.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_shared_Services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_2__["ToastrManager"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], AddPaymentInfoComponent);
    return AddPaymentInfoComponent;
}());



/***/ }),

/***/ "./src/app/Pages/Dashboard/Products/PaymentManagement/add-payment-info/add-payment-info.module.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/Pages/Dashboard/Products/PaymentManagement/add-payment-info/add-payment-info.module.ts ***!
  \********************************************************************************************************/
/*! exports provided: AddPaymentInfoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPaymentInfoModule", function() { return AddPaymentInfoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_shared_loader_Loader_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/loader/Loader.module */ "./src/app/shared/loader/Loader.module.ts");
/* harmony import */ var _add_payment_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-payment-info.component */ "./src/app/Pages/Dashboard/Products/PaymentManagement/add-payment-info/add-payment-info.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ChildRoutes = [
    {
        path: 'payment-info',
        component: _add_payment_info_component__WEBPACK_IMPORTED_MODULE_5__["AddPaymentInfoComponent"]
    },
];
var AddPaymentInfoModule = /** @class */ (function () {
    function AddPaymentInfoModule() {
    }
    AddPaymentInfoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(ChildRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                src_app_shared_loader_Loader_module__WEBPACK_IMPORTED_MODULE_4__["LoaderModule"]
            ],
            declarations: [
                _add_payment_info_component__WEBPACK_IMPORTED_MODULE_5__["AddPaymentInfoComponent"]
            ],
            exports: [
                _add_payment_info_component__WEBPACK_IMPORTED_MODULE_5__["AddPaymentInfoComponent"]
            ]
        })
    ], AddPaymentInfoModule);
    return AddPaymentInfoModule;
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
//# sourceMappingURL=default~CampaignEvaluation-CampaignDetails-CampaignDetails-module~Products-LoanManagement-add-loan-a~c73e1b0f.js.map