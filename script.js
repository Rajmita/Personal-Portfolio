
function submitForm() {
  const n = document.getElementById('name').value.trim();
  const e = document.getElementById('email').value.trim();
  const m = document.getElementById('message').value.trim();
  if (n && e && m) {
    alert("Thanks for your message!");
    return true;
  }
  alert("Please fill out all fields.");
  return false;
}











