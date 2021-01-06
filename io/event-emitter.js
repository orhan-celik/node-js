const event = require("events");
const eventEmitter = new event.EventEmitter();

/************   Event   ************/

// Event Oluşturuldu
eventEmitter.on('olay',function (){
    console.log(`"On" ile oluşturulan onay "emit" ile çağırıldı.`);
});

// Event Çağırıldı.
eventEmitter.emit('olay');

/************   Parametreli Event   ************/

// Parametreli Event Oluşturuldu.
eventEmitter.on('parametreliOlay',(params)=>{
   console.log(params);
});

// Parametre Göndererek Event Tetiklendi.
eventEmitter.emit('parametreliOlay','Parametre Göndererek Event Tetiklendi.');

/************   Parametreli Eventa Obje Gönderme   ************/

eventEmitter.on('objOlay',(params)=>{
    console.log(`Ad : ${params.name}, Soyad : ${params.surname}`);
});

eventEmitter.emit('objOlay',{name:'Orhan','surname':'ÇELİK'});