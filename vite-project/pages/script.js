let email_inp = document.querySelector("#email")
let password_inp = document.querySelector("#password")
let btn = document.querySelector("button")

let storage = JSON.parse(localStorage.getItem("user", user

let user = {
  email: email_inp.value,
  password: password_inp.value
}

email_inp.value = storage.email
password_inp.value = storage.password

btn.onclick = () => {
  JSON.stringify(localStorage.setItem("user", user))
}
