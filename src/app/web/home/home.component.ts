import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  datos:any = [""];

  constructor(private data:DataService) {}

  ngOnInit(): void {
    this.data.getData().subscribe (data => this.datos = data);
    
  }

  delete(element:any){
    var delBtn = confirm(" Do you want to delete ?");
    
    if(delBtn == true){
      alert("Probando");
      this.datos.forEach((value: any, index: any) => {
        if (value == element) {
          this.datos.splice(index, 1);
        }
      });
    }
  }
  }

