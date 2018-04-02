import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
//import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class RestApi {    
    
    
    constructor(private http: Http) {
    }
  
    callApi(url) {
        return this.http.get(url).map(res => res.json()).toPromise();
    }
}