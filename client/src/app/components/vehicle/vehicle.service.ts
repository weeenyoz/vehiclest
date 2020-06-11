import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

import {
  VehicleInterface,
  EditVehicleInterface,
  CreateVehicleInterface,
} from './vehicle.model';
import { NotificationInterface } from '../notification/notification.model';

@Injectable({ providedIn: 'root' })
export class VehicleService {
  getVehiclesListener = new Subject<VehicleInterface[]>();
  notificationListener = new Subject<NotificationInterface>();

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

  notificationUpdatedEvent() {
    return this.notificationListener.asObservable();
  }

  editVehicle(data: EditVehicleInterface) {
    const { vehicleNo } = data;

    let notification: NotificationInterface = {
      type: '',
      message: '',
    };

    this.http
      .put(`http://localhost:5000/api/vehicles/${vehicleNo}`, { data })
      .subscribe(
        (res: { message: string }) => {
          this.getVehicles();

          notification.type = 'success';
          notification.message = res.message;

          this.notificationListener.next(notification);
        },
        (err: { error: { message: string } }) => {
          notification.type = 'danger';
          notification.message = err.error.message;

          this.notificationListener.next(notification);

          console.log(err);
        }
      );
  }

  redirect() {
    this.router.navigate(['/']);
  }
}
