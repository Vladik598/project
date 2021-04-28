"use strict";


const personalMovieDB = {
        count: 0,
        movies: {},
        actors: {},
        genres: [],
        privat: false,
        start: function (){
                personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        
                while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
                        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
                }
        },
        rememberMyFilms: function(){
                for(let i = 0;i<2;i++){
                        const q1 = prompt('Один из последних просмотренных фильмов?', ''),
                        q2 = prompt('На сколько оцените его?', '');   
                        
                        if(q1 != null && q2 != null && q1 != '' && q2 != '' && q1.length < 50 && q2.length < 50){
                                personalMovieDB.movies[q1] = q2;
                                console.log('done');
                        } else {
                                i--;
                        }    
                }
        },
        detectPErsonalLevel: function(){
                if(personalMovieDB.count < 10 ) {
                        console.log('Просмотрено довольно мало фильмов');
                } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30){
                        console.log('Вы классический зритель');
                } else if(personalMovieDB.count>=30){
                        console.log('Вы киноман');
                } else {
                        console.log('Error');
                }
        },
        writeYourGenres: function(){
                for (let i = 1;i<2;i++){
                        // const g1 = prompt(`Ваш любимый жанр под номером ${i}`);
                        // if(g1 == null || g1 == ""){
                        //         i--;
                        // } else{
                        //         personalMovieDB.genres[i-1] = g1;
                        // }
                        let g1 = prompt(`Введите ваши любимые жанры черз запятую`);
                        if(g1 == null || g1 == ""){
                                i--;
                        } else{
                                personalMovieDB.genres = g1.split(', ');
                                personalMovieDB.genres.sort();
                        }
                }
                personalMovieDB.genres.forEach((item,i)=>{
                        console.log(`Любимый жанр ${i+1} - это ${item}`);
                });
        },
        showMyDB: function(hidden){
                if(!hidden){
                        console.log(personalMovieDB);
                }
        },
        toggleVisibleMyDB: function(){
                if(personalMovieDB.privat){
                        personalMovieDB.privat = false;
                } else {
                        personalMovieDB.privat = true;
                }
        }
};


// function learnJS(lang, callback){
//         console.log(`Я учу: ${lang}`);
//         callback();
// }

//  learnJS('JavaScript', function(){
//          console.log('Я прошел этот урок!');
//  });

//  const options = {
//          name: 'test',
//          width: 1024,
//          height: 1024,
//          colors: {
//                  border: 'black',
//                  bg: 'red'
//          },
//          makeTest: function(){
//                  console.log('Test');
//          }
//  };

//  delete options.name;
//  console.log(options);

//  let count = 0;
//  for (let key in options){
//          if(typeof(options[key]) === 'object'){
//                  for(let i in options[key]){
//                         console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//                         count++;                
//                  }
//          } else{
//                 console.log(`Свойство ${key} имеет значение ${options[key]}`);
//                 count++;
//          }
//  }

// console.log(Object.keys(options));
// const {border,bg} = options.colors;

// const arr = [1,2,3,6,8];

// arr.forEach(function(item,i,arr){
//         console.log(`${i}: ${item} внутри массива [${arr}] `);
// });

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join(':'));
// for(let value of arr){
//         console.log(value);
// }

// let a = 5,
//     b = a;

// b = b + 5;
// console.log(b);

// const obj = {
//         a:5,
//         b:1
// };
// const copy = obj;

// copy.a = 10;
// console.log(copy);
// console.log(obj);

// function copies(main){
//         let objCopy = {};
//         let key;
//         for(key in main){
//                 objCopy[key] = main[key];
//         }
//         return objCopy;
// }

// const numbers = {
//         a:2,
//         b:5,
//         c:{
//                 x:7,
//                 y:4
//         }
// };

// const newOBJ = copies(numbers);

// newOBJ.a = 10;
// console.log(newOBJ);

// const add = {
//         d:17,
//         e:20
// };

// const clone = Object.assign({},add);

// clone.d = 20;

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();
// newArray[1]= 'asd';
// console.log(newArray);
// console.log(oldArray);

// const video = ['YouTube', 'Vimeo', 'RuTube'],
//         blogs = ['wordpress', 'livejournal', 'blogger'],
//         internet = [...video, ...blogs, 'vk'];

// console.log(internet);

// function log(a,b,c){
//         console.log(a);
//         console.log(b);
//         console.log(c);
// }
// const num = [2,5,7];

// log(...num);

// const array = ["a", "b"];
// const newAArray = [...array];
// const q = {
//         one: 1,
//         two: 2
// };
// const NEWOBJ = {...q};
// NEWOBJ.one = 'aslsaf';
// console.log(NEWOBJ);
// console.log(q);

// const soldier = {
//         health: 400, 
//         armor: 100,
//         sayHello: function() {
//                 console.log("Hello");
//         }
// };

// const john = Object.create(soldier);

// const John = {
//         health:100
// };

// Object.setPrototypeOf(John, soldier);
// john.sayHello();