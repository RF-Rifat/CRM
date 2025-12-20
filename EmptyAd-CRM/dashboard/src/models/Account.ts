export interface LoginViewModel {
  email: string
  password: string
}

export interface LoginResponse {
  access: string
  refresh: string
}

export interface RegisterViewModel {
  email: string
  password: string
}

export interface RegisterResponse {
  token: string
  isSucceed: boolean
}

export interface ForgetPasswordViewModel {
  email: string
}

export interface ForgetPasswordResponse {
  isSucceed: boolean
}

export interface Account {
  username?: string
  token: string
}
