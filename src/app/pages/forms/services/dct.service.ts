import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
// import { NbAuthJWTToken, NbAuthService } from "@nebular/auth";

@Injectable({
  providedIn: 'root'
})
export class DctService {

  url: string = "http://ec2-52-87-236-43.compute-1.amazonaws.com:8001/questions/data";

  constructor(private httpClient: HttpClient) { }

  message: string;
  ssid: string;
  password: string;

  public post(data){
    return this.httpClient.post(this.url, data).toPromise();
  }
}
