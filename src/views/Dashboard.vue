<template>
  <div class="container">
    <ul v-for="payday in paydays" :key="payday.player">
      <li>{{ paydays.player }}</li>
    </ul>
  </div>
</template>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator';
import PaydaysModule from '../store/modules/Paydays';
import { Payday } from '../store/models';


@Component({})
export default class Dashboard extends Vue {

  paydays: Payday[] = [];

  constructor() {
    super();
    PaydaysModule.getAllPaydays();
    this.paydays = PaydaysModule.paydays;
    console.log(this.paydays);
  }

}

</script>
