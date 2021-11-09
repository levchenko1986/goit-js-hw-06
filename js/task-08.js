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
        console.log(`name: ${name}`);
        console.log(`value: ${value}`);
      });
      form.reset();
    }