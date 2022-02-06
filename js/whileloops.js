console.log('Welcome to javaScript');
let i=0;
while(i<3){
    console.log(i);
    i++;
}

let i=3;
while(i){
    console.log(i);
    i--;
}

let i=0;
do{
    console.log(i);
    i++;
}
while(i<3);

let sum=0;
while(true){
    let value=+prompt("Enter a number",'');
    if(!value) break;
    sum += value;
}
console.log("sum:" +sum);

for(let i=0; i<10; i++){
    if(i%2==0) continue;
    console.log(i);
}

outer :for(let i=0;i<2;i++){
    for(let j=0;j<2;j++){
        let input=prompt(`value at (${i},${j})`, '');
        if(!input) break outer;} 
    }
    console.log('Done!');


let i=0;
while(i++ < 5)
console.log(i);
