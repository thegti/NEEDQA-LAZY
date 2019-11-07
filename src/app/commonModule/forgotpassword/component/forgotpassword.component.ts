import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl, FormGroupName } from '@angular/forms';
import { MustMatch } from '../../../must-match.validator';
import { AuthService } from '../../../authentication/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {

  firstFormGroup: FormGroup;
  private key: string;
  passwordSuccessMessage: String;
  passwordForgot: boolean = true;
  invaliduser: String;
  // linkExpired:boolean=false;
  passwordSuccess: boolean = false;
  constructor(private _formBuilder: FormBuilder, public authService: AuthService, private activeRoute: ActivatedRoute, private router: Router, ) { }

  ngOnInit() {

    this.firstFormGroup = this._formBuilder.group({

      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });

    this.ResetExpiry();
  }


  get txtEmailvalid() {
    return this.firstFormGroup.controls;
  }
  EnableRegisterButton() {
    var reqObj = {
      'USR_RESET_PWD_KEY': this.key,
      "USR_PWD": this.firstFormGroup.value.password,
    };

    this.authService.ResetPasswordChange(reqObj).subscribe((data: object) => {

      if (data['Data'] != null && data["Data"][0].RESULT) {
        this.passwordSuccess = true;
        this.passwordForgot = false;
      }
      else if (data['Data'] == null) {
        this.invaliduser = 'invalid user';
      }

    });


  }
  ResetExpiry() {
    this.activeRoute.params.subscribe(params => {
      this.key = params['key'];
      const reqbody = {
        'USR_RESET_PWD_KEY': this.key
      };

      this.authService.GetLinkExpiry(reqbody).subscribe((data: object) => {

        if (data['Data'] == null) {
          this.router.navigate(['/login/']);

        }
        else {
          this.passwordForgot = true;

        }



      });

    });

  }
}
