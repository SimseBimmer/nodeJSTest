import express from 'express';
import { supabase } from '../config/supabase.config.js';

export const ArtistController = express.Router();

// Hent alle artister
ArtistController.get('/artists', async (req, res) => {
    try {
        let { data, error } = await supabase.from('artists').select('*');
        if (error) throw new Error(error.message);
        res.json(data);
    } catch (error) {
        res.status(500).send(`Error: ${error.message}`);
    }
});

// Hent én artist via ID
ArtistController.get('/artists/:id([0-9]*)', async (req, res) => {
    try {
        let { data, error } = await supabase
            .from('artists')
            .select('*')
            .eq('id', req.params.id)
            .single();
        if (error) throw new Error(error.message);
        res.json(data);
    } catch (error) {
        res.status(500).send(`Error: ${error.message}`);
    }
});
