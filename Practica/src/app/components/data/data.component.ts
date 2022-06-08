import { isDataSource } from '@angular/cdk/collections';
import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

import { IData } from 'src/app/models/responses/i-data';
import { DataService } from 'src/app/services/data.service';







/**
 * @title Binding event handlers and properties to the table rows.
 */
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})


export class DataComponent implements OnInit{
  displayedColumns: string[] = ['userId', 'id', 'title', 'completed','action'];
  dataSource : IData[] = [];
  bandera: boolean = false;

 

  newData: IData = {
    userId :0,
    id  : 0,
    title: "",
    completed : false,
   
  }

  AddData() : void {

    if(!this.bandera){
      this.dataSource = [...this.dataSource,this.newData];
    }
    else{
      this.dataSource.forEach((item,index) => {
        if(item.id == this.newData.id){
          this.dataSource[index] = this.newData;
        }
      });
      this.dataSource = [...this.dataSource];
      this.bandera = false;
    }
    
  }

  DeleteData(_id:number) : void{
    this.dataSource.forEach((item,index) => {
      if(_id == item.id){
      this.dataSource.splice(index, 1);
      }
    });
    this.dataSource = [...this.dataSource]

    

    
  }

  EditData(_id:number): void{

    
    this.dataSource.forEach((item) => {
      if(_id == item.id){
        
        this.newData = {
          userId: item.userId,
          id  : item.id,
          title: item.title,
          completed : item.completed,
         
        }
        this.bandera =true;
       
        }

       

    });
  }

  constructor(private _dataService: DataService){ }

  ngOnInit(): void {
    
    
    this._dataService.GetData().subscribe(  {
      next: callback =>{
        this.dataSource = callback;
          
      }, error: error =>{
        console.error(error);
      }
    }
    );

     
    
    
  }


}



function index(index: any, arg1: number) {
  throw new Error('Function not implemented.');
}

