<template>
    <Head>
        <Title>Naim Kamil | Jom Dobi</Title>
    </Head>
    <div class="font text-center text-white" style="margin-top: 200px;">
        <div>
            <h1 class="text-7xl mb-14">
                Jom Dobi
            </h1>
            <div>Full mobile development • Developer • Research</div>
            <div class="my-7">
            <div class="p-3 text-black rounded-lg" style="background-color: aqua;display: inline-block;">This page is currently in working</div>
        </div>
        <video class="image"
        controls="controls">
        <source src="~/assets/images/videojomdobi.mp4"
            type="video/mp4">
        </video>
        
    </div>
        <div class="center">
            <h3 class="text-3xl">Mobile application that helps laundry users to do laundry more efficiently</h3>
            <div class="btn mt-7" style="display: inline-block;">Brief Explanation</div>
            <p class="mt-7 text-2xl" style="margin-left: 6em; margin-right: 6em;">
                Jom!Dobi is a mobile application that helps to make the <span>user's laundry experience easier and more efficient</span>. Jom!Dobi provides functions such as <span>location searching, QR code payment gateway, generating queue numbers, and checking available machines</span> at a selected location. Jom!Dobi is developed using microservices architecture whereby 
                the application consists of a suite of modules that have a database to store necessary information.    
            </p>
        </div>

    </div>
</template>

<script setup>

</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600&family=Roboto+Mono&display=swap');

.center {
  display: block;
  margin-left: 5em;
  margin-right: 5em;
  margin-top: 80px;
}

span {
    color: aqua;
}

.font {
    font-family: 'Roboto Mono', monospace;
}

.image {
    border-radius: 25px; 
    max-width:1000px;
    margin-top: 100px;
    margin-left: auto;
    margin-right: auto;
}

</style>