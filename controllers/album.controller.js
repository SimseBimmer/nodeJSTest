import express from 'express';
import { supabase } from '../config/supabase.config.js';

export const AlbumController = express.Router();

// Hent alle albums
AlbumController.get('/albums', async (req, res) => {
    try {
        let { data, error } = await supabase
            .from('albums')
            .select('*');
        if (error) throw new Error(error.message);
        res.json(data);
    } catch (error) {
        res.status(500).send(`Error: ${error.message}`);
    }
});

// Hent ét album via ID
AlbumController.get('/albums/:id([0-9]*)', async (req, res) => {
    try {
        let { data, error } = await supabase
            .from('albums')
            .select('*')
            .eq('id', req.params.id)
            .single();
        if (error) throw new Error(error.message);
        res.json(data);
    } catch (error) {
        res.status(500).send(`Error: ${error.message}`);
    }
});
