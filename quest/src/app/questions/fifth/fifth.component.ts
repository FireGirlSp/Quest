import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-fifth',
  templateUrl: './fifth.component.html',
  styleUrls: ['./fifth.component.scss']
})
export class FifthComponent implements OnInit {

  formGroupControl: FormGroup;

  constructor() { }

  ngOnInit() {
    this.formGroupControl = new FormGroup({
      smiles1: new FormControl(''),
      smiles2: new FormControl(''),
      smiles3: new FormControl(''),
      smiles4: new FormControl(''),
      smiles5: new FormControl('')
    });
  }

  answer() {
    //ToDo исправить ответ
    if (this.formGroupControl.get('answer').value.toLowerCase().trim() === 'для тебя') {
      console.log('верно');
    }
  }

}
