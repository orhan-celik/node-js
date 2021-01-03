const user = {
    name : "Orhan",
    surname : "ÇELİK"
}
const friends = [{name : "Ahmet"},{name : "Mehmet"}];

let getUser = () => {

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(user)
        },3000);
    })
}

let getFriends = () => {
    return new Promise((resolve, reject)=>{
        resolve(friends)
        // reject("Arkadaş listesi alınamadı...")
    })
}

// Artık burada async ve await sayesinde program akışımız satır satır olacaktır.
async function service (){
    try{
        let user = await getUser();
        console.log(user)
        let friends = await getFriends();
        console.log(...friends)
    }catch (err){
        console.error(err);
    }

}

service();