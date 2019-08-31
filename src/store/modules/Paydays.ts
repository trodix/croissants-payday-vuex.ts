import { VuexModule, Module, getModule, Action, Mutation } from 'vuex-module-decorators';
import store from '@/store';
import { Payday, ApiResponse } from '../models';
import { findAllPaydays } from '../api';
import { AxiosResponse } from 'axios';


@Module({
  dynamic: true,
  namespaced: true,
  name: 'paydays',
  store,
})
class PaydaysModule extends VuexModule {
  paydays: Payday[] = [];

  @Mutation
  setPaydays(paydays: Payday[]) { this.paydays = paydays; }

  @Action({ commit: 'setPaydays' })
  async getAllPaydays() {
    const axiosResponse: AxiosResponse<ApiResponse> = await findAllPaydays();
    const serverResponse: ApiResponse = axiosResponse.data;
    console.log(serverResponse.message);
    const paydays: Payday[] = serverResponse.data;
    console.log(paydays);
    return { paydays };
  }
}

export default getModule(PaydaysModule);
