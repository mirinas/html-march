
// alert('Gero antradienio :|')

function toEnglish() {
    document.querySelector('#title').innerHTML = 'Learning HTML'
    document.querySelector('#title').style.color = 'red'
}


function toLithuanian() {
    document.querySelector('#title').innerHTML = 'Mokausi HTML'
    document.querySelector('#title').style.color = 'green'
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