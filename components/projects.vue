<template>
    <v-card dark flat>
        <h1 class="ml-10">Development <span class="primary--text">Projects</span></h1>
            <v-card transparent flat :class="(index % 2 ? 'float-right ' : '') + 'ma-6 project-card-border pa-5 rounded-xl'" max-width="450px" v-for="(project, index) in projects" :key="index">
                <div :class="index % 2 ? 'text-right' : ''">
                    <h3>{{ project.title }}</h3>
                    <div class="project-description">
                        <p>{{ project.description }}</p>
                    </div>
                    <v-chip v-for="(tech, index) in project.techno" :key="index"> {{ tech }} </v-chip>
                </div>
            </v-card>
    </v-card>
</template>
<script>
export default {
  data () {
    return {
        projects:[
            {title:"Alcon Theme",description:"A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.", techno:["Nuxt","Vuetify"]},
            {title:"Alcon Theme",description:"A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.", techno:["Nuxt","Vuetify"]},
        ]
    }
  },
    
}
</script>
<style>
.project-card-border:hover{
    border:1px solid #1976d2 !important;
    transition: 0.3s;
}
.project-card-border{
    border: 1px solid #565656 !important;
}
</style>