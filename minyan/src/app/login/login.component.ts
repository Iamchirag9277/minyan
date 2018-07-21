import { Component, OnInit , OnDestroy} from '@angular/core';
import { ApiService } from '../api.service';
import {Router} from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit, OnDestroy {
	
 ans : any[];
 private loading:boolean = false;

  constructor(private smstext:ApiService , private route:Router , private toastr: ToastrService) {  }

  ngOnInit() {
  		const body = document.getElementsByTagName('body')[0];
    	body.classList.add('hide_nav');
	}	

	 ngOnDestroy() {
   	 	const body = document.getElementsByTagName('body')[0];
    	body.classList.remove('hide_nav');
  }

   onSubmit(login) {
    this.loading = true;
    var uname = login.email;
    var pass = login.password;
    
    var post_var = {
      email:uname,
      password:pass
    };

      this.smstext.login(post_var).subscribe((data : any[])  => {
      this.ans = data
      console.log(this.ans["status"]);

      this.loading = false;

      if(this.ans["status"]== 1)
      {
        localStorage.setItem('currentUser', 'hello');
        this.route.navigate(['/dashboard']);
        this.toastr.success('Login successfully' , 'Done');
      }
      else
      {
        Swal("Bad job!", "please enter valid username and password", "error");
      }

    });

  }

}