class FontGrid {
    constructor(aX, aY) {
        this.x = aX;
        this.y = aY;
        this.w = 30;
        this.reset();
        // this.cells = [2, 2, 2, 2, 2, 2];
        // this.i = 0;
        // this.ci = 0;
        this.fontSize = 20;
    }

    reset() {
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
    }

    printData() {
        let i = this.ci - 1;
        let line = this.cells[i];
        let copy = [...line];
        console.log("DEBUG");
        console.log(this.cells);
        console.log(this.ci);
        console.log(copy);
        let data = {
            fontSize: this.fontSize,
            bits: copy.reverse().join("")
        };
        return data;
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
}
