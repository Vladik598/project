"use strict";

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
};

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
if(personalMovieDB.count < 10 ) {
        console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30){
        console.log('Вы классический зритель');
} else {
        console.log('Вы киноман');
}

console.log(personalMovieDB);
 
