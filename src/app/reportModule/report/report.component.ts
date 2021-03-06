import { Component, ViewChild } from '@angular/core';
import { WebDataRocksPivot } from "../WebDataRocks/webdatarocks.angular4";
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { ApiService } from '../../services/common/common.service';
import {User} from '../../authentication/user.model';
import { AuthService } from '../../authentication/auth.service';
import { VendorService } from '../../services/vendor/vendor.service';
import { ReplaySubject } from 'rxjs';
import { ReportService } from '../../services/report/report.service';
import { GlobalUrl } from '../../utility/GlobalUrl';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent {

  // enableSearch: Boolean = false;
  stprMain: FormGroup;
  isdate: Boolean = false;
  isdatechange: Boolean = false;
  user: User;
  reportList: Array<Object>;
  planList: Array<Object>;
  keywordList: Array<Object>;
  referalMerchantList: Array<Object>;
  referalAdminList: Array<Object>;
  selectValue: number;
  selectedReport: number;
  reportFromDate: boolean = false;
  ReportVendorName: boolean = false;
  ReportPlanName: boolean = false;
  toggleReport: boolean = false;
  dateFormat: string;
  selectedVendorPk: any;

  // directoryAdminList:VendorDirectoryRPT[]=[]
  // date: Date;

  public VendorNameFilterCtrl: FormControl = new FormControl();
  public filteredVendorName: ReplaySubject<Array<any>> = new ReplaySubject<Array<any>>(1);
  vendorname: Array<Object> = [{
    // 'VND_NAME_TEXT': 'Search',
    'VND_NAME': 'Search',
  }];
  vendorNameDataNull = {
    // 'VND_NAME_TEXT': '--Select--',
    'VND_NAME': '--Select--',
  }


  @ViewChild('pivot1') child: WebDataRocksPivot;
  //Ref: https://www.webdatarocks.com/doc/integration-with-angular/

  title = 'ReportDemo';
  onPivotReady(pivot: WebDataRocks.Pivot): void {
    // console.log("[ready] WebDataRocksPivot", this.child);
  }
  reportData: string;

  onCustomizeCell(cell: WebDataRocks.CellBuilder, data: WebDataRocks.Cell): void {
    //console.log("[customizeCell] WebDataRocksPivot");
    if (data.isClassicTotalRow) cell.addClass("fm-total-classic-r");
    if (data.isGrandTotalRow) cell.addClass("fm-grand-total-r");
    if (data.isGrandTotalColumn) cell.addClass("fm-grand-total-c");
  }

  onReportComplete(): void {


  }

  constructor(
    private _formBuilder: FormBuilder, private apiService: ApiService, public authService: AuthService, private reportService: ReportService, private vendorService: VendorService, private GlobalUrls: GlobalUrl,
  ) {
  }

  ngOnInit() {


    this.user = this.authService.getUserDetail();
    this.formControlsValidation();

    this.GetReports();
    this.GetPlan();
    this.getVendorText();
    this.VendorNameFilterCtrl.valueChanges
      .subscribe(() => {
        this.filterVendorSerach();
      });

  }
  formControlsValidation() {
    var date = new Date();
    this.stprMain = this._formBuilder.group({
      ddlReport: ['', Validators.required,],
      ddlVendorName: [null],
      ddlVendorKeyword: [null],

      txtFromDate: new FormControl(new Date(date.getFullYear(), date.getMonth(), 1)),
      txtToDate: new FormControl(new Date()), // Current Date
      ddlVendorPlan: [null],
    });
  }

  EnbleSearch(): any {
    // this.enableSearch = true;
    // this.reportFromDate = false;
    // this.ReportVendorName = false;
    // this.ReportPlanName = false;
    // this.formControlsValidation();
    this.toggleReport = !this.toggleReport;

  }


  get formControls() { return this.stprMain.controls; }

  GetReports() {
    if (this.user.ROL_PK == 1) {

      var reqObj = { 'RPT_TYPE': 2 };

    }
    else {
      var reqObj = { 'RPT_TYPE': 1 };

    }
    this.apiService.GetReports(reqObj).subscribe((data: Array<object>) => {
      this.reportList = data['Data'];


    });

  }
  GetPlan() {

    var reqObj = {};

    this.apiService.GetPlan(reqObj).subscribe((data: Array<object>) => {
      this.planList = data['Data'];


    });

  }
  reset() { // after selecting each reports clear the fields
    var date = new Date();
    this.stprMain.controls.txtToDate.reset(new Date());
    this.stprMain.controls.txtFromDate.reset(new Date(date.getFullYear(), date.getMonth(), 1));
    this.stprMain.controls.ddlVendorName.reset();
    this.stprMain.controls.ddlVendorPlan.reset();
  }

  filterReports(): void {

    this.selectValue = this.stprMain.value.ddlReport;

    // console.log(this.selectValue);


    switch (this.selectValue) {
      case 1:
        //key word list-merchantwise
        this.VendorKeywordReport();
        break;
      case 2:
        // total number of referrals-merchantwise
        this.TotalReferalsMerchantReport();

        break;
      case 3:
        // total number of referrals-adminwise
        this.TotalReferalsAdminReport();

        break;
      case 4:
        // key word list-adminwise
        this.AdminKeywordReport();


        break;
      case 5:
        // list of merchants-planwise
        this.PlanwiseCompanyReport();

        break;
      case 6:
        // list of inactive merchants

        break;
      case 7:
        // list of merchants ( with subscription near  expiry -7 days)
        this.GetSubscription();

        break;
      case 8:
        // merchants directory
        this.VendorDirectoryReport();

        break;

      case 9:
        // enquiry list
        this.GetEnquiryList();

        break;

      case 10:
        // list of keywords-unregistered
        this.GetUnregisteredKeyWord();

        break;

    }
    // this.enableSearch = true;
    //this.onReportSelect();
    // this.reportFromDate = false;
    // this.ReportVendorName = false;
    // this.ReportPlanName = false;
    this.toggleReport = false;
  }

  onReportSelect() {
    this.selectedReport = this.stprMain.value.ddlReport;
    // console.log(this.selectedReport);
    switch (this.selectedReport) {
      case 1:

        this.reportFromDate = true;
        this.ReportVendorName = false;
        this.ReportPlanName = false;
        this.reset();
        //key word list-merchantwise

        break;
      case 2:
        // total number of referrals-merchantwise
        this.reportFromDate = true;
        this.ReportVendorName = false;
        this.ReportPlanName = false;
        this.reset();
        break;
      case 3:
        // total number of referrals-adminwise
        this.ReportVendorName = true;
        this.reportFromDate = false;
        this.ReportPlanName = false;
        this.reset();
        break;
      case 4:
        // key word list-adminwise
        this.reportFromDate = true;
        this.ReportVendorName = true;
        this.ReportPlanName = false;
        this.reset();
        break;
      case 5:
        // list of merchants-planwise
        this.reportFromDate = false;
        this.ReportVendorName = true;
        this.ReportPlanName = true;
        this.reset();

        break;
      case 6:
        // list of inactive merchants
        this.reportFromDate = false;
        this.ReportVendorName = false;
        this.ReportPlanName = false;
        this.reset();
        break;
      case 7:
        // list of merchants ( with subscription near  expiry -7 days)
        this.ReportVendorName = true;
        this.reportFromDate = false;
        this.ReportPlanName = false;
        this.reset();
        break;
      case 8:
        // merchants directory
        this.ReportVendorName = true;
        this.reportFromDate = false;
        this.ReportPlanName = false;
        this.reset();
        break;
      case 9:
        // enquiry list
        this.ReportVendorName = false;
        this.reportFromDate = true;
        this.ReportPlanName = false;
        this.reset();
        break;
      case 10:
        // list of keywords-unregistered
        this.ReportVendorName = false;
        this.reportFromDate = false;
        this.ReportPlanName = false;
        this.reset();
        break;
    }
  }
  getVendorText(): any {
    this.filteredVendorName.next(this.vendorname.slice());
  }

  private filterVendorSerach(): void {
    let search = this.VendorNameFilterCtrl.value;
    if (!search) {
      this.filteredVendorName.next(this.vendorname.slice());
      return;
    }
    else {
      search = search.toLowerCase();
    }

    var reqbody = {

      'AUTO_SEARCH': search
    };
    this.vendorService.VendorNameGetAuto(reqbody).subscribe((data: Array<object>) => {
      this.vendorname = data['Data'];
      this.vendorname.splice(0, 0, this.vendorNameDataNull);
      this.filteredVendorName.next(this.vendorname);
    });
  }

  VendorKeywordReport() {
    var reqObj = {
      "VND_PK": this.user.VND_PK,
      'FROM_DATE': this.GlobalUrls.ConvertDate(this.stprMain.value.txtFromDate),
      'TO_DATE': this.GlobalUrls.ConvertDate(this.stprMain.value.txtToDate),
    };

    this.reportService.GetVendorKeywords(reqObj).subscribe((data: Array<object>) => {
      this.keywordList = data['Data'];

      this.BindReportVendorKeywords(this.keywordList);
    });
  }


  BindReportVendorKeywords(rptdata) {
    this.child.webDataRocks.off("reportcomplete");
    this.child.webDataRocks.setReport({
      options: { grid: { showFilter: true, showHierarchyCaptions: true } },
      dataSource: {
        data: rptdata
      },
      slice: {
        rows: [
          {
            uniqueName: "KEYWORD",
            caption: "Keywords."
          }
        ],
        measures: [
          {
            uniqueName: "LEADS_COUNT",
            //aggregation: "sum",
            grandTotalCaption: "Leads Count"
          }],
      }
    });

  }


  TotalReferalsMerchantReport() {

    var reqObj = {
      "VND_PK": this.user.VND_PK,
      'FROM_DATE': this.GlobalUrls.ConvertDate(this.stprMain.value.txtFromDate),
      'TO_DATE': this.GlobalUrls.ConvertDate(this.stprMain.value.txtToDate),
    };

    this.reportService.GetTotalReferals(reqObj).subscribe((data: Array<object>) => {
      // console.log(reqObj);
      this.referalMerchantList = data['Data'];

      this.BindReportReferalsMerchant(this.referalMerchantList);
    });
  }
  BindReportReferalsMerchant(rptdata) {
    this.child.webDataRocks.off("reportcomplete");
    this.child.webDataRocks.setReport({
      options: { grid: { showFilter: true, showHierarchyCaptions: true } },
      dataSource: {
        data: rptdata
      },
      slice: {
        rows: [
          {
            uniqueName: "KEYWORD",
            caption: "Keywords."
          },

        ],
        columns: [

          // {
          //   uniqueName: "NO_OF_DOWNLOADS"
          // },
          // {
          //   uniqueName: "NO_OF_REFERALS"
          // },

        ],
        measures: [{
          uniqueName: "NO_OF_DOWNLOADS",
          grandTotalCaption: "downloads"
          //aggregation: "sum",

        },
        {
          uniqueName: "NO_OF_REFERALS",
          grandTotalCaption: "referals"
        }
        ],

      }
    });

  }
  TotalReferalsAdminReport() {
    this.selectedVendorPk = this.stprMain.value.ddlVendorName;
    var reqObj = {
      "VND_PK": this.selectedVendorPk,
      'FROM_DATE': this.GlobalUrls.ConvertDate(this.stprMain.value.txtFromDate),
      'TO_DATE': this.GlobalUrls.ConvertDate(this.stprMain.value.txtToDate),

    };

    this.reportService.GetTotalReferalsAdmin(reqObj).subscribe((data: Array<object>) => {
      this.referalAdminList = data['Data'];

      this.BindReportReferalsAdmin(this.referalAdminList);
    });
  }
  BindReportReferalsAdmin(rptdata) {
    this.child.webDataRocks.off("reportcomplete");
    this.child.webDataRocks.setReport({
      options: { grid: { showFilter: true, showHierarchyCaptions: true } },
      dataSource: {
        data: rptdata
      },
      slice: {
        rows: [
          {
            uniqueName: "VENDOR_NAME",
            caption: "vendor."
          },
          {
            uniqueName: "KEYWORD",
            caption: "Keywords."
          },
        ],
        columns: [

          {
            uniqueName: "Measures"
          },
          // {
          //   uniqueName: "NO_OF_REFERALS"
          // },

        ],
        measures: [
          {
            uniqueName: "NO_OF_DOWNLOADS", caption: "no of downloads", grandTotalCaption: "no of downloads"
          },
          {
            uniqueName: "NO_OF_REFERALS", caption: "no of referals", grandTotalCaption: "no of referals"
          },
        ],



      }
    });

  }

  VendorDirectoryReport() {
    this.selectedVendorPk = this.stprMain.value.ddlVendorName;
    var reqObj = { 'VND_PK': this.selectedVendorPk };
    //  console.log(reqObj);
    this.reportService.GetVendorDirectory(reqObj).subscribe((data: Array<object>) => {
      this.referalMerchantList = data['Data'];
      // console.log('m',this.referalMerchantList);
      this.BindReportVendorDirectory(this.referalMerchantList);
    });
  }
  BindReportVendorDirectory(rptdata) {

    this.child.webDataRocks.off("reportcomplete");
    this.child.webDataRocks.setReport({
      options: {
        grid: {
          type: "flat",
          showHeaders: false,
          showGrandTotals: "off",
          showFilter: true,
          showHierarchyCaptions: true
        }
      },

      dataSource: {
        data: rptdata
      },
      // conditions: [{
      //   formula: "#value == 'dddd'",
      //   format: {
      //       backgroundColor: "#C5E1A5",
      //       color: "#000000",
      //       fontFamily: "Arial",
      //       fontSize: "12px"
      //   }
      // }],
      slice: {
        rows: [
          {
            uniqueName: "VND_NAME",
            caption: "Name",
          },
          {
            uniqueName: "VND_ADDRESS1",
            caption: "Address"
          },
          {
            uniqueName: "VND_EMAIL",
            caption: "Email"
          },
          {
            uniqueName: "VND_MOBILE",
            caption: "Mobile"
          }
        ],

      }
    });

  }


  AdminKeywordReport() {
    this.selectedVendorPk = this.stprMain.value.ddlVendorName;
    var reqObj = {
      "VND_PK": this.selectedVendorPk,
      'FROM_DATE': this.GlobalUrls.ConvertDate(this.stprMain.value.txtFromDate),
      'TO_DATE': this.GlobalUrls.ConvertDate(this.stprMain.value.txtToDate),
    };
    // console.log('ad',reqObj);
    this.reportService.GetKeywordListAdmin(reqObj).subscribe((data: Array<object>) => {
      this.keywordList = data['Data'];
      // console.log('ad1',this.keywordList);
      this.BindReportAdminKeyword(this.keywordList);
    });
  }
  BindReportAdminKeyword(rptdata) {
    this.child.webDataRocks.off("reportcomplete");
    this.child.webDataRocks.setReport({
      options: { grid: { showFilter: true, showHierarchyCaptions: true } },
      dataSource: {
        data: rptdata
      },
      slice: {
        rows: [
          {
            uniqueName: "VENDOR_NAME",
            caption: "Vendor Name"
          },
          {
            uniqueName: "KEYWORD",

          },

        ],
        columns: [
          {
            uniqueName: "Measures"
          },

          // {
          //   uniqueName: "Measures"
          // }
        ],
        measures: [{
          uniqueName: "LEADS_COUNT",
          //aggregation: "sum",
          grandTotalCaption: "Total Leads Count"
        }],
      }
    });

  }

  PlanwiseCompanyReport() {
    var reqObj = {
      "PLN_PK": this.stprMain.value.ddlVendorPlan,
      "VND_PK": this.stprMain.value.ddlVendorName
    };
    // console.log(reqObj);
    this.reportService.GetPlanwiseCompany(reqObj).subscribe((data: Array<object>) => {
      this.keywordList = data['Data'];
      console.log('p', this.keywordList);
      this.BindReportPlanwiseCompany(this.keywordList);

    });
  }
  BindReportPlanwiseCompany(rptdata) {
    this.child.webDataRocks.off("reportcomplete");
    this.child.webDataRocks.setReport({
      options: {
        grid: {
          type: "flat",
          showHeaders: false,
          showGrandTotals: "off",
          showFilter: true,
          showHierarchyCaptions: true
        }
      },

      dataSource: {
        data: rptdata
      },
      slice: {
        rows: [
          {
            uniqueName: "VENDOR_NAME",
            caption: "Vendor Name"
          },
          {
            uniqueName: "PLAN_NAME",
            caption: "Plan Name"
          },
          {
            uniqueName: "PLAN_DA",
            caption: "Plan Date "
          },
          {
            uniqueName: "PLAN_START_DA",
            caption: "Plan Start Date "
          },
          {
            uniqueName: "PLAN_END_DA",
            caption: "Plan End Date "
          }
        ],

      }
    });

  }


  GetSubscription() {
    this.selectedVendorPk = this.stprMain.value.ddlVendorName;
    var reqObj = {
      "VND_PK": this.selectedVendorPk,
    };
    this.reportService.GetSubscription(reqObj).subscribe((data: Array<object>) => {
      this.keywordList = data['Data'];
      //  console.log("teet",this.keywordList);
      this.BindReportSubscription(this.keywordList);
    });
  }
  BindReportSubscription(rptdata) {

    this.child.webDataRocks.off("reportcomplete");
    this.child.webDataRocks.setReport({
      options: {
        grid: {
          type: "flat",
          showHeaders: false,
          showGrandTotals: "off",
          showFilter: true,
          showHierarchyCaptions: true
        }
        // ,datePattern:"yyyy-MM-dd" 
      },

      dataSource: {
        data: rptdata
      },
      slice: {
        rows: [
          {
            uniqueName: "VENDOR_NAME",
            caption: "Vendor Name"
          },
          {
            uniqueName: "PLAN_NAME",
            caption: "Plan Name"
          },
          {
            uniqueName: "PLAN_DATE",
            caption: "Plan Date"
          },
          {
            uniqueName: "PLAN_START_DATE",
            caption: "Plan Start Date"
          },
          {
            uniqueName: "PLAN_END_DATE",
            caption: "Plan End Date"
          }
        ]

      }
    });
  }


  GetEnquiryList() {

    var reqObj = {
      'FROM_DATE': this.GlobalUrls.ConvertDate(this.stprMain.value.txtFromDate),
      'TO_DATE': this.GlobalUrls.ConvertDate(this.stprMain.value.txtToDate),
    };
    console.log(reqObj);
    this.reportService.GetEnquirList(reqObj).subscribe((data: Array<object>) => {
      this.keywordList = data['Data'];
       console.log("data",this.keywordList);
      this.BindReportEnquiryList(this.keywordList);
    });
  }
  BindReportEnquiryList(rptdata) {

    this.child.webDataRocks.off("reportcomplete");
    this.child.webDataRocks.setReport({
      options: {
        grid: {
          type: "flat",
          showHeaders: false,
          showGrandTotals: "off",
          showFilter: true,
          showHierarchyCaptions: true
        }
        // ,datePattern:"yyyy-MM-dd" 
      },

      dataSource: {
        data: rptdata
      },
      slice: {
        rows: [
          {
            uniqueName: "ENQUIRY_NO",
            caption: "Enqury No"
          },
          {
            uniqueName: "ENQUIRY_DATE",
            caption: "Enqury Date"
          },
          {
            uniqueName: "KEYWORD",
            caption: "Keyword"
          },
          {
            uniqueName: "ENQUIRER",
            caption: "Enquirer"
          },
          {
            uniqueName: "EMAIL",
            caption: "Email"
          },
          {
            uniqueName: "MOBILE",
            caption: "Mobile"
          },
          {
            uniqueName: "ENQ_VALUE",
            caption: "Enquiry Value"
          }
        ]

      }
    });
  }

  GetUnregisteredKeyWord() {

    var reqObj = {};

    this.reportService.GetUnregisteredKeyWord(reqObj).subscribe((data: Array<object>) => {
      this.keywordList = data['Data'];
      this.BindReportKeywordUnregistered(this.keywordList);
    });
  }
  BindReportKeywordUnregistered(rptdata) {

    this.child.webDataRocks.off("reportcomplete");
    this.child.webDataRocks.setReport({
      options: {
        grid: {
          type: "flat",
          showHeaders: false,
          showGrandTotals: "off",
          showFilter: true,
          showHierarchyCaptions: true,
         
        }
        // ,datePattern:"yyyy-MM-dd" 
      },

      dataSource: {
        data: rptdata
      },
      slice: {
        rows: [
          {
            uniqueName: "row_number",
            caption: "sl #"
          },
          {
            uniqueName: "unreg_keyword",
            caption: "unregistered keyword"
          },
        
        ]

      }
    });
  }


}

