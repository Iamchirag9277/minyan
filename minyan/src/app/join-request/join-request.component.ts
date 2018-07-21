import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import  Swal   from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-join-request',
  templateUrl: './join-request.component.html',
  styleUrls: ['./join-request.component.css']
})
export class JoinRequestComponent implements OnInit {

private ans:any = [];
private ans2:any = [];
private loading:any = false;

  constructor(private joinrequest:ApiService , private toastr: ToastrService) { }

  ngOnInit() {
     this.loading = true;
    this.getmember();
  }

getmember()
{
      this.joinrequest.joinrequestapi().subscribe((data:any) => {
      this.ans2 = data;
      console.log(this.ans2);
      this.loading  = false;
    });
}


  insertmember(id)
  { 
 this.loading = true;
var r = confirm("Press a button!");

   if(r == true)
    {
       
        var message = id.message;
        var name = message.match(/(?:"[^"]*"|^[^"]*$)/)[0].replace(/"/g, "");
          var data = {
          "name":name,
          "phone":id.phone,
          "email":""
          };

          this.joinrequest.addmemberapi(data).subscribe((data:any) => {
            console.log(data);

              if(data['status']==1)
              {
                this.delete_request(id.id);
                this.toastr.success('Done', 'member Added successfully');
              }
          });
    }
    else
    {

    }


  }

  deletemember(id)
  {
    this.loading = true;
    var r = confirm("Press a button!");
    if(r == true)
    {
            this.delete_request(id);
            this.toastr.success('Done', 'Request Decline Successfully');
    }
    else
    {

    }
  }
 

  delete_request(id)
  {

    var data = {
      id:id
    }

    this.joinrequest.joindeleteapi(data).subscribe((data:any) => {
        this.ans = data;
        console.log(this.ans);
        if(data['status']==1)
        {
             this.getmember();
        }

          this.loading = false;

      });

  

  }

}
