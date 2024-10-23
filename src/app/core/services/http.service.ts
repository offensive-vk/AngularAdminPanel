import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  /**
   *
   * @param httpClient HTTP client to use for HTTP invocations
   */
  constructor(
    private httpClient: HttpClient) { }

  /**
   * to make a "get" call to the given backend url
   *
   * @param url URL to endpoint
   */
   get<Response>(url: string, params?: any): Observable<any> {
    if (params === undefined) {
      return this.httpClient.get<Response>(environment.serverPath + url)
    } else {
      return this.httpClient.get<Response>(environment.serverPath + url + params)
    }
  }

  /**
   * to download from the given backend url
   *
   * @param url URL to endpoint
   */
  download(url: string): Observable<any> {
      return this.httpClient.get(environment.serverPath + url);
  }

  /**
   * to make a "post" call to the given backend url
   *
   * @param url URL to endpoint
   * @param data given data to post to the backend
   */
  post<Response>(url: string, data?: any, expectText?: boolean): Observable<any> {

    if (expectText !== true) {
      return this.httpClient.post<Response>(environment.serverPath + url, data);
    } else {
      return this.httpClient.post<Response>(environment.serverPath + url, data, { responseType: 'text' as 'json' });
    }
  }

  /**
   * to make a "put" call to the given backend url
   *
   * @param url URL to endpoint
   * @param data given data to put to the backend
   */
  put<Response>(url: string, data: any): Observable<any> {
    return this.httpClient.put<Response>(environment.serverPath + url, data, { responseType: 'text' as 'json' });
  }

  /**
   * to make a "delete" call to the given backend url
   *
   * @param url URL to endpoint
   */
  delete(url: string, data?: any): Observable<any> {
    if (data) {
      const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      return  this.httpClient.delete(environment.serverPath + url, { headers: new HttpHeaders().set('Content-Type', 'application/json'), body: data, responseType: 'text' })
    } else {
      return this.httpClient.delete(environment.serverPath + url)
    }
  }
}
