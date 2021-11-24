<template>
 
  <div id="contact">
    <GoogleMap />
    <div id="c62" class="fsc-contentelement fsc-contentfooter fsc-layout-0  fsc-contentfooter-layout-0">
	
          <ul class="list-outset-icons">
            <span class="outset-icon"> 
                    <v-icon
                        large
                        color="green darken-2">
                        mdi-domain
                    </v-icon>
                  </span>Cyber Security Team <br />
                School of Computer Science<br />
                Office 64-316<br>
                Torstrasse 25<br>       
                9000 St. Gallen<br> 
            <a href="tel:+41 71 224 78 61">
                  <span class="outset-icon"> 
                    <v-icon
                        large
                        color="green darken-2">
                        mdi-domain
                    </v-icon>
                  </span>+41 71 224 78 61</a>
        </ul>
    </div>
  </div>  
</template>


<script>
  import GoogleMap from '../components/GoogleMap.vue'
  export default {
    name: 'Contact',
     components: {
        GoogleMap
    }
  }
</script>