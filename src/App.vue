<template>
  <div id="app">
    <NavComponent />
    <RouterView/>
    <FooterComponent />
  </div>
</template>
<script>
import NavComponent from '@/components/NavComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import { useProjectStore } from '@/stores/projects.js'

export default {
  name: 'App',

  data() {

    return {
      projects: useProjectStore(),
    }
  },
  created() {
    this.projects.fetchProjects();
  },
  components: {
    NavComponent,
    FooterComponent,
  }
}
</script>

