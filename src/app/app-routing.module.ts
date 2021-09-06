import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPageComponent } from './main-page/view/main-page.component';
import { FirstComponent } from './questions/first/view/first.component';
import { SecondComponent } from './questions/second/view/second.component';
import { ThirdComponent } from './questions/third/view/third.component';
import { RulesPageComponent } from './rules-page/view/rules-page.component';


const routes: Routes = [
  { path: '', component: MainPageComponent},
  { path: 'rules', component: RulesPageComponent},
  { path: 'first', component: FirstComponent},
  { path: 'second', component: SecondComponent},
  { path: 'third', component: ThirdComponent},
  // { path: 'fourth', component: FourthComponent},
  // { path: 'fifth', component: FifthComponent},
  // { path: 'sixth', component: SixthComponent},
  // { path: 'seventh', component: SeventhComponent},
  // { path: 'eighth', component: EighthComponent},
  // { path: 'ninth', component: NinthComponent},
  // { path: 'tenth', component: TenthComponent},
  // { path: 'final', component: FinalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
