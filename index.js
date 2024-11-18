import express from 'express';
import dotenv from 'dotenv';
import { supabase } from './config/supabase.config.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send('<h1>Forside</h1>');
});

// Route for fetching songs with id and title
app.get('/songs', async (req, res) => {
    try {
        let { data, error } = await supabase.from('songs').select('id, title');
        if (error) throw new Error(error.message);
        res.json(data);  
    } catch (error) {
        res.status(500).send(`Error: ${error.message}`);
    }
});

// Route for fetching all artists with all fields
app.get('/artists', async (req, res) => {
    try {
        let { data, error } = await supabase.from('artists').select('*');
        if (error) throw new Error(error.message);
        res.json(data);
    } catch (error) {
        res.status(500).send(`Error: ${error.message}`);
    }
});

// Route for fetching albums with name, image, and artist name
app.get('/albums', async (req, res) => {
    try {
        let { data, error } = await supabase
            .from('albums')
            .select('name, image, artist_name');  
        if (error) throw new Error(error.message);
        res.json(data); 
    } catch (error) {
        res.status(500).send(`Error: ${error.message}`);
    }
});

app.use((req, res) => {
    res.status(404).send('<h1>404 - Siden findes ikke!</h1>');
});

app.listen(PORT, () => {
    console.log(`Serveren kører på http://localhost:${PORT}`);
});
