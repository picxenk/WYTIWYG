class FontGrid {
    constructor(aX, aY) {
        this.x = aX;
        this.y = aY;
        this.w = 30;
        this.cells = [2, 2, 2, 2, 2, 2];
        this.i = 0;
        this.fontSize = 20;
    }

    reset() {
        this.cells = [2, 2, 2, 2, 2, 2];
        this.i = 0;
    }

    setOn() {
        this.cells[this.i] = 1;
        console.log(this.cells);
    }

    setOff() {
        this.cells[this.i] = 0;
        console.log(this.cells);
    }

    next() {
        this.i++;
        if (this.i >= 6) {
            this.i = 0;
        }
        return this.i;
    }

    printData() {
        let copy = [...this.cells];
        let data = {
            fontSize: this.fontSize,
            bits: copy.reverse().join("")
        };
        return data;
    }

    show() {
        for (let i=0; i<6; i++) {
            stroke(255);
            strokeWeight(4);

            if (this.cells[i] == 1)
                fill(0);
            else if (this.cells[i] == 0)
                fill(255);
            else 
                fill(90);

            rect(this.x, this.y+(i*this.w), this.w, this.w);
        }
    }
}
