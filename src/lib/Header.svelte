<script>
    import { slide } from "svelte/transition";
    import { quintOut } from "svelte/easing";
    import { name } from "$lib/data.js"
    import { base } from '$app/paths';
    export let h_color = 'transparent';
    export let t_color = 'red';
    export let b_color = 'white'
    export let h_height = '5rem';
    export let b_border = '0;'

    let menuOpen = false;

    function toggleMenu() {
        menuOpen = !menuOpen;
    }
</script>


<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Cormorant+Garamond:wght@700&family=Lato:ital,wght@0,400;1,900&display=swap" rel="stylesheet">

<div class="header-container" style="background-color: {h_color}; height: {h_height}; border-bottom: {b_border};"></div>

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="name-top" style="color: {t_color}"><a class="name-top" style="color: {t_color}" href="{base}/">{name}</a></div>
    <button class={menuOpen ? 'ham-icon diff':"ham-icon"} on:click={toggleMenu} style="border-color: {b_color};">
        <div class={menuOpen ? 'bar1 change' : 'bar1'} style="background-color: {b_color};"></div>
        <div class={menuOpen ? 'bar2 change' : 'bar2'} style="background-color: {b_color};"></div>
        <div class={menuOpen ? 'bar3 change' : 'bar3'} style="background-color: {b_color};"></div>
    </button>

    {#if menuOpen}
        <div class="overlay">
            <ul class="menu" style="background-color: transparent;">
                <li><a href="{base}/">Home</a></li>
                <li><a href="{base}/lessons">Lessons</a></li>
                <li><a href="{base}/resume">Resume</a></li>
            </ul>
        </div>
    {/if}
<style>
    .header-container {
        position: fixed;
        width: 100vw;
        background-color: transparent;
        z-index: 899;
        left: 0;
        top: 0;


    }
    .ham-icon {
        position: fixed;
        background-color: transparent;
        overflow: hidden;
        border: 0.25rem solid white;
        top: 0.5rem;
        right: 0.5rem;
        display: flex;
        flex-direction: column;
        z-index: 2000;
        transition: 0.5s;
        height: 3rem;
        width: 3rem;
        justify-content: center;
        align-items: center;

    }

    .name-top {
        position: fixed;
        top: 1rem;
        left: 1rem;
        margin-left: 0.1rem;
        font-size: 2rem;
        font-family: 'Marck Script', sans-serif;
        font-weight: 900;
        z-index: 900;
        text-align: center;
        margin-top: -0.25rem;
        @media (max-width: 290px) {
            font-size: 10vw;
            margin-top: 1vw;


        }
    }

    .diff.ham-icon {
        border-radius: 50%;
        transform: rotate(180deg);
    }

    .bar1, .bar2, .bar3 {
        width: 1.75rem; /* Bar width */
        height: 0.3rem; /* Bar height */
        border-radius: 0.25rem;
        background-color: #333; /* Bar color */
        margin: 0.2rem 0; /* Space between bars */
        transition: 0.3s;
        padding: 0;
        margin-left: 0;
        left: 0;
    }

    /* Transformations for X */
    .change.bar1 {
        transform: rotate(45deg) translate(0.5rem, 0.5rem);
    }

    .change.bar2 {
        width: .25rem;
    }

    .change.bar3 {
        transform: rotate(-45deg) translate(0.5rem, -0.5rem);
    }

    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.5); /* Translucent overlay */
        backdrop-filter: blur(1rem); /* Blur effect */
        z-index: 1999; /* Ensure it's below the menu icon */
        display: flex;
        justify-content: center;
        align-items: center;
        transition-duration: 0.3s;
    }
    .menu {
        list-style: none;
        text-align: center;
        align-items: center;
        justify-content: center;
        background-color: transparent;
    }
    a {
        background-color: transparent;
        text-align: center;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        font-family: 'Open Sans', sans-serif;
        font-weight: 300;
        color: black;
        text-decoration: none;
        font-size: 4rem;
        @media (max-width: 279px){
            font-size: 15vw;
        }
        @media (max-height: 390px) {
            font-size: 15vh;
        }
        
    }
    li {
        margin: 2vh 0;
        background-color: transparent;

    }
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        background-color: transparent;
    }
</style>