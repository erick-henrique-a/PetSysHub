const express = require("express");
const rotaAnimal = require("./rotas/animal");
const cors = require("cors")

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors({origin: "*"}))

app.use('/animais', rotaAnimal);
app.listen(port, () => {console.log(`Escutando a porta ${port}`)})