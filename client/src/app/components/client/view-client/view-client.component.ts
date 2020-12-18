import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientsService } from 'src/app/services/clients.service';
import { Router } from '@angular/router';

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
    private route: ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    // this.id = this.route.snapshot.paramMap.get('id');
    // this.clientService.find(this.id)
    //   .subscribe((emp: any) => {
    //     this.employee = emp;
    //     this.empProps = Object.getOwnPropertyNames(this.employee);
    //   })
  }

}
