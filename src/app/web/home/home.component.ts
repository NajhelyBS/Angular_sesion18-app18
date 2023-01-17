import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //variable que almacenará datos
  datos:any = [""];

  constructor(private data:DataService,  private router:Router) {}

  ngOnInit(): void {
    this.data.getData().subscribe (data => this.datos = data);
    
  }

  editar(id:number){
    this.router.navigate(['detalle',id]);
  }

  delete(element:any){
    var delBtn = confirm(" Do you want to delete ?");
    
    if(delBtn == true){
      this.datos.forEach((value: any, index: any) => {
        if (value == element) {
          this.datos.splice(index, 1);
        }
      });
    }
  }
  }

