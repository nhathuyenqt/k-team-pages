<template>

  <v-row class="d-flex justify-start mx-auto my-4" style = "max-width:1100px">
    <v-col v-for="(item) in items" cols="12" md="3" sm="4" style = "max-height:300px" :key="item.id" align='center'>
      <router-link class="routerLink" :to="{profile:item, id: item.name,  path: '/people/'+item.name, component: Member }">
      <v-list-item-avatar  class="avatarimg "  size="172">
            <v-img class="pa-5"   :src="getImagePath(item.name)"></v-img>

      </v-list-item-avatar>
      <v-list-item-content>
        <strong v-html="item.fullname" class="name font-weight-regular pa-2" ></strong>
        <v-list-item-subtitle v-html="item.position" style="font-style: italic"></v-list-item-subtitle>
        
      </v-list-item-content>
      </router-link>
    </v-col>
  </v-row>
</template>
<script>
  import MEMBERS from './json/members.json';
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
              window.open(item.websiteLink);
            }

            this.$router.push({name:'Member', params:{id :item.id, profile: item}})
       
            // console.log("web");
            // let route = this.$router.resolve({ path: '/people/'+item.name, name: "member" });
            // window.open(route.href, "member");
   
      
        },
        getMembers() {
          axios.get('https://cyber-api.hellven.io/members').then(response => {
           // this.items = response.data;
           
            response.data.forEach(i=>{
              if (i.websiteLink)
              console.log(i.websiteLink);
                })
          });        
        },
        getImagePath(filename) {
          console.log('@/src/view/members/' + filename+'.jpeg');
          return require('./members/' + filename+'.jpeg');
        }
    }

  }
</script>
<style scoped>
    .ht {
        color : #074a0e
    }
    .content strong {
        color: #00783a;
    }

    .r {
       font-family: 'Rubik', sans-serif;
     
    }

    .routerLink{
        text-decoration: none;
        color: #165b9b;
    }
</style>