var array = [1, 2, 3, 4];
var newarray = ["One", "Two", "Three", "Four"]
array.push.apply(array, newarray);
document.writeln(array);