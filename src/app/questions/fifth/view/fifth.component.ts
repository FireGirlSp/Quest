import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { CodeDialogComponent } from 'src/app/shared/modals/code/code-dialog/code-dialog.component';

@Component({
  selector: 'app-fifth',
  templateUrl: './fifth.component.html',
  styleUrls: ['./fifth.component.scss']
})
export class FifthComponent implements OnInit {

  public formGroupControl: FormGroup;
  public isCorrect: boolean;

  constructor(
    public dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0, 0);
    this.formGroupControl = new FormGroup({
      smiles1: new FormControl(''),
      smiles2: new FormControl(''),
      smiles3: new FormControl(''),
      smiles4: new FormControl(''),
      smiles5: new FormControl('')
    });
  }

  public answer() {
    //ToDo исправить ответ
    if (this.formGroupControl.get('answer').value.toLowerCase().trim() === 'для тебя') {
      console.log('верно');
    }
  }

  public nextPage() {
    this.dialog.open(CodeDialogComponent).afterClosed().subscribe(result => {
      if (result && result.trim() === 'AntonForever') {
        this.router.navigate(['sixth']);
      }
    });
  }
}
