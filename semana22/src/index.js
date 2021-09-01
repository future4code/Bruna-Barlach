"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//importando express com Request e Response e cors
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var data_json_1 = __importDefault(require("./data.json"));
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get("/pokedex", function (req, res) {
    res.status(200).send(data_json_1.default);
});
app.get("pokedex/:pokedex_number", function (req, res) {
    var pokedex_number = req.params.pokedex_number;
    res.status(200).send(data_json_1.default.find(function (pokemon) {
        return pokemon["Pokedex Number"] === pokedex_number;
    }));
});
