// controllers/song.controller.js
import express from 'express';
import { SongModel } from '../models/songModel.js';

export const SongController = express.Router();

// Route for at hente alle sange
SongController.get('/songs', async (req, res) => {
  try {
    const songs = await SongModel.getAllSongs();
    res.json(songs);
  } catch (error) {
    res.status(500).send(`Error: ${error.message}`);
  }
});

// Route for at hente en enkelt sang baseret på id
SongController.get('/songs/:id', async (req, res) => {
  try {
    const song = await SongModel.getRecordById(req.params.id);
    if (!song) {
      return res.status(404).send('Sang ikke fundet');
    }
    res.json(song);
  } catch (error) {
    res.status(500).send(`Error: ${error.message}`);
  }
});
