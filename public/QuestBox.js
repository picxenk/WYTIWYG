class QuestBox {
    constructor(aX, aY) {
        this.x = aX;
        this.y = aY;
        this.w = 100;
        this.h = 100;
        this.r = aX/2; // margin 
        this.questKo = '';
        this.questEn = '';
        this.tFont;
        this.please = false;
        this.quests0 = [
            // {type: 'm', ko: "" , en: ""},
            // {type: 'c', ko: "" , en: ""},
            // {type: 'p', ko: "" , en: ""},
            {type: 'm', ko: "1 더하기 1 은 1 ?" , en: "1 plus 1 is 1 ?"},
            {type: 'c', ko: "지구는 평평한가?" , en: "Is the earth flat?"},
            {type: 'p', ko: "세상은 평등한가?" , en: "Is the world equal?"},
            {type: 'm', ko: "9는 짝수인가?" , en: "Is 9 even?"},
            {type: 'c', ko: "자원은 무한한가?" , en: "Are resources unlimited?"},
            {type: 'p', ko: "좌파는 항상 옳은가?" , en: "Is the left always right?"},
            {type: 'm', ko: "8은 4보다 작은가?" , en: "Is 8 less than 4?"},
            {type: 'c', ko: "당신은 항상 옳은가?" , en: "Are you always right?"},
            {type: 'p', ko: "우파는 항상 옳은가?" , en: "Is the right always right?"},
            {type: 'm', ko: "2은 3보다 큰가?" , en: "Is 2 bigger than 3?"},
            {type: 'm', ko: "6은 소수이다?" , en: "Is 6 a prime number?"},
            {type: 'p', ko: "죽고 싶은가?" , en: "Do you want to die?"},
            {type: 'm', ko: "9 더하기 13 은 21 ?" , en: "9 plus 13 is 21 ?"},
            {type: 'p', ko: "지구 온난화는 거짓인가?" , en: "Global warming, is it fake?"},
            {type: 'm', ko: "2 더하기 7 은 8 ?" , en: "2 plus 7 is 8 ?"},
        ];
        this.quests1 = [
            {type: 'm', ko: "1 더하기 1 은 2 ?" , en: "1 plus 1 is 2 ?"},
            {type: 'c', ko: "고양이를 좋아하는가?" , en: "Do you like a cat?"},
            {type: 'p', ko: "정의는 실현가능한가?" , en: "Is justice possible?"},
            {type: 'm', ko: "7은 홀수인가?" , en: "Is 7 odd?"},
            {type: 'c', ko: "김치를 아는가?" , en: "Do you know kimchi?"},
            {type: 'c', ko: "인간은 달에 착륙했는가?" , en: "Did humans land on the moon?"},
            {type: 'm', ko: "2^4 = 16 ?" , en: "2^4 = 16 ?"},
            {type: 'c', ko: "극지방의 빙하가 녹고있는가?" , en: "Is the polar glacier melting?"},
            {type: 'm', ko: "3은 7보다 작은가?" , en: "Is 3 less than 7?"},
            {type: 'm', ko: "3은 소수이다?" , en: "Is 3 a prime number?"},
            {type: 'p', ko: "죽음에 대해 생각해본적이 있는가?" , en: "Have you ever thought about death?"},
            {type: 'p', ko: "살고 싶은가?" , en: "Do you want to live?"},
            {type: 'c', ko: "야근은 생산성을 저해하는가?" , en: "Does overwork kill productivity?"},
            {type: 'm', ko: "11은 소수이다?" , en: "Is 11 a prime number?"},
        ];
        this.quests01 = [
            {type: 'm', ko: "4917은 소수이다?" , en: "Is 4917 a prime number?"},
            {type: 'c', ko: "벤쿠버는 캐나다의 수도이다?" , en: "Is Vancouver the capital of Canada?"},
            {type: 'p', ko: "구글이 우리를 지배하는가?" , en: "Does Google rule us?"},
            {type: 'c', ko: "굴을 즐겨 먹는가?" , en: "Do you enjoy eating oysters?"},
            {type: 'c', ko: "빛의 3원색은 빨강 파랑 노랑인가?" , en: "The three primary colors of light are red, blue, yellow?"},
            {type: 'm', ko: "2^8 = 255 ?" , en: "2^8 = 255 ?"},
            {type: 'p', ko: "짜장보다는 짬뽕?" , en: "Champon rather than jjajang?"},
            {type: 'c', ko: "세계적으로 예방접종률은 50%를 넘지 못한다?" , en: "Is the vaccination rate globally less than 50%?"},
            {type: 'p', ko: "여름보다는 겨울?" , en: "Winter rather than summer?"},
            {type: 'c', ko: "지구의 중력은 일정한가?" , en: "Is the Earth's gravity constant?"},
            {type: 'm', ko: "459는 소수이다?" , en: "Is 459 a prime number?"},
            {type: 'p', ko: "헬조선이라 생각하는가?" , en: "Do you think it's hell?"},
            {type: 'p', ko: "신을 믿는가?" , en: "Do you believe in God?"},
            {type: 'c', ko: "세계적으로 저소득 국가는 증가하고 있는가?" , en: "Low-income countries are increasing?"},
        ];
        this.quests10 = [
            {type: 'm', ko: "4919는 소수이다?" , en: "Is 4919 a prime number?"},
            {type: 'c', ko: "캔버라는 오스트레일리아의 수도이다?" , en: "Is Canberra the capital of Australia?"},
            {type: 'p', ko: "아이폰11을 살것인가?" , en: "Will you buy an iPhone 11?"},
            {type: 'p', ko: "정의는 실현가능한가?" , en: "Is justice possible?"},
            {type: 'c', ko: "고양이를 좋아하는가?" , en: "Do you like a cat?"},
            {type: 'm', ko: "2^13 = 8192 ?" , en: "2^13 = 8192 ?"},
            {type: 'c', ko: "개를 좋아하는가?" , en: "Do you like a dog?"},
            {type: 'c', ko: "개구리를 좋아하는가?" , en: "Do you like a frog?"},
            {type: 'c', ko: "거미를 좋아하는가?" , en: "Do you like a spider?"},
            {type: 'm', ko: "E = mc^2?" , en: "E = mc^2?"},
            {type: 'm', ko: "449는 소수이다?" , en: "Is 449 a prime number?"},
            {type: 'c', ko: "진화론을 믿는가?" , en: "Do you believe in the theory of evolution?"},
            {type: 'p', ko: "짬뽕보다는 짜장?" , en: "Jjajang rather than champon?"},
            {type: 'm', ko: "24 x 14 = 336?" , en: "24 x 14 = 336?"},
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
        textFont(this.qFont);

        let y = this.h/2;
        let ts = floor(this.w/this.questKo.length);
        textSize(ts);
        text(this.questKo, width/2, y);

        y = this.h/3*2;
        ts = floor(this.w/this.questEn.length);
        textSize(ts);
        text(this.questEn, width/2, y);
    }

    showBox() {
        noStroke();
        fill(0);
        rect(this.x, this.y, this.w, this.h, this.r);
    }

    showReady() {
        this.showBox();
        noStroke();
        fill(200);
        textAlign(CENTER);
        textFont(this.tFont);
        let ts = floor(this.w/30);
        let y = 7*ts;
        let g = this.w/50;
        textSize(ts);
        text("What You Type Is [not] What You Get", width/2, y);

        ts = floor(this.w/7);
        y = y + ts + g;
        textSize(ts);
        text("우리 함께", width/2, y);

        ts = floor(this.w/6.5);
        y = y + ts + g;
        textSize(ts);
        text("메시지를", width/2, y);

        ts = floor(this.w/8);
        y = y + ts + g;
        textSize(ts);
        text("완성합시다", width/2, y);

        ts = floor(this.w/16);
        y = y + ts + g*2;
        textSize(ts);
        text("Let's complete the", width/2, y);

        ts = floor(this.w/16);
        y = y + ts + g;
        textSize(ts);
        text("message together", width/2, y);

        if (this.please) {
            y = y + ts + ts + g;
            textSize(ts);
            text("PLEASE ~", width/2, y);
        }

        this.showYN();
    }

    showYN() {
        let ts = floor(this.w/15);
        let ynX = this.w/8*7;
        let ynY = this.y + this.h - (ts/2);
        fill(200);
        textFont(this.tFont);
        textSize(ts);
        text("Y / N", ynX, ynY);
    }

    pointTo(aPos) {
        noStroke();
        fill(0);
        let topX = this.w/9*7;
        let topY = this.y + this.h-2;
        let g = this.w/7;
        triangle(topX, topY, topX+g, topY, aPos.x, aPos.y);
    }


    show() {
        this.showBox();
        this.showQuestion(0);
        this.showYN();
    }

    showPrinting() {
        this.showBox();
        noStroke();
        fill(200);
        textAlign(CENTER);
        textFont(this.tFont);
        textSize(floor(this.w/17));
        text("메시지의 일부를 출력하고 있습니다", width/2, this.h/2);
        textSize(floor(this.w/10));
        text("PRINTING...", width/2, this.h/3*2);
    }
}
