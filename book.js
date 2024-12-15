function showPartyPopup() {
    var successPopup = document.createElement('div');
    successPopup.className = 'success-popup';
    successPopup.innerText = 'Đặt tiệc thành công! Cảm ơn bạn đã đặt tiệc.';

    document.body.appendChild(successPopup);

    setTimeout(function() {
        document.body.removeChild(successPopup);
    }, 3000);
    
    var formDiv = document.getElementById('#tt');
    formDiv.reset();
}

function validateForm() {
    var isValid = true;
    var inputs = document.querySelectorAll('#tt input, #tt select');
    
    inputs.forEach(function(input) {
        if (!input.checkValidity()) {
            isValid = false;
        }
    });

    return isValid;
}

document.querySelector('#ba').addEventListener('click', function() {
    if (validateForm()) {
        showPartyPopup();
    } else {
        alert('Vui lòng điền đầy đủ thông tin.');
    }
});
