<template>
    <v-card class="ml-10 mb-12" max-width="60%" dark transparent flat style="clear: both;">
        <h1>Contact</h1>
        <v-form @submit.prevent="submitForm" method="POST" action="https://formspree.io/f/xyyaorrp">
            <v-text-field v-model="name" label="Name" id="name" name="user_name" required></v-text-field>
            <v-text-field v-model="email" label="E-mail" id="mail" name="user_mail" type="email" required></v-text-field>
            <v-textarea v-model="message" label="Message" id="msg" name="user_message" required></v-textarea>
            <v-btn type="submit" color="primary">Send your message</v-btn>
        </v-form>
    </v-card>
</template>

  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        message: '',
      }
    },
    methods: {
      submitForm() {
        // Submit form logic here
      },
    },
  }
  </script>
  
