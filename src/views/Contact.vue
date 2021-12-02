<template>
 
  <div id="contact">
    <h6 class="font-weight-regulartext-left grow my-5">Contact us</h6>
    <GoogleMap />
    <h6 class="font-weight-regular text-left grow my-2" >How to find us</h6>
    <div >
          <v-list dense >
            <v-list-item dense>
              <v-list-item-icon>
                <v-icon color="indigo">
                  mdi-domain
                </v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Cyber Security Team</v-list-item-title>
                <v-list-item-subtitle>School of Computer Science</v-list-item-subtitle>
                <v-list-item-subtitle>Office 64-316</v-list-item-subtitle>
                <v-list-item-subtitle>Torstrasse 25</v-list-item-subtitle>
                <v-list-item-subtitle> 9000 St. Gallen</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item dense>
              <v-list-item-icon>
                <v-icon color="indigo">
                  mdi-email
                </v-icon>
              </v-list-item-icon>

              <v-list-item-title style="font-family:'Roboto' size:'13px'">
                <a class="routerLink" href="mailto:'cyber@gmail.com'">cyber_team_email(at)gmail.com</a>
              </v-list-item-title>
            </v-list-item>

            <v-list-item >
              <v-list-item-icon>
                <v-icon color="indigo">
                  mdi-phone
                </v-icon>
              </v-list-item-icon>
              <v-list-item-title style="font-family:'Roboto' font-size:'0.8em'">
                <a class="routerLink"  href="tel:+41 71 224 78 61">+41 71 224 78 61</a>
              </v-list-item-title>
            </v-list-item>
             
          </v-list>
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