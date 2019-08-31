<template>
  <div class="container">
    <ul v-for="payday in paydays" :key="payday._id">
      <li>{{ paydays._id }}</li>
    </ul>
  </div>
</template>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator';
import { getModule } from 'vuex-module-decorators';
import paydays from '../store/modules/paydays';

const paydaysState = getModule(paydays);

// const paydayModule = namespace("payday");

// @paydayModule.State
// paydays: Payday[];

@Component({})
export default class Dashboard extends Vue {


mounted() {
  paydaysState.getAllPaydays();
}

}

</script>
