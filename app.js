
const express = require('express');
const path = require('path'); // Impor modul 'path'

const app = express();
const port = 3000;

// INI PERUBAHANNYA:
// Memberitahu Express untuk menyajikan file statis dari direktori 'public'.
// 'path.join' adalah cara aman untuk menggabungkan path.
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Server udah Running nih, Yuk Cek di http://localhost:${port}`);
});