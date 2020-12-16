import { Component, OnInit, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientsService } from 'src/app/services/clients.service';
import { Router } from '@angular/router';


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
    private router: Router
  ) { }

  ngOnInit(): void {
    this.clientAddForm = this.formBuilder.group({
      name: ['', [
        Validators.required,
      ]],
      address: ['', [
        Validators.required

      ]],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      accountDetails: ['', [
        Validators.required
      ]],
    });
  };



  handleSubmit() {    
    this._clientService.saveClient(this.clientAddForm.value).subscribe((data:any) => {
      if (data.success) {
        console.log('CLIENT ADDED SUCCESSFULLY');
        this.router.navigate(['clientList']);
      } else {
        console.log('FAILED TO ADD CLIENT')
      }
    });
  }
}


