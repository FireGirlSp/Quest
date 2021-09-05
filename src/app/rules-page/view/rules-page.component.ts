import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rules-page',
  templateUrl: './rules-page.component.html',
  styleUrls: ['./rules-page.component.scss']
})
export class RulesPageComponent {

  constructor(public router: Router) { }

  public continue() {
    this.router.navigate(['/first']);
  }
}
