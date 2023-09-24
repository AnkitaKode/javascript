//Else if
const x = 4;
const y = 10;

if (x > 10 || y > 10) {
    console.log('x is greater than 10');
} else if (x > 10) {
    console.log('x is greater than 10')
} else {
    console.log('x is less than 10')
}

//Cases
const z = 19;

const color = x > 10 ? 'red' : 'blue'
//const color = 'green';

switch (color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is not red or blue');
        break;
}