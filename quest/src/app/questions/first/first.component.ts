import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { HelpDialogComponent } from 'src/app/help/help-dialog.component';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
})
export class FirstComponent implements OnInit {

  formGroupControl: FormGroup;
  controlsArray = ['firstWord', 'secondWord', 'thirdWord', 'fourthWord', 'fifthWord', 'sixthWord'];
  answersArray = ['аннигилирую', 'стиль', 'казахстан', 'ашана', 'труп', 'рукава'];
  isCorrect = false;
  isHelp = false;

  constructor(public dialog: MatDialog) { }

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

  getHelp() {
    const dialogRef = this.dialog.open(HelpDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.isHelp = result;
    });
  }

}
