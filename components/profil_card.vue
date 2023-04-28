<template>
    <v-card outlined dark flat class="ma-8 position-card rounded-xl border-card" width="100%" max-width="350px">
        <div class="d-flex justify-space-between">
            <v-card-title>
                Théophile Lioppé 
            </v-card-title>
            <v-card-title>
                Student
            </v-card-title>
        </div>
        <img src="../assets/me.jpg" class="profil">
        <div class="text-center pt-4">
           <h3>lioppe.theophile@hotmail.com</h3> 
           <h3>Based in Rouen</h3>
        </div>
        <div class="text-center pt-4">
            <v-btn class="mr-2" x-large outlined icon target="_blank" href="https://www.linkedin.com/in/theophile-lioppe-71b7591aa/">
                <v-icon>
                 mdi-linkedin
                </v-icon>
            </v-btn>
            <v-btn x-large icon outlined>
                <v-icon>
                    mdi-github
                </v-icon>
            </v-btn>
            <v-btn class="ml-2" x-large icon outlined>
                <v-icon>
                    mdi-phone
                </v-icon>
            </v-btn>
        </div>
        <div class="text-center pa-4 pt-4">
            <v-hover>
                <v-btn color="primary" rounded width="75%">
                    <v-icon class="pr-4">
                        mdi-email
                    </v-icon>
                    HIRE ME
                </v-btn>
            </v-hover>
        </div>
    </v-card>
</template>

<script>
export default{
  methods: {
  },

}
</script>

<style>
@media screen and (max-width:1220px){
    .position-card{
        position: initial !important;
        max-width: 700px !important;
        margin-left: auto;
        margin-right: auto;
        margin-top: 20px;
    }
}
.position-card{
    position: fixed;

}
.border-card{
    border:1px solid #565656 !important;
}
.profil{
    max-width: 250px;
    text-align: center;
    display: block;
    border-radius: 24px;
    margin: auto;
}
</style>