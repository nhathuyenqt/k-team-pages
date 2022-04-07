<template>
  <v-app>
    <div class="align-center mx-auto full-width">
          <v-img class="mx-auto my-4"  max-height="90" max-width="300" contain  src="https://www.unisg.ch/-/media/d5b9607a44064498a9c920ca5c2cef52.jpg"></v-img>
          <v-tabs align-with-title > 
            <v-tab class="text-center font-weight-regular justify-center text-h6" to="/">Home</v-tab>
            
            <v-tab class="text-center font-weight-regular justify-center text-h6" to="/people">People</v-tab>
            <v-tab class="text-center font-weight-regular justify-center text-h6" to="/research">Research</v-tab>
            <v-tab class="text-center font-weight-regular justify-center text-h6" to="/publications">Publications</v-tab>
            <v-tab class="text-center font-weight-regular justify-center text-h6" to="/courses">Courses</v-tab>
            <v-tab class="text-center font-weight-regular justify-center text-h6" to="/contact">Contact</v-tab>
          </v-tabs>
    </div>
    <v-container class="page-container">
      <router-view/>
    </v-container>
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

<style scoped>
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
  color: #0e0ca6;
  font-family: "Arial";
  font-size: 18px;
}
.menu{
  color: #1a0dab;
  font-family: "Roboto";
  font-size: 17px;
}
.subtitle{
  color: #337ab7;

}
.avatarimg{
  border: 4px solid #ddd !important;
  display: block;
  background: #ffffff;

}
.page-container{
  max-width : 1200px !important;
}


.navbar{
    background: #f44336;
    padding: 1rem;
    font-size: 1.5rem;
    border-bottom: 1px solid white;


}



@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@368&family=Space+Grotesk:wght@300&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400&display=swap');
/* .h2{
  'font-family': 'Space Grotesk',
  'text-align': 'center';
  padding: 1rem;
  color:#555555;

} */



/* $headings: (
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
) */
html, body {
  height: 100%;
  padding-top: 10px;
  background: #e6ecf1;
}


#app .r {
       font-family: 'Rubik', sans-serif;
     
    }
#app .button {
  margin-bottom: 20px;
}


#app .img {
  border-radius: 30px;
}

#app .level-item {
  padding-left: 10px;
  color: #00d1b2;
}

#app input:focus {
  border-color: #00d1b2;
} 


/* #app .likes {
  padding: 0 7.5px;
} */




</style>
