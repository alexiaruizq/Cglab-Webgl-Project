const express = require('express');
const app = express();


const port = process.env.PORT || 3000;

app.use('/src', express.static('src'));
app.use('/public', express.static('public'));
app.use('/shaders', express.static('shaders'));
app.use('/images', express.static('images'));

app.get('/', (req, res)=>{
    res.send('<h1>Hello World Node<h1/>');
});

app.get('/rotate', (req, res)=>{
    res.sendFile(`${__dirname}/public/rotate.htm`);
});

app.get('/translate', (req, res)=>{
    res.sendFile(`${__dirname}/public/translate.htm`);
});

app.get('/scale', (req, res)=>{
    res.sendFile(`${__dirname}/public/scale.htm`);
});

app.get('/matrices', (req, res)=>{
    res.sendFile(`${__dirname}/public/projectionModelViewMatrix.htm`);
});

app.get('/externalfile', (req, res)=>{
    res.sendFile(`${__dirname}/public/externalFile.htm`);
});

app.get('/textureapp', (req, res)=>{
    res.sendFile(`${__dirname}/public/textureapp.htm`);
});

app.get('/spritesheet', (req, res)=>{
    res.sendFile(`${__dirname}/public/spritesheet.htm`);
});

app.listen(port, console.log(`listening at http://localhost:${port}`));

