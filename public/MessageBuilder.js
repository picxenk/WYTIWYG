class MessageBuilder {
    constructor() {
        this.messages = [
            [{type: 'char', value: 'W', data: F.w},
            {type: 'char', value: 'E', data: F.e},
            {type: 'char', value: '_', data: F.space},
            // {type: 'char', value: 'A', data: F.a},
            // {type: 'char', value: 'R', data: F.r},
            // {type: 'char', value: 'E', data: F.e},
            // {type: 'char', value: '_', data: F.space},
            {type: 'line', value: 'C', data: F.ct},
            {type: 'line', value: 'O', data: F.o},
            {type: 'char', value: 'O', data: F.o},
            {type: 'char', value: 'L', data: F.l},
            {type: 'char', value: '_', data: F.space}],
        ];
    }

    next() {
        let msg = this.messages[0];
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
