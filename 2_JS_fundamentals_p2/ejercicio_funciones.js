
const calcAVG = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const checkWinner = (avgDolphins, avgKoalas) => {

    if(avgDolphins >= avgKoalas * 2){
        console.log(`Dolphins ganan (${avgDolphins} vs. ${avgKoalas})`)
    } else if(avgKoalas >= avgDolphins * 2){
        console.log(`Koalas ganan (${avgKoalas} vs. ${avgDolphins})`)
    } else{
        console.log(`No hay ganador`)
    }
}

const dolphinsAVG = calcAVG(85, 54, 41)
const koalasAVG = calcAVG(23, 34, 27)

checkWinner(dolphinsAVG, koalasAVG);
