const arac = {
    "marka" : "Renault",
    "model" : "Fluance",
    "paket" : "JOY",
    "hp"    : "1.5",
    "km"    : 86000,
    "vites" : "Manuel",
    "renk"  : "Beyaz"
}

// ES 5
    /*
    const marka = arac.marka;
    const model = arac.model;
    const paket = arac.paket;
    const hp = arac.hp;
    const km = arac.km;
    const vites = arac.vites;
    const renk = arac.renk;
    */

// ES 6
// Ecma Script ile 7 Satırı tek satırda tanımlayıp aynı şekilde kullanabildik.
const {marka, model, paket, hp, km, vites, renk} = arac;

console.log(marka);
console.log(model);
console.log(paket);
console.log(hp);
console.log(km);
console.log(vites);
console.log(renk);