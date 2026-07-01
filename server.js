const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));

app.post('/login', (req, res) => {
    const { identifier, password } = req.body;
    const users = JSON.parse(fs.readFileSync('users.json', 'utf8'));

    const user = users.find(u => 
        (u.username === identifier || u.email === identifier) && 
        u.password === password
    );

    if (user) {
        res.json({ success: true, message: `Login Successful! You are logged in as ${user.role}. Redirecting...` , role: user.role });
    } else {
        res.json({ success: false, message: "Invalid username, email, or password." });
    }
});

app.listen(PORT, () => console.log( `Server running at http://localhost:${PORT}` ));