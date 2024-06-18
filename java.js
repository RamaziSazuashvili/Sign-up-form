let hook = new URLSearchParams(window.location.search);
let email = hook.get("email");
document.getElementById("show-mail").innerText = email;