import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products:any;
  id:any;
  constructor(private routes:ActivatedRoute, private dataservice:DataService) {


       }

       ngOnInit(): void {
         this.dataservice.getProducts().subscribe(
           x=> {this.products=x;
           })
       }

      }
