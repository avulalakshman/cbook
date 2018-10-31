import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  /*
  contacts:Contact[]=[
    {cid:'1001',fullName:'Krish',email:'krish@gmail.com',mobile:'9886885551',deptName:'CSE'},
    {cid:'1002',fullName:'Manoj',email:'manoj@gmail.com',mobile:'9886885552',deptName:'ISE'},
    {cid:'1003',fullName:'Rajesh',email:'rajesh@gmail.com',mobile:'9886885553',deptName:'CSE'},
    {cid:'1004',fullName:'Ramesh',email:'ramesh@gmail.com',mobile:'9886885554',deptName:'ECE'},
    {cid:'1005',fullName:'Suresh',email:'suresh@gmail.com',mobile:'9886885554',deptName:'CSE'},
    {cid:'1006',fullName:'Jayesh',email:'jayesh@gmail.com',mobile:'9886885556',deptName:'CSE'},
    {cid:'1007',fullName:'Kiran',email:'kiran@gmail.com',mobile:'9886885557',deptName:'CSE'},
    {cid:'1008',fullName:'Mahesh',email:'mahesh@gmail.com',mobile:'9886885558',deptName:'ISE'}


  ]; */


  constructor(private http:HttpClient) { }

  getContactData():Observable<Contact[]>{
    return this.http.get<Contact[]>("https://akshaycbook.herokuapp.com/contacts");
  }
}
