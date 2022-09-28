import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

import { SimexRoutingModule } from './simex-routing.module';
import { SimexEventosComponent } from './components/pages/simex-eventos/simex-eventos.component';
import { SimexEnlacesComponent, SimexEnlacesDialogRegistro } from './components/pages/simex-enlaces/simex-enlaces.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    SimexEnlacesComponent,
    SimexEventosComponent,
    SimexEnlacesDialogRegistro,
  ],
  imports: [
    CommonModule,
    SimexRoutingModule,
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule,
    MatButtonModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatSelectModule,
    MatDialogModule,
    MatSlideToggleModule,
    FormsModule,
    MatButtonToggleModule
  ]
})
export class SimexModule { }
