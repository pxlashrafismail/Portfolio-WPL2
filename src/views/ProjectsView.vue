<template lang="">
    <div>
        <ProjectCard />
    </div>
</template>
<script>
import ProjectCard from '@/components/ProjectCardComponent.vue';
import { useProjectStore } from '@/stores/projects.js';

export default {
    name: 'ProjectsView',
    components:{
        ProjectCard,
    },
    
    data() {
        return {
            projects: useProjectStore(),
        }
    },

    created() {
        this.projects.fetchProjects();
    },
}
</script>
<style lang="">
    
</style>


