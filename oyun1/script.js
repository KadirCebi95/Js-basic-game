let kullanici = 0;
let bilgisayar = 0;

const sec = (secim) => {
  let bilgisayarSecim = Math.floor(Math.random() * 3) + 1;

  let bilgisayarSecimAlan = document.getElementById("bilgisayarSecimAlan");

  if (bilgisayarSecim == 1) {   
    bilgisayarSecimAlan.innerHTML = `<div class="card bg-primary p-5"><p >taş</p></div>`;

    if (secim == "taş") {
      ekranaBas("warning", "berabere");
    } else if (secim == "kağıt") {
      ekranaBas("success", "kazandın");
      kullanici++;
    } else {
      ekranaBas("danger", "kaybettin");
      bilgisayar++;
    }
  } else if (bilgisayarSecim == 2) {
    bilgisayarSecimAlan.innerHTML = `<div class="card bg-primary p-5"><p >kağıt</p></div>`;

    if (secim == "taş") {
      ekranaBas("danger", "kaybettin");
      bilgisayar++;
    } else if (secim == "kağıt") {
      ekranaBas("warning", "berabere");
    } else {
      ekranaBas("success", "kazandın");
      kullanici++;
    }
  } else {
    bilgisayarSecimAlan.innerHTML = `<div class="card bg-primary p-5"><p >makas</p></div>`;

    if (secim == "taş") {
      ekranaBas("success", "kazandın");
      kullanici++;
    } else if (secim == "kağıt") {
      ekranaBas("danger", "kaybettin");
      bilgisayar++;
    } else {
      ekranaBas("warning", "berabere");
    }
  }

  skorTablo();
};

const ekranaBas = (x, y) => {
  let sonucAlan = document.getElementById("sonucAlan");
  sonucAlan.innerHTML = `<div class="card bg-${x} p-5"><p >${y}</p></div>`;
};

const skorTablo = () => {
  let kul = document.getElementById("kul");
  let bil = document.getElementById("bil");

  kul.innerHTML = kullanici;
  bil.innerHTML = bilgisayar;
};
