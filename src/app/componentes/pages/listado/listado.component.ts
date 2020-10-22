import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.dataService.mostrar();
  }

}
