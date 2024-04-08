import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';
import Routes from './Routers/router';
//import auth_router from './Routes/auth.routes';
 
export class App {

    private app: Application;

    constructor(private port?: number | string) {
        this.app = express();
        this.setting();
        this.middleware();
        this.routes();
    }

    setting() {
        this.app.set("port", this.port || 4000);
    }

    middleware() {
        this.app.use(morgan("dev"));
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes () {
        this.app.use(Routes);
    }

    async listen() {
        await this.app.listen(this.app.get("port"));
        console.log("Sever on port 4000");
    }
}