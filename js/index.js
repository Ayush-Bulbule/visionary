let playButton = document.getElementById('play-button');
let footerPlayBtn = document.getElementById('footer-play-btn');
let sendMailBtn = document.getElementById('btn-send-mail');
let contactFrm = document.getElementById('contact-frm');
let inputName = document.getElementById('inputName');
let inputEmail = document.getElementById('inputEmail');
let inputMessage = document.getElementById('inputMessage');


sendMailBtn.addEventListener('click', (a) => {
    a.preventDefault();

    let subject = inputMessage.value;
    if (subject == "") {
        alert("Input must filled Out!!");
    } else {
        contactFrm.setAttribute('action', 'mailto:parthtagalpallewar123@gmail.com?subject='
            + '&body=' + inputEmail.value);
        console.log('mailto:parthtagalpallewar123@gmail.com?subject= Name: ' + inputName.value + '\nEmail: ' + inputEmail.value
            + '&body=' + inputMessage.value)
        contactFrm.submit();
    }

});

let openlink = () => {
    location.href = "https://play.google.com/store/apps/details?id=com.reselling.visionary";
};

playButton.addEventListener('click', openlink);
footerPlayBtn.addEventListener('click', openlink);