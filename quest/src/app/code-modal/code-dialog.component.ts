import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-code-dialog',
  templateUrl: './code-dialog.component.html',
})
export class CodeDialogComponent implements OnInit {

    formGroupPass: FormGroup;
    answer: string;

    constructor() {}

    ngOnInit() {
        this.formGroupPass = new FormGroup({
            pass: new FormControl('')
        });
    }

}
