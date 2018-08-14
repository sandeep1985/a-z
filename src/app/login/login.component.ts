import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Login }    from './login';
import {LoginService} from './../../services/login.service';
import {Router} from '@angular/router';

declare var jQuery: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


//declare var jQuery: any;

export class LoginComponent implements OnInit {

  constructor(private _userService : LoginService, private _router : Router) { }

  model = new Login('', '',false);
 
  submitted = false;
  
  rememberMe(event) {
      if ( event.target.checked ) {
        localStorage.setItem('email',this.model.email);
        localStorage.setItem('password',this.model.password);
      }
  }

  onSubmit() { 
    this.submitted = true;
    this._userService.login(this.model.email, this.model.password)
    .subscribe((data :any) =>  {
      
      if(!data.error){
        
        localStorage.setItem('user_id',data.user_login_info[0].id);
        localStorage.setItem('fullname',data.user_login_info[0].fullname);
        localStorage.setItem('logged','true');
        window.location.href = window.location.origin + '/dashboard';
        //this._router.navigateByUrl('/dashboard');
      }else{
        jQuery(".login_fail").show();
      }
    });
  }

  

  ngOnInit() {
    if(localStorage.getItem('email') !=""){
      this.model = new Login(localStorage.getItem('email'), localStorage.getItem('password'),true);
     }
    }   
}
