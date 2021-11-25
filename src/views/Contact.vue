<template>
 
  <div id="contact">
    <h2 class="text-h6 font-weight-light text-left grow">Contact us</h2>
    <GoogleMap />
    <h2 class="text-h6 font-weight-light text-left grow my-2" >How to find us</h2>
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

<style scoped>
.navbar{
    background: #f44336;
    padding: 1rem;
    font-size: 1.5rem;
    border-bottom: 1px solid white;


}
.h2{
  'font-family': 'Helvetica Neue',
  'text-align': 'center';
  padding: 1rem;
  color:#555555;

}

$headings: (
    'h1': (
        'font-family': 'Calibri',
        'size': 60px,
        'line-height': 60px,
        'weight': 400
    ),
    'h2': (
        'font': 'Ariel',
        'size': 48px,
        'line-height': 48px,
        'weight': 400
    ),
)
</style>
$headings: (
    'h1': (
        'font-family': 'Calibri',
        'size': 60px,
        'line-height': 60px,
        'weight': 400
    ),
    'h2': (
        'font': 'Ariel',
        'size': 48px,
        'line-height': 48px,
        'weight': 400
    ),
)