<script>
    import EmbedForm from "$lib/EmbedForm.svelte";
    import Header from "$lib/Header.svelte";
    let page_color = '#354c7c';
</script>


<Header t_color="black" b_color="black" h_color="white" h_height="4rem" b_border="0.25rem solid rgb(0,0,0,0.25)"/>

<div class="page-contain">
    <div class="header-spacer"></div>
    <div class="page top">
        <div class="top con-dir contain-dir" style="background-color: {page_color};">
            <h1 class="top con-dir bigger">Lessons: $50 per 40min</h1>
        </div>
    
        <div class="can-can" style="background-color: {page_color};">
            <p class="smaller">
                If you would like lessons please contact directly and a response will be sent as soon as available.
            </p>
        </div>
        <div class="can-can" style="background-color: {page_color};">
            <h1 class="top icon phone">
                <span class=" icon material-symbols-outlined">phone</span>
                201-803-5459
            </h1>
            <h1 class="top icon email">
                <span class=" icon material-symbols-outlined">mail</span>
                orsonju@gmail.com
            </h1>
        </div>

    </div>
    <!--<EmbedForm main_color = {page_color}/>-->
</div>


<style>
    .material-symbols-outlined {
        font-variation-settings:
            'FILL' 0,
            'wght' 400,
            'GRAD' 0,
            'opsz' 24;
    }
    .page-contain {
        background-color: white;
        height: 100%;
        width: 100%;
        padding: 0;
        margin: 0;
        align-items: center;
        justify-content: center;
        display: flex;
        flex-direction: column;
        left: 0;
        right: 0;

    }
    .header-spacer {
        height: 5rem;
        width: 100%;
    }
    .page {
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    .con-dir {
        color: white;
        background-color: #559651;
        font-size: 2rem;
        margin: 0;
        padding: 1rem;
        border-radius: 1rem;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin-bottom: 1rem;

    }
    .top {
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .smaller {
        background-color: transparent;
        font-size: 1.5rem;
        padding-left: 1rem;
        padding-right: 1rem;
        box-sizing: border-box;
        width: 100%;
        @media (max-width: 400px) {
            font-size: 5vw;
        }

    }
    .bigger {
        background-color: transparent;
        font-size: 2rem;
        width: 100%;
        padding-bottom: 0;
        padding-top: 0;
        margin: 0;
        @media (max-width: 400px) {
            font-size: 10vw;
        }
    }
    .contain-dir {
        justify-content: center;
        align-items: center;
        text-align: center;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        border: 0.1rem solid black;
        width: 95%;
        @media (min-width: 600px) {
            width: 80%;
        }
        /* Even larger screens */
        @media (min-width: 1000px) {
            width: 70%;
        }
    }
    .email {
        margin-top: 0;
    }
    .phone {
        margin-bottom: 0;
    }
    .icon {
        @media (max-width: 400px) {
            font-size: 5vw;
        }
    }
    .can-can {
        border: 0.1rem solid black;
        color: white;
        border-radius: 1rem;
        margin: 1rem;
        margin-top: 0;
        width: 95%;
        @media (min-width: 600px) {
            width: 80%;
        }
        /* Even larger screens */
        @media (min-width: 1000px) {
            width: 70%;
        } 
    }


</style>