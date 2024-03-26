//import { CdkStepper } from '@angular/cdk/stepper';
import { Component } from '@angular/core';
import {  FormBuilder,FormGroup, Validators} from '@angular/forms';
import { User } from '../../_modules/user';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {


  RoleForm!: FormGroup;
  PersonalDataForm!: FormGroup;
  ConfirmMailForm!: FormGroup;
  user:User = new User("","",0,"","","","","","","");
    constructor(private _formBuilder: FormBuilder,private _authService:AuthService) { }

    ngOnInit() {
      this.RoleForm = this._formBuilder.group({
        FullName: ["", Validators.required],
        Role: ["", Validators.required]
      });
      this.PersonalDataForm = this._formBuilder.group({
          SSN: ["", Validators.required],
          Gender: ["", Validators.required],
          Phone: ["", Validators.required],
          Address: ["", Validators.required]
      });
      this.ConfirmMailForm = this._formBuilder.group({
        Email: ["", Validators.required],
        UserName: ["", Validators.required],
        Password: ["", Validators.required],
        ConfirmPassword: ["", Validators.required]
    });
    console.log(this.RoleForm.get('Role')?.value)
    }
error:string ='';
  Submit(r:FormGroup,p:FormGroup,c:FormGroup){
    // this.user.Role=r.get('Role')?.value;
    // this.user.FullName=r.get('FullName')?.value;
    // this.user.SSN=p.get('SSN')?.value;
    // this.user.Gender=p.get('Gender')?.value;
    // this.user.Phone=p.get('Phone')?.value;
    // this.user.Address=p.get('Address')?.value;
    // this.user.Email=c.get('Email')?.value;
    // this.user.UserName=c.get('UserName')?.value;
    // this.user.Password=c.get('Password')?.value;
    // this.user.ConfirmPassword=c.get('ConfirmPassword')?.value;

    this._authService.signup(this.user).subscribe({
      // next:(response)=>{
      //   if(response.message === 'success'){
      //     this.error = 'success';
      //   }else{
      //     this.error = response.message;
      //   }
      // }
      next: (response) => {
        if (response && response.message && response.message === 'success') {
          this.error = 'success';
        } else if (response && response.message) {
          this.error = response.message;
        } else {
          this.error = 'An unexpected error occurred.';
        }
      },
      error: (error) => {
        console.error('Error during signup:', error);
        this.error = 'An error occurred during signup.';
      }
    });
  }
}
