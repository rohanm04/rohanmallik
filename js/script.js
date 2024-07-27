document.addEventListener('DOMContentLoaded', function() {
    var textContent = document.getElementById('scroll-txt');
    
    setInterval(() => {
        if (textContent.innerHTML == 'WEB DEVELOPER') {
            textContent.innerHTML = 'PROGRAMMER';
        }
        else if (textContent.innerHTML == 'PROGRAMMER') {
            textContent.innerHTML = 'FREELANCER';
        }
        else {
            textContent.innerHTML = 'WEB DEVELOPER';
        }
    }, 2000);
});