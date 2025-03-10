function openLoginModal() {
  document.getElementById('loginModal').style.display = 'block';
}

function closeLoginModal() {
  document.getElementById('loginModal').style.display = 'none';
}

function openRegisterModal() {
  document.getElementById('registerModal').style.display = 'block';
}

function closeRegisterModal() {
  document.getElementById('registerModal').style.display = 'none';
}

window.onclick = function(event) {
  if (event.target == document.getElementById('loginModal')) {
    closeLoginModal();
  }
  if (event.target == document.getElementById('registerModal')) {
    closeRegisterModal();
  }
}