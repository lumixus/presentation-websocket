const client = new WebSocket("wss://presentation-websocket.herokuapp.com");

client.onopen = () => {
    console.log("Connected to the websocket server");
}




const start = () => {

}



const nextSlide = () => {
    client.send("nextslide")
}

const prevSlide = () => {
    client.send("prevslide")
}

const startMusic = () => {
    client.send("openmusic");
}

const stopMusic = () => {
    client.send("stopmusic");
}





document.addEventListener("DOMContentLoaded", () => {
    start();
})