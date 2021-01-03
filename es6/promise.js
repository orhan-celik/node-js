let kontrol = (sayi) => {
    return new Promise((resolve,reject)=>{
        (sayi%2) == 0 ? resolve(sayi+" : Çift Sayı") : reject(sayi + " : Tek Sayı");
    })
}

kontrol(7)
    .then((data) => {
        console.log(data)
    })
    .catch((err) => {
        console.error(err)
    });