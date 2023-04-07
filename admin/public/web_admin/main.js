(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet>\r\n    <app-spinner></app-spinner>\r\n</router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/full/full.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/full/full.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\r\n<!-- Main wrapper - style you can find in pages.scss -->\r\n<!-- ============================================================== -->\r\n<div id=\"main-wrapper\" [ngClass]=\"{'show-sidebar': showMobileMenu}\" dir=\"ltr\" data-theme=\"light\" data-layout=\"vertical\"\r\n    [attr.data-sidebartype]=\"sidebartype\" data-sidebar-position=\"absolute\" data-header-position=\"fixed\"\r\n    data-boxed-layout=\"full\">\r\n    <!-- ============================================================== -->\r\n    <!-- Topbar header - style you can find in topbar.scss -->\r\n    <!-- ============================================================== -->\r\n    <header class=\"topbar\" data-navbarbg=\"skin1\">\r\n        <nav class=\"d-flex top-navbar navbar-expand-md navbar-light\">\r\n            <div class=\"navbar-header\" [ngClass]=\"(expandLogo)?'expand-logo':''\" data-logobg=\"skin6\">\r\n                <!-- This is for the sidebar toggle which is visible on mobile only -->\r\n                <a (click)=\"showMobileMenu = !showMobileMenu\" class=\"nav-toggler waves-effect waves-light d-block d-md-none\"\r\n                    href=\"javascript:void(0)\">\r\n                    <i [ngClass]=\"(showMobileMenu)?'ti-close':'ti-menu'\"></i>\r\n                </a>\r\n                <!-- ============================================================== -->\r\n                <!-- Logo -->\r\n                <!-- ============================================================== -->\r\n                <a class=\"navbar-brand\" href=\"/\" style=\"background: #fff;\">\r\n                    <!-- Logo icon -->\r\n                    <b class=\"logo-icon\">\r\n                        <!--You can put here icon as well // <i class=\"wi wi-sunset\"></i> //-->\r\n                        <!-- Light Logo icon -->\r\n                        <img src=\"assets/images/logoo.png\" alt=\"homepage\" class=\"dark-logo\" />\r\n                    </b>\r\n                    <!--End Logo icon -->\r\n                    <!-- Logo text -->\r\n                    <!-- <span class=\"logo-text\">\r\n                        <img src=\"assets/images/logoo.png\" class=\"dark-logo\" alt=\"homepage\" />\r\n                    </span> -->\r\n                </a>\r\n                <!-- ============================================================== -->\r\n                <!-- End Logo -->\r\n                <!-- ============================================================== -->\r\n                <!-- ============================================================== -->\r\n                <!-- Toggle which is visible on mobile only -->\r\n                <!-- ============================================================== -->\r\n                <a class=\"topbartoggler d-block d-md-none waves-effect waves-light\" href=\"javascript:void(0)\"\r\n                    data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\r\n                    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                    <i class=\"ti-more\"></i>\r\n                </a>\r\n            </div>\r\n            <!-- ============================================================== -->\r\n            <!-- End Logo -->\r\n            <!-- ============================================================== -->\r\n            <div class=\"navbar-collapse collapse header\" id=\"navbarSupportedContent\" data-navbarbg=\"skin6\">\r\n                <app-navigation (toggleSidebar)=\"toggleSidebarType()\" class=\"w-100\"></app-navigation>\r\n            </div>\r\n        </nav>\r\n    </header>\r\n    <!-- ============================================================== -->\r\n    <!-- Left Sidebar - style you can find in sidebar.scss  -->\r\n    <!-- ============================================================== -->\r\n    <aside class=\"left-sidebar\" data-sidebarbg=\"skin6\" (mouseover)=\"Logo()\" (mouseout)=\"Logo()\">\r\n        <div class=\"scroll-sidebar\" [perfectScrollbar]=\"config\">\r\n\t\t\t<!-- <div class=\"user-profile\">\r\n\t\t      <div class=\"profile-img\"> <img src=\"assets/images/users/profile.png\" alt=\"user\" />\r\n\t\t        <div class=\"notify setpos\"> <span class=\"heartbit\"></span> <span class=\"point\"></span> </div>\r\n\t\t      </div>\r\n\t\t      <div class=\"profile-text\" ngbDropdown>\r\n\t\t        <a class=\"dropdown-toggle u-dropdown\" id=\"dropdownBasic1\"\r\n                ngbDropdownToggle>Markarn\r\n\t\t          Doe <i class=\"fa fa-angle-down\"></i></a>\r\n\t\t        <div class=\"dropdown-menu animated flipInY\" ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\r\n\t\t          <a href=\"#\" class=\"dropdown-item\"><i class=\"ti-user\"></i> My Profile</a>\r\n\t\t          <a href=\"#\" class=\"dropdown-item\"><i class=\"ti-wallet\"></i> My Balance</a>\r\n\t\t          <a href=\"#\" class=\"dropdown-item\"><i class=\"ti-email\"></i> Inbox</a>\r\n\t\t          <div class=\"dropdown-divider\"></div>\r\n\t\t          <a href=\"#\" class=\"dropdown-item\"><i class=\"ti-settings\"></i> Account Setting</a>\r\n\t\t          <div class=\"dropdown-divider\"></div>\r\n\t\t          <a href=\"#\" class=\"dropdown-item\"><i class=\"fa fa-power-off\"></i> Logout</a>\r\n\t\t        </div>\r\n\t\t      </div>\r\n\t\t    </div> -->\r\n            <app-sidebar></app-sidebar>\r\n        </div>\r\n    </aside>\r\n    <!-- ============================================================== -->\r\n    <!-- End Left Sidebar - style you can find in sidebar.scss  -->\r\n    <!-- ============================================================== -->\r\n    <!-- ============================================================== -->\r\n    <!-- Page wrapper  -->\r\n    <!-- ============================================================== -->\r\n    <div class=\"page-wrapper\">\r\n        <!-- ============================================================== -->\r\n        <!-- Container fluid  -->\r\n        <!-- ============================================================== -->\r\n        <div class=\"container-fluid\">\r\n        \t<!-- <app-breadcrumb></app-breadcrumb> -->\r\n            <!-- ============================================================== -->\r\n            <!-- Start Page Content -->\r\n            <!-- ============================================================== -->\r\n            <router-outlet></router-outlet>\r\n            <!-- ============================================================== -->\r\n            <!-- End Start Page Content -->\r\n            <!-- ============================================================== -->\r\n        </div>\r\n        <!-- ============================================================== -->\r\n        <!-- End Container fluid  -->\r\n        <!-- ============================================================== -->\r\n        <!-- ============================================================== -->\r\n        <!-- footer -->\r\n        <!-- ============================================================== -->\r\n        <footer class=\"footer text-center\">\r\n            {{LANG.copyright}}\r\n        </footer>\r\n        <!-- ============================================================== -->\r\n        <!-- End footer -->\r\n        <!-- ============================================================== -->\r\n    </div>\r\n    <!-- ============================================================== -->\r\n    <!-- End Page wrapper  -->\r\n    <!-- ============================================================== -->\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/breadcrumb/breadcrumb.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/breadcrumb/breadcrumb.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\r\n<!-- Bread crumb and right sidebar toggle -->\r\n<!-- ============================================================== -->\r\n<div class=\"page-breadcrumb\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12 align-self-center\">\r\n            <h4 class=\"page-title mb-0\">{{pageInfo?.title}}</h4>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- ============================================================== -->\r\n<!-- End Bread crumb and right sidebar toggle -->\r\n<!-- ============================================================== -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/header-navigation/navigation.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/header-navigation/navigation.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\r\n<!-- toggle and nav items -->\r\n<!-- ============================================================== -->\r\n<ul class=\"navbar-nav float-left mr-auto align-items-center justify-content-between w-100\">\r\n    <li class=\"nav-item d-none d-md-block d-lg-none\">\r\n        <a (click)=\"toggleSidebar.emit()\" class=\"nav-link sidebartoggler waves-effect waves-light\" href=\"javascript:void(0)\">\r\n            <i class=\"mdi mdi-menu font-24\"></i>\r\n        </a>\r\n    </li>\r\n\t<li class=\"d-none d-md-block\">\r\n\t\t<form class=\"app-search\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"{{LANG.Search}}\"> \r\n\t\t\t<a class=\"srh-btn\"><i class=\"ti-search\"></i></a> \r\n\t\t</form>\r\n    </li>\r\n    <li class=\"nav-item dropdown u-pro pl-3 pr-3\">\r\n        <a class=\"nav-link dropdown-toggle waves-effect waves-dark profile-pic\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n            <img src=\"http://35.154.195.186/web/assets/images/users/1.jpg\" alt=\"user\" class=\"\"> \r\n            <span class=\"hidden-md-down ml-3\">Mark &nbsp;<i class=\"fa fa-angle-down\"></i></span> \r\n        </a>\r\n        <div class=\"dropdown-menu animated flipInY\">\r\n            <div class=\"dropdown-divider\"></div>\r\n            <a class=\"dropdown-item cursor-pointer\" (click)=\"logout()\">{{LANG.Logout}}</a>\r\n        </div>\r\n    </li>\r\n</ul>\r\n<!-- ============================================================== -->\r\n<!-- Right side toggle and nav items -->\r\n<!-- ============================================================== -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/sidebar/sidebar.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/sidebar/sidebar.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"sidebar-nav\">\r\n    <ul id=\"sidebarnav\">\r\n\t\t<li class=\"nav-devider\"></li>\r\n        <!-- First level menu -->\r\n        <!-- <li class=\"sidebar-item\" [class.active]=\"showMenu === sidebarnavItem.title\" *ngFor=\"let sidebarnavItem of sidebarnavItems\"\r\n            [routerLinkActive]=\"sidebarnavItem.submenu.length != 0 ? '' : 'active'\">\r\n            <div class=\"nav-small-cap\" *ngIf=\"sidebarnavItem.extralink === true\">{{sidebarnavItem.title}}</div>\r\n            <a class=\"sidebar-link waves-effect waves-dark\" [routerLink]=\"sidebarnavItem.class === '' ? [sidebarnavItem.path] : null\"\r\n                [ngClass]=\"[sidebarnavItem.class]\" *ngIf=\"!sidebarnavItem.extralink;\" (click)=\"addExpandClass(sidebarnavItem.title)\"\r\n                [routerLinkActive]=\"sidebarnavItem.submenu.length != 0 ? '' : 'active'\">\r\n                <i [ngClass]=\"[sidebarnavItem.icon]\"></i>\r\n                <span class=\"hide-menu\">{{sidebarnavItem.title}}</span>\r\n            </a>\r\n        </li> -->\r\n        <!-- <li class=\"sidebar-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" routerLink=\"/login\">\r\n            <a class=\"sidebar-link waves-effect waves-dark\">\r\n                <span class=\"hide-menu\">Login</span>\r\n            </a>\r\n        </li> -->\r\n\r\n        <li class=\"sidebar-item\" *ngIf=\"checkRoute(navigation_options.PRODUCTS)\">\r\n            <a class=\"sidebar-link waves-effect waves-dark d-block\" data-toggle=\"collapse\" href=\"#collapseExample\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample\">\r\n                <div class=\"d-flex align-center justify-content-between w-100\">\r\n                    <span class=\"hide-menu\">{{LANG.Products}}</span>\r\n                    <i class=\"fas fa-angle-right\"></i>\r\n                </div>\r\n            </a>\r\n            <ul class=\"collapse sub-menu\" id=\"collapseExample\">\r\n                <li class=\"sidebar-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" routerLink=\"/dashboard/product-list\">\r\n                    <a class=\"sidebar-link waves-effect waves-dark\">\r\n                        <span class=\"hide-menu\">{{LANG.Produc_List}}</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"sidebar-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" routerLink=\"/dashboard/list-product-attribute\">\r\n                    <a class=\"sidebar-link waves-effect waves-dark\">\r\n                        <span class=\"hide-menu\">{{LANG.Product_Attributes}}</span>\r\n                    </a>\r\n                </li>\r\n\r\n                <!-- <li class=\"sidebar-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" routerLink=\"/dashboard/list-loan\">\r\n                    <a class=\"sidebar-link waves-effect waves-dark\">\r\n                        <span class=\"hide-menu\">{{LANG.Loan_Management}}</span>\r\n                    </a>\r\n                </li> -->\r\n\r\n                \r\n            </ul>\r\n        </li>\r\n\r\n        <li class=\"sidebar-item\" *ngIf=\"checkRoute(navigation_options.KYC)\">\r\n            <a class=\"sidebar-link waves-effect waves-dark d-block\" data-toggle=\"collapse\" href=\"#collapseExample1\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample\">\r\n                <div class=\"d-flex align-center justify-content-between w-100\">\r\n                    <span class=\"hide-menu\">{{LANG.KYC}}</span>\r\n                    <i class=\"fas fa-angle-right\"></i>\r\n                </div>\r\n            </a>\r\n            <ul class=\"collapse sub-menu\" id=\"collapseExample1\">\r\n                <li class=\"sidebar-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" routerLink=\"/dashboard/list-kyc\">\r\n                    <a class=\"sidebar-link waves-effect waves-dark\">\r\n                        <span class=\"hide-menu\">{{LANG.KYC_List}}</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"sidebar-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" routerLink=\"/dashboard/user-role\">\r\n                    <a class=\"sidebar-link waves-effect waves-dark\">\r\n                        <span class=\"hide-menu\">{{LANG.User_roles}}</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"sidebar-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" routerLink=\"/dashboard/info-type\">\r\n                    <a class=\"sidebar-link waves-effect waves-dark\">\r\n                        <span class=\"hide-menu\">{{LANG.Info_Type}}</span>\r\n                    </a>\r\n                </li>\r\n                \r\n            </ul>\r\n        </li>\r\n\r\n        <li class=\"sidebar-item\" *ngIf=\"checkRoute(navigation_options.USER_MANAGEMENT)\">\r\n            <a class=\"sidebar-link waves-effect waves-dark d-block\" data-toggle=\"collapse\" href=\"#collapseExample4\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample4\">\r\n                <div class=\"d-flex align-center justify-content-between w-100\">\r\n                    <span class=\"hide-menu\">{{LANG.Users_Management}}</span>\r\n                    <i class=\"fas fa-angle-right\"></i>\r\n                </div>\r\n            </a>\r\n            <ul class=\"collapse sub-menu\" id=\"collapseExample4\">\r\n                <li class=\"sidebar-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" routerLink=\"/dashboard/users-list\">\r\n                    <a class=\"sidebar-link waves-effect waves-dark\">\r\n                        <span class=\"hide-menu\">{{LANG.Admin_List}}</span>\r\n                    </a>\r\n                </li>\r\n\r\n                <li class=\"sidebar-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" routerLink=\"/dashboard/admin-ip-list\">\r\n                    <a class=\"sidebar-link waves-effect waves-dark\">\r\n                        <span class=\"hide-menu\">{{LANG.Admin_IP_List}}</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"sidebar-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" routerLink=\"/dashboard/admin-ip-logs\">\r\n                    <a class=\"sidebar-link waves-effect waves-dark\">\r\n                        <span class=\"hide-menu\">{{LANG.Admin_IP_Log}}</span>\r\n                    </a>\r\n                </li>\r\n\r\n                \r\n            </ul>\r\n        </li>\r\n\r\n\r\n        <li class=\"sidebar-item\" *ngIf=\"checkRoute(navigation_options.CMS)\">\r\n            <a class=\"sidebar-link waves-effect waves-dark d-block\" data-toggle=\"collapse\" href=\"#collapseExample44\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample44\">\r\n                <div class=\"d-flex align-center justify-content-between w-100\">\r\n                    <span class=\"hide-menu\">CMS</span>\r\n                    <i class=\"fas fa-angle-right\"></i>\r\n                </div>\r\n            </a>\r\n            <ul class=\"collapse sub-menu\" id=\"collapseExample44\">\r\n                <li class=\"sidebar-item\">\r\n                    <a class=\"sidebar-link waves-effect waves-dark d-block\" data-toggle=\"collapse\" href=\"#collapseExample444\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample444\">\r\n                        <div class=\"d-flex align-center justify-content-between w-100\">\r\n                            <span class=\"hide-menu\">Home</span>\r\n                            <i class=\"fas fa-angle-right\"></i>\r\n                        </div>\r\n                    </a>\r\n                    <ul class=\"collapse sub-menu\" id=\"collapseExample444\">\r\n                        <li class=\"sidebar-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" (click)=\"goToSections('0')\">\r\n                            <a class=\"sidebar-link waves-effect waves-dark\">\r\n                                <span class=\"hide-menu\">Section 0</span>\r\n                            </a>\r\n                        </li>\r\n                        <li class=\"sidebar-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" (click)=\"goToSections('1')\">\r\n                            <a class=\"sidebar-link waves-effect waves-dark\">\r\n                                <span class=\"hide-menu\">Section 1</span>\r\n                            </a>\r\n                        </li>\r\n                        <li class=\"sidebar-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" (click)=\"goToSections('2')\">\r\n                            <a class=\"sidebar-link waves-effect waves-dark\">\r\n                                <span class=\"hide-menu\">Section 2</span>\r\n                            </a>\r\n                        </li>\r\n                        <li class=\"sidebar-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" (click)=\"goToSections('3')\">\r\n                            <a class=\"sidebar-link waves-effect waves-dark\">\r\n                                <span class=\"hide-menu\">Section 3</span>\r\n                            </a>\r\n                        </li>\r\n                        <li class=\"sidebar-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" (click)=\"goToSections('4')\">\r\n                            <a class=\"sidebar-link waves-effect waves-dark\">\r\n                                <span class=\"hide-menu\">Section 4</span>\r\n                            </a>\r\n                        </li>\r\n                        <li class=\"sidebar-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" (click)=\"goToSections('5')\">\r\n                            <a class=\"sidebar-link waves-effect waves-dark\">\r\n                                <span class=\"hide-menu\">Section 5</span>\r\n                            </a>\r\n                        </li>\r\n\r\n                        <li class=\"sidebar-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" (click)=\"goToSections('6')\">\r\n                            <a class=\"sidebar-link waves-effect waves-dark\">\r\n                                <span class=\"hide-menu\">Section 6</span>\r\n                            </a>\r\n                        </li>\r\n\r\n                        <li class=\"sidebar-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" (click)=\"goToSections('7')\">\r\n                            <a class=\"sidebar-link waves-effect waves-dark\">\r\n                                <span class=\"hide-menu\">Section 7</span>\r\n                            </a>\r\n                        </li>\r\n                        <li class=\"sidebar-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" (click)=\"goToSections('8')\">\r\n                            <a class=\"sidebar-link waves-effect waves-dark\">\r\n                                <span class=\"hide-menu\">Section 8</span>\r\n                            </a>\r\n                        </li>\r\n                        <li class=\"sidebar-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" (click)=\"goToSections('9')\">\r\n                            <a class=\"sidebar-link waves-effect waves-dark\">\r\n                                <span class=\"hide-menu\">Section 9</span>\r\n                            </a>\r\n                        </li>\r\n        \r\n        \r\n                        \r\n                    </ul>\r\n                </li>\r\n\r\n\r\n                \r\n            </ul>\r\n        </li>\r\n\r\n        <!-- <li class=\"sidebar-item\">\r\n            <a class=\"sidebar-link waves-effect waves-dark d-block\" data-toggle=\"collapse\" href=\"#collapseExample2\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample\">\r\n                <div class=\"d-flex align-center justify-content-between w-100\">\r\n                    <span class=\"hide-menu\">Campaign Evaluation</span>\r\n                    <i class=\"fas fa-angle-right\"></i>\r\n                </div>\r\n            </a>\r\n            <ul class=\"collapse sub-menu\" id=\"collapseExample2\">\r\n               \r\n                <li class=\"sidebar-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" routerLink=\"/dashboard/campaign-list\">\r\n                    <a class=\"sidebar-link waves-effect waves-dark\">\r\n                        <span class=\"hide-menu\">Campaign List</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"sidebar-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" routerLink=\"/dashboard/component3\">\r\n                    <a class=\"sidebar-link waves-effect waves-dark\">\r\n                        <span class=\"hide-menu\">Component3</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"sidebar-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" routerLink=\"/dashboard/component4\">\r\n                    <a class=\"sidebar-link waves-effect waves-dark\">\r\n                        <span class=\"hide-menu\">Component4</span>\r\n                    </a>\r\n                </li>\r\n                \r\n            </ul>\r\n        </li> -->\r\n\r\n        <li class=\"sidebar-item\" *ngIf=\"checkRoute(navigation_options.OPPORTUNITY)\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" routerLink=\"/dashboard/campaign-list\">\r\n            <a class=\"sidebar-link waves-effect waves-dark\">\r\n                <span class=\"hide-menu\">{{LANG.Opportunity_List}}</span>\r\n            </a>\r\n        </li>\r\n\r\n        <li class=\"sidebar-item\" *ngIf=\"checkRoute(navigation_options.INVESTORS)\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" routerLink=\"/dashboard/inverstors-kyc\">\r\n            <a class=\"sidebar-link waves-effect waves-dark\">\r\n                <span class=\"hide-menu\">{{LANG.Investors}}</span>\r\n            </a>\r\n        </li>\r\n        <li class=\"sidebar-item\" *ngIf=\"checkRoute(navigation_options.BORROWERS)\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" routerLink=\"/dashboard/borrowers-kyc\">\r\n            <a class=\"sidebar-link waves-effect waves-dark\">\r\n                <span class=\"hide-menu\">{{LANG.Borrowers}}</span>\r\n            </a>\r\n        </li>\r\n\r\n        <li class=\"sidebar-item\" *ngIf=\"checkRoute(navigation_options.EVALUATION)\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" routerLink=\"/dashboard/evaluation-list\">\r\n            <a class=\"sidebar-link waves-effect waves-dark\">\r\n                <span class=\"hide-menu\">{{LANG.Evaluation_List}}</span>\r\n            </a>\r\n        </li>\r\n\r\n     \r\n\r\n        <li class=\"sidebar-item\" *ngIf=\"checkRoute(navigation_options.NOTIFICATIONS)\">\r\n            <a class=\"sidebar-link waves-effect waves-dark d-block\" data-toggle=\"collapse\" href=\"#collapseExample6\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample4\">\r\n                <div class=\"d-flex align-center justify-content-between w-100\">\r\n                    <span class=\"hide-menu\">{{LANG.Notifications}}</span>\r\n                    <i class=\"fas fa-angle-right\"></i>\r\n                </div>\r\n            </a>\r\n            <ul class=\"collapse sub-menu\" id=\"collapseExample6\">\r\n                <li class=\"sidebar-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" routerLink=\"/dashboard/email-templates-list\">\r\n                    <a class=\"sidebar-link waves-effect waves-dark\">\r\n                        <span class=\"hide-menu\">{{LANG.Email_Notifications}}</span>\r\n                    </a>\r\n                </li>\r\n\r\n                <li class=\"sidebar-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" routerLink=\"/dashboard/sms-templates-list\">\r\n                    <a class=\"sidebar-link waves-effect waves-dark\">\r\n                        <span class=\"hide-menu\">{{LANG.SMS_Notifications}}</span>\r\n                    </a>\r\n                </li>\r\n\r\n                \r\n            </ul>\r\n        </li>\r\n\r\n        <li class=\"sidebar-item\" *ngIf=\"checkRoute(navigation_options.PAGES)\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" routerLink=\"/dashboard/pages\">\r\n            <a class=\"sidebar-link waves-effect waves-dark\">\r\n                <span class=\"hide-menu\">{{LANG.Pages}}</span>\r\n            </a>\r\n        </li>\r\n\r\n        <li *ngIf=\"checkRoute(navigation_options.OPPORTUNITY_SETUP)\"class=\"sidebar-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" routerLink=\"/dashboard/opportunity-setup\">\r\n            <a class=\"sidebar-link waves-effect waves-dark\">\r\n                <span class=\"hide-menu\">{{LANG.Opportunity_setup}}</span>\r\n            </a>\r\n        </li>\r\n\r\n        <li class=\"sidebar-item\" (click)=\"logout()\">\r\n            <a class=\"sidebar-link waves-effect waves-dark\">\r\n                <i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i> <span class=\"hide-menu\">{{LANG.Logout}}</span>\r\n            </a>\r\n        </li>\r\n\r\n\r\n\r\n        \r\n\r\n       \r\n       \r\n        \r\n    </ul>\r\n</nav>"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./CampaignEvaluation/CampaignDetails/CampaignDetails.module": [
		"./src/app/Pages/Dashboard/CampaignEvaluation/CampaignDetails/CampaignDetails.module.ts",
		"default~CampaignEvaluation-CampaignDetails-CampaignDetails-module~CampaignEvaluation-CampaignList-Ca~47075a82",
		"default~CampaignEvaluation-CampaignDetails-CampaignDetails-module~CampaignEvaluation-CampaignList-Ca~3d9d13bf",
		"default~CampaignEvaluation-CampaignDetails-CampaignDetails-module~Products-LoanManagement-add-loan-a~c73e1b0f",
		"common",
		"CampaignEvaluation-CampaignDetails-CampaignDetails-module"
	],
	"./CampaignEvaluation/CampaignList/CampaignList.module": [
		"./src/app/Pages/Dashboard/CampaignEvaluation/CampaignList/CampaignList.module.ts",
		"default~CampaignEvaluation-CampaignDetails-CampaignDetails-module~CampaignEvaluation-CampaignList-Ca~47075a82",
		"default~CampaignEvaluation-CampaignDetails-CampaignDetails-module~CampaignEvaluation-CampaignList-Ca~3d9d13bf",
		"CampaignEvaluation-CampaignList-CampaignList-module"
	],
	"./CampaignEvaluation/Component3/Component3.module": [
		"./src/app/Pages/Dashboard/CampaignEvaluation/Component3/Component3.module.ts",
		"CampaignEvaluation-Component3-Component3-module"
	],
	"./CampaignEvaluation/Component4/Component4.module": [
		"./src/app/Pages/Dashboard/CampaignEvaluation/Component4/Component4.module.ts",
		"CampaignEvaluation-Component4-Component4-module"
	],
	"./EvaluationProcess/AddEvaluation/AddEvaluation.module": [
		"./src/app/Pages/Dashboard/EvaluationProcess/AddEvaluation/AddEvaluation.module.ts",
		"default~CampaignEvaluation-CampaignDetails-CampaignDetails-module~CampaignEvaluation-CampaignList-Ca~47075a82",
		"default~CampaignEvaluation-CampaignDetails-CampaignDetails-module~CampaignEvaluation-CampaignList-Ca~3d9d13bf",
		"EvaluationProcess-AddEvaluation-AddEvaluation-module"
	],
	"./EvaluationProcess/EvaluationList/EvaluationList.module": [
		"./src/app/Pages/Dashboard/EvaluationProcess/EvaluationList/EvaluationList.module.ts",
		"default~CampaignEvaluation-CampaignDetails-CampaignDetails-module~CampaignEvaluation-CampaignList-Ca~47075a82",
		"default~CampaignEvaluation-CampaignDetails-CampaignDetails-module~CampaignEvaluation-CampaignList-Ca~3d9d13bf",
		"EvaluationProcess-EvaluationList-EvaluationList-module"
	],
	"./Home/Sections/AddSection/add-section.module": [
		"./src/app/Pages/Dashboard/Home/Sections/AddSection/add-section.module.ts",
		"default~CampaignEvaluation-CampaignDetails-CampaignDetails-module~CampaignEvaluation-CampaignList-Ca~47075a82",
		"default~CampaignEvaluation-CampaignDetails-CampaignDetails-module~CampaignEvaluation-CampaignList-Ca~3d9d13bf",
		"Home-Sections-AddSection-add-section-module"
	],
	"./Home/Sections/SectionList/sectionList.module": [
		"./src/app/Pages/Dashboard/Home/Sections/SectionList/sectionList.module.ts",
		"default~CampaignEvaluation-CampaignDetails-CampaignDetails-module~CampaignEvaluation-CampaignList-Ca~47075a82",
		"default~CampaignEvaluation-CampaignDetails-CampaignDetails-module~CampaignEvaluation-CampaignList-Ca~3d9d13bf",
		"Home-Sections-SectionList-sectionList-module"
	],
	"./KYC/AddKYC/AddKYC.module": [
		"./src/app/Pages/Dashboard/KYC/AddKYC/AddKYC.module.ts",
		"default~CampaignEvaluation-CampaignDetails-CampaignDetails-module~CampaignEvaluation-CampaignList-Ca~47075a82",
		"default~CampaignEvaluation-CampaignDetails-CampaignDetails-module~CampaignEvaluation-CampaignList-Ca~3d9d13bf",
		"KYC-AddKYC-AddKYC-module"
	],
	"./KYC/InfoType/AddInfoType/AddInfoType.module": [
		"./src/app/Pages/Dashboard/KYC/InfoType/AddInfoType/AddInfoType.module.ts",
		"default~CampaignEvaluation-CampaignDetails-CampaignDetails-module~CampaignEvaluation-CampaignList-Ca~47075a82",
		"default~CampaignEvaluation-CampaignDetails-CampaignDetails-module~CampaignEvaluation-CampaignList-Ca~3d9d13bf",
		"KYC-InfoType-AddInfoType-AddInfoType-module"
	],
	"./KYC/InfoType/InfoTypeList/InfoType.module": [
		"./src/app/Pages/Dashboard/KYC/InfoType/InfoTypeList/InfoType.module.ts",
		"default~CampaignEvaluation-CampaignDetails-CampaignDetails-module~CampaignEvaluation-CampaignList-Ca~47075a82",
		"default~CampaignEvaluation-CampaignDetails-CampaignDetails-module~CampaignEvaluation-CampaignList-Ca~3d9d13bf",
		"KYC-InfoType-InfoTypeList-InfoType-module"
	],
	"./KYC/InvestorBorrowerKYCDetails/investor-borrower-kycdetails.module": [
		"./src/app/Pages/Dashboard/KYC/InvestorBorrowerKYCDetails/investor-borrower-kycdetails.module.ts",
		"default~CampaignEvaluation-CampaignDetails-CampaignDetails-module~CampaignEvaluation-CampaignList-Ca~47075a82",
		"default~CampaignEvaluation-CampaignDetails-CampaignDetails-module~CampaignEvaluation-CampaignList-Ca~3d9d13bf",
		"common",
		"KYC-InvestorBorrowerKYCDetails-investor-borrower-kycdetails-module"
	],
	"./KYC/InvestorBorrowerKYCList/investor-borrower-kyc.module": [
		"./src/app/Pages/Dashboard/KYC/InvestorBorrowerKYCList/investor-borrower-kyc.module.ts",
		"default~CampaignEvaluation-CampaignDetails-CampaignDetails-module~CampaignEvaluation-CampaignList-Ca~47075a82",
		"default~CampaignEvaluation-CampaignDetails-CampaignDetails-module~CampaignEvaluation-CampaignList-Ca~3d9d13bf",
		"KYC-InvestorBorrowerKYCList-investor-borrower-kyc-module"
	],
	"./KYC/KYCList/KYCList.module": [
		"./src/app/Pages/Dashboard/KYC/KYCList/KYCList.module.ts",
		"default~CampaignEvaluation-CampaignDetails-CampaignDetails-module~CampaignEvaluation-CampaignList-Ca~47075a82",
		"default~CampaignEvaluation-CampaignDetails-CampaignDetails-module~CampaignEvaluation-CampaignList-Ca~3d9d13bf",
		"KYC-KYCList-KYCList-module"
	],
	"./KYC/UserRoles/UserRole.module": [
		"./src/app/Pages/Dashboard/KYC/UserRoles/UserRole.module.ts",
		"default~CampaignEvaluation-CampaignDetails-CampaignDetails-module~CampaignEvaluation-CampaignList-Ca~47075a82",
		"default~CampaignEvaluation-CampaignDetails-CampaignDetails-module~CampaignEvaluation-CampaignList-Ca~3d9d13bf",
		"KYC-UserRoles-UserRole-module"
	],
	"./Notifications/Email/add-email-templates/add-email-templates.module": [
		"./src/app/Pages/Dashboard/Notifications/Email/add-email-templates/add-email-templates.module.ts",
		"default~CampaignEvaluation-CampaignDetails-CampaignDetails-module~CampaignEvaluation-CampaignList-Ca~47075a82",
		"common",
		"Notifications-Email-add-email-templates-add-email-templates-module"
	],
	"./Notifications/Email/email-template-list/email-template-list.module": [
		"./src/app/Pages/Dashboard/Notifications/Email/email-template-list/email-template-list.module.ts",
		"default~CampaignEvaluation-CampaignDetails-CampaignDetails-module~CampaignEvaluation-CampaignList-Ca~47075a82",
		"common",
		"Notifications-Email-email-template-list-email-template-list-module"
	],
	"./Notifications/SMS/add-email-templates/add-email-templates.module": [
		"./src/app/Pages/Dashboard/Notifications/SMS/add-email-templates/add-email-templates.module.ts",
		"default~CampaignEvaluation-CampaignDetails-CampaignDetails-module~CampaignEvaluation-CampaignList-Ca~47075a82",
		"common",
		"Notifications-SMS-add-email-templates-add-email-templates-module"
	],
	"./Notifications/SMS/email-template-list/email-template-list.module": [
		"./src/app/Pages/Dashboard/Notifications/SMS/email-template-list/email-template-list.module.ts",
		"default~CampaignEvaluation-CampaignDetails-CampaignDetails-module~CampaignEvaluation-CampaignList-Ca~47075a82",
		"common",
		"Notifications-SMS-email-template-list-email-template-list-module"
	],
	"./OpportunitySetup/opportunity-setup.module": [
		"./src/app/Pages/Dashboard/OpportunitySetup/opportunity-setup.module.ts",
		"default~CampaignEvaluation-CampaignDetails-CampaignDetails-module~CampaignEvaluation-CampaignList-Ca~47075a82",
		"default~CampaignEvaluation-CampaignDetails-CampaignDetails-module~CampaignEvaluation-CampaignList-Ca~3d9d13bf",
		"common",
		"OpportunitySetup-opportunity-setup-module"
	],
	"./Pages/AddPages/addPages.module": [
		"./src/app/Pages/Dashboard/Pages/AddPages/addPages.module.ts",
		"default~CampaignEvaluation-CampaignDetails-CampaignDetails-module~CampaignEvaluation-CampaignList-Ca~47075a82",
		"default~CampaignEvaluation-CampaignDetails-CampaignDetails-module~CampaignEvaluation-CampaignList-Ca~3d9d13bf",
		"Pages-AddPages-addPages-module"
	],
	"./Pages/Dashboard/Dashboard.module": [
		"./src/app/Pages/Dashboard/Dashboard.module.ts",
		"Pages-Dashboard-Dashboard-module"
	],
	"./Pages/Login/login.module": [
		"./src/app/Pages/Login/login.module.ts",
		"default~CampaignEvaluation-CampaignDetails-CampaignDetails-module~CampaignEvaluation-CampaignList-Ca~47075a82",
		"Pages-Login-login-module"
	],
	"./Pages/pages.module": [
		"./src/app/Pages/Dashboard/Pages/pages.module.ts",
		"default~CampaignEvaluation-CampaignDetails-CampaignDetails-module~CampaignEvaluation-CampaignList-Ca~47075a82",
		"default~CampaignEvaluation-CampaignDetails-CampaignDetails-module~CampaignEvaluation-CampaignList-Ca~3d9d13bf",
		"Pages-pages-module"
	],
	"./Products/AddProductAttributes/AddProductAttributes.module": [
		"./src/app/Pages/Dashboard/Products/AddProductAttributes/AddProductAttributes.module.ts",
		"default~CampaignEvaluation-CampaignDetails-CampaignDetails-module~CampaignEvaluation-CampaignList-Ca~47075a82",
		"Products-AddProductAttributes-AddProductAttributes-module"
	],
	"./Products/LoanManagement/add-loan/add-loan.module": [
		"./src/app/Pages/Dashboard/Products/LoanManagement/add-loan/add-loan.module.ts",
		"default~CampaignEvaluation-CampaignDetails-CampaignDetails-module~CampaignEvaluation-CampaignList-Ca~47075a82",
		"default~CampaignEvaluation-CampaignDetails-CampaignDetails-module~CampaignEvaluation-CampaignList-Ca~3d9d13bf",
		"default~CampaignEvaluation-CampaignDetails-CampaignDetails-module~Products-LoanManagement-add-loan-a~c73e1b0f"
	],
	"./Products/ProductAttributes/productAttributes.module": [
		"./src/app/Pages/Dashboard/Products/ProductAttributes/productAttributes.module.ts",
		"default~CampaignEvaluation-CampaignDetails-CampaignDetails-module~CampaignEvaluation-CampaignList-Ca~47075a82",
		"Products-ProductAttributes-productAttributes-module"
	],
	"./Products/ProductList/productList.module": [
		"./src/app/Pages/Dashboard/Products/ProductList/productList.module.ts",
		"default~CampaignEvaluation-CampaignDetails-CampaignDetails-module~CampaignEvaluation-CampaignList-Ca~47075a82",
		"Products-ProductList-productList-module"
	],
	"./Products/UpdateProductList/update-product-list.module": [
		"./src/app/Pages/Dashboard/Products/UpdateProductList/update-product-list.module.ts",
		"default~CampaignEvaluation-CampaignDetails-CampaignDetails-module~CampaignEvaluation-CampaignList-Ca~47075a82",
		"Products-UpdateProductList-update-product-list-module"
	],
	"./user-management/AddAdmin/add-admin.module": [
		"./src/app/Pages/Dashboard/user-management/AddAdmin/add-admin.module.ts",
		"default~CampaignEvaluation-CampaignDetails-CampaignDetails-module~CampaignEvaluation-CampaignList-Ca~47075a82",
		"common",
		"user-management-AddAdmin-add-admin-module"
	],
	"./user-management/AddAdminIp/add-admin-ip.module": [
		"./src/app/Pages/Dashboard/user-management/AddAdminIp/add-admin-ip.module.ts",
		"default~CampaignEvaluation-CampaignDetails-CampaignDetails-module~CampaignEvaluation-CampaignList-Ca~47075a82",
		"common",
		"user-management-AddAdminIp-add-admin-ip-module"
	],
	"./user-management/AdminIpList/admin-ip-list.module": [
		"./src/app/Pages/Dashboard/user-management/AdminIpList/admin-ip-list.module.ts",
		"default~CampaignEvaluation-CampaignDetails-CampaignDetails-module~CampaignEvaluation-CampaignList-Ca~47075a82",
		"common",
		"user-management-AdminIpList-admin-ip-list-module"
	],
	"./user-management/AdminIpLogs/admin-ip-log.module": [
		"./src/app/Pages/Dashboard/user-management/AdminIpLogs/admin-ip-log.module.ts",
		"default~CampaignEvaluation-CampaignDetails-CampaignDetails-module~CampaignEvaluation-CampaignList-Ca~47075a82",
		"common",
		"user-management-AdminIpLogs-admin-ip-log-module"
	],
	"./user-management/AdminList/AdminList.module": [
		"./src/app/Pages/Dashboard/user-management/AdminList/AdminList.module.ts",
		"default~CampaignEvaluation-CampaignDetails-CampaignDetails-module~CampaignEvaluation-CampaignList-Ca~47075a82",
		"common",
		"user-management-AdminList-AdminList-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: Approutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Approutes", function() { return Approutes; });
/* harmony import */ var _shared_Services_NoLoggedIn_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/Services/NoLoggedIn.guard */ "./src/app/shared/Services/NoLoggedIn.guard.ts");
/* harmony import */ var _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts/full/full.component */ "./src/app/layouts/full/full.component.ts");
/* harmony import */ var _shared_Services_authGuard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/Services/authGuard */ "./src/app/shared/Services/authGuard.ts");



var Approutes = [
    {
        path: '',
        component: _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_1__["FullComponent"],
        children: [
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
            // {
            //   path: 'starter',
            //   loadChildren: './starter/starter.module#StarterModule'
            // },
            // {
            //   path: 'component',
            //   loadChildren: './component/component.module#ComponentsModule'
            // },
            {
                path: '',
                loadChildren: './Pages/Dashboard/Dashboard.module#DashboardModule'
            },
        ],
        canActivate: [_shared_Services_authGuard__WEBPACK_IMPORTED_MODULE_2__["authGuard"]]
    },
    {
        path: '',
        loadChildren: "./Pages/Login/login.module#LoginModule",
        // loadChildren: () => import('./Pages/login/login.module').then(m => m.LoginModule),
        canActivate: [_shared_Services_NoLoggedIn_guard__WEBPACK_IMPORTED_MODULE_0__["noLoggedIn"]]
    },
    {
        path: '**',
        redirectTo: '/dashboard'
    }
];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
        firebase_app__WEBPACK_IMPORTED_MODULE_1__["initializeApp"](src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].firebaseConfig);
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layouts/full/full.component */ "./src/app/layouts/full/full.component.ts");
/* harmony import */ var _shared_header_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/header-navigation/navigation.component */ "./src/app/shared/header-navigation/navigation.component.ts");
/* harmony import */ var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/sidebar/sidebar.component */ "./src/app/shared/sidebar/sidebar.component.ts");
/* harmony import */ var _shared_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/breadcrumb/breadcrumb.component */ "./src/app/shared/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/spinner.component */ "./src/app/shared/spinner.component.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// import * as $ from 'jquery';


















var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true,
    wheelSpeed: 1,
    wheelPropagation: true,
    minScrollbarLength: 20
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"],
                _shared_spinner_component__WEBPACK_IMPORTED_MODULE_14__["SpinnerComponent"],
                _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_8__["FullComponent"],
                _shared_header_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__["NavigationComponent"],
                _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__["SidebarComponent"],
                _shared_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_11__["BreadcrumbComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_16__["ToastrModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_15__["PerfectScrollbarModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(_app_routing_module__WEBPACK_IMPORTED_MODULE_12__["Approutes"], { useHash: false })
            ],
            providers: [
                {
                    provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"],
                    useClass: _angular_common__WEBPACK_IMPORTED_MODULE_2__["PathLocationStrategy"]
                },
                {
                    provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_15__["PERFECT_SCROLLBAR_CONFIG"],
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/layouts/full/full.component.scss":
/*!**************************************************!*\
  !*** ./src/app/layouts/full/full.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvZnVsbC9mdWxsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layouts/full/full.component.ts":
/*!************************************************!*\
  !*** ./src/app/layouts/full/full.component.ts ***!
  \************************************************/
/*! exports provided: FullComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullComponent", function() { return FullComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FullComponent = /** @class */ (function () {
    function FullComponent(router) {
        this.router = router;
        this.config = {};
        this.showMobileMenu = false;
        this.expandLogo = false;
        this.sidebartype = 'full';
        this.LANG = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].english_translations;
    }
    FullComponent.prototype.Logo = function () {
        this.expandLogo = !this.expandLogo;
    };
    FullComponent.prototype.ngOnInit = function () {
        if (this.router.url === '/') {
            this.router.navigate(['/starter']);
        }
        this.defaultSidebar = this.sidebartype;
        this.handleSidebar();
    };
    FullComponent.prototype.onResize = function (event) {
        this.handleSidebar();
    };
    FullComponent.prototype.handleSidebar = function () {
        this.innerWidth = window.innerWidth;
        if (this.innerWidth < 1170) {
            this.sidebartype = 'mini-sidebar';
        }
        else {
            this.sidebartype = this.defaultSidebar;
        }
    };
    FullComponent.prototype.toggleSidebarType = function () {
        switch (this.sidebartype) {
            case 'full':
                this.sidebartype = 'mini-sidebar';
                break;
            case 'mini-sidebar':
                this.sidebartype = 'full';
                break;
            default:
        }
    };
    FullComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], FullComponent.prototype, "onResize", null);
    FullComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-full-layout',
            template: __webpack_require__(/*! raw-loader!./full.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/full/full.component.html"),
            styles: [__webpack_require__(/*! ./full.component.scss */ "./src/app/layouts/full/full.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], FullComponent);
    return FullComponent;
}());



/***/ }),

/***/ "./src/app/shared/Services/NoLoggedIn.guard.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/Services/NoLoggedIn.guard.ts ***!
  \*****************************************************/
/*! exports provided: noLoggedIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noLoggedIn", function() { return noLoggedIn; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared.service */ "./src/app/shared/Services/shared.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var noLoggedIn = /** @class */ (function () {
    function noLoggedIn(router, shared) {
        var _this = this;
        this.router = router;
        this.shared = shared;
        this.logged_in = false;
        this.shared.currentUser.subscribe(function (user) { return _this.logged_in = user; });
        if (localStorage.getItem('ice-web-dashboard')) {
            this.logged_in = true;
        }
    }
    noLoggedIn.prototype.canActivate = function () {
        if (this.logged_in) {
            this.router.navigate(['/dashboard']);
            return true;
        }
        return true;
    };
    noLoggedIn.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"] }
    ]; };
    noLoggedIn = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]])
    ], noLoggedIn);
    return noLoggedIn;
}());



/***/ }),

/***/ "./src/app/shared/Services/authGuard.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/Services/authGuard.ts ***!
  \**********************************************/
/*! exports provided: authGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authGuard", function() { return authGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared.service */ "./src/app/shared/Services/shared.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var authGuard = /** @class */ (function () {
    function authGuard(router, shared) {
        var _this = this;
        this.router = router;
        this.shared = shared;
        this.logged_in = false;
        this.shared.currentUser.subscribe(function (user) { return _this.logged_in = user; });
        if (localStorage.getItem('ice-web-dashboard')) {
            this.logged_in = true;
        }
    }
    authGuard.prototype.canActivate = function () {
        console.log(this.logged_in);
        if (this.logged_in) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    authGuard.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"] }
    ]; };
    authGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]])
    ], authGuard);
    return authGuard;
}());



/***/ }),

/***/ "./src/app/shared/Services/shared.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/Services/shared.service.ts ***!
  \***************************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SharedService = /** @class */ (function () {
    function SharedService() {
        this.isLoggedIn = false;
        this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.isLoggedIn);
        this.currentUser = this.loggedIn.asObservable();
        this.logoutUser = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SharedService.prototype.changeUser = function (user) {
        this.loggedIn.next(user);
    };
    SharedService.prototype.logout = function (user) {
        this.logoutUser.emit(user);
    };
    SharedService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' })
    ], SharedService);
    return SharedService;
}());



/***/ }),

/***/ "./src/app/shared/breadcrumb/breadcrumb.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/breadcrumb/breadcrumb.component.ts ***!
  \***********************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent(router, activatedRoute, titleService) {
        var _this = this;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () { return _this.activatedRoute; }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (route) {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (route) { return route.outlet === 'primary'; }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (route) { return route.data; }))
            .subscribe(function (event) {
            _this.titleService.setTitle(event['title']);
            _this.pageInfo = event;
        });
    }
    BreadcrumbComponent.prototype.ngOnInit = function () { };
    BreadcrumbComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BreadcrumbComponent.prototype, "layout", void 0);
    BreadcrumbComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-breadcrumb',
            template: __webpack_require__(/*! raw-loader!./breadcrumb.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/breadcrumb/breadcrumb.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());



/***/ }),

/***/ "./src/app/shared/enum.ts":
/*!********************************!*\
  !*** ./src/app/shared/enum.ts ***!
  \********************************/
/*! exports provided: Navigations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navigations", function() { return Navigations; });
var Navigations;
(function (Navigations) {
    Navigations[Navigations["PRODUCTS"] = 1] = "PRODUCTS";
    Navigations[Navigations["KYC"] = 2] = "KYC";
    Navigations[Navigations["USER_MANAGEMENT"] = 3] = "USER_MANAGEMENT";
    Navigations[Navigations["CMS"] = 4] = "CMS";
    Navigations[Navigations["OPPORTUNITY"] = 5] = "OPPORTUNITY";
    Navigations[Navigations["INVESTORS"] = 6] = "INVESTORS";
    Navigations[Navigations["BORROWERS"] = 7] = "BORROWERS";
    Navigations[Navigations["EVALUATION"] = 8] = "EVALUATION";
    Navigations[Navigations["NOTIFICATIONS"] = 9] = "NOTIFICATIONS";
    Navigations[Navigations["PAGES"] = 10] = "PAGES";
    Navigations[Navigations["OPPORTUNITY_SETUP"] = 11] = "OPPORTUNITY_SETUP";
})(Navigations || (Navigations = {}));


/***/ }),

/***/ "./src/app/shared/header-navigation/navigation.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/header-navigation/navigation.component.ts ***!
  \******************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _Services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/shared.service */ "./src/app/shared/Services/shared.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(router, shared) {
        this.router = router;
        this.shared = shared;
        this.toggleSidebar = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.LANG = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].english_translations;
        this.showSearch = false;
    }
    NavigationComponent.prototype.logout = function () {
        var _this = this;
        localStorage.clear();
        this.shared.changeUser(false);
        setTimeout(function () {
            _this.router.navigate(['/login']);
        }, 500);
    };
    NavigationComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _Services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NavigationComponent.prototype, "toggleSidebar", void 0);
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! raw-loader!./navigation.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/header-navigation/navigation.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _Services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/shared/sidebar/menu-items.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/sidebar/menu-items.ts ***!
  \**********************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
var ROUTES = [
    {
        path: '',
        title: 'Personal',
        icon: 'mdi mdi-dots-horizontal',
        class: 'nav-small-cap',
        extralink: true,
        submenu: []
    },
    {
        path: '/starter',
        title: 'Starter Page',
        icon: 'mdi mdi-file',
        class: '',
        extralink: false,
        submenu: []
    },
    {
        path: '',
        title: 'UI Components',
        icon: 'mdi mdi-dots-horizontal',
        class: 'nav-small-cap',
        extralink: true,
        submenu: []
    },
    {
        path: '/component/accordion',
        title: 'Accordion',
        icon: 'mdi mdi-equal',
        class: '',
        extralink: false,
        submenu: []
    },
    {
        path: '/component/alert',
        title: 'Alert',
        icon: 'mdi mdi-message-bulleted',
        class: '',
        extralink: false,
        submenu: []
    },
    {
        path: '/component/carousel',
        title: 'Carousel',
        icon: 'mdi mdi-view-carousel',
        class: '',
        extralink: false,
        submenu: []
    },
    {
        path: '/component/dropdown',
        title: 'Dropdown',
        icon: 'mdi mdi-arrange-bring-to-front',
        class: '',
        extralink: false,
        submenu: []
    },
    {
        path: '/component/modal',
        title: 'Modal',
        icon: 'mdi mdi-tablet',
        class: '',
        extralink: false,
        submenu: []
    },
    {
        path: '/component/pagination',
        title: 'Pagination',
        icon: 'mdi mdi-backburger',
        class: '',
        extralink: false,
        submenu: []
    },
    {
        path: '/component/poptool',
        title: 'Popover & Tooltip',
        icon: 'mdi mdi-image-filter-vintage',
        class: '',
        extralink: false,
        submenu: []
    },
    {
        path: '/component/progressbar',
        title: 'Progressbar',
        icon: 'mdi mdi-poll',
        class: '',
        extralink: false,
        submenu: []
    },
    {
        path: '/component/rating',
        title: 'Ratings',
        icon: 'mdi mdi-bandcamp',
        class: '',
        extralink: false,
        submenu: []
    },
    {
        path: '/component/tabs',
        title: 'Tabs',
        icon: 'mdi mdi-sort-variant',
        class: '',
        extralink: false,
        submenu: []
    },
    {
        path: '/component/timepicker',
        title: 'Timepicker',
        icon: 'mdi mdi-calendar-clock',
        class: '',
        extralink: false,
        submenu: []
    },
    {
        path: '/component/buttons',
        title: 'Button',
        icon: 'mdi mdi-blur-radial',
        class: '',
        extralink: false,
        submenu: []
    },
    {
        path: '/component/card',
        title: 'Card',
        icon: 'mdi mdi-arrange-bring-forward',
        class: '',
        extralink: false,
        submenu: []
    }
];


/***/ }),

/***/ "./src/app/shared/sidebar/sidebar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _menu_items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-items */ "./src/app/shared/sidebar/menu-items.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _Services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Services/shared.service */ "./src/app/shared/Services/shared.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../enum */ "./src/app/shared/enum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(modalService, router, route, toast, shared) {
        this.modalService = modalService;
        this.router = router;
        this.route = route;
        this.toast = toast;
        this.shared = shared;
        this.showMenu = '';
        this.showSubMenu = '';
        this.LANG = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].english_translations;
        this.user_data = {};
        this.navigation_options = _enum__WEBPACK_IMPORTED_MODULE_7__["Navigations"];
        var user_data = btoa(btoa("user_info"));
        if (localStorage.getItem(user_data) != undefined) {
            this.user_data = JSON.parse(atob(atob(localStorage.getItem(user_data) || '{}')));
        }
    }
    // this is for the open close
    SidebarComponent.prototype.addExpandClass = function (element) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        }
        else {
            this.showMenu = element;
        }
    };
    // End open close
    SidebarComponent.prototype.ngOnInit = function () {
        this.sidebarnavItems = _menu_items__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].filter(function (sidebarnavItem) { return sidebarnavItem; });
    };
    SidebarComponent.prototype.logout = function () {
        var _this = this;
        localStorage.clear();
        this.toast.successToastr("Logout successfully");
        this.shared.changeUser(false);
        setTimeout(function () {
            _this.router.navigate(['/login']);
        }, 500);
    };
    SidebarComponent.prototype.goToSections = function (type) {
        this.router.navigate(["/dashboard/section-list"], { queryParams: { type: btoa(btoa(type)) } });
    };
    SidebarComponent.prototype.checkRoute = function (data) {
        var role = this.user_data.access_control.split(",");
        var index = role.findIndex(function (item) { return item == data.toString(); });
        if (index == -1) {
            return null;
        }
        return true;
    };
    SidebarComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__["ToastrManager"] },
        { type: _Services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] }
    ]; };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.css */ "./src/app/shared/sidebar/sidebar.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__["ToastrManager"],
            _Services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/shared/sidebar/sidebar.css":
/*!********************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.sidebar-nav ul .sidebar-item .sidebar-link[aria-expanded=\"true\"] i{\r\n    -webkit-transition: all 0.3s ease-out;\r\n    transition: all 0.3s ease-out;\r\n    -webkit-transform: rotate(90deg);\r\n            transform: rotate(90deg);\r\n}\r\n\r\n.sidebar-nav ul .sidebar-item .sidebar-link i{\r\n    -webkit-transform: rotate(0);\r\n            transform: rotate(0);\r\n    -webkit-transition: all 0.3s ease-out;\r\n    transition: all 0.3s ease-out;\r\n}\r\n\r\nul.sub-menu li a{\r\n    padding: 0 25px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NpZGViYXIvc2lkZWJhci5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0kscUNBQTZCO0lBQTdCLDZCQUE2QjtJQUM3QixnQ0FBd0I7WUFBeEIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksNEJBQW9CO1lBQXBCLG9CQUFvQjtJQUNwQixxQ0FBNkI7SUFBN0IsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zaWRlYmFyL3NpZGViYXIuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5zaWRlYmFyLW5hdiB1bCAuc2lkZWJhci1pdGVtIC5zaWRlYmFyLWxpbmtbYXJpYS1leHBhbmRlZD1cInRydWVcIl0gaXtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG59XHJcblxyXG4uc2lkZWJhci1uYXYgdWwgLnNpZGViYXItaXRlbSAuc2lkZWJhci1saW5rIGl7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xyXG59XHJcblxyXG51bC5zdWItbWVudSBsaSBhe1xyXG4gICAgcGFkZGluZzogMCAyNXB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/spinner.component.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/spinner.component.ts ***!
  \*********************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent(router, document) {
        var _this = this;
        this.router = router;
        this.document = document;
        this.isSpinnerVisible = true;
        this.backgroundColor = 'rgba(0, 115, 170, 0.69)';
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                _this.isSpinnerVisible = true;
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] ||
                event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationCancel"] ||
                event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationError"]) {
                _this.isSpinnerVisible = false;
            }
        }, function () {
            _this.isSpinnerVisible = false;
        });
    }
    SpinnerComponent.prototype.ngOnDestroy = function () {
        this.isSpinnerVisible = false;
    };
    SpinnerComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SpinnerComponent.prototype, "backgroundColor", void 0);
    SpinnerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-spinner',
            template: "<div class=\"preloader\" *ngIf=\"isSpinnerVisible\">\n        <div class=\"spinner\">\n          <div class=\"double-bounce1\"></div>\n          <div class=\"double-bounce2\"></div>\n        </div>\n    </div>",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            Document])
    ], SpinnerComponent);
    return SpinnerComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyC9W5Wbqb5tcDk1VI6Pi3q6hHcP0OsRA-k",
        authDomain: "serviceario-b3619.firebaseapp.com",
        databaseURL: "https://serviceario-b3619-default-rtdb.firebaseio.com",
        projectId: "serviceario-b3619",
        storageBucket: "serviceario-b3619.appspot.com",
        messagingSenderId: "589880033877",
        appId: "1:589880033877:web:d66709c23733a9aa220adc",
        measurementId: "G-L72JSN8M1Q"
        // apiKey: "AIzaSyCOhf4y987F-wSd23R7oYtthmezImFYQQE",
        // authDomain: "cfcsa-3a0a2.firebaseapp.com",
        // projectId: "cfcsa-3a0a2",
        // storageBucket: "cfcsa-3a0a2.appspot.com",
        // messagingSenderId: "162812402019",
        // appId: "1:162812402019:web:b6588d10842cee85e99b56",
        // databaseURL: "https://cfcsa-3a0a2-default-rtdb.firebaseio.com",
    },
    english_translations: {
        copyright: "2022 © Competitiveness Financial",
        KYC: "KYC",
        Campaign: "Campaign",
        Dashboard: "Dashboard",
        Loan_Management: "Loan Management",
        This_field_is_required: "This field is required",
        Selected_value: "Selected value:",
        APPLY_DATA: "APPLY DATA",
        Apply_Loan: "Apply Loan",
        Borrowers: "Borrowers",
        Investors: "Investors",
        Organizers: "Organizers",
        Due_Date: "Due Date",
        Principle_Amount: "Principle Amount",
        Profit_Amount: "Profit Amount",
        Total_Amount: "Total Amount",
        Investors_Expected_Profit: "Investors Expected Profit",
        Organizers_Expected_Profit: "Organizers Expected Profit",
        Approve: "Approve",
        Reject: "Reject",
        Campaign_Images: "Campaign Images",
        Team: "Team",
        Enter: "Enter",
        Select_Product: "Select Product",
        Reason_for_rejection: "Reason for rejection",
        Reason: "Reason",
        Close: "Close",
        Save_changes: "Save changes",
        Campaign_List: "Campaign List",
        Home: "Home",
        Tagline: "Tagline",
        Minimum_Investment: "Minimum Investment",
        Maximum_Investment: "Maximum Investment",
        Share_price: "Share price",
        Total_Valuation: "Total Valuation",
        Status: "Status",
        Action: "Action",
        Active: "Active",
        Inactive: "Inactive",
        Are_you_sure_you_want_to_delete_this: "Are you sure you want to delete this?",
        Delete: "Delete",
        Cancel: "Cancel",
        Add_Evaluation_Attributes: "Add Evaluation Attributes",
        Evaluation_Name: "Evaluation Name",
        Enter_Your_Evaluation_Name: "Enter Your Evaluation Name",
        Evaluation_Ar_Name: "Evaluation Ar Name",
        Enter_Your_Evaluation_Ar_Name: "Enter Your Evaluation Ar Name",
        Role_Type: "Role Type",
        Rank_Type: "Rank_Type",
        Select_Rank_Type: "Select Rank Type",
        Position: "Position",
        Evaluation_Category_Details: "Evaluation Category Details",
        Enter_Category_Title: "Enter Category Title",
        Enter_Ar_Category_Title: "Enter Ar Category Title",
        Enter_Min_Range: "Enter Min Range",
        Enter_Max_Range: "Enter Max Range",
        Update: "Update",
        Submit: "Submit",
        Back: "Back",
        Create_New: "Create New",
        Add: "Add",
        Evaluation_Attribute_Details: "Evaluation Attribute Details",
        Create_Attribute: "Create Attribute",
        Select_Category: "Select Category",
        Enter_Attribute_Title: "Enter Attribute Title",
        Enter_Ar_Attribute_Title: "Enter Ar Attribute Title",
        TITLE: "TITLE",
        AR_TITLE: "AR TITLE",
        Min: "Min",
        Max: "Max",
        POSITION: "POSITION",
        STATUS: "STATUS",
        Evaluation_List: "Evaluation List",
        Add_KYC: "Add KYC",
        KYC_Name: "KYC Name",
        Enter_Your_KYC_Name: "Enter Your KYC Name",
        KYC_Ar_Name: "KYC Ar Name",
        Enter_Your_KYC_Ar_Name: "Enter Your KYC Ar Name",
        KYC_Details: "KYC Details",
        Enter_KYC_Detail_Title: "Enter KYC Detail Title",
        Enter_Ar_KYC_Detail_Title: "Enter Ar KYC Detail Title",
        Select_Field_Type: "Select Field Type",
        Select_Information_Type: "Select Information Type",
        Add_Info_Type: "Add Info Type",
        Info_Type_Name: "Info Type Name",
        Enter_Your_Info_Type_Name: "Enter Your Info Type Name",
        Info_Type_Ar_Name: "Info Type Ar Name",
        Enter_Your_Info_Type_Ar_Name: "Enter Your Info Type Ar Name",
        Info_Type_List: "Info Type List",
        Yes: "Yes",
        No: "No",
        Tell_about_your: "Tell about your",
        Reject_KYC: "Reject KYC",
        KYC_List: "KYC List",
        Name: "Name",
        Mobile_Number: "Mobile Number",
        Email: "Email",
        Approved: "Approved",
        Rejected: "Rejected",
        Pending: "Pending",
        User_roles: "User Roles",
        Add_Templates: "Add Templates",
        Enter_Title: "Enter Title",
        Enter_Ar_title: "Enter Ar title",
        Subject: "Subject",
        Enter_Subject: "Enter Subject",
        Ar_Subject: "Ar Subject",
        Enter_Ar_Subject: "Enter Ar Subject",
        Template_Type: "Template Type",
        Select_Template_type: "Select Template type",
        Message: "Message",
        Paste_your_HTML_content_here: "Paste your HTML content here...",
        Email_Templates_List: "Email Templates List",
        SMS_Templates_List: "SMS Templates List",
        Create_New_Template: "Create New Template",
        Registration: "Registration",
        Edit: "Edit",
        Product_Attributes: "Product Attributes",
        Product_Attribute_Name: "Product Attribute Name",
        Enter_Your_Product_Attribute_Name: "Enter Your Product Attribute Name",
        Product_Attribute_Ar_Name: "Product Attribute Ar Name",
        Enter_Your_Product_Attribute_Ar_Name: "Enter Your Product Attribute Ar Name",
        Multiselect: "Multiselect",
        Product_Attribute_Details: "Product Attribute Details",
        Enter_Product_Attribute_Detail_Title: "Enter Product Attribute Detail Title",
        Enter_Ar_Product_Attribute_Detail_Title: "Enter Ar Product Attribute Detail Title",
        Enter_Additional_details: "Enter Additional details",
        Enter_Ar_Additional_details: "Enter Additional details",
        Add_Loan: "Add Loan",
        Enter_Your_Title: "Enter Your Title",
        Enter_Your_Ar_Title: "Enter Your Ar Title",
        Product_Category: "Product Category",
        Select_Product_Category: "Select Product Category",
        Opportunities: "Opportunities",
        Select_Opportunity: "Select Opportunity",
        Loan_Type: "Loan Type",
        Select_Loan_Type: "Select Loan Type",
        Add_Interest_Details: "Add Interest Details",
        Interest_Calculation_Method: "Interest Calculation Method",
        Select_Calculation_Method: "Select Calculation Method",
        Accured_Interest_Posting_Frequency: "Accured Interest Posting Frequency",
        Select_posting_frequency: "Select posting frequency",
        How_is_Interest_Rate_charged: "How is Interest Rate charged?",
        Select_Method: "Select Method",
        Interest_Rate_Constrains: "Interest Rate Constrains",
        Default: "Default",
        Enter_Default_Title: "Enter Default Title",
        Fundraiser_Profit: "Fundraiser Profit",
        Enter_Fundraiser_Profit: "Enter Fundraiser Profit",
        Loan_List: "Loan List",
        Add_Payment_Info: "Add Payment Info",
        Payment_Interval_Method: "Payment Interval Method",
        Select_Interval_Method: "Select Interval Method",
        Payments_are_made_every: "Payments are made every",
        Enter_Payment_Period: "Enter Payment Period",
        Select_Payment_Period: "Select Payment Period",
        Installment_Constrains: "Installment Constrains",
        First_Due_date_Offest_Constrains_Days: "First Due date Offest Constrains (Days)",
        Other_Details: "Other Details",
        Collect_Principle_every: "Collect Principle every",
        Enter_Principle: "Enter Principle",
        Repayments: "Repayments",
        Grace_Period_Type: "Grace Period Type",
        Select_Grace_Period_Type: "Select Grace Period Type",
        Grace_Period: "Grace Period",
        Enter_Grace_Period: "Enter Grace Period",
        Product_Attribute_List: "Product Attribute List",
        Produc_List: "Product List",
        Products: "Products",
        Product_Name: "Product Name",
        Enter_Your_Product_Name: "Enter Your Product Name",
        Product_Ar_Name: "Product Ar Name",
        Enter_Your_Product_Ar_Name: "Enter Your Product Ar Name",
        Add_Admin: "Add Admin",
        Enter_Name: "Enter Name",
        Department_Type: "Department Type",
        Select_Department_Type: "Select Department Type",
        Menu: "Menu",
        Role: "Role",
        Enter_Mobile_Number: "Enter Mobile Number",
        Enter_valid_Mobile_Number: "Enter valid Mobile Number",
        Enter_Email: "Enter Email",
        Enter_valid_email_id: "Enter valid email id.",
        Password: "Password",
        Enter_password: "Enter password",
        Password_must_be_characters_or_more: "Password must be 8 characters or more.",
        IP: "IP",
        Enter_Ip: "Enter Ip",
        Admin_IP_List: "Admin IP List",
        Create_New_IP: "Create New IP",
        Created_On: "Created On",
        Admin_IP_Log: "Admin IP Log",
        Users_List: "Users List",
        Create_New_User: "Create New User",
        User_Type: "User Type",
        Department: "Department",
        Sign_In: "Sign In",
        Remember_me: "Remember me",
        Forgot_pwd: "Forgot pwd?",
        Log_In: "Log In",
        Recover_Password: "Recover Password",
        Enter_your_Email_and_instructions_will_be_sent_to_you: "Enter your Email and instructions will be sent to you!",
        Reset: "Reset",
        Logout: "Logout",
        Search: "Search...",
        Info_Type: "Info Type",
        Users_Management: "Users Management",
        Admin_List: "Admin List",
        Opportunity_List: "Opportunity List",
        Notifications: "Notifications",
        Email_Notifications: "Email Notifications",
        SMS_Notifications: "SMS Notifications",
        Please_select_a_product: "Please select a product",
        Please_give_reason_for_rejection: "Please give reason for rejection!",
        updated_successfully: " updated successfully",
        Something_went_wrong_Please_try_again_later: "Something went wrong. Please try again later",
        Evaluation_deleted_successfully: "Evaluation deleted successfully",
        Evaluation_added_successfully: "Evaluation added successfully",
        Attribute_updated_successfully: "Attribute updated successfully",
        KYC_added_successfully: "KYC added successfully",
        KYC_updated_successfully: "KYC updated successfully",
        Info_Type_added_successfully: "Info Type added successfully",
        Info_Type_updated_successfully: "Info Type updated successfully",
        Info_type_deleted_successfully: "Info type deleted successfully",
        KYC_Approved: "KYC Approved",
        KYC_Rejected: "KYC Rejected",
        KYC_deleted_successfully: "KYC deleted successfully",
        User_roles_updated_successfully: "User roles updated successfully.",
        Template_added_successfully: "Template added successfully",
        Template_updated_successfully: "Template updated successfully",
        Attribute_added_successfully: "Attribute added successfully",
        Loan_Details_added_successfully: "Loan Details added successfully",
        Loan_Details_updated_successfully: "Loan Details updated successfully",
        Attribute_deleted_successfully: "Attribute deleted successfully",
        Product_added_successfully: "Product added successfully",
        Product_updated_successfully: "Product updated successfully",
        User_added_successfully: "User added successfully",
        User_updated_successfully: "User updated successfully",
        Ip_added_successfully: "Ip added successfully",
        Login_Successful_Welcome: "Login Successful! Welcome ",
        investor_statement: "investor statement",
        invester_name: "Invester Name",
        invested_amount: "Invested Amount",
        date: "Date",
        Total_Investment: "Total Investment",
        No_Of_Investors: "No. Of Investors",
        Required_Investment: "Required Investment",
        Remaining_Investment: "Remaining Investment",
        interest_rate: "Interest Rate",
        no_of_installments: "No of Installments",
        no_of_days: "No of days",
        Ar_Message: "Ar Message",
        Pages: "Pages",
        description: "DESCRIPTION",
        ar_description: "AR DESCRIPTION",
        enter_description: "Enter Description",
        enter_ar_description: "Enter Ar Description",
        Opportunity_setup: "Opportunity Setup",
        Select_Role: "Select Role",
        Image: "Image",
        Add_image: "Add Image",
        Add_page: "Add Page",
        Registration_Details: "Registration Details",
        Select_User_Type: "Select User Type",
        AR_Image: "AR Image",
        Opportunity_Product: "Opportunity Product",
        Opportunity_Publish: "Opportunity Publish",
        Publish: "Publish",
        Investment_Details: "Investment Details",
        Length: "Length",
        Select_Mandatory: "Select Mandatory",
        Account_Number: "Account Number"
    },
    arabic_translations: {},
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\iceweb\ice-web\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map