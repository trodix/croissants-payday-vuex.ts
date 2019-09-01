<template>
  <div class="container">
    <v-flex>
      <template v-if="paydays !== undefined && paydays.length > 0">
        <ul v-for="payday in paydays" :key="payday._id">
          <li>{{ payday.player }}</li>
        </ul>
      </template>
      <template v-else>
        <v-progress-circular indeterminate></v-progress-circular>
        <span>Loading data</span>
      </template>
    </v-flex>

  </div>
</template>

<script lang="ts">

import { Vue, Component, PropSync } from 'vue-property-decorator';
import PaydaysModule from '../store/modules/Paydays';
import { Payday } from '../store/models';


@Component({})
export default class Dashboard extends Vue {

  constructor() {
    super();
    PaydaysModule.getAllPaydays();
  }

  get paydays(): Payday[] {
    return PaydaysModule.paydays;
  }

}

</script>
