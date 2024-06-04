<template lang="">
    <div class="card-container">
        <div class="card-container-image">
            <img :src="project.url" alt="project.name" class="card-container-image-img">
        </div>
        <div class="card-container-body">
           <h1>{{ projects.name }}</h1>
            <p>{{ projects.description }}</p>
        </div>
    </div>
</template>
<script>
import { useProjectStore } from '@/stores/projects.js'; 
export default {
    name: 'ProjectsView',
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
    components: {
    },
    
    created() {
        this.projects.fetchProjects();
    },
}
</script>
<style lang="">
    
</style>