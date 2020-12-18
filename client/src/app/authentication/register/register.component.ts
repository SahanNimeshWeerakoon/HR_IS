import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

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
    private router: Router
  ) { }

  registerUser() {
    this.authService.register(this.registerForm.value)
      .subscribe((regRes: any) => {
        if(regRes.success) {
          this.router.navigate(['/dashboard'])
        } else {
          console.log('error in registration. success false');
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
