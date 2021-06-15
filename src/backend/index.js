import express from 'express';

const PORT = 3000;
const app = express();

app.get('/', async (req, res) => {
  const clients = [
    {
      id: '1',
      name: 'Client 1',
    },
    {
      id: '2',
      name: 'Client 2',
    },
  ];
  res.send(clients);
});

app.listen(PORT, () => {
  console.log(`Backend app running on http://localhost:${PORT}`);
});
