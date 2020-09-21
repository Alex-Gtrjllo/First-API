import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users = [];

  constructor( private serviceService : ServiceService ) { }

  ngOnInit(): void {

    this.serviceService.getUser("users/").subscribe((data : any[]) => {
      console.log(data);

      this.users = data;

    })

  }

}
