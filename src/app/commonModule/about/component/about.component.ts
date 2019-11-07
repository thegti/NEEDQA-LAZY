import { Component, OnInit,OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl, FormGroupName} from '@angular/forms';
import { TranslateService,LangChangeEvent } from '@ngx-translate/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  demoForm: FormGroup;
  arrayItems: {
    id: number;
    title: string;
  }[];
  textDir: string = 'ltr';
  constructor(private _formBuilder: FormBuilder, 
    private _translateService: TranslateService,) {
    this.demoForm = this._formBuilder.group({
       demoArray: this._formBuilder.array([])
    });
  
 }
  ngOnInit(): void{
    this.arrayItems = [];
}

// addFieldValue(index) {
//   if (this.fieldArray.length <= 2) {
//     this.fieldArray.push(this.newAttribute);
//     this.newAttribute = {};
//   } else {
    
//   }
// }


get demoArray() {
  return this.demoForm.get('demoArray') as FormArray;
}
addItem(item) {
  this.arrayItems.push(item);
  this.demoArray.push(this._formBuilder.control(false));
}

}



