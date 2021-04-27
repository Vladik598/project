"use strict";

let numberOfFilms;

function start (){
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

        while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)){
                numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
}

start();

const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
};

function rememberMyFilms(){
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
}

rememberMyFilms();

function detectPErsonalLevel(){
        if(personalMovieDB.count < 10 ) {
                console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30){
                console.log('Вы классический зритель');
        } else if(personalMovieDB.count>=30){
                console.log('Вы киноман');
        } else {
                console.log('Error');
        }
}

detectPErsonalLevel();

function showMyDB(hidden){
        if(!hidden){
                console.log(personalMovieDB);
        }
}

function showMyDB2(){
        if(personalMovieDB.privat != true){
                console.log(personalMovieDB);
        }
}

showMyDB(personalMovieDB.privat);
showMyDB2();

function writeYourGenres(){
        for (let i = 1;i<=3;i++){
                const g1 = prompt(`Ваш любимый жанр под номером ${i}`);
                personalMovieDB.genres[i-1] = g1;
        }
}

writeYourGenres();