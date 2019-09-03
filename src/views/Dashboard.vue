<template>
  <v-flex class="container">
    <h1>List of paydays</h1>
    <PaydaysList maxWidth="500"></PaydaysList>
  </v-flex>
</template>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator';
import PaydaysList from '@/components/PaydaysList.vue';

@Component({
  components: {
    PaydaysList
  }
})
export default class Dashboard extends Vue {

}

</script>
<style lang="scss" scoped>

</style>
