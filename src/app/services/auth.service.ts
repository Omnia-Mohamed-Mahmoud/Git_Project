import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HTTpClient:HttpClient) {

   }

   signup(signData:object):Observable<any> {
    return this._HTTpClient.post('https://localhost:44389/SignUp/',signData);
   }
}
