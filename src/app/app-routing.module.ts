import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { AuthComponent } from './modules/auth/auth.component';

const routes: Routes = [
  {
    path: 'login',
    component: AuthComponent
  },{
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'pnud',
    component: HomeComponent,
    children: [
      {
        path: 'simex',
        loadChildren: () =>
          import('./modules/simex/simex.module').then((m) => m.SimexModule),
      }
    ]
  },
  { path: '**', redirectTo: '/pnud', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }