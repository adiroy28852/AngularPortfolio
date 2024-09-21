import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Accordian2Component } from "../accordian2/accordian2.component";
@Component({
  selector: "app-projects",
  standalone: true,
  imports: [Accordian2Component],
  templateUrl: "./portfolio.component.html",
  styleUrls: ["./portfolio.component.css", "../../styles.css"],
})
export class PortfolioComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle("");
  }
}
