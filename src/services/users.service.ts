import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Users } from '../app/users/users';



@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor(public _http: HttpClient) { }

  getUsers (): Observable<Users> {
    let url = environment.apiUrl+"?action=get_users";
    const httpOptions = {
        headers: new HttpHeaders({
        })
      };
    return this._http.get<Users>(url, httpOptions)
      .pipe(
        // catchError(this.handleError('error', user_login))
      );
  }

}
