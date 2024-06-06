<template lang="html">
    <div class="card-project-container">
        <div class="card-project-container-content">
            <h1 class="card-project-container-content-h1"> {{project.name}} </h1>
            <p class="card-project-container-content-p"> {{project.description}} </p>
        </div>
        <div class="card-project-container-image">
                <img class="card-project-container-image-img" 
                :src="project.url" :alt="project.name">
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