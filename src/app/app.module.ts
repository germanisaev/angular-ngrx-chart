import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { GoogleChartsModule } from 'angular-google-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing';
import { SignUpComponent } from './components/sign-up';
import { LogInComponent } from './components/log-in';
import { AuthService } from './services';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './store/effects';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/app.states';
import { ErrorInterceptor, TokenInterceptor } from './services';
import { StatusComponent } from './components/status';
import { AuthGuardService as AuthGuard } from './services';
import { ChartComponent } from './components/chart';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SignUpComponent,
    LogInComponent,
    StatusComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    GoogleChartsModule,
    StoreModule.forRoot(reducers, {}),
    EffectsModule.forRoot([AuthEffects]),
    AppRoutingModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
