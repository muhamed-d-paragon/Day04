function main(){
    var firstNum = 6;
    var secondNum = 25;
    var thridNum = 5.2;
    firstNum *= 9;
    secondNum /= 5;
    thridNum *= 10;
    return {
        firstNum,
        secondNum,
        thridNum
    };
}
    console.log(main());
    module.exports = main;