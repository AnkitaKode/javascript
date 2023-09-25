const todo = [
    {
        id: 1,
        text: 'Text out trash',
        iscompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        iscompleted: true
    },
    {
        id: 3,
        text: 'Denstist appointment',
        iscompleted: true
    }
];

const todoJSON = JSON.stringify(todo);
console.log(todoJSON);