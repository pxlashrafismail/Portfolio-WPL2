<template lang="html">
    <div class="card-about-container">
       <div class="card-about-container-header">
           <h1 class="card-about-container-header-h1"> {{aboutMeOption.name}} </h1>
        </div>
        <div class="card-about-container-content">
            <ul class="card-about-container-content-ul">
                <li class="card-about-container-content-ul-item"  
                v-for="item in aboutMeOption.ul"
                :key=item.id>
                <h2 v-html="item.liHeader"></h2>
                <p v-html="item.liContent"></p>

                    </li>
               </ul> 
         </div>
    </div>
</template>
<script>
import { useAboutMeStore } from '@/stores/aboutMe.js'
export default {
    data() {
        return {
            store: useAboutMeStore()
        }
    },
    props:{
        aboutMeOption: {
            type: Object,
            required: true
        }
    }
}
</script>
<style lang="">
    
</style>