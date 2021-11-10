    const form = document.querySelector('.login-form');

    form.addEventListener('submit', onFormSubmit);
    function onFormSubmit(event) {
      event.preventDefault();
      const formEvent = event.currentTarget.elements;
      if (formEvent.email.value.length === 0 || formEvent.password.value.length === 0) {
        return alert('Все поля должны быть заполнены!!!');
      }
      const formData = new FormData(event.currentTarget);
      formData.forEach((value, name) => {
        formData.textcontect = event.currentTarget.input;
        let a = {name, value};
        console.log(a);
      });
      form.reset();
    };
