import express, { Application } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { apiUrl, apiRoute } from "./paths";
import myMongoConnection from "../database/connection";


class Server {
    private app: Application;
    private port: string;
    private server: any;

    constructor() {
        dotenv.config();
        this.app = express();
        //@ts-ignore
        this.port = process.env.PORT;
        this.server = require("http").createServer(this.app);
        this.mongoConnection();
        this.middlewares();
        this.routes();
    }

    async mongoConnection(){
        await myMongoConnection();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static("public"));
    }

    routes() {
        this.app.use(apiUrl.home, apiRoute.home);
        
    }

    listen() {
        this.server.listen(this.port, () => {
            console.log("We are online in the port: ", this.port);
        });
    }
}

export default Server;
