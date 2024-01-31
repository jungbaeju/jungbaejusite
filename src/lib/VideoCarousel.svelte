<script>
    export let videoContent = [
        // Your video content array
    ];

    let currentVideoIndex = 0;

    function showNext() {
        currentVideoIndex = (currentVideoIndex + 1) % videoContent.length;
    }

    function showPrevious() {
        currentVideoIndex = (currentVideoIndex - 1 + videoContent.length) % videoContent.length;
    }
</script>


<div class="carousel-container">
    {#each videoContent as video, index}
        <div class="video-slide" class:selected={index === currentVideoIndex}>
            {#if index === currentVideoIndex}
                <div class="video-container">
                    <div class="video-wrapper">
                        <iframe
                            title="Carousel"
                            src={`https://www.youtube.com/embed/${video.id}?start=${video.startTime}`}
                            frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                        </iframe>
                    </div>
                    <div class="info-wrapper">
                        <button class="arrow left-arrow" on:click={showPrevious}>&lt;</button>
                        <p>{video.text}</p>
                        <button class="arrow right-arrow" on:click={showNext}>&gt;</button>
                    </div>
                </div>
            {/if}
        </div>
    {/each}
    <!--
    <div class="dir-buttons">
        <button class="arrow left-arrow" on:click={showPrevious}>&lt;</button>
        <button class="arrow right-arrow" on:click={showNext}>&gt;</button>
    </div>
-->
</div>

<style>
    .carousel-container {
        /* Styles for the carousel container */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: transparent;
        width: 100%;
        max-width: 100%;
        overflow: hidden;
    }
    .video-container {
        /* Styles for the video container */
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .video-wrapper {
        position: relative;
        padding-top: 56.25%;
        height: 0;

    }
    .video-wrapper iframe {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }
    .video-slide {
        display: none;
        width: 100%;
        transition: all 0.3s ease;
    }
    .selected {
        display: block;
    }
    .video-container p {
        height: 100%;
        color: black;
        font-size: 2vw;
        font-family: 'Open Sans', sans-serif;
    }
    .info-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin-bottom: 0;
        margin-top: 1%;

    }
    /* Additional styling */
    .arrow {
        width: 10%;
        height: 2.5em;
        background-color: transparent;
        color: black;
        border: 0.1rem solid black;
        text-align: center;
        align-items: center;
        justify-content: center;
        font-size: 3vw;
        line-height: 3vw;
        font: bold;
        font-family: 'Open Sans', sans-serif;
    }
    .info-wrapper p {
        width: 80%;
        border-left: 0;
        border-right: 0;
        font-size: 3vw;
        padding-left: 1%;
        padding-right: 1%;

    }
    .arrow:hover {
        background-color: rgba(255, 255, 255, 0.5);
        color: black;
        border: 0.1rem solid black;
    }
</style>