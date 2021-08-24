export interface User {
  id: number
  username: string
  email: string
  provider: string
  confirmed: boolean
  blocked: null | boolean
  role: Role
}

export interface Role {
  id: number
  name: RoleName
  type: string
}

export enum RoleName {
  Authenticated = "Authenticated",
  AuthenticatedPatient = "Authenticated Patient",
  Public = "Public",
}
