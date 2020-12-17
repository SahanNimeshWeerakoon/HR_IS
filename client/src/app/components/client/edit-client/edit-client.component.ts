import { Component, OnInit, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientsService } from 'src/app/services/clients.service';
import { AddclientService } from 'src/app/services/addclient.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.scss']
})
export class EditClientComponent implements OnInit {

  clientAddForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private _clientService: ClientsService,
    private _addclientService: AddclientService,
    private router: Router
  ) { }
  
    id:any;

  ngOnInit(): void {
    this.clientAddForm = this.formBuilder.group({

      name: [""],
      email: [""],
      address: [""],
      accountDetails: [""],
 
     })
    this.id = this.route.snapshot.paramMap.get('id');
    this._clientService.getClient(this.id)
    .subscribe(client => {
      this.clientAddForm = this.formBuilder.group({

        name: [client.name],
        email: [client.email],
        address: [client.address],
        accountDetails: [client.accountDetails],
   
       })
  });
}      
  updateClient() {
    this._clientService.update(this.id, this.clientAddForm.value)
    .subscribe(resp => {
      if(resp.status == true) {
        this.router.navigate(['clientList'])
      } else {
        console.log ('fucked');
      }
     
    })
    
    
  }



}
