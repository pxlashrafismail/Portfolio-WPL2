import { defineStore } from "pinia";
import data from "@/data/aboutMe.json";

export const useAboutMeStore = defineStore("aboutMe", {
    state: () => ({
        subjects: null,
        filter: 'all',
    }),
    getters: {
        getFilters: (state) => {
            // Get distinct list of all titles in the subjects array
            let titles = [...new Set(state.subjects.map(option => option.title))]
            titles.sort();
            titles.unshift('all');
            return titles;
        },
        getAllSubjects: (state) => {
            return state.subjects;
        },
        getFilteredSubjects: (state) =>{
            if(state.filter === 'all')
                return state.subjects;
            else
                return state.subjects.filter(subject => subject.title === state.filter);
        }
    },
      
    actions: {
        fetchAboutMe() {
            this.subjects = data;
        },
        // SetFilterAboutMe(name){
        //     this.filteredAboutMe = name;
        // }
    },
});