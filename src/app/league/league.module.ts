import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, Routes, RouterModule } from '@angular/router';

import { LeaguePage } from './page/league.page';

/**
 * Error routes defined in app
 */
const routes = [{
  path: '',
  redirectTo: '1',
  pathMatch: 'full'
}, {
  path: ':lid',
  component: LeaguePage
}];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LeaguePage]
})
export class LeagueModule { }
