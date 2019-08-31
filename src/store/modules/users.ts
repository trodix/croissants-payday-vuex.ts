// import { VuexModule, Module, getModule, MutationAction, Mutation, Action } from 'vuex-module-decorators';
// import store from '@/store';
// import { UserSubmit, User } from '../models';
// import { loginUser } from '../api';


// @Module({
//   namespaced: true,
//   name: 'users',
//   store,
// })
// class UserModule extends VuexModule {
//   user: User|null = null;

//   @Mutation
//   setUser(user: User) { this.user = user }

//   @Action({ commit: 'setUser' })
//   async login(userSubmit: UserSubmit) {
//     const user = await loginUser(userSubmit);
//     return { user };
//   }
// }

// export default getModule(UserModule);
