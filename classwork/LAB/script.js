
// Lab 15.03.2024

const arr1 = [1, 2, 3] 
const arr2 = [4, 5, 6]

console.log(arr1.concat(arr2));
console.log(arr1.length);
console.log(arr1.indexOf(2));
console.log(arr1.indexOf(3));

const str1 = 'salam'
const str2 = 'salam'

if (str1.startsWith('s')== str2.startsWith('s')) 
    {console.log('Necesen');}
    else {
    console.log( 'ne var ne yox');
}

if (str1.length == str2.length){console.log('Halaldi sene ibo');}
else {console.log(('break'));
}


// console.log(split.split(' '));


// console.log(split.endsWith('!'));

const split = 'bunu bolene halaldir!'
// console.log(split.includes('bolene'));
let hole = ""

for(let i = 0; i < split.length; i++){
    if (split[i] !== " " ){
        hole += split[i];
    }
}
console.log(hole);

console.log(split.replaceAll(" ",""));


/////////////////////////////////////////////////

const car = { 
    name: 'BMW M5 E60',
    maxspeed: 260,
    engine: 2.6,
    HP:'320hp',
    year: {
        firstyear:2006,
    remake:2009,
    manufacture: "Made in Germany" 
},


}
console.log(car.name);
console.log(car.maxspeed);
console.log(car.engine);
console.log(car.HP);
console.log(car.year.firstyear);
console.log(car.manufacture);
console.log(car);

car.name = "BMW M3"
console.log(car.name);


const user = {
    firstName: 'Nur',
    lastName: 'Davidli',
    age: 21,
    address: {
        City: 'Baku',
        Country: 'Azerbaijan',
        street: 'Heyder Aliyev Prospekti ',
    uni: "BBU",
    
     }
}
console.log(user);

//sahesini tapmag 

const rectangle = {
    weidth: 5,
    height: 10,
}
console.log(rectangle.weidth*rectangle.height);

const square = {
    height: 5
}
console.log(square.height * square.height);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

