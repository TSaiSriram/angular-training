import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatFormFieldModule } from "@angular/material/form-field";
import { ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { UsersComponent } from './users/users.component';
@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent, SignupComponent, UsersComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
