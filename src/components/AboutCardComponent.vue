<template lang="html">
    <div class="card-container">
       <div class="card-container-header">
           <h1 class="card-container-header-h1"> {{aboutMeOption.name}} </h1>
        </div>
        <div class="card-container-content">
            <ul class="card-container-content-ul">
                <li class="card-container-content-ul-item"  
                v-for="item in aboutMeOption.ul"
                :key=item.id>
                <h2>{{item.liHeader}}</h2>
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