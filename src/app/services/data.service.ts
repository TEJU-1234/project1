import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class DataService {
  checkToken() {
    throw new Error('Method not implemented.');
  }


  constructor(private http: HttpClient) { }
  login(data: any): Observable<any> {
    return this.http.post<any>('http://apolis-grocery.herokuapp.com/api/auth/login',data)
  }
register(data: any): Observable<any>{
return this.http.post<any>('http://apolis-grocery.herokuapp.com/api/auth/register',data)
}

getProducts() : Observable <any> {
  return this.http.get<any>('https://fakestoreapi.com/products/')
}



  }



