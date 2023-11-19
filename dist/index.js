"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 8000;
const bigcry = 'a vida me ensinou a nunca deistir!!!';
app.get("/", (req, res) => {
    res.send(`<h1>KKKK ${bigcry}</h1>`);
});
app.get("/hi", (req, res) => {
    res.send(`<h1>hi</h1>`);
});
app.get("/sexo", (req, res) => {
    res.send(`sequisu`);
});
app.get("/hihi", (req, res) => {
    res.send(`hihi`);
});
app.listen(port, () => {
    console.log(`Open Port: ${port}`);
});
