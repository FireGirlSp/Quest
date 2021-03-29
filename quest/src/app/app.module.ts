import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page/main-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';
import { RulesPageComponent } from './rules-page/rules-page.component';
import { FirstComponent } from './questions/first/first.component';
import { FourthComponent } from './questions/fourth/fourth.component';
import { SecondComponent } from './questions/second/second.component';
import { ThirdComponent } from './questions/third/third.component';
import { TenthComponent } from './questions/tenth/tenth.component';
import { FifthComponent } from './questions/fifth/fifth.component';
import { SixthComponent } from './questions/sixth/sixth.component';
import { SeventhComponent } from './questions/seventh/seventh.component';
import { EighthComponent } from './questions/eighth/eighth.component';
import { NinthComponent } from './questions/ninth/ninth.component';
import { FinalComponent } from './final/final.component';
import { HelpDialogComponent } from './help/help-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    RulesPageComponent,
    FirstComponent,
    FourthComponent,
    SecondComponent,
    ThirdComponent,
    TenthComponent,
    FifthComponent,
    SixthComponent,
    SeventhComponent,
    EighthComponent,
    NinthComponent,
    FinalComponent,
    HelpDialogComponent
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
    MatDialogModule
  ],
  entryComponents: [HelpDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
