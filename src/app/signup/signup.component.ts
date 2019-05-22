import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  Validators,
  NgForm
} from "@angular/forms";
import { ServerService } from "../server.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  hide = true;
  selected;
  constructor(private router : Router, private userService : ServerService) {}
  onSubmit(signup : NgForm){
    console.log(signup.value.gender)
    this.userService.postSignup(signup.value.name, signup.value.email, signup.value.password, signup.value.gender, signup.value.age, signup.value.phno).subscribe(user => {
      console.log(user)
    })
    this.router.navigate(["/", "login"])
  }
  ngOnInit() {
  }
}
