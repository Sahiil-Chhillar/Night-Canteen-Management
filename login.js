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

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var fullName = document.getElementById('login-full-name').value;
    var email = document.getElementById('login-email').value;
    var password = document.getElementById('login-password').value;
  
    if (fullName.trim() === '' || email.trim() === '' || password.trim() === '') {
        document.getElementById('login-message').textContent = 'Please fill in all fields.';
        return;
    }
  
    document.getElementById('login-message').textContent = 'Login successful! Redirecting...';
  
    setTimeout(function() {
      console.log('Form submitted');
        window.location.href = 'home.html';
    }, 2000);
  });