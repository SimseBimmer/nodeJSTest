import express from 'express';
import dotenv from 'dotenv';
import { supabase } from './config/supabase.config.js';  // Importer supabase klient

dotenv.config();  // Indlæs miljøvariabler fra .env

const app = express();
const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send('<h1>Forside</h1>');
});

// Route for fetching albums with artist name
app.get('/albums', async (req, res) => {
    try {
        // Hent albums og relater artistens navn korrekt ved at bruge relationen mellem 'albums' og 'artists'
        let { data, error } = await supabase
            .from('albums')
            .select('id, title, release_date, artists(name)');  // Bruger relationen 'artists(name)' til at hente artistens navn

        if (error) throw new Error(error.message);
        res.json(data);  // Returner data som JSON
    } catch (error) {
        res.status(500).send(`Error: ${error.message}`);
    }
});

// Route for fetching all artists with all fields
app.get('/artists', async (req, res) => {
    try {
        let { data, error } = await supabase.from('artists').select('*');
        if (error) throw new Error(error.message);
        res.json(data);  // Returner alle artister
    } catch (error) {
        res.status(500).send(`Error: ${error.message}`);  // Fejlbesked hvis noget går galt
    }
});

// Route for fetching songs
app.get('/songs', async (req, res) => {
    try {
        // Hent sange (tilpas felterne som nødvendigt)
        let { data, error } = await supabase
            .from('songs')
            .select('*');  // Hent alle sange (eller specificer hvilke felter du ønsker)

        if (error) throw new Error(error.message);
        res.json(data);  // Returner data som JSON
    } catch (error) {
        res.status(500).send(`Error: ${error.message}`);
    }
});

// 404 Route for unknown URLs
app.use((req, res) => {
    res.status(404).send('<h1>404 - Siden findes ikke!</h1>');
});

// Start serveren
app.listen(PORT, () => {
    console.log(`Serveren kører på http://localhost:${PORT}`);
});
