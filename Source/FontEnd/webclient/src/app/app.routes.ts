import { Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

export class AppRouter {
    public static routes: Routes = [
        { path: "login", component: LoginComponent },
        { path: "", component: LoginComponent },
        { path: "dashboard", component:DashboardComponent},
        { path: "home", component: HomeComponent },
        { path: '**', component:LoginComponent}          
    ];
}
