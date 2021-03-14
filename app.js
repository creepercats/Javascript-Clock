const express = require('express');
const app = express();

app.use(express.static('./public'));

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) =>{
    res.sendFile('public/views/index.html', { root: __dirname });
})

app.listen(PORT, () =>{
    console.log(`Listening on port ${PORT}`);
})