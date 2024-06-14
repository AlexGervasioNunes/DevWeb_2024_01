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