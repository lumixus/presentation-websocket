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
        url : "https://images.unsplash.com/photo-1552872673-9b7b99711ebb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    },
    {
        imgName : "slide2",
        url : "https://images.unsplash.com/photo-1584009577996-0227b2358356?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    },
    {
        imgName : "slide3",
        url : "https://images.unsplash.com/photo-1606481021733-5e269f7d87f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80"
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