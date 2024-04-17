import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import axios, { AxiosInstance, AxiosResponse } from 'axios';
import {HttpClientService} from "./http.client.service";
import {defer, map} from "rxjs";

class T {
}

@Injectable({
  providedIn: 'root'
})
export class HttpService extends HttpClientService{
  post(url: string, bodyParams: {}) : any {
    return defer(() =>
      super.createInstance().post<T>(url, bodyParams, { })
    ).pipe(map((result: { data: any; }) => result.data));
    // this.http.post(environment.api_base_url+url, bodyParams).subscribe(response => {
    //   console.log(response)
    //   return response
    // });
  }
}
