<template>
    <v-card dark>
        <h1 class="ml-10">School & <span class="primary--text">Experience</span></h1>
        <v-timeline
        dense
        >
            <v-timeline-item
            v-for="(year, i) in years"
            :key="i"
            color="blue"
            small
            >
            
            <div class="py-4">
                <h2 :class="`headline font-weight-light mb-4 ${year.color}--text`">
                  {{ year.year }}
                </h2>
                <h3>{{ year.title}}</h3>
                <div>
                    {{ year.description }}
                </div>
            </div>
            </v-timeline-item>
        </v-timeline>
    </v-card>
</template>
<script>
export default {
    data: () => ({
      years: [
        {
          color: 'grey',
          year: 'October 2022 - Early April 2023',
          description:"Design of a secure interface for viewing deliverables for customers",
          title:'Fullstack developer apprentice'
        },
        {
          color: 'grey',
          year: 'April 4, 2022 - July 29, 2022',
          description:"Creation of an information page for a TV. This one gathers different information like train schedules, company events, etc... As well as an administration page for modifications and an API to communicate between the two interfaces.",
          title:'Fullstack developer intership'
        },
        {
          color: 'grey',
          year: '2020 - 2025',
          description:"Engineering degree in computer science ",
          title:'CESI engineering school - Rouen'
        }
      ],
    }),
}
</script>
<style>
    
</style>