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

    const names = name.split(' ')
    
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


    let edu_sect, opera_sect, ora_exp_sect, conc_sect, job_sect, other_sect, vol_sect, awa_sect, rol_sect, ora_sect = false;

    let opera_exp = [
        {op: 'Deidama', ro: 'Fenice', lo: 'Manhattan School of Music 1995'},
        {op: 'Il Trovatore', ro: 'Conte di Luna', lo: 'New Jersey State Opera Concert Opera 2006'},
        {op: 'Rigoletto', ro: 'Rigoletto', lo: 'Minnesota Sieur Du Luth Summer Festival 2006'},
        {op: 'Tosca', ro: 'Scapia', lo: 'New York Performing Art Theatre 2013'},
        {op: 'La Boheme', ro: 'Marcello', lo: 'New York Performing Art Theatre 2014'},
        {op: 'Rigoletto', ro: 'Rigoletto', lo: 'Regina Opera May 2014'},
        {op: 'L’elisir D’amore', ro: 'Belcore', lo: 'New York Performing Art Theatre 2014'},
        {op: 'Il Tabarro', ro: 'Talpa', lo: 'Garden State Opera 2015'},
        {op: 'Un ballo in Maschera', ro: 'Renato', lo: 'New York Performing Art Theatre 2015'}
    ];
    let ora_exp = [
        {c: 'Mozart', w: 'Coronation Mass', l: 'Bass soloist Korean National Theater 1991' },
        {c: 'Hayden', w: 'Creation', l: 'Bass soloist Long island Church 1994'},
        {c: 'Handel', w: 'Messiah', l: 'Bass soloist NJ Philharmonic Orchestra Bergen PAC 2005'},
        {c: 'Handel', w: 'Messiah', l: 'Bass soloist Scarsdale New York 2015'}
    ];
    let conc_exp = [
        {n: "The 50th Korean Independent Memorial", l: "Connecticut 1995"},
        {n: "Bel Canto Singers Annual Concert", l: "Hyo Shin Presbyterian Church 2005"},
        {n: "Universal Artists Association Holiday Concert", l: "Newark New Jersey 2005"},
        {n: "The Multi-Cultural Music Festival", l: "Bergen Performing Art Center 2007"},
        {n: "New Jersey State Opera Gala Concert", l: "Livingston New Jersey 2008"},
        {n: "HanYang University Alumni Concert", l: "Carnegie Hall 2008"},
        {n: "Harvest Church Benefit Recital", l: "Ridgefield Park 2009"},
        {n: "New Jersey State Opera Holiday Concert", l: "Livingston New Jersey 2009"},
        {n: "Peniel Concert Choir Annual Concert", l: "Union Theological Seminary 2011"},
        {n: "Asian American Pacific Islands Heritage Celebration", l: "New Jersey State House 2013"},
        {n: "International Day of Person with Disabilities", l: "United Nations 2014"},
        {n: "Mozart Missa Brevis KV.217 & KV.194", l: "Scarsdale New York 2015"}
    ]
    let awa = [
        "Winner of Dong A Music Competition and Student Music Competition, South Korea",
        "Certificate of Special Congressional Recognition, by Congressman",
        "Resolution of NJ State Senate and General Assembly by Senator and Assembly",
        "Certificate of Appreciation, US Attorney’s Office, by US Attorney",
        "Certificate of Appreciation, FBI Newark Division, by Special Agent in Charge",
        "Certificate of Appreciation, US Labor Department, by Director",
        "Certificate of Appreciation, Federal Air Marshall Service, DHS, by ASAC",
        "Certificate of Appreciation, New Jersey Military and Veterans Affairs by Director"
    ]
    let rol = [
        {r: "Rigoletto", n: "Rigoletto"},
        {r: "Il Conte di Luna", n: "IL Trovatore"},
        {r: "Amonasro", n: "Aida"},
        {r: "Don Carlo", n: "Ernani"},
        {r: "Don Carlo", n: "La forza del destino"},
        {r: "Renato", n: "Un ballo in maschera"},
        {r: "Georgio Germont", n: "La Traviata"},
        {r: "Tonio", n: "I Pagliacci"},
        {r: "Silvio", n: "I Pagliacci"},
        {r: "Alfio", n: "Cavalleria Rusticana"},
        {r: "Carlo Gerard", n: "Andrea Chenier"},
        {r: "Scarpia", n: "Tosca"},
        {r: "Marcello", n: "La Boheme"}
    ]
    let ora = [
        "Handel Messiah",
        "Beethoven 9 Symphony",
        "Mozart’s Coronation Mass",
        "Haydn The Creation",
        "Mozart Missa Brevis KV.217 & KV.194"
    ]

    function change_edu() {
        edu_sect = !edu_sect;
    }
    function change_opera() {
        opera_sect = !opera_sect;
    }
    function change_ora_exp() {
        ora_exp_sect = !ora_exp_sect;
    }
    function change_conc() {
        conc_sect = !conc_sect;
    }
    function change_job() {
        job_sect = !job_sect;
    }
    function change_other() {
        other_sect = !other_sect;
    }
    function change_vol() {
        vol_sect = !vol_sect;
    }
    function change_awa() {
        awa_sect = !awa_sect;
    }
    function change_rol() {
        rol_sect = !rol_sect;
    }
    function change_ora() {
        ora_sect = !ora_sect;
    }


</script>


<!--<Header t_color="black" b_color="black" h_color="white" h_height="4rem" b_border="0.25rem solid rgb(0,0,0,0.25)"/>-->
<Header t_color= "transparent" b_color= "rgba(200,200,200, 0.8)" h_color= "white" h_height="0" the_name=""/>

<body>
    <div class="para-container" style="transform: translateY({translateY}px)">
        <div class="name-title">
            <h1 class="name-text nt1">Professional</h1>
            <h1 class="name-text nt2">Resume</h1>
        </div>
        <img src="{base}/images/Attachment-7.webp" alt="JungBae" class="wide-image img1">
        <div class="spacer one"></div>

    </div>
    <div class="image-standin"></div>
    <div class="container">
        <div class="about-person">
            <div style="padding: 4% 10%;"></div>
            <div class="education sect">
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <div class="title" on:click={change_edu}>
                    EDUCATION
                </div>
                <div class="info">
                    {#if edu_sect}
                        <p>
                        Han Yang University, Seoul,&nbsp;Korea, Voice&nbsp;Major (BM) <br>
                        Bachelor of Music, 1992
                        </p>
                        <hr>
                        <p>
                        Manhattan School of Music, Voice&nbsp;Major (MM) <br>
                        Master of Music, 1996
                        </p>
                    {/if}
                </div>
            </div>
            <div class="opera-exp sect">
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <div class="title" on:click={change_opera}>
                    OPERA EXPERIENCE
                </div>
                <div class="info">
                    {#if opera_sect}
                        {#each opera_exp as o, idx}
                            <div class="exp-block">
                                <section style="">
                                    <p class="opera-exp name">{o.op}</p>
                                    <p class="opera-exp role">{o.ro}</p>
                                    <p class="opera-exp local">{o.lo}</p>
                                </section>
                                {#if idx != opera_exp.length - 1}
                                    <hr>
                                {/if}
                            </div>
                        {/each}
                    {/if}
                </div>
            </div>
            <div class="oratorio-exp sect">
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <div class="title" on:click={change_ora_exp}>
                    ORATORIO EXPERIENCE
                </div>
                <div class="info">
                    {#if ora_exp_sect}
                        {#each ora_exp as oe, idx}
                        <div class="exp-block">
                            <section style="">
                                <p class="name">{oe.c}</p>
                                <p class="role">{oe.w}</p>
                                <p class="local">{oe.l}</p>
                            </section>
                            {#if idx != ora_exp.length - 1}
                                <hr>
                            {/if}
                        </div>
                        {/each}
                    {/if}
                </div>
            </div>
            <div class="concert-exp sect">
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <div class="title" on:click={change_conc}>
                    CONCERT EXPERIENCE
                </div>
                <div class="info">
                    {#if conc_sect}
                        {#each conc_exp as c, idx}
                        <div class="exp-block">
                            <section style="">
                                <p class="name">{c.n}</p>
                                <p class="local">{c.l}</p>
                            </section>
                            {#if idx != conc_exp.length - 1}
                                <hr>
                            {/if}
                        </div>
                        {/each}
                    {/if}
                </div>
            </div>
            <div class="job-exp sect">
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <div class="title" on:click={change_job}>
                    JOB EXPERIENCE
                </div>
                <div class="info">
                    {#if job_sect}
                        <p>
                            The Korean Grace Presbyterian Church, Fort Lee, Music Director, 1994~Current 
                        </p>
                    {/if}
                </div>
            </div>
            <div class="other sect">
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <div class="title" on:click={change_other}>
                    OTHER EXPERIENCE
                </div>
                <div class="info">
                    {#if other_sect}
                        <p>
                            Garden State Opera, Inc, Director (501C3 Non-Profit Organization, Congressional Recognized at 
                            House Representatives at U.S. House, October 6, 2011 in Washington D.C.)
                        </p>
                    {/if}
                </div>
            </div>
            <div class="volunteer sect">
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <div class="title" on:click={change_vol}>
                    VOLUNTEER
                </div>
                <div class="info">
                    {#if vol_sect}
                        <p>
                            Organizing Event FBI Newark and New York Division, TSA, Federal Air Marshall Service, 
                            CBP in Newark Chapter, US Attorney’s office, County of Bergen, Veterans Memorial Home, 
                            Bergen County Police Chief’s Association for Asian American Heritage Celebration, Woman’s 
                            History Month, Holiday Concert, Etc   
                        </p>
                    {/if}
                </div>
            </div>
            <div class="awards sect">
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <div class="title" on:click={change_awa}>
                    AWARDS
                </div>
                <div class="info">
                    {#if awa_sect}
                        {#each awa as a, idx}
                            <p>{a}</p>
                            {#if idx != awa.length - 1}
                                <hr>
                            {/if}
                        {/each}
                    {/if}
                </div>
            </div>
            <div class="operatic sect">
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <div class="title" on:click={change_rol}>
                    OPERATIC ROLES
                </div>
                <div class="info">
                    {#if rol_sect}
                        {#each rol as r, idx}
                            <p class="name">{r.n}</p>
                            <p class="role">{r.r}</p>
                            {#if idx != rol.length - 1}
                                <hr>
                            {/if}
                        {/each}
        
        
                    {/if}
                </div>
            </div>
            <div class="oratorio sect">
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <div class="title" on:click={change_ora}>
                    ORATORIO
                </div>
                <div class="info">
                    {#if ora_sect}
                        {#each ora as or, idx}
                            <p>{or}</p>
                            {#if idx != ora.length - 1}
                                <hr>
                            {/if}
                        {/each}
        
        
                    {/if}
                </div>
            </div>


            <hr class="custom-line">
            <div class="goto-container">
                <a href="{base}/" class="butt contact">Home</a>
                <a href="{base}/lessons" class="butt lessons">Lessons</a>
            </div>

        </div>

    </div>


</body>


<style>
    body {
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        margin:0;
        padding: 0;
    }
    .sect {
        justify-content: center;
        align-items: center;
        text-align: center;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        border: 0.1rem solid black;
        border-top: none;
        margin-bottom: 1rem;
        width: 100%;
        margin-bottom: 1rem;
        font-family: 'Open Sans', sans-serif;
        font-size: 2.5vw;
    
    }
    .title {
        width: 100%;
        border: 0.1rem solid black;
        font-size: 3vw;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }
    .title:hover {
        background-color: gray;
    }
    .exp-block {
        text-align: left;
        
    }
    .name, .role, .local {
        padding-left: 0.5rem;

    }
    .name {
        border-left: 1rem solid #7A4341;
    }
    .role {
        border-left: 1rem solid #354c7c ;
    } 
    
    .local {
        border-left: 1rem solid black;      
    }
    p {
        margin-left: 1rem;
        margin-right: 1rem;
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
        font-size: 6.9vw;
        word-break: break-word;
        margin: 0;
        text-align: left;
        margin-left: 5vw;
        margin-top: 4%;
        margin-bottom: 0;
        font-family: 'Marck Script', sans-serif;
        font-weight: 700;
        color: black;
        text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5);
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
        justify-content: center;
        align-items: center;
        width: 100vw;
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
        will-change: transform;
        z-index: 1000;
        font-size: 4vw;
        font-weight: 300;
        background: rgba(160, 160, 160, 0.8); /* Translucent overlay */
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
        padding-top: 40%;
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