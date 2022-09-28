import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputTextComponent } from './components/input-text/input-text.component';
import { InputDateComponent } from './components/input-date/input-date.component';
import { InputTextAreaComponent } from './components/input-text-area/input-text-area.component';
import { InputTimeComponent } from './components/input-time/input-time.component';
import { TableComponent } from './components/table/table.component';
import { FooterComponent } from './components/footer/footer.component';
import { MensajeAlertComponent } from './components/mensaje-alert/mensaje-alert.component';


@NgModule({
  declarations: [
    InputTextComponent,
    InputDateComponent,
    InputTextAreaComponent,
    InputTimeComponent,
    TableComponent,
    FooterComponent,
    MensajeAlertComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
