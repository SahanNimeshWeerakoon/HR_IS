import { Component, OnInit, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientsService } from 'src/app/services/clients.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.scss']
})
export class AddclientComponent implements OnInit {

  clientAddForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private _clientService: ClientsService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  handleSubmit() {
    if(this.clientAddForm.invalid) {
      this.clientAddForm.controls['name'].markAllAsTouched();
      this.clientAddForm.controls['address'].markAllAsTouched();
      this.clientAddForm.controls['email'].markAllAsTouched();
      this.clientAddForm.controls['accountDetails'].markAllAsTouched();
    } else {
      this._clientService.saveClient(this.clientAddForm.value).subscribe((data:any) => {
        if (data.success) {
          this.toastr.success('Successfully added a new client');
          this.router.navigate(['/dashboard/clients']);
        } else {
          this.toastr.error('Client add failed');
        }
      });
    }
  }

  ngOnInit(): void {
    this.clientAddForm = this.formBuilder.group({
      name: ['', [ Validators.required ]],
      address: ['', [ Validators.required ]],
      email: ['', [ Validators.required, Validators.email ]],
      accountDetails: ['', [ Validators.required ]],
    });
  };

  get name() { return this.clientAddForm.get('name'); }
  get address() { return this.clientAddForm.get('address'); }
  get email() { return this.clientAddForm.get('email'); }
  get accountDetails() { return this.clientAddForm.get('accountDetails'); }

}


