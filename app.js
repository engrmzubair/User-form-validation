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

  if (!re.test(nameI.value)) {
    nameI.classList.add('is-invalid');
    nameI.classList.remove('is-valid');
  } else {
    nameI.classList.add('is-valid');
    nameI.classList.remove('is-invalid');
  }
}

function validateZip() {

  const re = /^[0-9]{5}$/;

  if (!re.test(zip.value)) {
    zip.classList.add('is-invalid');
    zip.classList.remove('is-valid');
  } else {
    zip.classList.add('is-valid');
    zip.classList.remove('is-invalid');
  }

}
function validateEmail() {

  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  if (!re.test(email.value)) {
    email.classList.add('is-invalid');
    email.classList.remove('is-valid');
  } else {
    email.classList.add('is-valid');
    email.classList.remove('is-invalid');
  }
}

function validatePhone() {
  const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

  if (!re.test(phone.value)) {
    phone.classList.add('is-invalid');
    phone.classList.remove('is-valid');
  } else {
    phone.classList.add('is-valid');
    phone.classList.remove('is-invalid');
  }
}