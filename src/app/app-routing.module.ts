import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LineaComponent } from './components/linea/linea.component';
import { DonaComponent } from './components/dona/dona.component';
import { RadarComponent } from './components/radar/radar.component';
import { BarraComponent } from './components/barra/barra.component';

const routes: Routes = [
  { path: 'line', component: LineaComponent },
  { path: 'donut', component: DonaComponent },
  { path: 'radar', component: RadarComponent },
  { path: 'bar', component: BarraComponent },
  { path: '**', redirectTo: 'line', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
