function checkUsername() {
  const username = document.getElementById("username").value;
  const result = document.getElementById("result");
  if (username.length === 0) {
    result.textContent = "Please enter a username.";
    return;
  }
  result.innerHTML = `Checking availability for <strong>${username}</strong>...<br><br>`;
  result.innerHTML += `✅ ${username} is available on Platform A<br>`;
  result.innerHTML += `❌ ${username} is taken on Platform B<br>`;
  result.innerHTML += `✅ ${username} is available on Platform C<br>`;
}