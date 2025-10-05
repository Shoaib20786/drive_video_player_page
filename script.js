const phoneNumber = '';
const githubUsername = document.getElementById('github-username');

githubUsername.addEventListener('click', () => {
  // Open dialer with the phone number
  window.location.href = 'tel:' + phoneNumber;
});
