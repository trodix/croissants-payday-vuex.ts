<template>
  <v-app>
    <v-app-bar app>
      <v-btn text @click.stop="drawer = !drawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <v-toolbar-title class="headline text-uppercase">
        <span>Croissants</span>
        <span class="font-weight-light">Payday</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        href="https://github.com/trodix/croissant-api-nodejs"
        target="_blank"
      >
        <span class="mr-2">Enhance me on Githut</span>
        <v-icon>mdi-github-circle</v-icon>
      </v-btn>
      <v-btn>
        <v-icon>mdi-account</v-icon>
        Login
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Your Name</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>

        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          router
          :to="item.link"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { MenuItem } from './store/models';

@Component({}) // define component and init settings/configuration
export default class App extends Vue {

  // class properties
  drawer: boolean = false;
  items: MenuItem[] = [];

  // constructor
  constructor() {
    super();
    this.items = [
      { title: 'Home', icon: 'mdi-home', link: '/' } as MenuItem,
      { title: 'Dashboard', icon: 'mdi-view-dashboard', link: '/dashboard' } as MenuItem,
      { title: 'Settings', icon: 'mdi-cogs', link: '/settings' } as MenuItem,
    ];
  }

}
</script>
