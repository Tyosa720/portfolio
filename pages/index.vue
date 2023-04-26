<template>
  <div class="dark fill-height">
    <div class="d-flex flex-wrap">
      <Profil_card></Profil_card>
      <Sidebar></Sidebar>
    </div>
  </div>
</template>

<script>
import Profil_card from '../components/profil_card.vue';
import Sidebar from '../components/sidebar.vue';

export default {
    name: "IndexPage",
    components: { Profil_card, Sidebar }
}
</script>

<style>
.dark{
  background-color: #1f1f1f;
}
body,main{
  height: 100vh;
}
</style>
