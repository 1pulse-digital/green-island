export interface User {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: null | boolean;
  role: Role;
  firstName?: string;
  lastName?: string;
  address?: string;
}

export interface Role {
  id: number;
  name: RoleName;
  type: string;
}

export enum RoleName {
  Customer = "Customer",
  Patient = "Patient",
  Public = "Public",
}
