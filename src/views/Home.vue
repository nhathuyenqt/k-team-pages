
<template>
    <div>
        <v-card class="mx-auto" margin="10px" >
            <v-card-text>
                <div>Word of the Day</div>
                
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
            
                <h3 class="text-h6 font-weight-light text-left grow">
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
        

        <v-card class="mx-auto mt-16" margin="10px" >
            <v-card-title >
            
                <h3 class="text-h6 font-weight-light text-left grow">
                    Recent publications
                </h3>
               
            </v-card-title>
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
        </v-card>
    </div>
</template>



<script>
  export default {
    data: () => ({
      items: [
        // { header: 'Recent publications' },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          authors: 'B. Liang, G. Banegas, A. Mitrokotsa',
          title: 'Statically Aggregate Verifiable Random Functions and Application to E-Lottery.',
          subtitle: 'Cryptograhy (MDPI), 4(4), 37, doi:10.3390/cryptography4040037, 2020.',
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          authors: 'G. Tsaloli, G. Banegas, A. Mitrokotsa',
          title: 'Practical and Provably Secure Distributed Aggregation: Verifiable Additive Homomorphic Secret Sharing.',
          subtitle:'Cryptograhy (MDPI), 4(3), 25, doi:10.3390/cryptography4030025, 2020.',
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          authors: 'D. Fiore, A. Mitrokotsa, L. Nizzardo, E. Pagnin.',
          title: 'Multi-key homomorphic authenticators.',
          subtitle: 'IET Information Security, doi:10.1049/iet-ifs.2018.5341, 2019. ðŸ† [ IET Premium Award ] (Best paper published within the last two years in the IET Information Security Journal)',
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          authors: 'B. Liang, A. Mitrokotsa.',
          title: 'Robust Distributed Pseudorandom Functions for mNP Access Structures.',
          subtitle:'In Proceedings of International Conference on Information Security (ISC 2019), pp 107-126, LNCS, New York, US, Sept. 2019. ðŸ† Best Paper Award!',
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          authors: 'C. Brunetta, B. Liang, A. Mitrokotsa.',
          title: 'Code-Based Zero Knowledge PRF Arguments.',
          subtitle: 'In Proceedings of International Conference on Information Security (ISC 2019), pp 171-189, LNCS, New York, US, Sept. 2019.',
        },
      ],
    }),
  }
</script>



