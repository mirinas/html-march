
// alert('Gero antradienio :|')

const PI = 3.14251242;
const EMAIL = 'augustas@test.com'

let title = document.querySelector('#title');

function toEnglish() {
    title.innerHTML = 'Learning HTML'
    title.style.color = 'red'
}


function toLithuanian() {
    title.innerHTML = 'Mokausi HTML'
    title.style.color = 'green'
}


function checkPassword() {
    
    if(document.querySelector('#password').value.length < 5) {
        document.querySelector('#notification').className = 'error'
        document.querySelector('#notification').innerHTML = 'Password length must be >5'
    } else {
        document.querySelector('#notification').className = 'success'
        document.querySelector('#notification').innerHTML = 'Strong password'
    }
}