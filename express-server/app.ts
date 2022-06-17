import Express from "express";
import cors from "cors";

const app = Express();
const port = 4000;

app.use(Express.json());
app.use(cors());

app.post("/login", (req, res) => {
    const {username, password} = req.body;
    console.log(username,
        password)

    if(username && password){
        res.status(200).send("You are logged in!");
    }
    else{
        res.status(400).send();
    }
})

app.get("/dogs", (req, res) => {
    res.status(200).send(["Poodle", "Dachshund", "Bulldog", "Dobberman"])
})

app.listen(port);


console.log("server listening on port ", port);