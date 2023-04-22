import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegService {

  constructor(private readonly http: HttpClient) { }

  register(name:string, secondname:string, mail: string, password: string) {
		return this.http.post<any>('/auth/reg', { name , secondname , mail, password });
	}

}