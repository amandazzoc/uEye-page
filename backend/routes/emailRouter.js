import express from 'express';
import validator from 'validator';
import Email from '../models/Email.js';

const router = express.Router();   

router.post('/subscribe', async (req, res) => {
    const { email } = req.body;

    if (!email || !validator.isEmail(email)) {
        return res.status(400).json({ error: 'Email inválido' });
    }

    try {
        const existingEmail = await Email.findOne({ email: email });
        if (existingEmail) {
            return res.status(400).json({ error: 'Este email já está cadastrado' });
        }

        const newEmail = new Email({ email: email });
        await newEmail.save();

        return res.status(201).json({ message: 'Inscrição realizada com sucesso' });
    } catch (error) {
        console.error('Erro ao salvar o email:', error);
        return res.status(500).json({ error: 'Erro interno do servidor' });
    }
})

export default router;