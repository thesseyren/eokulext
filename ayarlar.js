varsayilanlar = {
    gecmeNot: 50,
    takdirNot: 85,
    tesekkurNot: 70
}

function ayarlariKaydetForm(e) {
    ayarlariKaydet()
    e.preventDefault();
}

function ayarlariKaydet() {
    let gecmeNot = Number(document.querySelector("#gecmeNot").value)
    let takdirNot = Number(document.querySelector("#takdirNot").value)
    let tesekkurNot = Number(document.querySelector("#tesekkurNot").value)
    if (isNaN(gecmeNot) || gecmeNot < 0 || gecmeNot > 100) {
        alert('"Dersten geçme Notu" kısmında geçersiz bir girdi var. Notlar 0 ile 100 arasındaki sayılardan oluşabilir.')
    } else if (isNaN(takdirNot) || takdirNot < 0 || takdirNot > 100) {
        alert('"Geçme Notu" kısmında geçersiz bir girdi var. Notlar 0 ile 100 arasındaki sayılardan oluşabilir.')
    } else if (isNaN(gecmeNot) || gecmeNot < 0 || gecmeNot > 100) {
        alert('"Geçme Notu" kısmında geçersiz bir girdi var. Notlar 0 ile 100 arasındaki sayılardan oluşabilir.')
    } else {
        browser.storage.local.set({
            notlar: {
                gecmeNot: gecmeNot,
                takdirNot: takdirNot,
                tesekkurNot: tesekkurNot
            }
        })
    }
}

function ayarlariYukle() {
    browser.storage.local.get("notlar").then(alinan => {
        if (typeof alinan.notlar == "undefined") {
            document.querySelector("#gecmeNot").value = varsayilanlar.gecmeNot
            document.querySelector("#takdirNot").value = varsayilanlar.takdirNot
            document.querySelector("#tesekkurNot").value = varsayilanlar.tesekkurNot
        } else {
            document.querySelector("#gecmeNot").value = alinan.notlar.gecmeNot
            document.querySelector("#takdirNot").value = alinan.notlar.takdirNot
            document.querySelector("#tesekkurNot").value = alinan.notlar.tesekkurNot
        }
    })
}

function icerikYuklendi() {
    document.querySelector("#varsayilanButon").onclick = () => {
        document.querySelector("#gecmeNot").value = varsayilanlar.gecmeNot
        document.querySelector("#takdirNot").value = varsayilanlar.takdirNot
        document.querySelector("#tesekkurNot").value = varsayilanlar.tesekkurNot
        ayarlariKaydet()
    }
    document.querySelector("#dersSifirla").onclick = () => {
        browser.storage.local.remove("dersler").then(() => {
            alert("Sıfırlama başarılı.")
        })
    }
    ayarlariYukle()
}

document.addEventListener("DOMContentLoaded", icerikYuklendi);
document.querySelector("form").addEventListener("submit", ayarlariKaydet);