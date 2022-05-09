const client = new WebSocket("wss://presentation-websocket.herokuapp.com");

client.onopen = () => {
    console.log("Connected to the websocket server");
}


let currentSlide = null;
let slideItems = null;
let index = 0;
var music = new Audio('https://files.freemusicarchive.org//storage-freemusicarchive-org//tracks//mGceVCt1lmlR2azadCaehPjLv0tzrCOdcsGnSxda.mp3');
music.volume = 0.1;
const slideObject = {
    images : [
        {
        imgName : "slide1",
        url : "https://images3.alphacoders.com/608/thumb-1920-608887.jpg"
    },
    {
        imgName : "slide2",
        url : "https://i.ytimg.com/vi/nEkS8n40Jf4/maxresdefault.jpg"
    },
    {
        imgName : "slide3",
        url : "https://sm.ign.com/ign_tr/news/i/it-takes-t/it-takes-two-is-getting-an-adaptation-for-the-big-and-small_fvs5.jpg"
    },

]
}

const start = () => {
    slideItems = document.getElementsByClassName("slide-item-wrapper");
    currentSlide = slideItems[index];
    initImages();
    showSlide(currentSlide);

}

const initImages = () => {
    for (let i = 0; i < slideItems.length; i++) {
        slideItems[i].style.backgroundImage = `url(${slideObject.images[i].url})`;
        
    }
}



const showSlide = (slide) => {
    for (let i = 0; i < slideItems.length; i++) {
        slideItems[i].style.display = "none";
        
    }
    slide.style.display = "block";
}


const nextSlide = () => {
    if(index < slideItems.length - 1 ){
        index++;
    currentSlide = slideItems[index];
    showSlide(currentSlide);
    }


}

const prevSlide = () => {
    if(index > 0 ){
        index--;
        currentSlide = slideItems[index];
        showSlide(currentSlide);
        }
}


const startMusic = () => {
    music.play();
}

const stopMusic = () => {
    music.pause();
}


client.onmessage = (event) => {
    if(event.data === "nextslide"){
        nextSlide();
    }

    if(event.data === "prevslide"){
        prevSlide();
    }

    if(event.data === "openmusic"){
        startMusic();
    }

    if(event.data === "stopmusic"){
        stopMusic();
    }
}



document.addEventListener("DOMContentLoaded", () => {
    start();
})