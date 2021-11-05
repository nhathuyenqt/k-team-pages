<template>
    <div>
        <v-card class="mx-auto">
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
                    <v-col cols="3">
                    <strong>May 2021</strong>
                    </v-col>
                    <v-col>
                    <strong>New Icon</strong>
                    <div class="text-caption">
                        Mobile App
                    </div>
                    </v-col>
                </v-row>
                </v-timeline-item>

                <v-timeline-item
                color="teal lighten-3"
                small
                >
                <v-row class="pt-1">
                    <v-col cols="3">
                    <strong>April 2021</strong>
                    </v-col>
                    <v-col>
                    <strong>Design Stand Up</strong>
                    <div class="text-caption mb-2">
                        Hangouts
                    </div>
                    <v-avatar>
                        <v-img
                            src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairFrida&accessoriesType=Kurt&hairColor=Red&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=GraphicShirt&clotheColor=Gray01&graphicType=Skull&eyeType=Wink&eyebrowType=RaisedExcitedNatural&mouthType=Disbelief&skinColor=Brown"
                        ></v-img>
                    </v-avatar>
                    <v-avatar>
                        <v-img
                        src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairFrizzle&accessoriesType=Prescription02&hairColor=Black&facialHairType=MoustacheMagnum&facialHairColor=BrownDark&clotheType=BlazerSweater&clotheColor=Black&eyeType=Default&eyebrowType=FlatNatural&mouthType=Default&skinColor=Tanned"
                        ></v-img>
                    </v-avatar>
                    <v-avatar>
                        <v-img
                        src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairMiaWallace&accessoriesType=Sunglasses&hairColor=BlondeGolden&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Surprised&eyebrowType=RaisedExcited&mouthType=Smile&skinColor=Pale"
                        ></v-img>
                    </v-avatar>
                    </v-col>
                </v-row>
                </v-timeline-item>
                <v-timeline-item
                    color="pink"
                    small
                >
                <v-row class="pt-1">
                    <v-col cols="3">
                        <strong>Feb. 2021</strong>
                    </v-col>
                    <v-col>
                        <strong>Lunch break</strong>
                    </v-col>
                </v-row>
                </v-timeline-item>

                <v-timeline-item
                    color="teal lighten-3"
                    small
                >
                <v-row class="pt-1">
                    <v-col cols="3">
                    <strong>9-11am</strong>
                    </v-col>
                    <v-col>
                    <strong>Finish Home Screen</strong>
                    <div class="text-caption">
                        Web App
                    </div>
                    </v-col>
                </v-row>
                </v-timeline-item>
            </v-timeline>
            </v-card-text>
        </v-card>
    </div>
</template>



