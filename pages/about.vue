<template>
    <Head>
        <Title>Naim Kamil | About</Title>
    </Head>
    <div class="container">
        <div class="grid grid-cols-2">
            <img class="text-end" src="~/assets/images/about.jpeg" alt="" style="border-radius: 25px">
            <div class="text-start about" style="margin-left: 50px;">I am Naim Kamil, future Software Engineering graduates. Throughout my studies, I have developed a strong passion for coding and software development, which I believe will be instrumental in my career as a software engineer.
            <br><br> During my studies, I was involved in several software development projects that allowed me to apply my knowledge and skills in a practical setting. This helped me gain experience in designing, testing, and debugging software, as well as collaborating with other developers to bring projects to completion.
            <br><br> In my free time, I do graphic and UI/UX design as I have passion for it. I believe this will help me to improve my skills in designing and do codes. </div>
        </div>
    </div>
    <div class="container">
        <div class="grid grid-cols-3 gap-6">
            <div>
                <div>
                    <h3 class="mb-5">
                        Skill & Interests
                    </h3>
                    <span>
                        Technical skills :
                        <p>
                            Bootstrap, Vue, Nuxt, Html, Css, Javascript, Adobe Illustrator, Adobe Animate, Figma, Adobe XD, Adobe Premier Pro, Android Studio
                        </p>
                        <br>
                        Hobbies : 
                        <p>
                            Badminton, music, football, events, F1, designing.
                        </p> 
                    </span> 
                </div>
                <div class="mt-5">
                    <h3 class="mb-5">
                        Contact
                    </h3>
                    <span>
                        Email :
                    </span>
                    <p>nakikami27@gmail.com</p>
                    <div class="mt-5">
                        <span>
                            Contact :
                        </span>
                        <p>+6018 - 2084225</p>
                    </div>
                </div>
            </div>
            <div>
                <h3>
                    Education
                </h3>
                <div class="mt-5">
                    <span>
                        Universiti Kebangsaan Malaysia
                    </span>
                    <p>
                        2019 - 2023 • Bachelor in Software Engineering (Multimedia) <br>
                        CGPA - 3.75 <br>
                        Interactive Multimedia Club (IMeC, UKM) President <br>
                        Kolej Ungku Omar's Multimedia Exco
                    </p>
                    <div class="mt-5">
                        <span>
                            Universiti Teknologi Mara
                        </span>
                        <p>
                            2018 - 2019 • Foundation in Engineering <br>
                            MUET - Band 4
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <h3>
                    Experience
                </h3>
                <div class="mt-5">
                    <span>Dwebly • 2022 - 2023</span>
                    <p>
                        Front End Developer • Intern • All-in-one Headless e-Commerce platform
                    </p>
                    <div class="mt-5">
                        <span>Freelance • 2021</span>
                        <p>
                            Animator • Promotional Video for Pusat Sains Citra
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div style="display: block;" class="container">
        <div>
            <h3>Extra!! Extra!!</h3>
        </div>
        <div class="grid grid-cols-4 gap-9 mt-5">
            <div>
                <img src="~/assets/images/ferrari.gif" class="rounded-lg" alt="">
                <div class="mt-5">
                    <p>
                        My passion for <span style="color: aqua;">Formula 1</span>  is a thrilling and immersive experience that brings me endless joy and excitement.
                    </p>
                </div>
            </div>
            <div>
                <img src="~/assets/images/psyduck.gif" class="rounded-lg" alt="">
                <div class="mt-5">
                    <p>
                        I love playing pokemon Go, and my favourite pokemon is <span style="color: aqua;">Psyduck</span>.
                    </p>
                </div>
            </div>
            <div>
                <img src="~/assets/images/energatic.gif" class="rounded-lg" alt="">
                <div class="mt-5">
                    <p>
                        People would describe me as <span style="color: aqua;">energetic</span> and <span style="color: aqua;">bright</span>. I would lighten up the mood and keep the team happy.
                    </p>
                </div>
        </div>
            <div>
                <img src="~/assets/images/popcorn.gif" class="rounded-lg" alt="">
                <div class="mt-5">
                    <p>
                        I like <span style="color: aqua;">popcorn</span>.
                    </p>
                </div>
        </div>
        </div>
    </div>
    
</template>

<script>
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@300&family=Karla&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600&family=Roboto+Mono&display=swap');
.about {
    color: white;
    font-size: 1.2rem;
    font-family: 'Inconsolata', serif;
}
.container  {
    display: flex;
    justify-content: center;
    min-width: 900px;
    margin: auto;
    max-width: 900px;
    margin-top: 100px;
}

span {
    color: #595959;
}

h3 {
    font-weight: bold;
    color: aqua;
    font-size: 1.4rem;
    font-family: 'Roboto Mono', monospace;
}

p {
    color: #ced4da;
    font-family: 'Inconsolata', serif;
}

.title {
    
}
</style>