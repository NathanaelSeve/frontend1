import { Component } from '@angular/core';
import { ReservationService } from './services/reservation.service';
import { OnInit } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  reservations: Object | undefined
constructor(private reservationService: ReservationService){

}

ngOnInit(): void {

  console.log('On init....')
  this.reservationService.getReservations().subscribe((datas)=> {
    this.reservations = datas;
  }) 
    
}

}
