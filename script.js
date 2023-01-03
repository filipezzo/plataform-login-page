const inputs = document.querySelectorAll('.inputs');
const button = document.querySelector('.login-button')

const handleFocus = ({ target }) => {
  const span = target.previousElementSibling;
  span.classList.add('span-activeJS');


}

const handleFocusOut = ({ target }) => {
  if (target.value === '') {
    const span = target.previousElementSibling;
    span.classList.remove('span-activeJS');
  }
}

const handleChange = () => {
  const [username, password] = inputs;

  if (username.value && password.value.length >= 8) {
    button.removeAttribute('disabled')
    button.style.backgroundColor = 'aqua';
    button.style.cursor = 'pointer';
  } else {
    button.setAttribute('disabled', '')
    button.style.backgroundColor = '#ECECEC';
    button.style.cursor = 'auto';
  }
}


inputs.forEach((input) => input.addEventListener('focus', handleFocus));

inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut));

inputs.forEach((input) => input.addEventListener('input', handleChange));

