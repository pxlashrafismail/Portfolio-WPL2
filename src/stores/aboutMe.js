import { defineStore } from "pinia";
import data from "@/data/aboutMe.json";

export const useAboutMeStore = defineStore("aboutMe", {
    state: () => ({
        aboutMe: null,
        filteredAboutMe:"all",
    }),
    getters: {
        getAboutMe(state) {
        return state.aboutMe;
        },
        getFilteredAboutMe: (state) =>{
            return ()=>{
                let aboutMe = state.aboutMe;
                if(state.filteredAboutMe!=="all"){
                    aboutMe = aboutMe.filter(option => option.title == state.filteredAboutMe);
                }
                return aboutMe;
            }
        }
    },
      
    actions: {
        fetchAboutMe() {
        this.aboutMe = data;
        },
        SetFilterAboutMe(name){
            this.filteredAboutMe = name;
        }
    },
});