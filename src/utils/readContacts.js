import { promises as fs } from 'fs';
import { PATH_DB } from '../constants/contacts.js';

const readContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    
    const contacts = JSON.parse(data);
    
    return contacts;
  } catch (error) {
    console.error('Error reading contacts:', error);
    throw error;
  }
};

export default readContacts;