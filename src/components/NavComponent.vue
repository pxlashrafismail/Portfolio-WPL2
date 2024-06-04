<template>
    <nav class="navbar">
        <div class="navbar-logo"  id="logo">
            <a class="navbar-logo-link" href="#">
                <img class="navbar-logo-link-img" :src="navImagePaths" alt="logo">
            </a>
        </div>
            <ul class="navbar-ul">
              <li :class="['navbar-ul-li',{active: navItem.active}]" v-for="navItem in navItems" :key="navItem.name" @click="toggleActive(navItem)">
                <router-link   :to="navItem.path" class="navbar-ul-li-link" >{{navItem.name}}</router-link>
                </li>
            </ul>
        </nav>
</template>
<script>
export default {
    name: 'NavComponent',
    data() {
        return {
            navImagePaths:[
                "/assets/images/ash-logo2.png",
            ],
            navItems: [
                { name: 'Home', path: '/home' , active:false},
                { name: 'About', path: '/about', active:false },
                { name: 'Projects', path: '/projects', active:false },
                { name: 'Contact', path: '/contact' , active:false}
            ],
        }
    },
    methods: {
        toggleActive(item) {
            this.navItems.forEach((navItem) => {
                navItem.active = false;
            });
            item.active = true;
        }
    }
}
</script>