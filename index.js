import express from 'express';

const app = express();
const PORT = 4000;

// Forside (Root)
app.get('/', (req, res) => {
    res.send('<h1>Forside</h1>');
});

// Hvem er vi
app.get('/hvem-er-vi', (req, res) => {
    res.send('<h1>Hvem er vi</h1>');
});

// Hvad kan vi
app.get('/hvad-kan-vi', (req, res) => {
    res.send('<h1>Hvad kan vi</h1>');
});

// Find os
app.get('/find-os', (req, res) => {
    res.send('<h1>Find os</h1>');
});

// Produkt liste
app.get('/produkter', (req, res) => {
    res.send('<h1>Produkter</h1>');
});

// Produkt detaljer
app.get('/produkter/:id', (req, res) => {
    const productId = req.params.id;
    res.send(`<h1>Produkt Detaljer</h1>`);
});

// Kontakt side
app.get('/kontakt', (req, res) => {
    res.send('<h1>Kontakt</h1>');
});

// Håndterer sider, der ikke findes
app.use((req, res) => {
    res.status(404).send('<h1>404 - Siden findes ik!!!!!!!!!!!!!</h1>');
});

app.listen(PORT, () => {
    console.log(`Serveren kører på http://localhost:${PORT}`);
});





require('dotenv').config();

const port = process.env.PORT;
const supabaseApiKey = process.env.SUPABASE_API_KEY;

// Test udskrift for at sikre, at variablerne hentes korrekt
console.log(`Server kører på port: ${port}`);
console.log(`Supabase API Key: ${supabaseApiKey}`);
