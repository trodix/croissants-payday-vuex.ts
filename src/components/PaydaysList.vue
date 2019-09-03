<template>
    <v-flex> 
      <template v-if="paydays !== undefined && paydays.length > 0">
        <v-card :max-width="maxWidth" class="mx-auto">
          <v-list>
            <v-list-item v-for="payday in paydays" :key="payday._id" class="d-flex flex-column flex-sm-row">
              <div class="d-flex flex-column mx-auto">
                <p class="font-weight-bold">{{ payday.player.nom }} {{ payday.player.prenom }}</p>
                <p><span class="font-weight-bold mr-5">Due date:</span>{{ payday.date | moment('dddd, MMMM Do YYYY') }}</p>
              </div>
              <v-chip text-color="white" :class="{ 'green' : payday.payed, 'red' : !payday.payed }">{{ payday.payed ? 'Payed' : 'Not payed' }}</v-chip>
            </v-list-item>
          </v-list>
        </v-card>
      </template>
      <template v-else>
        <v-progress-circular indeterminate></v-progress-circular>
        <span>Loading data</span>
      </template>       
    </v-flex>
</template>

<script lang="ts">

import { Vue, Component, PropSync, Prop } from 'vue-property-decorator';
import PaydaysModule from '../store/modules/Paydays';
import { Payday } from '../store/models';
import moment from 'moment';


@Component({})
export default class PaydaysList extends Vue {

  @Prop(String) maxWidth: string|undefined;

  constructor() {
    super();
    PaydaysModule.getAllPaydays();
  }

  get paydays(): Payday[] {
    return PaydaysModule.paydays;
  }

}

</script>

<style lang="scss" scoped>
.v-chip {
  margin: 0 0 0 50px;
}
</style>
