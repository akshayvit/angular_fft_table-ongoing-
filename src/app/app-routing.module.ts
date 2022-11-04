import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatableComponent } from './datable/datable.component';
import { FftcalComponent } from './fftcal/fftcal.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 
   routes=[{path:'',redirectTo:'table'},
    {path: 'table',component: DatableComponent},
  {
    path: 'fftcal',
    component: FftcalComponent
  }];
}