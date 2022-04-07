<template>
    <div>
        
    
        <div id="courses" class="align-center mx-auto full-width">
            <v-img class="mx-auto my-4" contain  max-height="160" max-width="620"  src="@/assets/privacy.jpeg"></v-img>
        </div>
 
        <v-card class="mx-auto mt-16" margin="5px" >
        <v-list dense>
            <template v-for="(course) in courses">
                <v-list-item :key="course.name">  
            
                            
                    <v-col cols ="1" align-self="start">
                    
                        <small class="r">{{course.sm}}</small>
            
                    </v-col>
                    <v-col >
                    
                        <div class="content">
                            <p>
                                <a class="routerLink" :href="course.link"> <strong class ="r">{{course.title}}</strong></a>
                                
                            </p>
                        </div>
                
            
                    </v-col> 
                       
            
                </v-list-item>
          
            </template>
        </v-list>
        </v-card>
       
		<div class="mx-auto p-4">
			<!-- <img :src="CreateURL(post.image, 1280, 300)" class="w-full mb-8">

			<button 
				@click="$router.back()" 
				class="flex items-center text-lg text-green-500 hover:text-green-600 duration-300 mb-4">
				<span class="material-icons text-lg mr-1">keyboard_double_arrow_left</span> Back
			</button> -->

			<!-- <h1 class="text-3xl md:text-5xl mb-8">{{ post.title }}</h1> -->
            <h5 class="r ht bold mt-5 mb-8" ><b>GENERAL INFORMATION</b></h5>
            <p class="r justify italic mb-5">Join us on a fascinating journey through <b>privacy-preserving</b> cryptographic protocols research 🚀</p>

			<p class="r justify  mb-5">In this course, we discuss <b>protocols</b> that are employed in order to guarantee <b>privacy-preservation</b> in different settings including: privacy-preserving authentication protocols (eg, biometric authentication), privacy-preserving verifiable delegation of computation, privacy-preserving aggregation protocols. We will discuss the design of the protocols, their provable security as well as how robust they are against different types of attacks. We will use papers in this research area published in top venues in security and privacy eg, ACM CCS, IEEE Symposium on Security and Privacy, Eurocrypt, AsiaCrypt.</p>
            <p class="r justify  mb-5">The students will be actively participating in the description and presentation of the protocols.</p>

            <span  style="r white-space: pre;">
                Among the covered topics are included: <br/>
                (1) Privacy-preserving biometric authentication protocols <br />
                (2) Privacy-preserving verifiable delegation of computation protocols <br />
                (3) Privacy-preservation authentication protocols used in the IoT (e.g. aggregation, proximity based authentication) <br />
            </span>
            <h5 class="r ht bold my-8" ><b>COURSE STRUCTURE</b></h5>
           
            <p class="r justify  mb-5">The course will focus on different areas of privacy-preserving cryptographic protocols ranging from privacy-preserving biometric authentication to privacy-preserving verifiable delegation of computation.</p>
            <p class="r justify  mb-5">Some seminal papers of the aforementioned areas will be selected and a seminar will be given focusing on each paper. The students will be actively involved in the presentation of papers and on arguing on the strengths and weaknesses of each proposed solution. In some cases the student will have the possibility on how each protocol can be improved strengthened. More precisely the course will be structured as follows:</p>

            <p class="r justify  mb-5">The course will be organized as a weekly reading and discussion group. Each session includes a presentation from a participant or from an external guest. A discussion moderated by the lecturer follows.</p>
            <p class="r justify  mb-5">The relevant literature for the students is provided before every session.</p>
        
            <!-- <h5 class="r ht bold my-8" ><b>LOCATION & TIME</b></h5>
            <p class="r justify  mb-5">The course takes place every Wednesday at 10:15-12:00 on <a href="https://unisg.zoom.us/j/65339276422?pwd=RVh2bHFtZlBiamVnTGx1YkMvSzYzZz09">zoom</a>.</p>

            Meeting ID: 653 3927 6422<br/>
            Passcode: 940918<br/> -->
			<!-- <p v-html="TextToHTML(post.content)" class="text-lg mb-8"></p>

			<div cl ass="flex items-center mb-4" v-if="post.author">
				<img 
					:src="CreateURL(post.author.avatar, 300, 300)" 
					class="inline-block rounded-full w-10 h-10 mr-4"  />

				<h1 class="text-gray-500">
					{{ post.author.full_name }}
				</h1>
			</div> -->
		</div>
	
    </div>  
</template>


<script>
    import COURSES from './json/courses.json';
    export default {
        data: () => ({
      
            courses : COURSES,
            text : "",
            content :"",
            dialogA: false,
        
    }),
    beforeMount() {
        this.courses =COURSES;
       
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
    }
</style>