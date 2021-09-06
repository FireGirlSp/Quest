import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { CodeDialogComponent } from 'src/app/shared/modals/code/code-dialog/code-dialog.component';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.scss']
})
export class ThirdComponent implements OnInit {

  public formGroupControl: FormGroup;
  public isCorrect: boolean;
  private answersArray = ['ведьмаку заплатите чеканной монетой', 'кадиллак', 'лалли', 'районы-кварталы', 'третий раунд'];
  private controlsArray = ['smiles1', 'smiles2', 'smiles3', 'smiles4', 'smiles5'];

  constructor(
    public dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit() {
    this.formGroupControl = new FormGroup({
      smiles1: new FormControl(''),
      smiles2: new FormControl(''),
      smiles3: new FormControl(''),
      smiles4: new FormControl(''),
      smiles5: new FormControl('')
    });
  }

  public answer() {
    const correct = (element, ind) => this.formGroupControl.get(element).value.toLowerCase().trim() === this.answersArray[ind];
    this.isCorrect = this.controlsArray.every(correct);
  }

  public nextPage() {
    this.dialog.open(CodeDialogComponent).afterClosed().subscribe(result => {
      if (result && result.trim() === 'AntonForever') {
        this.router.navigate(['fourth']);
      }
    });
  }
}
