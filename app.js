const nameI = document.getElementById('name');
const zip = document.getElementById('zip');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

// add event listeners
nameI.addEventListener('blur', validateName);
zip.addEventListener('blur', validateZip);
email.addEventListener('blur', validateEmail);
phone.addEventListener('blur', validatePhone);

function validateName(e) {

  const re = /^[a-zA-Z]{2,10}$/;

  if (!re.test(nameI.value))
    nameI.classList.add('is-invalid');
  else
    nameI.classList.add('is-valid');

}

function validateZip() {

  const re = /^[0-9]{5}$/;

  if (!re.test(zip.value))
    zip.classList.add('is-invalid');
  else
    zip.classList.add('is-valid');


}
function validateEmail() {

  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  if (!re.test(email.value))
    email.classList.add('is-invalid');
  else
    email.classList.add('is-valid');

}

function validatePhone() {


}