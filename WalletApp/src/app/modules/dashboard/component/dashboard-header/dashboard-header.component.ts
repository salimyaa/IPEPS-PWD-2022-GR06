import {Component, OnInit} from '@angular/core';

import {AuthService} from "@security/service/auth.service";



@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss']
})
export class DashboardHeaderComponent {
  title: string = "Dashboard";

  constructor(public auth: AuthService) {

  }


}
