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
        iscompleted: false
    }
];

//For each,map,filter
const todoCompleted = todo.filter(function (todo) {
    return todo.iscompleted === true;
})

    .map(function (todo) {
        return todo.text;
    });

console.log(todoCompleted);