import { defineStore } from 'pinia';
import data from '@/data/projectsArray.json';

export const useProjectStore = defineStore('projects',  {

    state: () => ({
        getProjects: null,
        filterProjects: null,
    }),
    getters: {
        getProjects(state) {
            return state.projects;
        },
        getProjectById: (state) => (id) => {
            return state.projects.find(project => project.id === id);
        }
    },
    actions: {
        fetchProjects() {
            this.projects = data.projects;
        },
        addProject(project) {
            this.projects.push(project);
        },
        updateProject(project) {
            const index = this.projects.findIndex(p => p.id === project.id);
            this.projects[index] = project;
        },
        deleteProject(id) {
            this.projects = this.projects.filter(project => project.id !== id);
        }
    }

});