const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());
app.use(express.static('public'));

app.post('/login', (req, res) => {
    const { identifier, password } = req.body;
    const users = JSON.parse(fs.readFileSync('users.json', 'utf8'));

    const user = users.find(u => 
        (u.username === identifier || u.email === identifier) && 
        u.password === password
    );

    if (user) {
        res.json({ success: true, role: user.role });
    } else {
        res.json({ success: false, message: "Invalid username, email, or password." });
    }
});

app.listen(3000, () => console.log('Server running at http://localhost:3000'));