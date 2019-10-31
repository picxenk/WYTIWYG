let socket;
let isPrinting = false;

function setup() {
    createCanvas(400, 400);
    background(0);
    socket = io.connect('http://59.14.106.124:8080');

    socket.on('message', (data) => {
        if (data == "printing") {
            isPrinting = true;
        } else {
            isPrinting = false;
        }
    });
}

function draw() {
    if (isPrinting) background(200, 0, 0);
    else background(0);

}

function keyReleased() {
    if (key == ' ') {
        let data = {};
        socket.emit('print', data);
    }
}
