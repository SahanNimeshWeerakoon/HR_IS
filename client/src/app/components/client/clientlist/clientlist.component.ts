import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientsService } from 'src/app/services/clients.service';


@Component({
  selector: 'app-clientlist',
  templateUrl: './clientlist.component.html',
  styleUrls: ['./clientlist.component.scss']
})
export class ClientlistComponent {
 clientList: any[];
  constructor(
    private router: Router,
    private clientService: ClientsService
  ) {
    
  }

  deleteClient(id) {
    this.clientService.deleteClient(id)
      .subscribe(resp => {
        if(resp.success) {
          this.ngOnInit();
          console.log('Client Deleted')
        } else {
          console.log('Delete client error');
        }
      });
  }

  ngOnInit(): void {
    //fetch
    this.clientService.fetchClient()
      .subscribe(res => {
        this.clientList = res;
      });
  }


}
