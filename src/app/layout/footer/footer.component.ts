import { Component, OnInit } from '@angular/core';

import { AppConfig as cfg } from '../../app.config';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  contactInfo = cfg.contactInfo;
  socialMedia = cfg.socialMedia;
  footerLogo = cfg.footerLogo;
  footerLinks = cfg.footerLinks;
  constructor() { }
  ngOnInit() { }
}
