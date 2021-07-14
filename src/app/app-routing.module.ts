import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodocomponentComponent } from './todocomponent/todocomponent.component';

const routes: Routes = [
  { path: "", component: TodocomponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
