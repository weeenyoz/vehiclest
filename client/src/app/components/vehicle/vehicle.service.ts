import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

import {
  VehicleInterface,
  EditVehicleInterface,
  CreateVehicleInterface,
} from './vehicle.model';

@Injectable({ providedIn: 'root' })
export class VehicleService {
  getVehiclesListener = new Subject<VehicleInterface[]>();

  constructor(public http: HttpClient, private router: Router) {}

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

  editVehicle(data: EditVehicleInterface) {
    const { vehicleNo } = data;

    this.http
      .put(`http://localhost:5000/api/vehicles/${vehicleNo}`, { data })
      .subscribe(
        (res) => {
          this.getVehicles();
        },
        (err) => console.log(err)
      );
  }

  redirect() {
    this.router.navigate(['/']);
  }
}
