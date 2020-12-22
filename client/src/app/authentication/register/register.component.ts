import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  registerUser() {
    this.authService.register(this.registerForm.value)
      .subscribe((regRes: any) => {
        if(regRes.success) {
          this.toastr.success('Successfully registered a new user');
          this.router.navigate(['/dashboard'])
        } else {
          this.toastr.success('Registration failed');
        }
      })
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: [''],
      email: [''],
      password: ['']
    });
  }

}
