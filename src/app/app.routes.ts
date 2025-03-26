import { Routes } from '@angular/router';
import { LoginComponent } from './layout/pages/login/login.component';
import { RegisterComponent } from './layout/pages/register/register.component';
import { HomeComponent } from './layout/pages/home/home.component';
import { CartComponent } from './layout/pages/cart/cart.component';
import { BrandsComponent } from './layout/pages/brands/brands.component';
import { CategoriesComponent } from './layout/pages/categories/categories.component';
import { ProductsComponent } from './layout/pages/products/products.component';
import { NotFoundComponent } from './layout/additions/not-found/not-found.component';
import { ForgetPasswordComponent } from './layout/additions/forget-password/forget-password.component';
import { ProductDetailsComponent } from './layout/additions/product-details/product-details.component';

export const routes: Routes = [
    { path: '', redirectTo: "home", pathMatch: "full" },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'home', component: HomeComponent },
    { path: 'cart', component: CartComponent },
    { path: 'productDetails/:productId', component: ProductDetailsComponent },
    { path: 'brands', component: BrandsComponent },
    { path: 'categories', component: CategoriesComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'forgetPassword', component: ForgetPasswordComponent },
    { path: '**', component: NotFoundComponent },
];
