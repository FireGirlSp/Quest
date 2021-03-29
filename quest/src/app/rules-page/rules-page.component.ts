import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rules-page',
  templateUrl: './rules-page.component.html',
  styleUrls: ['./rules-page.component.scss']
})
export class RulesPageComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  continue() {
    this.router.navigate(['/first']);
  }

}
