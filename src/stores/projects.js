import { defineStore } from 'pinia';
import data from '@/data/projectsArray.json';

export const useProjectStore = defineStore('projects',  {

    state: () => ({
        projects: null,
        filter: 'all',
    }),
    getters: {
        getFilters: (state) => {
            // Get distinct list of all titles in the subjects array
            let titles = [...new Set(state.projects.map(option => option.sortTitle))]
            titles.sort();
            titles.unshift('all');
            return titles;
        },
        getAllProjects: (state) => {
            return state.projects;
        },
        getFilteredProjects: (state) =>{
            if(state.filter === 'all')
                return state.projects;
            else
                return state.projects.filter(project => project.sortTitle === state.filter);
        }
        
    },
    actions: {
        fetchProjects() {
            this.projects = data;
        },
      
    }
});