function wordblank(noun, adjective, verb) {
    var result = " ";
    result += "The " + adjective + " " + noun + " looks so " + verb;
    return result;
}
console.log(wordblank("dog", "white", "good"));