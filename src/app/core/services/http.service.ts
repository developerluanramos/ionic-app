import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {map, Observable, Subscription} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(
    private _http: HttpClient
  ) {}

  post(url: string, data: any): Subscription {
    return this._http.post<any>(environment.api_base_url + url, data).subscribe(response => {
      return response;
    })
  }
}
