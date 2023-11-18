import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importez vos composants ici
import { AccueilComponent } from './accueil/accueil.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ListeComponent } from './liste/liste.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'reservation', component: ReservationComponent },
  { path: 'liste', component: ListeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
