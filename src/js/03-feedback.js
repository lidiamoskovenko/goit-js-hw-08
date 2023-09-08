import throttle from 'lodash.throttle';

const emailInput = document.querySelector('input[name="email"]');
const messageTextarea = document.querySelector('textarea[name="message"]');
const feedbackForm = document.querySelector('.feedback-form');

const savedState = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
emailInput.value = savedState.email || '';
messageTextarea.value = savedState.message || '';

const updateLocalStorage = throttle(() => {
  const formState = {
    email: emailInput.value,
    message: messageTextarea.value
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
}, 500);

emailInput.addEventListener('input', updateLocalStorage);
messageTextarea.addEventListener('input', updateLocalStorage);

feedbackForm.addEventListener('submit', (event) => {
  event.preventDefault();

  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageTextarea.value = '';

  const formData = {
    email: emailInput.value,
    message: messageTextarea.value
  };
  console.log(formData);
});

