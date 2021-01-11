import express = require("express");

export interface IReadController {
    retrieve: express.RequestHandler;
    findById: express.RequestHandler;


}