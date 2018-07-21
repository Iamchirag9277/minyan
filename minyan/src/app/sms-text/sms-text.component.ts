import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {Router} from "@angular/router";
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';

@Component({ 
  selector: 'app-sms-text',
  templateUrl: './sms-text.component.html',
  styleUrls: ['./sms-text.component.css']
})
export class SmsTextComponent implements OnInit {

private ans : any[];
private ans2 : any[];
private text11:any = "";
private text12:any = "";
private text13:any = "";
private text14:any = "";
private text15:any = "";
private show:boolean = false;
private loading:boolean = false;
private  swal:any;
private text1:any[];
private text2:any[];
private text3:any[];
private text4:any[];
private text5:any[];

  constructor(private smstext:ApiService , private toastr: ToastrService ) { }

  ngOnInit() {
    this.loading = true;
    this.getsmstext();
  }
 

   getsmstext() {
    console.log("hello");
     //this.loading = true;
     this.smstext.getsmstext().subscribe((data : any[]) =>  {
     	this.ans = data;
      this.text11 = this.ans['text1'];
      this.text12 = this.ans['text2'];
      this.text13 = this.ans['text3'];
      this.text14 = this.ans['text4'];
      this.text15 = this.ans['text5'];
      this.loading = false;
    });
      
  }

  smstextform(data)
  {

   this.loading = true;
     
    var smsdata = {
        text1:data.text1,
        text2:data.text2,
        text3:data.text3,
        text4:data.text4,
        text5:data.text5
    };

     this.smstext.updatesmstext(smsdata).subscribe((data : any[]) =>  {
      this.ans2 = data
     if(this.ans2["status"]== 1)
     {
        //this.toastr.success('Done', 'sms Text Successfully Update');
        Swal("Good job!", "SMS Text Change Successfully", "success");
        this.ngOnInit();
     }
     else
     {
        Swal("Bad job!", "Oops! Something went wrong", "error");
        this.getsmstext();
     }
        this.loading = false;
    
    });


  }
}
