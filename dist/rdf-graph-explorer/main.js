(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _datasets_overview_datasets_overview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./datasets-overview/datasets-overview.component */ "./src/app/datasets-overview/datasets-overview.component.ts");
/* harmony import */ var _dataset_details_dataset_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dataset-details/dataset-details.component */ "./src/app/dataset-details/dataset-details.component.ts");
/* harmony import */ var _sparql_sparql_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sparql/sparql.component */ "./src/app/sparql/sparql.component.ts");
/* harmony import */ var _describe_describe_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./describe/describe.component */ "./src/app/describe/describe.component.ts");







var routes = [
    { path: '', component: _datasets_overview_datasets_overview_component__WEBPACK_IMPORTED_MODULE_3__["DatasetsOverviewComponent"] },
    { path: 'sparql', component: _sparql_sparql_component__WEBPACK_IMPORTED_MODULE_5__["SparqlComponent"] },
    { path: 'dataset/:datasetId', component: _dataset_details_dataset_details_component__WEBPACK_IMPORTED_MODULE_4__["DatasetDetailsComponent"] },
    { path: 'describe', component: _describe_describe_component__WEBPACK_IMPORTED_MODULE_6__["DescribeComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-main-nav></app-main-nav>\n<!-- Main component -->\n<div fxLayout=\"column\" class=\"mat-typography\">\n  <router-outlet ></router-outlet>\n  <app-footer fxFlexOffset=\"auto\"></app-footer>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _datasets_info_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../datasets-info.service */ "./src/datasets-info.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(datasetsInfo) {
        this.datasetsInfo = datasetsInfo;
        this.title = 'rdf-graph-explorer';
    }
    AppComponent.prototype.applyFilterNav = function (filterValue) {
        this.datasetsInfo.arrayDatasetsNav = Object.keys(this.datasetsInfo.hashAll);
        this.datasetsInfo.arrayDatasetsNav = this.datasetsInfo.arrayDatasetsNav
            .filter(function (item) { return item.includes(filterValue.trim().toLowerCase()); });
        console.log('after filter');
        console.log(this.datasetsInfo.arrayDatasetsNav);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_datasets_info_service__WEBPACK_IMPORTED_MODULE_2__["DatasetsInfoService"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var angular2_navigate_with_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular2-navigate-with-data */ "./node_modules/angular2-navigate-with-data/dist/index.js");
/* harmony import */ var ngx_cytoscape__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-cytoscape */ "./node_modules/ngx-cytoscape/ngx-cytoscape.umd.js");
/* harmony import */ var ngx_cytoscape__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ngx_cytoscape__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _datasets_overview_datasets_overview_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./datasets-overview/datasets-overview.component */ "./src/app/datasets-overview/datasets-overview.component.ts");
/* harmony import */ var _dataset_details_dataset_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dataset-details/dataset-details.component */ "./src/app/dataset-details/dataset-details.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./main-nav/main-nav.component */ "./src/app/main-nav/main-nav.component.ts");
/* harmony import */ var _sparql_sparql_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./sparql/sparql.component */ "./src/app/sparql/sparql.component.ts");
/* harmony import */ var _describe_describe_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./describe/describe.component */ "./src/app/describe/describe.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");




// Deactivate animations: import {NoopAnimationsModule} from '@angular/platform-browser/animations';















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                _datasets_overview_datasets_overview_component__WEBPACK_IMPORTED_MODULE_12__["DatasetsOverviewComponent"],
                _dataset_details_dataset_details_component__WEBPACK_IMPORTED_MODULE_13__["DatasetDetailsComponent"],
                _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_15__["MainNavComponent"],
                _sparql_sparql_component__WEBPACK_IMPORTED_MODULE_16__["SparqlComponent"],
                _describe_describe_component__WEBPACK_IMPORTED_MODULE_17__["DescribeComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_18__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_14__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
                ngx_cytoscape__WEBPACK_IMPORTED_MODULE_9__["CytoscapeModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dataset-details/dataset-details.component.html":
/*!****************************************************************!*\
  !*** ./src/app/dataset-details/dataset-details.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainLayout\" fxLayout=\"row\" fxLayoutAlign=\"center\">\n  <div class=\"container\"  fxLayout=\"column\" fxFlex=\"70%\" fxFlex.xs=\"100%\" fxLayoutWrap fxLayoutGap=\"1.5%\" style=\"text-align: left;\"\n  *ngIf=\"datasetsInfo.datasetSelected != undefined\">\n\n<!-- <div class=\"mainLayout\" style=\"text-align: left;\" fxLayout=\"column\" fxLayoutWrap\n*ngIf=\"datasetsInfo.datasetSelected != undefined\"> -->\n<!-- <div class=\"mainLayout\" style=\"text-align: left;\" fxLayout=\"column\" fxLayoutWrap> -->\n    <h1 class=\"mat-display-1\" style=\"text-align: center; padding-bottom: 15px\">\n      {{ datasetsInfo.datasetSelected.source.value }}\n    </h1>\n\n    <mat-card class=\"mat-elevation-z8\">\n      {{ datasetsInfo.datasetSelected.description.value }}\n      <p style=\"margin-top: 15px;\">\n        Generated on: {{datasetsInfo.datasetSelected.displayDateGenerated}}\n      </p>\n      <p>\n        Homepage: <a href=\"{{datasetsInfo.datasetSelected.homepage.value}}\">{{datasetsInfo.datasetSelected.homepage.value}}</a>\n      </p>\n    </mat-card>\n\n    <!-- <div fxLayout=\"row\" fxFlex.md=\"70\" fxLayoutWrap class=\"card-deck-container mat-elevation-z4\"> -->\n    <div fxLayout=\"row\" fxLayoutWrap>\n      <div fxFlex *ngFor=\"let countInGraph of ['statements', 'entities', 'properties', 'classes']\" class=\"card-item\">\n        <mat-card class=\"mat-elevation-z8\">\n          <mat-card-title class=\"md-card-title\">{{datasetsInfo.datasetSelected[countInGraph].value}}</mat-card-title>\n          <div class=\"card-text-content\">\n            {{countInGraph}}\n          </div>    \n        </mat-card>\n      </div>\n    </div>\n\n    <mat-card class=\"mat-elevation-z8\">\n      <mat-form-field>\n        <input matInput (keyup)=\"applyFilterRelationsTable($event.target.value)\" placeholder=\"Filter\">\n      </mat-form-field>\n\n      <!-- <mat-table #table [dataSource]=\"datasetsInfo.hashAll[datasetsInfo.datasetSelected.source.value].relationsTableDataSource\" matSort> -->\n      <mat-table #table [dataSource]=\"datasetsInfo.datasetSelected.relationsTableDataSource\" matSort>\n        <ng-container matColumnDef=\"{{column.id}}\" *ngFor=\"let column of columnNames\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header> {{column.value}} </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\">\n            {{element[column.id]}}\n            <!-- <a fxFlexFill [routerLink]=\"'/dataset/'+element[column.id]\" class=\"mat-row-link\"></a> -->\n          </mat-cell>\n        </ng-container>\n\n        <!-- Expanded Content Column - The detail row is made up of this one column that spans across all columns ->\n        <ng-container matColumnDef=\"expandedDetail\">\n          <td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"columnsToDisplay.length\">\n            <div class=\"example-element-detail\"\n                [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\">\n              <div class=\"example-element-diagram\">\n                <div class=\"example-element-position\"> {{element.description.value}} </div>\n                <div class=\"example-element-symbol\"> {{element.symbol}} </div>\n                <div class=\"example-element-name\"> {{element.name}} </div>\n                <div class=\"example-element-weight\"> {{element.weight}} </div>\n              </div>\n              <div class=\"example-element-description\">\n                {{element.description}}\n                <span class=\"example-element-description-attribution\"> -- Wikipedia </span>\n              </div>\n            </div>\n          </td>\n        </ng-container-->\n\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n          <!-- (click)=\"datasetsInfo.navigateTo(row.datasetId)\"></mat-row> -->\n      </mat-table>\n    </mat-card>\n\n    <mat-card style=\"margin-top: 15px; height: 500px;\">\n      <ngx-cytoscape [elements]=\"datasetsInfo.datasetSelected.ngxGraph\"></ngx-cytoscape>\n    </mat-card>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/dataset-details/dataset-details.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/dataset-details/dataset-details.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-item {\n  padding: 3px 3px 3px 3px; }\n\nngx-cytoscape {\n  height: 50vh;\n  float: left;\n  position: relative;\n  border: solid #21c0c0;\n  width: 50em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZlbW9uZXQva3Jha2VuL3JkZi1ncmFwaC1leHBsb3Jlci9zcmMvYXBwL2RhdGFzZXQtZGV0YWlscy9kYXRhc2V0LWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBd0IsRUFBQTs7QUFNMUI7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZGF0YXNldC1kZXRhaWxzL2RhdGFzZXQtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWl0ZW0ge1xuICBwYWRkaW5nOiAzcHggM3B4IDNweCAzcHg7XG59XG5cblxuXG4vLyBuZ3gtZ3JhcGggQ1NTXG5uZ3gtY3l0b3NjYXBlIHtcbiAgaGVpZ2h0OiA1MHZoO1xuICBmbG9hdDogbGVmdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXI6IHNvbGlkICMyMWMwYzA7XG4gIHdpZHRoOiA1MGVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/dataset-details/dataset-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/dataset-details/dataset-details.component.ts ***!
  \**************************************************************/
/*! exports provided: DatasetDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatasetDetailsComponent", function() { return DatasetDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _datasets_info_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../datasets-info.service */ "./src/datasets-info.service.ts");
/* harmony import */ var _sparql_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../sparql.service */ "./src/sparql.service.ts");






var DatasetDetailsComponent = /** @class */ (function () {
    function DatasetDetailsComponent(router, route, sparql, datasetsInfo) {
        this.router = router;
        this.route = route;
        this.sparql = sparql;
        this.datasetsInfo = datasetsInfo;
        this.displayedColumns = [];
        this.graphData = {
            nodes: [
                { data: { id: 'j', name: 'Jerry', faveColor: '#6FB1FC', faveShape: 'triangle' } },
                { data: { id: 'e', name: 'Elaine', faveColor: '#EDA1ED', faveShape: 'ellipse' } },
                { data: { id: 'k', name: 'Kramer', faveColor: '#86B342', faveShape: 'octagon' } },
                { data: { id: 'g', name: 'George', faveColor: '#F5A45D', faveShape: 'rectangle' } }
            ],
            edges: [
                { data: { source: 'j', target: 'e', faveColor: '#6FB1FC' } },
                { data: { source: 'j', target: 'k', faveColor: '#6FB1FC' } },
                { data: { source: 'j', target: 'g', faveColor: '#6FB1FC' } },
                { data: { source: 'e', target: 'j', faveColor: '#EDA1ED' } },
                { data: { source: 'e', target: 'k', faveColor: '#EDA1ED' } },
                { data: { source: 'k', target: 'j', faveColor: '#86B342' } },
                { data: { source: 'k', target: 'e', faveColor: '#86B342' } },
                { data: { source: 'k', target: 'g', faveColor: '#86B342' } },
                { data: { source: 'g', target: 'j', faveColor: '#F5A45D' } }
            ]
        };
        this.columnNames = [
            { id: 'classCount1', value: '# of instance of subject' },
            { id: 'class1', value: 'Subject class' },
            { id: 'relationWith', value: 'Have relation with' },
            { id: 'class2', value: 'Object class' },
            { id: 'classCount2', value: '# of instance of object' }
        ];
    }
    Object.defineProperty(DatasetDetailsComponent.prototype, "matSort", {
        set: function (ms) {
            this.sort = ms;
        },
        enumerable: true,
        configurable: true
    });
    DatasetDetailsComponent.prototype.ngOnInit = function () {
        this.displayedColumns = this.columnNames.map(function (x) { return x.id; });
        console.log('before ngOnInit dataset-detail. getNavigatedData:');
        // Trying to get data through the router to avoid doing useless calls:
        // this.route
        //   .data
        //   .subscribe(v => this.datasetsInfo = v.datasetsInfo);
        // const navigatedData = this.router.getNavigatedData();
        // console.log(navigatedData);
        // if (navigatedData == null) {
        //   // Execute SPARQL query to get datasets infos
        //   console.log('no navigatedData. execute sparql');
        //   this.sparql.getAllDatasetsInfo(null, this, this.route.snapshot.paramMap.get('datasetId'));
        // } else {
        //   // Get datasets infos from data passed through router
        //   this.datasetsInfo = navigatedData;
        // }
        this.sparql.getAllDatasetsInfo(null, this, this.route.snapshot.paramMap.get('datasetId'));
        if (this.datasetsInfo.datasetSelected !== undefined) {
            this.datasetsInfo.datasetSelected.relationsTableDataSource.sort = this.sort;
            console.log('ngOnInit dataset-details: datasetSelected.relationsTableDataSource sorted');
        }
        else {
            console.log('ngOnInit dataset-details: datasetSelected undefined');
        }
        console.log('after ngOnInit dataset-detail. datasetsInfo:');
        console.log(this.datasetsInfo);
    };
    DatasetDetailsComponent.prototype.applyFilterRelationsTable = function (filterValue) {
        this.datasetsInfo.datasetSelected.relationsTableDataSource.filter = filterValue.trim().toLowerCase();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], DatasetDetailsComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]])
    ], DatasetDetailsComponent.prototype, "matSort", null);
    DatasetDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dataset-details',
            template: __webpack_require__(/*! ./dataset-details.component.html */ "./src/app/dataset-details/dataset-details.component.html"),
            styles: [__webpack_require__(/*! ./dataset-details.component.scss */ "./src/app/dataset-details/dataset-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _sparql_service__WEBPACK_IMPORTED_MODULE_5__["SparqlService"],
            _datasets_info_service__WEBPACK_IMPORTED_MODULE_4__["DatasetsInfoService"]])
    ], DatasetDetailsComponent);
    return DatasetDetailsComponent;
}());



/***/ }),

/***/ "./src/app/datasets-overview/datasets-overview.component.html":
/*!********************************************************************!*\
  !*** ./src/app/datasets-overview/datasets-overview.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainLayout\" style=\"margin-right: 20px; margin-left: 20px;\">\n  <h1 class=\"mat-display-1\" style=\"padding-bottom: 15px;\">\n    Overview of ncats-red-kg datasets\n  </h1>\n\n  <mat-card class=\"mat-elevation-z6\">\n    <mat-form-field>\n      <input matInput (keyup)=\"applyFilterTable($event.target.value)\" placeholder=\"Filter\"/>\n    </mat-form-field>\n\n    <mat-table #table [dataSource]=\"datasetsInfo.datasetsTableDataSource\" matSort>\n      <ng-container matColumnDef=\"{{column.id}}\" *ngFor=\"let column of columnNames\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> {{column.value}} </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\">\n          {{element[column.id]}}\n          <!-- <a fxFlexFill [routerLink]=\"'/dataset/'+element[column.id]\" class=\"mat-row-link\"></a> -->\n        </mat-cell>\n      </ng-container>\n\n      <!-- Expanded Content Column - The detail row is made up of this one column that spans across all columns ->\n      <ng-container matColumnDef=\"expandedDetail\">\n        <td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"columnsToDisplay.length\">\n          <div class=\"example-element-detail\"\n              [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\">\n            <div class=\"example-element-diagram\">\n              <div class=\"example-element-position\"> {{element.description.value}} </div>\n              <div class=\"example-element-symbol\"> {{element.symbol}} </div>\n              <div class=\"example-element-name\"> {{element.name}} </div>\n              <div class=\"example-element-weight\"> {{element.weight}} </div>\n            </div>\n            <div class=\"example-element-description\">\n              {{element.description}}\n              <span class=\"example-element-description-attribution\"> -- Wikipedia </span>\n            </div>\n          </div>\n        </td>\n      </ng-container-->\n\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\" \n        (click)=\"datasetsInfo.navigateTo(row.datasetId)\"\n        matTooltip=\"{{datasetsInfo.hashAll[row['datasetId']].description.value}}\"\n        aria-label=\"displays a tooltip\"></mat-row>\n    </mat-table>\n  </mat-card>\n\n</div>"

/***/ }),

/***/ "./src/app/datasets-overview/datasets-overview.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/datasets-overview/datasets-overview.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-row:hover {\n  background: #efefef;\n  cursor: pointer; }\n\ntable {\n  width: 100%; }\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%; }\n\n/deep/ .mat-tooltip {\n  font-size: 12px;\n  max-width: 700px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZlbW9uZXQva3Jha2VuL3JkZi1ncmFwaC1leHBsb3Jlci9zcmMvYXBwL2RhdGFzZXRzLW92ZXJ2aWV3L2RhdGFzZXRzLW92ZXJ2aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxXQUFXLEVBQUE7O0FBR2I7RUFDRSxlQUFlO0VBQ2YsV0FBVyxFQUFBOztBQUliO0VBQ0UsZUFBZTtFQUNmLDJCQUEyQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZGF0YXNldHMtb3ZlcnZpZXcvZGF0YXNldHMtb3ZlcnZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBIaWdobGlnaHQgcm93IHdoZW4gaG92ZXJcbi5tYXQtcm93OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4vLyBVc2UgL2RlZXAvIHRvIG92ZXJyaWRlIG1hdGVyaWFsXG4vZGVlcC8gLm1hdC10b29sdGlwIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXgtd2lkdGg6IDcwMHB4ICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/datasets-overview/datasets-overview.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/datasets-overview/datasets-overview.component.ts ***!
  \******************************************************************/
/*! exports provided: DatasetsOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatasetsOverviewComponent", function() { return DatasetsOverviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _datasets_info_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../datasets-info.service */ "./src/datasets-info.service.ts");
/* harmony import */ var _sparql_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../sparql.service */ "./src/sparql.service.ts");





var DatasetsOverviewComponent = /** @class */ (function () {
    function DatasetsOverviewComponent(sparql, datasetsInfo) {
        this.sparql = sparql;
        this.datasetsInfo = datasetsInfo;
        this.displayedColumns = [];
        this.columnNames = [
            { id: 'datasetId', value: 'Dataset' },
            { id: 'dateGenerated', value: 'Date generated' },
            { id: 'triples', value: '# of triples' },
            { id: 'entities', value: '# of entities' },
            { id: 'properties', value: '# of properties' },
            { id: 'classes', value: '# of classes' }
        ];
    }
    DatasetsOverviewComponent.prototype.ngOnInit = function () {
        this.displayedColumns = this.columnNames.map(function (x) { return x.id; });
        this.datasetsInfo.datasetSelected = null;
        this.sparql.getAllDatasetsInfo(this, null, null);
    };
    DatasetsOverviewComponent.prototype.applyFilterTable = function (filterValue) {
        this.datasetsInfo.datasetsTableDataSource.filter = filterValue.trim().toLowerCase();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], DatasetsOverviewComponent.prototype, "sort", void 0);
    DatasetsOverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-datasets-overview',
            template: __webpack_require__(/*! ./datasets-overview.component.html */ "./src/app/datasets-overview/datasets-overview.component.html"),
            styles: [__webpack_require__(/*! ./datasets-overview.component.scss */ "./src/app/datasets-overview/datasets-overview.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sparql_service__WEBPACK_IMPORTED_MODULE_4__["SparqlService"],
            _datasets_info_service__WEBPACK_IMPORTED_MODULE_3__["DatasetsInfoService"]])
    ], DatasetsOverviewComponent);
    return DatasetsOverviewComponent;
}());



/***/ }),

/***/ "./src/app/describe/describe.component.html":
/*!**************************************************!*\
  !*** ./src/app/describe/describe.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainLayout\" fxLayout=\"row\" fxLayoutAlign=\"center\">\n  <div fxLayout=\"column\" fxFlex=\"80%\" fxFlex.xs=\"100%\" fxLayoutWrap fxLayoutGap=\"3%\" style=\"text-align: left;\"\n  *ngIf=\"describeHash != undefined\">\n    <h1 class=\"mat-display-1\" style=\"text-align:center; padding-top: 20px; padding-bottom: 20px;\"\n    [innerHTML]=\"sparql.getUrlHtml(uriToDescribe)\">\n    </h1>\n\n    <!-- class=\"mat-elevation-z8\" -->\n    <mat-accordion [multi]=\"true\">\n      <mat-expansion-panel [expanded]=\"true\" class=\"mat-elevation-z6\"\n      *ngFor=\"let describeGraph of Object.keys(describeHash)\">\n        <mat-expansion-panel-header>\n          <div fxLayout=\"column\" fxFlex style=\"text-align: center; margin-top: 15px;\">\n            <span class=\"mat-headline\" [innerHTML]=\"sparql.getUrlHtml(describeGraph)\">\n            </span>\n          </div>\n        </mat-expansion-panel-header>\n\n        <mat-tab-group>\n          <mat-tab label=\"As subject\">\n            <div style=\"margin-top: 25px;\">\n              <div fxLayout=\"row\" fxLayoutWrap\n              *ngFor=\"let describeProperty of Object.keys(describeHash[describeGraph].asSubject)\">\n                <div fxFlex=\"50%\" style=\"text-align: right; padding-right: 60px;\">\n                  <h3 matLine [innerHTML]=\"sparql.getUrlHtml(describeProperty)\"></h3>\n                </div>\n                <mat-divider [vertical]=\"true\" style=\"margin-bottom: 15px; margin-top: 5px; margin-right: 20px;\"></mat-divider>\n                <div fxFlex=\"50%\">\n                  <h3 matLine style=\"margin-bottom: 5px;\"\n                  *ngFor=\"let describeAsSubject of describeHash[describeGraph].asSubject[describeProperty]\"\n                  [innerHTML]=\"sparql.getUrlHtml(describeAsSubject)\">\n                  </h3>\n                </div>\n              </div>\n            </div>\n          </mat-tab>\n\n          <mat-tab label=\"As predicate\">\n            <div style=\"text-align: center; margin-top: 20px;\">\n              <div fxLayout=\"row\" fxLayoutWrap\n              *ngFor=\"let describeSubject of Object.keys(describeHash[describeGraph].asPredicate)\">\n\n                <div fxFlex=\"33%\">\n                  <h3 matLine [innerHTML]=\"sparql.getUrlHtml(describeSubject)\"></h3>\n                </div>\n                <div fxFlex=\"33%\">\n                  <h3 matLine [innerHTML]=\"sparql.getUrlHtml(uriToDescribe)\"></h3>\n                </div>\n                <div fxFlex=\"33%\">\n                  <h3 matLine\n                  *ngFor=\"let describeAsPredicate of describeHash[describeGraph].asPredicate[describeSubject]\"\n                  [innerHTML]=\"sparql.getUrlHtml(describeAsPredicate)\">\n                  </h3>\n                </div>\n              </div>\n            </div>\n          </mat-tab>\n\n          <mat-tab label=\"As object\">\n            <div style=\"text-align: center;\">\n              <div fxLayout=\"row\" fxLayoutWrap style=\"padding-top: 20px; padding-bottom: 20px;\"\n              *ngFor=\"let describeProperty of Object.keys(describeHash[describeGraph].asObject)\">\n\n                <div fxFlex=\"33%\">\n                  <h3 matLine style=\"text-align: right; padding-right: 20px; margin-bottom: 5px;\"\n                  *ngFor=\"let describeAsObject of describeHash[describeGraph].asObject[describeProperty]\"\n                  [innerHTML]=\"sparql.getUrlHtml(describeAsObject)\">\n                  </h3>\n                </div>\n                <mat-divider [vertical]=\"true\" style=\"margin-bottom: 15px; margin-top: 5px; margin-right: 20px;\"></mat-divider>\n                <div fxFlex=\"33%\">\n                  <h3 matLine [innerHTML]=\"sparql.getUrlHtml(describeProperty)\"></h3>\n                </div>\n                <div fxFlex=\"33%\">\n                  <h3 matLine [innerHTML]=\"sparql.getUrlHtml(uriToDescribe)\"></h3>\n                </div>\n              </div>\n            </div>\n          </mat-tab>\n\n        </mat-tab-group>\n      </mat-expansion-panel>\n    </mat-accordion>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/describe/describe.component.scss":
/*!**************************************************!*\
  !*** ./src/app/describe/describe.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rlc2NyaWJlL2Rlc2NyaWJlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/describe/describe.component.ts":
/*!************************************************!*\
  !*** ./src/app/describe/describe.component.ts ***!
  \************************************************/
/*! exports provided: DescribeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescribeComponent", function() { return DescribeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sparql_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../sparql.service */ "./src/sparql.service.ts");




var DescribeComponent = /** @class */ (function () {
    function DescribeComponent(activatedRoute, sparql) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.sparql = sparql;
        this.Object = Object; // To iterate over hash in html
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.uriToDescribe = params.uri;
        });
    }
    DescribeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sparql.describeUri(this.uriToDescribe)
            .subscribe(function (data) {
            var sparqlResultArray = data['results']['bindings'];
            _this.describeHash = {};
            // Build describe object
            // {graph1: {asSubject: {property1: [object1, object2]}, asObject: {property1: [subject1]}}}
            sparqlResultArray.forEach(function (sparqlResultRow, index) {
                // SPO case. Described URI is the subject
                if (!('subject' in sparqlResultRow)) {
                    if (!(sparqlResultRow.graph.value in _this.describeHash)) {
                        _this.describeHash[sparqlResultRow.graph.value] = { asSubject: {}, asObject: {}, asPredicate: {} };
                    }
                    if (!(sparqlResultRow.predicate.value in _this.describeHash[sparqlResultRow.graph.value].asSubject)) {
                        _this.describeHash[sparqlResultRow.graph.value].asSubject[sparqlResultRow.predicate.value] = [];
                    }
                    if (_this.describeHash[sparqlResultRow.graph.value].asSubject[sparqlResultRow.predicate.value].length < 5) {
                        _this.describeHash[sparqlResultRow.graph.value].asSubject[sparqlResultRow.predicate.value].push(sparqlResultRow.object.value);
                    }
                }
                // OPS case. Described URI is the object
                if (!('object' in sparqlResultRow)) {
                    if (!(sparqlResultRow.graph.value in _this.describeHash)) {
                        _this.describeHash[sparqlResultRow.graph.value] = { asSubject: {}, asObject: {}, asPredicate: {} };
                    }
                    if (!(sparqlResultRow.predicate.value in _this.describeHash[sparqlResultRow.graph.value].asObject)) {
                        _this.describeHash[sparqlResultRow.graph.value].asObject[sparqlResultRow.predicate.value] = [];
                    }
                    if (_this.describeHash[sparqlResultRow.graph.value].asObject[sparqlResultRow.predicate.value].length < 5) {
                        _this.describeHash[sparqlResultRow.graph.value].asObject[sparqlResultRow.predicate.value].push(sparqlResultRow.subject.value);
                    }
                }
                // Described URI is the predicate (PSO?)
                if (!('predicate' in sparqlResultRow)) {
                    if (!(sparqlResultRow.graph.value in _this.describeHash)) {
                        _this.describeHash[sparqlResultRow.graph.value] = { asSubject: {}, asObject: {}, asPredicate: {} };
                    }
                    if (!(sparqlResultRow.subject.value in _this.describeHash[sparqlResultRow.graph.value].asPredicate)) {
                        _this.describeHash[sparqlResultRow.graph.value].asPredicate[sparqlResultRow.subject.value] = [];
                    }
                    if (_this.describeHash[sparqlResultRow.graph.value].asPredicate[sparqlResultRow.subject.value].length < 5) {
                        _this.describeHash[sparqlResultRow.graph.value].asPredicate[sparqlResultRow.subject.value].push(sparqlResultRow.object.value);
                    }
                }
            });
            console.log('describe object:');
            console.log(_this.describeHash);
        });
    };
    DescribeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-describe',
            template: __webpack_require__(/*! ./describe.component.html */ "./src/app/describe/describe.component.html"),
            styles: [__webpack_require__(/*! ./describe.component.scss */ "./src/app/describe/describe.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _sparql_service__WEBPACK_IMPORTED_MODULE_3__["SparqlService"]])
    ], DescribeComponent);
    return DescribeComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <footer style=\"background-color: #ddd;\" class=\"footer\">\n  <div class=\"container\">\n      <p class=\"footer-copyright\" i18n=\"footer | copyright\">© 2017-2019 foundation Aphasia Help</p>\n      <p i18n=\"footer | compliant\">This website is compliant to the <a href=\"https://www.nvlf.nl/stream/richtlijnafasieck18-03.pdf\">Logopedische richtlijn Diagnostiek en behandeling van afasie bij volwassenen</a></p>\n      <div class=\"column cc-footer-license\">\n        <div class=\"license-icons\">\n        <a class=\"text-secondary\" rel=\"license\" href=\"https://creativecommons.org/licenses/by/4.0/\" title=\"Creative Commons Attribution 4.0 International license\" target=\"_blank\">\n          <img src=\"/assets/images/cc-by-nc.svg\" alt=\"the team\"> \n        </a>\n        </div>\n        <aside>\n        <div xmlns:cc=\"https://creativecommons.org/ns#\" about=\"https://creativecommons.org\">\n        <p i18n=\"footer | creative comments\">Except where otherwise <a class=\"subfoot text-secondary\" href=\"/policies#license\">noted</a>, content on this site is licensed under a <a class=\"subfoot text-secondary\" href=\"https://creativecommons.org/licenses/by/4.0/\" rel=\"license\">Creative Commons Attribution 4.0 International license</a>.</p>\n        </div>\n        </aside>\n      </div>\n  </div>\n</footer> -->\n\n<!-- class primaryColorBG -->\n<footer class=\"docs-footer primaryColorBG\"\n        [class.is-next-version]=\"isNextVersion\">\n  <div class=\"docs-footer-list\">\n    <div class=\"docs-footer-logo\">\n      <p i18n=\"footer | creative comments\">Except where otherwise <a class=\"subfoot text-secondary\" href=\"/policies#license\">noted</a>,\n        content on this site is licensed under a <a class=\"subfoot text-secondary\" href=\"https://raw.githubusercontent.com/MaastrichtU-IDS/rdf-graph-explorer/master/LICENSE\" rel=\"license\">\n          MIT license</a>.\n      </p>\n    </div>\n\n    <div class=\"docs-footer-version\">\n      <a class=\"text-secondary\" rel=\"license\" title=\"MIT license\" target=\"_blank\"\n      href=\"https://raw.githubusercontent.com/MaastrichtU-IDS/rdf-graph-explorer/master/LICENSE\">\n        <img src=\"/assets/images/mit_license.png\" alt=\"MIT license\" style=\"max-height: 60px;\"> \n      </a>\n    </div>\n\n    <div class=\"docs-footer-copyright\">\n      <!-- <span>Institute of Data Science at Maastricht University ©2018-2019</span> -->\n      <p i18n=\"footer | compliant\">\n        Institute of Data Science at Maastricht University ©2018-2019\n      </p>\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".docs-footer {\n  padding: 12px;\n  font-size: 16px;\n  margin-top: 40px; }\n\n.docs-footer-list {\n  align-items: center;\n  display: flex;\n  flex-flow: row wrap;\n  padding: 8px; }\n\n.docs-footer-logo {\n  flex: 1; }\n\n.docs-footer-angular-logo {\n  height: 50px; }\n\n.docs-footer-version {\n  flex: 1;\n  text-align: center; }\n\n.docs-footer-copyright {\n  display: flex;\n  flex: 1;\n  justify-content: flex-end;\n  flex-direction: column;\n  min-width: 225px;\n  text-align: center; }\n\n.docs-footer-logo span {\n  display: inline-block;\n  line-height: 50px;\n  margin: 0 40px;\n  vertical-align: bottom; }\n\n.docs-footer-logo span a {\n    font-size: 16px;\n    padding: 0; }\n\na {\n  text-decoration: none;\n  color: inherit; }\n\na:hover {\n    text-decoration: underline; }\n\n@media screen and (max-width: 884px) {\n  .docs-footer-list {\n    flex-direction: column; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZlbW9uZXQva3Jha2VuL3JkZi1ncmFwaC1leHBsb3Jlci9zcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhO0VBQ2IsZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFlBQVksRUFBQTs7QUFHZDtFQUNFLE9BQU8sRUFBQTs7QUFHVDtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLE9BQU87RUFDUCxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxhQUFhO0VBQ2IsT0FBTztFQUNQLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLHNCQUFzQixFQUFBOztBQUp4QjtJQU9JLGVBQWU7SUFDZixVQUFVLEVBQUE7O0FBSWQ7RUFDRSxxQkFBcUI7RUFDckIsY0FBYyxFQUFBOztBQUZoQjtJQUtJLDBCQUEwQixFQUFBOztBQUk5QjtFQUNFO0lBQ0Usc0JBQXNCLEVBQUEsRUFDdkIiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRvY3MtZm9vdGVyIHtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICB9XG4gIFxuICAuZG9jcy1mb290ZXItbGlzdCB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gICAgcGFkZGluZzogOHB4O1xuICB9XG4gIFxuICAuZG9jcy1mb290ZXItbG9nbyB7XG4gICAgZmxleDogMTtcbiAgfVxuICBcbiAgLmRvY3MtZm9vdGVyLWFuZ3VsYXItbG9nbyB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICB9XG4gIFxuICAuZG9jcy1mb290ZXItdmVyc2lvbiB7XG4gICAgZmxleDogMTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5kb2NzLWZvb3Rlci1jb3B5cmlnaHQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleDogMTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWluLXdpZHRoOiAyMjVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5kb2NzLWZvb3Rlci1sb2dvIHNwYW4ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICBtYXJnaW46IDAgNDBweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICBcbiAgICBhIHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuICB9XG4gIFxuICBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gIFxuICAgICY6aG92ZXIge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgfVxuICB9XG4gIFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4ODRweCl7XG4gICAgLmRvY3MtZm9vdGVyLWxpc3Qge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/main-nav/main-nav.component.css":
/*!*************************************************!*\
  !*** ./src/app/main-nav/main-nav.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  height: 100%;\n}\n\n.sidenav {\n  width: 250px;\n  box-shadow: 3px 0 6px rgba(0,0,0,.24);\n}\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\n.navbar-button {\n  font-size: 17px;\n}\n\n.flex-spacer {\n  flex-grow: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1uYXYvbWFpbi1uYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSx3QkFBZ0I7RUFBaEIsZ0JBQWdCO0VBQ2hCLE1BQU07RUFDTixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvbWFpbi1uYXYvbWFpbi1uYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlbmF2LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnNpZGVuYXYge1xuICB3aWR0aDogMjUwcHg7XG4gIGJveC1zaGFkb3c6IDNweCAwIDZweCByZ2JhKDAsMCwwLC4yNCk7XG59XG5cbi5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTtcbn1cblxuLm5hdmJhci1idXR0b24ge1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbi5mbGV4LXNwYWNlciB7XG4gIGZsZXgtZ3JvdzogMTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/main-nav/main-nav.component.html":
/*!**************************************************!*\
  !*** ./src/app/main-nav/main-nav.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"mat-elevation-z6\">\n  <button mat-flat-button class=\"navbar-button\" routerLink=\"/\">rdf-graph-explorer</button>\n  <a mat-button class=\"navbar-button\" routerLink=\"/\" aria-label=\"Explore datasets\">\n    <mat-icon mat-list-icon>explore</mat-icon>\n    Explore datasets\n  </a>\n  <a mat-button class=\"navbar-button\" routerLink=\"/sparql\" aria-label=\"YASGUI SPARQL\">\n    <mat-icon mat-list-icon>share</mat-icon>\n    Run SPARQL queries\n  </a>\n  <a mat-button class=\"navbar-button\" routerLink=\"/describe\" [queryParams]=\"{uri:'http://identifiers.org/uniprot/O00222'}\" aria-label=\"Describe URI\">\n    <mat-icon mat-list-icon>search</mat-icon>\n    Describe URI\n  </a>\n  <div class=\"flex-spacer\"></div>\n  <a mat-button class=\"navbar-button\" href=\"https://github.com/MaastrichtU-IDS/rdf-graph-explorer\" target=\"_blank\" aria-label=\"Source on GitHub\">\n    <mat-icon mat-list-icon>code</mat-icon>\n    Source on GitHub\n  </a>\n</mat-toolbar>\n\n\n  <!-- Dropdown menu\n  <button mat-button [matMenuTriggerFor]=\"menu\">\n    <mat-icon mat-list-icon>more_horiz</mat-icon>\n    More\n  </button>\n  <mat-menu #menu=\"matMenu\">\n    <button mat-menu-item aria-label=\"Contact\">\n      <a href=\"contact\">\n        <mat-icon mat-list-icon>email</mat-icon>\n        <span mat-h1>Contact</span>\n      </a>\n    </button>\n  </mat-menu> -->"

/***/ }),

/***/ "./src/app/main-nav/main-nav.component.ts":
/*!************************************************!*\
  !*** ./src/app/main-nav/main-nav.component.ts ***!
  \************************************************/
/*! exports provided: MainNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavComponent", function() { return MainNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _datasets_info_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../datasets-info.service */ "./src/datasets-info.service.ts");





var MainNavComponent = /** @class */ (function () {
    function MainNavComponent(breakpointObserver, datasetsInfo) {
        this.breakpointObserver = breakpointObserver;
        this.datasetsInfo = datasetsInfo;
        this.title = 'rdf-graph-explorer';
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result.matches; }));
    }
    MainNavComponent.prototype.applyFilterNav = function (filterValue) {
        this.datasetsInfo.arrayDatasetsNav = Object.keys(this.datasetsInfo.hashAll);
        this.datasetsInfo.arrayDatasetsNav = this.datasetsInfo.arrayDatasetsNav
            .filter(function (item) { return item.includes(filterValue.trim().toLowerCase()); });
        console.log('after filter');
        console.log(this.datasetsInfo.arrayDatasetsNav);
    };
    MainNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-nav',
            template: __webpack_require__(/*! ./main-nav.component.html */ "./src/app/main-nav/main-nav.component.html"),
            styles: [__webpack_require__(/*! ./main-nav.component.css */ "./src/app/main-nav/main-nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"],
            _datasets_info_service__WEBPACK_IMPORTED_MODULE_4__["DatasetsInfoService"]])
    ], MainNavComponent);
    return MainNavComponent;
}());



/***/ }),

/***/ "./src/app/sparql/sparql.component.html":
/*!**********************************************!*\
  !*** ./src/app/sparql/sparql.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center\">\n  <div fxLayout=\"column\" fxFlex=\"80%\" fxFlex.xs=\"100%\" fxLayoutWrap fxLayoutGap=\"1.5%\"\n  style=\"text-align: left; margin-bottom: 20px; margin-top: 35px; \">\n    <div id=\"yasguiDiv\"></div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/sparql/sparql.component.scss":
/*!**********************************************!*\
  !*** ./src/app/sparql/sparql.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NwYXJxbC9zcGFycWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/sparql/sparql.component.ts":
/*!********************************************!*\
  !*** ./src/app/sparql/sparql.component.ts ***!
  \********************************************/
/*! exports provided: SparqlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SparqlComponent", function() { return SparqlComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SparqlComponent = /** @class */ (function () {
    function SparqlComponent() {
        this.statisticsQuery = "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n  PREFIX dct: <http://purl.org/dc/terms/>\n  PREFIX bl: <http://w3id.org/biolink/vocab/>\n  PREFIX dctypes: <http://purl.org/dc/dcmitype/>\n  PREFIX idot: <http://identifiers.org/idot/>\n  PREFIX dcat: <http://www.w3.org/ns/dcat#>\n  PREFIX void: <http://rdfs.org/ns/void#>\n  SELECT distinct ?source ?statements ?entities ?properties ?classes ?graph\n  WHERE {\n    GRAPH ?g {\n      ?dataset a dctypes:Dataset ; idot:preferredPrefix ?source .\n      ?version dct:isVersionOf ?dataset ; dcat:distribution ?rdfDistribution .\n      ?rdfDistribution a void:Dataset ;\n        dcat:accessURL ?graph ;\n        void:triples ?statements ;\n        void:entities ?entities ;\n        void:properties ?properties .\n      ?rdfDistribution void:classPartition [\n        void:class rdfs:Class ;\n        void:distinctSubjects ?classes\n      ] .\n    }\n  } ORDER BY DESC(?statements)";
        this.entitiesRelationsQuery = "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n  PREFIX dct: <http://purl.org/dc/terms/>\n  PREFIX dctypes: <http://purl.org/dc/dcmitype/>\n  PREFIX idot: <http://identifiers.org/idot/>\n  PREFIX dcat: <http://www.w3.org/ns/dcat#>\n  PREFIX void: <http://rdfs.org/ns/void#>\n  PREFIX void-ext: <http://ldf.fi/void-ext#>\n  SELECT distinct ?source ?classCount1 ?class1 ?relationWith ?classCount2 ?class2\n  WHERE {\n    GRAPH ?g {\n      ?dataset a dctypes:Dataset ; idot:preferredPrefix ?source .\n      ?version dct:isVersionOf ?dataset ; dcat:distribution ?rdfDistribution .\n      ?rdfDistribution a void:Dataset ;\n        dcat:accessURL ?graph .\n      ?rdfDistribution void:classPartition [\n        void:class rdfs:Class ;\n        void:distinctSubjects ?classes\n      ] .\n      ?rdfDistribution void:propertyPartition [\n          void:property ?relationWith ;\n          void:classPartition [\n              void:class ?class1 ;\n              void:distinctSubjects ?classCount1 ;\n          ];\n          void-ext:objectClassPartition [\n            void:class ?class2 ;\n            void:distinctObjects ?classCount2 ;\n      ]] .\n    }\n  } ORDER BY ?source DESC(?classCount1) DESC(?classCount2)";
    }
    SparqlComponent.prototype.ngAfterViewInit = function () {
        YASGUI.defaults.yasqe.sparql.endpoint = 'http://graphdb.dumontierlab.com/repositories/test';
        // var config = {"api":{"urlShortener":"//yasgui.org/shorten"}};
        var yasgui = YASGUI(document.getElementById('yasguiDiv'));
        yasgui.addTab('statisticsTab');
        yasgui.selectTab('statisticsTab').rename('Graphs statistics');
        yasgui.selectTab('statisticsTab').setQuery(this.statisticsQuery);
        yasgui.addTab('entitiesRelationsTab');
        yasgui.selectTab('entitiesRelationsTab').rename('Explore entities relations');
        yasgui.selectTab('entitiesRelationsTab').setQuery(this.entitiesRelationsQuery);
    };
    SparqlComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sparql',
            template: __webpack_require__(/*! ./sparql.component.html */ "./src/app/sparql/sparql.component.html"),
            styles: [__webpack_require__(/*! ./sparql.component.scss */ "./src/app/sparql/sparql.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SparqlComponent);
    return SparqlComponent;
}());



/***/ }),

/***/ "./src/datasets-info.service.ts":
/*!**************************************!*\
  !*** ./src/datasets-info.service.ts ***!
  \**************************************/
/*! exports provided: DatasetsInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatasetsInfoService", function() { return DatasetsInfoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var DatasetsInfoService = /** @class */ (function () {
    function DatasetsInfoService(router) {
        this.router = router;
        this.hashAll = {};
    }
    DatasetsInfoService.prototype.navigateTo = function (dataset) {
        var urlPath = '/dataset/' + dataset;
        if (dataset == '') {
            urlPath = '';
        }
        // Keep only the info of the selected dataset
        this.datasetSelected = this.datasets.filter(function (datasetFilter) { return datasetFilter.source.value === dataset; })[0];
        this.router.navigateByData({
            url: [urlPath],
            data: { datasetsInfo: this }
        });
    };
    DatasetsInfoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DatasetsInfoService);
    return DatasetsInfoService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/sparql.service.ts":
/*!*******************************!*\
  !*** ./src/sparql.service.ts ***!
  \*******************************/
/*! exports provided: SparqlService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SparqlService", function() { return SparqlService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _datasets_info_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./datasets-info.service */ "./src/datasets-info.service.ts");






var SparqlService = /** @class */ (function () {
    function SparqlService(http, datasetsInfo) {
        this.http = http;
        this.datasetsInfo = datasetsInfo;
        // TODO: make it a parameter
        this.sparqlEndpoint = 'http://graphdb.dumontierlab.com/repositories/ncats-red-kg';
        this.prefixRegistry = {
            bl: 'http://w3id.org/biolink/vocab/',
            biolink: 'https://w3id.org/biolink/vocab/',
            d2s: 'https://w3id.org/data2services/',
            rdf: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
            rdfs: 'http://www.w3.org/2000/01/rdf-schema#',
            dc: 'http://purl.org/dc/elements/1.1/',
            obo: 'http://purl.obolibrary.org/obo/',
            owl: 'http://www.w3.org/2002/07/owl#'
        };
    }
    SparqlService.prototype.getAllDatasetsInfo = function (overviewComponent, detailComponent, datasetId) {
        var _this = this;
        console.log('getAllDatasetsInfo (execute SPARQL query)');
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-type': 'application/x-www-form-urlencoded'
            //'Accept': 'application/json'
        });
        // Define SPARQL query to retrieve informations on datasets
        var datasetSparqlHttpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('query', "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n      PREFIX dct: <http://purl.org/dc/terms/>\n      PREFIX bl: <http://w3id.org/biolink/vocab/>\n      PREFIX dctypes: <http://purl.org/dc/dcmitype/>\n      PREFIX idot: <http://identifiers.org/idot/>\n      PREFIX dcat: <http://www.w3.org/ns/dcat#>\n      PREFIX void: <http://rdfs.org/ns/void#>\n      PREFIX dc: <http://purl.org/dc/elements/1.1/>\n      PREFIX foaf: <http://xmlns.com/foaf/0.1/>\n      PREFIX void-ext: <http://ldf.fi/void-ext#>\n      SELECT DISTINCT ?source ?description ?homepage ?dateGenerated ?statements ?entities ?properties ?classes ?graph\n      WHERE {\n        GRAPH ?g {\n          ?dataset a dctypes:Dataset ;\n            dct:description ?description ;\n            foaf:page ?homepage ;\n            idot:preferredPrefix ?source .\n          ?version dct:isVersionOf ?dataset ; \n            dcat:distribution ?rdfDistribution .\n          ?rdfDistribution a void:Dataset ;\n            dcat:accessURL ?graph ;\n            void:triples ?statements ;\n            void:entities ?entities ;\n            void:properties ?properties ;\n            dct:issued ?dateGenerated .\n          ?rdfDistribution void:classPartition [\n            void:class rdfs:Class ;\n            void:distinctSubjects ?classes\n          ] .\n        }\n      } ORDER BY DESC(?statements)")
            .set('format', 'json');
        var relationSparqlHttpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('query', "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n      PREFIX dct: <http://purl.org/dc/terms/>\n      PREFIX bl: <http://w3id.org/biolink/vocab/>\n      PREFIX dctypes: <http://purl.org/dc/dcmitype/>\n      PREFIX idot: <http://identifiers.org/idot/>\n      PREFIX dcat: <http://www.w3.org/ns/dcat#>\n      PREFIX void: <http://rdfs.org/ns/void#>\n      PREFIX dc: <http://purl.org/dc/elements/1.1/>\n      PREFIX foaf: <http://xmlns.com/foaf/0.1/>\n      PREFIX void-ext: <http://ldf.fi/void-ext#>\n      SELECT DISTINCT ?source ?graph ?classCount1 ?class1 ?relationWith ?classCount2 ?class2\n      WHERE {\n        GRAPH ?g {\n          ?dataset a dctypes:Dataset ;\n            idot:preferredPrefix ?source .\n          ?version dct:isVersionOf ?dataset ; \n            dcat:distribution ?rdfDistribution .\n          ?rdfDistribution a void:Dataset ;\n            dcat:accessURL ?graph .\n          ?rdfDistribution void:propertyPartition [\n              void:property ?relationWith ;\n              void:classPartition [\n                  void:class ?class1 ;\n                  void:distinctSubjects ?classCount1 ;\n              ];\n              void-ext:objectClassPartition [\n                void:class ?class2 ;\n                void:distinctObjects ?classCount2 ;\n          ]] .\n        }\n      } ORDER BY DESC(?classCount1)")
            .set('format', 'json');
        // Execute SPARQL query using HTTP GET
        this.http.get(this.sparqlEndpoint, { params: datasetSparqlHttpParams, headers: httpHeaders })
            .subscribe(function (data) {
            var sparqlResultArray = data['results']['bindings'];
            _this.datasetsInfo.hashAll = {};
            // Map the SPARQL query results to an object for each dataset in datasetsInfo.hashAll
            sparqlResultArray.forEach(function (sparqlResultRow, index) {
                var datasetId = sparqlResultRow.source.value;
                if (_this.datasetsInfo.hashAll[datasetId] == null) {
                    _this.datasetsInfo.hashAll[datasetId] = {};
                    _this.datasetsInfo.hashAll[datasetId].datasetId = datasetId;
                    _this.datasetsInfo.hashAll[datasetId].source = sparqlResultRow.source;
                    _this.datasetsInfo.hashAll[datasetId].relationsArray = [];
                }
                _this.datasetsInfo.hashAll[datasetId].description = sparqlResultRow.description;
                _this.datasetsInfo.hashAll[datasetId].homepage = sparqlResultRow.homepage;
                _this.datasetsInfo.hashAll[datasetId].dateGenerated = sparqlResultRow.dateGenerated;
                _this.datasetsInfo.hashAll[datasetId].statements = sparqlResultRow.statements;
                _this.datasetsInfo.hashAll[datasetId].entities = sparqlResultRow.entities;
                _this.datasetsInfo.hashAll[datasetId].properties = sparqlResultRow.properties;
                _this.datasetsInfo.hashAll[datasetId].classes = sparqlResultRow.classes;
                _this.datasetsInfo.hashAll[datasetId].graph = sparqlResultRow.graph;
                // Be careful when multiple entries for a source
                var dateGenerated = new Date(sparqlResultRow.dateGenerated.value);
                _this.datasetsInfo.hashAll[datasetId].displayDateGenerated = dateGenerated.getFullYear() + '-'
                    + (dateGenerated.getMonth() + 1).toString() + '-' + dateGenerated.getDate().toString();
                // TO REMOVE: if (this.datasetsInfo.hashAll[datasetId].relationsArray == null) {
                //  this.datasetsInfo.hashAll[datasetId].relationsArray = [];
                //}
            });
            // Get relations for each dataset
            _this.http.get(_this.sparqlEndpoint, { params: relationSparqlHttpParams, headers: httpHeaders })
                .subscribe(function (relationData) {
                var relationSparqlResultArray = relationData['results']['bindings'];
                relationSparqlResultArray.forEach(function (sparqlResultRow, index) {
                    var datasetId = sparqlResultRow.source.value;
                    _this.datasetsInfo.hashAll[datasetId].relationsArray.push({
                        classCount1: sparqlResultRow.classCount1,
                        class1: sparqlResultRow.class1,
                        relationWith: sparqlResultRow.relationWith,
                        classCount2: sparqlResultRow.classCount2,
                        class2: sparqlResultRow.class2
                    });
                });
                // Now generate array and tables for overview and relations from hash to avoid duplicates
                _this.datasetsInfo.arrayDatasetsNav = Object.keys(_this.datasetsInfo.hashAll);
                _this.datasetsInfo.datasets = [];
                var tableArr = [];
                var _loop_1 = function (key) {
                    if (_this.datasetsInfo.hashAll.hasOwnProperty(key)) {
                        // Add dataset hash to an array of datasets (to have array and hash available)
                        _this.datasetsInfo.datasets.push(_this.datasetsInfo.hashAll[key]);
                        // Generate the array for datasets details tables
                        tableArr.push({ datasetId: _this.datasetsInfo.hashAll[key].source.value,
                            dateGenerated: _this.datasetsInfo.hashAll[key].displayDateGenerated,
                            triples: _this.datasetsInfo.hashAll[key].statements.value,
                            entities: _this.datasetsInfo.hashAll[key].entities.value,
                            properties: _this.datasetsInfo.hashAll[key].properties.value,
                            classes: _this.datasetsInfo.hashAll[key].classes.value
                        });
                        var relationsArr_1 = [];
                        var relationCount_1 = 0;
                        _this.datasetsInfo.hashAll[key].ngxGraph = { nodes: [], edges: [] };
                        _this.datasetsInfo.hashAll[key].relationsArray.forEach(function (element) {
                            // Generate the array for datasets relations tables
                            relationsArr_1.push({
                                classCount1: element.classCount1.value,
                                class1: element.class1.value,
                                relationWith: element.relationWith.value,
                                class2: element.class2.value,
                                classCount2: element.classCount2.value
                            });
                            // Generate the hash for the ngx-graph
                            console.log('hashes:');
                            console.log(_this.cleanUrl(element.class1.value));
                            console.log(_this.cleanUrl(element.class2.value));
                            // TODO: We need to generate a hash to make sure nodes are uniques. Or try 2 SPARQL queries
                            if (_this.cleanUrl(element.class1.value) !== _this.cleanUrl(element.class2.value)) {
                                relationCount_1 = relationCount_1 + 1;
                                // avoid duplicate nodes
                                if (_this.datasetsInfo.hashAll[key].ngxGraph.nodes.findIndex(function (x) { return x.id === _this.cleanUrl(element.class1.value); }) === -1) {
                                    _this.datasetsInfo.hashAll[key].ngxGraph.nodes.push({ data: { id: _this.cleanUrl(element.class1.value), name: element.class1.value,
                                            faveColor: '#F5A45D', faveShape: 'rectangle' } });
                                }
                                if (_this.datasetsInfo.hashAll[key].ngxGraph.nodes.findIndex(function (x) { return x.id === _this.cleanUrl(element.class2.value); }) === -1) {
                                    _this.datasetsInfo.hashAll[key].ngxGraph.nodes.push({ data: { id: _this.cleanUrl(element.class2.value), name: element.class2.value,
                                            faveColor: '#F5A45D', faveShape: 'rectangle' } });
                                }
                                _this.datasetsInfo.hashAll[key].ngxGraph.edges.push({ data: { source: _this.cleanUrl(element.class1.value), faveColor: '#6FB1FC',
                                        target: _this.cleanUrl(element.class2.value) } }
                                // {
                                //   id: relationCount.toString(),
                                //   source: this.cleanUrl(element.class1.value),
                                //   target: this.cleanUrl(element.class2.value),
                                //   label: element.relationWith.value
                                // }
                                );
                            }
                        });
                        _this.datasetsInfo.hashAll[key].relationsTableDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](relationsArr_1);
                        // this.datasetsInfo.datasetSelected.relationsTableDataSource = new MatTableDataSource(relationsArr);
                        if (detailComponent != null) {
                            // this.datasetsInfo.hashAll[key].relationsTableDataSource.sort = detailComponent.sort;
                            console.log('detailComponent:');
                            console.log(detailComponent);
                            // console.log(detailComponent.sortRelations);
                            // this.datasetsInfo.datasetSelected.relationsTableDataSource.sort = detailComponent['sortRelations'];
                            // This one should work but says detailComponent is undefined:
                            // this.datasetsInfo.hashAll[key].relationsTableDataSource.sortRelations = detailComponent.sortRelations;
                            // this.datasetsInfo.hashAll[key].relationsTableDataSource.sort = detailComponent.sort;
                            _this.datasetsInfo.hashAll[key].relationsTableDataSource.sort = detailComponent.sort;
                        }
                    }
                };
                for (var key in _this.datasetsInfo.hashAll) {
                    _loop_1(key);
                }
                if (datasetId != null) {
                    _this.datasetsInfo.datasetSelected = _this.datasetsInfo.hashAll[datasetId];
                }
                _this.datasetsInfo.datasetsTableDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](tableArr);
                // Sort for overview and define selected dataset if a dataset has been selected
                if (overviewComponent != null) {
                    console.log('overviewComponent:');
                    console.log(overviewComponent);
                    console.log(overviewComponent.sort);
                    _this.datasetsInfo.datasetsTableDataSource.sort = overviewComponent.sort;
                }
                console.log('After getting the SPARQL query in sparql.service. datasetsInfo:');
                console.log(_this.datasetsInfo);
            });
        });
    };
    SparqlService.prototype.describeUri = function (uriToDescribe) {
        console.log('DescribeURI: ' + uriToDescribe);
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-type': 'application/x-www-form-urlencoded'
        });
        // Define SPARQL query to retrieve statements about the URI to describe
        var describeSparqlHttpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('query', "SELECT DISTINCT ?subject ?predicate ?object ?graph WHERE {\n        {\n            GRAPH ?graph {\n              <" + uriToDescribe + "> ?predicate ?object .\n            }\n        } UNION {\n            GRAPH ?graph {\n              ?subject ?predicate <" + uriToDescribe + "> .\n            }\n        } UNION {\n          GRAPH ?graph {\n            ?subject <" + uriToDescribe + "> ?object .\n          }\n      }\n    } LIMIT 1000").set('format', 'json');
        // Execute SPARQL query using HTTP GET
        return this.http.get(this.sparqlEndpoint, { params: describeSparqlHttpParams, headers: httpHeaders });
    };
    SparqlService.prototype.cleanUrl = function (urlToClean) {
        return urlToClean.replace(/\//gi, '').replace(':', '');
    };
    // resolve URI namespace to use a prefix and add link to full URI
    SparqlService.prototype.getUrlHtml = function (urlToRender) {
        if (urlToRender.startsWith('http://') || urlToRender.startsWith('https://')) {
            // TODO: make describe endpoint URL it a variable
            var prefixUrlToRender = "<a href=\"http://localhost:4200/describe?uri="
                + urlToRender + "\" class=\"describeUrl\">";
            // console.log(prefixUrlToRender);
            for (var prefix in this.prefixRegistry) {
                if (urlToRender.startsWith(this.prefixRegistry[prefix])) {
                    return prefixUrlToRender + urlToRender.replace(this.prefixRegistry[prefix], prefix + ':') + '</a>';
                }
            }
            return prefixUrlToRender + urlToRender + '</a>';
        }
        return urlToRender;
    };
    SparqlService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _datasets_info_service__WEBPACK_IMPORTED_MODULE_5__["DatasetsInfoService"]])
    ], SparqlService);
    return SparqlService;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/vemonet/kraken/rdf-graph-explorer/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map