
let Mark_mass = 70;
let Mark_height = 167;
let John_mass = 63;
let John_height = 181;

let MarkBMI = Mark_mass/Mark_height*Mark_height;
let JohnBMI = John_mass/John_height*John_height;

let markHigherBMI = MarkBMI > JohnBMI;

if(markHigherBMI){
    console.log(`Mark's BMI (${MarkBMI}) is higher than John's (${JohnBMI})`);
} else{
    console.log(`John's BMI (${JohnBMI}) is higher than Marks's (${MarkBMI})`);
}



console.log(MarkBMI)
console.log(JohnBMI)
console.log(markHigherBMI)
