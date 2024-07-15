// filePostRoutes.js

const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const excelFile = require('xlsx');
const jsonDataSchema = require('../filePost.js');

// Configure multer for file upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "./uploadfile"));
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

// Initialize multer with the configured storage
const upload = multer({
    storage,
    limits: { fileSize: 10 * 1024 * 1024 } // 10MB limit
});

// Handle file upload
router.post("/upload", upload.single("excelFile"), async (req, res) => {
    try {
        if (!req.file) {
            // If req.file is undefined, return an error
            return res.status(400).json({ error: "No file uploaded." });
        }
        // Read the Excel file
        const workbook = excelFile.readFile(req.file.path);
        // Assuming there's only one sheet in the Excel file
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        // Convert the sheet data to JSON array
        const jsonArray = excelFile.utils.sheet_to_json(sheet);
        console.log("DATA", jsonArray);
        // Store the JSON array in MongoDB using the dynamic schema
        await jsonDataSchema.create(jsonArray);
        res.status(200).json({ message: "Data stored in MongoDB successfully." });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to read and convert Excel file." });
    }
});

module.exports = router;
