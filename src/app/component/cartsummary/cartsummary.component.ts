import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/CartItem';
import { CartserviceService } from 'src/app/services/cartservice.service';

@Component({
  selector: 'app-cartsummary',
  templateUrl: './cartsummary.component.html',
  styleUrls: ['./cartsummary.component.css']
})
export class CartsummaryComponent implements OnInit {
cartItems:CartItem[]=[]
  constructor(private cartService:CartserviceService) { }

  ngOnInit(): void {
    this.getCart();
  }
  getCart(){
    this.cartItems=this.cartService.list();
  }
}
