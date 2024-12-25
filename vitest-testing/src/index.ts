import express from 'express';
import { z } from 'zod';

export const app = express();
app.use(express.json());

const sumInput = z.object({
    a: z.number(),
    b: z.number(),
});

app.get("/", (req, res)=>{
    res.send("Hello World");
})

app.post("/sum", (req, res) => {
    const parsedResponse = sumInput.safeParse(req.body);

    if (!parsedResponse.success) {
           res.status(400).json({
            message: "Invalid input"
        });
    }

    const { a, b } = req.body;
    if (typeof a !== 'number' || typeof b !== 'number') {
           res.status(400).json({
            message: "Invalid input types"
        });
    }

    const answer = a + b;

    res.json({
        answer
    });
});


app.get('/sum', (req, res) => {
    const parsedResponse = sumInput.safeParse({
        a: Number(req.headers["a"]),
        b: Number(req.headers["b"])
    });

    if(!parsedResponse.success){
        res.status(400).json({
          message: "Invalid input"
        });
    }
    const answer = Number(req.headers["a"]) + Number(req.headers["b"]);
    res.json({
        answer
    });

})
