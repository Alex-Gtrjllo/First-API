import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  loginFormGroup: FormGroup;

  constructor( private _formBuilder: FormBuilder, private _AuthService : AuthService, public dialogRef: MatDialogRef<EditComponent>, @Inject(MAT_DIALOG_DATA) public data: []) { }

  ngOnInit(): void {
    // console.log(this.data['id']);
    this.loginFormGroup = this._formBuilder.group({
      name:[this.data['name'], Validators.required],
      surnames:[this.data['surnames'], Validators.required],
      age:[this.data['age'], Validators.required],
      email:[this.data['email'], Validators.required]
    })
  }

  putUser(){
    const data = this.loginFormGroup.value;
    this._AuthService.putUser(this.data['id'], data.name, data.surnames, data.age, data.email).subscribe((data:any[])=>{
      if(data != null){
        this.dialogRef.close();
      } else{
        console.log("Datos no agregados");
      }
    })
  }

  closeDialog(){
    this.dialogRef.close();
  }

}
