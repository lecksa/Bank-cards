let email_inp = document.querySelector("#email")
let password_inp = document.querySelector("#password")
let btn = document.querySelector("button")

let storage = JSON.parse(localStorage.getItem("user", user

let user = {
  email: email_inp.value,
  password: password_inp.value
}

email_inp.value = storage.email

if(storage.password !== password_inp.value){
  alert("Wrong!")
}  

btn.onclick = () => {
  JSON.stringify(localStorage.setItem("user", user))
}
