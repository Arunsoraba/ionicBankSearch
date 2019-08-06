import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the HomeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HomeProvider {

  constructor(public http: HttpClient) {
    console.log('Hello HomeProvider Provider');
  }

  getBanks(bank){
    return new Promise((resolve, reject) => {
      this.http.get('https://vast-shore-74260.herokuapp.com/banks?city='+bank, {
        // headers: new HttpHeaders().set('Access-Control-Allow-Origin', '*'),
      }).subscribe(
        (resa) => {
          resolve(resa);
        },
        (err) => {
          reject(err);
        },
      );
    });
  }
}
