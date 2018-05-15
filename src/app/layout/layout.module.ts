import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//material
import { MatToolbarModule, MatMenuModule,
  MatIconModule, MatButtonModule
} from '@angular/material';


import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AppLayoutPage } from './page/app-layout-page';
import { NavbarComponent } from './navbar/navbar.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { SocialComponent } from './social/social.component';
import { AddressComponent } from './address/address.component';
import { LogoComponent } from './logo/logo.component';
import { LinksListComponent } from './links-list/links-list.component';


@NgModule({
  imports: [
    CommonModule, RouterModule,
    MatToolbarModule, MatMenuModule,
    MatIconModule, MatButtonModule
  ],
  declarations: [
    FooterComponent, HeaderComponent, AppLayoutPage, NavbarComponent, DropdownComponent, SocialComponent, AddressComponent, LogoComponent, LinksListComponent
  ],
  exports:[
    FooterComponent, HeaderComponent, AppLayoutPage
  ]
})
export class AppLayoutModule { }
