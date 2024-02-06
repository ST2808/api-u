const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
  res.status(200).json({ message: 'hola .l.' });
});

app.listen(port, () => {
  console.log(`Servidor disponible en el puerto - ${port}`);
});
