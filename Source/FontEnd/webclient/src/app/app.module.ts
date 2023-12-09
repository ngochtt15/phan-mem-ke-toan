import { BrowserModule } from "@angular/platform-browser";
import { ApplicationRef, CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { MenuComponent } from "./menu/menu.component";
import { FooterComponent } from "./footer/footer.component";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from './app-routing.module';
import { AppRouter } from "./app.routes";
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { HttpClient } from "@angular/common/http";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { DashboardBodyComponent } from "./dashboard/dashboard-body/dashboard-body.component";
import { DashboardItemComponent } from "./dashboard/dashboard-item/dashboard-item.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    DashboardBodyComponent,
    DashboardItemComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    RouterModule.forRoot(AppRouter.routes, { useHash: true }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    FontAwesomeModule,
    FormsModule
  ],
  exports:[],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: []
})
export class AppModule {
  ngDoBootstrap(appRef: ApplicationRef) {
    appRef.bootstrap(AppComponent); // Specify the component to be bootstrapped here
  }
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
