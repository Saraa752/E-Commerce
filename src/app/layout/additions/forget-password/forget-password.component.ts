import { AuthService } from './../../../shared/services/auth/auth.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.css'
})


export class ForgetPasswordComponent {

  constructor(private _AuthService: AuthService, private _Router: Router) { }


  isCodeForm: boolean = false;
  isNewPassForm: boolean = false;

  isLoading: boolean = false


  emailForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email])
  })


  resetPassForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),

    newPassword: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][0-9]{6}/)])
  })


  codeForm: FormGroup = new FormGroup({
    resetCode: new FormControl(null, [Validators.required,])
  })



  // moshklaaaaa


  verifyBtn() {
    // this.isLoading = true
    // this._AuthService.sendVerifyAPI(this.emailForm.value).subscribe({
    //   next: (res) => {
    //     if (res.statusMsg == "success") {
    //       this.isCodeForm = true;
    //       this.isLoading = false
    //     }
    //   },
    //   error: (err) => { }
    // })
  }

  // codeBtn() {
  //   this.isLoading = true
  //   this._AuthService.sendCodeAPI(this.codeForm.value).subscribe({

  //     next: (res) => {

  //       if (res.status == "Success") {
  //         this.isCodeForm = false;
  //         this.isNewPassForm = false;
  //         this.isLoading = false
  //       }
  //     },
  //     error: (err) => { }
  //   }

  //   newPassBtn() {


  //     this.isLoading = true
  //      this._AuthService.sendNewPasswordAPI(this.resetPassForm.value).subscribe({

  //       next: (res) => {

  //         localStorage.setItem("userToken", res.token);

  //         this._AuthService.userInform()

  //         this._Router.navigate(['home'])
  //       },
  //       error : (err)=>{
  //         this.errMessage=err.error.message
  //         this.isLoading = false

  //       }






}

