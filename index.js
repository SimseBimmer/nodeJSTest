import express from 'express';
import dotenv from 'dotenv';

dotenv.config()

const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
    res.send('<h1>Forside</h1>');
});


app.use((req, res) => {
    res.status(404).send('<h1>404 - Siden findes ik!!!!!!!!!!!!!</h1>');
});

app.listen(PORT, () => {
    console.log(`Serveren kører på http://localhost:${PORT}`);
});







import { supabase } from 'config/supabase.config.js';


app.get('/test', async (req, res) => {

});

let { data, error } = await supabase.from('songs').select('id, title')
if (error) {
    throw new Error(error.message);
} else {
    return data;
}





