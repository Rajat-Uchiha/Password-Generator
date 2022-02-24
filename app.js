let pswrd = document.getElementById("gPswrd");
let Gbtn = document.getElementById("GBtn");

let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$";
Gbtn.addEventListener("click", function () {
    let pswrdLength = document.getElementById("pswrdLength");
    let pLength = pswrdLength.value;
    let pass = "";
    let k = Math.random() * str.length + 1;
    let m = Math.ceil(k);
    for (let index = 0; index < pLength; index++) {
        let k = Math.random() * str.length + 1;
        let m = Math.ceil(k);
        let element = str[m];
        pass += str.charAt(m);
        pswrd.innerHTML = pass;
    }
});

