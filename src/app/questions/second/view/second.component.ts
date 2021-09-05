import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { HelpComponent } from 'src/app/shared/modals/help/help.component';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {
  
  public formGroupControl: FormGroup;
  public isHelp: boolean;
  public isHelpNext: boolean;

  constructor(
    public dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit() {
    this.formGroupControl = new FormGroup({
      answer: new FormControl('')
    });
  }

  public answer() {
    const answer = this.formGroupControl.get('answer').value.toLowerCase().trim();
    if (answer === 'я попрошу у санты' || answer === 'санта') {
      console.log('верно');
    }
  }

  public getHelp() {
    const dialogRef = this.dialog.open(HelpComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (this.isHelp && result) {
        this.isHelpNext = true;
      }
      if (result) {
        this.isHelp = true;
      }
    });
  }
}
