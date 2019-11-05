class MessageBuilder {
    constructor() {
        this.messages = [
            // for testing
            [{type: 'char', value: 'W', data: F.w},
            {type: 'char', value: '_', data: F.space},
            {type: 'line', value: 'C', data: F.ct},
            {type: 'line', value: 'O', data: F.o},
            {type: 'char', value: 'L', data: F.l},
            {type: 'char', value: '_', data: F.space},
            {type: 'end'}],

            // WE ARE COOL
            [{type: 'char', value: 'W', data: F.w},
            {type: 'char', value: 'E', data: F.e},
            {type: 'char', value: '_', data: F.space},
            {type: 'char', value: 'A', data: F.a},
            {type: 'char', value: 'R', data: F.r},
            {type: 'char', value: 'E', data: F.e},
            {type: 'char', value: '_', data: F.space},
            {type: 'line', value: 'C', data: F.ct},
            {type: 'line', value: 'O', data: F.o},
            {type: 'char', value: 'O', data: F.o},
            {type: 'char', value: 'L', data: F.l},
            {type: 'char', value: '_', data: F.space},
            {type: 'end'}],

            // WORLD IS FLAT
            [{type: 'char', value: 'W', data: F.w},
            {type: 'char', value: 'O', data: F.o},
            {type: 'char', value: 'R', data: F.r},
            {type: 'char', value: 'L', data: F.l},
            {type: 'char', value: 'D', data: F.d},
            {type: 'char', value: '_', data: F.space},
            {type: 'char', value: 'I', data: F.i},
            {type: 'char', value: 'S', data: F.s},
            {type: 'char', value: '_', data: F.space},
            {type: 'line', value: 'F', data: F.fb},
            {type: 'line', value: 'L', data: F.lo},
            {type: 'char', value: 'A', data: F.a},
            {type: 'char', value: 'T', data: F.t},
            {type: 'char', value: '_', data: F.space},
            {type: 'end'}],

            // NOW AND HERE
            [{type: 'char', value: 'N', data: F.n},
            {type: 'char', value: 'O', data: F.o},
            {type: 'line', value: 'W', data: F.wt},
            {type: 'char', value: '_', data: F.space},
            {type: 'char', value: 'A', data: F.a},
            {type: 'char', value: 'N', data: F.n},
            {type: 'line', value: 'D', data: F.dspace},
            {type: 'char', value: '_', data: F.space},
            {type: 'char', value: 'H', data: F.h},
            {type: 'char', value: 'E', data: F.e},
            {type: 'char', value: 'R', data: F.r},
            {type: 'line', value: 'E', data: F.eo},
            {type: 'char', value: '_', data: F.space},
            {type: 'end'}],
        ];
    }

    next() {
        let num = this.messages.length;
        let i = floor(random(0, num));
        let msg = this.messages[i];
        return msg;
    }

    demo() {
        let d = [
        {
            type: 'char',
            value: 'W',
            data: F.w
        },
        // {
        //     type: 'char',
        //     value: 'E',
        //     data: F.e
        // },
        {
            type: 'char',
            value: 'SPACE',
            data: F.space
        },
        {
            type: 'line',
            value: 'C',
            data: []
        },
        {
            type: 'char',
            value: 'SPACE',
            data: F.space
        },
        {
            type: 'char',
            value: 'E',
            data: F.e
        },
        ];
        return d;
    }

}
