<script>
    import Header from "../../lib/Header.svelte";

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


<Header t_color="black" b_color="black" h_color="white" h_height="4rem" b_border="0.25rem solid rgb(0,0,0,0.25)"/>


<body>
    <div style="height:5rem;"></div>

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
        width: 95%;
        margin-bottom: 1rem;
        font-family: 'Open Sans', sans-serif;
        @media (min-width: 600px) {
            width: 80%;
        }
        /* Even larger screens */
        @media (min-width: 1000px) {
            width: 70%;
        }
        @media (max-width: px) {
            width: 80%;
        }
    }
    .title {
        width: 100%;
        border: 0.1rem solid black;
        font-size: 1.5rem;
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

</style>