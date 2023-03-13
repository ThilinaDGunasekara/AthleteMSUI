import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NbComponentStatus, NbGlobalPhysicalPosition, NbGlobalPosition } from '@nebular/theme';
import { environment } from '../../environments/environment';
import { ApiResponse } from '../model/ApiResponse';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {

  private BASE_URL: string='';

  constructor( private httpClient: HttpClient) {
  }


  position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
  dangerStatus: NbComponentStatus = 'danger';
  successStatus: NbComponentStatus = 'success';
  warningStatus: NbComponentStatus = 'warning';

  GET(apiURL: string) {
    this.BASE_URL = environment.baseUrl;
    var headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Access-Control-Allow-Origin', '*')
    headers = headers.append('content-type', 'application/x-www-form-urlencoded')
    return this.httpClient.get<ApiResponse>(this.BASE_URL + apiURL, { 'headers': headers });
  }

  POST(requestBody: any, apiURL: string) {
    this.BASE_URL = environment.baseUrl;
    var headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    return this.httpClient.post<ApiResponse>(this.BASE_URL + apiURL, requestBody, { 'headers': headers });
  }

  DELETE(apiURL: string) {
    this.BASE_URL = environment.baseUrl;
    var headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    return this.httpClient.delete<ApiResponse>(this.BASE_URL + apiURL, { 'headers': headers });
  }

  POST_FILE(requestParameters: any, apiURL: string, formData: FormData) {
    this.BASE_URL = environment.baseUrl;
    var headers = new HttpHeaders();
    return this.httpClient.post<ApiResponse>(this.BASE_URL + apiURL, formData, { 'headers': headers, 'params': requestParameters, reportProgress: true, },);
  }
}
