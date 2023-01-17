// ES6 vezetéknév keresztnév életkor kiírása! új string metódusok használata


let vezetekNev = 'Teszt';
let keresztNev = 'Elek';

const eletkor = 1993;

function eletkorSzamitas(ev) {
    const currentYear = new Date().getFullYear();

    return currentYear - ev;
}

// ES5
console.log('Vezetéknév: ' + vezetekNev + ' Keresztnév: ' + keresztNev + ' Életkor: ' + eletkorSzamitas(eletkor) + '.');

// ES6
console.log(`Vezetéknév: ${vezetekNev} Keresztnév: ${keresztNev} Életkor: ${eletkorSzamitas(eletkor)}.`);

const nev = `${vezetekNev} ${keresztNev} `;

console.log(nev.startsWith('E'));
console.log(nev.endsWith('K'));
console.log(nev.includes('szt d'));
console.log(nev.repeat(3));
console.log(`${vezetekNev} `.repeat(3));

// Tömbök

// Az összes doboz színét megváltoztatni pirosra

// ES5
var dobozok = document.querySelectorAll('.doboz');

var dobozokES5 = Array.prototype.slice.call(dobozok);
/*
dobozokES5.forEach(function(aktualis) {
    aktualis.style.backgroundColor = 'orangered';
});
*/


var dobozokES6 = Array.from(dobozok);

dobozokES6.forEach(aktualis => aktualis.style.backgroundColor = 'dodgerblue');

// írja ki mineddn doboz hogy kék lettem

// ES5

/*for(var i = 0; i < dobozokES5.length; i++) {
    if(dobozokES5[i].className === 'doboz kek') {
        continue;
    }

    dobozokES5[i].textContent = 'Kék lettem';
} */

for (const aktualis of dobozokES6) {
    if(aktualis.className.includes('kek')) {
        continue;
    }

    aktualis.textContent = 'kék lettem!';
}

// Sok gyerek között megtatálni a felnőtett

// ES5

var korok = [2, 10, 20, 17, 14];

console.log(korok);

var felnottek = korok.map(function(aktualis) {
    return aktualis >= 18;
});

console.log(felnottek.indexOf(true));

// ES6

console.log(korok.findIndex(aktualis => aktualis >= 18));
console.log(korok.find(elem => elem >= 18));

//----------------------------------------------------------------
//Nyíl függvények

//tömbeben születési évek és számoljuk ki az életkorukat

const evek = [1978, 1992, 1974, 2001, 1999, 2009];

// ES5

var korokES5 = evek.map(function(current, index) {
    return 'A(z)' + (index + 1) + ': életkora: '+ (2023 - current) + '.';
});

console.log(korokES5);


const korokES6 = evek.map((current, index) => {
    const curretnYear = new Date().getFullYear();
    const kor = curretnYear - current;

    return `Kor: ${index}: ${kor}`;
});

console.log(korokES6);


////////////////////////////////////////////////////////////
// this kulcsszó használata dobozra katt és kiiraj a pozit és a színét

// ES5

/*var dobozES5 = {
    szin: 'zöld',
    pozicio: 1,
    kattRam: function() {
        var obj = this
        document.querySelector('.zold').addEventListener('click', function() {
            var szoveg = 'Én vagyok a ' + obj.pozicio + ' doboz és az én színem ' + obj.szin + '.';
            console.log();
            alert(szoveg);
        });
    }
} */



// ES6
const dobozES6 = {
    szin: 'zöld',
    pozicio: 1,
    kattRam: function() {
        document.querySelector('.zold').addEventListener('click', () => {
            let szoveg = `Az én pozicióm ${this.pozicio} és a színem ${this.szin}.`;
            alert(szoveg);
        });
    }
}

dobozES6.kattRam();

// szemely objektum barátainak a kiiratása

function Szemely(nev) {
    this.nev = nev;
}

const haverok = ['Jóska', 'Pista', 'Ödön'];

Szemely.prototype.barataimES5 = function(haverok) {
    var obj = this;
    var tomb = haverok.map(function(elem) {
        return obj.nev + ' barátja ' + elem + '.';
    });
    console.log(tomb);
}

new Szemely('Géza').barataimES5(haverok);

// ES6

Szemely.prototype.barataimES6 = function(haverok) {
    const tomb = haverok.map( elem => {
        return `${this.nev} barátja ${elem}.`;
    });
    console.log(tomb);
}

new Szemely('Gábor').barataimES6(haverok);

/////////////////////////////////
// Spread operátor
// fg 4 számot vár és ezeket összeadja

function szamok(a, b, c, d) {
    return a + b +c + d;
}

var osszeg = szamok(1,2,3,4);


console.log(osszeg);

//ES5

var szamokTomb = [1, 2, 3, 4];

var osszeg2 = szamok.apply(null, szamokTomb);

console.log(osszeg2);

// ES6

const osszeg3 = szamok(...szamokTomb);
console.log(osszeg3);

const t2 = [5, 6, 7, 8, 9, 10];

const t3 = [...szamokTomb, ...t2];

console.log(t3);

// címsor és szövegek átszínezése spread operátor segítségével


const cimsor = document.querySelector('h1');


const htmlElemek = [cimsor, ...dobozok];

Array.from(htmlElemek);

htmlElemek.forEach(aktualisElem => aktualisElem.style.color = 'purple');

///////////////////////////////////////
// Rest paraméterek

//egy függvény ami kap tetszőleges db számot és ezekröl kiirja a konzolba hogy páros vagy páratlan


// ES5

function parosVagyParatlanES5(teszt) {
    var argumentumok = Array.prototype.slice.call(arguments, 1); // megadhatjuk hogy hányadik elemtöl vágja a tömböt
    argumentumok.forEach(function(aktualis) {
        if(aktualis % 2 === 0) {
            console.log("páros");
        } else {
            console.log("páratlan");
        }
    })
}

parosVagyParatlanES5('100', 1, 2, 3);

// ES6

function parosVagyParatlanES6(teszt, ...szamok) {
    szamok.forEach(aktualisElem => {
        if(aktualisElem % 2 === 0) {
            console.log("páros");
        } else {
            console.log("pratlan");
        }
    })
}

parosVagyParatlanES6(1, 2, 3);