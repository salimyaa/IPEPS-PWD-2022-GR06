import {Component, OnInit} from '@angular/core';
import {Credential, CredentialDto} from "@security/model";
import {AuthService} from "@security/service/auth.service";
import {ApiResponse} from "@shared/model";
import {CredentialHelper} from "@security/helper";


@Component({
  selector: 'app-dashboard-home-page',
  templateUrl: './dashboard-home-page.component.html',
  styleUrls: ['./dashboard-home-page.component.scss']
})
export class DashboardHomePageComponent  {
  credential?: Credential;
  opened = false;

  constructor(public auth: AuthService) {
  }

  ngOnInit(): void {
  }




  me(): void {
    this.auth.me().subscribe((response: ApiResponse) => {
      this.credential = CredentialHelper.credentialFromDto(response.data as CredentialDto);
      console.log('this.credential', this.credential);
    })
  }
}
