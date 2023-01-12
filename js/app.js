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