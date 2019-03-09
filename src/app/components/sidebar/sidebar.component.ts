import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
   // { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
//  { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
    { path: '/foodtypes', title: 'Food Type',  icon:'content_paste', class: '' },
   { path: '/fooditems', title: 'Food Items',  icon:'toc', class: '' },
  // { path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
  { path: '/maps', title: 'Order',  icon:'room_service', class: '' },
//   { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    { path: '/feedback', title: 'Feedback',  icon: 'rate_review', class: '' },

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
