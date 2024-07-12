let spans = document.querySelectorAll('span')
let email = document.forms[0][0]
let password = document.forms[0][1]
let emailSpans = []
let passwordSpans= []
for (let i = 0; i <= 4; i++){
    emailSpans.push(spans[i])
}
for (let i = 5; i < 13; i++){
    passwordSpans.push(spans[i])
}

function mailwaveup(){
    for (let x of emailSpans){
        x.classList.remove('down')
        x.classList.add('top')
    }
}
function mailwavedown(){
    for (let x of emailSpans){
        x.classList.remove('top')
        x.classList.add('down')
    }
}
function passwaveup(){
    for (let x of passwordSpans){
        x.classList.remove('down')
        x.classList.add('top')
    }
}
function passwavedown(){
    for (let x of passwordSpans){
        x.classList.remove('top')
        x.classList.add('down')
    }
}


email.addEventListener('focus', mailwaveup)
email.addEventListener('focusout', mailwavedown)
password.addEventListener('focus', passwaveup)
password.addEventListener('focusout', passwavedown)