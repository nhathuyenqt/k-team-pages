<template>
    <div> 
        <Dialog :content="content" :show="dialogA"/>
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
                <v-btn value="bk" href="/publications#Books">
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
            
                <h2 class="text-h6 font-weight-medium text-left grow py-3 routerLink" style ="color:#0f275c">
                    Journals
                </h2>
            </a>
            
            <v-card-text class="py-0">
                <v-list>
                    <template v-for="(item) in journals">
                        <v-list-item :key="item.id">   
                            <v-list-item-content>
                                <div class="d-flex justify-start pr-3" >
                                    <v-list-item-title v-html="item.name" class="font-weight-medium" ></v-list-item-title>
                                    
                                    <a class="routerLink d-flex pa-4" :href="item.paperLink">
                                        <span><NoteTextOutline class="pr-2" width="'40'"/></span>
                                        Paper
                                    </a>

                                    <a class="routerLink d-flex pa-4" @click="openAbstract(item)">
                                        <span><BookOpenVariant  width="'40'"/></span>
                                        Abstract
                                    </a>
                                    
                                </div>
                                <v-list-item-title v-html="item.data.authors" style="white-space: normal"></v-list-item-title>
                                <v-list-item-subtitle v-html="item.data.journal" class="text-wrap"></v-list-item-subtitle>
                            </v-list-item-content>
                        
                        </v-list-item>
                    </template>
                </v-list>
            </v-card-text>
        </v-card>
        <v-card class="mx-auto">
            <a name="Workshops">
                 <h3 class="text-h6 font-weight-medium text-left grow py-3 routerLink" style ="color:#0f275c">
                    Workshops
                </h3>
            </a>
            
            <v-card-text class="py-0">
                <v-list>
                    <template v-for="(item) in workshops">
                        <v-list-item :key="item.id">   
                            <v-list-item-content>
                                <div class="d-flex">
                                    <v-list-item-title v-html="item.title" class="font-weight-medium"></v-list-item-title>
                                    <a class="routerLink d-flex pa-4" :href="item.paperLink">
                                        <span><NoteTextOutline class="pr-2" width="'40'"/></span>
                                        Papers
                                    </a>
                                    
                                    <a class="routerLink d-flex pa-4" @click="openAbstract(item)">
                                        <span><BookOpenVariant  width="'40'"/></span>
                                        Abstract
                                    </a>
                                </div>
                                
                                <v-list-item-title v-html="item.authors"></v-list-item-title>
                                <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
                            </v-list-item-content>
                        
                        </v-list-item>
                        
                    </template>
                </v-list>
            </v-card-text>
        </v-card>

        <v-card class="mx-auto">
            <a name="Books">
                 <h3 class="text-h6 font-weight-medium text-left grow py-3 routerLink" style ="color:#0f275c">
                    Books
                </h3>
            </a>
            
            <v-card-text class="py-0">
                <v-list>
                    <template v-for="(item) in books">
                        <v-list-item :key="item.id">   
                            <v-list-item-content>
                                <div class="d-flex">
                                    <v-list-item-title v-html="item.title" class="font-weight-medium"></v-list-item-title>
                                    <a class="routerLink d-flex pa-4" :href="item.paperLink">
                                        <span><NoteTextOutline class="pr-2" width="'40'"/></span>
                                        Papers
                                    </a>
                                    
                                    <a class="routerLink d-flex pa-4" @click="openAbstract(item)">
                                        <span><BookOpenVariant  width="'40'"/></span>
                                        Abstract
                                    </a>
                                </div>
                                
                                <v-list-item-title v-html="item.authors"></v-list-item-title>
                                <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
                            </v-list-item-content>
                        
                        </v-list-item>
                        
                    </template>
                </v-list>
            </v-card-text>
        </v-card>
        
    </div>
</template>


<script>
    import NoteTextOutline from 'vue-material-design-icons/NoteTextOutline.vue'
    import BookOpenVariant from 'vue-material-design-icons/BookOpenVariant.vue'
    import Dialog from '../components/Dialog.vue'
    import axios from 'axios';
    import {reverse} from 'lodash';
 

    export default {
        components:{
            NoteTextOutline,
            BookOpenVariant,
            Dialog
        }, 
        data: () => ({
            paper: 'paper-text-outline',
            journals : [],
            workshops : [],
            books : [],
            text : "",
            content :"",
            dialogA: false,
            items: [
                
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
      ]     ,
    }),
    beforeMount() {
        this.getPublications();
    },

    methods: {
        getPublications() {
          axios.get('https://cyber-api.hellven.io/publications').then(response => {
            this.journals = reverse(response.data);

          });      
          axios.get('https://cyber-api.hellven.io/workshops').then(response => {
            this.workshops = reverse(response.data);
            // response.data.forEach(i=>{
            //     console.log(i)})
          });   

          axios.get('https://cyber-api.hellven.io/books').then(response => {
            this.books = reverse(response.data);
            // response.data.forEach(i=>{
            //     console.log(i)})
          }); 
        },
        openSource(item){
            window.open(item.paperLink);
        },
        openAbstract(item){
            this.dialogA = true;
            this.content = item.data.abstract;
            //console.log(item)
        }
    }

  }
</script>