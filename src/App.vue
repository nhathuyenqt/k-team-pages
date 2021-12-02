<template>
  <v-app>
    <div class="align-center mx-auto">
          <v-img class="mx-auto my-4"  max-height="60" max-width="200" contain  src="https://upload.wikimedia.org/wikipedia/commons/7/73/University_of_St._Gallen_logo_english.png"></v-img>
          <v-tabs align-with-title>
            <v-tab to="/">Home</v-tab>
            <v-tab to="/people">People</v-tab>
            <v-tab to="/research">Research</v-tab>
            <v-tab to="/publications">Publications</v-tab>
            <v-tab to="/courses">Courses</v-tab>
            <v-tab to="/contact">Contact</v-tab>
          </v-tabs>
    </div>
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
<style>
$headings: (
    'h1': (
        'font-family': 'Calibri',
        'size': 60px,
        'line-height': 60px,
        'weight': 400
    ),
    'h2': (
        'font': 'Ariel',
        'size': 48px,
        'line-height': 48px,
        'weight': 400
    ),
)

.name {
  font-family: "Helvetica Neue";
  size: '16px';
  color: #555;
}

.underline { 
  text-decoration: underline;
  font-family: "Helvetica Neue";
  color: #555; }

.routerLink{
     text-decoration: none;
 }
.wrap-text {
   -webkit-line-clamp: unset !important;
}

.outlined {
    border: 1px solid currentColor;
    border-radius:50%;
    height: 56px;
    width: 56px;
}
.v-list-item {
  flex: 0;
}
.titlePaper{
  color: #1a0dab;
  font-family: "Arial";
  font-size: 14px;
}
</style>
