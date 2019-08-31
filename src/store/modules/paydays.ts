import { VuexModule, Module, getModule, Action, Mutation } from 'vuex-module-decorators';
import store from '@/store';
import { Payday } from '../models';
import { findAllPaydays } from '../api';


@Module({
  dynamic: true,
  namespaced: true,
  name: 'paydays',
  store,
})
class PaydayModule extends VuexModule {
  paydays: Payday[] = [];

  @Mutation
  setPaydays(paydays: Payday[]) { this.paydays = paydays; }

  @Action({ commit: 'setPaydays' })
  async getAllPaydays() {
    const paydays = await findAllPaydays();
    return { paydays };
  }
}

export default getModule(PaydayModule);
