// Set Time Out
setTimeout(() => {
    fnc();
},2000);

// Set Interval
var i = 1;
var interval = setInterval(()=>{
    if(i == 5) clearInterval(interval);
    fnc(); i++;
},1000);

var fnc = () => {
    console.log("Fnc running...")
}

