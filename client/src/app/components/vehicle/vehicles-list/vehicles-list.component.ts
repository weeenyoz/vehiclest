import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { faSort } from '@fortawesome/free-solid-svg-icons';

import { VehicleService } from '../vehicle.service';
import { VehicleInterface } from '../vehicle.model';

@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.scss'],
})
export class VehiclesListComponent implements OnInit {
  private vehiclesSub: Subscription;

  vehicles: VehicleInterface[];
  faEdit = faEdit;
  faSort = faSort;

  columns = ['Vehicle No', 'Type', 'Category', 'Status', 'Edit'];

  constructor(private vehicleService: VehicleService) {}

  ngOnInit() {
    this.vehicleService.getVehicles();

    this.vehicleService.getVehiclesUpdatedEvent().subscribe((res) => {
      console.log('res in list ', res);

      this.vehicles = res;
    });
  }
}
