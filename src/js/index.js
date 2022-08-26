const form = document.getElementById('email_send')
form.addEventListener('submit', e => {
    e.preventDefault()
    let name = document.getElementById('full_name').value
    let phone = document.getElementById('phoned').value

    sendEmail(name, phone)
})

function sendEmail(name, phone) {
    Email.send({
        SecureToken: "74c06a47-6f01-4dd8-a8e3-8d5c5d81847f",
        To: 'zhumagalievkanagat@gmail.com',
        From: 'sultanhahahamaratov@gmail.com',
        Subject: "Multi Lombard contacts",
        Body: `Имя:             ${name}.<br>
               Номер телефона:  ${phone}.`
    }).then(() => {
        alert('Ваше сообщение отправлено успешно!')
        clearFields();
    });
}
function clearFields() {
    document.querySelector('#full_name').value = '';
    document.querySelector('#phoned').value = '';
}


const form2 = document.getElementById('request')
form2.addEventListener('submit', e => {
    e.preventDefault()
    let type = document.getElementById('type').value
    let phone = document.getElementById('phone').value

    sendEmail2(type, phone)
})

function sendEmail2(type, phone) {
    Email.send({
        SecureToken: "74c06a47-6f01-4dd8-a8e3-8d5c5d81847f",
        To: 'zhumagalievkanagat@gmail.com',
        From: 'sultanhahahamaratov@gmail.com',
        Subject: "Multi Lombard contacts",
        Body: `Вид техники:     ${type}.<br>
               Номер телефона:  ${phone}.`
    }).then(() => {
        alert('Ваше сообщение отправлено успешно!')
        clearFields();
    });
}