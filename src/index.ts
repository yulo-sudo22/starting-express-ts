import express, {Express, Request, Response } from "express"


const app: Express = express()

const port = 8000

const bigcry: string = 'a vida me ensinou a nunca deistir!!!'

app.get("/", (req: Request, res: Response) => {
    res.send(`<h1>KKKK ${bigcry}</h1>`)
})

app.get("/hi", (req: Request, res: Response) => {
    res.send(`<h1>hi</h1>`)
})

app.get("/sexo", (req: Request, res: Response) => {
    res.send(`sequisu`)
})

app.get("/hihi", (req: Request, res: Response) => {
    res.send(`hihi`)
})

app.listen(port, () => {
    console.log(`Open Port: ${port}`)
})
