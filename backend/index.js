import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import emailRouter from './routes/emailRouter.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT 

app.use(cors());
app.use(express.json());

app.use('/', emailRouter);

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log('Conectado ao MongoDB');
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    });
}).catch((error) => {
    console.error('Erro ao conectar ao MongoDB:', error);
});