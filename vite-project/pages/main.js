let email_inp = document.querySelector("#email")
let name_inp = document.querySelector("#name")
let surname_inp = document.querySelector("#surname")
let password_inp = document.querySelector("#password")
let btn = document.querySelector("button")

let storage = JSON.parse(localStorage.getItem("user", user)

let user = {
  email: email_inp.value,
  name: name_inp.value,
  surname: surname_inp.value,
  password: password_inp.value
}

email_inp.value = storage.email
name_inp.value = storage.name
surname_inp.value = storage.surname
password_inp.value = storage.password

btn.onclick = () => {
  JSON.stringify(localStorage.setItem("user", user))
}
