let socket;
let isPrinting = false;
let printPool = [];
let fontSize = 20;

let qBox, fontGrid;
let cellSize = 40;

let margin = 20;

let state;

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
    fontGrid.fontSize = fontSize;

    socket.on('message', (data) => {
        if (data == "printing") {
            isPrinting = true;
        } else {
            isPrinting = false;
            fontGrid.reset();
        }
    });

    state = "READY";
}


function draw() {
    background(255);

    if (state == "READY") {
        qBox.showReady();
    }

    if (state == "LINE") {
        qBox.show();
        fontGrid.show();
    }

    if (state == "CHAR") {
        qBox.showPrinting();
    }
    // if (isPrinting) background(200, 0, 0);
    // else background(0);
    //

    if (!isPrinting && printPool.length > 0) {
        let poolData = printPool.shift();
        socket.emit('print', poolData);
        console.log("PRINTING::"+poolData.fontSize+"::"+poolData.bits);
    }

    if (printPool.length == 0) {
        state = "READY";
    }
}


function keyPressed() {
    let gridIndex = -1;
    if (!isPrinting) {
        if (key == ' ') {
            let data = fontLine(20, '101101');
            printPool.push(data);
            // socket.emit('print', data);
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
            // socket.emit('print', fontGrid.printData());
            printPool.push(fontGrid.printData());
        }

        //for testing
        if (key == 'G') {
            let gap = fontLine(fontSize, '000000');
            printPool.push(gap);
        }

        if (key == 'S') {
            let gap = fontLine(fontSize, '000000');
            printPool.push(gap);
            printPool.push(gap);
            printPool.push(gap);
        }

        if (key == 'M') {
            state = "CHAR";
            fontSize = 5;
            //W
            printPool.push(fontLine(fontSize, '011111'));
            printPool.push(fontLine(fontSize, '100000'));
            printPool.push(fontLine(fontSize, '011000'));
            printPool.push(fontLine(fontSize, '100000'));
            printPool.push(fontLine(fontSize, '011111'));
            printPool.push(fontLine(fontSize, '000000'));

            //E
            printPool.push(fontLine(fontSize, '111111'));
            printPool.push(fontLine(fontSize, '100101'));
            printPool.push(fontLine(fontSize, '100101'));
            printPool.push(fontLine(fontSize, '100101'));
            printPool.push(fontLine(fontSize, '000000'));

            printPool.push(fontLine(fontSize, '000000'));
            printPool.push(fontLine(fontSize, '000000'));
            printPool.push(fontLine(fontSize, '000000'));

            //A
            printPool.push(fontLine(fontSize, '111110'));
            printPool.push(fontLine(fontSize, '001001'));
            printPool.push(fontLine(fontSize, '001001'));
            printPool.push(fontLine(fontSize, '111110'));
            printPool.push(fontLine(fontSize, '000000'));
            
            //R
            printPool.push(fontLine(fontSize, '111111'));
            printPool.push(fontLine(fontSize, '000101'));
            printPool.push(fontLine(fontSize, '000101'));
            printPool.push(fontLine(fontSize, '111010'));
            printPool.push(fontLine(fontSize, '000000'));

            //E
            printPool.push(fontLine(fontSize, '111111'));
            printPool.push(fontLine(fontSize, '100101'));
            printPool.push(fontLine(fontSize, '100101'));
            printPool.push(fontLine(fontSize, '100101'));
            printPool.push(fontLine(fontSize, '000000'));

            printPool.push(fontLine(fontSize, '000000'));
            printPool.push(fontLine(fontSize, '000000'));
            printPool.push(fontLine(fontSize, '000000'));
            
            //C
            printPool.push(fontLine(fontSize, '011110'));
            printPool.push(fontLine(fontSize, '100001'));
            printPool.push(fontLine(fontSize, '100001'));
            printPool.push(fontLine(fontSize, '010010'));
            printPool.push(fontLine(fontSize, '000000'));
            //O
            printPool.push(fontLine(fontSize, '011110'));
            printPool.push(fontLine(fontSize, '100001'));
            printPool.push(fontLine(fontSize, '100001'));
            printPool.push(fontLine(fontSize, '011110'));
            printPool.push(fontLine(fontSize, '000000'));
            //O
            printPool.push(fontLine(fontSize, '011110'));
            printPool.push(fontLine(fontSize, '100001'));
            printPool.push(fontLine(fontSize, '100001'));
            printPool.push(fontLine(fontSize, '011110'));
            printPool.push(fontLine(fontSize, '000000'));
            //L
            printPool.push(fontLine(fontSize, '111111'));
            printPool.push(fontLine(fontSize, '100000'));
            printPool.push(fontLine(fontSize, '100000'));
            printPool.push(fontLine(fontSize, '100000'));
            printPool.push(fontLine(fontSize, '000000'));
        }
    }
}


function fontLine(aSize, bits) {
    return {
        fontSize: aSize,
        bits: bits
    };
}

function pushLine(aSize, bits) {
            printPool.push(fontLine(fontSize, '000000'));
}
