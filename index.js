let homescore = document.getElementById("scorehome")
let homecount = 0
homescore.textContent = homecount




function plusone()
{
    homecount += 1
    homescore.textContent = homecount
}
function plustwo()
{
    homecount += 2
    homescore.textContent = homecount
}
function plusthree()
{
    homecount += 3
    homescore.textContent = homecount
}




let guestcore = document.getElementById("scoreguest")
let guestcount = 0
guestscore.textContent = guestcount

function plusoneg()
{
    guestcount += 1
    guestcore.textContent = guestcount
}
function plustwog()
{
    guestcount += 2
    guestcore.textContent = guestcount
}
function plusthreeg()
{
    guestcount += 3
    guestcore.textContent = guestcount
}