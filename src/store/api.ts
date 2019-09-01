import axios from 'axios';
import { ApiResponse, Payday, User, UserResponse, UserSubmit } from '@/store/models';
import { Observable } from 'rxjs';
import { AxiosObservable } from 'axios-observable/dist/axios-observable.interface';

export const api = axios.create({
  baseURL: 'http://localhost:3000/v1',
});

// export function setJWT(jwt: string) {
//   api.defaults.headers.common['Authorization'] = `Token ${jwt}`;
// }

// export function clearJWT() {
//   delete api.defaults.headers.common['Authorization'];
// }

// export async function loginUser(user: UserSubmit): Promise<User|undefined> {
//   try {
//     const response = await api.post('/login', {
//       user,
//     });
//     return (response.data as UserResponse).user;
//   } catch (e) {
//     console.error(e);
//   }
// }

// export function findAllPaydays() {
//   // console.log("findAllPaydays");
//   console.log("@api findAllPaydays()", window.performance.now());
//   const observer = api.get('/paydays');
//   console.log(observer, window.performance.now());
//   return observer;
// }

export async function findAllPaydays() {
  const response = await api.get('/paydays');
  return response;
}
