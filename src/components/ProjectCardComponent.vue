<template lang="">
    <div>
        
    </div>
</template>
<script>
import { useProjectStore } from '@/stores/projects.js'; 
export default {
    name: 'ProjectsView',
    data() {
        return {
            projects: useProjectStore(),
            details:"More details"
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