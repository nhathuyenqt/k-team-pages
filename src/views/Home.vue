
<template>
    <div>
        <v-card class="mx-auto" margin="10px"  color="#E8f5ef">
            <v-card-text>
                <h3 class="text-h5 font-weight-regular text-left grow " style="color:#00783a" >Word of the Day</h3>
                
                <div class="text--primary">
                    The Cybersecurity Group (CyberSec) is a research group at the School of Computer Science at the University of St. Gallen led by Prof. Katerina Mitrokotsa, while a branch is located at Chalmers University of Technology.
                    <br>
                    <br>
                    Our research interests are centered around information security and applied cryptography, with the larger goal of safeguarding communications and providing strong privacy guarantees. We are currently active in multiple areas including the design of provably secure cryptographic protocols and cryptographic primitives that can be employed for reliable authentication, outsourcing computations in cloud-assisted settings, network security problems as well as secure and privacy-preserving machine learning. Take a look at our research and publications pages for a full list of our research results.
                    <br>
                    <br>
                    Our flagship course Cybersecurity is offered in the Fall semester. We also offer a research seminar in the Spring and Fall semester, and a course on Cryptograhy in the Spring semester. Check our courses page for more information.
                </div>
            </v-card-text>
        </v-card> 
        <div> 
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
        </div> 
        <v-card
            class="mx-auto"
        >
            <v-card-title >
            
                <h3 class="text-h6 font-weight-regular  text-left grow subtitle">
                    NEWS
                </h3>
               
            </v-card-title>
            <v-card-text class="py-0">
            <v-timeline
                align-top
                dense
            >
                <v-timeline-item
                color="pink"
                small
                >
                <v-row class="pt-1">
                    <v-col cols="2">
                    <strong>May 2021</strong>
                    </v-col>
                    <v-col>
                    <strong>St. Gallen Symposium 2021!</strong>
                    <div class="text-caption">
                        Katerina has participated at the St. Gallen Symposium 2021 and talked about benefits and risks of our digital identity.
                    </div>
                    </v-col>
                </v-row>
                </v-timeline-item>

                <v-timeline-item
                color="teal lighten-3"
                small
                >
                <v-row class="pt-1">
                    <v-col cols="2">
                    <strong>April 2021</strong>
                    </v-col>
                    <v-col>
                    <strong>NIVA accepted to ACISP 2021!</strong>
                    <div class="text-caption mb-2">
                        Carlo's paper on verifiable and privacy-preserving aggregation for learning has been accepted at ACISP 2021. Stay tuned for the paper!
                    </div>
                    </v-col>
                </v-row>
                </v-timeline-item>
                <v-timeline-item
                    color="pink" small
                >
                <v-row class="pt-1">
                    <v-col cols="2">
                        <strong>Feb. 2021</strong>
                    </v-col>
                    <v-col>
                        <strong>Paper accepted at IET Information Security</strong>
                        <div class="text-caption mb-2">
                           Our paper on verifiable homomorphic signicryption has been accepted at the IET Information Security Journal.
                        </div>
                    </v-col>
                </v-row>
                </v-timeline-item>
                <v-timeline-item
                    color="teal lighten-3"
                    small
                >
                <v-row class="pt-1">
                    <v-col cols="2">
                    <strong>Feb. 2021</strong>
                    </v-col>
                    <v-col>
                    <strong>WiSec 2021</strong>
                    <div class="text-caption">
                        Katerina serves in the PC committee of ACM WiSEC 2021.
                    </div>
                    </v-col>
                </v-row>
                </v-timeline-item>
            </v-timeline>
            </v-card-text>
        </v-card>
        

        <v-card class="mx-auto mt-16" margin="5px" >
            <v-card-title >
            
                <h3 class="text-h6 font-weight-regular  text-left grow subtitle">
                   RECENT PUBLICATIONS
                </h3>
               
            </v-card-title>
            <v-list three-line>
                <template v-for="(item) in recentPub">
                <v-list-item :key="item.id">
                    <v-col cols="2" class="pl-10">
                
                            <iframe height="120px" width="90px" :src="item.paperLink" allow="autoplay"></iframe>
                    </v-col>
                    <v-col>
                        <v-list-item-content>
                        
                            <p v-html="item.name" class="titlePaper" ></p>
                            <v-list-item-subtitle v-html="item.data.authors" style="white-space: normal"></v-list-item-subtitle>
                            <v-list-item-subtitle v-html="item.data.journal" class="text-wrap"></v-list-item-subtitle>
                        </v-list-item-content>
                    </v-col>  
                </v-list-item>
                </template>
            </v-list>
        </v-card>
    </div>
</template>



<script>
import PUBLICATIONS from './json/publications.json';
import axios from 'axios';
  export default {
    data: () => ({
        recentPub: []
    }),

    beforeMount() {
        this.recentPub = PUBLICATIONS.slice(PUBLICATIONS.length-10,(PUBLICATIONS.length)).reverse();
        // this.getPublications();
    },

    methods: {
        getPublications() {
          axios.get('https://cyber-api.hellven.io/publications').then(response => {
            this.journals = response.data;
            this.recentPub = response.data.slice(response.data.length-10,(response.data.length)).reverse();
           // console.log(this.recentPub)
          }); 
        }
    }
  }
</script>



