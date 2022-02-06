console.log('Logical Operator');
let a ;
let b;
console.log(a||b);

//using OR(||)
console.log(true||true);
console.log(true||false);
console.log(false||true);
console.log(false||false);

if(1||0){
    console.log('Right!');
}

let hour=prompt('Enter the hour?','');
if(hour==10||hour>19){
    console.log('The work is complete');
}
else{
    console.log('work is not complete');
}

let time=12;
let isWeekend=true;
if(time<10||time>18||isWeekend){
    console.log('the office is closed');
}


console.log(1||0);
console.log(null||1);
console.log(null||0||1);

console.log( true || alert("not printed"));
console.log( false|| alert(" printed"));


//And operator(&&)
let watch=12;
let minute=30;
if(watch==12 && minute==30){
    console.log('the time is 12:30');
}
