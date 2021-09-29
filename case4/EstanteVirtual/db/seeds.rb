# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
c1 = Competicao.create({
    nome: "100m classificatoria 1",
    esporte: "100m",
    done: false
})

c2 = Competicao.create({
    nome: "Dardo semifinal",
    esporte: "Dardo",
    done: false
})


Resultado.create({
    competicao: c1,
    atleta: "Joao das Neves", 
    value: "10.234", 
    unidade: "s"
})
Resultado.create({
    competicao: c2, 
    atleta: "Claudio", 
    value: "70.43", 
    unidade: "m",
})