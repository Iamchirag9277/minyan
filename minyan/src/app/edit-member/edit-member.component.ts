import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css']
})
export class EditMemberComponent implements OnInit {

private id = 0;
private sub:any = 0;
private data:any = [];
private ans:any =[];
private loading:any = false;

  constructor(private _route: Router , private route: ActivatedRoute , private http: ApiService) { }

  ngOnInit() {
    this.loading = true;
  	this.sub = this.route.params.subscribe(params => {
       this.id = +params['id'];
       console.log(this.id);
    });

  	this.getmemberdetails();
  	
  }

  getmemberdetails()
  {

  	 this.data = {
  		'id' : this.id
  	};
  	  console.log(this.data);
  	this.http.getmemberdetailapi(this.data).subscribe((data:any) => {
  		this.ans = data;
      console.log(this.ans);
      this.loading = false;
  	});
  }


  editmember(data)
  {
    this.loading = true;
  	this.data = {
  		"id":this.id,
  		"name":data.name,
  		"email":data.email,
  		"phone":data.phone
  	};
  	console.log(data);
  	this.http.editmemberapi(this.data).subscribe((data:any) => {
  		console.log(data);
      this.loading = false;
      if(data['status']==1)
      {
        this._route.navigate(['/active-member']); 
      }

  	});

  	   

  }

}
