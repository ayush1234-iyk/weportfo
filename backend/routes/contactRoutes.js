import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

// GET all contacts
router.get("/", async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.json(contacts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST new contact
router.post("/", async (req, res) => {
    const { name, email, message } = req.body;
    const newContact = new Contact({ name, email, message });
    try {
        const savedContact = await newContact.save();
        res.status(201).json(savedContact);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

export default router;

