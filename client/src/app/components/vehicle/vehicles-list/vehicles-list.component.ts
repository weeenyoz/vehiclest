import {
  Component,
  OnInit,
  TemplateRef,
  OnDestroy,
  Output,
  EventEmitter,
} from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { faSort } from '@fortawesome/free-solid-svg-icons';

import { VehicleService } from '../vehicle.service';
import { VehicleInterface, EditVehicleInterface } from '../vehicle.model';

@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.scss'],
})
export class VehiclesListComponent implements OnInit, OnDestroy {
  private vehiclesSub: Subscription;
  modalRef: BsModalRef;

  @Output() isEdit: EventEmitter<boolean> = new EventEmitter();

  vehicle: EditVehicleInterface;
  vehicles: VehicleInterface[];

  faEdit = faEdit;
  faSort = faSort;

  columns = ['Vehicle No', 'Type', 'Category', 'Status', 'Edit'];

  constructor(
    private vehicleService: VehicleService,
    private modalService: BsModalService
  ) {}

  ngOnInit() {
    this.vehicleService.getVehicles();

    this.vehiclesSub = this.vehicleService
      .getVehiclesUpdatedEvent()
      .subscribe((res) => {
        this.vehicles = res;
      });
  }

  ngOnDestroy() {
    this.vehiclesSub.unsubscribe();
  }

  showModal(
    vehicle: VehicleInterface,
    modal: TemplateRef<any>,
    isEdit: boolean
  ) {
    this.modalRef = this.modalService.show(modal);

    if (isEdit) {
      const {
        vehicleNo,
        lastServiceDate,
        nextServiceDate,
        vehType,
        parkinglot,
        leaseStart,
        leaseEnd,
        vehicleModel,
        gearType,
        catType,
        Remarks,
      } = vehicle;

      this.vehicle = {
        vehicleNo,
        lastServiceDate,
        nextServiceDate,
        vehType,
        parkinglot,
        leaseStart,
        leaseEnd,
        vehicleModel,
        gearType,
        catType,
        Remarks,
      };
    }

    this.isEdit.emit(isEdit);
  }
}
