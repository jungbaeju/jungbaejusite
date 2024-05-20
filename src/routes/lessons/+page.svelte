<script>
    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';
    import Header from '$lib/Header.svelte';
    import { name } from "$lib/data"
    import VideoCarousel from '$lib/VideoCarousel.svelte';
    import { throttle } from 'lodash-es'; // Lodash throttle function
    import { base } from '$app/paths';

    const videoContent = [
        { 
            id: 'qbTMzO53Lv0', 
            startTime: 37, 
            text: '바울의 기도 / La preghiera di Paolo' 
        },
        { 
            id: 'YofKr5W-njU', 
            startTime: 12, 
            text: 'Alzati! La tuo figlio - Un ballo in maschera(G. Verdi)' 
        },
        { 
            id: 'V74sdhQeVOY', 
            startTime: 16, 
            text: 'Cortigiani, vil razza dannata - Rigoletto(G. Verdi)' 
        },
        // ... more videos
    ];

    let translateY = 0;

    onMount(() => {
    const handleScroll = throttle(() => {
        const scrolled = window.scrollY;
        translateY = scrolled * -0.22; // Adjust the multiplier for speed
    }, 10); // Throttle the scroll event handler

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
});
</script>


<Header t_color= "transparent" b_color= "rgba(7,7,7)" h_color= "white" h_height="0" the_name=""/>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;700&family=Merriweather:wght@700&display=swap" rel="stylesheet">
<!-- Content for the homepage -->
<body>
    <div class="para-container" style="transform: translateY({translateY}px)">
        <div class="name-title">
            <h1 class="name-text nt1">Lessons</h1>
        </div>
        <div class="location-block">
            <p> Currently accepting: <br>$50 for 40 Minutes </p>
            <p style="font-size: 3vw;">
                ☏ (201) 803-5459<br>✉ orsonju@gmail.com
            </p>
        </div>
        <img src="{base}/images/singing-solo.webp" alt="JungBae" class="wide-image img1">
        <div class="spacer one"></div>

    </div>
    <div class="image-standin"></div>
    <div class="container">
        <div class="about-person">
            
            <p>     JungBae Ju currently accepts any students learning to use their voice, from beginners to seasoned musicians. He utilizes techniques learned from his Masters at Manhatten School of Music, as well as from his mentors Edith Bers, Armen Boyajin, and Mario Bertolino. 
                He has been singing opera for over 35 years and uses his experence in voice to guide students into oratory excellence. Please reach out by phone or email (preferred for new students) describing your goals and Mr. Ju will get back to you as soon as he is able.
            </p>
            <img src="{base}/images/Attachment-3.webp" alt="JungBae2" class="wide-image img2">
            <div class="imageblock"></div>
            <p> Pictured above is young JungBae Ju with his mentor. It is a reminder of how far he has come in practicing voice. Below are some samples of his singing, feel free to scroll through the videos to get a taste of how JungBae Ju sings.
            </p>
            <div class="caro-contain">
                <VideoCarousel {videoContent}/>
            </div>
            <hr class="custom-line">
            <div class="goto-container">
                <a href="{base}/" class="butt contact">Home</a>
                <a href="{base}/resume" class="butt lessons">Resume</a>
            </div>

        </div>

    </div>
</body>

<style>
    body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        background-color: white;

    } 
    .email {
        margin-top: 0;
    }
    .phone {
        margin-bottom: 0;
    }
    .icon {
        @media (max-width: 400px) {
            font-size: 3vw;
        }
    }
    .top {
        position: flex;
        font-family: 'Open Sans', sans-serif;
        font-weight: 300;
        justify-content: center;
        align-items: center;
        text-align: left;
        font-size: 2.5vw;
    }
    .con-con {
        color: white;
        margin: 1rem;
        width: 100%;
        /* Even larger screens */
        @media (min-width: 1000px) {
            width: 70%;
        } 
    }
    .container {
        width: 100vw;
        height: 100vh;
        position: relative;
        margin: 0;
        padding: 0;
        background-color: transparent;
        justify-content: center;
        align-items: center;

    }
    .wide-image {
        width: 100%;
        height: auto;
        z-index: 901;
    }
    .para-container {
        position: fixed;
        will-change: transform;
        top:0;
        left: 0;
        width: 100%;
        z-index: 0;
        margin: 0;
        padding: 0;
    }
    .para-container img {
        will-change: transform;
        margin: 0;
        padding: 0;
        border: 0;
        background-color: red;
        display: block;


    }
    .para-container::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 50%; /* Adjust the height of the fade effect */
        background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,1) 100%);
    }
    .img2 {
        border: 0.5vw solid rgba(255, 255, 255, 0.25);
        will-change: transform;
    }
    .name-title {
        position: absolute;
        z-index: 1001;
        font-size: 4.5vw;
        word-break: break-word;
        margin: 0;
        text-align: right;
        margin-left: 5vw;
        margin-top: 4%;
        margin-bottom: 0;
        font-family: 'Open Sans', sans-serif;
        font-weight: 700;
        color: white;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
        overflow: visible;
    }
    .quote-block {
        position: absolute;
        z-index: 1001;
        margin: 0;
        bottom: 0;
        width: 40%;
        text-align: left;
        padding-left: 5vw;
        padding-right: 0;
        padding-bottom: 60%;
        padding-top: 0;
        margin-top: 0;
        margin-block-end: 0;
        font-family: 'Open Sans',  sans-serif;
        font-weight: lighter;
        color: rgb(255, 255, 255);
        text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);
        @media screen and (max-height: 412px) and (orientation:landscape) {
            padding-bottom: 21%;
        }
    }
    .p1 {
        margin-block-end: 0;
        margin-bottom: 2vw;
        margin-top: 1vw;
        font-size: 4.5vw;
        font-weight: 300;
        line-height: 125%;
        @media screen and (max-height: 414px) and (orientation:landscape) {
            margin-bottom: 2%;
        }

    }
    .p2 {
        font-size: 3vw;
        padding-top: 0;
        text-align: right;
        line-height: 1vw;
        margin-block-start: 0;
        margin-right: 5vw;
        margin-bottom: 2vw;
        font-weight: 300;
        @media screen and (orientation:landscape) {
            font-size: 2.5vw;
        }
    }
    .location-block {
        position: absolute;
        z-index: 899;
        font-size: 4vw;
        top: 0%;
        left: 5%;
        width: 40%;
        height:40%;
        text-align: left;
        padding-left: 1vw;
        padding-top: 15%;
        margin-top: 0;
        margin-block-end: 0;
        font-family: 'Open Sans', sans-serif;
        text-decoration: none;
        font-weight: 300;
        color: white;
        margin-block-end: 0;
        background-color: rgba(7, 7, 7, 0.5);
    }
    .name-text {
        margin-bottom: 0;
        line-height: 2vw;
    }

    .about-person{
        position: relative;
        width: 100vw;
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
        will-change: transform;
        z-index: 1000;
        font-size: 4vw;
        font-weight: 300;
        background: rgba(160, 160, 160, 0.7); /* Translucent overlay */
        backdrop-filter: blur(1rem); /* Blur effect */
        padding: 1vw 10%; /* Default padding */
        /* Larger screens */
        @media (min-width: 600px) {
            padding: 1rem 15%;
            font-size: 3vw;
        }

        /* Even larger screens */
        @media (min-width: 1000px) {
            padding: 1rem 20%;
            font-size: 2vw;
        }
        padding-bottom: 10%;
        margin-top: 0;
        margin-bottom: 0;
    }
    .about-person p {
        text-indent: 3vw;
        padding-top: 3vw;
        padding-bottom: 4vw;
        padding-left: 2%;
        padding-right: 2%;
        justify-content: center;
    }
    .image-standin {
        width: 100%;
        padding-top: 50%;
        background: transparent;
        border: 0;
        padding-bottom: 0;
        margin: 0;
    }
    .goto-container {
        justify-content: center;
        align-items: center;
        text-align: center;
        display: flex;
        flex-direction: row;
    }
    .butt {
        margin: 2vw;
        width: 40%;
        height: 3em;
        background-color: transparent;
        border: 0.1rem solid black;
        font-size: 3vw;
        font-family: 'Open Sans', sans-serif;
        font-weight: 300;
        text-decoration: none;
        color: black;
        text-align: center;
        justify-content: center;
        align-items: center;
        line-height: 3em;
    }
    .butt:hover {
        background-color: rgba(255, 255, 255, 0.5);
        color: black;
        border: 0.1rem solid black;
    }
    .custom-line {
        margin: 5vw;
        margin-left: 0;
        margin-right: 0;
        height: 0.1rem;
        background-color: black;
        border: none;
    }
</style>