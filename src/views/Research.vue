<template>
    <v-card class=" my-3 " fill-height>
        <v-list max-height>
            <template v-for="(item) in items">
                <v-list-item :key="item.id" >   
                    <v-col cols="3">
                        <v-img  :src="getImagePath(item.image)"></v-img>
                    </v-col>
                    <v-col>
                        <v-list-item-content class="my-3">
                            <div class="d-flex my-3">
                                <p v-html="item.title" style ="color:#0f275c font-size:'15px'" class="font-weight-medium text-h6 color:#0f275c "></p>
                            </div>
                            <div class="text--primary" v-html="item.abstract" > </div>              
                        </v-list-item-content>  
                    </v-col>
                </v-list-item>
                <v-divider :key="item.id"></v-divider>
            </template>
        </v-list>
    </v-card>
</template>
   
        


<script>
    import RESEARCHES from './researches.json';
    import axios from 'axios';
  
    export default {
        data: () => ({
            paper: 'paper-text-outline',

        items: RESEARCHES,
        paragraphClass: 'underline'
    }),
    beforeMount() {
      //s  console.log(this.items);
       // this.getResearch();
    },

    methods: {
        getResearch() {
          axios.get('https://cyber-api.hellven.io/researchs').then(response => {
            this.items = response.data;
           //  console.log(this.items);
           // response.data.forEach(i=>{
             // console.log(i.Abstract);
            //    })
          });        
        },
        
        getImagePath(filename) {
          return require('../assets/researches/' + filename);
        }
    }

  }
</script>