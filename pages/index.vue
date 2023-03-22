<template>
  <div class="naim">
    <div class="flex items-center justify-center" style="width: 100%;">
      <div class="text-center" style="margin-top: 300px; margin-bottom: 250px; color: white;">
        <div style="font-family: 'Lora', serif;">
          <h2 class="text-7xl">Hi my name is<span style="color: aqua"> Naim Kamil</span></h2>
        </div>
        <div style="font-family: 'Roboto Mono', monospace;">
          <div class="mt-2">
            <h3>UI/UX Designer and Front End Developer</h3>
          </div>
          <div class="mt-3">
            <h4>Im providing front end development codes and UIUX design. <br> Also do freelance in animation. Let's get working together.</h4>
          </div>
        </div>
        <div class="justify-between" style="font-size: 50px;">
          <button><a target="_blank" href="https://www.linkedin.com/in/naim-kamil-b6679a237/"><i class='box bx bxl-linkedin'></i></a></button>
          <button><a target="_blank" href="https://wa.me/60182084225"><i class='box1 bx bxl-whatsapp ml-4 mr-4'></i></a> </button>
          <button><a target="_blank" href="mailto:nakikami27@gmail.com"><i class='box2 bx bxl-gmail'></i></a></button>
        </div>
      </div>
    </div>
    <!-- <Services style="margin-bottom: 250px;" /> -->
    <!-- <Skills />  -->
    <Projects />
    <!-- <About /> -->
  </div>
  </template>
  <script setup>
    definePageMeta({
      layout: 'homes'
    })
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Lora:wght@500&family=Roboto+Mono&display=swap');
  .naim {
    height: auto;
    padding-bottom: 100px;
    background: #212529;
    /* background: linear-gradient(180deg, rgba(247,239,239,1) 32%, rgba(203,203,203,1) 46%, rgba(75,75,75,1) 76%); */
  } 

  .box2:hover {
    text-shadow: 0 0 50px #9e2a2b;
    color: #9e2a2b; 
  }

  .box1:hover {
    text-shadow: 0 0 50px #2b9348; 
    color: #2b9348;
  }

  .box:hover {
    text-shadow: 0 0 50px #3e55e9; 
    color: #3e55e9;
  }
  </style>
  