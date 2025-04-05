document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    console.log('Contact form submitted:', { name, email, message });
    alert('Thank you for contacting me!');

    form.reset();
  });
});
