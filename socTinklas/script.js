const MESSAGES_ENDPOINT = 'https://script.google.com/macros/s/AKfycbwP_kh4FP23dYoqcGS8Pkgq_s7Oc4LocyBapNoteIPp8Rr-X2VP4pD9oea2CqQKWKJ5Ew/exec';


refreshMessages();

function refreshMessages() {
    $.get(MESSAGES_ENDPOINT, processMessages)
}

function processMessages(response) {
    let messages = JSON.parse(response);
    
    // 1. paimti template iš HTML dokumento
    let template = document.querySelector('#template').innerHTML;
    let container = document.querySelector('#messages');
    container.innerHTML = '';
    
    messages.forEach(msg => {

        // 2. pakeisti template tekstą su msg reikšmėm
        let msgElement = template.replace('{{username}}', msg.user)
                .replace('{{content}}', msg.content)
                .replace('{{link}}', msg.link);
        
        // 3. įdėti naują elementą į messages
        container.innerHTML += msgElement;
    })

    pasleptiLaikrodi();
}


function sendMessage() {

    document.querySelector('.right-align input').style.display = 'none';
    document.querySelector('.right-align img').style.display = 'inline-block';

    let formyte = document.querySelector('#send-form');

    fetch(MESSAGES_ENDPOINT, {
        method: "POST",
        body: new FormData(formyte)

    }).then(refreshMessages);

    formyte.reset();
}

function pasleptiLaikrodi() {
    document.querySelector('.right-align img').style.display = 'none';
    document.querySelector('.right-align input').style.display = 'inline-block';
}