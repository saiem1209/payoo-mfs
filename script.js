

document.getElementById('login-button').addEventListener('click', function(e){
    e.preventDefault()
    console.log('login button clicked');
    console.log(e);

    const mobileNumber = 123456789;
    const pin = 1234
    const mobileNumberValue = document.getElementById('mobile-number').value;
    const mobileNmconverted = parseInt(mobileNumber);

     const pinNumberValue = document.getElementById('pin').value;
     const pinNumberConverted = parseInt(pinNumberValue);

     if(mobileNmconverted === mobileNumber && pinNumberConverted === pin){
        window.location.href=('./home.html')
     }else{
        alert('Invalid Credintials')
     }
})