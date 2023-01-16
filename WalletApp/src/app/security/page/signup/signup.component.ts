import { Component, OnInit } from '@angular/core';
import {AuthService} from "@security/service/auth.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(public authService:AuthService) { }

  ngOnInit(): void {

  }

  signup():void{
    const payload = {username:'captain',password:'P@ssword'}
    this.authService.signup(payload).subscribe()
  }

}
