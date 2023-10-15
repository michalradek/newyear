const sekunda = document.getElementById("sekunda");
const minuta = document.getElementById("minuta");
const godzina = document.getElementById("godzina");
const dzien = document.getElementById("dzien");


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function timer()
{
    let date = new Date();
    const nextyear = new Date(date.getFullYear() + 1, 0, 1);
    let diff = nextyear - date;
    while(true)
    {
        date = new Date();
        diff = nextyear - date;
        dzien.innerHTML = Math.floor(diff / (1000 * 60 * 60 * 24));
        godzina.innerHTML = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        minuta.innerHTML = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        sekunda.innerHTML = Math.floor((diff % (1000 * 60)) / 1000);
        await sleep(1000);
    }
    
}
timer();