(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["KYC-InvestorBorrowerKYCDetails-investor-borrower-kycdetails-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Pages/Dashboard/KYC/InvestorBorrowerKYCDetails/investor-borrower-kycdetails.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Pages/Dashboard/KYC/InvestorBorrowerKYCDetails/investor-borrower-kycdetails.component.html ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"business tab-background tab-pad col-md-12 mt-3\">\r\n    <!-- <ng-container *ngFor=\"let result of details\"> -->\r\n\r\n        <h2>{{LANG.Registration_Details}}</h2>\r\n        <div class=\"weight pb-0\">\r\n                <div class=\"row\">\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label>{{LANG.Name}}</label>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"details.name\" disabled>\r\n                    </div>\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label>{{LANG.Mobile_Number}}</label>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"details.display_mobile_number\" disabled>\r\n                    </div>\r\n                     <div class=\"form-group col-md-6\">\r\n                        <label>Registrattion Type</label>\r\n                        <input type=\"text\" *ngIf=\"details.type==1\" class=\"form-control\"  disabled value=\"Individual\">\r\n                        <input type=\"text\" *ngIf=\"details.type==2\" class=\"form-control\"  disabled value=\"Coorporate\">\r\n\r\n                    </div>\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label>{{LANG.Email}}</label>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"details.email\" disabled>\r\n                    </div>\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label>{{LANG.Account_Number}}</label>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"details.account_number\" disabled>\r\n                    </div>\r\n                </div>\r\n        </div>\r\n\r\n\r\n        <ng-container *ngFor=\"let data of details?.detail\">                \r\n            <h2>{{data.title}}</h2>\r\n            <div class=\"weight pb-0\">\r\n                <ng-container *ngFor=\"let item of data.info_type;let j=index;\">\r\n                    <p *ngIf=\"item.detail?.length != ''\">{{item.title}}</p>\r\n                    <div class=\"row\">\r\n                        <ng-container *ngFor=\"let fields of item.detail;let k=index;\">\r\n                            <div class=\"form-group col-md-6\">\r\n                                <label>{{fields.title}}</label>\r\n                                <input *ngIf=\"fields.type == field_types.Email || fields.type == field_types.Mobile || fields.type == field_types.Characters || fields.type == field_types.Number\" type=\"text\" class=\"form-control\" placeholder=\"{{fields.title}}\"  name=\"field{{i}}{{j}}{{k}}\" [(ngModel)]=\"fields.value\" disabled>\r\n                                <input *ngIf=\"fields.type == field_types.Date\" type=\"date\" class=\"form-control\" placeholder=\"{{fields.title}}\"  name=\"field{{i}}{{j}}{{k}}\" [(ngModel)]=\"fields.value\" disabled>\r\n                                <textarea *ngIf=\"fields.type == field_types.Textarea\" class=\"form-control\" placeholder=\"{{LANG.Tell_about_your}} {{fields.title}}\" name=\"textarea{{i}}{{j}}{{k}}\" [(ngModel)]=\"fields.value\" disabled></textarea>\r\n                                <div class=\"row campaign-row\" *ngIf=\"fields.type == field_types.Yes_No\">\r\n                                    <div class=\"form-check\">\r\n                                        <div class=\"radio-1\">\r\n                                            <input type=\"radio\" class=\"radio-buttons\" id=\"yes{{i}}{{j}}{{k}}\" name=\"field{{i}}{{j}}{{k}}\" value=\"{{fields.value}}\" [checked]=\"fields.value == '1'\">\r\n                                            <label name=\"gender\" for=\"yes{{i}}{{j}}{{k}}\">{{LANG.Yes}}</label>\r\n                                        </div>\r\n                                        <div class=\"radio-2\">\r\n                                            <input type=\"radio\" class=\"radio-buttons\" id=\"no{{i}}{{j}}{{k}}\" name=\"field{{i}}{{j}}{{k}}\" value=\"{{fields.value}}\" [checked]=\"fields.value == '0'\">\r\n                                            <label name=\"gender\" for=\"no{{i}}{{j}}{{k}}\">{{LANG.No}}</label>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <ng-container *ngIf=\"fields.type == field_types.Fileupload\">\r\n                                    <div class=\"add-image\">\r\n                                        <span *ngIf=\"fields.value && pdfUrl$ ==false\">\r\n                                            <!-- <iframe [src]=\"pdfUrl$\" type=\"application/pdf\" width=\"100%\" height=\"600\"></iframe> -->\r\n                                          <a href=\"{{fields.value}}\">  <img src=\"{{fields.value}}\" alt=\"\"></a>\r\n                                            <!-- <button class=\"btn\" (click)=\"downloadPdf()\">View</button> -->\r\n                                        </span>\r\n                                        <span *ngIf=\"fields.value && pdfUrl$==true\">\r\n                                            <!-- <iframe [src]=\"pdfUrl$\" type=\"application/pdf\" width=\"100%\" height=\"600\"></iframe> -->\r\n                                          <a href=\"{{fields.value}}\">  <img src=\"../../../../../assets/images/pdfimg.png\" alt=\"\"></a>\r\n                                            <!-- <button class=\"btn\" (click)=\"downloadPdf()\">View</button> -->\r\n                                        </span>\r\n                                        \r\n                                    </div>                \r\n                                </ng-container>\r\n                            </div>\r\n                        </ng-container>\r\n                        \r\n                    </div>\r\n                </ng-container>\r\n\r\n            </div>\r\n        </ng-container>\r\n    <!-- </ng-container> -->\r\n    <div class=\"col-md-12 \" *ngIf=\"details.detail?.length > 0\">\r\n        <div class=\"row\">\r\n            <div class=\"button-wrapper col-md-4 mt-0\">\r\n                <button *ngIf=\"!load\" class=\"btn success\" (click)=\"approveRejectKYC('1')\">{{LANG.Approve}}</button>\r\n                <button *ngIf=\"load\" class=\"btn success loader-btn\"><loader></loader></button>\r\n            </div>\r\n            <div class=\"button-wrapper col-md-4 mt-0\"><button class=\"btn cancel\" data-toggle=\"modal\" data-target=\"#reject\" [disabled]=\"load\">{{LANG.Reject}}</button></div>\r\n            <div class=\"button-wrapper col-md-4 mt-0\">\r\n                <button *ngIf=\"!pending_load\" class=\"btn pending\" (click)=\"approveRejectKYC('0')\">{{LANG.Pending}}</button>\r\n                <button *ngIf=\"pending_load\" class=\"btn pending loader-btn\"><loader></loader></button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"reject\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\" id=\"reject\">{{LANG.Reject_KYC}}</h5>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <div class=\"row\">\r\n                    <div class=\"form-group col-md-12\">\r\n                        <label>{{LANG.Reason_for_rejection}}</label>\r\n                        <textarea type=\"text\" class=\"form-control\" placeholder=\"{{LANG.Reason}}\"  name=\"reason\" [(ngModel)]=\"reason\"></textarea>\r\n                    </div>                \r\n            </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-secondary loader-btn\" data-dismiss=\"modal\" [disabled]=\"load\">{{LANG.Close}}</button>\r\n          <button type=\"button\" class=\"btn btn-primary loader-btn w-50\" *ngIf=\"!load\" (click)=\"approveRejectKYC('2')\">{{LANG.Save_changes}}</button>\r\n          <button type=\"button\" *ngIf=\"load\" class=\"btn btn-primary loader-btn w-50\"><loader></loader></button>\r\n          \r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/Pages/Dashboard/KYC/InvestorBorrowerKYCDetails/investor-borrower-kycdetails.component.css":
/*!***********************************************************************************************************!*\
  !*** ./src/app/Pages/Dashboard/KYC/InvestorBorrowerKYCDetails/investor-borrower-kycdetails.component.css ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.checkbox-wrapper input{\r\n    -webkit-transform: scale(2);\r\n            transform: scale(2);\r\n}\r\n.checkbox-wrapper{\r\n    margin-left: 15px;\r\n}\r\ninput[type=\"radio\"]:checked,\r\ninput[type=\"radio\"]:not(:checked) {\r\n    position: absolute;\r\n    left: -9999px;\r\n}\r\ninput[type=\"radio\"]:checked + label,\r\ninput[type=\"radio\"]:not(:checked) + label {\r\n    position: relative;\r\n    padding-left: 43px;\r\n    cursor: pointer;\r\n    line-height: 20px;\r\n    display: inline-block;\r\n    color: #160034;\r\n    font-size: 14px;\r\n    font-family: 'maison-med';\r\n    padding-top: 6px;\r\n    margin-right: 50px;position: relative;\r\n    padding-left: 43px;\r\n    cursor: pointer;\r\n    line-height: 20px;\r\n    display: inline-block;\r\n    color: #160034;\r\n    font-size: 14px;\r\n    font-family: 'maison-med';\r\n    padding-top: 6px;\r\n    margin-right: 50px;\r\n}\r\ninput[type=\"radio\"]:checked + label:before,\r\ninput[type=\"radio\"]:not(:checked) + label:before {\r\n    content: '';\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    width: 28px;\r\n    height: 28px;\r\n    border: 1px solid #BABABA;\r\n    border-radius: 100%;\r\n    background: white;\r\n}\r\ninput[type=\"radio\"]:checked + label:after,\r\ninput[type=\"radio\"]:not(:checked) + label:after {\r\n    content: '';\r\n       width: 10px;\r\n    height: 10px;\r\n    background: #00C48A;\r\n    position: absolute;\r\n    top: 9px;\r\n    left: 9px;\r\n    border-radius: 100%;\r\n    -webkit-transition: all 0.2s ease;\r\n    transition: all 0.2s ease;\r\n }\r\ninput[type=\"radio\"]:not(:checked) + label:after {\r\n    opacity: 0;\r\n    -webkit-transform: scale(0);\r\n    transform: scale(0);\r\n }\r\ninput[type=\"radio\"]:checked + label:after {\r\n     opacity: 1;\r\n     -webkit-transform: scale(1);\r\n     transform: scale(1);\r\n }\r\ninput[type=\"radio\"]:checked + label:before{\r\n  border-color: #00CC88;\r\n }\r\n.form-check {\r\n    display: -webkit-box;\r\n    display: flex;\r\n}\r\n.button-wrapper button {\r\n    width: 100%;\r\n    height: 48px;\r\n    color: #fff;\r\n    font-weight: 600;\r\n}\r\n.button-wrapper button.success{\r\n    background-color: #00C48A;\r\n}\r\n.button-wrapper button.cancel{\r\n    background-color: #D10808;\r\n}\r\n.button-wrapper button.pending{\r\n    background-color: #f3ad33;\r\n}\r\n.button-wrapper {\r\n    margin-top: 25px;\r\n}\r\nbutton:disabled{\r\n    cursor: not-allowed;\r\n}\r\n.add-image img{\r\n    width: 200px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvRGFzaGJvYXJkL0tZQy9JbnZlc3RvckJvcnJvd2VyS1lDRGV0YWlscy9pbnZlc3Rvci1ib3Jyb3dlci1reWNkZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksMkJBQW1CO1lBQW5CLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7O0lBRUksa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7QUFDQTs7SUFFSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixrQkFBa0IsQ0FBQyxrQkFBa0I7SUFDckMsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFDQTs7SUFFSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxNQUFNO0lBQ04sV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjtBQUNBOztJQUVJLFdBQVc7T0FDUixXQUFXO0lBQ2QsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsaUNBQWlDO0lBQ2pDLHlCQUF5QjtDQUM1QjtBQUNBO0lBQ0csVUFBVTtJQUNWLDJCQUEyQjtJQUMzQixtQkFBbUI7Q0FDdEI7QUFDQTtLQUNJLFVBQVU7S0FDViwyQkFBMkI7S0FDM0IsbUJBQW1CO0NBQ3ZCO0FBQ0E7RUFDQyxxQkFBcUI7Q0FDdEI7QUFFRDtJQUNJLG9CQUFhO0lBQWIsYUFBYTtBQUNqQjtBQUdBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL0Rhc2hib2FyZC9LWUMvSW52ZXN0b3JCb3Jyb3dlcktZQ0RldGFpbHMvaW52ZXN0b3ItYm9ycm93ZXIta3ljZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5jaGVja2JveC13cmFwcGVyIGlucHV0e1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgyKTtcclxufVxyXG4uY2hlY2tib3gtd3JhcHBlcntcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG59XHJcbmlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkLFxyXG5pbnB1dFt0eXBlPVwicmFkaW9cIl06bm90KDpjaGVja2VkKSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAtOTk5OXB4O1xyXG59XHJcbmlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkICsgbGFiZWwsXHJcbmlucHV0W3R5cGU9XCJyYWRpb1wiXTpub3QoOmNoZWNrZWQpICsgbGFiZWwge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0M3B4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBjb2xvcjogIzE2MDAzNDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnbWFpc29uLW1lZCc7XHJcbiAgICBwYWRkaW5nLXRvcDogNnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O3Bvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctbGVmdDogNDNweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY29sb3I6ICMxNjAwMzQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LWZhbWlseTogJ21haXNvbi1tZWQnO1xyXG4gICAgcGFkZGluZy10b3A6IDZweDtcclxuICAgIG1hcmdpbi1yaWdodDogNTBweDtcclxufVxyXG5pbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCArIGxhYmVsOmJlZm9yZSxcclxuaW5wdXRbdHlwZT1cInJhZGlvXCJdOm5vdCg6Y2hlY2tlZCkgKyBsYWJlbDpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDI4cHg7XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQkFCQUJBO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcbmlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkICsgbGFiZWw6YWZ0ZXIsXHJcbmlucHV0W3R5cGU9XCJyYWRpb1wiXTpub3QoOmNoZWNrZWQpICsgbGFiZWw6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICAgICB3aWR0aDogMTBweDtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICMwMEM0OEE7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDlweDtcclxuICAgIGxlZnQ6IDlweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gfVxyXG4gaW5wdXRbdHlwZT1cInJhZGlvXCJdOm5vdCg6Y2hlY2tlZCkgKyBsYWJlbDphZnRlciB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuIH1cclxuIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkICsgbGFiZWw6YWZ0ZXIge1xyXG4gICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiB9XHJcbiBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCArIGxhYmVsOmJlZm9yZXtcclxuICBib3JkZXItY29sb3I6ICMwMENDODg7XHJcbiB9XHJcblxyXG4uZm9ybS1jaGVjayB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG5cclxuLmJ1dHRvbi13cmFwcGVyIGJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4uYnV0dG9uLXdyYXBwZXIgYnV0dG9uLnN1Y2Nlc3N7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBDNDhBO1xyXG59XHJcbi5idXR0b24td3JhcHBlciBidXR0b24uY2FuY2Vse1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0QxMDgwODtcclxufVxyXG5cclxuLmJ1dHRvbi13cmFwcGVyIGJ1dHRvbi5wZW5kaW5ne1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YzYWQzMztcclxufVxyXG4uYnV0dG9uLXdyYXBwZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxufVxyXG5cclxuYnV0dG9uOmRpc2FibGVke1xyXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxufVxyXG5cclxuLmFkZC1pbWFnZSBpbWd7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/Pages/Dashboard/KYC/InvestorBorrowerKYCDetails/investor-borrower-kycdetails.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/Pages/Dashboard/KYC/InvestorBorrowerKYCDetails/investor-borrower-kycdetails.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: InvestorBorrowerKYCDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestorBorrowerKYCDetailsComponent", function() { return InvestorBorrowerKYCDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_Services_kyc_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/Services/kyc.service */ "./src/app/shared/Services/kyc.service.ts");
/* harmony import */ var src_app_Shared_enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Shared/enums */ "./src/app/Shared/enums.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
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






var InvestorBorrowerKYCDetailsComponent = /** @class */ (function () {
    function InvestorBorrowerKYCDetailsComponent(route, kycService, toast) {
        var _this = this;
        this.route = route;
        this.kycService = kycService;
        this.toast = toast;
        this.reason = "";
        this.load = false;
        this.pending_load = false;
        this.details = [];
        this.field_types = src_app_Shared_enums__WEBPACK_IMPORTED_MODULE_3__["FieldType"];
        this.LANG = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].english_translations;
        this.pdfUrl$ = false;
        this.route.queryParams
            .subscribe(function (params) {
            if (params['id']) {
                _this.id = atob(atob(params['id']));
                _this.getKYCDetails();
            }
        });
    }
    InvestorBorrowerKYCDetailsComponent.prototype.ngOnInit = function () {
    };
    InvestorBorrowerKYCDetailsComponent.prototype.getKYCDetails = function () {
        var _this = this;
        this.kycService.getUserKycDetails(this.id).subscribe(function (res) {
            if (res.status) {
                _this.details = res.response;
                _this.details.display_mobile_number = "" + _this.details.country_code + _this.details.mobile_number;
                _this.details.detail.map(function (data) {
                    data.info_type.map(function (item) {
                        item.detail.map(function (fields) {
                            if (fields.id == 22) {
                                console.log(fields.value[84]);
                            }
                            if (fields.value[84] == 'f') {
                                // const pdfRef =  fields.value.ref('path/to/pdf.pdf')
                                _this.pdfUrl$ = true;
                                console.log("pdf");
                            }
                        });
                    });
                });
            }
        });
    };
    InvestorBorrowerKYCDetailsComponent.prototype.approveRejectKYC = function (status) {
        var _this = this;
        var message = this.LANG.KYC_Approved;
        if (status == "2") {
            if (this.reason == "" || this.reason == undefined) {
                this.toast.warningToastr(this.LANG.Please_give_reason_for_rejection);
                return;
            }
            message = this.LANG.KYC_Rejected;
        }
        if (status == "1") {
            this.load = true;
        }
        else if (status == "0") {
            this.pending_load = true;
        }
        var data = {
            "user_id": this.id,
            "approved_status": status,
            "note": this.reason
        };
        this.kycService.approveRejectKYC(data).subscribe(function (res) {
            _this.load = false;
            _this.pending_load = false;
            if (res.status) {
                _this.toast.successToastr(message);
                $("#reject").modal("hide");
                _this.reason = "";
            }
        });
    };
    InvestorBorrowerKYCDetailsComponent.prototype.downloadPdf = function () {
    };
    InvestorBorrowerKYCDetailsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: src_app_shared_Services_kyc_service__WEBPACK_IMPORTED_MODULE_2__["KYCService"] },
        { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__["ToastrManager"] }
    ]; };
    InvestorBorrowerKYCDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-investor-borrower-kycdetails',
            template: __webpack_require__(/*! raw-loader!./investor-borrower-kycdetails.component.html */ "./node_modules/raw-loader/index.js!./src/app/Pages/Dashboard/KYC/InvestorBorrowerKYCDetails/investor-borrower-kycdetails.component.html"),
            styles: [__webpack_require__(/*! ./investor-borrower-kycdetails.component.css */ "./src/app/Pages/Dashboard/KYC/InvestorBorrowerKYCDetails/investor-borrower-kycdetails.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], src_app_shared_Services_kyc_service__WEBPACK_IMPORTED_MODULE_2__["KYCService"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__["ToastrManager"]])
    ], InvestorBorrowerKYCDetailsComponent);
    return InvestorBorrowerKYCDetailsComponent;
}());



/***/ }),

/***/ "./src/app/Pages/Dashboard/KYC/InvestorBorrowerKYCDetails/investor-borrower-kycdetails.module.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/Pages/Dashboard/KYC/InvestorBorrowerKYCDetails/investor-borrower-kycdetails.module.ts ***!
  \*******************************************************************************************************/
/*! exports provided: InvestorBorrowerKYCDetailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestorBorrowerKYCDetailsModule", function() { return InvestorBorrowerKYCDetailsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_shared_loader_Loader_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/loader/Loader.module */ "./src/app/shared/loader/Loader.module.ts");
/* harmony import */ var _investor_borrower_kycdetails_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./investor-borrower-kycdetails.component */ "./src/app/Pages/Dashboard/KYC/InvestorBorrowerKYCDetails/investor-borrower-kycdetails.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ChildRoutes = [
    {
        path: 'kyc-details',
        component: _investor_borrower_kycdetails_component__WEBPACK_IMPORTED_MODULE_5__["InvestorBorrowerKYCDetailsComponent"]
    },
];
var InvestorBorrowerKYCDetailsModule = /** @class */ (function () {
    function InvestorBorrowerKYCDetailsModule() {
    }
    InvestorBorrowerKYCDetailsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(ChildRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                src_app_shared_loader_Loader_module__WEBPACK_IMPORTED_MODULE_4__["LoaderModule"],
            ],
            declarations: [
                _investor_borrower_kycdetails_component__WEBPACK_IMPORTED_MODULE_5__["InvestorBorrowerKYCDetailsComponent"]
            ]
        })
    ], InvestorBorrowerKYCDetailsModule);
    return InvestorBorrowerKYCDetailsModule;
}());



/***/ })

}]);
//# sourceMappingURL=KYC-InvestorBorrowerKYCDetails-investor-borrower-kycdetails-module.js.map