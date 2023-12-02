import { Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";

export class AppRouter {
    public static routes: Routes = [
        { path: "login", component: LoginComponent },
        { path: "home", component: HomeComponent },
    ];
}
