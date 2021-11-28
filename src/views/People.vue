<template>

  <v-row class="d-flex justify-start mx-auto my-4" style = "max-width:1100px">
    <v-col v-for="(item) in items" cols="12" md="3" sm="4" style = "max-height:200px" :key="item.id" align='center'>
      <v-list-item-avatar size="128">
  
            <v-img @click="goToWeb(item)" :src="'https://cyber-api.hellven.io' + item.avatar[0].url"></v-img>

      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title v-html="item.fullname"></v-list-item-title>
        <v-list-item-subtitle v-html="item.job"></v-list-item-subtitle>
        
      </v-list-item-content>
    </v-col>
  </v-row>
</template>
<script>
  import axios from 'axios';
  

  export default {
    data: () => ({
      items: [
        // {
        //   avatar: 'https://live.staticflickr.com/5647/31013406835_b24ccab596.jpg',
        //   name: 'Katerina Mitrokotsa',
        //   title: 'Full Professor of Cyber Security',
        //   subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        // },
        // { divider: true, inset: true },
        // {
        //   avatar: 'https://live.staticflickr.com/5647/31013406835_b24ccab596.jpg',
        //   name: 'Eriane Breu',
        //   title: 'Administration, Chair of Cyber Security',
        //   subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
        // },
        // { divider: true, inset: true },
        // {
        //   avatar: 'https://live.staticflickr.com/5647/31013406835_b24ccab596.jpg',
        //   name: 'Hiraku Morita',
        //   title: 'Postdoctoral researcher',
        //   subtitle: '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
        // },
        // { divider: true, inset: true },
        // {
        //   avatar: 'https://live.staticflickr.com/5647/31013406835_b24ccab596.jpg',
        //   name: 'Johannes Ernst',
        //   title: 'Doctoral Researcher',
        //   subtitle: '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
        // },
        // { divider: true, inset: true },
        // {
        //   avatar: 'https://live.staticflickr.com/5647/31013406835_b24ccab596.jpg',
        //   name: 'Adrien Pasquereau',
        //   title: 'Doctoral Researcher',
        //   subtitle: '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        // },
      ],
    }),
    beforeMount() {
        this.getMembers();
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
            this.items = response.data;
            response.data.forEach(i=>{
              if (i.websiteLink)
              console.log(i.websiteLink);
                })
          });        
        }
    }

  }
</script>