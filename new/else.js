document.getElementById('button-sign').addEventListener('click', function() {
    document.getElementById('popup-sign').style.display = 'flex';
});

function close_sign() {
    document.getElementById('popup-sign').style.display = 'none';
    clearFormFields();
}

function open_sign(evt, tabName) {
    var i, tabcontent, tabbuttons;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tabbuttons = document.getElementsByClassName("sign-tab-button");
    for (i = 0; i < tabbuttons.length; i++) {
        tabbuttons[i].classList.remove("active");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.sign-tab-button').click();
});

function handleSignUpSuccess() {
    const signUpForm = document.querySelector('#sign-up form');
    const formData = new FormData(signUpForm);

    const userData = {
        username: formData.get('user'),
        tel: formData.get('tel'),
        pass: formData.get('pass'),
        password: formData.get('password')
    };

    if (!userData.username || !userData.tel || !userData.pass || !userData.password) {
        alert("Vui lòng điền đầy đủ thông tin");
        return;
    }
    
    if (userData.pass != userData.password) {
        alert("Mật khẩu không trùng khớp");
        return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find(u => u.tel === userData.tel);

    if (user) {
        alert("Số điện thoại này đã được đăng ký trước đó");
        return;
    }

    users.push(userData);
    localStorage.setItem('users', JSON.stringify(users));

    open_sign({ currentTarget: document.querySelector('.sign-tab-button.sign-tab-button:first-of-type') }, 'sign-in');
    close_sign();
    var successPopup = document.createElement('div');
    successPopup.className = 'success-popup';
    successPopup.innerText = 'Đăng ký thành công';
    document.body.appendChild(successPopup);

    setTimeout(function() {
        document.body.removeChild(successPopup);
    }, 3000);
    
    document.getElementById('popup-sign').style.display = 'flex';
}

function handleSignInSuccess() {
    const signInForm = document.querySelector('#sign-in form');
    const formData = new FormData(signInForm);

    const userData = {
        tel: formData.get('tel1'),
        pass: formData.get('pass1')
    };

    if (!userData.tel || !userData.pass) {
        alert("Vui lòng điền đầy đủ thông tin");
        return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find(u => u.tel === userData.tel);
    if (!user) {
        alert("Số điện thoại này chưa được đăng ký trước đó");
        return;
    }

    if (user.pass !== userData.pass) {
        alert("Mật khẩu không đúng");
        return;
    }

    close_sign();
    var successPopup = document.createElement('div');
    successPopup.className = 'success-popup';
    successPopup.innerText = 'Đăng nhập thành công';
    document.body.appendChild(successPopup);

    setTimeout(function() {
        document.body.removeChild(successPopup);
    }, 3000);

    document.getElementById('button-sign').innerText = 'Đăng xuất';
    document.getElementById('button-sign').removeEventListener('click', loginHandler);
    document.getElementById('button-sign').addEventListener('click', logoutHandler);
}

function handleLogoutSuccess() {
    var logoutPopup = document.createElement('div');
    logoutPopup.className = 'logout-success-popup';
    logoutPopup.innerText = 'Đăng xuất thành công';
    document.body.appendChild(logoutPopup);

    setTimeout(function() {
        document.body.removeChild(logoutPopup);
    }, 3000);

    document.getElementById('button-sign').innerText = 'Đăng nhập';
    document.getElementById('button-sign').removeEventListener('click', logoutHandler);
    document.getElementById('button-sign').addEventListener('click', loginHandler);
}

function loginHandler() {
    document.getElementById('popup-sign').style.display = 'flex';
}

function logoutHandler() {
    handleLogoutSuccess();
}

function clearFormFields() {
    var forms = document.querySelectorAll('.sign-container form');
    forms.forEach(function(form) {
        form.reset();
    });
}

document.querySelector('#sign-up form').addEventListener('submit', function(e) {
    e.preventDefault();
    handleSignUpSuccess();
});

document.querySelector('#sign-in form').addEventListener('submit', function(e) {
    e.preventDefault();
    handleSignInSuccess();
});

function tab(tabId) {
    switch (tabId) {
        case 'tab1':
            window.location.href = 'menu.html';
            break;
        case 'tab2':
            window.location.href = 'sale.html';
            break;
        case 'tab3':
            window.location.href = 'shop.html';
            break;
        case 'tab4':
            window.location.href = 'book.html';
            break;
    }

    const tabs = document.querySelectorAll('.navbar3');
    tabs.forEach(tab => tab.classList.remove('active'));

    const activeTab = Array.from(tabs).find(tab => tab.getAttribute('onclick').includes(tabId));
    if (activeTab) {
        activeTab.classList.add('active');
    }
}