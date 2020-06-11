import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';

import {
  VehicleInterface,
  EditVehicleInterface,
  CreateVehicleInterface,
} from '../vehicle.model';
import { gearTypesOptions, parkingLotsOptions, catTypeOptions } from './data';
import { VehicleService } from '../vehicle.service';
@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.scss'],
})
export class VehicleDetailsComponent implements OnInit {
  @Input('vehicle') vehicle: VehicleInterface;
  @Input('modalRef') modalRef: BsModalRef;
  @Input('isEdit') isEdit: boolean;

  vehicleForm: FormGroup;

  faCalendarAlt = faCalendarAlt;
  gearTypesOptions = gearTypesOptions;
  parkingLotsOptions = parkingLotsOptions;
  catTypeOptions = catTypeOptions;

  constructor(private vehicleService: VehicleService) {}

  ngOnInit() {
    this.vehicleForm = new FormGroup({
      vehicleNo: new FormControl(null, {
        validators: [
          Validators.required,
          Validators.minLength(7),
          Validators.maxLength(7),
        ],
      }),
      vehType: new FormControl(null, {
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(3),
        ],
      }),
      lastServiceDate: new FormControl(null, {
        validators: [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      }),
      nextServiceDate: new FormControl(null, {
        validators: [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      }),
      parkinglot: new FormControl(null, {
        validators: [Validators.required],
      }),
      leaseStart: new FormControl(null, {
        validators: [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      }),
      leaseEnd: new FormControl(null, {
        validators: [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      }),
      vehicleModel: new FormControl(null, {
        validators: [Validators.required],
      }),
      gearType: new FormControl(null, {
        validators: [Validators.required],
      }),
      catType: new FormControl(null, {
        validators: [Validators.required],
      }),
      Remarks: new FormControl(null),
    });

    if (this.isEdit) this.vehicleForm.setValue({ ...this.vehicle });
  }

  onSubmit() {
    const data: EditVehicleInterface | CreateVehicleInterface = {
      ...this.vehicleForm.value,
    };

    if (this.isEdit) {
      this.vehicleService.editVehicle(data);
    }
  }

  hideModel() {
    this.modalRef.hide();
  }
}
