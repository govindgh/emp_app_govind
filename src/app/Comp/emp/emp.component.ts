import { Component, OnInit } from '@angular/core';

import { Emp } from 'src/app/Emp';



@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {




  allowEmpAdd=false;
  allowEmpEdit=false;
  
  allowEmpAddfun(){
    this.allowEmpAdd=true;
  }

  DontallowEmpAddfun(){
    this.allowEmpAdd=false;
  }
  

  //empData: { emp_Id: number; f_Name: string; l_Name: string; post: string; }[];
 // eID: number = 
  fN : string =''
  lN : string =''
  des : string=''    
  empData: Emp[];
  eID: any;


  edit(Emp : Emp){
    this.allowEmpAdd=true;
    this.allowEmpAdd=false;
    this.allowEmpEdit=true;
    this.eID=Emp.emp_Id
      this.fN=Emp.f_Name
      this.lN=Emp.l_Name
      this.des=Emp.post
  }
  delete(Emp : Emp){
   
    const index = this.empData.indexOf(Emp);
    //alert(index);
    this.empData.splice(index, 1);
  }

  constructor() { 
    let addShowDiv=false;
    this.empData = [

      {
        emp_Id: 1,
        f_Name : 'Govind',
        l_Name : 'Soni',
        post : 'Developer'

      },
      {
        emp_Id: 2,
        f_Name : 'Kumar',
        l_Name : 'Sanu',
        post : 'Analyst'

      },
      {
        emp_Id: 3,
        f_Name : 'Raj',
        l_Name : 'Verma',
        post : 'Tester'

      }
    ]
    console.log(this.empData)

  
  }

  ngOnInit(): void {
  }
  
 
  addEmp(){
    alert("add");
    let addShowDiv=true;
  }

  addEmpp(emp:Emp){
    this.empData.push(emp);
  }

  // updateEmp(){
  //   const index = this.empData.indexOf(e);
  //   //alert(index);
  //   this.empData[index].emp_Id=e.emp_Id
  //   this.empData[index].f_Name=e.f_Name
  //   this.empData[index].l_Name=e.l_Name 
  //   this.empData[index].post=e.post

  // }

  onAdd(){
    const Empp = {
      emp_Id: this.eID,
        f_Name : this.fN,
        l_Name :  this.lN,
        post : this.des
      
    }
    if(Empp.f_Name!=''){
     
      this.empData.push(Empp);
      console.log(this.empData)
      alert('successfully added')

      this.eID=''
      this.fN=''
      this.lN=''
      this.des=''

    }
    else{
      alert('add data first')
    }
    
  }
}
