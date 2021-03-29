import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { CodeDialogComponent } from 'src/app/code-modal/code-dialog.component';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  
  @ViewChild('container', { static: false }) containerRef: ElementRef;
  @ViewChild('sound', { static: false }) soundRef: ElementRef;
  formGroupControl: FormGroup;
  isPlayed = false;
  isStart = false;
  isCorrect = false;
  // name: FormControl;

  constructor(private router: Router,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.formGroupControl = new FormGroup({
      answer: new FormControl('')
    });

    setTimeout(() => {
      this.isStart = true;
    }, 1000);
    // let audio = this.soundRef.nativeElement;
    // console.log(audio);
    // var audio = $("#sound")[0];
    // $("#container").mouseenter(function() {
    //   audio.play();
    // }).mouseleave(function() {
    //   audio.pause();
    // });
    // this.name = new FormControl('');

  }

  playMusic() {
    this.isPlayed = !this.isPlayed;
    this.isPlayed ? this.soundRef.nativeElement.pause() : this.soundRef.nativeElement.play();
    // let audio = this.soundRef.nativeElement.play();
    // console.log(audio);
  }

  answer() {
    if (this.formGroupControl.get('answer').value.toLowerCase().trim() === 'для тебя') {
      console.log('верно');
      this.isCorrect = true;
      this.formGroupControl.get('answer').disable();

      this.openDialog();
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(CodeDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result.trim() === 'AntonForever') {
        this.router.navigate(['rules']);
      }
    });
  }
}
