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
        msg.innerText = data.message;
        msg.className = "text-medium text-center font-semibold text-emerald-600";
        setTimeout(() => window.location.href = "../index.html", 2000);
    } else {
        msg.innerText = data.message;
        msg.className = "text-medium text-center font-semibold text-red-600";
    }
});