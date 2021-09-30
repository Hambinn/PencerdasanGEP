const tombol = document.getElementById('tUbahWarna');
const color = document.querySelector("#color");
tombol.onclick = function(){
    // document.body.style.backgroundColor = 'lightblue'
    // document.body.setAttribute('class','biru-muda')
    // document.body.classList.toggle('biru-muda')
    color.innerHTML = "kiki jelek banget"
}

const sMerah = document.querySelector('input[name = sMerah]');
const sHijau = document.querySelector('input[name = sHijau]');
const sBiru = document.querySelector('input[name = sBiru]');

sMerah.addEventListener('input',function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor= `rgb(${r},${g},${b})`
});

sHijau.addEventListener('input',function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor= `rgb(${r},${g},${b})`
});

sBiru.addEventListener('input',function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor= `rgb(${r},${g},${b})`
});



