import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Users }    from './users';
import {UsersService} from './../../services/users.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  usersData:any;
  isNoRecord : Boolean = false;
  constructor(private _userService : UsersService, private _router : Router) { }

  ngOnInit() {
    
    this._userService.getUsers()
    .subscribe((data :any) =>  {
      
      if(!data.error){
        this.isNoRecord = false;
        this.usersData = data.users_info;       
        
      }else{
        this.isNoRecord = true;
      }
    });
  }

}
