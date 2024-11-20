import express, { Express } from 'express';
import { DapperServer } from './setupServer';

class Application {
  public initialize(): void {
    const app: Express = express();
    const server: DapperServer = new DapperServer(app);
    server.start();
  }

}

const application: Application = new Application();
application.initialize();
