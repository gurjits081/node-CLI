import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs/promises';

// Get the current directory path
const __dirname = dirname(fileURLToPath(import.meta.url));
const DB_PATH = `${__dirname}/../db.json`;

export const getDB = async () => {
    const db = await fs.readFile(DB_PATH, 'utf-8');
    return JSON.parse(db);
};

export const saveDB = async (db) => {
    await fs.writeFile(DB_PATH, JSON.stringify(db, null, 2));
    return db;
};

export const insertDB = async (note) => {
    const db = await getDB();
    db.notes.push(note);
    await saveDB(db);
    return note;
};
