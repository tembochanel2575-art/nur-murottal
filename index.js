const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('<h1>Mesin Nur Aktif</h1><p>Status: Siap Produksi Murottal.</p>');
});

app.listen(port, () => {
  console.log(`Aplikasi berjalan di port ${port}`);
});
