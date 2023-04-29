const signupForm = document.getElementById('signup-form');
const signupMsg = document.getElementById('signup-msg');

document.getElementById('signup-btn').addEventListener('click', () => {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const confirmPassword = document.getElementById('confirm-password').value.trim();

  if (name === '' || email === '' || password === '' || confirmPassword === '') {
    signupMsg.innerText = 'Error: All fields are mandatory';
    signupMsg.style.color = 'red';
    return;
  }
  if (password !== confirmPassword) {
    signupMsg.innerText = 'Passwords do not match';
    signupMsg.style.color = 'red';
    return;
  }

  const accessToken = generateAccessToken();
  
  const user = { name, email, password, accessToken };

  localStorage.setItem('user', JSON.stringify(user));

  signupMsg.innerText = 'Successfully Signed Up!';
  signupMsg.style.color = 'green';
  setTimeout(() => {
    window.location.href = "profile.html";
  }, 1000);
});

function generateAccessToken() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let token = '';
  for (let i = 0; i < 16; i++) {
    token += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return token;
}