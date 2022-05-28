import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public status :any;
  public display : any;
  constructor(private auth: DataService) { }

  ngOnInit(): void {
  }

  onSubmitHandler(data: any){
    this.auth.login(data).subscribe({
      next:(info)=>{
      localStorage.setItem('token', info.token)
      localStorage.setItem('user', JSON.stringify(info.user))
      this.status="1";
      this.display="Logged successfully";
      },
    error:(error)=>{
     this.status="2";
     this.display=error.error.message;
     console.log(error);
    }})
  }
}
