'use strict';
import * as fs from 'fs';
import path from 'path';
import express from 'express';

const dir = path.resolve(process.cwd(), "routes");
const pathTofile = path.join(dir, "posts.json");

const postsJson = JSON.parse(fs.readFileSync(pathTofile));

var router = express.Router();

/* GET posts listing. */
router.get('/', function (req, res) {
    res.json(postsJson);
});

export default router;
