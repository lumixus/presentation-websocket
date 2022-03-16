import ws from "websocket"
import http from "http"
import dotenv from "dotenv"

dotenv.config();
const wsServer = ws.server;
const wsClient = ws.client;



const server = http.createServer( (req, res) => {

});




server.listen(process.env.PORT || 8080, () => {
    console.log("Server is running on 8080");
})


const wss = new wsServer({
    httpServer: server,
    autoAcceptConnections : true
});



wss.on("connect", (ws) => {
    console.log("Connected!");

    ws.on("message", (data) => {
        wss.broadcast(data.utf8Data);
    } )
});




