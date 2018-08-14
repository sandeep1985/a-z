import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.css']
})
export class SiteLayoutComponent implements OnInit {

  fullName : string;
  constructor() { 
    this.fullName = "aaaaa";
  }

  ngOnInit() {
  }

  logout()
  {
    localStorage.removeItem('logged');
    localStorage.removeItem('user_id');
    localStorage.removeItem('fullname');
    window.location.href = window.location.origin + '/login';
  }
}
