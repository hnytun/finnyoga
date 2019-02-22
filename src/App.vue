<template>
  <v-app>
    <router-view/>
  </v-app>
</template>

<script>

export default {
  
  data () {
    
    return {
      user: {
        user_id: null,
        user_name: null,
        instructor: null,
        instructorDescription: null,
        studioName: null,
        studioAddress: null,
        studioSuburb: null,
        //total room for users
        studioCapacity: null,
        //booked spots
        studioType: null,
      },
      dropin: {
        date: null,
        price: null,
        difficulty: null,
        yogaType: null,
        bookedSpots: null,
        
      }
      
    }
  }

}

</script>
