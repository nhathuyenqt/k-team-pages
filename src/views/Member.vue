<template>
 
  <div id="Member">
  
    <h6 class="font-weight-regulartext-left grow mt-5 ml-3" >How to find us</h6>
   
   <img :src="avatar" />
    <v-img v-bind:src="require('./members/Nan.jpeg')" ></v-img>

  </div>  
</template>


<script>

  export default {
    name: 'Member',
    data(){
      return{
        id :this.$route.params.id,
        title:"member",
        profile: this.$route.params.profile,
        avatar : require("./members/Eriane.jpeg")
      }
    }, 
  

    beforeMount() {
    
      //  this.getMembers();
    },
  
     components: {

    },

    methods: {
       
        getImagePath(filename) {
          console.log(require('./members/' + filename+'.jpeg'));
          return require('./members/' + filename+'.jpeg');
        }
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
  font-family: 'Helvetica Neue';
  text-align : 'center';
  padding: 1rem;
  color:#555555;

}

</style>
