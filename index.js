import express from 'express';
import dotenv from 'dotenv';
import { supabase } from './config/supabase.config.js';
import { SongController } from './Controllers/song.controller.js';
import { ArtistController } from './Controllers/artist.controller.js';
import { AlbumController } from './Controllers/album.controller.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

// Link controllere til deres respektive ruter
app.use(SongController);
app.use(ArtistController);
app.use(AlbumController);

app.use((req, res) => {
    res.status(404).send('<h1>404 - Siden findes ikke!</h1>');
});

app.listen(PORT, () => {
    console.log(`Serveren kører på http://localhost:${PORT}`);
});
