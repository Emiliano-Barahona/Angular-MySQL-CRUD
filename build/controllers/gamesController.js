"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GamesControllers {
    index(req, res) {
        res.json("Games");
    }
}
const gamesController = new GamesControllers();
exports.default = gamesController;
