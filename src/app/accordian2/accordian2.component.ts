import { Component } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AccordionModule } from "ngx-bootstrap/accordion";

@Component({
  selector: "app-accordian2",
  standalone: true,
  imports: [AccordionModule],
  templateUrl: "./accordian2.component.html",
  styleUrl: "./accordian2.component.css",
  providers: [BrowserAnimationsModule],
})
export class Accordian2Component {
  customClass = "customClass";
}
