<template>
    <v-card class=" my-3 " fill-height>
        <v-list max-height>
            <template v-for="(item) in items">
                <v-list-item :key="item.id" >   
                    <v-col cols="3">
                        <v-img :src="'https://cyber-api.hellven.io' + item.Slide[0].url"></v-img>
                    </v-col>
                    <v-col>
                        <v-list-item-content class="my-3">
                            <div class="d-flex my-3">
                                <p v-html="item.Title" style ="color:#0f275c font-size:'15px'" class="font-weight-medium text-h6 color:#0f275c "></p>
                            </div>
                            <div class="text--primary" v-html="item.Abstract" > </div>              
                        </v-list-item-content>  
                    </v-col>
                </v-list-item>
                <v-divider :key="item.id"></v-divider>
            </template>
        </v-list>
    </v-card>
</template>
   
        


<script>

    import axios from 'axios';
  
    export default {
        data: () => ({
            paper: 'paper-text-outline',

        items: [],
        paragraphClass: 'underline'
    }),
    beforeMount() {
        this.getResearch();
    },

    methods: {
        getResearch() {
          axios.get('https://cyber-api.hellven.io/researchs').then(response => {
            this.items = response.data;
            response.data.forEach(i=>{
              console.log(i.Abstract);
                })
          });        
        }
    }

  }
</script>