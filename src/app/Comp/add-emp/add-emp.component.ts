import { Component, EventEmitter, OnInit, Output } from '@angular/core';
//import * as EventEmitter from 'events';
import { Emp } from 'src/app/Emp';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {

  empID:number;
  fName:string;
  lName:string;
  desg:string;
  @Output() addEmp: EventEmitter<Emp> = new EventEmitter();

  constructor() { 
    this.empID=0
    this.fName=''
    this.lName=''
    this.desg=''
  }

  ngOnInit(): void {
  }
  addShowDiv=false;
  addShow(){
    let addShowDiv=true;
  }
  submit(){

    alert("added")
  }
  onAdd(){
    const Empp = {
      emp_Id: this.empID,
        f_Name : this.fName,
        l_Name :  this.lName,
        post : this.desg
        //this.empData.push(Empp);
    }
    this.addEmp.emit(Empp);
  }



}
