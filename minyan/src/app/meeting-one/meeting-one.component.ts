import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-meeting-one',
  templateUrl: './meeting-one.component.html',
  styleUrls: ['./meeting-one.component.css']
})
export class MeetingOneComponent implements OnInit {

private ans:any = [];

  constructor(private friday:ApiService ) { }

  ngOnInit() {
	  	this.friday_meeting();
  }


  friday_meeting()
  {
	  	  this.friday.friday().subscribe((data : any[]) =>  {
	  	  	this.ans = data;
	  	  	console.log(this.ans);

	    });
  }

}
