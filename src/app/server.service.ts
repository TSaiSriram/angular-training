import { Injectable } from "@angular/core";
import { Observable } from "rxjs/observable";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ServerService {
  constructor(private http: HttpClient) {}

  postSignup() {
    return this.http.post("http://localhost:3000/signup", {});
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
