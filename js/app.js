// Stringek ES6-ban

let vezetekNev = 'Teszt';
let keresztNev = 'Elek';

const szuletesiEv = 1970;

function kosrszamitas(ev) {
    return 2021 - ev;
}


// ES5
console.log(vezetekNev + ' ' + keresztNev + ', született ' + szuletesiEv + '-ben. Most ' + kosrszamitas(szuletesiEv)+ ' éves.');


//ES6
console.log(`${vezetekNev} ${keresztNev}, született ${szuletesiEv}-ben. Most ${kosrszamitas(szuletesiEv)} éves.`); 

const nev = `${vezetekNev} ${keresztNev}`;

console.log(nev.startsWith('M'));

console.log(nev.endsWith('ek')); 

console.log(nev.includes('szt E'));

console.log(vezetekNev.repeat(3));

console.log(`${vezetekNev} `.repeat(3));

///////////////////////////////////////////////////////
//TÖMBÖK

const dobozok = document.querySelectorAll('.doboz');

//ES5

var dobozokTombES5 = Array.prototype.slice.call(dobozok);
/*
dobozokTombES5.forEach(function(aktualis) {
    aktualis.style.backgroundColor = 'orangered';
}); */

// ES6

const dobozokTomES6 = Array.from(dobozok);

dobozokTomES6.forEach(aktualis => {
    aktualis.style.backgroundColor = 'dodgerblue';
});

//ES5

/*for(var i = 0; i < dobozokTombES5.length; i++) {
    if(dobozokTombES5[i].className == 'doboz kek') {
        continue;
    }

    dobozokTombES5[i].textContent = 'kék lettem!';
}*/

// ES6 

/*for (const aktualis of dobozokTomES6) {
    if(aktualis.className === 'doboz kek') {
        continue;
    }

    aktualis.textContent = 'Kék lettem';
}*/


for (const aktualisElem of dobozokTomES6) {
    if(aktualisElem.className.includes('kek')) {
        continue;
    }

    aktualisElem.textContent = 'Kék lettem';
}


// Sok egyerek között megtatálni a felnőtett

// ES5

var korok = [2, 10, 20, 17, 14];

console.log(korok);

var felnottek = korok.map(function(aktualis) {
    return aktualis >= 18;
});

console.log(felnottek);

console.log(felnottek.indexOf(true));

// ES6



console.log(korok.findIndex);

console.log(korok.find(aktualis => aktualis >= 18));