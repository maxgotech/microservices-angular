import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private readonly http: HttpClient) { }

  UserData(mail:string) {
		return this.http.post<any>('/user/data',{ mail });
	}
}
