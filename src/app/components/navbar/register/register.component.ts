import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public status :any;
  public display : any;
  constructor(private auth:DataService) { }

  ngOnInit(): void {
  }

  onSubmitHandler(data: any){
    this.display="Please enter the vaild details";
    this.auth.register(data).subscribe({
      error:(error)=>{
          this.status="2";
          this.display=error.error.message;
          console.log(error)
         },
        next:(info)=>{
      this.status="1";
      this.display="Registered successfully";
      console.log(info);
       }
    })
  }
}
