<template>
  <div id="home" class="body-container dark fill-height">
    <div class="d-flex flex-wrap">
      <Profil_card></Profil_card>
      <Sidebar></Sidebar>
    </div>
    <div class="main-container">
      <Projects id="projects"></Projects>
      <Skills style="clear: both;" id="skills"></Skills>
      <Resume id="resume"></Resume>
    </div>
  </div>
</template>

<script>
import Profil_card from '../components/profil_card.vue';
import Sidebar from '../components/sidebar.vue';
import Skills from '../components/skills.vue';
import Resume from '../components/resume.vue';
import Projects from '../components/projects.vue';
export default {
    name: "IndexPage",
    components: { Profil_card, Sidebar, Skills, Resume, Projects }
}
</script>

<style>
.body-container{
  user-select: none;
}
.fixed{
  position: fixed;
}
.dark{
  background-color: #1e1e1e;
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
