import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page/main-page.component';
import { FirstComponent } from './questions/first/first.component';
import { FourthComponent } from './questions/fourth/fourth.component';
import { RulesPageComponent } from './rules-page/rules-page.component';


const routes: Routes = [
  { path: '', component: MainPageComponent},
  { path: 'rules', component: RulesPageComponent},
  { path: 'first', component: FirstComponent},
  { path: 'fourth', component: FourthComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
