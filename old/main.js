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
    open_sign({ currentTarget: document.querySelector('.sign-tab-button.sign-tab-button:first-of-type') }, 'sign-in');
    close_sign();
    var successPopup = document.createElement('div');
    successPopup.className = 'success-popup';
    successPopup.innerText = 'Đăng ký thành công';
    document.body.appendChild(successPopup);

    setTimeout(function() {
        document.body.removeChild(successPopup);
    }, 3000);
}

function handleSignInSuccess() {
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

document.addEventListener('DOMContentLoaded', () => {
    const addressData = {
        'Hồ Chí Minh': [
            {
                name: 'Fast Food - Vincom Mega Mall Grand Park',
                address: 'Khu dân cư và công viên Phước Thiện, Phường Long Bình và, Thành phố Hồ Chí Minh.',
                iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4882.919730313791!2d106.83993557588423!3d10.843306757954815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317521b596f21bef%3A0xacbd91fbe3a2dc16!2sVincom%20Mega%20Mall%20Grand%20Park!5e1!3m2!1svi!2s!4v1722361297283!5m2!1svi!2s'
            },
            {
                name: 'Fast Food - Vincom Mega Mall Thảo Điền',
                address: 'Số 161 Xa Lộ Hà Nội, P. Thảo Điền, Tp. Thủ Đức, Tp. HCM.',
                iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4883.590738951496!2d106.7384126758839!3d10.802123658717518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317526115902d29d%3A0xb17fa2961150c212!2zVmluY29tIE1lZ2EgTWFsbCBUaOG6o28gxJBp4buBbg!5e1!3m2!1svi!2s!4v1722361321066!5m2!1svi!2s'
            }
        ],
        'Hà Nội': [
            {
                name: 'Fast Food - Vincom Mega Mall Smart City',
                address: 'KĐT Vinhomes Smart City, P. Đại Mỗ, Q. Nam Từ Liêm.',
                iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4641.292307622681!2d105.7517334760124!3d21.005718688568194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad3f5eb40863%3A0xdcd0af3100a5065b!2sVincom%20Mega%20Mall%20Smart%20City!5e1!3m2!1svi!2s!4v1722361357714!5m2!1svi!2s'
            },
            {
                name: 'Fast Food - Vincom Mega Mall Royal City',
                address: 'Số 72A Nguyễn Trãi, P. Thượng Đình, Q. Thanh Xuân, Tp. Hà Nội.',
                iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4641.403565599497!2d105.81262067601224!3d21.002141488690786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad490c3331c5%3A0x38cce1b37de2c3f6!2sVincom%20Mega%20Mall%20Royal%20City!5e1!3m2!1svi!2s!4v1722361381503!5m2!1svi!2s'
            },
            {
                name: 'Fast Food - Vincom Mega Mall Times City',
                address: 'Số 458 Minh Khai, Q. Hai Bà Trưng, Hà Nội.',
                iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4641.630445055491!2d105.86499777601212!3d20.99484498894116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac04b6fcfa63%3A0x579e974a43b9f42f!2sVincom%20Mega%20Mall%20Times%20City!5e1!3m2!1svi!2s!4v1722361403298!5m2!1svi!2s'
            },
            {
                name: 'Fast Food - Vincom Mega Mall Ocean Park',
                address: 'Khu đô thị Vinhomes Ocean Park, Kiêu Kỵ, H. Gia Lâm, Hà Nội.',
                iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.9763463071504!2d105.95273752747798!3d20.992611064905443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad60e1b65fa7%3A0xca825ac326d4ba54!2sVincom%20Mega%20Mall%20Ocean%20Park!5e1!3m2!1svi!2s!4v1722361453315!5m2!1svi!2s'
            }
        ]
    };

    const addressSelect = document.querySelector('.address-select');
    const addressCardContainer = document.querySelector('.address-card-container');
    const addressMap = document.querySelector('.address-map iframe');

    addressSelect.addEventListener('change', function () {
        const selectedCity = addressSelect.value;
        const selectedAddresses = addressData[selectedCity];

        addressCardContainer.innerHTML = '';

        if (selectedAddresses) {
            selectedAddresses.forEach((address) => {
                const card = document.createElement('div');
                card.className = 'address-card';
                card.innerHTML = `
                    <p><strong>${address.name}</strong><br>${address.address}</p>
                `;
                card.addEventListener('click', () => {
                    addressMap.src = address.iframe;
                });
                addressCardContainer.appendChild(card);
            });
        } else {
            addressCardContainer.innerHTML = '<div class="address-card"><p>Xin lỗi khu vực bạn chọn hiện chúng tôi chưa có cửa hàng!</p></div>';
        }
    });
});

function tab(tabId) {
    const containers = document.querySelectorAll('.menu-container, .sale-container, .address-container, .booking-container');

    containers.forEach(container => container.style.display = 'none');

    switch (tabId) {
        case 'tab1':
            document.querySelector('.menu-container').style.display = 'block';
            break;
        case 'tab2':
            document.querySelector('.sale-container').style.display = 'block';
            break;
        case 'tab3':
            document.querySelector('.address-container').style.display = 'flex';
            break;
        case 'tab4':
            document.querySelector('.booking-container').style.display = 'block';
            break;
    }

    const tabs = document.querySelectorAll('.navbar3');
    tabs.forEach(tab => tab.classList.remove('active'));

    const activeTab = Array.from(tabs).find(tab => tab.getAttribute('onclick').includes(tabId));
    if (activeTab) {
        activeTab.classList.add('active');
    }
}

window.onload = function() {
    tab('tab1');
};
