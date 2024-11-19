import express from 'express';
import dotenv from 'dotenv';
import { SongController } from './controllers/song.controller.js';
import { ArtistController } from './controllers/artist.controller.js';
import { AlbumController } from './controllers/album.controller.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware til at parse formdata
app.use(express.urlencoded({ extended: true }));

// Brug controllere
app.use(SongController);
app.use(ArtistController);
app.use(AlbumController);

// 404 route hvis ingen matcher
// app.use((req, res) => {
//   res.status(404).send('<h1>404 - Siden findes ikke!</h1>');
// });

// Starter serveren
app.listen(PORT, () => {
  console.log(`Serveren kører på http://localhost:${PORT}`);
});
