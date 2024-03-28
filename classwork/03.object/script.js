const user = {
    firstName: 'Agil',
    lastName: 'Umalatov',
    age: 20,
    address: {
        City: 'Baku',
        Country: 'Azerbaijan',
        street: 'Aliyar Aliyev',
        some:{
            l: 10,
            b: 5,
        }
     
    },
    uni: "no",
    isAdmin: false,
    salary: null,
    possition:undefined
}
console.log(user.age);
console.log(user.street);
console.log(user.address.some.l);
delete user.salary

user.possition = 'cyber'
console.log(user.possition);
user.address.some.extra = 'watch'
console.log(user.extra);
user.uni = 'Code'
console.log(user.uni);
console.log(user);