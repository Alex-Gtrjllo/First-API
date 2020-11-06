import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  displayedColumns: string[] = ['name', 'surnames', 'age', 'email']
  dataSource = [];
  loginFormGroup: FormGroup;

  constructor( private _formBuilder: FormBuilder, private _AuthService : AuthService ) { }

  ngOnInit(): void {
    this.loginFormGroup = this._formBuilder.group({
      name:['', Validators.required],
      surnames:['', Validators.required],
      age:['', Validators.required],
      email:['', Validators.required]
    })
  }

  getData(){
    this._AuthService.getUsers().subscribe((data:any[])=>{
      this.dataSource = data;
      console.log(this.dataSource);
    })
  }

  getUser(id:number){
    this._AuthService.getUser(id).subscribe((data:any[])=>{
      this.dataSource = data;
      console.log(this.dataSource);
    })
  }

  deleteUser(id:number){
    this._AuthService.deleteUser(id).subscribe((data:any[])=>{
      this.dataSource = data;
      console.log(this.dataSource);
    })
  }

  postUser(){
    const data = this.loginFormGroup.value;
    this._AuthService.postUser(data.name, data.surnames, data.age, data.email).subscribe((data:any[])=>{
      if(data != null){
        console.log("Datos agregados")
        this.getData();
      } else{
        console.log("Datos no agregados");
      }
    })
  }

  

}