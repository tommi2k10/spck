const menu_container_small = document.querySelector(".menu-container-small");

fetch('https://675565b711ce847c9929f53a.mockapi.io/menu', {
    method: 'GET',
    headers: {'content-type':'application/json'},
}).then(res => {
    if (res.ok) {
        return res.json();
    }
}).then(foods => {
    console.log(foods);

    for (let i = 0; i < foods.length; i++) {
        if (foods[i].end === "2") {
            const type_title = document.createElement("div");
            type_title.classList.add("menu-topic");
            type_title.innerHTML = `<h1>${foods[i].type}</h1>`;
            menu_container_small.appendChild(type_title);
        }

        if (foods[i].end === "1") {
            const horizontal_boundary = document.createElement("div");
            horizontal_boundary.classList.add("horizontal-boundary");
            menu_container_small.appendChild(horizontal_boundary);

            const type_title = document.createElement("div");
            type_title.classList.add("menu-topic");
            type_title.innerHTML = `<h1>${foods[i].type}</h1>`;
            menu_container_small.appendChild(type_title);
        }

        const menu_card = document.createElement("div");
        menu_card.classList.add("menu-card");
        menu_card.innerHTML = `
            <img src="${foods[i].picture}">
            <h3 class="menu-card-topic">${foods[i].name}</h3>
            <button class="sale-button">Đặt ngay</button>
        `;
        menu_container_small.appendChild(menu_card);
    }
}).catch(error => {});