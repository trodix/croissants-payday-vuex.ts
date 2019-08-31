import axios, { AxiosResponse } from 'axios';
import { ApiResponse, Payday, User, UserResponse, UserSubmit } from '@/store/models';

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

export async function findAllPaydays(): Promise<AxiosResponse<ApiResponse>> {
  console.log("findAllPaydays");
  const axiosResponse = await api.get('/paydays');
  return axiosResponse;
}
