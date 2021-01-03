function fnc1(text,cb){
    setTimeout(() => {
        console.log(text);
        cb();
    },2000);
}

var fnc2 = function(){
    console.log("Beklendi");
}

fnc1("Bekle...",fnc2);
