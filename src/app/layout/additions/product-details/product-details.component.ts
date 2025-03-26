import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../shared/services/products.service';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Product } from '../../../shared/interfaces/product';

@Component({


  selector: 'app-product-details',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
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
      400: {
        items: 1
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  pId: string | null = "";
  myProduct !: Product
  constructor(private _ActivatedRoute: ActivatedRoute, private _ProductsService: ProductsService) { }

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((p) => {
      this.pId = p.get('productId');
      this._ProductsService.getSpecProductAPI(this.pId).subscribe({
        next: (res) => {
          this.myProduct = res.data

        }

      })
    })
  }
}
