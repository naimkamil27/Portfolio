<template>
    <div class="container mx-auto">
      <h2 class="mt-3 m-5 text-5xl">Service I Offer</h2>
      <div class="text-center text-white">
        <div v-for="items in images" :index="items" class="p-4" style="display: inline-block;">
          <div class="card p-4 text-center" :class="items.naim" style="min-width: 250px; max-width: 250px;">
            <i :class="items.icon" class="p-5" style="font-size: 80px"></i>
            <h1 class="text-3xl">{{ items.title }}</h1>
            <h1 class="my-3">{{ items.description }}</h1>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
        
export default {
  data() {
    return {
      images: [
        { icon: 'bx bx-desktop', title:'Front End',description: 'Nuxt.js • Vue.js • Tailwind Bootstrap', naim: 'naim' },
        { icon: 'bx bx-video', title:'Animation', description: 'Adobe Illustrator • Animate Powtoon • Premier Pro', naim: 'naim' },
        { icon: 'bx bxs-pencil', title:'UI/UX Design',description: 'Figma • Adobe XD • Illustrator • Dribble  ', naim: 'naim' },
        { icon: 'bx bx-mobile-alt', title:'Developer',description: 'Android Studio • MySql Google Firebase', naim: 'naim' },
        { icon: 'bx bx-joystick', title:'Game Developer',description: 'Unity • Adobe 3ds • Illustrator C#', naim: 'naim' }
      ]
    }
  }
}
</script>

<style scoped>

.naim {
  /* backdrop-filter: blur(25px) saturate(182%); */
    -webkit-backdrop-filter: blur(25px) saturate(182%);
    background-color: rgba(146, 87, 146, 0.55);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);
}

</style>