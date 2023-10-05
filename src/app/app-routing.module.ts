import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevlogComponent } from './devlog/devlog.component';
const routes: Routes = [
  { path: 'devlog', component: DevlogComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
