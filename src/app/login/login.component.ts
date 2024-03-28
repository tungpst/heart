import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { log } from 'console';
import { Button, ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive,ButtonModule, CheckboxModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router) {
    
  }

  // goPlaces() {
  //   console.log("ok");
    
  //   this.router.navigate(['/', 'test']);

  //   console.log("ok");
  // }
}
