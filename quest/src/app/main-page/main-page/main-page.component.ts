import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  
  @ViewChild('container', { static: false }) containerRef: ElementRef;
  @ViewChild('sound', { static: false }) soundRef: ElementRef;
  formGroupControl: FormGroup;
  formGroupPass: FormGroup;
  isPlayed = false;
  // name: FormControl;

  constructor(private router: Router) { }

  ngOnInit() {
    this.formGroupControl = new FormGroup({
      answer: new FormControl('')
    });
    this.formGroupPass = new FormGroup({
      pass: new FormControl('')
    });
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
    }
  }

  answerPass() {
    if (this.formGroupPass.get('pass').value.trim() === 'AntonForever') {
      this.router.navigate(['rules']);
    }
  }
}
