import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { CodeDialogComponent } from 'src/app/shared/modals/code/code-dialog/code-dialog.component';
import { HelpComponent } from 'src/app/shared/modals/help/help.component';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.scss']
})
export class FourthComponent implements OnInit {

  private answersArray = ['напрасно', 'подчеркивает', 'ошибка', 'двигать', 'бабки', 'выручает', 'игрок'];
  private controlsArray = ['firstWord', 'secondWord', 'thirdWord', 'fourthWord', 'fifthWord', 'sixthWord', 'seventhWord'];
  public formGroupControl: FormGroup;
  public isCorrect: boolean;
  public isHelp: boolean;

  constructor(
    public dialog: MatDialog,
    private router: Router
  ) { }

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

  public check() {
    const correct = (element, ind) => this.formGroupControl.get(element).value.toLowerCase().trim() === this.answersArray[ind];
    this.isCorrect = this.controlsArray.every(correct);
  }

  public getHelp() {
    const dialogRef = this.dialog.open(HelpComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.isHelp = true;
      }
    });
  }

  public nextPage() {
    this.dialog.open(CodeDialogComponent).afterClosed().subscribe(result => {
      if (result && result.trim() === 'AntonForever') {
        this.router.navigate(['fifth']);
      }
    });
  }
}
