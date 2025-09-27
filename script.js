const phoneNumber = '+916386416965';
const githubUsername = document.getElementById('github-username');

githubUsername.addEventListener('click', () => {
  // Open dialer with the phone number
  window.location.href = 'tel:' + phoneNumber;
});