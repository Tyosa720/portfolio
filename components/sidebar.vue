<template>
  <v-sheet
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
        style="top:30px;right: 30px; background-color: #1e1e1e; z-index: 5;"
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
      style="position: fixed; width: 312px;"
      class="pa-14"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title style="opacity: 0.8;">Menu</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :href="item.href"
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
          { title: 'About', icon: 'mdi-account', href:"#about" },
          { title: 'Resume', icon: 'mdi-briefcase',href:"#resume" },
          { title: 'Skills', icon: 'mdi-head-cog', href:"#skills" },
          { title: 'Projects', icon: 'mdi-pencil-ruler', href:"#projects" },
          { title: 'Contact', icon: 'mdi-email', href:"#contact" },
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