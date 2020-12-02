import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  displayedColumns: string[] = ['username', 'password1', 'password2', 'email']
  dataSource = [];
  RegisterFormGroup: FormGroup;

  constructor( private _formBuilder: FormBuilder, private _AuthService : AuthService) { }

  ngOnInit(): void {
    this.RegisterFormGroup = this._formBuilder.group({
      username:['', Validators.required],
      email:['', Validators.required],
      password1:['', Validators.required],
      password2:['', Validators.required]      
    })
  }

  postUser(){
    const data = this.RegisterFormGroup.value;
    this._AuthService.postUsuario(data.username, data.email, data.password1, data.password2).subscribe((data:any[])=>{
      if(data != null){
        console.log("Datos agregados")
      } else{
        console.log("Datos no agregados");
      }
    })
  }

}
