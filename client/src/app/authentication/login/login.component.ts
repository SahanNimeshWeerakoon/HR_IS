import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private rotuer: Router,
    private toastr: ToastrService
  ) { }

  loginUser() {
    this.authService.login(this.loginForm.value)
      .subscribe((loginRes: any) => {
        if(loginRes.success) {
          this.toastr.success('Successfully logged in');
          this.rotuer.navigate(['/dashboard'])
        } else {
          this.toastr.error('Login error');
        }
      })
  }

  ngOnInit(): void {
    if(this.authService.isLoggedIn()) {
      this.toastr.success('You are already logged in');
      this.rotuer.navigate(['dashboard']);
    }
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    })
  }

}
