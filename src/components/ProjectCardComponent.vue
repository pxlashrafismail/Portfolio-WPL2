<template lang="html">
    <div class="card-container">
        <div class="card-container-content">
            <h1 class="card-container-content-h1"> {{project.name}} </h1>
            <p class="card-container-content-p"> {{project.description}} </p>
        </div>
        <div class="card-container-image">
                <img class="card-container-content-image-img" :src="project.url" :alt="project.name">
        </div>            
    </div>
</template>
<script>
import { useProjectStore } from '@/stores/projects.js'; 
export default {
    data() {
        return {
            store: useProjectStore(),
        }
    },
    props:{
        project:{
            type: Object,
            required: true,
        },
    },
}
</script>