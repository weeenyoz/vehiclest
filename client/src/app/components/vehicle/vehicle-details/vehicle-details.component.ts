import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';

import { VehicleInterface, EditVehicleInterface } from '../vehicle.model';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.scss'],
})
export class VehicleDetailsComponent implements OnInit {
  @Input('vehicle') vehicle: VehicleInterface;
  @Input('modalRef') modalRef: BsModalRef;

  faCalendarAlt = faCalendarAlt;
  vehicleForm: FormGroup;
  isEdit: boolean;
  isOpen: boolean;

  constructor() {}

  ngOnInit() {
    Object.keys(this.vehicle).length > 0
      ? (this.isEdit = true)
      : (this.isEdit = false);

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

    this.isEdit ? this.setForm(this.vehicle) : this.setForm();
  }

  setForm(vehicle?: EditVehicleInterface) {
    vehicle ? this.vehicleForm.setValue({ ...vehicle }) : this.setForm();
  }

  onSubmit() {
    console.log('aaa');
  }

  hideModel() {
    this.modalRef.hide();
  }
}
