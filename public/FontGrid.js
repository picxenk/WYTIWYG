class FontGrid {
    constructor(aX, aY) {
        this.x = aX;
        this.y = aY;
        this.w = 30;
        this.reset();
        this.fontSize = 20;
    }

    reset() {
        this.ch = [];
        this.cells = [
            [2, 2, 2, 2, 2, 2],
            [2, 2, 2, 2, 2, 2],
            [2, 2, 2, 2, 2, 2],
            [2, 2, 2, 2, 2, 2],
            [2, 2, 2, 2, 2, 2]
        ];
        this.i = 0;
        this.ci = 0;
    }

    setOn() {
        this.cells[this.ci][this.i] = 1;
        console.log(this.cells);
    }

    setOff() {
        this.cells[this.ci][this.i] = 0;
        console.log(this.cells);
    }

    next() {
        this.i++;
        if (this.i >= 6) {
            this.i = 0;
            this.ci++;

            if (this.ci >= 5) {
                return -1;
            }
        }
        return this.i;
    }

    target(data) {
        this.ch = data;
    }

    get() {
        try {
            if (this.ch.length > 0 && this.ch[0].length == 6)
                return this.ch[this.ci][5-this.i];
            else
                return -1;
        } catch(e) {
            return -1;
        }
    }

    printData() {
        let i = this.ci - 1;
        let line = this.cells[i];
        let copy = [...line];
        // console.log("DEBUG");
        // console.log(this.cells);
        // console.log(this.ci);
        // console.log(copy);
        let data = {
            fontSize: this.fontSize,
            bits: copy.reverse().join("")
        };
        return data;
    }

    cPos() {
        let pos = {
            x: this.x+(this.ci*this.w)+this.w/2,
            y: this.y+(this.i*this.w)+this.w/2
        }
        return pos;

    }

    show() {
        for (let j=0; j<5; j++) {
            for (let i=0; i<6; i++) {
                stroke(255);
                strokeWeight(4);

                if (this.cells[j][i] == 1)
                    fill(0);
                else if (this.cells[j][i] == 0)
                    fill(255);
                else 
                    fill(90);

                rect(this.x+(j*this.w), this.y+(i*this.w), this.w, this.w);
            }
        }
    }

    showChar() {
        if (this.ch.length > 5) {
        for (let j=0; j<5; j++) {
            for (let i=0; i<6; i++) {
                stroke(255);
                strokeWeight(4);

                if (this.ch[j][5-i] == 1)
                    fill(0);
                else if (this.ch[j][5-i] == 0)
                    fill(200);
                else 
                    fill(90);

                rect(this.x+(j*this.w), this.y+(i*this.w), this.w, this.w);
            }
        }
        }
    }
}
