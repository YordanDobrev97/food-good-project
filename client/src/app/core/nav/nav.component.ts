import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication/authentication.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  constructor(private authService: AuthenticationService){
  }
  ngOnInit(): void {
  }

  isLogged() {
    return this.authService.isLoggedUser()
  }
}
