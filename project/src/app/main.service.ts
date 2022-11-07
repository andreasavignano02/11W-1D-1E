import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  private urlAPI:string = "http://jsonplaceholder.typicode.com/users"

  constructor(private http: HttpClient) { }

  getUserAll(){
    return this.http.get<any>(this.urlAPI)
  }
  deleteUser(id : number){
    return this.http.delete(this.urlAPI + id)
  }
}
