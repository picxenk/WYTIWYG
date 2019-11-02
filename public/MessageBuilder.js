class MessageBuilder {
    constructor() {
    }

    next() {
        let msg = [
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
        return msg;
    }

}
