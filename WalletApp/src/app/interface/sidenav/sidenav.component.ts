import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {navbarData} from "./nav-data";

interface SideNavToggle {
  screenWidth:number;
  collapsed: boolean;
}
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Output() onToggleSidenav : EventEmitter<SideNavToggle>= new EventEmitter()
  collapsed = false;
  navData = navbarData;
  screenWidth=0;

  constructor() { }

  ngOnInit(): void {
  }
  toggleCollapse(): void{
    this.collapsed = !this.collapsed;
    this.onToggleSidenav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }
  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSidenav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }
}
