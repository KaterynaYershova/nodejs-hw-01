import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const generateContacts = async (count) => {
  console.log('Starting to generate contacts...');
  const contacts = await readContacts();
  console.log('Contacts read from db:', contacts);

  for (let i = 0; i < count; i++) {
    contacts.push(createFakeContact());
  }

  await writeContacts(contacts);
  console.log(`${count} new contacts have been added.`);
};

generateContacts(5).catch((error) => console.error('Error:', error));
