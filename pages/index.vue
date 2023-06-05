<template>
  <div id="home" class="body-container dark fill-height">
    <div class="d-flex flex-wrap">
      <Profil_card></Profil_card>
      <Sidebar></Sidebar>
    </div>
    <div class="main-container">
      <v-card class="ml-10 mt-16" dark transparent flat>
        <h1 dark class="title-h1">Say Hi from <span class="primary--text">Théophile</span>, apprentice developer at CESI</h1>
      </v-card>
      <About id="about"></About>
      <Resume id="resume"></Resume>
      <Skills style="clear: both;" id="skills"></Skills>
      <Projects id="projects"></Projects>
      <!-- <Contact></Contact> -->
    </div>
  </div>
</template>

<script>
import Profil_card from '../components/profil_card.vue';
import Sidebar from '../components/sidebar.vue';
import Skills from '../components/skills.vue';
import Resume from '../components/resume.vue';
import Projects from '../components/projects.vue';
import About from '../components/about.vue';
import Contact from '../components/contact.vue';
import Footer from '../components/footer.vue';
export default {
    name: "IndexPage",
    components: { Profil_card, Sidebar, Skills, Resume, Projects, About, Contact,Footer }
}
</script>

<style>
.zoom:hover{
  transform: scale(1.2);
  z-index: 10;
}
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

.title-h1{
  font-size: 48px;
}


@media screen and (max-width:1220px) {
  .main-container{
    margin-left: 0px;
  }
}


@media screen and (max-width:768px) {

  .title-h1{
    font-size: 28px;
  }
  .subtitle{
    font-size: 24px;
  }
}


</style>
