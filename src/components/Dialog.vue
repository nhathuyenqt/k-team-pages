<template>
  <div class="text-center">
    <v-dialog
      width="500"
      v-model = "show"
    >

      <v-card>
        <v-card-title class="text-h5 lighten-2">
          Abstract
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          {{content}}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="show = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
  export default {
    props: {
        content: {
            type: Array
        },
        show: {
            type: Boolean,
            default: false
        }
        
    },
    mounted(){
        // this.modelValue = this.dialog;
        console.log(" model " , this.show);
    },
    data () {
      return {
       
      }
    },
  }
</script>