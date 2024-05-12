const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/anime', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'anime.html'));
});

app.get('/manga', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'manga.html'));
});

app.get('/faq', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'faq.html'));
});

app.get('/form', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'form.html'));
});

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Valami hiba történt a szerveren!');
});

app.listen(port, () => {
    console.log(`A szerver fut a http://localhost:${port} címen`);
});
