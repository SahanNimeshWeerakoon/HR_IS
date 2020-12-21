import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

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
    private rotuer: Router
  ) { }

  loginUser() {
    this.authService.login(this.loginForm.value)
      .subscribe((loginRes: any) => {
        if(loginRes.success) {
          this.rotuer.navigate(['/dashboard'])
        } else {
          console.log('err in login');
        }
      })
  }

  ngOnInit(): void {
    if(this.authService.isLoggedIn()) {
      this.rotuer.navigate(['dashboard']);
    }
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    })
  }

}
