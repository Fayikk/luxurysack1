import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/Brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
})
export class BrandComponent implements OnInit {
  brands: Brand[] = [];
  currentBrand : Brand;
  filtertext="";
  constructor(
    private brandService: BrandService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["categoryId"]){
        this.getBrandsByCategory(params["categoryId"])
      }else{
        this.getBrands()
      }
    })
}

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }

  getBrandsByCategory(categoryId: number) {
    this.brandService.getBrandsByCategory(categoryId).subscribe(response=>{
      this.brands = response.data
    });
  }
  
  setCurrentBrand(brand:Brand){
    this.currentBrand=brand;
  }

  getCurrentBrandClass(brand:Brand){
    
    if(brand == this.currentBrand){
      return "list-group-item active"
    }
    else{
      return "list-group-item"

    }
  }

  getAllBrandClass(){
    if (!this.currentBrand) {
      return "list-group-item active"
      
    }else{
      return "list-group-item"

    }
  }
}
