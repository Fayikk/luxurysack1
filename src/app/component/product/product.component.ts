import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/Brand';
import { Product } from 'src/app/models/Product';
import { CartserviceService } from 'src/app/services/cartservice.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products:Product[]=[];
  filterText="";

  constructor(private productService:ProductService,
              private activatedRoute:ActivatedRoute,
              private toastrService:ToastrService,
              private cartService:CartserviceService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getProductsByBrand(params["brandId"])
      }else{
        this.getProducts()
      }
    })
  }
  getProducts(){
    this.productService.getProducts().
    subscribe(response=>{this.products=response.data})
  }


  getProductsByBrand(brandId: number) {
    this.productService.getProductsByBrand(brandId).subscribe(response=>{
      this.products = response.data
    });
  }

  addToCart(product:Product){//addToCart ile ekleme işlemlerini gerçekleştiriyoruz.

    if(product.productId===1){
      this.toastrService.error("Bu Ürün Sepete Eklenemez",product.productName)
    }
    else{
      this.toastrService.success("Sepete Eklendi.",product.productName)
      this.cartService.addToCart(product);
    
    }
    
  }

 
}
