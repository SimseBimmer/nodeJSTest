import express from 'express';
import { supabase } from '../config/supabase.config.js'; // Importer supabase klient

export const ArtistController = express.Router();

// Route for at hente alle artister
ArtistController.get('/artists', async (req, res) => {
    try {
        let { data, error } = await supabase.from('artists').select('*');
        if (error) throw new Error(error.message);
        res.json(data);
    } catch (error) {
        res.status(500).send(`Error: ${error.message}`);
    }
});
