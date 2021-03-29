import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {
  
  formGroupControl: FormGroup;

  constructor() { }

  ngOnInit() {
    this.formGroupControl = new FormGroup({
      answer: new FormControl('')
    });
  }

  answer() {
    const ans = this.formGroupControl.get('answer').value.toLowerCase().trim();
    if (ans === 'я попрошу у санты' || ans === 'санта') {
      console.log('верно');
    }
  }

}
