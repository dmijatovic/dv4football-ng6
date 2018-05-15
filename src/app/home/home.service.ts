import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HomeComponent } from './home.component';
import { map, catchError } from 'rxjs/operators';

import { environment as env } from '../../environments/environment';

const def={
  header:{
    "X-Auth-Token": "17f7832838f1432b809895e3c6b352a9"
  },
  api:{
    competitions:"https://api.football-data.org/v1/competitions/",
    teams: "https://api.football-data.org/v1/teams/",
    fixtures: "https://api.football-data.org/v1/fixtures/",
    graphQL: env.graphQL
  }
}

@Injectable()
export class HomeService {
  constructor(
    private http:HttpClient
  ){
    console.log('ServiceName...started');
  }
  /**
   *
   * @param selection: list of competition id's to be included
   */
  getCompetitions(selection=[]){
    let url = def.api.competitions
    //debugger
    return this.http.get(url,{
      headers: new HttpHeaders(def.header)
    })
    .pipe(
      map((d:any)=>{
        debugger
        if (selection.length==0){
          return d;
        }else{
          let sel=[]
          d.map((item)=>{
            if (selection.indexOf(item.id)!=-1){
              sel.push(item);
            }
          });
          return sel;
        }
      })
    )
  }
  /**
   * Send graphQL query string to backend api
   * use graphiql to compose query and then convert it to json where
   * qraphQL is basically a string, see graphiql post request in network
   * @param query: query string object
   */
  graphQL(query){
    let url = env.graphQL;
    return this.http.post(url,
      JSON.stringify(query),{
      headers: new HttpHeaders({
        "Content-Type":"application/json"
      })
    })
    .pipe(
      map((d:any)=>{
        return d.data;
      })
    )
  }

}
