import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class ReportingService {
  BASE_ENDPOINT: string = 'http://ec2-52-87-236-43.compute-1.amazonaws.com:8003';
  GET_ISSUE_URL: string = `${this.BASE_ENDPOINT}/get_issue`;
  TOP_URL: string = `${this.BASE_ENDPOINT}/top`;
  DISTRIBUTION_URL: string = `${this.BASE_ENDPOINT}/distribution`;
  SUCCESS_URL: string = `${this.BASE_ENDPOINT}/success_rate`;
  FAILURE_URL: string = `${this.BASE_ENDPOINT}/failure_rate`;
  SUCCESS_DISTRIBUTION_URL:  string = `${this.BASE_ENDPOINT}/success_distribution`;

  constructor(private httpClient: HttpClient) { }

  public getIssue(data: any){
    return this.httpClient.post(this.GET_ISSUE_URL, data).toPromise();
  }

  public getTop(data: any){
    return this.httpClient.post(this.TOP_URL, data).toPromise();
  }

  public getDistribution(data: any){
    return this.httpClient.post(this.DISTRIBUTION_URL, data).toPromise();
  }

  public getSuccess(data: any){
    return this.httpClient.post(this.SUCCESS_URL, data).toPromise();
  }

  public getFailure(data: any){
    return this.httpClient.post(this.FAILURE_URL, data).toPromise();
  }

  public getSuccessDistribution(data: any){
    return this.httpClient.post(this.SUCCESS_DISTRIBUTION_URL, data).toPromise();
  }

}
