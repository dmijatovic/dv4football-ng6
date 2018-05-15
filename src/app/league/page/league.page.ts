import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AppLoaderService } from '../../loader/loader.service';

@Component({
  selector: 'app-league-page',
  templateUrl: './league.page.html',
  styleUrls: ['./league.page.scss'],
  host:{
    class:'app-page'
  }
})
export class LeaguePage implements OnInit {

  league:number;

  constructor(
    private route:ActivatedRoute,
    private loaderSvc: AppLoaderService
  ) { }

  ngOnInit() {
    this.listenForLeagueId();
  }
  listenForLeagueId(){
    //get error id
    this.route.params.subscribe((p)=>{
      //console.log("error...", p);
      if (p['lid']){
        this.league = p['lid'];
        this.getLeagueData(this.league);
      }
    },//log error here
      (e)=>console.error(e));
  }

  getLeagueData(lid){
    //show app loader
    this.loaderSvc.setLoaderDef({
      loaderId:'app-root',
      loaderStyle:'square-spin',
      loaderType:'page',
      loaderSolid: false
    })
    this.toggleAppLoader(true);
    //hide app loader after all
    //put it at the end of callstack
    setTimeout(()=>{
      this.toggleAppLoader(false);
    },2000);
  }

   /**
   * This function changes state of the page loader
   * this loader cover the complete page incl. header
   * @param state
   */
  toggleAppLoader(state:boolean){
    //true shows loader
    //false hides it
    this.loaderSvc.setShowLoader(state);
  }
}
