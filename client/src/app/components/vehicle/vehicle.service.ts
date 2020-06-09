import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

import { VehicleInterface } from './vehicle.model';

@Injectable({ providedIn: 'root' })
export class VehicleService {
  getVehiclesListener = new Subject<VehicleInterface[]>();

  constructor(public http: HttpClient) {}

  getVehicles() {
    this.http
      .get<{ vehicles: VehicleInterface[] }>(
        'http://localhost:5000/api/vehicles'
      )
      .subscribe(
        ({ vehicles }) => {
          this.getVehiclesListener.next(vehicles);
        },
        (error) => console.log('error: ', error)
      );
  }

  getVehiclesUpdatedEvent() {
    return this.getVehiclesListener.asObservable();
  }
}
