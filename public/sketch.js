let isDebug = false;
let socket;
let isPrinting = false;
let printPool = [];
let fontSize = 10;

let qBox, fontGrid;
let cellSize = 40;
let margin = 20;

let state;
let cMessage = [];
let messageBuilder;

let titleFont, questFont;

function preload() {
    titleFont = loadFont("NanumBarunGothicBold.otf");
    questFont = loadFont("NanumBarunGothic.otf");
}

function setup() {
    // let dHeight = displayHeight;
    let dHeight = 800;
    let dWidth = dHeight/16*9;
    createCanvas(dWidth, dHeight);
    background(255);
    noCursor();
    frameRate(10);
    socket = io.connect('http://localhost:8080');

    messageBuilder = new MessageBuilder();

    margin = floor(dWidth/30);
    qBox = new QuestBox(margin, margin);
    qBox.w = (dWidth - (margin*2));
    qBox.h = dHeight/6*4;
    qBox.tFont = titleFont;
    qBox.qFont = questFont;

    cellSize = dHeight/24;
    let gridTop = (dHeight - (qBox.h+margin) - (6*cellSize))/2 + (qBox.y + qBox.h);
    let gridX = width/2 - (cellSize*2.5);
    fontGrid = new FontGrid(gridX, gridTop);
    fontGrid.w = cellSize;
    fontGrid.fontSize = fontSize;

    socket.on('message', (data) => {
        if (data == "printing") {
            isPrinting = true;
        } else {
            isPrinting = false;
            // fontGrid.reset();
        }
    });

    state = "READY";
}


function draw() {
    background(255);

    if (state == "READY") {
        qBox.showReady();
        fontGrid.show();
    }

    if (state == "LINE") {
        // console.log(fontGrid.get());
        qBox.show();
        fontGrid.show();
        if (!isPrinting) qBox.pointTo(fontGrid.cPos());
    }

    if (state == "CHAR" || isPrinting) {
        qBox.showPrinting();
    }

    if (state == "CHAR") {
        fontGrid.showChar();
    }

    if (!isPrinting && printPool.length > 0) {
        let poolData = printPool.shift();
        socket.emit('print', poolData);
        console.log("PRINTING::"+poolData.fontSize+"::"+poolData.bits);
    }

    if (printPool.length == 0 && cMessage.length == 0 && state != "LINE") {
        state = "READY";
    }

    if (printPool.length == 0 && cMessage.length > 0 && state != "LINE") {
        processMessage();
    }
}


function processMessage() {
    let c = cMessage.shift();

    if (c.type == 'char') {
        state = "CHAR";
        console.log("PROCESSING: "+c.value);
        fontGrid.target(c.data);
        for (let bits of c.data) {
            pushLine(fontSize, bits);
        }
    }

    if (c.type == 'line') {
        state = "LINE";
        console.log("FontGrid for: "+c.value);
        fontGrid.target(c.data);
        qBox.nextQuest(fontGrid.get());
    }

    if (c.type == 'end') {
        qBox.please = false;
        printFeed(4);
    }
}



function keyPressed() {
    let gridIndex = -1;
    if (!isPrinting) {
        if (state == "READY" && (key == 'Y' || key == 'y')) {
            cMessage = messageBuilder.next();
            fontSize = [10, 10, 20, 10, 20, 10, 30][floor(random(7))];
            fontGrid.fontSize = fontSize;
        }
        if (state == "READY" && (key == 'N' || key == 'n')) {
            qBox.please = true;
        }

        if (isDebug && key == ' ') {
            let data = fontLine(20, '101101');
            printPool.push(data);
            // socket.emit('print', data);
            fontGrid.reset();
        }

        if (state == "LINE") {
            if (key == 'Y' || key == 'y') {
                fontGrid.setOn();
                gridIndex = fontGrid.next();
                qBox.nextQuest(fontGrid.get());
            }
            if (key == 'N' || key == 'n') {
                fontGrid.setOff();
                gridIndex = fontGrid.next();
                qBox.nextQuest(fontGrid.get());
            }
            if (gridIndex == 0) {
                // socket.emit('print', fontGrid.printData());
                printPool.push(fontGrid.printData());
            }
            if (gridIndex == -1) {
                printPool.push(fontGrid.printData());
                pushLine(fontSize, "000000");
                fontGrid.reset();
                processMessage();
            }
        }

        //for testing
        if (isDebug && key == 'M') {
            state = "CHAR";
            aSize = 10;

            pushChar(aSize, F.g);
            pushChar(aSize, F.o);
            pushChar(aSize, F.o);
            pushChar(aSize, F.d);
            pushChar(aSize, F.space);
            pushChar(aSize, F.l);
            pushChar(aSize, F.u);
            pushChar(aSize, F.c);
            pushChar(aSize, F.k);
            pushChar(aSize, F.bang);
            pushChar(aSize, F.space);
            pushChar(aSize, F.space);
            
            // pushChar(aSize, F.a);
            // pushChar(aSize, F.b);
            // pushChar(aSize, F.c);
            // pushChar(aSize, F.d);
            // pushChar(aSize, F.e);
            // pushChar(aSize, F.f);
            // pushChar(aSize, F.g);
            // pushChar(aSize, F.h);
            // pushChar(aSize, F.i);
            // pushChar(aSize, F.j);
            // pushChar(aSize, F.k);
            // pushChar(aSize, F.l);
            // pushChar(aSize, F.m);
            // pushChar(aSize, F.n);
            // pushChar(aSize, F.o);
            // pushChar(aSize, F.p);
            // pushChar(aSize, F.q);
            // pushChar(aSize, F.r);
            // pushChar(aSize, F.s);
            // pushChar(aSize, F.t);
            // pushChar(aSize, F.u);
            // pushChar(aSize, F.v);
            // pushChar(aSize, F.w);
            // pushChar(aSize, F.x);
            // pushChar(aSize, F.y);
            // pushChar(aSize, F.z);
            // pushChar(aSize, F.bang);
            // pushChar(aSize, F.quest);
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
    printPool.push(fontLine(aSize, bits));
}

function printFeed(aSize) {
    socket.emit('feed', {feedSize: aSize});
}


function pushChar(aSize, aChar) {
    for (let bits of aChar) {
        pushLine(aSize, bits);
    }
}
