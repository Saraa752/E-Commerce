import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive,Router } from '@angular/router';
import { FlowbiteService } from '../../../shared/services/auth/flowbite/flowbite.service';
import { AuthService } from '../../../shared/services/auth/auth.service';

AuthService

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})


export class NavbarComponent implements OnInit {
  constructor(private _FlowbiteService: FlowbiteService, private _AuthService: AuthService,private _Router:Router) { }

  isLogin: boolean = false


  ngOnInit(): void {

    this._AuthService.userData.subscribe(() => {



      if (this._AuthService.userData.getValue() == null) {
        this.isLogin = false
      }
      else { this.isLogin = true }



    })



    this._FlowbiteService.loadFlowbite(() => {

    })
  }


  logout() {
    localStorage.removeItem("userToken");
    this._AuthService.userData.next(null);
    this._Router.navigate(['/login'])

  }

}
