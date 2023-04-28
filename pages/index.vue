<template>
  <div class="dark fill-height">
    <div class="d-flex flex-wrap">
      <Profil_card></Profil_card>
      <Sidebar></Sidebar>
    </div>
    <div class="main-container">
      <Skills id="skills"></Skills>
      <Resume></Resume>
    </div>
  </div>
</template>

<script>
import Profil_card from '../components/profil_card.vue';
import Sidebar from '../components/sidebar.vue';
import Skills from '../components/skills.vue';
import Resume from '../components/resume.vue';
export default {
    name: "IndexPage",
    components: { Profil_card, Sidebar, Skills, Resume }
}
</script>

<style>
.fixed{
  position: fixed;
}
.dark{
  background-color: #1f1f1f;
}
body,main{
  height: 100vh;
}
html{
  scroll-behavior: smooth;
}
.main-container{
  margin-left: 400px;
  float: right;
}

@media screen and (max-width:1220px) {
  .main-container{
    margin-left: 0px;
  }
  
}
</style>
