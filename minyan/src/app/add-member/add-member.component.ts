import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import Swal from 'sweetalert2';
import {Router} from "@angular/router";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit {

private loading =  false;
private memberdata:any = [];

  constructor(private http:ApiService , private route:Router , private toastr: ToastrService) { }

  ngOnInit() {  }


  addmember(e)
  {

  this.loading = true;  

  	this.memberdata = {
  		name:e.name,
  		phone:e.phone,
  		email:e.email
  	};
    
  	this.http.addmemberapi(this.memberdata).subscribe((data:any[]) => {
      
      this.loading = false; 

  		if(data["status"] == 0)
  		{	
  			 Swal("Bad job!", "please enter valid data", "error");
  		}
      else if(data["status"] == 2)
      { 
         Swal("Bad job!", "Email address already registered", "error");
      }
  		else
  		{
  			 this.toastr.success('member Successfully added' , 'Done');
  			 this.route.navigate(['/active-member'])
  		}
  	});
  }

}
