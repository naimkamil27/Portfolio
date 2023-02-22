<template>
    <div>
        <header class="shadow-lg fixed w-full" style="background-color: #242423;">
            <nav class="container mx-auto p-6 flex justify-between items-center">
                <NuxtLink to="/" class="title" style="color: #fff;">Naim Kamil</NuxtLink>
                <ul class="flex gap-7" style="color: #d3d3d3;">
                    <li><NuxtLink to="/projectlist">Work</NuxtLink></li>
                    <li><NuxtLink to="/about">About</NuxtLink></li>
                    <li><a target="_blank" href="https://drive.google.com/file/d/1Hrr9p7mu5_qQMgCLVQYSukkeZqf1ae9n/view?usp=share_link" class="btn">Resume</a></li>
                </ul>
            </nav>
        </header>
        <div>
            <slot/>
        </div>
        <footer class="text-center" style="color: #595959; padding-top: 100px; padding-bottom: 100px; background-color: #212529;">
            <div style="margin-top: 50px;">
                <h1>Copyright © 2023 NaimKamil. made with <i class='bx bxs-heart'></i> by naimkamil :).</h1>
            </div>
        </footer>
    </div>
</template>
<style scoped>
.router-link-exact-active{
    color: aqua;
}

.title {
    font-family: 'Caveat', cursive;
    font-size: 1.5rem;
}

.container {
    padding-left: 120px;
    padding-right: 120px;
}
</style>