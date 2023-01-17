import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit{

  id!:number;

  public listaValores!: any;

  constructor(private route:ActivatedRoute, private data:DataService) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id')); 
    this.data.getValue(this.id).subscribe((data) => {this.listaValores = data});
  }

}
