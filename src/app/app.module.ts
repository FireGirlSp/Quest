import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainPageComponent } from './main-page/view/main-page.component';
import { CodeDialogComponent } from './shared/modals/code/code-dialog/code-dialog.component';
import { RulesPageComponent } from './rules-page/view/rules-page.component';
import { FirstComponent } from './questions/first/view/first.component';
import { HelpComponent } from './shared/modals/help/help.component';
import { SecondComponent } from './questions/second/view/second.component';
import { ThirdComponent } from './questions/third/view/third.component';
import { FourthComponent } from './questions/fourth/view/fourth.component';
import { FifthComponent } from './questions/fifth/view/fifth.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    CodeDialogComponent,
    RulesPageComponent,
    FirstComponent,
    HelpComponent,
    SecondComponent,
    ThirdComponent,
    FourthComponent,
    FifthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
  ],
  entryComponents: [HelpComponent, CodeDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
