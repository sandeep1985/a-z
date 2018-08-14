import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Login } from '../app/login/login';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public _http: HttpClient) { }

  login (email:string, password:any): Observable<Login> {
    let url = environment.apiUrl+"?action=user_login&email="+email+"&password="+password;
    const httpOptions = {
        headers: new HttpHeaders({
        })
      };
    return this._http.get<Login>(url, httpOptions)
      .pipe(
        // catchError(this.handleError('error', user_login))
      );
  }

}
