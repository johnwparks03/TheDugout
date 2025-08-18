"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Serves as an entry point to the backend
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const competitionsRouter_1 = __importDefault(require("./routes/competitionsRouter"));
const matchesRouter_1 = __importDefault(require("./routes/matchesRouter"));
const matchEventsRouter_1 = __importDefault(require("./routes/matchEventsRouter"));
const playersRouter_1 = __importDefault(require("./routes/playersRouter"));
const playerStatsRouter_1 = __importDefault(require("./routes/playerStatsRouter"));
const standingsRouter_1 = __importDefault(require("./routes/standingsRouter"));
const teamsRouter_1 = __importDefault(require("./routes/teamsRouter"));
const app = (0, express_1.default)();
//Middleware
app.use((0, cors_1.default)({
    origin: 'http://localhost:4200',
    credentials: true,
})); //Allows frontend to call backend
app.use(express_1.default.json()); //Parse JSON request bodies
//#region Routes
app.use('/api/competitions', competitionsRouter_1.default);
app.use('/api/standings', standingsRouter_1.default);
app.use('/api/teams', teamsRouter_1.default);
app.use('/api/matches', matchesRouter_1.default);
app.use('/api/matchEvents', matchEventsRouter_1.default);
app.use('/api/players', playersRouter_1.default);
app.use('/api/playerStats', playerStatsRouter_1.default);
//#endregion
//Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
