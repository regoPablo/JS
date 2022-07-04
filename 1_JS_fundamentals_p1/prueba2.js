let dolphinsAVG = 96 + 108 + 89 / 3;
let koalasAVG = 88 + 91 + 110 / 3;
const minScore = 100;


if(dolphinsAVG > koalasAVG && dolphinsAVG > minScore){
    console.log(`dolphins gana con una puntacion media de ${dolphinsAVG}`)
} else if(dolphinsAVG < koalasAVG && koalasAVG > minScore){
    console.log(`koalas ganan con una puntacion media de ${koalasAVG}`)
} else if(dolphinsAVG === koalasAVG && dolphinsAVG > minScore) {
    console.log(`empate con una puntacion media de ${koalasAVG}`)
} else {
    console.log(`partido nulo`)
}