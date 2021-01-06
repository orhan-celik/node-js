const fs = require('fs');

/************   Dosya Okuma   ************/
fs.readFile('demo.txt',(err,res)=>{
    if (err)
        console.log(err);
    console.log(res.toString());
});

/************   Dosya İçerisine Metin Ekleme   ************/
let text = '\nDosyaya yeni satır eklenecek.';
fs.appendFile('demo.txt', text,(err) => {
    if (err)
        console.log(err)
    console.log('Dosyaya Ekleme Yapıldı.');
});

/************   Dosya İçerisine Metin Ekler Fakat Dosyanın içindekileri siler   ************/
let text = 'Bu metin writeFile ile eklendi.';
fs.writeFile('demo.txt', text, (err) => {
    if(err)
        console.log(err)
    console.log('İçerik eklendi.');
});

/************ Dosya Silme   ************/
fs.unlink('demo.txt',(err)=>{
    if (err)
        console.log(err)
    console.log('Dosya Silindi')
})