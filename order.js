window.onscroll = () =>{
    if (window.scrollY > 60) {
        document.querySelector('#scroll-top').classList.add('active');
        
    } else {
        document.querySelector('#scroll-top').classList.remove('active');
    }
}

function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
    setInterval(loader, 3000);
}

window.onload = fadeOut();

document.getElementById('Order-now').addEventListener('click', function(event) {
    event.preventDefault();
  
    var fullName = document.querySelector('.inputBox input[type="text"]').value;
    var email = document.querySelector('.inputBox input[type="email"]').value;
    var phone = document.querySelector('.inputBox input[type="number"]').value;
    var foodName = document.querySelector('.inputBox input[type="text"]').value;
    var address = document.querySelector('textarea').value;
  
    if (fullName.trim() === '' || email.trim() === '' || phone.trim() === '' || foodName.trim() === '' || address.trim() === '') {
        alert('Please fill in all fields.');
        return;
    }
  
    document.getElementById("order-message").textContent = 'Order successful! Redirecting...';
  
    setTimeout(function() {
        window.location.href = 'home.html';
    }, 2000);
});

