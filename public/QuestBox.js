class QuestBox {
    constructor(aX, aY) {
        this.x = aX;
        this.y = aY;
        this.w = 100;
        this.h = 100;
        this.r = 5;
        this.questKo = '';
        this.questEn = '';
    }

    next() {
    }

    showQuestion(num) {
        noStroke();
        fill(200);
        textAlign(CENTER);
        textSize(30);
        text("고양이를 좋아하는가?", width/2, 100);
        text("Do you like a cat?", width/2, 100+50);
    }

    showBox() {
        fill(0);
        rect(this.x, this.y, this.w, this.h, this.r);
    }

    showReady() {
        this.showBox();
        noStroke();
        fill(200);
        textAlign(CENTER);
        textSize(30);
        text("What You Type Is [not] What You Get", width/2, 100);
    }


    show() {
        this.showBox();
        this.showQuestion(0);
    }

    showPrinting() {
        this.showBox();
        noStroke();
        fill(200);
        textAlign(CENTER);
        textSize(40);
        text("PRINTING...", width/2, 100);
    }
}
