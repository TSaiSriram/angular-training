import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  Validators,
  NgForm
} from "@angular/forms";
import { ServerService } from "../server.service";
import { Router } from "@angular/router";

/** @title Form field with error messages */

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private userService: ServerService, private router: Router) {}
  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email
  ]);
  // For password
  hide = true;

  users = this.userService.getAllUsers();
  userData = [];

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getAllUsers().subscribe(users => {
      this.userData = users.users;
    });
  }
  onSubmit(login: NgForm) {
    this.userService
      .postLogin(login.value.email, login.value.password)
      .subscribe(result => {
        const token = "Bearer " + result.token;
        console.log(token);
      });
    this.router.navigate(["/", "users"]);
  }
}
