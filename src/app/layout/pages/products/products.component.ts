import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  
  price : any = signal<number>(40);
  Quan : any = signal<number>(100).asReadonly();


  totalVal:any;
  
  ngOnInit():void{

    this.totalVal=computed(()=> this.price()* this.Quan())
   

  }


}
