function disableScroll() {
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
}

function enableScroll() {
    document.getElementsByTagName('body')[0].style.overflow = 'scroll';
}

function closeNavigation() {
    document.getElementsByClassName('navigation__checkbox')[0].checked = false;
}

function submitForm(e) { 
    e.preventDefault();
    var contactData = {
        name: document.getElementById("name").value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };  
    var xhttp = new XMLHttpRequest(); 
    xhttp.open('POST', '/submit', true);
    xhttp.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhttp.setRequestHeader('Content-Type', 'application/json');
    xhttp.send(JSON.stringify(contactData));
} 