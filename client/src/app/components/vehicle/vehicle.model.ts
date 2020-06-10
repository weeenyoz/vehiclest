export interface VehicleInterface {
  vehicleNo: string;
  department: string;
  lastServiceDate: string;
  nextServiceDate: string;
  vehType: string;
  parkinglot: string;
  status: string;
  rentalId: string;
  leaseStart: string;
  leaseEnd: string;
  vehicleModel: string;
  gearType: string;
  catType: string;
  modified_date: string;
  Remarks: string;
}

export interface EditVehicleInterface
  extends Omit<
    VehicleInterface,
    'department' | 'status' | 'rentalId' | 'modified_date'
  > {}
