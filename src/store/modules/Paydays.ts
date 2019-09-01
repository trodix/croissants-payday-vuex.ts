import { VuexModule, Module, getModule, Action, Mutation, MutationAction } from 'vuex-module-decorators';
import store from '@/store';
import { Payday } from '../models';
import { findAllPaydays } from '../api';


@Module({
  dynamic: true,
  namespaced: true,
  name: 'paydays',
  store,
})
class PaydaysModule extends VuexModule {
  paydays: Payday[] = [];

  get lastPayday() {
    return this.paydays[-1];
  }

  @MutationAction({ mutate: ['paydays'] })
  async getAllPaydays() {
    const response = await findAllPaydays();
    const paydays = response.data;
    return { paydays };
  }

}

export default getModule(PaydaysModule);
