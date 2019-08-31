import axios from 'axios';
import { Payday, User, UserResponse, UserSubmit } from '@/store/models';

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
//     const response = await axios.post('/login', {
//       user,
//     });
//     return (response.data as UserResponse).user;
//   } catch (e) {
//     console.error(e);
//   }
// }

export async function findAllPaydays(): Promise<Payday> {
  const response = await axios.get('/paydays');
  return response.data;
}
