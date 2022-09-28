import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimexEnlacesComponent } from './components/pages/simex-enlaces/simex-enlaces.component';
import { SimexEventosComponent } from './components/pages/simex-eventos/simex-eventos.component';

const routes: Routes = [
  { path: 'enlaces', component: SimexEnlacesComponent },
  { path: 'eventos', component: SimexEventosComponent },
  { path: '**', redirectTo: 'enlaces' }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  //exports: [RouterModule]
})
export class SimexRoutingModule { }
