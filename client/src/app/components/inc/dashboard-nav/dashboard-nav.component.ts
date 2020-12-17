import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard-nav',
  templateUrl: './dashboard-nav.component.html',
  styleUrls: ['./dashboard-nav.component.scss']
})
export class DashboardNavComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  logout() {
    this.authService.logout();
  }

  ngOnInit(): void {
  }

}
