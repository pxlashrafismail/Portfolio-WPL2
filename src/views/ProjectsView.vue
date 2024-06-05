<template lang="">
    <div class="projects-container">
        <div class="projects-container-header">
            <label for="projects" class="projects-container-header-label">{{projectsLabel}}</label>
            <select class="projects-container-header-select"
            name="projects" 
            id="projects"
            v-model="store.filter"> 
                <option
                v-for="filter in store.getFilters"
                :key="filter"
                :value="filter">
                {{filter}}
                     </option>
            </select>
        </div>
        <div class="projects-container-content">
            <div class="projects-container-content-project"
            v-for="project in store.getFilteredProjects"
            :key="project.id">
            <ProjectCardComponent :project="project" />
            </div>
        </div>
    </div>
</template>
<script>
import ProjectCardComponent from '@/components/ProjectCardComponent.vue';
import { useProjectStore } from '@/stores/projects.js';

export default {
    name: 'ProjectsView',
    components:{
        ProjectCardComponent,
    },
    
    data() {
        return {
            projectsLabel: 'Choose project\'s sort',
            store: useProjectStore(),
        }
    },

    created() {
        this.store.fetchProjects();
    },
}
</script>


