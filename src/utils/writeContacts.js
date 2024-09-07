import { promises as fs } from 'fs';
import { PATH_DB } from '../constants/contacts.js';

const writeContacts = async (contacts) => {
  try {
    const data = JSON.stringify(contacts, null, 2);
  
    await fs.writeFile(PATH_DB, data, 'utf8');
    
    console.log('Contacts have been successfully written to the file.');
  } catch (error) {
    console.error('Error writing contacts:', error);
    throw error;
  }
};

export default writeContacts;
