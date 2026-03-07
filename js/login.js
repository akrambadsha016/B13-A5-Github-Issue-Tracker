document.getElementById('sign-in').addEventListener('click', function(event){
    event.preventDefault();
    const inputName = document.getElementById('input-name').value;
    const inputPassword = document.getElementById('input-pass').value;
    
    if(inputName === 'admin' && inputPassword === 'admin123'){
        alert('Welcome');
        window.location.href = 'index.html';
    }
    else{
        alert('Invalid Information');
    }
});