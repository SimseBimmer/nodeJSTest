import express from 'express';
import { supabase } from '../config/supabase.config.js'; // Importer supabase klient

export const AlbumController = express.Router();

// Route for at hente alle albums med artist-navn
AlbumController.get('/albums', async (req, res) => {
    try {
        let { data, error } = await supabase
            .from('albums')
            .select('id, title, release_date, artists(name)'); // Relation mellem albums og artists
        if (error) throw new Error(error.message);
        res.json(data);
    } catch (error) {
        res.status(500).send(`Error: ${error.message}`);
    }
});
