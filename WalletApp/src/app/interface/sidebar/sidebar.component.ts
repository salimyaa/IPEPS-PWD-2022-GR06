import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {ApiResponse} from "@shared/model";
import {CredentialHelper} from "@security/helper";
import {Credential, CredentialDto} from "@security/model";
import {AuthService} from "@security/service/auth.service";
import {OverlayContainer} from "@angular/cdk/overlay";

import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  credential?: Credential;
  themeColor: 'primary' | 'accent' | 'warn' = 'primary';
  isDark = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
   stateOptions: any[];
   value1: string= 'en';

  constructor(private breakpointObserver: BreakpointObserver, public auth: AuthService, private overlayContainer: OverlayContainer,
              private translate: TranslateService) {
  this.stateOptions = [
    {value: 'en', label: 'English'},
    {value: 'fr', label: 'French'}
  ];
  // this language will be used as a fallback when a translation isn't found in the current language
  translate.setDefaultLang('en');
  }



  logout(): void {
    this.auth.logout();
  }

  me(): void {
    this.auth.me().subscribe((response: ApiResponse) => {
      this.credential = CredentialHelper.credentialFromDto(response.data as CredentialDto);
      console.log('this.credential', this.credential);

    })
  }

  currentTheme = 'light';
  selectedLanguage: 'English' | 'French' | 'German' = 'English';



 toggleTheme(): void {
   this.currentTheme =
     this.currentTheme === 'light' ? 'dark' : 'light';

 }

  onLanguageChange(item:any) {
   this.translate.use(item.value);


  }
}
