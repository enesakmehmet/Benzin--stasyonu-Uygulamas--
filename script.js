document.getElementById("start").addEventListener("click", () => {
    let dizel = 42.12, 
        benzin = 43.47, 
        lpg = 26.04;

    const yeniSatir = "\r\n";

    const yakitMetni = 
        "1-Dizel" + yeniSatir +
        "2-Benzin" + yeniSatir +
        "3-LPG" + yeniSatir +
        "Yakıt türünüzü seçiniz:";

    let yakitTipi = prompt(yakitMetni);
    let yakitLitresi = Number(prompt("Yakıt Litresini giriniz:"));
    let bakiye = Number(prompt("Bakiyenizi giriniz:"));
    const message = document.getElementById("message");

    let odenecekTutar;
    if (yakitTipi == "1") {
        odenecekTutar = dizel * yakitLitresi;
    } else if (yakitTipi == "2") {
        odenecekTutar = benzin * yakitLitresi;
    } else if (yakitTipi == "3") {
        odenecekTutar = lpg * yakitLitresi;
    } else {
        alert("Lütfen geçerli bir yakıt türü seçiniz!");
        return;
    }

    if (odenecekTutar <= bakiye) {
        bakiye -= odenecekTutar;
        message.style.display = "block";
        message.textContent = 
            "Yakıt alma işlemi başarılı!" + yeniSatir +
            "Ödenen Tutar: " + odenecekTutar.toFixed(2) + " TL" + yeniSatir +
            "Kalan Bakiye: " + bakiye.toFixed(2) + " TL";
    } else {
        message.style.display = "block";
        message.textContent = 
            "Bakiyeniz yeterli değil!" + yeniSatir +
            "Ödenecek Tutar: " + odenecekTutar.toFixed(2) + " TL" + yeniSatir +
            "Bakiyeniz: " + bakiye.toFixed(2) + " TL" + yeniSatir +
            "Eksik Tutar: " + (odenecekTutar - bakiye).toFixed(2) + " TL";
    }
});
