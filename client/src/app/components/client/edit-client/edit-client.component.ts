import { Component, OnInit, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientsService } from 'src/app/services/clients.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.scss']
})
export class EditClientComponent {

  clientAddForm: FormGroup;
  id:any;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private _clientsService: ClientsService,
    private router: Router
  ) { }

  updateClient() {
    this._clientsService.update(this.id, this.clientAddForm.value)
      .subscribe((resp) => {
      if(resp.success == true) { 
        this.router.navigate(['/dashboard/clients']);
      } else {
        console.log ('update client error ');
      }
    })
  }

  ngOnInit(): void {
    this.clientAddForm = this.formBuilder.group({
      name: [""],
      email: [""],
      address: [""],
      accountDetails: [""]
    })

    this.id = this.route.snapshot.paramMap.get('id');

    this._clientsService.getClient(this.id)
      .subscribe(client => {
        this.clientAddForm = this.formBuilder.group({
          name: [client.name],
          email: [client.email],
          address: [client.address],
          accountDetails: [client.accountDetails]
        })
      });
  }
}
