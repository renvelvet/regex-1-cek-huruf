const buttonCekHuruf = document.querySelector(".cek-huruf .buttonCek");
// ------------ FUNCTION -------------------
cekHurufAwal = (string) => {
  const regEx = new RegExp(/[A-Z]/);
  return regEx.test(string);
};

// ----------- EVENT LISTENER ------------------
buttonCekHuruf.addEventListener("click", () => {
  const cekHuruf = document.getElementById("huruf").value;
  if (cekHurufAwal(cekHuruf.charAt(0))) {
    document.querySelector(".cek-huruf #output").innerHTML =
      "Huruf pertama adalah huruf besar";
  } else {
    document.querySelector(".cek-huruf #output").innerHTML =
      "Huruf pertama adalah huruf kecil";
  }
});
