import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartComponent } from './components/chart';
import { LandingComponent } from './components/landing';
import { LogInComponent } from './components/log-in';
import { SignUpComponent } from './components/sign-up';
import { StatusComponent } from './components/status';
import { AuthGuardService as AuthGuard } from './services';

const routes: Routes = [
  { path: 'log-in', component: LogInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'status', component: StatusComponent, canActivate: [AuthGuard] },
  { path: 'chart', component: ChartComponent, canActivate: [AuthGuard] },
  { path: '', component: LandingComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
