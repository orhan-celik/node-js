try {

    var sayi1 = 20,
        sayi2 = 4;

    if (sayi2 == 0)
        // Hata Fırlatma
        throw new Error("Bölen sayısı sıfır olamaz");

    var sonuc = sayi1 / sayi2;
    console.log(sonuc)

}catch (error){
    // Hata Yakalama
    console.error(error);
}finally {
    // Her Zaman Çalışır
    console.log("İşlemler bitti.");
}