const username = document.querySelector('#username')
const surname = document.querySelector('#surname')

const email = document.querySelector('#email')

const password = document.querySelector('#password')

const form = document.querySelector('#userForm')


form.addEventListener('submit', (event) => {

    event.preventDefault()
    console.log(username.value);
    console.log(email.value);
    console.log(password.value);
    console.log(surname.value);
})


