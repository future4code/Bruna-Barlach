import connection from "./connection";
import express, { Request, Response } from "express";
import cors from "cors";

import { AddressInfo } from "net";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, ()=>{
    console.log("Server ready!")
 })

app.get("/index", async (req: Request, res: Response) => {
    const {proximos} = req.body;
    let result
    if(proximos){
        result = await connection('DogWalking').where('horario_inicio', '>', Date.now().toString())
    } else {
        result = await connection('DogWalking')
    }
    res.status(200).send(result)
});

app.get("/show", (req: Request, res: Response) => {
    res.status(200).send('data')
});

app.post("/create", (req: Request, res: Response) => {
    res.status(200).send('data')
});

app.post("/start_walk", (req: Request, res: Response) => {
    res.status(200).send('data')
});

app.post("/finish_walk", (req: Request, res: Response) => {
    res.status(200).send('data')
});


