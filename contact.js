document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');

  form.addEventListener('submit', async function (event) {
    event.preventDefault();

    const formData = new FormData(form);
    const response = await fetch(form.action, {
      method: form.method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(formData)),
    });

    if (response.ok) {
      console.log('Form submitted successfully!');
      // You can add further actions here, such as displaying a success message to the user.
    } else {
      console.error('Error submitting form:', response.statusText);
      // Handle the error, such as displaying an error message to the user.
    }
  });
});
