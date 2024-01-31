<script>
    export let main_color = '#7A4341';
    export let submitted=false;
    function handleSubmit() {
        // Form submission logic here
        submitted = true;
    }
</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&family=Merriweather:wght@700&family=Montserrat:wght@700&family=Satisfy:wght@400&family=Sacramento:wght@400&family=Marck+Script:wght@400&family=Roboto:wght@400;700&family=Roboto+Slab:wght@700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />

<iframe title="iframe" name="hidden_iframe" id="hidden_iframe" style="display:none;" ></iframe>

<form class="form" action="https://docs.google.com/forms/d/e/1FAIpQLScauz_zgt1C-GVn5eVGpOZ4renPNSr7yZD8D-zzyLOMA3EG3A/formResponse" autocomplete="off" method="post" target="hidden_iframe" on:submit|preventDefault={handleSubmit}>
    <div class="form-header" style="background-color: {main_color};">Contact Form</div>
    {#if submitted}
        <div class="look-out" style="text-align: center; background-color: {main_color};">
            <p>Thank you for your inquiry.<br> Look out for an email in your inbox from jungbaecontactforms@gmail.com.<br>This confirms the form information has been collected.</p>
        </div>
    {/if}
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <div class="email-question" style="background-color: {main_color};">
        <h1 class="email-title">Email:</h1>
        <input name="entry.1127806675" type="text" class="field short_answer" required/>
    </div>
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <div class="explanation_question" style="background-color: {main_color};">
        <h1 class="describe-title" >Please describe what you are looking for...</h1>
        <textarea name="entry.1159389917" type="text" class="field long_answer" rows="7" required/>
    </div>
    <div class="send-contain">
        <input class="send-button" type="submit" value="Send" />
    </div>
</form>

<style>
    .form-header {
        height: 4rem;
        width: 100%;
        color: white;
        text-align: center;
        align-items: center;
        justify-content: center;
        line-height: 4rem;
        margin-bottom: 1rem;
        @media (max-width: 400px) {
            font-size: 10vw;
        }
    }
    .form{
        font-family: 'Open Sans', sans-serif;
        width: 95%;
        font-size: 2rem;
        align-items: center;
        display: flex;
        flex-direction: column;
        border: 0.1rem solid black;
        background-color: rgba(255,255,255,1);
        position: relative;
        border-radius: 1rem;
        overflow: hidden;
        @media (min-width: 600px) {
            width: 80%;
        }
        /* Even larger screens */
        @media (min-width: 1000px) {
            width: 70%;
        }
        @media (max-width: 400px) {
            font-size: 7vw;
        }
        margin-top: 0;
    }
    .field {
        font-family: 'Open Sans', sans-serif;
        font-size: 1rem;
        text-indent: 0.25rem;
        padding: 0.25rem;
        line-height: 1.5rem;
        background-color: white;
        border: 0.05rem solid black;
        display: block;
        @media (max-width: 400px) {
            font-size: 4vw;
        }

    }
    h1 {
        font-weight: 400;
        font-size: 85%;
        margin-bottom: 0;
        margin-right: 0;
        padding: 0;
        margin-top: 0;
        background-color: transparent;
        padding-bottom: 0.25rem;
    }
    .email-title {
        width: 100%;
        margin: 0;
        padding-top: 0;
        color: white;
    }
    .email-question {
        width: 90%;
        box-sizing: border-box;
        margin: 0;
        border: 0.05rem solid white;
        gap: 0;
        margin-left: 1rem;
        margin-right: 1rem;
        border-radius: 1rem;
        padding: 1rem;
        padding-top: 0.5rem;
        padding-bottom: 1rem;
        margin-bottom: 1rem;

    }
    .short_answer {
        width: calc(100% - 0.5rem);
        border:none;
    }
    .long_answer{
        width: 100%;
        box-sizing: border-box;
        height: fit-content;
        resize: vertical;
        

    }
    .explanation_question, .look-out {
        width: 90%;
        box-sizing: border-box;
        height: fit-content;
        resize: none;
        padding: 1rem;
        padding-top: 0;
        padding-bottom: 1rem;
        margin-left: 1rem;
        margin-right: 1rem;
        border-radius: 1rem;
        padding: 1rem;
        padding-top: 0.5rem;
        padding-bottom: 1rem;
        margin-bottom: 1.5rem;
        color: white;
        font-family: 'Open Sans', sans-serif;
    }
    .send-contain {
        width: 100%;
        box-sizing: border-box;
        padding: 0;
        padding-right: 1.5rem;
        padding-left: 1.5rem;
        justify-content: center;
        align-items: center;
        display: flex;
        padding: 0;
        margin: 0;
        margin-bottom: 1.5rem;
    }
    .send-button {
        width: 50%;
        margin: 0;
        background-color: transparent;
        border: 0.05rem solid black;
        height: 3rem;
        font-size: 1.5rem;
        font-family: 'Open Sans', sans-serif;
        border-radius: 1rem;
        @media (max-width: 300px) {
            font-size: 10vw;
        }

    }
    .send-button:hover {
        background-color: lightgray;
    }
    input {
        margin: 0;
        padding: 0;
    }
    p {
        margin: 0.5rem;
        font-size: 65%;
    }
</style>