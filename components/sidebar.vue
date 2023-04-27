<template>
  <v-sheet
    height="400"
    class="overflow-hidden"
    dark
  >
        <v-btn
        x-large
        rounded
        outlined
        icon
        fixed
        dark
        @click.stop="drawer = !drawer"
        style="top:30px;right: 30px;"
        class="sidebar-border"
        >
          <v-icon>
            mdi-menu
          </v-icon>
        </v-btn>
      

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      right
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Menu</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          href="#skills"
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
  </v-sheet>
</template>

<script>
export default {
    data () {
      return {
        drawer: null,
        items: [
          { title: 'Home', icon: 'mdi-home', href:"#home" },
          { title: 'About', icon: 'mdi-account' },
          { title: 'Resume', icon: 'mdi-briefcase' },
          { title: 'Skills', icon: 'mdi-head-cog', href:"#skills" },
          { title: 'Projects', icon: 'mdi-pencil-ruler' },
          { title: 'Contact', icon: 'mdi-email' },
        ],
      }
    },
}
</script>

<style>
.sidebar-border{
  border-color: #565656;
}
</style>