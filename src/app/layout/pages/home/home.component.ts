import { RouterLink } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../shared/services/products.service';
import { Product } from '../../../shared/interfaces/product';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,CarouselModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },

    },
    nav: true
  }

  
  allProducts: Product[] = []

  constructor(private _ProductsService: ProductsService) {
  }

  ngOnInit(): void {


    this._ProductsService.getAllProductsAPI().subscribe({
      next: (res) => {
        this._ProductsService = res.data
        this.allProducts = res.data
      },
      error: (err) => {

      },
    })

  }



}
