<template lang="html">
    <div class="home-container" id="home">
      <div class="home-container-image" id="foto">
        <img class="home-container-image-img" :src="homeImagePath" alt="profile-foto" />
      </div>
      <div class="home-container-content" id="intro-me">
        <h1 class="home-container-content-title" >{{introH1}}</h1>
        <p class="home-container-content-description" v-html="introParagraph" ></p>
      </div>
    </div>
  </template>
  
  <script>

  export default {
    name: 'HomeView',
    data() {
      return {
        introH1: 'Hi, I\'m Ash!',
        introParagraph: 
          'I live in Belgium, and Im a freelance web developer. <br>'+
          'Designing websites and logos are my favourite. <br>'+
          'By the way! I write clean code. ',
        homeImagePath: [
          '/assets/images/dive-code.png'],
  
      }
    }
  }
  </script>
  