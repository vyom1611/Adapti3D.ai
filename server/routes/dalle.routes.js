import express from "express";
import * as dotenv from 'dotenv';
import OpenAI from "openai";

dotenv.config();

const router = express.Router();

const openai = new OpenAI({
    apiKey: process.env.API_KEY,
});

router.route('/').get((req, res) => {
    res.status(200).json({message: "Dall-E routes initialized"});
})

router.route('/').post(async (req, res) => {
    try {
        let prompt = req.body;
        const response = await openai.createImage({
            model: "dall-e-3",
            prompt: prompt,
            n: 1,
            size: "1024x1024",
        });
        const image_url = response.data.data[0].b64_json;

    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Something went wrong"})
    }
})

export default router;
