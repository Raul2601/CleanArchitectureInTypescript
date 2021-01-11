import express = require("express");

export interface IWriteController {
    create: express.RequestHandler;
    update: express.RequestHandler;
    delete: express.RequestHandler;
}