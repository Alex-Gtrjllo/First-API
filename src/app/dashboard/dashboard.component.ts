import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { MatDialog } from '@angular/material/dialog';
import { EditComponent } from '../edit/edit.component'


 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  displayedColumns: string[] = ['name', 'surnames', 'age', 'email', 'Modificar', 'Delete']
  dataSource = [];

  info : String = 'No hay datos'
  nameButton : String = 'Mostrar'

  constructor( private _AuthService : AuthService, private _MatDialog : MatDialog) { }

  ngOnInit(): void {   
    
    this.getData();
    // this.getUser(1);
    // this.deleteUser(1);
    
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
      this.getData();
      console.log(this.dataSource);
    })
  }

  update(user:[]){
    const dialog = this._MatDialog.open(EditComponent, {data:user});
    dialog.afterClosed().subscribe(x => {this.getData()})
  }

}
