import { Component, OnInit } from '@angular/core';
import { reservation } from '../model/reservation';
import { ReservationService } from '../services/reservation.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  reservations: reservation[] | undefined;

  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.reservationService.getReservations().subscribe(reservations => {
      this.reservations = reservations;
    });
  }
}
