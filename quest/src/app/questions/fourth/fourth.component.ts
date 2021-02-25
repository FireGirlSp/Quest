import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.scss']
})
export class FourthComponent implements OnInit {

  formGroupControl: FormGroup;
  controlsArray = ['firstWord', 'secondWord', 'thirdWord', 'fourthWord', 'fifthWord', 'sixthWord', 'seventhWord'];
  answersArray = ['напрасно', 'подчеркивает', 'ошибка', 'двигать', 'бабки', 'выручает', 'игрок'];
  isCorrect = false;

  constructor() { }

  ngOnInit() {
    this.formGroupControl = new FormGroup({
      firstWord: new FormControl('', Validators.required),
      secondWord: new FormControl('', Validators.required),
      thirdWord: new FormControl('', Validators.required),
      fourthWord: new FormControl('', Validators.required),
      fifthWord: new FormControl('', Validators.required),
      sixthWord: new FormControl('', Validators.required),
      seventhWord: new FormControl('', Validators.required),
    });
  }

  check() {
    const correct = (element, ind) => this.formGroupControl.get(element).value.toLowerCase().trim() === this.answersArray[ind];
    this.isCorrect = this.controlsArray.every(correct);
  }

}
