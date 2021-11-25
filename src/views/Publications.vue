<template>
    <div>
        <v-card class="mx-auto" margin="10px" >
            <v-card-text>
            <v-btn-toggle class="align-center" align-center
                v-model="text"  tile  color="deep-purple accent-3"  group >
                <v-btn value="jn" href="/publications#Journals">
                   Journals 
                </v-btn>

                <v-btn value="ws" href="/publications#Workshops">
                   Workshops
                </v-btn>
                <v-btn value="bk" href="/publications#Journals">
                   Books
                </v-btn>

                <v-btn value="bc" href="/publications#Journals">
                   Book Chapters
                </v-btn>
            </v-btn-toggle>
            </v-card-text>
        </v-card> 
        <div> 
                <v-spacer></v-spacer>
                <v-spacer></v-spacer>
        </div> 
        <v-card class="mx-auto">
            <a name="Journals">
                <h3 class="text-h6 font-weight-light text-left grow">
                    Journals
                </h3>
            </a>
            
            <v-card-text class="py-0">
                <v-list>
                    <template v-for="(item) in journals">
                        <v-list-item :key="item.id">   
                            <v-list-item-content>
                                <div class="d-flex">
                                    <v-list-item-title v-html="item.name" class="font-weight-medium"></v-list-item-title>
                                    <v-btn icon :href="`item.paperLink`">
                                        <v-icon>mdi-home</v-icon>
                                        <span>Paper</span>
                                    
                                    </v-btn>
                                </div>
                                <v-list-item-title v-html="item.data.authors"></v-list-item-title>
                                <v-list-item-subtitle v-html="item.paperLink"></v-list-item-subtitle>
                            </v-list-item-content>
                        
                        </v-list-item>
                    </template>
                </v-list>
            </v-card-text>
        </v-card>
        <v-card class="mx-auto">
            <a name="Workshops">
                <h3 class="text-h6 font-weight-light text-left grow">
                    Workshops
                </h3>
            </a>
            
            <v-card-text class="py-0">
                <v-list>
                    <template v-for="(item) in journals">
                        <v-list-item :key="item.id">   
                            <v-list-item-content>
                                <div class="d-flex">
                                    <v-list-item-title v-html="item.name" class="font-weight-medium"></v-list-item-title>
                                    <v-btn icon :href="`item.paperLink`">
                                        <v-icon>mdi-home</v-icon>
                                        <span>Paper</span>
                                    
                                    </v-btn>
                                </div>
                                <v-list-item-title v-html="item.data.authors"></v-list-item-title>
                                <v-list-item-subtitle v-html="item.paperLink"></v-list-item-subtitle>
                            </v-list-item-content>
                        
                        </v-list-item>
                    </template>
                </v-list>
            </v-card-text>
        </v-card>
    </div>
</template>


<script>

    import axios from 'axios';
  
    export default {
        data: () => ({
            paper: 'paper-text-outline',

        items: [
        {
          avatar: 'https://live.staticflickr.com/5647/31013406835_b24ccab596.jpg',
          name: 'Katerina Mitrokotsa',
          title: 'Full Professor of Cyber Security',
          subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        },
        { divider: true, inset: true },
        {
          avatar: 'https://live.staticflickr.com/5647/31013406835_b24ccab596.jpg',
          name: 'Eriane Breu',
          title: 'Administration, Chair of Cyber Security',
          subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
        },
        { divider: true, inset: true },
        {
          avatar: 'https://live.staticflickr.com/5647/31013406835_b24ccab596.jpg',
          name: 'Hiraku Morita',
          title: 'Postdoctoral researcher',
          subtitle: '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
        },
        { divider: true, inset: true },
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
        this.getPublications();
    },

    methods: {
        getPublications() {
          axios.get('https://cyber-api.hellven.io/publications').then(response => {
            this.journals = response.data;
           
          });        
        }
    }

  }
</script>