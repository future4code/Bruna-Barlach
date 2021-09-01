//importando express com Request e Response e cors
import express, { Request, Response } from "express";
import cors from "cors";

import data from "./data.json";

import { AddressInfo } from "net";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, ()=>{
    console.log("Server ready!")
 })

app.get("/pokedex", (req: Request, res: Response) => {
    res.status(200).send(data)
});

app.get("/pokedex/:pokedex_number", (req: Request, res: Response) => {
    const { pokedex_number } = req.params;
    res.status(200).send(data.find((pokemon) => {
        return pokemon["Pokedex Number"] === pokedex_number;
    }))
});