import { Component, OnInit } from '@angular/core';

import { AppConfig as cfg } from '../../app.config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  appLogo = cfg.logo;
  menuItems = cfg.menuItems;

  constructor() { }

  ngOnInit() {
  }



}
