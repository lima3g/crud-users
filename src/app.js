import express from "express";

class App {
  constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {}
  routes() {}
}

export default new App();
