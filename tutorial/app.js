// SessionStorage veri ekleme veri çıkarma gibi işlemler :


sessionStorage.setItem("KeremKenan", "Eren")
sessionStorage.setItem("1+1=2", true)
sessionStorage.setItem(13, "Eren")

sessionStorage.removeItem(13)

let getValeu = sessionStorage.getItem("KeremKenan")
if (getValeu == null) {
    console.log("value not found");
}
else {
    console.log("value found  :" + getValeu);
}

//LocalStorage ile koldarı aynı