import { Component, OnInit } from '@angular/core';
import {Credential, CredentialDto} from "@security/model";
import {AuthService} from "@security/service/auth.service";
import {ApiResponse} from "@shared/model";
import {CredentialHelper} from "@security/helper";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
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

  logout(): void {
    this.auth.logout();
  }

  toggle() {

  }

}
