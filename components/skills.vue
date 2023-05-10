<template>
    <v-card style="background: none;" transparent flat dark>
        <h1 class="ml-10">My <span class="primary--text">Skills</span></h1>
        <div class="pa-4 d-flex flex-wrap">
            <v-card width="160px" v-for="(skill, index) in skills" :key="index" dark flat outlined class="ma-4 rounded-xl skill-card">
                <img class="icon icon-size pa-4" :src="skill.src" alt="">
                <h3 class="text-center mr-2 ml-2 mb-2">{{skill.titre}}</h3>
            </v-card>
        </div>
    </v-card>
</template>
<script>
export default {
  data () {
    return {
        skills:[
            {titre: 'React', src:require('../assets/react.png')},
            {titre: 'Nuxt', src:require('../assets/nuxt.png')},
            {titre: 'Vue', src:require('../assets/vue.png')},
            {titre: 'Node', src:require('../assets/node.png')},
            {titre: '.NET', src:require('../assets/dotnet.png')},
            {titre: 'SQL', src:require('../assets/sql.png')},
            {titre: 'C#', src:require('../assets/csharp.png')},
            {titre: 'C++', src:require('../assets/cplusplus.png')}
        ]
    }
  },
    
}
</script>
<style>
.icon{
    
    display: block;
    margin-left: auto;
    margin-right: auto;
}
.icon-size{
    max-height:96px;
}
.skill-card{
    border:1px solid #565656 !important;
}
.skill-card:hover{
    transition: 0.3s;
    border:1px solid #1976d2 !important;
}
</style>