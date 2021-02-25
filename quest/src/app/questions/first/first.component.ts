import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  formGroupControl: FormGroup;
  controlsArray = ['firstWord', 'secondWord', 'thirdWord', 'fourthWord', 'fifthWord', 'sixthWord'];
  answersArray = ['аннигилирую', 'стиль', 'казахстан', 'ашана', 'труп', 'рукава'];
  isCorrect = false;

  constructor() { }

  ngOnInit() {
    this.formGroupControl = new FormGroup({
      firstWord: new FormControl('', Validators.required),
      secondWord: new FormControl('', Validators.required),
      thirdWord: new FormControl('', Validators.required),
      fourthWord: new FormControl('', Validators.required),
      fifthWord: new FormControl('', Validators.required),
      sixthWord: new FormControl('', Validators.required)
    });
  }

  check() {
    const correct = (element, ind) => this.formGroupControl.get(element).value.toLowerCase().trim() === this.answersArray[ind];
    this.isCorrect = this.controlsArray.every(correct);
  }

}
