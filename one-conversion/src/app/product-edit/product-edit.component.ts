import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  paramQuery = '';
  constructor(private activatedRoute:ActivatedRoute) { 
    this.activatedRoute.queryParams.subscribe(data=>{
      this.paramQuery = data.query;
    });
  }

  ngOnInit(): void {
  }

}
