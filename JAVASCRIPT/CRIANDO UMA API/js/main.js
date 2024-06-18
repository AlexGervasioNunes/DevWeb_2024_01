let usersList = document.getElementById('users-list');
let addUser = document.querySelector('#add-user-form');
let nameValue = document.getElementById('name');
let emailValue = document.getElementById('e-mail');
let btnAdd = document.querySelector('.btn');
let url_api = ' http://localhost:5000/users';
let output = '';
const renderData = (users) => {
    users.forEach((user) => {
        output += `
    <div class="card col-md-6 bg-light">
    <div class="card-body" data-id=${user.id}>
    <h5 class="card-title">${user.id}</h5>
    <h6 class="card-subtitle mb-2">${user.name}</h6>
    <p class="card-text">${user.email}</p>
    <a href="#" class="card-link" id="edit-post">Edit</a>
    <a href="#" class="card-link" id="delete-post">Delete</a>
    </div>
    </div>
    `;
        userslist.innerHTML = output;
    });
};
const getData = () => {
    try {
        fetch(url_api, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((data) => renderData(data));
    } catch (err) {
        console.log(err);
    }
};
window.onload = function () {
    getData();
};
addUser.addEventListener('submit', async (e) => {
    e.preventDefault();
    newUser = {
        name: nameValue.value,
        email: emailValue.value,
    };
    try {
        let res = await fetch(url_api, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(newUser),
        })
            .then((res) => res.json())
            .then((data) => {
                let dataArr = [];
                dataArr.push(data);
                renderData(dataArr);
                addUser.reset();
            });
    } catch (err) {
        console.log(err);
    }
});
usersList.addEventListener('click', async (e) => {
    e.preventDefault();
    let delButtonIsPressed = e.target.id == 'delete-post';
    let editButtonIsPressed = e.target.id == 'edit-post';
    let id = e.target.parentElement.dataset.id;
    if (delButtonIsPressed) {
        await fetch(`${url_api}/${id}`, {
            method: 'DELETE',
        })
            .then((res) => res.json())
            .then(() => location.reload());
    }
    console.log(e.target.parentElement.dataset.id)
});
if (editButtonIsPressed) {
    const parent = e.target.parentElement;
    let nameContent = parent.querySelector('.card-subtitle').textContent;
    let emailContent = parent.querySelector('.card-text').textContent;
    nameValue.value = nameContent;
    emailValue.value = emailContent;
}
btnAdd.addEventListener('click', async (e) => {
    e.preventDefault();
    await fetch(`${url_api}/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            name: nameValue.value,
            email: emailValue.value,
        }),
    })
        .then((res) => res.json())
        .then(() => {
            location.reload();
            addUser.reset();
        });
});