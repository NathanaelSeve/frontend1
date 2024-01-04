import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpRequestService } from '../services/httpRequest/http-request.service';



@NgModule({
  declarations: [],
  providers: [
    HttpRequestService
  ],
  imports: [
    CommonModule
  ]
})
export class ReservationModule { }
