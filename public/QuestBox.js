class QuestBox {
    constructor(aX, aY) {
        this.x = aX;
        this.y = aY;
        this.w = 100;
        this.h = 100;
        this.r = 5;
        this.questKo = '';
        this.questEn = '';
        this.quests0 = [
            // {type: 'm', ko: "" , en: ""},
            // {type: 'c', ko: "" , en: ""},
            // {type: 'p', ko: "" , en: ""},
            {type: 'm', ko: "1 더하기 1 은 1 ?" , en: "1 plus 1 is 1?"},
            {type: 'c', ko: "굴을 즐겨 먹는가?" , en: "Do you enjoy eating oysters?"},
            {type: 'p', ko: "세상은 평등한가?" , en: "Is the world equal?"},
        ];
        this.quests1 = [
            {type: 'm', ko: "1 더하기 1 은 2 ?" , en: "1 plus 1 is 2?"},
            {type: 'c', ko: "고양이를 좋아하는가?" , en: "Do you like a cat?"},
            {type: 'p', ko: "정의는 실현가능한가?" , en: "Is justice possible?"},
        ];
        this.quests01 = [
            {type: 'm', ko: "4917은 소수이다?" , en: "Is 4917 a prime number?"},
            {type: 'c', ko: "벤쿠버는 캐나다의 수도이다?" , en: "Is Vancouver the capital of Canada?"},
            {type: 'p', ko: "구글이 우리를 지배하는가?" , en: "Does Google rule us?"},
        ];
        this.quests10 = [
            {type: 'm', ko: "4919는 소수이다?" , en: "Is 4919 a prime number?"},
            {type: 'c', ko: "캔버라는 오스트레일리아의 수도이다?" , en: "Is Canberra the capital of Australia?"},
            {type: 'p', ko: "아이폰11을 살것인가?" , en: "Will you buy an iPhone 11?"},
        ];
    }

    nextQuest(aBit) {
        let len, i;
        let newQuest;

        if (aBit == -1) {
            newQuest = {ko: "", en: ""};
        }
        if (aBit == '1') {
            len = this.quests1.length; 
            i = floor(random(0, len));
            newQuest = this.quests1[i]; 
        }
        if (aBit == '0') {
            len = this.quests0.length; 
            i = floor(random(0, len));
            newQuest = this.quests0[i]; 
        }
        if (aBit == '-') {
            len = this.quests10.length; 
            i = floor(random(0, len));
            newQuest = this.quests10[i]; 
        }
        if (aBit == '+') {
            len = this.quests01.length; 
            i = floor(random(0, len));
            newQuest = this.quests01[i]; 
        }

        this.questKo = newQuest.ko;
        this.questEn = newQuest.en;
    }

    showQuestion(num) {
        noStroke();
        fill(200);
        textAlign(CENTER);
        textSize(30);
        text(this.questKo, width/2, 100);
        text(this.questEn, width/2, 100+50);
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
