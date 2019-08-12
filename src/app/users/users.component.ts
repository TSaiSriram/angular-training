import { Component, OnInit } from "@angular/core";
import { ServerService } from "../server.service";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  res;
  constructor(public service: ServerService) {}

  ngOnInit() {
    this.service.getRes.subscribe(res => {
      console.log(res);
      this.res = res;
    }, err => { console.log(err)});
  }
}
