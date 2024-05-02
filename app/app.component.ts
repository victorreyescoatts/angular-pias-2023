import { Component, Inject } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';



export interface PeriodicElement {
  name: string;
  position: string;
  weight: string;
  symbol: string;
  vrc1: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: '10.444.999-5', name: 'Juan Francisco González Valdebenito', weight: '22-12-2022', symbol: 'H',  vrc1: '22-12-2022'},
  {position: '10.444.999-5', name: 'Juan Francisco González Valdebenito', weight: '22-12-2022', symbol: 'He', vrc1: '22-12-2022'},
  {position: '10.444.999-5', name: 'Juan Francisco González Valdebenito', weight: '22-12-2022', symbol: 'Li', vrc1: '22-12-2022'},
  {position: '10.444.999-5', name: 'Juan Francisco González Valdebenito', weight: '22-12-2022', symbol: 'Be', vrc1: '22-12-2022'},
  {position: '10.444.999-5', name: 'Juan Francisco González Valdebenito', weight: '22-12-2022', symbol: 'B',  vrc1: '22-12-2022'},
  {position: '10.444.999-5', name: 'Juan Francisco González Valdebenito', weight: '22-12-2022', symbol: 'C',  vrc1: '22-12-2022'},
  {position: '10.444.999-5', name: 'Juan Francisco González Valdebenito', weight: '22-12-2022', symbol: 'N',  vrc1: '22-12-2022'},
  {position: '10.444.999-5', name: 'Juan Francisco González Valdebenito', weight: '22-12-2022', symbol: 'O',  vrc1: '22-12-2022'},
  {position: '10.444.999-5', name: 'Juan Francisco González Valdebenito', weight: '22-12-2022', symbol: 'F',  vrc1: '22-12-2022'},
  {position: '10.444.999-5', name: 'Juan Francisco González Valdebenito', weight: '22-12-2022', symbol: 'Ne',  vrc1: '22-12-2022'},
];

interface Comuna {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-design';
  comunas: Comuna[] = [
    {value: 'arica', viewValue: 'Arica y Parinacota'},
    {value: 'tarapaca', viewValue: 'Tarapacá'},
    {value: 'antofa', viewValue: 'Antofagasta'},
  ];
  displayedColumns: string[] = ['position', 'name', 'weight','vrc1', 'symbol'];
  dataSource = ELEMENT_DATA;
  

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialogo-ejemplo.html',
})
export class DialogContentExampleDialog {}