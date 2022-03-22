const seePass = document.getElementById('eye')
let password = document.getElementById('password')
const data = document.getElementsByClassName('lock')

seePass.addEventListener('click', ()=> {
  if(password.type == 'password') {
    password.type = 'text'
  }
  else if(password.type == 'text') {
    password.type = 'password'
  }
})


