(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["CampaignEvaluation-CampaignDetails-CampaignDetails-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Pages/Dashboard/CampaignEvaluation/CampaignDetails/CampaignDetails.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Pages/Dashboard/CampaignEvaluation/CampaignDetails/CampaignDetails.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container-fluid tabs px-0 row\">\r\n    <ul class=\"nav nav-tabs col-md-2\">\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#kyc\">\r\n                <span>{{LANG.KYC}}</span>\r\n            </a>\r\n        </li>\r\n        <li class=\"nav-item\" (click)=\"showCampaign()\"> \r\n            <a class=\"nav-link \" data-toggle=\"tab\" href=\"#campaign\">\r\n                <span>{{LANG.Campaign}}</span> \r\n            </a>\r\n        </li>\r\n        <li class=\"nav-item\" *ngFor=\"let data of details?.evaluation;let i=index\" (click)=\"changeTab(data)\">\r\n            <a class=\"nav-link\" data-toggle=\"tab\" href=\"#evaluation\">\r\n                <span>{{data.title}}</span>\r\n            </a>\r\n        </li>\r\n        <!-- <li class=\"nav-item\">\r\n            <a class=\"nav-link\" data-toggle=\"tab\" href=\"#tab-2\">\r\n                <span>Risk Assessment</span>\r\n            </a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link \" data-toggle=\"tab\" href=\"#tab-3\">\r\n                <span>Financial Assessment</span>\r\n            </a>\r\n        </li> -->\r\n        <li class=\"nav-item\" (click)=\"showDashboard()\">\r\n            <a class=\"nav-link \" data-toggle=\"tab\" href=\"#tab-4\">\r\n                <span>{{LANG.Dashboard}}</span>\r\n            </a>\r\n        </li>\r\n        <li class=\"nav-item\" (click)=\"showInvestorStatements()\" *ngIf=\"details?.investor_detail?.role_type == user_data?.role_type && details?.investorCount != 0\">\r\n            <a class=\"nav-link \" data-toggle=\"tab\" href=\"#investor_statement\">\r\n                <span>{{LANG.Investment_Details}}</span>\r\n            </a>\r\n        </li>\r\n        <li class=\"nav-item\" (click)=\"showLoan()\" *ngIf=\"details?.loan?.role_type == user_data?.role_type && details?.loan?.activity != 0\">\r\n            <a class=\"nav-link \" data-toggle=\"tab\" href=\"#tab-5\"> \r\n                <span>{{LANG.Loan_Management}}</span>\r\n            </a>\r\n        </li>\r\n        \r\n        <!-- <li class=\"nav-item\" (click)=\"showInvestorStatements()\">\r\n            <a class=\"nav-link \" data-toggle=\"tab\" href=\"#investor_statement\">\r\n                <span>{{LANG.investor_statement}}</span>\r\n            </a>\r\n        </li>\r\n        <li class=\"nav-item\" (click)=\"showLoan()\">\r\n            <a class=\"nav-link \" data-toggle=\"tab\" href=\"#tab-5\"> \r\n                <span>{{LANG.Loan_Management}}</span>\r\n            </a>\r\n        </li> -->\r\n        \r\n        <!-- <li class=\"nav-item\">\r\n            <a class=\"nav-link \" data-toggle=\"tab\" href=\"#tab-5\">\r\n                <span>Business Planning Readiness</span>\r\n            </a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link \" data-toggle=\"tab\" href=\"#tab-6\">\r\n                <span>Human Capital Enablers</span>\r\n            </a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link \" data-toggle=\"tab\" href=\"#tab-7\">\r\n                <span>Structural Capital Readiness</span>\r\n            </a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link \" data-toggle=\"tab\" href=\"#tab-8\">\r\n                <span>Structural Capital Readiness</span>\r\n            </a>\r\n        </li> -->\r\n        \r\n    </ul>\r\n    <div class=\"tab-content col-md-10 ml-0\">\r\n        <div class=\"tab-pane\" id=\"evaluation\">\r\n            <div class=\"tab-background col-md-12\" *ngIf=\"evaluation_details?.rank_type == 1 && graph_data_loaded\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6 business\">\r\n                        <h2 class=\"pb-4\">{{evaluation_details.title}}</h2>\r\n                        <!-- <p>Short by Attribute :\r\n                            <span> <b></b> Readiness</span>\r\n                            <span> <b></b> Weight</span>\r\n                        </p> -->\r\n                        <div id=\"chart1\"></div>\r\n                    </div>\r\n                    <div class=\"col-md-6 business-right\">\r\n                        <div class=\"weight\" *ngFor=\"let data of evaluation_details?.category;let i=index;\">\r\n                            <h5>{{data.title}}</h5>\r\n                            <div class=\"form-group\" *ngFor=\"let items of data.detail;let j = index\">\r\n                                <label for=\"customRange3\" class=\"form-label\">{{items.title}}</label>\r\n                                <div class=\"position-relative mt-4\">\r\n                                    <span class=\"min\">{{items.minrange}}</span>\r\n                                    <input type=\"range\" class=\"form-range w-100\" name=\"range{{i}}{{j}}\" min=\"{{items.minrange}}\" max=\"{{items.maxrange}}\" step=\"1\" [value]=\"0\" [(ngModel)]=\"items.value\" (change)=\"rangeChanged(items)\" [disabled]=\"evaluation_details?.activity != 1 || evaluation_details?.role_type != user_data?.role_type\">\r\n                                    <span class=\"max\">{{items.maxrange}}</span>\r\n                                </div>\r\n                                <span class=\"error\" *ngIf=\"items.required\">{{LANG.This_field_is_required}}</span>\r\n                                <p *ngIf=\"items.value > 0\">{{LANG.Selected_value}} {{items.value}}</p>\r\n                            </div>\r\n                        </div>\r\n                        <div *ngIf=\"evaluation_details?.activity == 1 && evaluation_details?.role_type == user_data?.role_type\">\r\n                            <button  *ngIf=\"!load\" class=\"btn apply-btn w-100\" (click)=\"applyRanges()\">{{LANG.APPLY_DATA}}</button>\r\n                            <button *ngIf=\"load\" class=\"btn apply-btn w-100 loader-btn\"><loader></loader></button>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n            <div class=\"tab-background col-md-12\" *ngIf=\"evaluation_details?.rank_type == 2 && risk_graph_data_loaded\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6 business\">\r\n                        <h2>{{evaluation_details.title}}</h2>\r\n                        <div id=\"chart2\"></div>\r\n                    </div>\r\n                    <div class=\"col-md-6 business-right pr-0\">\r\n                        <div class=\"weight weight-1\" *ngFor=\"let data of evaluation_details?.category;let i=index;\">\r\n                            <h5>{{data.title}}</h5>\r\n                            <div class=\"form-group\" *ngFor=\"let items of data?.detail;let j=index;\">\r\n                                <label>{{items.title}}</label>\r\n                                <div class=\"low-btn\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-3 low-btn-wrapper\" *ngFor=\"let cat of risk_cat;\">\r\n                                            <button class=\"btn\" [class.active]=\"items.value == cat.value\" (click)=\"selectRiskCat(items,cat)\">{{cat.title}}</button>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <span class=\"error\" *ngIf=\"items.required\">{{LANG.This_field_is_required}}</span>\r\n                            </div>\r\n                            <div *ngIf=\"evaluation_details?.activity == 1 && evaluation_details?.role_type == user_data?.role_type\">\r\n                                <button  *ngIf=\"!load\" class=\"btn apply-btn w-100\" (click)=\"applyRiskData()\">{{LANG.APPLY_DATA}}</button>\r\n                                <button *ngIf=\"load\" class=\"btn apply-btn w-100 loader-btn\"><loader></loader></button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"tab-background col-md-12\" *ngIf=\"evaluation_details?.rank_type == 3\">\r\n                <div class=\"business risk-assesment text-center\">\r\n                    <h2>{{evaluation_details.title}}</h2>\r\n                    <div class=\"distress zone\">\r\n                        <div class=\"zone-wrapper\">\r\n                            <p *ngFor=\"let data of evaluation_details?.category\">{{data.title}}</p>\r\n                        </div>\r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-4 zone1\" *ngFor=\"let data of evaluation_details?.category\"></div>\r\n                                \r\n                            </div>\r\n                        </div>\r\n                        <div class=\"zone-last\">\r\n                            <!-- <div class=\"border\"></div> -->\r\n                            <input type=\"range\" name=\"fin_minmax\" class=\"w-100\" [(ngModel)]=\"fin_minmax\" min=\"{{fin_min}}\" max=\"{{fin_max}}\" step=\".1\" [disabled]=\"evaluation_details?.activity != 1 || evaluation_details?.role_type != user_data?.role_type\">\r\n                            <div class=\"zone-wrapper\">\r\n                                <span *ngFor=\"let data of min_max;\">{{data}}</span>\r\n                            </div>\r\n                            <h4 class=\"mt-3 text-left\">{{LANG.Selected_value}} {{fin_minmax}}</h4>\r\n                            <!-- <div class=\"tooltip-cont\"><span> 3.2</span></div> -->\r\n                        </div>\r\n                    </div>\r\n                    <div *ngIf=\"evaluation_details?.activity == 1 && evaluation_details?.role_type == user_data?.role_type\">\r\n                        <button *ngIf=\"!load\" class=\"btn apply-btn loader-btn\" [disabled]=\"fin_minmax <=  0\" (click)=\"applyFinancial()\">{{LANG.APPLY_DATA}}</button>\r\n                        <button *ngIf=\"load\" class=\"btn apply-btn loader-btn\"><loader></loader></button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"tab-pane\" id=\"tab-4\">\r\n            <div class=\" col-md-12 tab-graph\" *ngIf=\"show_dashboard\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"row graph-row\">\r\n                            <div class=\"col-md-6\" *ngFor=\"let data of details?.evaluation;let i=index;\">\r\n                                <div class=\"graph-wrapper\">\r\n                                    <h5>{{data.title}}</h5>\r\n                                    <!-- <canvas id=\"oilChart\" height=\"80\"></canvas> -->\r\n                                    <div id=\"dash-chart{{i}}\"></div>\r\n                                    <!-- <a href=\"#\">KNOW MORE</a> -->\r\n                                </div>\r\n                            </div>\r\n                            <!-- <div class=\"col-md-6\">\r\n                                <div class=\"graph-wrapper\">\r\n                                    <h5>Human Capital</h5>\r\n                                    <canvas id=\"oilChart1\" height=\"80\"></canvas>\r\n                                    <a href=\"#\">KNOW MORE</a>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"graph-wrapper\">\r\n                                    <h5>Structural Capital</h5>\r\n                                    <canvas id=\"oilChart2\" height=\"80\"></canvas>\r\n                                    <a href=\"#\">KNOW MORE</a>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"graph-wrapper\">\r\n                                    <h5>Relational Capital</h5>\r\n                                    <canvas id=\"oilChart3\" height=\"80\"></canvas>\r\n                                    <a href=\"#\">KNOW MORE</a>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"graph-wrapper\">\r\n                                    <h5>Risk Assessment</h5>\r\n                                    <canvas id=\"oilChart4\" height=\"80\"></canvas>\r\n                                    <a href=\"#\">KNOW MORE</a>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"graph-wrapper\">\r\n                                    <h5>Financial Assessment</h5>\r\n                                    <div class=\"safe\">3.2 <span>Safe</span></div>\r\n                                    <a href=\"#\">KNOW MORE</a>\r\n                                </div>\r\n                            </div> -->\r\n                        </div>\r\n                    </div>\r\n                    <!-- <div class=\"col-md-4\">\r\n                        <div class=\"opportunity\">\r\n                            <h2>Opportunity data overview</h2>\r\n                            <div id=\"chart2-1\"></div>\r\n                        </div>\r\n                    </div> -->\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"tab-pane statements-data\" id=\"tab-5\">\r\n            <div class=\"business tab-background col-md-12\" *ngIf=\"show_loan_statement\">\r\n                <!-- <div class=\"d-flex\">\r\n                    <button *ngIf=\"!loan_loading\" type=\"button\" class=\"btn btn-info d-none d-lg-block m-l-15\" (click)=\"addLoan()\">\r\n                        <i class=\"fa fa-plus-circle\"></i> {{LANG.Apply_Loan}}</button>\r\n                    <button *ngIf=\"loan_loading\" type=\"button\" class=\"btn btn-info d-none d-lg-block m-l-15\"><loader></loader></button>\r\n                    <button type=\"button\" class=\"btn btn-info d-none d-lg-block m-l-15\" (click)=\"addNewLoan()\"><i\r\n                        class=\"fa fa-plus-circle\"></i> {{LANG.Create_New}}</button>\r\n                </div> -->\r\n                <ul class=\"nav nav-tabs statements mt-4\" *ngIf=\"data_loaded\">\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#loan_management\">\r\n                            <span>{{LANG.Loan_Management}}</span>\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link\" data-toggle=\"tab\" href=\"#borrower\" (click)=\"loadDataTable(1)\">\r\n                            <span>{{LANG.Borrowers}}</span>\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link \" data-toggle=\"tab\" href=\"#investors\" (click)=\"loadDataTable(2)\">\r\n                            <span>{{LANG.Investors}}</span>\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link \" data-toggle=\"tab\" href=\"#organizers\">\r\n                            <span>{{LANG.Organizers}}</span>\r\n                        </a>\r\n                    </li>\r\n                    \r\n                </ul>\r\n                    <div class=\"tab-content ml-0\">\r\n                        <div class=\"tab-pane show active\" id=\"loan_management\">\r\n                            <app-add-loan [product_id]=\"details?.campaign?.product_id\" [opportunity_id]=\"details?.campaign?.id\" [apply_loan_status]=\"details?.apply_loan_status\" [loan_id]=\"details?.loan?.id\" [loan_loading]=\"loan_loading\" (onSubmit)=\"onSubmit($event)\" (apply)=\"apply($event)\"></app-add-loan>\r\n                        </div>\r\n\r\n                        \r\n                        <div class=\"tab-pane\" id=\"borrower\" *ngIf=\"loanDetails.borrower_statement.length > 0\">\r\n                            <div class=\"tab-background col-md-12 p-0\">\r\n                                <div class=\"table-responsive\">\r\n                                    <table id=\"borrowers\"\r\n                                        class=\"display nowrap table table-hover table-striped table-bordered\">\r\n                                        <thead>\r\n                                            <tr>\r\n                                                <th>Due Date</th>\r\n                                                <th>Principle Expected</th>\r\n                                                <th>Interest Expected</th>\r\n                                                <th>Fees Expected</th>\r\n                                                <th>Tax Expected</th>\r\n                                                <th>Total Expected</th>\r\n                                                <th>Principle Paid</th>\r\n                                                <th>Interest Paid</th>\r\n                                                <th>Fees Paid</th>\r\n                                                <th>Total Paid</th>\r\n                                                <th>Paid Date</th>\r\n                                                <th>Principle Due</th>\r\n                                                <th>Interest Due</th>\r\n                                                <th>Fees Due</th>\r\n                                                <th>Total Due</th>\r\n                                                <th>Status</th>\r\n                                            </tr>\r\n                                        </thead>\r\n                                        <tbody>\r\n                                            <tr *ngFor=\"let data of loanDetails.borrower_statement; let i=index;\">\r\n                                                <td>{{data.due_date | date:'mediumDate'}}</td>\r\n                                                <td>{{data.principle_expected}}</td>\r\n                                                <td>{{data.interest_expected}}</td>\r\n                                                <td>{{data.fees_expected}}</td>\r\n                                                <td>{{data.tax_expected}}</td>\r\n                                                <td>{{data.total_expected}}</td>\r\n                                                <td>{{data.principle_paid ? data.principle_paid : '-'}}</td>\r\n                                                <td>{{data.interest_paid ? data.interest_paid : '-'}}</td>\r\n                                                <td>{{data.fees_paid ? data.fees_paid : '-'}}</td>\r\n                                                <td>{{data.total_paid ? data.total_paid : '-'}}</td>\r\n                                                <td>{{data.paid_date ?  (data.paid_date | date:'mediumDate') : '-'}}</td>\r\n                                                <td>{{data.principle_due ? data.principle_due : '-'}}</td>\r\n                                                <td>{{data.interest_due ? data.interest_due : '-'}}</td>\r\n                                                <td>{{data.fees_due ? data.fees_due : '-'}}</td>\r\n                                                <td>{{data.total_due ? data.total_due : '-'}}</td>\r\n                                                <td>{{data.status == '0' ? 'Pending' : 'Paid'}}</td>\r\n                                                \r\n                                            </tr>   \r\n                                        \r\n                                        </tbody>\r\n                                    </table>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"tab-pane\" id=\"investors\" *ngIf=\"loanDetails.investor_statement.length > 0\">\r\n                            <div class=\"tab-background col-md-12 p-0\">\r\n                                <div class=\"table-responsive\">\r\n                                    <table id=\"investor\"\r\n                                        class=\"display nowrap table table-hover table-striped table-bordered\" style=\"width: 100% !important;\">\r\n                                        <thead>\r\n                                            <tr>\r\n                                                <th>{{LANG.Due_Date}}</th>\r\n                                                <th>{{LANG.Principle_Amount}}</th>\r\n                                                <th>Fees</th>\r\n                                                <th>Tax</th>\r\n                                                <th>{{LANG.Profit_Amount}}</th>\r\n                                                <th>{{LANG.Total_Amount}}</th>\r\n                                                \r\n                                            </tr>\r\n                                        </thead>\r\n                                        <tbody>\r\n                                            <tr *ngFor=\"let data of loanDetails.investor_statement; let i=index;\">\r\n                                                <td>{{data.date | date:'mediumDate'}}</td>\r\n                                                <td>{{data.principle}}</td>\r\n                                                <td>{{data.fees}}</td>\r\n                                                <td>{{data.tax}}</td>\r\n                                                <td>{{data.profit}}</td>\r\n                                                <td>{{data.total}}</td>\r\n                                                \r\n                                                \r\n                                            </tr>   \r\n                                        \r\n                                        </tbody>\r\n                                    </table>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"tab-pane\" id=\"organizers\" *ngIf=\"loanDetails.organiser_statement.length > 0\">\r\n                            <div class=\"tab-background col-md-12 p-0\">\r\n                                <div class=\"table-responsive\">\r\n                                    <table id=\"organizors\"\r\n                                        class=\"display nowrap table table-hover table-striped table-bordered\" style=\"width: 100% !important;\">\r\n                                        <thead>\r\n                                            <tr>\r\n                                                <th>{{LANG.Investors_Expected_Profit}}</th>\r\n                                                <th>{{LANG.Organizers_Expected_Profit}}</th>\r\n                                                \r\n                                            </tr>\r\n                                        </thead>\r\n                                        <tbody>\r\n                                            <tr *ngFor=\"let data of loanDetails.organiser_statement; let i=index;\">\r\n                                                <td>{{data.invester_profit_expected}}</td>\r\n                                                <td>{{data.organiser_profit_expected}}</td>                                                \r\n                                                \r\n                                            </tr>   \r\n                                        \r\n                                        </tbody>\r\n                                    </table>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                \r\n            </div>\r\n            <div class=\"business tab-background col-md-12\" *ngIf=\"show_add_loan\">\r\n                <app-add-loan [product_id]=\"details?.campaign?.product_id\" [opportunity_id]=\"details?.campaign?.id\" [apply_loan_status]=\"details?.apply_loan_status\" [loan_id]=\"details?.loan?.id\" [loan_loading]=\"loan_loading\" (onSubmit)=\"onSubmit($event)\" (apply)=\"apply($event)\"></app-add-loan>\r\n            </div>\r\n            \r\n\r\n        </div>\r\n        <!-- <div class=\"tab-pane active\" id=\"kyc\">\r\n            <div class=\"business tab-background tab-pad col-md-12\">\r\n                <ng-container *ngFor=\"let data of details?.kyc\">                \r\n                    <h2>{{data.title}}</h2>\r\n                    <div class=\"weight pb-0\">\r\n                        <ng-container *ngFor=\"let item of data.info_type;let j=index;\">\r\n                            <p>{{item.title}}</p>\r\n                            <div class=\"row\">\r\n                                <ng-container *ngFor=\"let fields of item.detail;let k=index;\">\r\n                                    <div class=\"form-group col-md-6\">\r\n                                        <label>{{fields.title}}</label>\r\n                                        <input *ngIf=\"fields.type == field_types.Email || fields.type == field_types.Mobile || fields.type == field_types.Characters || fields.type == field_types.Number\" type=\"text\" class=\"form-control\" placeholder=\"{{fields.title}}\"  name=\"field{{i}}{{j}}{{k}}\" [(ngModel)]=\"fields.value\" disabled>\r\n                                        <input *ngIf=\"fields.type == field_types.Date\" type=\"date\" class=\"form-control\" placeholder=\"{{fields.title}}\"  name=\"field{{i}}{{j}}{{k}}\" [(ngModel)]=\"fields.value\" disabled>\r\n                                        <textarea *ngIf=\"fields.type == field_types.Textarea\" class=\"form-control\" placeholder=\"Tell about your {{fields.title}}\" name=\"textarea{{i}}{{j}}{{k}}\" [(ngModel)]=\"fields.value\" disabled></textarea>\r\n                                        <div class=\"row campaign-row\" *ngIf=\"fields.type == field_types.Yes_No\">\r\n                                            <div class=\"form-check\">\r\n                                                <div class=\"radio-1\">\r\n                                                    <input type=\"radio\" class=\"radio-buttons\" id=\"yes{{i}}{{j}}{{k}}\" name=\"field{{i}}{{j}}{{k}}\" value=\"{{fields.value}}\" [checked]=\"fields.value == '1'\">\r\n                                                    <label name=\"gender\" for=\"yes{{i}}{{j}}{{k}}\">Yes</label>\r\n                                                </div>\r\n                                                <div class=\"radio-2\">\r\n                                                    <input type=\"radio\" class=\"radio-buttons\" id=\"no{{i}}{{j}}{{k}}\" name=\"field{{i}}{{j}}{{k}}\" value=\"{{fields.value}}\" [checked]=\"fields.value == '0'\">\r\n                                                    <label name=\"gender\" for=\"no{{i}}{{j}}{{k}}\">No</label>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <ng-container *ngIf=\"fields.type == field_types.Fileupload\">\r\n                                            <div class=\"add-image\">\r\n                                                <span *ngIf=\"fields.value\">\r\n                                                    <img src=\"{{fields.value}}\" class=\"\">\r\n                                                </span>\r\n                                            </div>                \r\n                                        </ng-container>\r\n                                    </div>\r\n                                </ng-container>\r\n                                \r\n                            </div>\r\n                        </ng-container>\r\n\r\n                    </div>\r\n                </ng-container>\r\n                \r\n            </div>\r\n        </div> -->\r\n        <div class=\"tab-pane active\" id=\"campaign\">\r\n            <div class=\"tab-background col-md-12\">\r\n                <div class=\"weight\">\r\n                    <div class=\"row\">\r\n                        <ng-container *ngFor=\"let data of campaign_details;let i=index\">\r\n                            <div class=\"form-group col-md-6\" *ngIf=\"data?.value\">\r\n                                <label class=\"title-case\">{{data.title}}</label>\r\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Enter {{data.title}}\" [(ngModel)]=\"data.value\" disabled>                               \r\n                            </div>\r\n                        </ng-container> \r\n                        <div class=\"col-md-12\" *ngIf=\"details?.campaign?.campaign_images?.length > 0\">\r\n                            <label class=\"title-case\">{{LANG.Campaign_Images}}</label>\r\n                            <div class=\"row\">\r\n                                <div class=\"add-image col-md-4\" *ngFor=\"let images of details?.campaign?.campaign_images;let i=index\">\r\n                                    <span *ngIf=\"images.image\">\r\n                                        <img src=\"{{images.image}}\" class=\"\">\r\n                                    </span>\r\n                                </div>  \r\n                            </div>\r\n\r\n                        </div>\r\n                        <div class=\"col-md-12\" *ngIf=\"details?.campaign?.team?.length > 0\">\r\n                            <label class=\"title-case\">{{LANG.Team}}</label>\r\n                            <ng-container *ngFor=\"let data of details.campaign.team;let i=index\">\r\n                                <div class=\"row mb-3\">\r\n                                    <div class=\"col-md-4\">\r\n                                        <label class=\"title-case\">{{data.title}}</label>\r\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"{{LANG.Enter}} {{data.title}}\" [(ngModel)]=\"data.name\" disabled>                               \r\n                                    </div>\r\n                                    <div class=\"col-md-4\">\r\n                                        <label class=\"title-case\">{{data.title}}</label>\r\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"{{LANG.Enter}} {{data.title}}\" [(ngModel)]=\"data.designation\" disabled>                               \r\n                                    </div>\r\n                                    <div class=\"col-md-4\">\r\n                                        <div class=\"add-image\">\r\n                                            <span *ngIf=\"data.image\">\r\n                                                <img src=\"{{data.image}}\" class=\"\">\r\n                                            </span>\r\n                                        </div>                               \r\n                                    </div>\r\n\r\n                                </div>\r\n                            </ng-container>\r\n\r\n                        </div>\r\n                        <div class=\"col-md-12 \">\r\n                            <div class=\"col-md-8 p-0 mb-5\" *ngIf=\"details?.campaign && details?.campaign?.approved_status == '1' && details?.campaign_product?.role_type == user_data?.role_type &&  details?.campaign_product?.activity == 1\">\r\n                                <select class=\"form-control\" name=\"product_id\" [(ngModel)]=\"product_id\" [disabled]=\"details?.campaign?.product_id\">\r\n                                    <option value=\"\" selected disabled>{{LANG.Select_Product}}</option>\r\n                                    <option *ngFor=\"let data of productList;\" value=\"{{data.id}}\">{{data.title}}</option>\r\n                                </select>\r\n\r\n                                \r\n                            </div>\r\n                            \r\n                            <div *ngIf=\"details?.campaign && details?.campaign?.approved_status == '1' && details?.campaign_product?.role_type == user_data?.role_type && productListDisplay== true &&  details?.campaign_product?.activity == 1 \">\r\n                                <input type=\"date\" class=\"form-control form-size\" placeholder=\"Enter close date\" [(ngModel)]=\"close_date\"> \r\n                                <button class=\"btn btn-primary\"  (click)=\"changeDate()\">change close date    </button>   \r\n                            </div>\r\n                            <div *ngIf=\"details?.campaign && details?.campaign?.approved_status == '1' && details?.campaign_product?.role_type == user_data?.role_type && productListDisplay==true &&  details?.campaign_product?.activity == 1 \">\r\n                                <div class=\"form-group col-md-6\" >\r\n                                    <label class=\"title-case\">Minimum investment</label>\r\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter minimum investment\" [value]=\"details?.campaign?.min_investment\" [(ngModel)]=\"min\" [disabled]=\"details?.campaign_product?.activity == 2\" >                               \r\n                                </div>\r\n\r\n                                <div class=\"form-group col-md-6\" >\r\n                                    <label class=\"title-case\">Maximum Investment</label>\r\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter maximum investment\" [value]=\"details?.campaign?.min_investment\" [(ngModel)]=\"max\" [disabled]=\"details?.campaign_product?.activity == 2\" >                               \r\n                                </div>\r\n                            \r\n                            </div>\r\n\r\n                            <div *ngIf=\"details?.campaign_pulisher?.role_type == user_data?.role_type && details?.campaign?.status != 1 && details?.campaign?.approved_status == 1 && details?.campaign?.product_id \">\r\n                                <input type=\"date\" class=\"form-control  form-size\" placeholder=\"Enter close date\" [(ngModel)]=\"close_date\"> \r\n                                <button class=\"btn btn-primary\"  (click)=\"changeDate()\">change close date    </button>   \r\n                            </div>\r\n                            <div *ngIf=\"details?.campaign_pulisher?.role_type == user_data?.role_type && details?.campaign?.status != 1 && details?.campaign?.approved_status == 1 && details?.campaign?.product_id\">\r\n                                <div class=\"form-group col-md-6\" >\r\n                                    <label class=\"title-case\">Minimum investment</label>\r\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter minimum investment\" [value]=\"details?.campaign?.min_investment\" [(ngModel)]=\"min\" [disabled]=\"details?.campaign_product?.activity == 2\" >                               \r\n                                </div>\r\n\r\n                                <div class=\"form-group col-md-6\" >\r\n                                    <label class=\"title-case\">Maximum Investment</label>\r\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter maximum investment\" [value]=\"details?.campaign?.min_investment\" [(ngModel)]=\"max\" [disabled]=\"details?.campaign_product?.activity == 2\" >                               \r\n                                </div>\r\n                            \r\n                            </div>\r\n\r\n                            <div *ngIf=\"details?.campaign?.status==1\">\r\n                                <input type=\"date\" class=\"form-control  form-size\" placeholder=\"Enter close date\" [(ngModel)]=\"close_date\"> \r\n                                <button  class=\"btn btn-primary\" (click)=\"changeDate()\">change close date    </button>   \r\n                            </div>\r\n                            <div *ngIf=\"details?.campaign?.status==1\">\r\n                                <div class=\"form-group col-md-6\" >\r\n                                    <label class=\"title-case\">Minimum investment</label>\r\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter minimum investment\" [value]=\"details?.campaign?.min_investment\" [(ngModel)]=\"min\" [disabled]=\"details?.campaign_product?.activity == 2\" >                               \r\n                                </div>\r\n\r\n                                <div class=\"form-group col-md-6\" >\r\n                                    <label class=\"title-case\">Maximum Investment</label>\r\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter maximum investment\" [value]=\"details?.campaign?.min_investment\" [(ngModel)]=\"max\" [disabled]=\"details?.campaign_product?.activity == 2\" >                               \r\n                                </div>\r\n                            \r\n                            </div>\r\n                        \r\n<!--                             \r\n                            \r\n                                <div class=\"form-group col-md-6 row\"   >\r\n                                    <label class=\"title-case\">Select closing date</label>\r\n                                    \r\n                                    <div class=\"btn-class\">\r\n                                    \r\n                                </div>                           \r\n                                </div>\r\n                            </div> -->\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-12 mb-3\" *ngIf=\"details?.campaign?.approved_status == 1 \">\r\n                                    <div class=\"skip\">\r\n                                        <span class=\"status\">{{LANG.Status}}: \r\n                                            <span class=\"text-success\" style=\"font-weight: 600;\">Approved</span>\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n                                <ng-container *ngIf=\"details?.campaign?.role_type == user_data?.role_type || details?.campaign_product?.role_type == user_data?.role_type || details?.campaign_pulisher?.role_type == user_data?.role_type\">\r\n                                    <div class=\"button-wrapper col-md-4 mt-0\" *ngIf=\"details?.campaign?.role_type == user_data?.role_type && details?.campaign?.approved_status != 1\">\r\n                                        <button *ngIf=\"!load\" class=\"btn success\" (click)=\"approveRejectKYC('1',1)\">{{LANG.Approve}}</button>\r\n                                        <button *ngIf=\"load\" class=\"btn success loader-btn\"><loader></loader></button>\r\n                                    </div>\r\n                                    <div class=\"button-wrapper col-md-4 mt-0\" *ngIf=\"details?.campaign_pulisher?.role_type == user_data?.role_type && details?.campaign?.status != 1 && details?.campaign?.approved_status == 1 && details?.campaign?.product_id\">\r\n                                        <button *ngIf=\"!load\" class=\"btn success\" (click)=\"approveRejectKYC('1',1)\">{{LANG.Publish}}</button>\r\n                                        <button *ngIf=\"load\" class=\"btn success loader-btn\"><loader></loader></button>\r\n                                    </div>\r\n                                    <div class=\"button-wrapper col-md-4 mt-0\" *ngIf=\"details?.campaign_product?.role_type == user_data?.role_type && !details?.campaign?.product_id && details?.campaign_product?.activity == 1\">\r\n                                        <button *ngIf=\"!load\" class=\"btn success\" (click)=\"approveRejectKYC('1',1)\">{{LANG.Approve}}</button>\r\n                                        <button *ngIf=\"load\" class=\"btn success loader-btn\"><loader></loader></button>\r\n                                    </div>\r\n                                    <div class=\"button-wrapper col-md-4 mt-0\" *ngIf=\"details?.campaign?.approved_status != 1\"><button class=\"btn cancel\" data-toggle=\"modal\" data-target=\"#reject\" [disabled]=\"load\" (click)=\"reject(1)\">{{LANG.Reject}}</button></div>\r\n\r\n                                </ng-container>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"tab-pane\" id=\"investor_statement\">\r\n            <div class=\"tab-background col-md-12 p-0\">\r\n                <section class=\"container-fluid sec6\">\r\n                    <div>\r\n                        \r\n                        <div class=\"col-md-12 project mx-auto\">\r\n                            <div class=\"row project-row\">\r\n                                <div class=\"col-md-3 col-6\">\r\n                                    <div class=\"count\">\r\n                                        <h4>{{investor_data.no_of_invested}}</h4>\r\n                                        <p>{{LANG.No_Of_Investors}}</p>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-3 col-6\">\r\n                                    <div class=\"count count1\">\r\n                                        <h4>{{investor_data.invested| number:'1.2'}} SAR</h4>\r\n                                        <p>{{LANG.Total_Investment}}</p>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-3 col-6\">\r\n                                    <div class=\"count count2\">\r\n                                        <h4>{{investor_data.investment_required | number:'1.2'}} SAR</h4>\r\n                                        <p>{{LANG.Required_Investment}}</p>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-3 col-6\">\r\n                                    <div class=\"count count3\">\r\n                                        <h4>{{investor_data.remaining_investment | number:'1.2'}} SAR</h4>\r\n                                        <p>{{LANG.Remaining_Investment}}</p>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        \r\n                    </div>\r\n                </section>\r\n                <div class=\"table-responsive\">\r\n                    <table\r\n                        class=\"display nowrap table table-hover table-striped table-bordered\" style=\"width: 100% !important;\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>{{LANG.date}}</th>\r\n                                <th>{{LANG.invester_name}}</th>\r\n                                <th>{{LANG.Mobile_Number}}</th>\r\n                                <th>{{LANG.Email}}</th>\r\n                                <th>{{LANG.invested_amount}}</th>\r\n                                \r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let data of investor_statement; let i=index;\">\r\n                                <td>{{data.date | date:'mediumDate'}}</td>\r\n                                <td>{{data.invester_name}}</td>\r\n                                <td>{{data.mobile_number}}</td>\r\n                                <td>{{data.email}}</td>\r\n                                <td>{{data.amount}}</td>\r\n                                \r\n                                \r\n                            </tr>   \r\n                        \r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        \r\n    </div>\r\n</section>\r\n\r\n\r\n<div class=\"modal fade\" id=\"reject\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\" id=\"reject\">{{LANG.Reject}} {{rejection_data?.title}}</h5>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <div class=\"row\">\r\n                    <div class=\"form-group col-md-12\">\r\n                        <label>{{LANG.Reason_for_rejection}}</label>\r\n                        <textarea type=\"text\" class=\"form-control\" placeholder=\"{{LANG.Reason}}\"  name=\"reason\" [(ngModel)]=\"reason\"></textarea>\r\n                    </div>                \r\n            </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-secondary loader-btn\" data-dismiss=\"modal\" [disabled]=\"load\">{{LANG.Close}}</button>\r\n          <button type=\"button\" class=\"btn btn-primary loader-btn w-50\" *ngIf=\"!load\" (click)=\"approveRejectKYC('2')\">{{LANG.Save_changes}}</button>\r\n          <button type=\"button\" *ngIf=\"load\" class=\"btn btn-primary loader-btn w-50\"><loader></loader></button>\r\n          \r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/Pages/Dashboard/CampaignEvaluation/CampaignDetails/CampaignDetails.css":
/*!****************************************************************************************!*\
  !*** ./src/app/Pages/Dashboard/CampaignEvaluation/CampaignDetails/CampaignDetails.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tabs .nav-tabs {\r\n    border-bottom: 0;\r\n    background: #310075;\r\n    padding:15px 10px;\r\n    /* justify-content: space-between; */\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    height: -webkit-max-content;\r\n    height: -moz-max-content;\r\n    height: max-content;\r\n    max-height: 100%;\r\n}\r\n.tabs i{\r\n    font: normal normal normal 27px/1 FontAwesome;\r\n    margin-right: 13px;\r\n}\r\n.tabs a{\r\n    width: 150px;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    /* align-items: center; */\r\n}\r\n.tabs .nav-link.active{\r\n    color: #310075;\r\n    font-weight: 600;\r\n    border-radius: 0;\r\n}\r\n.tabs .nav-link{\r\n    font-size: 12px;\r\n    border: 0;\r\n    color: #fff;\r\n    -webkit-transition: 0.5s all;\r\n    transition: 0.5s all;\r\n    height: 100%;\r\n    padding-left: 10px;\r\n}\r\n.tab-background{\r\n    background: #FFFFFF;\r\n    border-radius: 16px;\r\n    padding: 41px 52px 83px;\r\n    margin-bottom: 50px;\r\n}\r\n.business h2{\r\n    font-size: 28px;\r\n    font-weight: 600;\r\n    color: #160034;\r\n}\r\n.business  p{\r\n    color: #575757;\r\n    font-size: 14px;\r\n    display: -webkit-box;\r\n    display: flex;\r\n}\r\n.apexcharts-legend-text{\r\n    font-size: 16px;\r\n    color: #8D8D8D;\r\n    margin-left: 28px;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n}\r\n.business  span b{\r\n    width: 11px;\r\n    height: 11px;\r\n    border-radius: 50%;\r\n    background: #9B76D1;\r\n    margin-right: 10px;\r\n}\r\n.business  span:last-child b{\r\n    background:#E3C417;\r\n}\r\n.business{\r\n    border-right: 1px solid #ccc;\r\n    padding-right: 33px;\r\n}\r\n.business-right{\r\n    padding: 0 70px;\r\n}\r\n.weight h5{\r\n    font-size: 20px;\r\n    color: #160034;\r\n    font-weight: 600;\r\n    padding-bottom: 22px;\r\n    margin: 0;\r\n}\r\n.weight label{\r\n    font-size: 16px;\r\n    color: #000000;\r\n    font-weight: 500;\r\n}\r\n.weight .form-control{\r\n    height: 48px !important;\r\n    border: 1px solid #E0E0E0;\r\n    border-radius: 4px;\r\n    padding: 0 34px;\r\n}\r\n.weight textarea.form-control{\r\n    height:130px !important;\r\n    padding-top: 20px;\r\n    padding-bottom:20px;\r\n}\r\n.weight .form-group {\r\n    margin-bottom: 30px;\r\n}\r\n.weight{\r\n    padding-bottom: 30px;\r\n}\r\n.apply-btn{\r\n    background: #00C48A;\r\n    height: 56px;\r\n    font-size: 14px;\r\n    color: #fff;\r\n    font-weight: 600;\r\n}\r\n.weight:last-child{\r\n    padding-bottom: 0;\r\n}\r\n.low-btn button{\r\n    width: 100%;\r\n    border: 1px solid #E0E0E0;\r\n    border-radius: 4px;\r\n    background: transparent;\r\n    font-size: 14px;\r\n    color: #B5B5B5;\r\n}\r\n.low-btn button.active{\r\n    color: #fff;\r\n    border: 0;\r\n}\r\n.low-btn-wrapper:first-child button.active{\r\n    background: #00C48A;\r\n}\r\n.low-btn-wrapper:nth-child(2) button.active{\r\n    background: #F5A334;\r\n}\r\n.low-btn-wrapper:nth-child(3) button.active{\r\n    background: #FF3939;\r\n}\r\n.low-btn-wrapper:nth-child(4) button.active{\r\n    background: #D10808;\r\n}\r\n.weight-1 .apply-btn{\r\n    margin-top: 40px;\r\n}\r\n.risk-assesment{\r\n    border: 0;\r\n    padding: 0;\r\n}\r\n.business h6{\r\n    color: #000;\r\n    padding-top: 14px;\r\n    padding-bottom: 62px;\r\n    font-size: 24px;\r\n}\r\n.risk-assesment  .apply-btn{\r\n    width: 210px;\r\n}\r\n.distress.zone {\r\n    width: 620px;\r\n    margin: auto;\r\n}\r\n.zone-wrapper {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n            justify-content: space-between;\r\n}\r\n.zone-wrapper p {\r\n    font-size: 14px !important;\r\n    color: #000000 !important;\r\n    margin-bottom: 12px;\r\n    font-weight: 500;\r\n}\r\n.zone1{\r\n    height: 50px;\r\n    background: #F5F7F8;\r\n}\r\n.zone1:first-child{\r\n    background: #E9E4F0;\r\n    border-radius: 15px 0 0 15px\r\n}\r\n.zone1:last-child{\r\n    background: #DBF8EE;\r\n    border-radius: 0 15px 15px 0;\r\n}\r\n.border{\r\n    width: 100%;\r\n    height: 1px;\r\n    background: #E2E2E2;\r\n    margin-bottom: 10px;\r\n}\r\n.zone-last{\r\n    margin-top: 40px;\r\n    margin-bottom: 70px;\r\n    position: relative;\r\n}\r\n.zone-wrapper span{\r\n    margin-left: 0;\r\n    font-size: 14px;\r\n    color: #A2A2A2;\r\n}\r\n.tooltip-cont span{\r\n    position: absolute;\r\n    top: -45px;\r\n    right: 111px;\r\n    background: #310075;\r\n    padding: 3px 17px;\r\n    color: #fff;\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n    border-radius: 19px;\r\n    margin: 0;\r\n}\r\n.tooltip-cont{\r\n    position: relative;\r\n}\r\n.tooltip-cont span:before {\r\n    content: '';\r\n    position: absolute;\r\n    top: -5px;\r\n    left: 50%;\r\n    width: 0;\r\n    height: 0;\r\n    border-left: 5px solid transparent;\r\n    border-right: 5px solid transparent;\r\n    border-bottom: 5px solid #310075;\r\n    -webkit-transform: translateX(-50%);\r\n            transform: translateX(-50%);\r\n}\r\n.tab-pad{\r\n    padding:41px 100px 83px 65px;\r\n}\r\n.tab-pad h2{\r\n    padding-bottom: 33px;\r\n}\r\n.tab-pad .form-control{\r\n    width: 90%;\r\n}\r\n.tab-pad .apply-btn{\r\n    margin-top: 20px;\r\n    width: 90%\r\n}\r\n.graph-wrapper{\r\n    background: #fff;\r\n    border-radius: 16px;\r\n    padding: 21px;\r\n    text-align: center;\r\n}\r\n.graph-wrapper h5{\r\n    color: #160034;\r\n    font-weight: 700;\r\n    padding-bottom: 20px;\r\n}\r\n.graph-wrapper a{\r\n    margin: 21px auto 0;\r\n    color: #00C48A;\r\n    font-size: 14px;\r\n    font-weight: 600;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n}\r\n.tab-graph{\r\n    margin-top: 17px;\r\n    margin-bottom: 58px;\r\n}\r\n.graph-row{\r\n    grid-row-gap: 20px;\r\n}\r\n.safe{\r\n   \r\n    background-color: #02BE89;\r\n    width: 90px;\r\n    height: 90px;\r\n    border-radius: 50%;\r\n    margin: auto;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    font-size: 24px;\r\n    color: #fff;\r\n    line-height: 1;\r\n    font-weight: 600;\r\n    box-shadow: 0px 0px 22px 11px #ddf7ef;\r\n}\r\n.safe span{\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n}\r\n.opportunity{\r\n    background: #fff;\r\n    border-radius: 16px;\r\n    padding: 65px 35px;\r\n}\r\n.opportunity h2{\r\n    font-size: 24px;\r\n    color: #000;\r\n    padding-bottom: 20px;\r\n    font-weight: 600;\r\n}\r\n.tabs{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    margin-top: 17px;\r\n}\r\n.tabs .tab-content{\r\n    width: 100%;\r\n    margin-left: 20px;\r\n}\r\n.tabs .nav-tabs .nav-item {\r\n    margin-bottom: 15px;\r\n}\r\n.checkbox-wrapper input{\r\n    -webkit-transform: scale(2);\r\n            transform: scale(2);\r\n}\r\n.checkbox-wrapper{\r\n    margin-left: 15px;\r\n}\r\ninput[type=\"radio\"]:checked,\r\ninput[type=\"radio\"]:not(:checked) {\r\n    position: absolute;\r\n    left: -9999px;\r\n}\r\ninput[type=\"radio\"]:checked + label,\r\ninput[type=\"radio\"]:not(:checked) + label {\r\n    position: relative;\r\n    padding-left: 43px;\r\n    cursor: pointer;\r\n    line-height: 20px;\r\n    display: inline-block;\r\n    color: #160034;\r\n    font-size: 14px;\r\n    font-family: 'maison-med';\r\n    padding-top: 6px;\r\n    margin-right: 50px;position: relative;\r\n    padding-left: 43px;\r\n    cursor: pointer;\r\n    line-height: 20px;\r\n    display: inline-block;\r\n    color: #160034;\r\n    font-size: 14px;\r\n    font-family: 'maison-med';\r\n    padding-top: 6px;\r\n    margin-right: 50px;\r\n}\r\ninput[type=\"radio\"]:checked + label:before,\r\ninput[type=\"radio\"]:not(:checked) + label:before {\r\n    content: '';\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    width: 28px;\r\n    height: 28px;\r\n    border: 1px solid #BABABA;\r\n    border-radius: 100%;\r\n    background: white;\r\n}\r\ninput[type=\"radio\"]:checked + label:after,\r\ninput[type=\"radio\"]:not(:checked) + label:after {\r\n    content: '';\r\n       width: 10px;\r\n    height: 10px;\r\n    background: #00C48A;\r\n    position: absolute;\r\n    top: 9px;\r\n    left: 9px;\r\n    border-radius: 100%;\r\n    -webkit-transition: all 0.2s ease;\r\n    transition: all 0.2s ease;\r\n }\r\ninput[type=\"radio\"]:not(:checked) + label:after {\r\n    opacity: 0;\r\n    -webkit-transform: scale(0);\r\n    transform: scale(0);\r\n }\r\ninput[type=\"radio\"]:checked + label:after {\r\n     opacity: 1;\r\n     -webkit-transform: scale(1);\r\n     transform: scale(1);\r\n }\r\ninput[type=\"radio\"]:checked + label:before{\r\n  border-color: #00CC88;\r\n }\r\n.form-check{\r\n  display: -webkit-box;\r\n  display: flex;\r\n }\r\n.button-wrapper button {\r\n    width: 100%;\r\n    height: 48px;\r\n    color: #fff;\r\n    font-weight: 600;\r\n}\r\n.button-wrapper button.success{\r\n    background-color: #00C48A;\r\n}\r\n.button-wrapper button.primary{\r\n    background-color: #310075;\r\n}\r\n.button-wrapper button.cancel{\r\n    background-color: #D10808;\r\n}\r\n.button-wrapper {\r\n    margin-top: 25px;\r\n}\r\n.add-image span{\r\n    width: 200px;\r\n    display: inline-block;\r\n}\r\n.add-image span img{\r\n    width: 100%;\r\n}\r\nbutton:disabled{\r\n    cursor: not-allowed;\r\n}\r\n.title-case{\r\n    text-transform: capitalize;\r\n}\r\n.min,.max{\r\n    position: absolute;\r\n    top: -20px;\r\n}\r\n::ng-deep .apexcharts-canvas{\r\n    width: 100% !important;\r\n}\r\n.statements{\r\n    -webkit-box-orient: horizontal !important;\r\n    -webkit-box-direction: normal !important;\r\n            flex-direction: row !important;\r\n}\r\n.statements li{\r\n    margin-bottom: 0 !important;\r\n}\r\n.statements-data .tab-background{\r\n    padding: 20px;\r\n}\r\n.sec6{\r\n    background: #fff;\r\n   padding: 20px 0;\r\n}\r\n.sec6-first p{\r\npadding: 31px 0px 70px;\r\n  font-size: 18px;\r\n  text-align: center;\r\n  color: #0D0D0D;\r\n  width: 60%;\r\n font-family: 'maison-light';\r\n  margin: auto;\r\n}\r\n.sec6-1 h6{\r\n    font-size: 16px;\r\n font-family: 'maison-med';\r\n  color: #0D0D0D;\r\n  padding-bottom: 12px;\r\n}\r\n.sec6-1 {\r\n       padding: 0 74px 0 59px;\r\n}\r\n.sec6-dtl{\r\ndisplay: -webkit-box;\r\ndisplay: flex;\r\n-webkit-box-align: start;\r\n        align-items: flex-start;\r\n}\r\n.sec6-row{\r\ngrid-row-gap:76px;\r\n}\r\n.sec6-second{\r\npadding-top: 136px;\r\n}\r\n.sec6-second p{\r\n  padding: 16px 0px 49px;\r\n}\r\n.count{\r\n    border-radius: 16px;\r\n  background: #DBF8EE;\r\n  padding: 53px 0;\r\n  text-align: center;\r\n}\r\n.count h4,.form-sec h2,.sub-head{\r\nfont-size: 36px;\r\n  color: #160034;\r\n  font-family: 'maison-med';\r\n}\r\n.count p{\r\n    font-size: 20px;\r\n  color: #160034;\r\n}\r\n.count1{\r\nbackground: #E2E2E2;\r\n}\r\n.count2{\r\nbackground: #E9E4F0;\r\n}\r\n.count3{\r\n    background: #f8e4db;\r\n}\r\n.btn-class{\r\n    padding: 0px 0px 0px 627px;\r\n    margin: -45px;\r\n}\r\n.btn-primary{\r\n    background-color: #414f64;\r\n    margin-top: -64px;\r\n    margin-left: 41%;\r\n}\r\n.form-size{\r\n    width: 40%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvRGFzaGJvYXJkL0NhbXBhaWduRXZhbHVhdGlvbi9DYW1wYWlnbkRldGFpbHMvQ2FtcGFpZ25EZXRhaWxzLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLG9DQUFvQztJQUNwQyw0QkFBc0I7SUFBdEIsNkJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0QiwyQkFBbUI7SUFBbkIsd0JBQW1CO0lBQW5CLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLDZDQUE2QztJQUM3QyxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFlBQVk7SUFDWixvQkFBYTtJQUFiLGFBQWE7SUFDYix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsU0FBUztJQUNULFdBQVc7SUFDWCw0QkFBb0I7SUFBcEIsb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLG9CQUFhO0lBQWIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsb0JBQWE7SUFBYixhQUFhO0lBQ2IseUJBQW1CO1lBQW5CLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSw0QkFBNEI7SUFDNUIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsU0FBUztBQUNiO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGVBQWU7SUFDZixXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsY0FBYztBQUNsQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFNBQVM7QUFDYjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7QUFDQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYix5QkFBOEI7WUFBOUIsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQjtBQUNKO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxTQUFTO0lBQ1QsUUFBUTtJQUNSLFNBQVM7SUFDVCxrQ0FBa0M7SUFDbEMsbUNBQW1DO0lBQ25DLGdDQUFnQztJQUNoQyxtQ0FBMkI7WUFBM0IsMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEI7QUFDSjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHdCQUF1QjtZQUF2Qix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBOztJQUVJLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osb0JBQWE7SUFBYixhQUFhO0lBQ2Isd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2Qix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLDRCQUFzQjtJQUF0Qiw2QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixXQUFXO0lBQ1gsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixxQ0FBcUM7QUFDekM7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLG9CQUFvQjtJQUNwQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSwyQkFBbUI7WUFBbkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTs7SUFFSSxrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjtBQUNBOztJQUVJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsY0FBYztJQUNkLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGtCQUFrQixDQUFDLGtCQUFrQjtJQUNyQyxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsY0FBYztJQUNkLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUNBOztJQUVJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLE1BQU07SUFDTixXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCO0FBQ0E7O0lBRUksV0FBVztPQUNSLFdBQVc7SUFDZCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULG1CQUFtQjtJQUNuQixpQ0FBaUM7SUFDakMseUJBQXlCO0NBQzVCO0FBQ0E7SUFDRyxVQUFVO0lBQ1YsMkJBQTJCO0lBQzNCLG1CQUFtQjtDQUN0QjtBQUNBO0tBQ0ksVUFBVTtLQUNWLDJCQUEyQjtLQUMzQixtQkFBbUI7Q0FDdkI7QUFDQTtFQUNDLHFCQUFxQjtDQUN0QjtBQUNBO0VBQ0Msb0JBQWE7RUFBYixhQUFhO0NBQ2Q7QUFDQTtJQUNHLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBR0E7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCO0FBRUE7SUFDSSxXQUFXO0FBQ2Y7QUFHQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtBQUNkO0FBR0E7SUFDSSxzQkFBc0I7QUFDMUI7QUFHQTtJQUNJLHlDQUE4QjtJQUE5Qix3Q0FBOEI7WUFBOUIsOEJBQThCO0FBQ2xDO0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7QUFFQTtJQUNJLGFBQWE7QUFDakI7QUFJQTtJQUNJLGdCQUFnQjtHQUNqQixlQUFlO0FBQ2xCO0FBQ0E7QUFDQSxzQkFBc0I7RUFDcEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsVUFBVTtDQUNYLDJCQUEyQjtFQUMxQixZQUFZO0FBQ2Q7QUFDQTtJQUNJLGVBQWU7Q0FDbEIseUJBQXlCO0VBQ3hCLGNBQWM7RUFDZCxvQkFBb0I7QUFDdEI7QUFDQTtPQUNPLHNCQUFzQjtBQUM3QjtBQUNBO0FBQ0Esb0JBQWE7QUFBYixhQUFhO0FBQ2Isd0JBQXVCO1FBQXZCLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUVBO0lBQ0ksbUJBQW1CO0VBQ3JCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCO0FBQ0E7QUFDQSxlQUFlO0VBQ2IsY0FBYztFQUNkLHlCQUF5QjtBQUMzQjtBQUNBO0lBQ0ksZUFBZTtFQUNqQixjQUFjO0FBQ2hCO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsYUFBYTtBQUNqQjtBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL0Rhc2hib2FyZC9DYW1wYWlnbkV2YWx1YXRpb24vQ2FtcGFpZ25EZXRhaWxzL0NhbXBhaWduRGV0YWlscy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFicyAubmF2LXRhYnMge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQ6ICMzMTAwNzU7XHJcbiAgICBwYWRkaW5nOjE1cHggMTBweDtcclxuICAgIC8qIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgKi9cclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xyXG4gICAgbWF4LWhlaWdodDogMTAwJTtcclxufVxyXG4udGFicyBpe1xyXG4gICAgZm9udDogbm9ybWFsIG5vcm1hbCBub3JtYWwgMjdweC8xIEZvbnRBd2Vzb21lO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxM3B4O1xyXG59XHJcbi50YWJzIGF7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cclxufVxyXG4udGFicyAubmF2LWxpbmsuYWN0aXZle1xyXG4gICAgY29sb3I6ICMzMTAwNzU7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxufVxyXG4udGFicyAubmF2LWxpbmt7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRyYW5zaXRpb246IDAuNXMgYWxsO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcbi50YWItYmFja2dyb3VuZHtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgcGFkZGluZzogNDFweCA1MnB4IDgzcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcbi5idXNpbmVzcyBoMntcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzE2MDAzNDtcclxufVxyXG4uYnVzaW5lc3MgIHB7XHJcbiAgICBjb2xvcjogIzU3NTc1NztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLmFwZXhjaGFydHMtbGVnZW5kLXRleHR7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzhEOEQ4RDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyOHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmJ1c2luZXNzICBzcGFuIGJ7XHJcbiAgICB3aWR0aDogMTFweDtcclxuICAgIGhlaWdodDogMTFweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQ6ICM5Qjc2RDE7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuLmJ1c2luZXNzICBzcGFuOmxhc3QtY2hpbGQgYntcclxuICAgIGJhY2tncm91bmQ6I0UzQzQxNztcclxufVxyXG4uYnVzaW5lc3N7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgcGFkZGluZy1yaWdodDogMzNweDtcclxufVxyXG4uYnVzaW5lc3MtcmlnaHR7XHJcbiAgICBwYWRkaW5nOiAwIDcwcHg7XHJcbn1cclxuLndlaWdodCBoNXtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAjMTYwMDM0O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMnB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbi53ZWlnaHQgbGFiZWx7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLndlaWdodCAuZm9ybS1jb250cm9se1xyXG4gICAgaGVpZ2h0OiA0OHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRTBFMEUwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgcGFkZGluZzogMCAzNHB4O1xyXG59XHJcbi53ZWlnaHQgdGV4dGFyZWEuZm9ybS1jb250cm9se1xyXG4gICAgaGVpZ2h0OjEzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOjIwcHg7XHJcbn1cclxuLndlaWdodCAuZm9ybS1ncm91cCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcbi53ZWlnaHR7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxufVxyXG4uYXBwbHktYnRue1xyXG4gICAgYmFja2dyb3VuZDogIzAwQzQ4QTtcclxuICAgIGhlaWdodDogNTZweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4ud2VpZ2h0Omxhc3QtY2hpbGR7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxufVxyXG4ubG93LWJ0biBidXR0b257XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNFMEUwRTA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjQjVCNUI1O1xyXG59XHJcbi5sb3ctYnRuIGJ1dHRvbi5hY3RpdmV7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogMDtcclxufVxyXG4ubG93LWJ0bi13cmFwcGVyOmZpcnN0LWNoaWxkIGJ1dHRvbi5hY3RpdmV7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDBDNDhBO1xyXG59XHJcbi5sb3ctYnRuLXdyYXBwZXI6bnRoLWNoaWxkKDIpIGJ1dHRvbi5hY3RpdmV7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjVBMzM0O1xyXG59XHJcbi5sb3ctYnRuLXdyYXBwZXI6bnRoLWNoaWxkKDMpIGJ1dHRvbi5hY3RpdmV7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkYzOTM5O1xyXG59XHJcbi5sb3ctYnRuLXdyYXBwZXI6bnRoLWNoaWxkKDQpIGJ1dHRvbi5hY3RpdmV7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRDEwODA4O1xyXG59XHJcbi53ZWlnaHQtMSAuYXBwbHktYnRue1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxufVxyXG4ucmlzay1hc3Nlc21lbnR7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcbi5idXNpbmVzcyBoNntcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgcGFkZGluZy10b3A6IDE0cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNjJweDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG4ucmlzay1hc3Nlc21lbnQgIC5hcHBseS1idG57XHJcbiAgICB3aWR0aDogMjEwcHg7XHJcbn1cclxuLmRpc3RyZXNzLnpvbmUge1xyXG4gICAgd2lkdGg6IDYyMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbi56b25lLXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4uem9uZS13cmFwcGVyIHAge1xyXG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLnpvbmUxe1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogI0Y1RjdGODtcclxufVxyXG4uem9uZTE6Zmlyc3QtY2hpbGR7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRTlFNEYwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweCAwIDAgMTVweFxyXG59XHJcbi56b25lMTpsYXN0LWNoaWxke1xyXG4gICAgYmFja2dyb3VuZDogI0RCRjhFRTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgMTVweCAxNXB4IDA7XHJcbn1cclxuLmJvcmRlcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRTJFMkUyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4uem9uZS1sYXN0e1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDcwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLnpvbmUtd3JhcHBlciBzcGFue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogI0EyQTJBMjtcclxufVxyXG4udG9vbHRpcC1jb250IHNwYW57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC00NXB4O1xyXG4gICAgcmlnaHQ6IDExMXB4O1xyXG4gICAgYmFja2dyb3VuZDogIzMxMDA3NTtcclxuICAgIHBhZGRpbmc6IDNweCAxN3B4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTlweDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG4udG9vbHRpcC1jb250e1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi50b29sdGlwLWNvbnQgc3BhbjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC01cHg7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjMzEwMDc1O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG59XHJcbi50YWItcGFke1xyXG4gICAgcGFkZGluZzo0MXB4IDEwMHB4IDgzcHggNjVweDtcclxufVxyXG4udGFiLXBhZCBoMntcclxuICAgIHBhZGRpbmctYm90dG9tOiAzM3B4O1xyXG59XHJcbi50YWItcGFkIC5mb3JtLWNvbnRyb2x7XHJcbiAgICB3aWR0aDogOTAlO1xyXG59XHJcbi50YWItcGFkIC5hcHBseS1idG57XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgd2lkdGg6IDkwJVxyXG59XHJcbi5ncmFwaC13cmFwcGVye1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICBwYWRkaW5nOiAyMXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5ncmFwaC13cmFwcGVyIGg1e1xyXG4gICAgY29sb3I6ICMxNjAwMzQ7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuLmdyYXBoLXdyYXBwZXIgYXtcclxuICAgIG1hcmdpbjogMjFweCBhdXRvIDA7XHJcbiAgICBjb2xvcjogIzAwQzQ4QTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4udGFiLWdyYXBoe1xyXG4gICAgbWFyZ2luLXRvcDogMTdweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDU4cHg7XHJcbn1cclxuLmdyYXBoLXJvd3tcclxuICAgIGdyaWQtcm93LWdhcDogMjBweDtcclxufVxyXG4uc2FmZXtcclxuICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDJCRTg5O1xyXG4gICAgd2lkdGg6IDkwcHg7XHJcbiAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAyMnB4IDExcHggI2RkZjdlZjtcclxufVxyXG4uc2FmZSBzcGFue1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG4ub3Bwb3J0dW5pdHl7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgIHBhZGRpbmc6IDY1cHggMzVweDtcclxufVxyXG4ub3Bwb3J0dW5pdHkgaDJ7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4udGFic3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tdG9wOiAxN3B4O1xyXG59XHJcbi50YWJzIC50YWItY29udGVudHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuLnRhYnMgLm5hdi10YWJzIC5uYXYtaXRlbSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcbi5jaGVja2JveC13cmFwcGVyIGlucHV0e1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgyKTtcclxufVxyXG4uY2hlY2tib3gtd3JhcHBlcntcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG59XHJcbmlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkLFxyXG5pbnB1dFt0eXBlPVwicmFkaW9cIl06bm90KDpjaGVja2VkKSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAtOTk5OXB4O1xyXG59XHJcbmlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkICsgbGFiZWwsXHJcbmlucHV0W3R5cGU9XCJyYWRpb1wiXTpub3QoOmNoZWNrZWQpICsgbGFiZWwge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0M3B4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBjb2xvcjogIzE2MDAzNDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnbWFpc29uLW1lZCc7XHJcbiAgICBwYWRkaW5nLXRvcDogNnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O3Bvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctbGVmdDogNDNweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY29sb3I6ICMxNjAwMzQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LWZhbWlseTogJ21haXNvbi1tZWQnO1xyXG4gICAgcGFkZGluZy10b3A6IDZweDtcclxuICAgIG1hcmdpbi1yaWdodDogNTBweDtcclxufVxyXG5pbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCArIGxhYmVsOmJlZm9yZSxcclxuaW5wdXRbdHlwZT1cInJhZGlvXCJdOm5vdCg6Y2hlY2tlZCkgKyBsYWJlbDpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDI4cHg7XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQkFCQUJBO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcbmlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkICsgbGFiZWw6YWZ0ZXIsXHJcbmlucHV0W3R5cGU9XCJyYWRpb1wiXTpub3QoOmNoZWNrZWQpICsgbGFiZWw6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICAgICB3aWR0aDogMTBweDtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICMwMEM0OEE7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDlweDtcclxuICAgIGxlZnQ6IDlweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gfVxyXG4gaW5wdXRbdHlwZT1cInJhZGlvXCJdOm5vdCg6Y2hlY2tlZCkgKyBsYWJlbDphZnRlciB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuIH1cclxuIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkICsgbGFiZWw6YWZ0ZXIge1xyXG4gICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiB9XHJcbiBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCArIGxhYmVsOmJlZm9yZXtcclxuICBib3JkZXItY29sb3I6ICMwMENDODg7XHJcbiB9XHJcbiAuZm9ybS1jaGVja3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gfVxyXG4gLmJ1dHRvbi13cmFwcGVyIGJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4uYnV0dG9uLXdyYXBwZXIgYnV0dG9uLnN1Y2Nlc3N7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBDNDhBO1xyXG59XHJcbi5idXR0b24td3JhcHBlciBidXR0b24ucHJpbWFyeXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMTAwNzU7XHJcbn1cclxuLmJ1dHRvbi13cmFwcGVyIGJ1dHRvbi5jYW5jZWx7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDEwODA4O1xyXG59XHJcbi5idXR0b24td3JhcHBlciB7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG59XHJcblxyXG5cclxuLmFkZC1pbWFnZSBzcGFue1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uYWRkLWltYWdlIHNwYW4gaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG5idXR0b246ZGlzYWJsZWR7XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG59XHJcblxyXG4udGl0bGUtY2FzZXtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcblxyXG4ubWluLC5tYXh7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC0yMHB4O1xyXG59XHJcblxyXG5cclxuOjpuZy1kZWVwIC5hcGV4Y2hhcnRzLWNhbnZhc3tcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn0gICBcclxuXHJcblxyXG4uc3RhdGVtZW50c3tcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnN0YXRlbWVudHMgbGl7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zdGF0ZW1lbnRzLWRhdGEgLnRhYi1iYWNrZ3JvdW5ke1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuXHJcblxyXG4uc2VjNntcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgIHBhZGRpbmc6IDIwcHggMDtcclxufVxyXG4uc2VjNi1maXJzdCBwe1xyXG5wYWRkaW5nOiAzMXB4IDBweCA3MHB4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICMwRDBEMEQ7XHJcbiAgd2lkdGg6IDYwJTtcclxuIGZvbnQtZmFtaWx5OiAnbWFpc29uLWxpZ2h0JztcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuLnNlYzYtMSBoNntcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuIGZvbnQtZmFtaWx5OiAnbWFpc29uLW1lZCc7XHJcbiAgY29sb3I6ICMwRDBEMEQ7XHJcbiAgcGFkZGluZy1ib3R0b206IDEycHg7XHJcbn1cclxuLnNlYzYtMSB7XHJcbiAgICAgICBwYWRkaW5nOiAwIDc0cHggMCA1OXB4O1xyXG59XHJcbi5zZWM2LWR0bHtcclxuZGlzcGxheTogZmxleDtcclxuYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbn1cclxuLnNlYzYtcm93e1xyXG5ncmlkLXJvdy1nYXA6NzZweDtcclxufVxyXG4uc2VjNi1zZWNvbmR7XHJcbnBhZGRpbmctdG9wOiAxMzZweDtcclxufVxyXG4uc2VjNi1zZWNvbmQgcHtcclxuICBwYWRkaW5nOiAxNnB4IDBweCA0OXB4O1xyXG59XHJcblxyXG4uY291bnR7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gIGJhY2tncm91bmQ6ICNEQkY4RUU7XHJcbiAgcGFkZGluZzogNTNweCAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY291bnQgaDQsLmZvcm0tc2VjIGgyLC5zdWItaGVhZHtcclxuZm9udC1zaXplOiAzNnB4O1xyXG4gIGNvbG9yOiAjMTYwMDM0O1xyXG4gIGZvbnQtZmFtaWx5OiAnbWFpc29uLW1lZCc7XHJcbn1cclxuLmNvdW50IHB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6ICMxNjAwMzQ7XHJcbn1cclxuLmNvdW50MXtcclxuYmFja2dyb3VuZDogI0UyRTJFMjtcclxufVxyXG4uY291bnQye1xyXG5iYWNrZ3JvdW5kOiAjRTlFNEYwO1xyXG59XHJcblxyXG4uY291bnQze1xyXG4gICAgYmFja2dyb3VuZDogI2Y4ZTRkYjtcclxufVxyXG5cclxuLmJ0bi1jbGFzc3tcclxuICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDYyN3B4O1xyXG4gICAgbWFyZ2luOiAtNDVweDtcclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQxNGY2NDtcclxuICAgIG1hcmdpbi10b3A6IC02NHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQxJTtcclxufVxyXG5cclxuLmZvcm0tc2l6ZXtcclxuICAgIHdpZHRoOiA0MCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/Pages/Dashboard/CampaignEvaluation/CampaignDetails/CampaignDetails.module.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/Pages/Dashboard/CampaignEvaluation/CampaignDetails/CampaignDetails.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: CampaignDetailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignDetailsModule", function() { return CampaignDetailsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _CampaignDetails__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CampaignDetails */ "./src/app/Pages/Dashboard/CampaignEvaluation/CampaignDetails/CampaignDetails.ts");
/* harmony import */ var src_app_shared_loader_Loader_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/loader/Loader.module */ "./src/app/shared/loader/Loader.module.ts");
/* harmony import */ var _Products_LoanManagement_add_loan_add_loan_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Products/LoanManagement/add-loan/add-loan.module */ "./src/app/Pages/Dashboard/Products/LoanManagement/add-loan/add-loan.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { LoaderModule } from 'src/app/shared/loader/Loader.module';



var ChildRoutes = [
    {
        path: 'campaign-details',
        component: _CampaignDetails__WEBPACK_IMPORTED_MODULE_4__["CampaignDetails"]
    },
];
var CampaignDetailsModule = /** @class */ (function () {
    function CampaignDetailsModule() {
    }
    CampaignDetailsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(ChildRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                src_app_shared_loader_Loader_module__WEBPACK_IMPORTED_MODULE_5__["LoaderModule"],
                _Products_LoanManagement_add_loan_add_loan_module__WEBPACK_IMPORTED_MODULE_6__["AddLoanModule"]
            ],
            declarations: [
                _CampaignDetails__WEBPACK_IMPORTED_MODULE_4__["CampaignDetails"],
            ]
        })
    ], CampaignDetailsModule);
    return CampaignDetailsModule;
}());



/***/ }),

/***/ "./src/app/Pages/Dashboard/CampaignEvaluation/CampaignDetails/CampaignDetails.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/Pages/Dashboard/CampaignEvaluation/CampaignDetails/CampaignDetails.ts ***!
  \***************************************************************************************/
/*! exports provided: CampaignDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignDetails", function() { return CampaignDetails; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_Services_kyc_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/Services/kyc.service */ "./src/app/shared/Services/kyc.service.ts");
/* harmony import */ var src_app_Shared_enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Shared/enums */ "./src/app/Shared/enums.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_app_shared_Services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/Services/product.service */ "./src/app/shared/Services/product.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CampaignDetails = /** @class */ (function () {
    function CampaignDetails(kyc_service, router, route, toast, productService) {
        var _this = this;
        this.kyc_service = kyc_service;
        this.router = router;
        this.route = route;
        this.toast = toast;
        this.productService = productService;
        this.details = {};
        this.campaign_details = [];
        this.field_types = src_app_Shared_enums__WEBPACK_IMPORTED_MODULE_3__["FieldType"];
        this.load = false;
        this.err = false;
        this.rejection_data = {};
        this.evaluation_details = {};
        this.options = {};
        this.risk_cat = [{ title: "Low", value: 1 }, { title: "Medium", value: 2 }, { title: "High", value: 3 }, { title: "Extreme", value: 4 }];
        this.post_data = [];
        this.min_max = [];
        this.fin_minmax = 0;
        this.show_dashboard = false;
        this.productList = [];
        this.product_id = "";
        this.loanDetails = {
            borrower_statement: [],
            investor_statement: [],
            organiser_statement: []
        };
        this.data_loaded = false;
        this.loan_loading = false;
        this.graph_data_loaded = false;
        this.risk_graph_data_loaded = false;
        this.LANG = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].english_translations;
        this.show_add_loan = false;
        this.show_loan_statement = false;
        this.investor_statement = [];
        this.investor_data = {};
        this.user_data = {};
        this.productListDisplay = false;
        this.inputdisabled = false;
        var user_data = btoa(btoa("user_info"));
        if (localStorage.getItem(user_data) != undefined) {
            this.user_data = JSON.parse(atob(atob(localStorage.getItem(user_data) || '{}')));
        }
        console.log(this.user_data);
        this.route.queryParams
            .subscribe(function (params) {
            if (params['id']) {
                _this.id = atob(atob(params['id']));
                _this.getCampaignDetails();
            }
        });
    }
    CampaignDetails.prototype.ngOnInit = function () {
        this.getProductList();
        this.showCampaign();
    };
    CampaignDetails.prototype.showCampaign = function () {
        if (this.details.campaign.product_id) {
            this.product_id = this.details.campaign.product_id;
        }
    };
    CampaignDetails.prototype.getCampaignDetails = function () {
        var _this = this;
        this.kyc_service.getCampaignDetails(this.id, this.user_data.role_type).subscribe(function (res) {
            _this.details = res.response;
            _this.max = _this.details.campaign.max_investment;
            _this.min = _this.details.campaign.min_investment;
            _this.close_date = _this.details.campaign.close_date;
            if (_this.details.campaign) {
                _this.campaign_details = Object.entries(_this.details.campaign).map(function (entry) {
                    var obj = { title: entry[0].split("_").join(" "), value: entry[1] };
                    if (entry[0] == "team" || entry[0] == "campaign_images" || entry[0] == "user_id" || entry[0] == "id" || entry[0] == "product_id" || entry[0] == "role_type" || entry[0] == "status" || entry[0] == "master_id" || entry[0] == "approved_status" || entry[0] == "activity") {
                        obj = {};
                    }
                    return obj;
                });
            }
        });
    };
    CampaignDetails.prototype.add = function (index) {
        var a = [4, 3, 2, 1];
        return a[index];
    };
    CampaignDetails.prototype.getInvestorStatement = function () {
        var _this = this;
        var data = { "campaign_id": this.id };
        this.productService.getInvestorList(data).subscribe(function (res) {
            if (res.status) {
                _this.investor_statement = res.response.campaign_investers;
                _this.investor_data = res.response.campaign_data;
            }
        });
    };
    CampaignDetails.prototype.approveRejectKYC = function (status, type) {
        var _this = this;
        if (type && this.details.campaign.approved_status == "1" && this.details.campaign_product.role_type == this.user_data.role_type && !this.product_id && this.details.campaign_product.activity == 1) {
            this.toast.warningToastr(this.LANG.Please_select_a_product);
            return;
        }
        var message = "KYC Approved";
        if (status == "2") {
            if (this.reason == "" || this.reason == undefined) {
                this.toast.warningToastr(this.LANG.Please_give_reason_for_rejection);
                return;
            }
            message = "KYC Rejected";
        }
        this.load = true;
        var data = {
            "user_id": this.details.campaign ? this.details.campaign.user_id : "",
            "approved_status": status,
            "note": this.reason,
            // "close_date":this.close_date,
            "min": this.min,
            "max": this.max
        };
        if (type || this.rejection_data.id) {
            data.product_id = this.product_id;
            data.campaign_id = this.id;
            data.type = 1;
            data.campaign_approve_type = this.details.campaign.approved_status == "1" && this.details.campaign.product_id ? "3" : this.details.campaign.approved_status == "1" && !this.details.campaign.product_id ? "2" : "1";
            message = "Campaign Approved";
            if (status == "2") {
                message = "Campaign Rejected";
            }
        }
        this.kyc_service.approveRejectKYC(data).subscribe(function (res) {
            _this.load = false;
            if (res.status) {
                _this.toast.successToastr(message);
                $("#reject").modal("hide");
                _this.reason = "";
                _this.getCampaignDetails();
                // this.inputdisabled = true
            }
        });
    };
    CampaignDetails.prototype.reject = function (type) {
        this.reason = "";
        if (type == 1) {
            this.rejection_data = { id: 1, title: "Campaign" };
            return;
        }
        this.rejection_data = { title: "KYC" };
    };
    CampaignDetails.prototype.changeTab = function (data) {
        var _this = this;
        this.evaluation_details = data;
        this.graph_data_loaded = false;
        this.risk_graph_data_loaded = false;
        setTimeout(function () {
            if (_this.evaluation_details.rank_type == 1) {
                setTimeout(function () {
                    _this.loadRadarGraph();
                }, 100);
                _this.graph_data_loaded = true;
                return;
            }
            if (_this.evaluation_details.rank_type == 2) {
                setTimeout(function () {
                    _this.loadRiskChart();
                }, 100);
                _this.risk_graph_data_loaded = true;
                return;
            }
            _this.min_max = [];
            _this.evaluation_details.category.map(function (data, index) {
                _this.fin_minmax = parseFloat(data.value);
                if (index != _this.evaluation_details.category.length - 1) {
                    _this.min_max.push(data.minrange);
                    return;
                }
                _this.min_max.push(data.minrange, data.maxrange);
                _this.fin_max = data.maxrange;
            });
            _this.fin_min = _this.min_max[0];
        }, 100);
    };
    CampaignDetails.prototype.loadRadarGraph = function (id, rank_type) {
        var _this = this;
        var _a = rank_type == 3 ? this.loadRankType() : this.setData(), series = _a.series, categories = _a.categories;
        var options11 = {
            series: series,
            chart: {
                height: 350,
                width: 300,
                type: 'radar',
                dropShadow: {
                    enabled: true,
                    blur: 1,
                    left: 1,
                    top: 1
                }
            },
            stroke: {
                width: 2,
                colors: ['#9283A8', '#D3BD14'],
            },
            fill: {
                opacity: 0.1,
                colors: ['#E8DE9669', '#D4C6E66F']
            },
            markers: {
                size: 0
            },
            xaxis: {
                categories: categories
            },
            dataLabels: {
                enabled: true,
                background: {
                    enabled: true,
                    borderRadius: 2,
                }
            },
            yaxis: {
                show: false,
                labels: {
                    formatter: function (val, index) {
                        var a = _this.add(index);
                        return a;
                    }
                }
            }
        };
        if (id) {
            setTimeout(function () {
                var radar_chart = new ApexCharts(document.querySelector(id), options11);
                radar_chart.render();
            }, 500);
            return;
        }
        this.radar_chart = new ApexCharts(document.querySelector("#chart1"), options11);
        this.radar_chart.render();
    };
    CampaignDetails.prototype.loadRiskChart = function () {
        var _this = this;
        var _a = this.setData(), series = _a.series, categories = _a.categories;
        var options = {
            series: series,
            chart: {
                height: 350,
                type: 'radar',
                width: 300,
            },
            stroke: {
                width: 2,
                color: '#00C48A',
            },
            fill: {
                opacity: 0.1,
                color: '#00C48A39',
            },
            xaxis: {
                categories: categories
            },
            yaxis: {
                labels: {
                    formatter: function (val, index) {
                        var a = _this.add(index);
                        return a;
                    }
                }
            }
        };
        this.chart = new ApexCharts(document.querySelector("#chart2"), options);
        this.chart.render();
    };
    CampaignDetails.prototype.setData = function () {
        var series = [];
        var categories = [];
        this.evaluation_details.category.map(function (data, index) {
            var values = [];
            data.detail.map(function (item) {
                if (!item.value) {
                    item.value = 0;
                }
                var data_value = item.value ? item.value : 0;
                values.push(data_value);
                categories.push(item.title);
            });
            series.push({
                name: data.title,
                data: values,
                color: index == 0 ? '#9283A8' : '#D3BD14',
            });
        });
        return { series: series, categories: categories };
    };
    CampaignDetails.prototype.applyRanges = function () {
        var series = this.setData().series;
        this.applyChanges(series, 1);
    };
    CampaignDetails.prototype.applyRiskData = function () {
        var series = this.setData().series;
        this.applyChanges(series, 2);
    };
    CampaignDetails.prototype.selectRiskCat = function (data, cat) {
        if (this.evaluation_details.activity != 1 || this.evaluation_details.role_type != this.user_data.role_type) {
            return;
        }
        data.value = cat.value;
        data.required = false;
    };
    CampaignDetails.prototype.applyChanges = function (series, type) {
        var _this = this;
        this.errorHandler();
        if (this.err)
            return;
        this.load = true;
        var data = {
            "field": this.post_data,
            "id": this.user_data.id
        };
        this.kyc_service.updateCampaignDetails(data).subscribe(function (res) {
            _this.load = false;
            if (res.status) {
                _this.toast.successToastr(_this.evaluation_details.title + _this.LANG.updated_successfully);
                if (type == 1) {
                    _this.getCampaignDetails();
                    _this.radar_chart.updateSeries(series);
                    return;
                }
                if (type == 2) {
                    _this.getCampaignDetails();
                    _this.chart.updateSeries(series);
                    return;
                }
                return;
            }
            _this.toast.warningToastr(res.response.message);
        }, function (err) {
            _this.load = false;
            _this.toast.errorToastr(_this.LANG.Something_went_wrong_Please_try_again_later);
        });
    };
    CampaignDetails.prototype.errorHandler = function () {
        var _this = this;
        this.err = false;
        this.post_data = [];
        this.evaluation_details.category.map(function (data) {
            data.detail.map(function (item) {
                if (item.value == undefined || item.value == "" || !item.value) {
                    item.required = true;
                    _this.err = true;
                }
                else {
                    item.required = false;
                }
                if (!_this.err) {
                    var item_data = { "campaign_id": _this.details.campaign.id, "evaluation_id": _this.evaluation_details.id, "evaluation_detail_id": item.id, "value": item.value, "evaluation_cat_id": item.evo_cat_id };
                    _this.post_data.push(item_data);
                }
            });
        });
    };
    CampaignDetails.prototype.applyFinancial = function () {
        var _this = this;
        var post_data = [];
        this.evaluation_details.category.map(function (item) {
            var item_data = { "campaign_id": _this.details.campaign.id, "evaluation_id": _this.evaluation_details.id, "evaluation_detail_id": "0", "value": _this.fin_minmax, "evaluation_cat_id": item.id };
            post_data.push(item_data);
        });
        this.load = true;
        var data = {
            "field": post_data,
            "id": this.user_data.id
        };
        this.kyc_service.updateCampaignDetails(data).subscribe(function (res) {
            _this.load = false;
            if (res.status) {
                _this.toast.successToastr(_this.evaluation_details.title + _this.LANG.updated_successfully);
                return;
            }
            _this.toast.warningToastr(res.response.message);
        }, function (err) {
            _this.load = false;
            _this.toast.errorToastr(_this.LANG.Something_went_wrong_Please_try_again_later);
        });
    };
    CampaignDetails.prototype.rangeChanged = function (items) {
        items.required = false;
    };
    CampaignDetails.prototype.showDashboard = function () {
        var _this = this;
        this.show_dashboard = true;
        console.log(this.details);
        this.details.evaluation.map(function (data, index) {
            _this.evaluation_details = data;
            var id = "#dash-chart" + index;
            if (data.rank_type != 3) {
                _this.loadRadarGraph(id);
                return;
            }
            _this.loadRadarGraph(id, data.rank_type);
        });
    };
    CampaignDetails.prototype.loadDataTable = function (type) {
        $('#borrowers').DataTable().destroy();
        $('#investor').DataTable().destroy();
        if (type == 1) {
            setTimeout(function () {
                $('#borrowers').DataTable({
                    ordering: false,
                    responsive: true,
                });
            }, 100);
            return;
        }
        setTimeout(function () {
            $('#investor').DataTable({
                ordering: false,
                responsive: true,
            });
        }, 100);
    };
    CampaignDetails.prototype.showLoan = function () {
        if (this.details.apply_loan_status == 1) {
            this.show_loan_statement = true;
            this.show_add_loan = false;
            this.addLoan(1);
            return;
        }
        this.show_loan_statement = false;
        this.show_add_loan = true;
        // if(this.details.add_loan == 1){
        //   this.addLoan(1);
        // }
    };
    CampaignDetails.prototype.showInvestorStatements = function () {
        this.getInvestorStatement();
    };
    CampaignDetails.prototype.onSubmit = function (status) {
        if (status) {
            this.show_add_loan = false;
            this.show_loan_statement = true;
            window.scrollTo(0, 0);
            setTimeout(function () {
                $('#borrowers').DataTable({
                    ordering: false,
                    responsive: true,
                });
                $('#investor').DataTable({
                    ordering: false,
                    responsive: true,
                });
                // $('.buttons-copy, .buttons-csv, .buttons-print, .buttons-pdf, .buttons-excel').addClass('btn btn-primary mr-1');
            }, 100);
        }
    };
    CampaignDetails.prototype.apply = function (status) {
        if (status) {
            this.addLoan();
        }
    };
    CampaignDetails.prototype.addLoan = function (type) {
        var _this = this;
        if (this.details.add_loan == 1 && !type) {
            return;
        }
        var data = {
            "campaign_id": this.id
        };
        this.loan_loading = true;
        this.productService.applyLoan(data).subscribe(function (res) {
            _this.show_loan_statement = true;
            if (res.status) {
                _this.getStatement();
                return;
            }
            _this.loan_loading = false;
            _this.getStatement();
            if (!type) {
                _this.toast.warningToastr(res.response.message);
            }
        });
    };
    CampaignDetails.prototype.addNewLoan = function () {
        // this.router.navigate(["/dashboard/add-loan"])
        this.show_loan_statement = false;
        this.show_add_loan = true;
    };
    CampaignDetails.prototype.getStatement = function () {
        var _this = this;
        var data = {
            "campaign_id": this.id
        };
        this.productService.getStatement(data).subscribe(function (res) {
            _this.loan_loading = false;
            if (res.status) {
                _this.loanDetails = res.response;
                _this.data_loaded = true;
                $('#borrowers').DataTable().destroy();
                $('#investor').DataTable().destroy();
                setTimeout(function () {
                    $('#borrowers').DataTable({
                        ordering: false,
                        responsive: true,
                    });
                    $('#investor').DataTable({
                        ordering: false,
                        responsive: true,
                    });
                    // $('.buttons-copy, .buttons-csv, .buttons-print, .buttons-pdf, .buttons-excel').addClass('btn btn-primary mr-1');
                }, 100);
            }
        });
    };
    CampaignDetails.prototype.loadRankType = function () {
        var series = [];
        var categories = [];
        var values = [];
        this.evaluation_details.category.map(function (item) {
            if (!item.value) {
                item.value = 0;
            }
            var data_value = item.value ? item.value : 0;
            values.push(data_value);
            categories.push(item.title);
        });
        series.push({
            name: this.evaluation_details.title,
            data: values,
            color: '#9283A8',
        });
        return { series: series, categories: categories };
    };
    CampaignDetails.prototype.getProductList = function () {
        var _this = this;
        this.productService.getProductList().subscribe(function (res) {
            if (res.status) {
                _this.productList = res.response;
                _this.productListDisplay = true;
            }
        });
    };
    CampaignDetails.prototype.changeDate = function () {
        var _this = this;
        var data = {
            'id': this.details.campaign.id,
            'close_date': this.close_date
        };
        this.productService.changeDate(data).subscribe(function (res) {
            _this.toast.successToastr("Succesfully Changed");
            _this.getCampaignDetails();
        });
    };
    CampaignDetails.ctorParameters = function () { return [
        { type: src_app_shared_Services_kyc_service__WEBPACK_IMPORTED_MODULE_2__["KYCService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__["ToastrManager"] },
        { type: src_app_shared_Services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"] }
    ]; };
    CampaignDetails = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! raw-loader!./CampaignDetails.html */ "./node_modules/raw-loader/index.js!./src/app/Pages/Dashboard/CampaignEvaluation/CampaignDetails/CampaignDetails.html"),
            styles: [__webpack_require__(/*! ./CampaignDetails.css */ "./src/app/Pages/Dashboard/CampaignEvaluation/CampaignDetails/CampaignDetails.css")]
        }),
        __metadata("design:paramtypes", [src_app_shared_Services_kyc_service__WEBPACK_IMPORTED_MODULE_2__["KYCService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__["ToastrManager"], src_app_shared_Services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"]])
    ], CampaignDetails);
    return CampaignDetails;
}());



/***/ })

}]);
//# sourceMappingURL=CampaignEvaluation-CampaignDetails-CampaignDetails-module.js.map