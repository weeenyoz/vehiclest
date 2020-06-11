import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';

import { VehicleService } from '../vehicle/vehicle.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {
  notificationSub: Subscription;
  type: string;
  message: string;

  dismissible = true;

  constructor(private vehicleService: VehicleService) {}

  ngOnInit(): void {
    this.vehicleService
      .notificationUpdatedEvent()
      .subscribe(({ type, message }) => {
        this.type = type;
        this.message = message;
      });
  }

  onClosed() {
    this.type = '';
    this.message = '';
  }
}
