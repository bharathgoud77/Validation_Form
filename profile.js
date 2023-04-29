const user = JSON.parse(localStorage.getItem('user'));
if (!user || !user.accessToken) {
  window.location.href = "index.html";
}

document.getElementById('name').innerText = user.name;
document.getElementById('email').innerText = user.email;
document.getElementById('password').innerText = user.password;

document.getElementById('logout-btn').addEventListener('click', () => {
  localStorage.removeItem('user');

  window.location.href = "index.html";
});