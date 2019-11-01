let socket;
let isPrinting = false;

let qBox, fontGrid;
let cellSize = 40;

let margin = 20;

function setup() {
    let dWidth = displayHeight/16*9;
    createCanvas(dWidth, displayHeight);
    background(255);
    noCursor();
    frameRate(10);
    socket = io.connect('http://localhost:8080');


    qBox = new QuestBox(margin, margin);
    qBox.w = (dWidth - (margin*2));
    qBox.h = displayHeight/5*3;

    let gridTop = (displayHeight - (qBox.h+margin) - (6*cellSize))/2 + (qBox.y + qBox.h);
    fontGrid = new FontGrid(margin, gridTop);
    fontGrid.w = cellSize;

    socket.on('message', (data) => {
        if (data == "printing") {
            isPrinting = true;
        } else {
            isPrinting = false;
            fontGrid.reset();
        }
    });
}


function draw() {
    background(255);

    qBox.show();
    fontGrid.show();
    // if (isPrinting) background(200, 0, 0);
    // else background(0);
}


function keyPressed() {
    let gridIndex = -1;
    if (!isPrinting) {
        if (key == ' ') {
            let data = {fontSize:20, bits:'101101'};
            socket.emit('print', data);
            fontGrid.reset();
        }

        if (key == 'Y' || key == 'y') {
            fontGrid.setOn();
            gridIndex = fontGrid.next();
        }
        if (key == 'N' || key == 'n') {
            fontGrid.setOff();
            gridIndex = fontGrid.next();
        }
        if (gridIndex == 0) {
            socket.emit('print', fontGrid.printData());
        }
    }
}


