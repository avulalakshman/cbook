import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  contacts : Contact[];

  constructor(private ds:DataService) {

      ds.getContactData().subscribe(data=>{
        this.contacts = data;
        this.contacts = this.convertMultDimArr(this.contacts,3);   
      })
  }

  ngOnInit() {

  }

  convertMultDimArr(arr, n){
    var mat = []
    for(var i = 0; i<arr.length; i++){
      mat[i] = arr.splice(0, n);
    }
    mat[i] = arr.splice(0,arr.length);
    return mat;
  }

}
