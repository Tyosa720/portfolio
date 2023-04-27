<template>
    <v-card>
        <v-card-title>School and Experience</v-card-title>
        <v-timeline>
            <v-timeline-item
            v-for="(year, i) in years"
            :key="i"
            :color="year.color"
            small
            >
            <template v-slot:opposite>
                <span
                :class="`headline font-weight-bold ${year.color}--text`"
                v-text="year.year"
                ></span>
            </template>
            <div class="py-4">
                <h2 :class="`headline font-weight-light mb-4 ${year.color}--text`">
                    {{ year.title }}
                </h2>
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
          year: 'October 2022 - Today',
          description:'Infime Architecture',
          title:'Fullstack developer apprentice'
        },
        {
          color: 'green',
          year: '1970',
        },
        {
          color: 'pink',
          year: '1980',
        },
        {
          color: 'amber',
          year: '1990',
        },
        {
          color: 'orange',
          year: '2000',
        },
      ],
    }),
}
</script>
<style>
    
</style>