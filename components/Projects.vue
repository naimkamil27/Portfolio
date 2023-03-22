<template>  
    <h1 class="text-5xl text-white text-center" style=" text-decoration: underline; font-family: 'Roboto Mono', monospace;">Projects</h1>
    <div class="container">    
        <div class="grid grid-cols-2 gap-7 text-white">
            <div>
                <NuxtLink to="/JomDobi">
                    <img src="~/assets/images/jomdobi.png" class="box" alt="">
                </NuxtLink>
                <h2 class="mt-2 text-2xl" style="font-family: 'Roboto Mono', monospace;">Jom!Dobi</h2>
                <h5 style="font-family: 'Nunito Sans', sans-serif;">Full development • Mobile Development</h5>
            </div>
            <div>
                <NuxtLink to="/JomDentist">
                    <img src="~/assets/images/jomdentist.png" class="box" alt="">
                </NuxtLink>
                <h2 class="mt-2 text-2xl" style="font-family: 'Roboto Mono', monospace;">JomDentist</h2>
                <h5 style="font-family: 'Nunito Sans', sans-serif;">Full development • Mobile Development </h5>
            </div>
            <div>
                <NuxtLink to="/projectdetails">
                    <img src="~/assets/images/citra.png" class="box" alt="">
                </NuxtLink>
                <h2 class="mt-2 text-2xl" style="font-family: 'Roboto Mono', monospace;">Animation</h2>
                <h5 style="font-family: 'Nunito Sans', sans-serif;">Full development • Animation</h5>
            </div>
            <div>
                <NuxtLink to="/projectdetails">
                    <img src="~/assets/images/jomvaccine.png" class="box" alt="">
                </NuxtLink>
                <h2 class="mt-2 text-2xl" style="font-family: 'Roboto Mono', monospace;">Jom!Vaccine</h2>
                <h5 style="font-family: 'Nunito Sans', sans-serif;">UI/UX Design • Mobile Development</h5>
            </div>
            <div>
                <NuxtLink to="/projectdetails">
                    <img src="~/assets/images/toshibajet.png" class="box" alt="">
                </NuxtLink>
                <h2 class="mt-2 text-2xl" style="font-family: 'Roboto Mono', monospace;">Toshibajet</h2>
                <h5 style="font-family: 'Nunito Sans', sans-serif;">Full development • Website Development</h5>
            </div>
            <div>
                <NuxtLink to="/projectdetails">
                    <img src="~/assets/images/wakemeup.png" class="box" alt="">
                </NuxtLink>
                <h2 class="mt-2 text-2xl" style="font-family: 'Roboto Mono', monospace;">WakeMeUp</h2>
                <h5 style="font-family: 'Nunito Sans', sans-serif;">Full development • Game Development</h5>
            </div>
        </div>
        <div class="text-end mt-7 text-white" style="text-decoration: underline; font-family: 'Nunito Sans', sans-serif;">
            <NuxtLink to="/projectlist">see more</NuxtLink>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600&family=Roboto+Mono&display=swap');

.box {
    min-height: 300px;
    border-radius: 25px;
    transition: box-shadow .3s;
}

.box:hover {
    box-shadow: 0 0 50px rgb(0, 255, 255, 0.3); 
    border: 10px;
}

.container {
    min-width: 1000px;
    max-width: 800px;
    margin: auto;
    margin-top: 50px;
}
</style>