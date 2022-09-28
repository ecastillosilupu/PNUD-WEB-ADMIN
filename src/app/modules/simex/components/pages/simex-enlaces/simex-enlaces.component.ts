import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';

export interface DataEnlace {
  numEnlaceId: number;
  txtEnlaceNombre: string;
  txtEnlaceDescripcion: string;
  bolEnlaceEstado: boolean;
}

@Component({
  selector: 'app-simex-enlaces',
  templateUrl: './simex-enlaces.component.html',
  styleUrls: ['./simex-enlaces.component.scss']
})
export class SimexEnlacesComponent implements OnInit {

  public dataEnlace: DataEnlace[] = [
    {
      numEnlaceId: 1,
      txtEnlaceNombre: `Plataforma Zoom Principal`,
      txtEnlaceDescripcion: `Sala virtual principal del ejercicio de Simulación`,
      bolEnlaceEstado: true,
    },
    {
      numEnlaceId: 2,
      txtEnlaceNombre: `Google Drive`,
      txtEnlaceDescripcion: `Almacenamiento en la nube para el ejercicio de Simulación`,
      bolEnlaceEstado: true,
    },
    {
      numEnlaceId: 3,
      txtEnlaceNombre: `Meet`,
      txtEnlaceDescripcion: `Almacenamiento en la nube para el ejercicio de Simulación`,
      bolEnlaceEstado: false,
    },
    {
      numEnlaceId: 4,
      txtEnlaceNombre: `Meet`,
      txtEnlaceDescripcion: `Almacenamiento en la nube para el ejercicio de Simulación`,
      bolEnlaceEstado: false,
    },
    {
      numEnlaceId: 1,
      txtEnlaceNombre: `Plataforma Zoom Principal`,
      txtEnlaceDescripcion: `Sala virtual principal del ejercicio de Simulación`,
      bolEnlaceEstado: true,
    },
    {
      numEnlaceId: 2,
      txtEnlaceNombre: `Google Drive`,
      txtEnlaceDescripcion: `Almacenamiento en la nube para el ejercicio de Simulación`,
      bolEnlaceEstado: true,
    }
  ]

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onNuevoEnlace(): void {
    const dialogRef = this.dialog.open(SimexEnlacesDialogRegistro, {
      data: { dataEnlaceSelect: {
        numEnlaceId: 0,
        txtEnlaceNombre: ``,
        txtEnlaceDescripcion: ``,
        bolEnlaceEstado: true,
      } },
    });

    dialogRef.afterClosed().subscribe(result => {
      this.dataEnlace.push(result);
    });
  }
  
  onEditarEnlace(element: DataEnlace, index: number): void {
    const dialogRef = this.dialog.open(SimexEnlacesDialogRegistro, {
      data: { dataEnlaceSelect: element },
    });

    dialogRef.afterClosed().subscribe(result => {
      this.dataEnlace[index] = result;
    });
  }
}

@Component({
  selector: 'simex-enlaces-dialog-registro.component',
  templateUrl: 'dialog/simex-enlaces-dialog-registro.component.html',
})
export class SimexEnlacesDialogRegistro {
  
  enlaceFormGroup: any;

  constructor(
    private _formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<SimexEnlacesDialogRegistro>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    debugger;
    this.enlaceFormGroup =  this._formBuilder.group({
      numEnlaceId: [data.dataEnlaceSelect.numEnlaceId],
      txtEnlaceNombre: [data.dataEnlaceSelect.txtEnlaceNombre, Validators.required],
      txtEnlaceDescripcion: [data.dataEnlaceSelect.txtEnlaceDescripcion, Validators.required],
      bolEnlaceEstado: [true]
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}