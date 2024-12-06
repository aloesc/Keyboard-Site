const allKeys = document.querySelectorAll('.key');
const buttnConnect = document.querySelector('#connect');
const connectMenu = document.querySelector('.connect_menu');

function sendRequestToServer(ip ,value) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', ip, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log('Успешно:', xhr.responseText);
            if (xhr.responseText === 'connected') {
                connectMenu.style.display = 'none';
            }
        } else {
            console.error('Ошибка:', xhr.status);
        }
    };
    if (value === 'connect') {
        xhr.send(JSON.stringify({connect: value}));
    } else {
        xhr.send(JSON.stringify({key: value}));
    }

}

sendRequestToServer('a');
var ip; // global variable

buttnConnect.addEventListener('click', () => {
    ip = document.querySelector('#ip').value;
    sendRequestToServer(ip, "connect");
});

allKeys.forEach((key) => {
    key.addEventListener('click', () => {
        key.classList.add('active');
        sendRequestToServer(ip ,key.textContent);
        setTimeout(() => {
            key.classList.remove('active');
        }, 100);
    });
});




 