import { Injectable } from "@angular/core";
import { Observable } from "rxjs/observable";
import { HttpClient } from "@angular/common/http";
import{BehaviorSubject} from 'rxjs'
@Injectable({
  providedIn: "root"
})
export class ServerService {

  public getRes = new BehaviorSubject(null)

  
  constructor(private http: HttpClient) {}

  postSignup(name : string,email : string ,password : string, gender :string, age : number, mobile : number) {
    return this.http.post("http://localhost:3000/signup", { name : name,
  email : email,
password : password, gender : gender, age : age, mobile : mobile});
  }

  postLogin(email: string, password: string): Observable<any> {
    return this.http.post("http://localhost:3000/login", {
      email: email,
      password: password
    });
  }
  getAllUsers(): Observable<any> {
    return this.http.get("http://localhost:3000/users/all");
  }
}
