import { describe, expect, it } from "@jest/globals";
import request from "supertest";
import { app } from "../index"

describe("POST /sum", ()=> {
    it("should return the sum of two numbers", async() => {
        const res = await request(app).post("/sum").send({
            a: 1,
            b: 2
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.answer).toBe(3);
    });

    it("should return the sum of two numbers", async()=>{
        const res = await request(app).post("/sum").send({
            a: ['asd']
        })
        
        expect(res.statusCode).toBe(400);
        expect(res.body.message).toBe("Invalid input")
    });
});

//for headers
describe("GET /sum", ()=>{
    it("should return the sum of two numbers", async()=>{
        const res = await request(app).get("/sum")
        .set({
            a: '1',
            b: '2'
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.answer).toBe(3);
    });

    it("should return the sum of two numbers", async()=>{
        const res = await request(app).get("/sum")
        .set({
            a: ['asd']
        })
        
        expect(res.statusCode).toBe(400);
        expect(res.body.message).toBe("Invalid input")
    });

})
