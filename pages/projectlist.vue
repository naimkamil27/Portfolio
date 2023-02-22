<template>
    <Head>
        <Title>Naim Kamil | Work</Title>
    </Head>
    <body>
        <div class="container">
            <h1 class="text-5xl mb-14">Projects</h1>
            <div class="grid grid-cols-2 gap-7 flex items-center">
                <div id="container">
                    <img src="../assets/images/jomdobi.png" class="box" alt="naim">
                </div>
                <div>
                    <h1 class="text-4xl">Jom!Dobi</h1>
                    <p>
                        <span style="color: grey;">Case Study</span> <br>
                        Mobile application that helps laundry users to do laundry more efficiently.
                    </p>
                    <div class="mt-4">
                        
                        <NuxtLink style="text-decoration: underline;" to="/projectdetails">See more</NuxtLink>
                    </div>
                </div>
                <div id="container">
                    <img src="../assets/images/jomdentist.png" class="box" alt="naim">
                </div>
                <div>
                    <h1 class="text-4xl">JomDentist</h1>
                    <p>
                        <span style="color: grey;">Case Study • Final Year Project</span> <br>
                        Mobile application for primary schools student to learn and get to know how to take care of their dental health.
                    </p>
                    <div class="mt-4">
                        <NuxtLink style="text-decoration: underline;" to="/projectdetails">See more</NuxtLink>
                    </div>
                </div>
                <div id="container">
                    <img src="../assets/images/jomvaccine.png" class="box" alt="naim">
                </div>
                <div>
                    <h1 class="text-4xl">Jom!Vaccine</h1>
                    <p>
                        <span style="color: grey;">Case Study</span> <br>
                        A user-friendly mobile application that helps everyone book a vaccination appointment for a variety of vaccines - minus the fuss & long waits.
                    </p>
                    <div class="mt-4">
                        <NuxtLink style="text-decoration: underline;" to="/projectdetails">See more</NuxtLink>
                    </div>
                </div>
                <div id="container">
                    <img src="../assets/images/citra.png" class="box" alt="naim">
                </div>
                <div>
                    <h1 class="text-4xl">Animation</h1>
                    <p>
                        <span style="color: grey;">Freelance</span> <br>
                        Animation video to promote Sains Citra,UKM course to the students that want to pursue degree.
                    </p>
                    <div class="mt-4">
                        <NuxtLink style="text-decoration: underline;" to="/projectdetails">See more</NuxtLink>
                    </div>
                </div>
                <div id="container">
                    <img src="../assets/images/toshibajet.png" class="box" alt="naim">
                </div>
                <div>
                    <h1 class="text-4xl">Toshibajet</h1>
                    <p>
                        <span style="color: grey;">Case Study</span> <br>
                        Web application for Toshiba products, with new experience and simpler design to match the aesthetics.
                    </p>
                    <div class="mt-4">
                        <NuxtLink style="text-decoration: underline;" to="/projectdetails">See more</NuxtLink>
                    </div>
                </div>
                <div id="container">
                    <img src="../assets/images/wakemeup.png" class="box" alt="naim">
                </div>
                <div>
                    <h1 class="text-4xl">WakeMeUp!</h1>
                    <p>
                        <span style="color: grey;">Case Study</span> <br>
                        A horror game with challenging puzzles that require the player to think critically and creatively to progress through the game.
                    </p>
                    <div class="mt-4">
                        <NuxtLink style="text-decoration: underline;" to="/projectdetails">See more</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </body>
</template>

<script setup>
</script>

<style scoped>

    @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600&family=Roboto+Mono&display=swap');

    body {
        font-family: 'Roboto Mono', monospace;
        color: white;
        background-color: #212529;
    }
    .container  {
        min-width: 800px;
        margin: auto;
        max-width: 900px;
        margin-top: 100px;
    }

    .box {
        max-width: auto;
        border-radius: 25px;
    }

    #container img {
    display: block;
    transition: transform .4s;   /* smoother zoom */
    }

    #container:hover img {
    transform: scale(1.2);
    transform-origin: 50% 50%;
    }

    #container {
    overflow: hidden;
    border-radius: 25px;         /* clip the excess when child gets bigger than parent */
    }
    
</style>

