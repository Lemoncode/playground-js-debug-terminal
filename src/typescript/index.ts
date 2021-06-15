import express from 'express';

interface Order {
  id: number;
  title: string;
}

const PORT = 3001;
const app = express();

app.get('/', async (req, res) => {
  const orders: Order[] = [
    {
      id: 1,
      title: 'Order 1',
    },
    {
      id: 2,
      title: 'Order 2',
    },
  ];
  res.send(orders);
});

app.listen(PORT, () => {
  console.log(`Backend TypeScript app running on http://localhost:${PORT}`);
});
