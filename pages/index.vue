<template>
  <v-main>
    <v-container fluid class="pa-0" id="home">
      <v-app-bar app fixed color="primary" dark>
        <v-spacer></v-spacer>
        <v-btn
          v-for="item in navItems"
          :key="item.title"
          :href="item.href"
          text
          class="mx-2"
        >
          <v-icon left small>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-app-bar>
      <v-container class="py-16">
        <v-row align="center" justify="center">
          <v-col cols="12" md="6">
            <div class="text-center text-md-left">
              <h1 class="display-2 font-weight-bold mb-4">{{ name }}</h1>
              <h2 class="subtitle-1 font-weight-regular mb-6">
                Développeur <span class="font-weight-bold">Full-stack</span>
              </h2>
              <p class="body-1 mb-6">
                {{ description }}
              </p>
              <v-row justify="center" justify-md="start">
                <v-col cols="12" sm="auto">
                  <v-btn large color="primary" href="#contact">
                    <v-icon left>mdi-email</v-icon>
                    Me contacter
                  </v-btn>
                </v-col>
                <v-col cols="12" sm="auto">
                  <v-btn large outlined color="primary" href="#projects">
                    <v-icon left>mdi-eye</v-icon>
                    Découvrir mon travail
                  </v-btn>
                </v-col>
              </v-row>
            </div>
          </v-col>
          <v-col cols="12" md="6" class="d-flex flex-column align-center justify-center">
            <div class="d-flex flex-column align-center ml-0 ml-md-auto">
              <v-avatar size="220" class="mb-6 elevation-12">
                <img src="/me.jpg" alt="Avatar" />
              </v-avatar>
              <v-row justify="center" class="mt-2">
                <v-col cols="auto" v-for="social in socialLinks" :key="social.name">
                  <v-btn fab small :href="social.url" target="_blank" color="primary">
                    <v-icon>{{ social.icon }}</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </div>
          </v-col>
        </v-row>
      </v-container>
      <v-container id="about" class="py-16">
        <v-row justify="center">
          <v-col cols="12" md="8">
            <v-card class="pa-6" outlined>
              <p>{{ aboutText }}</p>
              <v-row justify="space-around" class="mt-6 text-center">
                <v-col cols="auto" v-for="stat in stats" :key="stat.label">
                  <h3 class="display-1 font-weight-bold mb-1">{{ stat.value }}</h3>
                  <p>{{ stat.label }}</p>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <v-container id="skills" class="py-16">
        <v-row justify="center" class="text-center">
          <v-col cols="12">
            <h2 class="display-1 font-weight-bold mb-8">Mes Compétences</h2>
          </v-col>
          <v-col
            v-for="skill in skills"
            :key="skill.titre"
            cols="6" sm="4" md="2"
            class="mb-6"
          >
            <v-card outlined class="pa-4">
              <v-img :src="skill.src" height="60" contain class="mb-2"></v-img>
              <h4 class="subtitle-2">{{ skill.titre }}</h4>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <v-container id="resume" class="py-16">
        <v-row justify="center">
          <v-col cols="12">
            <h2 class="display-1 font-weight-bold text-center mb-8">Formation & Expérience</h2>
          </v-col>

          <v-col
            v-for="item in years"
            :key="item.year"
            cols="12" md="6"
            class="mb-6"
          >
            <v-card outlined class="pa-4 d-flex flex-column fill-height">
              <div>
                <p class="font-weight-bold">{{ item.year }}</p>
                <h3 class="subtitle-1 font-weight-bold">{{ item.title }}</h3>
                <p>{{ item.description }}</p>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <v-container id="projects" class="py-16">
        <v-row justify="center">
          <v-col cols="12">
            <h2 class="display-1 font-weight-bold text-center mb-4">Mes Projets</h2>
            <p class="text-center mb-8">
              Voici une sélection de mes projets les plus significatifs. D’autres réalisations sont disponibles sur demande.
            </p>
          </v-col>
          <v-col
            v-for="project in projects"
            :key="project.title"
            cols="12" sm="6" md="4"
            class="mb-6"
          >
            <v-card outlined class="pa-4 d-flex flex-column fill-height">
              <div>
                <h3 class="subtitle-1 font-weight-bold mb-2">{{ project.title }}</h3>
                <p>{{ project.description }}</p>
              </div>

              <v-row class="mt-auto" dense>
                <v-col
                  v-for="tech in project.techno"
                  :key="tech"
                  cols="auto"
                  class="mb-2"
                >
                  <v-chip small color="primary" text-color="white">{{ tech }}</v-chip>
                </v-col>
              </v-row>

              <v-btn
                v-if="project.link"
                :href="project.link"
                target="_blank"
                text
                color="primary"
                class="mt-4 align-self-end"
              >
                <v-icon left>mdi-open-in-new</v-icon>Voir le projet
              </v-btn>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <v-container id="contact" class="py-16">
        <v-row justify="center">
          <v-col cols="12" md="6">
            <v-card class="pa-6" outlined>
              <h2 class="display-1 font-weight-bold text-center mb-6">Contactez-moi</h2>
              <v-form @submit.prevent="submitForm">
                <v-text-field
                  v-model="contactForm.name"
                  label="Nom"
                  outlined
                  dense
                  class="mb-4"
                />
                <v-text-field
                  v-model="contactForm.email"
                  label="Email"
                  type="email"
                  outlined
                  dense
                  class="mb-4"
                />
                <v-textarea
                  v-model="contactForm.message"
                  label="Message"
                  outlined
                  rows="5"
                  class="mb-4"
                />
                <v-btn type="submit" color="primary" large block>
                  <v-icon left>mdi-send</v-icon>
                  Envoyer
                </v-btn>
              </v-form>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <v-btn
        v-show="showScrollTop"
        @click="scrollToTop"
        fab
        fixed
        bottom
        right
        color="primary"
      >
        <v-icon>mdi-chevron-up</v-icon>
      </v-btn>
    </v-container>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      name: "Théophile Lioppé",
      avatarUrl: "/me.png",
      description: "Ingénieur en informatique spécialisé en développement Fullstack, je transforme des idées en applications web performantes et intuitives.",
      navItems: [
        { title: 'Accueil', icon: 'mdi-home', href: '#home' },
        { title: 'À propos', icon: 'mdi-account', href: '#about' },
        { title: 'Expérience', icon: 'mdi-briefcase', href: '#resume' },
        { title: 'Compétences', icon: 'mdi-head-cog', href: '#skills' },
        { title: 'Projets', icon: 'mdi-folder-multiple', href: '#projects' },
        { title: 'Contact', icon: 'mdi-email', href: '#contact' },
      ],
      socialLinks: [
        { name: 'LinkedIn', icon: 'mdi-linkedin', url: 'https://fr.linkedin.com/in/th%C3%A9ophile-liopp%C3%A9-71b7591aa' },
        { name: 'GitHub', icon: 'mdi-github', url: 'https://github.com/Tyosa720' },
        { name: 'Email', icon: 'mdi-email', url: 'mailto:lioppe.theophile@hotmail.com' },
      ],
      aboutText: "Je suis passionné par le développement web et la création de solutions logicielles efficaces et modernes. Au cours de mes expériences, j’ai conçu des applications complètes, des interfaces utilisateurs aux APIs backend, en adoptant des pratiques robustes et collaboratives. Je recherche aujourd’hui un CDI pour participer à des projets ambitieux et innovants.",
      stats: [
        { value: "7+", label: "Projets réalisés" },
        { value: "3+", label: "Années d'expérience" },
        { value: "10+", label: "Technologies utilisées" },
      ],
      skills: [
        { titre: 'React', src: '/react.png' },
        { titre: 'Vue', src: '/vue.png' },
        { titre: 'Nuxt', src: '/nuxt.png' },
        { titre: 'Node', src: '/node.png' },
        { titre: '.NET', src: '/dotnet.png' },
        { titre: 'SQL', src: '/sql.png' },
        { titre: 'C#', src: '/csharp.png' },
        { titre: 'C++', src: '/cplusplus.png' },
        { titre: 'HTML', src: '/html.png' },
        { titre: 'CSS', src: '/css.png' },
      ],
       years: [
        {
          year: 'Juillet 2023 - Octobre 2025',
          title: 'Apprenti Ingénieur Développeur Web - Matmut',
          description: "Développement et déploiement d'une application interne en flex office, création et évolution de composants pour le design system, développement d’une API marketing et amélioration continue de l’espace personnel et des devis matmut.fr. Stack : ReactJS, C#, .NET, Node.js"
        },
        {
          year: 'Octobre 2022 - Avril 2023',
          title: 'Développeur Fullstack en alternance - Infime Architecture',
          description: "Conception d'une interface sécurisée pour la consultation des livrables clients et création d'une carte interactive Mapbox pour promouvoir un projet social. Stack : Nuxt.js, Vue.js, Node.js, Adobe XD"
        },
        {
          year: '4 Avril - 29 Juillet 2022',
          title: 'Stage Développeur Fullstack - Infime Architecture',
          description: "Création d'une page d'information rassemblant horaires de train, événements et actualités, avec API et interface d'administration. Stack : Nuxt.js, Vue.js, Node.js"
        },
        {
          year: '2020 - 2025',
          title: 'Diplôme d’ingénieur en informatique - CESI Rouen',
          description: "Formation en informatique avec spécialisation développement web, réalisation de projets pratiques incluant applications C#/.NET, sites web HTML/CSS/JS/PHP, architecture Big Data, applications graphiques C++ avec base de données et applications type Uber Eats (React, Node.js, Docker)"
        }
      ],
      projects: [
        {
          title: "Application interne Matmut - Flex Office",
          description: "Conception et mise en place complète d'une application pour la gestion des espaces flex office, incluant la réservation de bureaux, la consultation des disponibilités et l’optimisation de l’espace de travail. Création et évolution de composants du design system et développement d’une API marketing.",
          techno: ["ReactJS", "C#", ".NET", "Node.js"]
        },
        {
          title: "Interface sécurisée Livrables - Infime Architecture",
          description: "Développement d'une interface sécurisée permettant aux clients de consulter leurs livrables et documents confidentiels, avec un focus sur l’UX et la sécurité des données.",
          techno: ["Nuxt.js", "Vue.js", "Node.js", "Adobe XD"]
        },
        {
          title: "Page d'information TV - Infime Architecture",
          description: "Création d’une page d’information regroupant horaires, événements et actualités, avec interface d’administration et API pour une mise à jour facile par les équipes internes.",
          techno: ["Nuxt.js", "Vue.js", "Node.js", "HTML", "CSS", "JavaScript"]
        },
        {
          title: "EasySave",
          description: "Logiciel de sauvegarde multi-supports avec choix du type de sauvegarde (automatique ou manuelle), garantissant la protection et la restauration des données critiques.",
          link: "https://dev.azure.com/grp7prosoft/EasySave",
          techno: ["C#", ".NET Core", "MVVM", "DevOps"]
        },
        {
          title: "Projet POO MININF",
          description: "Application WinForms pour gérer le personnel, les clients, les commandes et le stock de composants électroniques, intégrant une base de données SQL et une architecture MVC orientée objet.",
          link: "https://github.com/clement15613/Projet_POO/tree/main",
          techno: ["C++", "SQL", "MVC", "POO"]
        }
      ],
      contactForm: { name:'', email:'', message:'' },
      showScrollTop: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() { this.showScrollTop = window.scrollY > 300; },
    scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); },
    submitForm() { console.log('Form submitted:', this.contactForm); }
  }
};
</script>

<style>
h1, .display-2 {
  font-size: 3rem;
}

h2, .display-1 {
  font-size: 2.5rem;
}

h3, .subtitle-1 {
  font-size: 1.75rem;
}

p, .body-1 {
  font-size: 1.125rem;
}
</style>