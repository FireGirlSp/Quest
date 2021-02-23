import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page/main-page.component';
import { RulesPageComponent } from './rules-page/rules-page.component';


const routes: Routes = [
  { path: '', component: MainPageComponent},
  { path: 'rules', component: RulesPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
