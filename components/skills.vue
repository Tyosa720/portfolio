<template>
    <v-card style="background: none;" transparent flat dark>
        <h1 class="ml-10 subtitle">My <span class="primary--text">Skills</span></h1>
        <div class="pa-4 d-flex flex-wrap">
            <v-card v-for="(skill, index) in skills" :key="index" dark flat outlined class="zoom rounded-xl skill-card">
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
            {titre: 'React', src:"/react.png"},
            {titre: 'Nuxt', src:"/nuxt.png"},
            {titre: 'Vue', src:"/vue.png"},
            {titre: 'Node', src:"/node.png"},
            {titre: '.NET', src:"/dotnet.png"},
            {titre: 'SQL', src:"/sql.png"},
            {titre: 'C#', src:"/csharp.png"},
            {titre: 'C++', src:"/cplusplus.png"},
            {titre: 'HTML', src:"/html.png"},
            {titre: 'CSS', src:"/css.png"}
        ]
    }
  },
    
}
</script>
<style>
@media screen and (max-width:768px) {
    .icon-size{
        max-height: 64px;
    }
}
@media screen and (max-width:425px) {
    .skill-card{
       margin: 5px !important;
    }
}




.icon{
    
    display: block;
    margin-left: auto;
    margin-right: auto;
}
.icon-size{
    max-height:96px;
}
.skill-card{
    width: 160px;
    margin: 8px;
    border:1px solid #565656 !important;
}
.skill-card:hover{
    transition: 0.3s;
    border:1px solid #1976d2 !important;
}
</style>