<template>
  <div class="pa-2 pl-5 center" >
   
    <br>
    <GmapMap
      :center='center'
      :zoom='15'
      style='width:90%;  height: 400px; '
    >
    <GmapMarker
        :position="loc"
        :label="loc.label"
        @click="center=loc"
      />
    </GmapMap>
  </div>
</template>

<script>
export default {
  name: 'GoogleMap',
  data() {
    return {
      loc: {
              lat: 47.42775516035286,
              lng: 9.377250151367777,
              label: 'Cyber Team'
          },
      center: { lat: 47.42775516035286, lng: 9.377250151367777 },
    }
  },
  mounted() {
     
    // this.geolocate();
  },
  methods: {
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
       this.locations = [
          {
              lat: 39.7837304,
              lng: -100.4458825,
              label: 'United States'
          }];
    },
    
  },
};
</script>