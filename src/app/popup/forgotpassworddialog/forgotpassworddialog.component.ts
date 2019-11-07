import { Component, OnInit } from '@angular/core';
import { SharedData } from '../../services/common/SharedData.service';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl, FormGroupName } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material';
import { User } from '../../authentication/user.model';
import { AuthService } from '../../authentication/auth.service';



@Component({
  selector: 'app-forgotpassworddialog',
  templateUrl: './forgotpassworddialog.component.html',
  styleUrls: ['./forgotpassworddialog.component.scss']
})
export class ForgotpassworddialogComponent implements OnInit {
  ForgotpasswordDialogRef: MatDialogRef<ForgotpassworddialogComponent>;

  public MessageEmail: string;
  public isError: Boolean = false;
  public isSuccess: Boolean = false;
  public HideEmailPopup: boolean = true;
  HideEmailSuccessPopup: boolean = false;
  
  email: String;
  user: User;
  emailchange: String;
  firstFormGroup: FormGroup;
  keywordList: Array<Object> = [{
        
    }];

  constructor(
    public PasswordDialogRef: MatDialogRef<ForgotpassworddialogComponent>,
    public authService: AuthService, private _formBuilder: FormBuilder, public _matDialog: MatDialog, private sharedData: SharedData,
  ) {
  }

  ngOnInit() {

    this.user = this.authService.getUserDetail();
    this.firstFormGroup = this._formBuilder.group({
      txtEmail: ['', [Validators.required, Validators.email, Validators.maxLength(50)]],

    });

  }
  get validation() {
    return this.firstFormGroup.controls;
  }
  // ResetPasswordDialog()
  // {

  //   var reqObj={

  //   "VND_MAIL":this.firstFormGroup.value.txtEmail,
  //  };

  //   this.HideEmailSuccessPopup=true;
  //   this.HideEmailPopup=false;
  //   this.MessageEmail = "You should soon receive an email allowing you to reset your password. Please make sure to check your spam and trash if you can't find the email.";

  // }

  ResetPasswordDialog() {

    var reqObj = { "USR_NAME": this.firstFormGroup.value.txtEmail, };
    console.log('re',reqObj);

    this.authService.ResetPasswordSubmit(reqObj).subscribe((data: object) => {
  
     this.isSuccess=false;
     this.isError=true;
        this.HideEmailSuccessPopup = true;
        this.HideEmailPopup = false;
        this.MessageEmail = "You should soon receive an email allowing you to reset your password. Please make sure to check your spam and trash if you can't find the email.";
    
        
    }, error => {
      console.log(error);
      this.isSuccess=true;
     this.isError=false;
      this.HideEmailSuccessPopup = true;
      this.HideEmailPopup = false;
     
      this.MessageEmail = "invalid email";
      });

    // var err='email id not found';
    // console.log(err);
  }

  ResetPasswordDialogClose() {
    this.PasswordDialogRef.close(false);


  }
  loginButton() {
    this.HideEmailSuccessPopup = true;
    this.HideEmailPopup = false;
  }

}
