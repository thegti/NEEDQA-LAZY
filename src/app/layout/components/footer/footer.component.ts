import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ReportService } from '../../../services/report/report.service';
import { GlobalUrl } from '../../../utility/GlobalUrl';
import {AuthService} from '../../../authentication/auth.service';
import { TranslateService,LangChangeEvent } from '@ngx-translate/core';

@Component({
    selector   : 'footer',
    templateUrl: './footer.component.html',
    styleUrls  : ['./footer.component.scss']
})
export class FooterComponent
{
    enquiryCount:any;
    REFERAL_COUNT: Number;
    textDir: string = 'ltr';
    /**
     * Constructor
     */
    constructor(private router: Router,private reportService: ReportService,private GlobalUrls: GlobalUrl,
        private _translateService: TranslateService,)
    {
        this.REFERAL_COUNT=0;
        // this.GetLanguage();
    }
    ngOnInit() {
        this.GetEnquiryCout();
    }
    GetEnquiryCout(){
        var reqObj = {};

        this.reportService.GetEnquiryCout(reqObj).subscribe((data: Array<object>) => {
          this.enquiryCount = data['Data'];
          this.REFERAL_COUNT=this.enquiryCount[0].REFERAL_COUNT;
    //    console.log(this.enquiryCount );
        });
}
// GetLanguage()
// {
//     this._translateService.onLangChange.subscribe((event: LangChangeEvent) =>
//     {
//       if(event.lang == 'ar')
//       {
//         this.textDir = 'rtl';
   
//       } 
//       else
//       {
//         this.textDir = 'ltr';
       
//       }
//     });

// }
}
