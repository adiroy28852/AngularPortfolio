import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'ngx-bootstrap/accordion';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    AccordionModule
  ],
  // templateUrl: '../accordion/accordion.component.html',
  // styleUrl: '../accordion/accordion.component.css',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  providers: [BrowserAnimationsModule]
})
export class PortfolioComponent {
  customClass = 'customClass';

}
