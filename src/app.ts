// app.ts
import express from 'express';
import { request, response } from 'express';
const app = express();
app.use(express.json());
// Ruta de prueba
app.get('/ping', (req, res) => {
	res.json({ message: 'pong' });
});
export default app;
