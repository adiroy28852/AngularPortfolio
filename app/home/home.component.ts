import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLinkActive, RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.css',
    '/src/styles.css'
  ]
})

export class HomeComponent {



  constructor(private titleService: Title) {
    this.titleService.setTitle('BC | Home')
  }



}
