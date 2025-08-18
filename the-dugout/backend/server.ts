//Serves as an entry point to the backend
import express from 'express';
import cors from 'cors';

import competitionsRouter from './routes/competitionsRouter';
import matchesRouter from './routes/matchesRouter';
import matchEventsRouter from './routes/matchEventsRouter';
import playersRouter from './routes/playersRouter';
import playerStatsRouter from './routes/playerStatsRouter';
import standingsRouter from './routes/standingsRouter';
import teamsRouter from './routes/teamsRouter';

const app = express();

//Middleware
app.use(
  cors({
    origin: 'http://localhost:4200',
    credentials: true,
  })
); //Allows frontend to call backend
app.use(express.json()); //Parse JSON request bodies

//#region Routes
app.use('/api/competitions', competitionsRouter);

app.use('/api/standings', standingsRouter);

app.use('/api/teams', teamsRouter);

app.use('/api/matches', matchesRouter);

app.use('/api/matchEvents', matchEventsRouter);

app.use('/api/players', playersRouter);

app.use('/api/playerStats', playerStatsRouter);
//#endregion

//Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
