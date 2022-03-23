<template>

  <v-row class="d-flex justify-start mx-auto my-4" style = "max-width:1100px">
    <v-col v-for="(item) in items" cols="12" md="3" sm="4" style = "max-height:300px" :key="item.id" align='center'>
      <v-list-item-avatar  class="avatarimg " size="172">
            <v-img class="pa-5" @click="goToWeb(item)" :src="getImagePath(item.name)"></v-img>

      </v-list-item-avatar>
      <v-list-item-content>
        <p v-html="item.fullname" class="name font-weight-regular pa-2" style="color: #165b9b"></p>
        <v-list-item-subtitle v-html="item.position" style="font-style: italic"></v-list-item-subtitle>
        
      </v-list-item-content>
    </v-col>
  </v-row>
</template>
<script>
import MEMBERS from './members.json';
  import axios from 'axios';
  

  export default {
    data: () => ({
      items: MEMBERS,
    }),
    beforeMount() {
      //  this.getMembers();
    },

    methods: {
        goToWeb(item){
          if (item.websiteLink){
            console.log("web");
            // let route = this.$router.resolve({ path: item.websiteLink });
            // window.open(route.href);
            window.open(item.websiteLink);
          }  
        },
        getMembers() {
          axios.get('https://cyber-api.hellven.io/members').then(response => {
           // this.items = response.data;
            console.log(this.items);
            response.data.forEach(i=>{
              if (i.websiteLink)
              console.log(i.websiteLink);
                })
          });        
        },
        getImagePath(filename) {
          return require('./members/' + filename+'.jpeg');
        }
    }

  }
</script>