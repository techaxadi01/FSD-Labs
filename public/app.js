document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const msg = document.getElementById("message");
    
    const payload = {
        identifier: document.getElementById("userIdentifier").value,
        password: document.getElementById("password").value
    };

    const response = await fetch("/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    });

    const data = await response.json();
    
    if (data.success) {
        msg.innerText = `Login Successful! You are logged in as ${data.role}. Redirecting...`;
        msg.className = "mt-4 text-xs text-center font-bold text-emerald-600";
        setTimeout(() => window.location.href = "../index.html", 2000);
    } else {
        msg.innerText = data.message;
        msg.className = "mt-4 text-xs text-center font-bold text-red-600";
    }
});