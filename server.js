import express from 'express';
const app = express();

app.use(express.json()); 

const PORT = 5000;

app.post("/user", (req, res) => {
    const { name, age } = req.body;

    res.json({
        message: "User created",
        name: name,
        age: age
    });
});


app.get("/user/:id", (req, res) => {
    const id = req.params.id;

    res.json({
        message: "User ID received",
        id: id
    });
});

app.get("/search", (req, res) => {
    const keyword = req.query.keyword;
    const page = req.query.page;

    res.json({
        message: "Search request",
        keyword: keyword,
        page: page
    });
});




app.get("/headers", (req, res) => {
    const userAgent = req.headers["user-agent"];

    res.json({
        message: "Header received",
        userAgent: userAgent
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});