import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-heart',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './heart.component.html',
  styleUrl: './heart.component.css'
})
export class HeartComponent implements OnInit {
  ngOnInit(): void {
    if (typeof sessionStorage !== 'undefined') {
      if (!sessionStorage.getItem('foo')) { 
        sessionStorage.setItem('foo', 'no reload') 
        location.reload() 
      } else {
        sessionStorage.removeItem('foo') 
      }
    } else if (typeof localStorage !== 'undefined') {
      if (!localStorage.getItem('foo')) { 
        localStorage.setItem('foo', 'no reload') 
        location.reload() 
      } else {
        localStorage.removeItem('foo') 
      }
    } else {
      console.log('Successfully.');
    }
  }
  
}
