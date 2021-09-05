import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { CodeDialogComponent } from 'src/app/shared/modals/code/code-dialog/code-dialog.component';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  @ViewChild('container', { static: false }) containerRef: ElementRef;
  @ViewChild('sound', { static: false }) soundRef: ElementRef;
  public formGroupControl: FormGroup;
  public isStart = false;
  public isCorrect = false;
  public error: string;

  constructor(
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.formGroupControl = new FormGroup({
      answer: new FormControl('')
    });
  }

  public answer() {
    this.error = null;
    if (this.formGroupControl.get('answer').value.toLowerCase().trim() === 'для тебя') {
      this.isCorrect = true;
      this.formGroupControl.get('answer').disable();
    } else {
      this.formGroupControl.get('answer').setErrors({uncorrectValue: true});
      this.error = 'Неправильный ответ';
    }
  }

  public openDialog() {
    const dialogRef = this.dialog.open(CodeDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.trim() === 'AntonForever') {
        this.router.navigate(['rules']);
      }
    });
  }

  public getStart() {
    this.isStart = true;
  }
}
