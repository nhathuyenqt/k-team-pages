<template>
  <v-app>
      <v-tabs align-with-title>
        <v-tab to="/">Home</v-tab>
        <v-tab to="/people">People</v-tab>
        <v-tab to="/research">Research</v-tab>
        <v-tab to="/publications">Publications</v-tab>
        <v-tab to="/courses">Courses</v-tab>
        <v-tab to="/contact">Contact</v-tab>
    </v-tabs>
    <router-view/>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {

  },

  data: () => ({
    //
  }),
};
</script>
