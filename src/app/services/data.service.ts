import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private urlJSON = "https://jsonplaceholder.typicode.com/todos";

  constructor(private http:HttpClient) { }

  //obteniendo data 
  getData():Observable<any[]>{
    return this.http.get<any[]>(this.urlJSON);
  }

  getValue(id: number){
    return this.http.get<any>(`${this.urlJSON}/${id}`);
  }

}

