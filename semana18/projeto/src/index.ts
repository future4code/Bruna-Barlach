import express, {Request, Response} from "express"
import cors from "cors"
import knex from "knex"
import { create } from "domain"
import { Collection } from "typescript"
import internal from "stream"


const app = express()

app.use(express.json())
app.use(cors())

const connection = knex({
    client: "mysql",
    connection: {
        host: "35.226.146.116",
        port: 3306,
        user: "2125465-bruna-barlach",
        password: "1kvvDlPzPiGMmI5X8OfK",
        database: "paiva-2125465-bruna-barlach",
        multipleStatements: true
    }
})


class Usuario {
    id: string;
    name: string;
    age: number;
    email: string;

    constructor(name: string, age: number, email: string){
        this.id = 'XXX';
        this.name = name;
        this.age = age;
        this.email = email
    }

    sayHello(): void {
        console.log('hello')
    }
};

class Produto {
    name: string;

    constructor(name: string){
        this.name = name;
    }
};

class Viagem extends Produto {

}

class UsuarioDatabase{

    public async create(name: string, email: string, idade: number) {
        let usuario: Usuario;
        usuario = new Usuario(name, idade, email);
        // TODO quardar usuario
        await connection('Users').insert({
            id: usuario.id,
            name: usuario.name,
            email: usuario.email,
            idade: usuario.age
        });
        return usuario;
    }

    public async getAll() {
        return await connection('Users');
    }
}


app.get('/xxx', (
    req: Request,
    res: Response
): void => {
    res.send(new UsuarioDatabase().create('Bruna', 'bruna@bruna', 35))
})


// app.post()


app.listen(3003, () => {
    console.log("Servidor Pronto!!!!")
})

