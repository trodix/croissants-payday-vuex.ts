export interface MenuItem {
  title: string;
  icon: string;
  link: string;
}

export interface ApiResponse {
  message: string,
  data?: any
}

export interface Payday {
  _id?: string;
  player: string|object;
  rule: string|object;
  date: Date;
  payed: boolean;
}

export interface User {
  _id?: string;
  email: string,
  token: string,
  username: string,
  image?: string
}

export interface UserSubmit {
  email: string,
  password: string;
}

export interface UserResponse {
  user: User
}