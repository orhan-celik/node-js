var arac = [{
                "marka" : "Renault",
                "model" : "Fluance",
                "paket" : "JOY",
                "yil"   : 2013,
                "hp"    : "1.5",
                "km"    : 86000,
                "vites" : "Manuel",
                "renk"  : "Beyaz"
            },{
                "marka" : "Opel",
                "model" : "Corsa",
                "paket" : "Extreme",
                "yil"   : 2011,
                "hp"    : "1.9",
                "km"    : 127000,
                "vites" : "Manuel",
                "renk"  : "Kırmızı"
            }];
/*

console.log(arac);
console.log(arac[0].marka);
*/

arac.forEach(function (arac, index){
    console.log((index+1)+"-"+arac.marka+" "+arac.model+", KM : "+arac.km+", Yaş : "+(new Date().getFullYear() - arac.yil));
});
