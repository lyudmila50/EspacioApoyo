import express, { Router } from "express";

import { indexGroups } from "./controllers/grupo-controlers.js";
import { login } from "./controllers/sessions-controller.js";

const app = express();
app.use(express.json());

app.post('/login', login)

    



app.listen(3000, () =>
    console.log('Bienvenido a mi apiiiiiiiiii <3'),

)


Router.get('/groups', indexGroups)