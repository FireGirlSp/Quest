import { Component, ElementRef, OnChanges, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, OnChanges {
  
  @ViewChild('container', { static: false }) containerRef: ElementRef;
  @ViewChild('sound', { static: false }) soundRef: ElementRef;
  formGroupControl: FormGroup;
  isPlayed = false;
  // name: FormControl;

  constructor() { }

  ngOnInit() {
    this.formGroupControl = new FormGroup({
      answer: new FormControl('')
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

  ngOnChanges() {
    let audio = this.soundRef.nativeElement;
    console.log(audio);
  }

  playMusic() {
    this.isPlayed = !this.isPlayed;
    this.isPlayed ? this.soundRef.nativeElement.pause() : this.soundRef.nativeElement.play();
    // let audio = this.soundRef.nativeElement.play();
    // console.log(audio);
  }
}
