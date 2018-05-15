import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

import { environment as env } from '../environments/environment';

@Injectable({
  providedIn:'root'
})
export class GraphQLService {
  constructor(
    private http:HttpClient
  ){
    console.log('GraphQLService...started');
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
