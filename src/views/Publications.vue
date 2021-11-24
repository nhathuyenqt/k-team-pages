<template>
    <v-list three-line>
        <template v-for="(item, index) in items">
            <v-subheader
            v-if="item.header"
            :key="item.header"
            v-text="item.header"
            ></v-subheader>

            <v-divider
            v-else-if="item.divider"
            :key="index"
            :inset="item.inset"
            ></v-divider>

            <v-list-item
            v-else
            :key="item.title"
            >   
                <v-col cols="2">
                    <v-img :src="item.avatar"></v-img>
                </v-col>
                <v-col>
                    <v-list-item-content>
                        <v-list-item-title v-html="item.authors"></v-list-item-title>
                        <v-list-item-title v-html="item.title" class="font-weight-medium"></v-list-item-title>
                        <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
                    </v-list-item-content>
                </v-col>
            
            </v-list-item>
        </template>
    </v-list>

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
        getMembers() {
          axios.get('https://cyber-api.hellven.io/members').then(response => {
            this.items = response.data;
            response.data.forEach(i=>{
              console.log(i.avatar[0].url);
                })
          });        
        }
    }

  }
</script>