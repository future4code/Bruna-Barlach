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

app.get("/show/:id", async (req: Request, res: Response) => {
    const id = req.params.id;
    let walk = await connection('DogWalking').where('id', id);
    res.status(200).send(walk)
});

app.post("/create", async (req: Request, res: Response) => {
    let preco: Number = 0
    let pets: number = Number(req.body.pets)
    let tipo_passeio: String = req.body.tipo_passeio
    if(tipo_passeio == "longo"){
        preco = 35
        if(pets > 1){
            preco = 20 * (pets - 1)
        }
    } else if(tipo_passeio == "curto"){
        preco = 25
        if(pets > 1){
            preco = 15 * (pets - 1)
        }
    }
    await connection('DogWalking').insert({
        "id": req.body.id,
        "data": new Date(req.body.data),
        "latitude": req.body.latitude,
        "longitude": req.body.longitude,
        "pets": pets,
        "preco": preco, 
        "status": "AGENDADO"
    });
    res.status(200).send('ok')
});

app.post("/start_walk/:id", async (req: Request, res: Response) => {
    await connection('DogWalking')
        .where('id', req.params.id)
        .update({
            'horario_inicio': Date.now.toString(),
            'status': 'ANDANDO'
        });
    res.status(200).send('ok')
});

app.post("/finish_walk/:id", async (req: Request, res: Response) => {
    let inicio: Date = await connection('DogWalking')
        .where('id', req.params.id)
        .select('horario_inicio');
    let fim = new Date()
    await connection('DogWalking')
        .where('id', req.params.id)
        .update({
            'horario_fim': fim,
            'duracao': fim.getTime() - inicio.getTime(),
            'status': 'TERMINADO'
        })

    res.status(200).send('ok')
});


