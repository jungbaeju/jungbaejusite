<!--

<script>
    const videos = [
        { id: 'YofKr5W-njU', startTime: 0 },  // Start at 1 minute (60 seconds)
        { id: 'V74sdhQeVOY', startTime: 0 },
        { id: 'qbTMzO53Lv0', startTime: 37 }// Start at 2 minutes (120 seconds)
        // ... more videos
    ];
</script>

<section class="video-gallery">
    {#each videos as video}
        <div class="video-container">
            <iframe
                title="Singing Videos"
                src={`https://www.youtube.com/embed/${video.id}?start=${video.startTime}`}
                frameborder="0"
                allowfullscreen>
            </iframe>
        </div>
    {/each}
</section>

<style>
    .video-gallery {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
        gap: 1rem;
        padding: 1rem;
    }
    .video-container {
        position: relative;
        padding-top: 56.25%; /* 16:9 Aspect Ratio */
        height: 0;
    }
    .video-container iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
</style>



<script>
    const videoContent = [
        { 
            id: 'YofKr5W-njU', 
            startTime: 20, 
            text: 'Description or details about Video 1.' 
        },
        { 
            id: 'V74sdhQeVOY', 
            startTime: 12, 
            text: 'Description or details about Video 2.' 
        },
        { 
            id: 'qbTMzO53Lv0', 
            startTime: 37, 
            text: 'Description or details about Video 3.' 
        },
        // ... more videos
    ];
</script>

<section class="video-gallery">
    {#each videoContent as video, index}
        <div class="video-row {index % 2 === 0 ? 'even' : 'odd'}">
            {#if index % 2 === 0}
                <div class="video-container">
                    
                    <iframe
                        title="Video"
                        src={`https://www.youtube.com/embed/${video.id}?start=${video.startTime}`}
                        frameborder="0"
                        allowfullscreen>
                    </iframe>
                </div>
            {/if}

            <div class="video-text">
                {video.text}
            </div>

            {#if index % 2 !== 0}
                <div class="video-container">
                    
                    <iframe
                        title="Video"
                        src={`https://www.youtube.com/embed/${video.id}?start=${video.startTime}`}
                        frameborder="0"
                        allowfullscreen>
                    </iframe>
                </div>
            {/if}
        </div>
    {/each}
</section>

<style>
    .video-gallery {
        /* Styles for the gallery */
    }
    .video-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px; /* Spacing between rows */
    }
    .video-row.even {
        flex-direction: row;
    }
    .video-row.odd {
        flex-direction: row-reverse;
    }
    .video-container {
        flex-basis: 45%;
        position: relative;
        padding-top: 56.25%; /* 16:9 Aspect Ratio */
    }
    .video-container iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .video-text {
        flex-basis: 45%;
        /* Styles for the text */
    }
</style>

-->


<script>
    import Header from "$lib/Header.svelte";
    const videoContent = [
        { 
            id: 'qbTMzO53Lv0', 
            startTime: 37, 
            text: 'Description or details about Video 1.' 
        },
        { 
            id: 'YofKr5W-njU', 
            startTime: 12, 
            text: 'Description or details about Video 2.' 
        },
        { 
            id: 'V74sdhQeVOY', 
            startTime: 16, 
            text: 'Description or details about Video 3.' 
        },
        // ... more videos
    ];
</script>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;700&family=Lato:wght@400;700&display=swap" rel="stylesheet">

<Header t_color="black" b_color="black" h_color="white" h_height="5rem"/>
<div class="container">
<div class="spacer" style="height: 5vmin;"></div>
<div class="videos-title">
    <hr class="custom-line">
    <h>Experience</h>
    <hr class="custom-line">
</div>

<section class="video-gallery">
    {#each videoContent as video, index}
        <div class="video-row {index % 2 === 0 ? 'video-left' : 'video-right'}">
            {#if index % 2 === 0}
                <div class="video-container">
                    <!-- Video Embed -->
                    <iframe
                        title="Video"
                        src={`https://www.youtube.com/embed/${video.id}?start=${video.startTime}`}
                        frameborder="0"
                        allowfullscreen>
                    </iframe>
                </div>
            {/if}

            <div class="video-text">
                {video.text}
            </div>

            {#if index % 2 !== 0}
                <div class="video-container">
                    <!-- Video Embed -->
                    <iframe
                        title="Video"
                        src={`https://www.youtube.com/embed/${video.id}?start=${video.startTime}`}
                        frameborder="0"
                        allowfullscreen>
                    </iframe>
                </div>
            {/if}
        </div>
    {/each}
</section>
</div>

<style>
    .container {
        position: absolute;
        border:0;
        margin: 0;
        padding: 0;
        left: 0;
        right: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        background-color: #282828;
    }
    .custom-line {
        height: 0.25rem;
        background-color: white;
    }
    .videos-title {
        align-items: center;
        text-align: center;
        font-family: 'Cormorant Garamond', serif;
        font-size: 2rem;
        margin: 2rem;
    }
    .video-gallery {
        /* Styles for the gallery */
    }
    .video-row {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        margin-bottom: 2rem; /* Spacing between rows */
    }
    .video-row.video-left, .video-row.video-right {
        flex-direction: row;
    }
    .video-container, .video-text {
        flex: 1;
        margin: 0 1rem; /* Spacing between video and text */
    }
    .video-container {
        position: relative;
        flex-basis: 40%;
        width: 100%;
        height: 100%;   
        padding-bottom: 56.25%; /* 16:9 Aspect Ratio 56.25% */
        margin: 1rem;
    }
    .video-container iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    /* Additional styles for the text */
    .video-text {
        /* Style your text here */
        font-family: 'Lato', sans-serif;
    }
</style>