import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { NbAuthJWTToken, NbAuthService } from "@nebular/auth";

@Injectable({
  providedIn: 'root'
})
export class DctService {

  loginUrl: string = "http://localhost:4000/user/login";

  TOKEN: any;

  constructor(
    private httpClient: HttpClient,
    private authService: NbAuthService
  ) {}

    public login(data){
      this.authService.getToken().subscribe((token: NbAuthJWTToken) => {
        if(token.isValid()){
          this.TOKEN = "Bearer " + token.getValue();
        }
      });

      const head = new HttpHeaders({
        Authorization: this.TOKEN,
      });

      return this.httpClient.post(this.loginUrl, {body: data},{headers: head}).toPromise();
    }
}
