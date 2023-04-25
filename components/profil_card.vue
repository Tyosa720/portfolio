<template>
    <v-card outlined dark flat class="rounded-xl border-card" width="100%" max-width="350px">
        <div class="d-flex justify-space-between">
            <v-card-title>
            Théophile Lioppé 
            </v-card-title>
            <v-card-title>
           Étudiant 
            </v-card-title>
        </div>
        <v-img :src="require('../assets/me.jpg')"></v-img>
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
.border-card{
    border:1px solid #565656 !important;
}
</style>