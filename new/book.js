// Hàm hiển thị popup khi đặt tiệc thành công
function showPartyPopup() {
    var successPopup = document.createElement('div');
    successPopup.className = 'success-popup';
    successPopup.innerText = 'Đặt tiệc thành công! Cảm ơn bạn đã đặt tiệc.';

    document.body.appendChild(successPopup);

    setTimeout(function() {
        document.body.removeChild(successPopup); // Xóa popup sau 3 giây
    }, 3000);
    
    var formDiv = document.getElementById('tt');
    formDiv.reset(); // Xóa toàn bộ thông tin đã nhập trong form (div)
}

// Hàm kiểm tra tính hợp lệ của form
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

// Xử lý khi người dùng nhấn nút "Đặt tiệc"
document.querySelector('#ba').addEventListener('click', function() {
    if (validateForm()) {
        showPartyPopup(); // Hiển thị popup nếu form hợp lệ
    } else {
        alert('Vui lòng điền đầy đủ thông tin.'); // Thông báo nếu form không hợp lệ
    }
});
