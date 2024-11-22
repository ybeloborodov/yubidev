const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// Парсинг JSON для API-запросов
app.use(bodyParser.json());

// Путь к файлам сборки Angular
const angularAppPath = path.join(__dirname, 'dist/yubidev/browser');

// Статическая выдача Angular-приложения
app.use(express.static(angularAppPath));

// Пример маршрутов для API
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from API!' });
});

app.post('/api/data', (req, res) => {
  const { name, value } = req.body;
  console.log(`Received data: Name=${name}, Value=${value}`);
  res.json({ success: true, message: 'Data received!' });
});

// Перенаправляем все остальные запросы на Angular
app.get('*', (req, res) => {
  res.sendFile(path.join(angularAppPath, 'index.html'));
});

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
