import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page/main-page.component';
import { EighthComponent } from './questions/eighth/eighth.component';
import { FifthComponent } from './questions/fifth/fifth.component';
import { FinalComponent } from './final/final.component';
import { FirstComponent } from './questions/first/first.component';
import { FourthComponent } from './questions/fourth/fourth.component';
import { NinthComponent } from './questions/ninth/ninth.component';
import { SecondComponent } from './questions/second/second.component';
import { SeventhComponent } from './questions/seventh/seventh.component';
import { SixthComponent } from './questions/sixth/sixth.component';
import { TenthComponent } from './questions/tenth/tenth.component';
import { ThirdComponent } from './questions/third/third.component';
import { RulesPageComponent } from './rules-page/rules-page.component';


const routes: Routes = [
  { path: '', component: MainPageComponent},
  { path: 'rules', component: RulesPageComponent},
  { path: 'first', component: FirstComponent},
  { path: 'second', component: SecondComponent},
  { path: 'third', component: ThirdComponent},
  { path: 'fourth', component: FourthComponent},
  { path: 'fifth', component: FifthComponent},
  { path: 'sixth', component: SixthComponent},
  { path: 'seventh', component: SeventhComponent},
  { path: 'eighth', component: EighthComponent},
  { path: 'ninth', component: NinthComponent},
  { path: 'tenth', component: TenthComponent},
  { path: 'final', component: FinalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
