import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http:HttpClient) {}


  public getsmstext() {
        return this.http.get('http://18.210.45.103/minyan/api/getsmstext');
    }
    public login(data)
    {
    	return this.http.post('http://18.210.45.103/minyan/api/login' , data );	
    }
    public updatesmstext(data)
    {
      return this.http.post('http://18.210.45.103/minyan/api/smstext' , data);  
    }
    public getmemberapi()
    {
      return this.http.get("http://18.210.45.103/minyan/api/activemember");
    }
    public addmemberapi(data)
    {
        return this.http.post("http://18.210.45.103/minyan/api/addmember" , data);
    }
    public memberdeleteapi(data)
    {
      return this.http.post("http://18.210.45.103/minyan/api/memberdelete" , data );
    }
    public getmemberdetailapi(data)
    {
      return this.http.post("http://18.210.45.103/minyan/api/getmember" , data);
    }
    public editmemberapi(data)
    {
      return this.http.post("http://18.210.45.103/minyan/api/updatemember" , data);
    }
    public joinrequestapi()
    {
      return this.http.get("http://18.210.45.103/minyan/api/join_request"); 
    }
    public joindeleteapi(data)
    {
      return this.http.post("http://18.210.45.103/minyan/api/del_join_member" ,data)
    }
    public page(e)
    {
      return this.http.get(e) 
    }
    public friday()
    {
        return this.http.get("http://18.210.45.103/minyan/api/friday_meeting");
    }
}
