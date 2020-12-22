import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-view-client',
  templateUrl: './view-client.component.html',
  styleUrls: ['./view-client.component.scss']
})
export class ViewClientComponent implements OnInit {
  employee: any;
  empProps: any;
  id: String;

  constructor(
    private clientService: ClientsService,
    private route: ActivatedRoute
  ) { }

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
    this.id = this.route.snapshot.paramMap.get('id');
    this.clientService.find(this.id)
      .subscribe((emp: any) => {
        this.employee = emp;
        this.empProps = Object.getOwnPropertyNames(this.employee);
      })
  }

}
