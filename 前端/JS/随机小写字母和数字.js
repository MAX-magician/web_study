function randomCharacter(number){
    var result = Math.random.toString(32).substr(2, number);
    return result;
}

randomCharacter(3);