document.getElementById("validation-input").onblur = function() {
    console.log(this.value.length);
    if (this.getAttribute('data-length') > this.value.length) { 
      this.classList.remove('valid');
      this.classList.add('invalid');
    } else {
      this.classList.remove('invalid');
      this.classList.add('valid');
    }
  };

  const input = document.querySelector(`#validation-input`);

input.addEventListener('blur', notFocusInput);
function notFocusInput(event) {
  if (Number(input.dataset.length) <= event.currentTarget.value.length) {
    input.classList.add('valid');
    return input.classList.remove('invalid');
  }
  return input.classList.add('invalid');
}
