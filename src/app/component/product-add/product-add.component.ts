import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  productAddForm:FormGroup;
  constructor(private productService:ProductService,
              private formBuilder:FormBuilder,
              private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createProductForm();
  }

  createProductForm() {
    this.productAddForm = this.formBuilder.group({
      //ürün eklerke formda olmasını istediğimiz alanları burada configure edeceğiz.
      productId: ['', Validators.required], //burada propertynin default değeri boş olsun ve valiator'ın gerekli olduğunu bildiriyoruz.
      brandId: ['', Validators.required],
      productName: ['', Validators.required],
      price: ['', Validators.required],
      size: ['', Validators.required],
      description: ['', Validators.required],
      
      //html'imizde hangi alanlar map edilecek ve o alandaki kurallar nelerdir .
      //Bu alan onunla ilgilenmektedir.
    });
  }

  add(){
    if(this.productAddForm.valid){
      let productModel = Object.assign({},this.productAddForm.value)
      this.productService.add(productModel).subscribe(response=>{
        this.toastrService.success(response.message,"Success")
      },responseError=>{
        if(responseError.error.Errors.length>0){
          for (let i = 0; i <responseError.error.Errors.length; i++) {
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage
              ,"Validation error")
          }       
        } 
      })
      
    }else{
      this.toastrService.error("Form doesnt full","Caution")
    }
    
  }

  // productId:number
  // brandId:number
  // productName:string
  // price:number
  // size:number
  // description:string
}
