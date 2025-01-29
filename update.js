import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).json({ error: "Method not allowed" });

    const newData = req.body;
    const filePath = path.join(process.cwd(), 'library.json');

    try {
        fs.writeFileSync(filePath, JSON.stringify(newData, null, 2));
        res.json({ message: "Library updated!" });
    } catch (error) {
        res.status(500).json({ error: "Failed to update JSON" });
    }
}
