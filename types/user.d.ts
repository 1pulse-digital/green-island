import { MedicalAidDetailsType } from "./medicalAid";

export interface User {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: null | boolean;
  role: Role;
  first_name?: string;
  last_name?: string;
  address?: string;
  rsa_id?: string;
  medical_aid_details?: MedicalAidDetailsType;
  phone_number?: string;
  apt_floor_number?: string;
  complex_building_name?: string;
}

export interface Role {
  id: number;
  name: RoleName;
  type: string;
}

export type RoleName = "Customer" | "Patient" | "Public" | "Admin"
