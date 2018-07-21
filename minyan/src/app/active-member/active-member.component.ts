import { Component, OnInit } from '@angular/core';
import { ApiService} from '../api.service';
import {Router} from "@angular/router";
import  Swal   from 'sweetalert2';
import {ElementRef, Renderer2, ViewChild  } from '@angular/core';


declare var jquery:any;
declare var $ :any;


@Component({
  selector: 'app-active-member',
  templateUrl: './active-member.component.html',
  styleUrls: ['./active-member.component.css']
})
export class ActiveMemberComponent implements OnInit {
 @ViewChild('page') el:ElementRef;

private ans:any = [];
private ans2:any = [];
private data:any = [];
private delid:any = [];
private loading:any = [];


  constructor(private http:ApiService , private route:Router , private rd: Renderer2 , el: ElementRef) { 


     el.nativeElement.querySelector('.page');

   }

  ngOnInit() {
    console.log("hello Admin");
  	this.getmember();


  // let btn = this.rd.createElement("button");  
  // let text = this.rd.createText("Click")
  // this.rd.appendChild(btn, text);
  // this.rd.appendChild(this.el.nativeElement, btn)
  // this.rd.listen(btn, "click", () => console.log(1));

  }

  getmember()
  {


      this.loading = true;	

  	   this.http.getmemberapi().subscribe((data : any[]) => {
  	     	this.ans2 = data;
          console.log(this.ans2);
          this.ans =  this.ans2.data
  		    this.loading = false;

        var from = this.ans2.from;
        var last_page = this.ans2.last_page;
        var first_page_url = this.ans2.first_page_url;
        var last_page_url = this.ans2.last_page_url;
        console.log(first_page_url);

       $('.page').html("");

      while(from <= last_page)
    {
        // $('.page').append('<button  type="button" class="btn btn-secondary"  (click)=firstpage(http://18.210.45.103/minyan/api/activemember?page='+from+')> '+ from +'</button>');
        
         let btn = this.rd.createElement("button");
         let number:number = from;  
         let text = this.rd.createText(from)
         this.rd.appendChild(btn, text);
         this.rd.appendChild(this.el.nativeElement, btn)
         this.rd.listen(btn, "click", (evt) => {  
            this.http.page('http://18.210.45.103/minyan/api/activemember?page='+number+'').subscribe((data : any[]) => {
            this.ans2 = data;
            this.ans =  this.ans2.data
            console.log(this.ans2);
        });
      });

         from++; 

    }

  	});

  }

  memberdelete(e)
  { 
     
    this.delid = {
      id:e
    };

      var r = confirm("Press a button!");
        if (r == true) {
           
        this.http.memberdeleteapi(this.delid).subscribe((data:any[]) => {

            console.log(data);
              if(data['status']==1)
             {

                Swal("Your member success deleted" , "success" , "success");
                this.getmember(); 
                
             }


          });

        

           
        } 
        else
         {
            console.log(e);
             Swal("Your member is safe!" , "success" , "success" );
         }


    }

    firstpage(e)
    { 
        alert(e);
          this.http.page(e).subscribe((data : any[]) => {
          this.ans2 = data;
          console.log(this.ans2);
        });
    }
}
