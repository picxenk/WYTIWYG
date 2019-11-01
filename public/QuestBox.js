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


    show() {
        fill(0);
        rect(this.x, this.y, this.w, this.h, this.r);

        this.showQuestion(0);
    }
}
