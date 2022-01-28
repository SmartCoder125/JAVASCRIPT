// JAVASCRIPT MINIMUM AND MOST USED IN WEBSITE DEVELOPEMENT //////////////////////////////////




// // JAVASCRIPT HELLO WORLD!


// console.log("Hello,World!");




// // JAVASCRIPT OBEJECTS


// const laptop = {
//     color : 'white',
//     name : 'Lenovo',
//     ram : '4GB'
// };

// console.log(laptop);

// console.log(laptop.ram);




// JAASCRIPT VARIABLES -- VAR / LET / CONST


// // Block scope

// var x=100;
// {
//     var x=10;
// }

// console.log(x);


// // Function Scope

// function Test() {
//     const x=10;
//     console.log(x);
// }

// Test();


// // Global Scope

// var x=100;

// function ET() {
//     console.log(x);
// }

// ET();

// const x=10, y=90;
// const z=x+y;

// console.log(z);


// // Hoisting

// console.log(greeting);
// var greeting =10;

// let x=100;

// x=50;

// console.log(x);


// // DATA TYPES 


// 1. ASSIGMENT OPERATOR

// 2. COMPARISION OPERATOR

// 3. ARITHMETIC OPERATOR

// 4. BITWISE OPERATOR

// 5. LOGICAL OPERATOR

// 6. STRING OPERATOR

// 7. CONDITINIOAL OPERATOR (TERNARY)

// 8. COMMA OPERATOR

// 9. UNARY OPERATOR

// 10. REALATINOL OPERATOR


// const x=10;
// const y=x;

// console.log(x+y+x+y);

// let x;
// x=10;
// let y=10;
// let z=x+y;

// console.log(z);

// let x=10;
// x+=10;

// console.log(x);

// let x=999;
// x++;

// console.log(x);

// const user = 'admin';

// if(user==='xyz') {
//     console.log("You are Admin")
// }
// else {
//     console.log("You are not Admin")
// }


// const x=100;

// if(x<100) {
//     console.log("Good Morning");
// }
// else {
//     console.log("Good Night");
// }

// const isLoggedIn = true;
// const isRegisterd = true;

// if(isLoggedIn != isRegisterd === true) {
//     console.log("Your Are My User!!!");

// }

// else {
//     console.log("You are not My User!!!");
// }
 

// const x=10;

// const result = (x<20) ? "Good Morning" : "Good Night";

// console.log(result);

// console.log(3*8+2-5);

// const x= (3+2)/2*6-(3-2);

// console.log(x);

// const x=Symbol(31324512045120);

// console.log(typeof(x));



// AARAYS IN JAVASCRIPT


// let language = ['Marathi','Javascript','Java','C++','Python'];

// console.log(language);

// language.push('dart','flutter');

// language.unshift('ENGLISH','MALYALAM');

// console.log(language);

// language.pop();
// language.pop();

// console.log(language);

// language.shift();
// language.shift();

// console.log(language);


// for(let i=0; i<4; i++) {
//     console.log('*')
// }


// let Actors = [
//     {
//         Name : 'Actor1',
//         Payment : '100'
//     },

//     {
//         Name : 'Actor2',
//         Payment : '150'
//     },

//     {
//         Name : 'Actor3',
//         Payment : '200'
//     }
// ];


//  for(let i=0; i<Actors.length; i++) {
//      Actors[i].Payment -= 10 //Actors[i].Payment - 10;
     
//  }

//  console.log(Actors);

// // FOR-EACH LOOP

// Actors.forEach((actor) => {
//     actor.Payment -= 10;
    
// });

// console.log(Actors);

// FOR-OFF LOOP

// for( actor of Actors) {
//     actor.Payment -=50;
//     console.log(actor);
// }


// FILTERS IN ARRAY


// const Students = [
//     {
//         Name : 'student1',
//         Marks : 50
//     },

//     {
//         Name : 'student2',
//         Marks : 34
//     },

//     {
//         Name : 'student3',
//         Marks : 45
//     },
// ];

// const result = Students.filter((Student) => {

//         if(Student.Marks <40) {
//             return true;
//         }
//         else {
//             return false;
//         }
// });

// console.log(result);


// MAP IN JAVASCRIPT

// const Users = [
//     {
//         fname : 'john',
//         lname : 'doe'
//     },

//     {
//         fname : 'jay',
//         lname : 'waghode'
//     }
// ];


// let result = Users.map((User)=> {

//         return {
//             fullname : `${User.fname} ${User.lname}`
//         };
// }); 

// console.log(result);


// REDUCE IN JAVASCRIPT


// const Movies = [
//     {
//         Name : 'Spider-Man',
//         Budget : 100
//     },

//     {
//         Name : 'Pushpa',
//         Budget : 80
//     },

//     {
//         Name : 'Iron-Man',
//         Budget : 200 
//     }
// ];

// let result = Movies.reduce((acc,Movie)=> {
//     acc = acc + Movie.Budget;
//     return acc;
// },0);

// console.log(result);

// let Total = 0;

// Movies.forEach((Movie)=> {
//     Total +=  Movie.Budget;
// });

// console.log(Total);


// INDEX OF

// const   admins = [2,5,1]; 

// const User  = {
//     name : 'xyz',
//     id : 1
// }


// let result =  admins.indexOf(User.id);

// const isAdmin = admins.indexOf(User.id) > -1;

// console.log(result);

// console.log(isAdmin);


// INCLUDES

// console.log(admins.includes(User.id));


// FIND


// const Users = [

//     {
//         Name : 'abc',
//         id : 1
//     },

//     {
//         Name : 'xyz',
//         id : 2
//     },

//     {
//         Name : 'pqr',
//         id : 3
//     }
// ];

  
// let myUser =  Users.find((User)=> {

//         return User.Name === 'xyz';

// //         if(User.id === 2 ) {
// //             return true
// //         }
// //         return false
//  });

// console.log(myUser);


// SORT IN AARAYS


// const Names = ['JAY','ROHIT','RUTIK','PREM','VIVANSH','VEDANT'];

// Names.sort();

// console.log(Names);

// SPICE OR DELET CERTAIN DATA

// Names.splice(0,4);

// console.log(Names);



// FUNCTIONS IN JAVASCRIPT


// function Test(UserName, PassWord) {

//     console.log(`This is My ${UserName} And This is ${PassWord}`);
// };

// Test('JAY','MAN');
// Test('xyz',3665);


// function upperCase(str) {
//     console.log(str.toUpperCase());

// }

// upperCase('javascript');
// upperCase('jam');

// function lowerCase(str) {
//     console.log(str.toLowerCase());

// }

// lowerCase('JAVASCRIPT');
// lowerCase('jAm');
// lowerCase('JAvA');


// FUNCTION

// function Test(str) {
//     return str;
// }

// const x = Test('JAM');

// console.log(x);


// function upperCase(str) {
//     return str.toUpperCase();

// }

// const result =  upperCase('JaVa');

// console.log(result);



// function lowerCase(str) {
//     return str.toLowerCase();

// }

// const result =  lowerCase('JaVa');

// console.log(result);


// CALCULATE ARE


// function CALCULATEArea(Width, Height) {

//     Height = Height === undefined ? 1 : Height;s 

//     const area = Width * Height;
//     return area;

// }

// const a =  CALCULATEArea(40,80);

// console.log(a);


// VARIABLE SCOPE

// const fileName = 'xyz.pdf';

// function download() {
//     // download logic goes here

//     console.log(fileName);
// }

// download()




// FUNCTION EXPRESSION

// const login = function() {
//     console.log('Logged In!!!');

// }

// login();



// FUNCTION CALLBACK

// function formatText(text, formatCB) {

//     return typeof formatCB === 'function' ? formatCB(text) : text.toUpperCase();

// }

// const result = formatText('hello',function(text) {

//     return text.chatAt(0).toUpperCase() + text.slice(1)

// });

// console.log(result);



// function formatText(text, formatCB) {

//     return typeof formatCb  === 'function' ? formatCB(text) : text.toUpperCase();


// }

// const result =  formatText('hello', function(text) {

//     return text.charAt(0).toUpperCase() + text.slice(1) 
// });

// console.log(result)



// IIFE(IMMEDIATLY INVOKED FUNCTION EXPRESSION)

// (function setUp() {
//     console.log('setUp Done!!')
// })();


// AARAOW FUNCTION

// const login = (userName) => {
//     console.log(`${userName} is Logged In`);

// };

// login('JAY WAGHODE');

// const sum = (num1,num2) => num1+num2;

// const result = sum(4,5);

// console.log(result);


// ASYNCHRONOUS JAVASCRIPT

// http://latentflip.com/loupe/

// console.log('Hello');

// function greeting() {

//     console.log('I AM FROM SET_TIMEOUT')
// }

// setTimeout(greeting, 3000)

// console.log('#JAVASCRIPT');

// setTimeout(function() {

//     console.log("I AM FROM SET_TIMEOUT")

// },3000);

// console.log('start');

// function waitforSevenSeconds() {
//     let ms = 7000 + new Date().getTime();
//     while(new Date () < ms) {} 

// }

// setTimeout(()=> {
//     console.log('I AM FROM TIMEOUT')
// },2000)

// console.log('End')

// waitforSevenSeconds();



// CALLBACKS AND PROMISES


// SCENARIO

// 1. REGISTER

// 2. SEND WELCOME EMAIL

// 3. LOGIN

// 4. GET USER DATA

// 5. DISPLAY USER DATA


function waitforSevenSeconds() {
    let ms = 7000 + new Date().getTime();
    while(new Date () < ms) {} 

}

function register(callback) {
    setTimeout(()=> {
        console.log('Registration End!');
        callback();  
    }, 1000)
}

function sendEmail() {
    setTimeout(()=> {
        console.log('Email End!');
    },1000)
    
}

function login() {
    setTimeout(()=> {
        console.log('Login End!');
    },1000)
    
}

function getUserData() {
    setTimeout(()=> {
        console.log('Got User Data!');
    },1000)
    
}

function displayUserData() {
    setTimeout(()=> {
        console.log('User Data Displayed!');
    })
    
}


register();
sendEmail();
login();
getUserData();
displayUserData();



console.log('Other Application Work!!!');




















































