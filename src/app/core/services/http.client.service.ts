import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import axios, { AxiosInstance, AxiosResponse } from 'axios';
@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  protected instance: AxiosInstance | undefined;

  protected createInstance(): AxiosInstance {
    const token = localStorage.getItem('jwtToken');
    this.instance = axios.create({
      baseURL: environment.api_base_url,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    this.initializeResponseInterceptor();
    return this.instance;
  }

  private initializeResponseInterceptor = () => {
    // @ts-ignore
    this.instance.interceptors.response.use(
      this.handleResponse,
      this.handleError
    );
  };

  private handleResponse = ({ data }: AxiosResponse) => data;
  private handleError = (error: any) => error;
}
